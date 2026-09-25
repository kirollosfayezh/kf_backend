import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { EMAIL } from "../contact-merge.js";
import { addActivity, resolveContact } from "./contacts.service.js";
import { notify } from "./notify.service.js";
import type { Subscriber, SubscriberSource } from "../types.js";
import type { WithId } from "../../repositories/types.js";

/**
 * Newsletter sign-ups are stored, not sent — there is no email provider yet.
 * What this buys today: a list to export, a CRM contact per subscriber (so a
 * later enquiry from the same address lands on the same record) and an alert
 * when someone new signs up.
 */

const SOURCES: SubscriberSource[] = ["footer", "article", "popup"];

const str = (v: unknown, max: number) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : undefined);

export interface SubscribeInput {
  email?: unknown;
  lang?: unknown;
  source?: unknown;
  visitorId?: unknown;
}

/**
 * Idempotent: the same address again is a 200 with `created: false`, never a
 * duplicate and never an error — the form has no way to know whether the
 * person already subscribed on another device. Someone who unsubscribed and
 * signs up again is reactivated with a fresh consent date.
 */
export async function subscribe(input: SubscribeInput): Promise<{ id: string; created: boolean }> {
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
  if (!email || email.length > 200 || !EMAIL.test(email)) throw AppError.badRequest("Enter a valid email address.");
  const lang = str(input.lang, 8);
  const source = SOURCES.includes(input.source as SubscriberSource) ? (input.source as SubscriberSource) : "footer";
  const visitorId = str(input.visitorId, 100);
  const now = new Date().toISOString();

  const existing = await repos.subscribers.findByEmail(email);
  let row: WithId<Subscriber>;
  let created = false;
  let resubscribed = false;
  if (existing && !existing.unsubscribedAt) {
    row = existing;
  } else if (existing) {
    row =
      (await repos.subscribers.update(
        existing.id,
        { consentAt: now, updatedAt: now, source, ...(lang ? { lang } : {}), ...(visitorId ? { visitorId } : {}) },
        ["unsubscribedAt"]
      )) ?? existing;
    resubscribed = true;
  } else {
    row = await repos.subscribers.create({ email, lang, source, visitorId, consentAt: now, createdAt: now, updatedAt: now });
    created = true;
  }

  // Filing into the CRM must never cost the visitor their subscription.
  let contactId = row.contactId;
  try {
    const resolved = await resolveContact({ email, visitorId, source: "newsletter" });
    if (resolved) {
      contactId = resolved.contact.id;
      if (row.contactId !== contactId) await repos.subscribers.update(row.id, { contactId, updatedAt: now });
      // A repeat submit of an active address is not an event worth a timeline entry.
      if (created || resubscribed) {
        await addActivity(contactId, "newsletter", "Subscribed to the newsletter", { source, subscriberId: row.id });
      }
    }
  } catch (err) {
    console.error("CRM: could not file subscriber", err);
  }

  if (created) {
    await notify({
      type: "newsletter",
      title: `New newsletter subscriber: ${email}`,
      body: source,
      link: contactId ? `/contacts/${contactId}` : "/newsletter",
      contactId,
    });
  }
  return { id: row.id, created };
}

export function listSubscribers(query: { q?: unknown; limit?: unknown }) {
  const limit = Math.min(Math.max(Number(query.limit) || 1000, 1), 5000);
  return repos.subscribers.list({ q: str(query.q, 100), limit });
}

const CSV_COLUMNS = ["email", "lang", "source", "consentAt", "unsubscribedAt", "createdAt"] as const;

/**
 * RFC 4180: CRLF line ends, a field is quoted when it holds a comma, a quote
 * or a line break, and a quote inside it is doubled. The leading BOM is what
 * makes Excel open it as UTF-8 rather than guessing.
 */
export function subscribersCsv(rows: Subscriber[]): string {
  const cell = (v: unknown) => {
    const s = v === undefined || v === null ? "" : String(v);
    return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = [CSV_COLUMNS.join(","), ...rows.map((r) => CSV_COLUMNS.map((k) => cell(r[k])).join(","))];
  return `﻿${lines.join("\r\n")}\r\n`;
}

export async function removeSubscriber(id: string): Promise<{ id: string }> {
  if (!(await repos.subscribers.get(id))) throw AppError.notFound("Subscriber not found");
  await repos.subscribers.delete(id);
  return { id };
}
