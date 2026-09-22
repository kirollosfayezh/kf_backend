import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import type { SeoPage } from "../types.js";

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
] as const;

export type SeoKey = (typeof KEYS)[number];

export function isSeoKey(value: string): value is SeoKey {
  return (KEYS as readonly string[]).includes(value);
}

export function listSeoPages() {
  return repos.seo.list();
}

export async function upsertSeoPage(key: string, input: Partial<SeoPage>): Promise<SeoPage> {
  if (!isSeoKey(key)) throw AppError.notFound(`Unknown SEO page: ${key}`);

  // Only the fields the dashboard owns — never let a request write `key` itself
  // or an arbitrary property onto the document.
  const patch: Partial<SeoPage> = {
    title: typeof input.title === "string" ? input.title.trim() : undefined,
    description: typeof input.description === "string" ? input.description.trim() : undefined,
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

  return repos.seo.upsert(key, patch);
}
