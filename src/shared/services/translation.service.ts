import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import type { TranslationOverride } from "../types.js";

const LANGS = ["en", "ar", "de", "fr"] as const;
type Lang = (typeof LANGS)[number];

/** Generous, but stops a request from parking a megabyte under one key. */
const MAX_KEY = 2000;
const MAX_VALUE = 5000;
const MAX_BULK = 2000;

function cleanKey(raw: unknown): string {
  if (typeof raw !== "string" || !raw.trim()) throw AppError.badRequest("A translation needs its English key.");
  if (raw.length > MAX_KEY) throw AppError.badRequest("Translation key is too long.");
  // Kept verbatim (not trimmed): it has to match the site's `t()` argument exactly.
  return raw;
}

function cleanPatch(input: Record<string, unknown>): Partial<TranslationOverride> {
  const patch: Partial<TranslationOverride> = {};
  for (const lang of LANGS) {
    const v = input[lang];
    if (v === undefined) continue;
    if (typeof v !== "string") throw AppError.badRequest(`"${lang}" must be a string.`);
    if (v.length > MAX_VALUE) throw AppError.badRequest(`"${lang}" is too long.`);
    patch[lang] = v;
  }
  patch.updatedAt = new Date().toISOString();
  return patch;
}

export function listTranslations() {
  return repos.translations.list();
}

/**
 * The public shape: one language as a flat `key -> value` map, blanks dropped,
 * which is exactly what the site merges over its shipped dictionary.
 */
export async function translationMap(lang: string): Promise<Record<string, string>> {
  if (!(LANGS as readonly string[]).includes(lang)) throw AppError.badRequest(`Unknown language: ${lang}`);
  const rows = await repos.translations.list();
  const out: Record<string, string> = {};
  for (const row of rows) {
    const v = row[lang as Lang];
    if (typeof v === "string" && v.trim()) out[row.key] = v;
  }
  return out;
}

export async function upsertTranslation(input: Record<string, unknown>): Promise<TranslationOverride> {
  const key = cleanKey(input.key);
  const patch = cleanPatch(input);

  // An override with every language blank means "back to the shipped copy" —
  // keeping an empty row would only clutter the dashboard's Edited filter.
  const saved = await repos.translations.upsert(key, patch);
  if (LANGS.every((l) => !(saved[l] ?? "").trim())) {
    await repos.translations.delete(key);
    return { key, en: "", ar: "", de: "", fr: "", updatedAt: patch.updatedAt };
  }
  return saved;
}

/** Bulk import, for pasting a whole exported sheet back in. */
export async function importTranslations(rows: unknown): Promise<{ saved: number }> {
  if (!Array.isArray(rows)) throw AppError.badRequest("Expected an array of translations.");
  if (rows.length > MAX_BULK) throw AppError.badRequest(`At most ${MAX_BULK} rows per import.`);
  let saved = 0;
  for (const row of rows) {
    if (!row || typeof row !== "object") continue;
    await upsertTranslation(row as Record<string, unknown>);
    saved++;
  }
  return { saved };
}

export async function deleteTranslation(key: unknown): Promise<void> {
  await repos.translations.delete(cleanKey(key));
}
