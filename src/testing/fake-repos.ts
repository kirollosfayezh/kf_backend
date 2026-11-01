import type { TestContext } from "node:test";
import { repos } from "../repositories/index.js";

/**
 * In-memory stand-ins for the repositories a public write touches (leads,
 * newsletter, the CRM filing and the alert feed), installed with node:test's
 * `t.mock.method` so they are restored after each test.
 *
 * `repositories/index.ts` is the persistence seam — services only ever call
 * `repos.*` — so swapping these methods exercises the real service code with
 * no database. Nothing here opens a connection.
 */

type Row = Record<string, unknown> & { id: string };
type Impl = (...args: never[]) => unknown;

export interface FakeStore {
  leads: Row[];
  contacts: Row[];
  activities: Row[];
  notifications: Row[];
  subscribers: Row[];
  linkedVisitors: { visitorIds: string[]; contactId: string }[];
}

export function installFakeRepos(t: TestContext, options: { failCrm?: boolean } = {}): FakeStore {
  const store: FakeStore = { leads: [], contacts: [], activities: [], notifications: [], subscribers: [], linkedVisitors: [] };
  let seq = 0;
  const nextId = (prefix: string) => `${prefix}-${++seq}`;
  const mock = (target: object, method: string, impl: Impl) =>
    t.mock.method(target as Record<string, Impl>, method, impl);
  const insert = (list: Row[], prefix: string, data: Record<string, unknown>) => {
    const row = { ...data, id: nextId(prefix) };
    list.push(row);
    return row;
  };
  const patch = (list: Row[], id: string, data: Record<string, unknown>, unset: string[] = []) => {
    const row = list.find((r) => r.id === id);
    if (!row) return null;
    Object.assign(row, data);
    for (const key of unset) delete row[key];
    return row;
  };

  mock(repos.leads, "create", async (data: Record<string, unknown>) => insert(store.leads, "lead", data));
  mock(repos.leads, "update", async (id: string, data: Record<string, unknown>) => patch(store.leads, id, data));

  mock(repos.contacts, "findByIdentity", async (phone?: string, email?: string) => {
    if (options.failCrm) throw new Error("CRM is down");
    return store.contacts.filter(
      (c) =>
        (phone && (c.phones as string[]).includes(phone)) || (email && (c.emails as string[]).includes(email))
    );
  });
  mock(repos.contacts, "create", async (data: Record<string, unknown>) => insert(store.contacts, "contact", data));
  mock(repos.contacts, "update", async (id: string, data: Record<string, unknown>) => patch(store.contacts, id, data));
  mock(repos.contacts, "addActivity", async (data: Record<string, unknown>) => insert(store.activities, "activity", data));
  mock(repos.visitors, "linkContact", async (visitorIds: string[], contactId: string) => {
    store.linkedVisitors.push({ visitorIds, contactId });
  });

  mock(repos.notifications, "create", async (data: Record<string, unknown>) => insert(store.notifications, "alert", data));
  // No Telegram bot configured, so `notify` stops at the dashboard feed.
  mock(repos.crmSettings, "get", async () => ({}));

  mock(repos.subscribers, "findByEmail", async (email: string) => store.subscribers.find((s) => s.email === email) ?? null);
  mock(repos.subscribers, "create", async (data: Record<string, unknown>) => insert(store.subscribers, "sub", data));
  mock(repos.subscribers, "update", async (id: string, data: Record<string, unknown>, unset?: string[]) =>
    patch(store.subscribers, id, data, unset)
  );

  return store;
}
