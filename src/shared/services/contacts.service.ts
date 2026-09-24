import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { cleanIdentity, hasIdentity, mergeIdentity, pickMatch, type IdentityInput } from "../contact-merge.js";
import { channelOf } from "../tracking.js";
import { ChatMessageModel, ChatThreadModel } from "../../models/chat.model.js";
import { LeadModel } from "../../models/lead.model.js";
import { CONTACT_STAGES, type Activity, type ActivityType, type Contact, type ContactStage } from "../types.js";
import type { WithId } from "../../repositories/types.js";

/**
 * The CRM's one entry point for "someone told us who they are".
 *
 * Chat (phone), the contact and campaign forms (email + optional phone),
 * bookings and accepted quotes all call `resolveContact`. It finds the person
 * by phone or email, or creates them, and attaches the browser they are using —
 * which is what links everything they browsed before to their record.
 */
export async function resolveContact(
  input: IdentityInput & { extraVisitorIds?: string[] }
): Promise<{ contact: WithId<Contact>; created: boolean } | null> {
  const id = cleanIdentity(input);
  if (!hasIdentity(id)) return null;

  const now = new Date().toISOString();
  const match = pickMatch(id, await repos.contacts.findByIdentity(id.phone, id.email));
  const extra = (input.extraVisitorIds ?? []).filter(Boolean);

  let contact: WithId<Contact>;
  let created = false;
  if (match) {
    const merged = mergeIdentity(match, id);
    for (const v of extra) if (!merged.visitorIds.includes(v)) merged.visitorIds.push(v);
    contact = (await repos.contacts.update(match.id, { ...merged, updatedAt: now }))!;
  } else {
    contact = await repos.contacts.create({
      name: id.name,
      phones: id.phone ? [id.phone] : [],
      emails: id.email ? [id.email] : [],
      company: id.company,
      country: id.phoneCountry,
      sources: [id.source],
      visitorIds: [...new Set([...(id.visitorId ? [id.visitorId] : []), ...extra])],
      stage: "new",
      currency: "EGP",
      tags: [],
      lastActivityAt: now,
      createdAt: now,
      updatedAt: now,
    });
    created = true;
    await addActivity(contact.id, "contact_created", `New contact from ${id.source}`, { source: id.source });
  }

  await repos.visitors.linkContact(contact.visitorIds, contact.id);
  return { contact, created };
}

export function addActivity(
  contactId: string,
  type: ActivityType,
  text?: string,
  meta?: Record<string, unknown>,
  by = "system"
) {
  const activity: Activity = { contactId, type, text: text?.slice(0, 5000), meta, by, at: new Date().toISOString() };
  return repos.contacts.addActivity(activity);
}

export function listContacts(query: { q?: unknown; stage?: unknown; source?: unknown; limit?: unknown }) {
  const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim().slice(0, 100) : undefined);
  const limit = Math.min(Math.max(Number(query.limit) || 300, 1), 1000);
  const stage = str(query.stage);
  if (stage && !(CONTACT_STAGES as readonly string[]).includes(stage)) throw AppError.badRequest("Unknown stage");
  return repos.contacts.list({ q: str(query.q), stage, source: str(query.source), limit });
}

/** Everything the contact page shows, in one request. */
export async function getContactDetail(id: string) {
  const contact = await repos.contacts.get(id);
  if (!contact) throw AppError.notFound("Contact not found");
  const [activities, visitors, journey, consent, threads, leads] = await Promise.all([
    repos.contacts.activities(id),
    repos.visitors.byIds(contact.visitorIds),
    repos.visitors.journey(contact.visitorIds),
    repos.consent.byVisitors(contact.visitorIds),
    ChatThreadModel.find({
      $or: [{ visitorId: { $in: contact.visitorIds } }, ...(contact.phones.length ? [{ phone: { $in: contact.phones } }] : [])],
    })
      .sort({ lastMessageAt: -1 })
      .lean()
      .exec(),
    LeadModel.find({
      $or: [{ contactId: id }, ...(contact.emails.length ? [{ email: { $in: contact.emails } }] : [])],
    })
      .sort({ createdAt: -1 })
      .lean()
      .exec(),
  ]);
  const strip = <T extends { _id?: unknown }>(d: T) => {
    const { _id, ...rest } = d;
    return { id: String(_id), ...rest };
  };
  return {
    contact,
    activities,
    visitors: visitors.map((v) => ({ ...v, channel: channelOf(v.firstTouch) })),
    journey,
    consent,
    threads: threads.map(strip),
    leads: leads.map(strip),
  };
}

