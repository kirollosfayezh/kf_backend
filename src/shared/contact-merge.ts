import { normalizePhone } from "./phone.js";
import type { Contact, ContactSource } from "./types.js";

/**
 * Identity matching for the CRM, as pure functions so the rules are testable
 * without a database.
 *
 * A person is the same person if they share a phone (compared in E.164, so
 * "010…" and "+20 10…" match) or an email (compared case-insensitively). A
 * phone is the stronger signal: it was validated, an email was only typed.
 */

export interface IdentityInput {
  phone?: unknown;
  /** Country hint for a phone typed without a country code. */
  phoneCountry?: unknown;
  email?: unknown;
  name?: unknown;
  company?: unknown;
  visitorId?: unknown;
  source: ContactSource;
}

export interface Identity {
  phone?: string;
  phoneCountry?: string;
  email?: string;
  name?: string;
  company?: string;
  visitorId?: string;
  source: ContactSource;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const v = value.trim().replace(/\s+/g, " ");
  return v ? v.slice(0, max) : undefined;
}

/** Cleans public input into what matching and storage use. Invalid phones/emails are dropped, not stored. */
export function cleanIdentity(input: IdentityInput): Identity {
  const phone = typeof input.phone === "string" && input.phone.trim() ? normalizePhone(input.phone, input.phoneCountry) : null;
  const email = text(input.email, 200)?.toLowerCase();
  const visitorId = text(input.visitorId, 100);
  return {
    phone: phone?.e164,
    phoneCountry: phone?.country,
    email: email && EMAIL.test(email) ? email : undefined,
    name: text(input.name, 80),
    company: text(input.company, 120),
    visitorId,
    source: input.source,
  };
}

export function hasIdentity(id: Identity): boolean {
  return !!(id.phone || id.email);
}

/**
 * Which existing contact this identity belongs to: the phone match wins over
 * the email match when they disagree.
 */
export function pickMatch<T extends { phones: string[]; emails: string[] }>(
  id: Identity,
  candidates: T[]
): T | undefined {
  if (id.phone) {
    const byPhone = candidates.find((c) => c.phones.includes(id.phone!));
    if (byPhone) return byPhone;
  }
  if (id.email) return candidates.find((c) => c.emails.includes(id.email!));
  return undefined;
}

/**
 * What to write onto an existing contact for a new sighting: new phones,
 * emails, visitor ids and sources are added; a name, company or country is
 * only filled in where the contact has none, so a typo in a later form never
 * overwrites what the team already corrected.
 */
export function mergeIdentity(existing: Pick<Contact, "phones" | "emails" | "visitorIds" | "sources" | "name" | "company" | "country">, id: Identity) {
  const add = <T>(list: T[], value: T | undefined) => (value !== undefined && !list.includes(value) ? [...list, value] : list);
  return {
    phones: add(existing.phones, id.phone),
    emails: add(existing.emails, id.email),
    visitorIds: add(existing.visitorIds, id.visitorId),
    sources: add(existing.sources, id.source),
    name: existing.name || id.name,
    company: existing.company || id.company,
    country: existing.country || id.phoneCountry,
  };
}
