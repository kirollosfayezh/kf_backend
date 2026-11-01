import { z } from "zod";

/**
 * Request bodies of the unauthenticated write endpoints.
 *
 * These schemas check *shape* only. Business rules — "name is required", "enter
 * a valid email address", phone normalisation, length caps — stay in the
 * services, which own their error messages and are also called from scripts.
 * Unknown keys are stripped, exactly as the old destructuring ignored them.
 */

/** A free-text field the service will `.trim()`: a string, or absent/null. */
const text = (field: string) => z.string({ error: `${field} must be text` }).nullish();

export const leadBodySchema = z.object({
  source: z.enum(["contact", "campaign"], { error: 'source must be "contact" or "campaign"' }),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  company: text("company"),
  projectType: text("projectType"),
  budget: text("budget"),
  message: text("message"),
  // The service keeps a string and silently drops anything else, so any value
  // is accepted here — a stale widget must never lose a lead over it.
  visitorId: z.unknown().optional(),
});

/**
 * The newsletter service validates and normalises every field itself (it is
 * deliberately forgiving: an unknown `source` becomes "footer"), so each field
 * is passed through untouched. `website` is the honeypot.
 */
export const newsletterBodySchema = z.object({
  email: z.unknown().optional(),
  lang: z.unknown().optional(),
  source: z.unknown().optional(),
  visitorId: z.unknown().optional(),
  website: z.unknown().optional(),
});

/**
 * The form renders a `website` field no person can see, so a filled-in value
 * is a bot.
 */
export function isHoneypotFilled(website: unknown): boolean {
  return typeof website === "string" && website.trim() !== "";
}
