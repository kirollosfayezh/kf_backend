import { parsePhoneNumberFromString, type CountryCode } from "libphonenumber-js/max";

/**
 * Phone numbers from the chat widget, checked against Google's full numbering
 * metadata (`/max`) so a number is accepted only if that country actually
 * issues numbers of that shape — not merely "has the right number of digits".
 *
 * The site validates as the visitor types; this is the authority. It accepts
 * whatever a person might paste — Arabic-Indic digits, a `00` international
 * prefix, spaces, dashes and brackets — and returns one canonical E.164 string,
 * which is what threads are matched on. Without that, "+20 101 234 5678" and
 * "01012345678" would be two different visitors.
 */

export interface NormalizedPhone {
  /** +201012345678 */
  e164: string;
  /** ISO 3166-1 alpha-2, e.g. "EG". */
  country?: string;
  /** +20 101 234 5678 — for display. */
  international: string;
  type?: string;
}

const ARABIC_INDIC = "٠١٢٣٤٥٦٧٨٩";
const PERSIAN = "۰۱۲۳۴۵۶۷۸۹";

/** Western digits, `+` for a leading `00`/`+`, and nothing else. */
export function cleanPhoneInput(raw: string): string {
  let s = raw
    .replace(/[٠-٩]/g, (d) => String(ARABIC_INDIC.indexOf(d)))
    .replace(/[۰-۹]/g, (d) => String(PERSIAN.indexOf(d)))
    // Full-width digits and plus, as some mobile keyboards produce.
    .replace(/[０-９]/g, (d) => String(d.charCodeAt(0) - 0xff10))
    .replace(/＋/g, "+")
    .trim();
  const plus = s.startsWith("+");
  s = s.replace(/\D/g, "");
  if (plus) return `+${s}`;
  if (s.startsWith("00")) return `+${s.slice(2)}`;
  return s;
}

function isCountry(value: unknown): value is CountryCode {
  return typeof value === "string" && /^[A-Z]{2}$/.test(value);
}

export function normalizePhone(raw: unknown, countryHint?: unknown): NormalizedPhone | null {
  if (typeof raw !== "string" || raw.length > 40) return null;
  const input = cleanPhoneInput(raw);
  if (input.replace(/\D/g, "").length < 6) return null;

  const hint = isCountry(countryHint) ? countryHint : undefined;
  // Two readings of a number typed without "+": a national number in the
  // visitor's country, or an international number missing its "+"
  // ("201012345678"). When both are valid, the one that is a mobile wins —
  // people chat from mobiles — and a tie keeps the national reading.
  const attempts = input.startsWith("+") ? [input] : [input, `+${input}`];

  let best: { parsed: NonNullable<ReturnType<typeof parsePhoneNumberFromString>>; score: number } | null = null;
  for (const candidate of attempts) {
    const parsed = parsePhoneNumberFromString(candidate, hint);
    if (!parsed?.isValid()) continue;
    const type = parsed.getType();
    const score = type === "MOBILE" || type === "FIXED_LINE_OR_MOBILE" ? 2 : 1;
    if (!best || score > best.score) best = { parsed, score };
  }
  if (!best) return null;
  return {
    e164: best.parsed.number,
    country: best.parsed.country,
    international: best.parsed.formatInternational(),
    type: best.parsed.getType(),
  };
}
