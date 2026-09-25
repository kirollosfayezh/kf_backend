import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { requestSiteRebuild } from "./deploy-hook.service.js";
import type { SeoLocalizedText, SeoPage } from "../types.js";

/** Keys the site's PAGES table defines. Anything else is rejected, so a typo in
 *  the dashboard cannot create an override that silently never applies. */
const KEYS = [
  "home",
  "services",
  "solutions",
  "projects",
  "about",
  "contact",
  "blog",
  "campaign",
  "book",
] as const;

const LANGS = ["en", "ar", "de", "fr"] as const;

export type SeoKey = (typeof KEYS)[number];

export function isSeoKey(value: string): value is SeoKey {
  return (KEYS as readonly string[]).includes(value);
}

export function listSeoPages() {
  return repos.seo.list();
}

/**
 * Merges what the dashboard sent onto what is stored, one language at a time.
 *
 * A plain string is the pre-localisation request shape and still means the
 * English text. An object is a partial: a language that is present replaces
 * the stored one (a blank string clears it, so the site falls back), and one
 * that is absent is left alone — the Arabic tab can be saved without resending
 * the German. The result is always the full object, because the row may still
 * hold a legacy string and only a whole-object `$set` can replace that.
 */
export function mergeLocalized(current: SeoLocalizedText | undefined, incoming: unknown): SeoLocalizedText {
  const merged: SeoLocalizedText = { en: "", ar: "", de: "", fr: "", ...current };
  if (typeof incoming === "string") {
    merged.en = incoming.trim();
  } else if (incoming && typeof incoming === "object") {
    const input = incoming as Record<string, unknown>;
    for (const lang of LANGS) {
      if (typeof input[lang] === "string") merged[lang] = (input[lang] as string).trim();
    }
  }
  return merged;
}

export async function upsertSeoPage(key: string, input: Partial<SeoPage>): Promise<SeoPage> {
  if (!isSeoKey(key)) throw AppError.notFound(`Unknown SEO page: ${key}`);

  const existing = await repos.seo.get(key);

  // Only the fields the dashboard owns — never let a request write `key` itself
  // or an arbitrary property onto the document. Title and description are
  // always written in full: that is what migrates a legacy string row.
  const patch: Partial<SeoPage> = {
    title: mergeLocalized(existing?.title, input.title),
    description: mergeLocalized(existing?.description, input.description),
    keywords: typeof input.keywords === "string" ? input.keywords.trim() : undefined,
    image: typeof input.image === "string" ? input.image.trim() : undefined,
    noindex:
      input.noindex === true || input.noindex === false || input.noindex === null
        ? input.noindex
        : undefined,
    updatedAt: new Date().toISOString(),
  };

  for (const k of Object.keys(patch) as (keyof SeoPage)[]) {
    if (patch[k] === undefined) delete patch[k];
  }

  const saved = await repos.seo.upsert(key, patch);
  // The override is baked into the prerendered <head>; the site must rebuild.
  requestSiteRebuild(`seo ${key}`);
  return saved;
}
