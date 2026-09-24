import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { channelOf } from "../tracking.js";
import { ChatThreadModel } from "../../models/chat.model.js";

const str = (v: unknown, max = 100) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : undefined);

/** "Online now" means a beacon in the last five minutes. */
const ONLINE_MS = 5 * 60 * 1000;

export async function listVisitors(query: Record<string, unknown>) {
  const identified = query.identified === "true" ? true : query.identified === "false" ? false : undefined;
  const consent = str(query.consent);
  if (consent && !["granted", "denied", "none"].includes(consent)) throw AppError.badRequest("Unknown consent filter");
  const days = Number(query.days);
  const since =
    query.online === "true"
      ? new Date(Date.now() - ONLINE_MS).toISOString()
      : Number.isFinite(days) && days > 0
        ? new Date(Date.now() - Math.min(days, 400) * 86400000).toISOString()
        : undefined;
  const limit = Math.min(Math.max(Number(query.limit) || 300, 1), 1000);

  const visitors = await repos.visitors.list({ identified, consent, q: str(query.q), since, limit });
  const names = await repos.contacts.namesFor([...new Set(visitors.map((v) => v.contactId).filter((x): x is string => !!x))]);
  const onlineSince = Date.now() - ONLINE_MS;
  return visitors.map((v) => ({
    ...v,
    contactName: v.contactId ? names[v.contactId] : undefined,
    channel: channelOf(v.firstTouch),
    online: Date.parse(v.lastSeenAt) >= onlineSince,
  }));
}

export async function getVisitorDetail(visitorId: string) {
  const visitor = await repos.visitors.get(visitorId);
  if (!visitor) throw AppError.notFound("Visitor not found");
  const [journey, consent, contact, thread] = await Promise.all([
    repos.visitors.journey([visitorId]),
    repos.consent.byVisitors([visitorId]),
    visitor.contactId ? repos.contacts.get(visitor.contactId) : null,
    ChatThreadModel.findOne({ visitorId }).lean().exec(),
  ]);
  return {
    visitor: { ...visitor, channel: channelOf(visitor.firstTouch) },
    journey,
    consent,
    contact,
    chat: thread ? { visitorId: thread.visitorId, phone: thread.phone, lastMessageAt: thread.lastMessageAt } : null,
  };
}

export async function listConsent(query: Record<string, unknown>) {
  const status = str(query.status);
  if (status && !["granted", "denied"].includes(status)) throw AppError.badRequest("Unknown status");
  const days = Math.min(Math.max(Number(query.days) || 30, 1), 3650);
  const since = new Date(Date.now() - days * 86400000).toISOString();
  const [records, totals] = await Promise.all([
    repos.consent.list({ status, visitorId: str(query.visitorId), limit: Math.min(Number(query.limit) || 500, 5000) }),
    repos.consent.totals(since),
  ]);
  return { records, totals, days };
}
