import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { requestSiteRebuild } from "./deploy-hook.service.js";
import type { BrandIdentity, BrandNames, SiteSettings, SocialLinks } from "../types/index.js";

export function getSettings() {
  return repos.settings.get();
}

/** X (Twitter) usernames: 1–15 word characters. */
const X_HANDLE = /^[A-Za-z0-9_]{1,15}$/;

/**
 * Stores the X profile as "@handle" whatever form it was typed in — bare,
 * with the "@", or pasted as a profile URL — because the site uses it both as
 * a link and as the `twitter:site` tag, which wants the "@" form. Blank clears
 * it; anything that is not a valid username is rejected rather than saved as
 * a link that goes nowhere.
 */
export function normalizeXHandle(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return "";
  let handle = value.trim();
  const url = /^(?:https?:\/\/)?(?:www\.)?(?:x|twitter)\.com\/@?([^/?#]+)/i.exec(handle);
  if (url) handle = url[1];
  handle = handle.replace(/^@/, "");
  if (!X_HANDLE.test(handle)) throw AppError.badRequest("The X handle must be 1–15 letters, digits or underscores.");
  return `@${handle}`;
}

const BRAND_LANGS = ["en", "ar", "de", "fr"] as const;
/** A full https address with nothing after it that could be a second one. */
const HTTPS_URL = /^https:\/\/\S+$/;
/** schema.org `foundingDate`: a year, a month or a day. */
const FOUNDING_DATE = /^\d{4}(-\d{2}(-\d{2})?)?$/;

/**
 * Trims, drops blanks and duplicates, and refuses more than `max` entries
 * rather than cutting the list: a silent cut would return 200 for a value the
 * editor typed and lose it on the next read, which is the failure this file's
 * neighbours keep warning about.
 */
function cleanList(value: unknown, label: string, max: number): string[] {
  if (value == null) return [];
  if (!Array.isArray(value)) throw AppError.badRequest(`${label} must be a list.`);
  const seen = new Set<string>();
  for (const entry of value) {
    if (typeof entry !== "string") throw AppError.badRequest(`${label} must be a list of text entries.`);
    const trimmed = entry.trim();
    if (trimmed) seen.add(trimmed);
  }
  if (seen.size > max) throw AppError.badRequest(`${label}: at most ${max} entries.`);
  return [...seen];
}

function cleanUrls(value: unknown, label: string, max: number): string[] {
  const urls = cleanList(value, label, max);
  for (const url of urls) {
    if (!HTTPS_URL.test(url)) throw AppError.badRequest(`${label}: every link must start with https:// (got "${url}").`);
  }
  return urls;
}

/**
 * Validates the brand block the dashboard sends. Hand-written like
 * `normalizeXHandle`: the rules are few and each needs a message an editor can
 * act on. The result always has the full shape, because the block is stored
 * whole and the site reads every field.
 */
export function normalizeBrand(value: unknown): BrandIdentity {
  const input = (value ?? {}) as Record<string, unknown>;
  if (typeof input !== "object" || Array.isArray(input)) throw AppError.badRequest("brand must be an object.");

  const names = (input.alternateNames ?? {}) as Record<string, unknown>;
  if (typeof names !== "object" || Array.isArray(names)) throw AppError.badRequest("alternateNames must be an object.");
  const alternateNames = Object.fromEntries(
    BRAND_LANGS.map((lang) => [lang, cleanList(names[lang], `Also known as (${lang})`, 10)]),
  ) as unknown as BrandNames;

  const foundingDate = typeof input.foundingDate === "string" ? input.foundingDate.trim() : "";
  if (foundingDate && !FOUNDING_DATE.test(foundingDate)) {
    throw AppError.badRequest("The founding date must be a year (2020), a month (2020-06) or a day (2020-06-15).");
  }

  const rows = input.notAffiliatedWith ?? [];
  if (!Array.isArray(rows)) throw AppError.badRequest("notAffiliatedWith must be a list.");
  const notAffiliatedWith: BrandIdentity["notAffiliatedWith"] = [];
  for (const row of rows) {
    const r = (row ?? {}) as Record<string, unknown>;
    const name = typeof r.name === "string" ? r.name.trim() : "";
    const url = typeof r.url === "string" ? r.url.trim() : "";
    if (!name && !url) continue;
    if (!name || !HTTPS_URL.test(url)) {
      throw AppError.badRequest('Each "not affiliated with" row needs a name and an https:// link.');
    }
    notAffiliatedWith.push({ name, url });
  }

  return {
    alternateNames,
    foundingDate,
    founderProfiles: cleanUrls(input.founderProfiles, "Founder's profiles", 20),
    profiles: cleanUrls(input.profiles, "Company profiles", 50),
    notAffiliatedWith,
  };
}

export async function updateSettings(input: Partial<SiteSettings>) {
  const patch: Partial<SiteSettings> = { ...input };
  if (input.social && typeof input.social === "object") {
    const social: SocialLinks = { ...input.social };
    if ("x" in social) social.x = normalizeXHandle(social.x);
    patch.social = social;
  }
  if ("brand" in input) patch.brand = normalizeBrand(input.brand);
  const saved = await repos.settings.update({ ...patch, updatedAt: new Date().toISOString() });
  // Languages, contact details and social links are baked into the
  // prerendered pages and the sitemap.
  requestSiteRebuild("settings");
  return saved;
}