const STAGE_LABEL: Record<ContactStage, string> = {
  new: "New",
  qualified: "Qualified",
  proposal: "Proposal",
  won: "Won",
  lost: "Lost",
};

/** Dashboard edits. Only these fields are writable; a stage change is logged. */
export async function updateContact(id: string, input: Record<string, unknown>, by: string) {
  const existing = await repos.contacts.get(id);
  if (!existing) throw AppError.notFound("Contact not found");

  const patch: Partial<Contact> = {};
  const unset: string[] = [];
  const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : undefined);

  if ("name" in input) patch.name = text(input.name, 80);
  if ("company" in input) patch.company = text(input.company, 120);
  if ("currency" in input && typeof input.currency === "string" && /^[A-Z]{3}$/.test(input.currency)) patch.currency = input.currency;
  if ("value" in input) {
    const n = Number(input.value);
    if (input.value === null || input.value === "") unset.push("value");
    else if (Number.isFinite(n) && n >= 0) patch.value = Math.round(n * 100) / 100;
    else throw AppError.badRequest("Value must be a positive number");
  }
  if ("tags" in input) {
    if (!Array.isArray(input.tags)) throw AppError.badRequest("tags must be a list");
    patch.tags = [...new Set(input.tags.map((t) => text(t, 30)).filter((t): t is string => !!t))].slice(0, 20);
  }
  if ("nextFollowUpAt" in input) {
    if (!input.nextFollowUpAt) unset.push("nextFollowUpAt");
    else {
      const d = new Date(String(input.nextFollowUpAt));
      if (Number.isNaN(d.getTime())) throw AppError.badRequest("Invalid follow-up date");
      patch.nextFollowUpAt = d.toISOString();
    }
  }
  if ("lostReason" in input) patch.lostReason = text(input.lostReason, 300);
  if ("stage" in input) {
    if (!(CONTACT_STAGES as readonly string[]).includes(String(input.stage))) throw AppError.badRequest("Unknown stage");
    patch.stage = input.stage as ContactStage;
  }
  // Phones and emails are edited as whole lists; each entry is validated.
  if ("phones" in input || "emails" in input) {
    const id = (p?: unknown, e?: unknown) => cleanIdentity({ phone: p, email: e, source: "manual" });
    if ("phones" in input) {
      if (!Array.isArray(input.phones)) throw AppError.badRequest("phones must be a list");
      const phones = input.phones.map((p) => id(p).phone);
      if (phones.some((p) => !p)) throw AppError.badRequest("One of the phone numbers is not valid.");
      patch.phones = [...new Set(phones as string[])];
    }
    if ("emails" in input) {
      if (!Array.isArray(input.emails)) throw AppError.badRequest("emails must be a list");
      const emails = input.emails.map((e) => id(undefined, e).email);
      if (emails.some((e) => !e)) throw AppError.badRequest("One of the email addresses is not valid.");
      patch.emails = [...new Set(emails as string[])];
    }
  }

  patch.updatedAt = new Date().toISOString();
  const updated = await repos.contacts.update(id, patch, unset);
  if (patch.stage && patch.stage !== existing.stage) {
    await addActivity(
      id,
      "stage_change",
      `${STAGE_LABEL[existing.stage]} → ${STAGE_LABEL[patch.stage]}${patch.stage === "lost" && patch.lostReason ? ` (${patch.lostReason})` : ""}`,
      { from: existing.stage, to: patch.stage },
      by
    );
  }
  return updated;
}

/** A contact added by hand in the dashboard (a phone call, a referral…). */
export async function createManualContact(input: Record<string, unknown>, by: string) {
  const resolved = await resolveContact({
    phone: input.phone,
    phoneCountry: input.phoneCountry,
    email: input.email,
    name: input.name,
    company: input.company,
    source: "manual",
  });
  if (!resolved) throw AppError.badRequest("Add a valid phone number or email.");
  if (!resolved.created) return resolved.contact;
  await addActivity(resolved.contact.id, "note", "Added manually from the dashboard", undefined, by);
  return resolved.contact;
}

export async function addNote(id: string, text: unknown, by: string) {
  if (typeof text !== "string" || !text.trim()) throw AppError.badRequest("Write a note first.");
  if (!(await repos.contacts.get(id))) throw AppError.notFound("Contact not found");
  return addActivity(id, "note", text.trim(), undefined, by);
}

/**
 * GDPR erasure: the contact, their timeline, their leads, their chats and the
 * browsing history of every browser linked to them. Consent records are kept —
 * they hold no personal data once the visitor profile is gone, and they are
 * the proof of what was agreed.
 */
export async function eraseContact(id: string) {
  const contact = await repos.contacts.get(id);
  if (!contact) throw AppError.notFound("Contact not found");
  const threads = await ChatThreadModel.find({
    $or: [{ visitorId: { $in: contact.visitorIds } }, ...(contact.phones.length ? [{ phone: { $in: contact.phones } }] : [])],
  })
    .lean()
    .exec();
  const threadIds = threads.map((t) => t.visitorId);
  await Promise.all([
    ChatMessageModel.deleteMany({ threadId: { $in: threadIds } }).exec(),
    ChatThreadModel.deleteMany({ visitorId: { $in: threadIds } }).exec(),
    LeadModel.deleteMany({ $or: [{ contactId: id }, ...(contact.emails.length ? [{ email: { $in: contact.emails } }] : [])] }).exec(),
    repos.visitors.deleteMany(contact.visitorIds),
    repos.quotes.deleteForContact(id),
    repos.bookings.deleteForContact(id),
  ]);
  await repos.contacts.delete(id);
  return { id };
}

/** The Overview's CRM numbers. */
export async function crmOverview() {
  const now = Date.now();
  const iso = (ms: number) => new Date(ms).toISOString();
  const day = 24 * 60 * 60 * 1000;
  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  const [stages, newContacts7, newContacts30, visitors30, online, followUps, recent] = await Promise.all([
    repos.contacts.stageTotals(),
    repos.contacts.countSince(iso(now - 7 * day)),
    repos.contacts.countSince(iso(now - 30 * day)),
    repos.visitors.countSince(iso(now - 30 * day)),
    repos.visitors.countSince(iso(now - 5 * 60 * 1000)),
    repos.contacts.followUpsDue(endOfToday.toISOString()),
    repos.contacts.recentActivities(15),
  ]);
  const names = await repos.contacts.namesFor([...new Set(recent.map((a) => a.contactId))]);
  return {
    stages,
    /** Open deals' value per currency, e.g. { EGP: 120000, EUR: 4500 }. */
    openPipeline: stages
      .filter((s) => !["won", "lost"].includes(s.stage))
      .reduce<Record<string, number>>((acc, s) => {
        for (const [cur, v] of Object.entries(s.values)) acc[cur] = (acc[cur] ?? 0) + v;
        return acc;
      }, {}),
    newContacts7,
    newContacts30,
    visitors30,
    conversion30: visitors30 ? newContacts30 / visitors30 : 0,
    online,
    followUps,
    recent: recent.map((a) => ({ ...a, contactName: names[a.contactId] ?? "Contact" })),
  };
}
