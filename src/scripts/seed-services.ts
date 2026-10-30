import type { ContentItem, LocalizedText } from "../shared/types.js";
import { readFile, readdir } from "node:fs/promises";
import { loadArticles, parseArticle } from "./seed-articles.js";

/**
 * Long-form service landing pages (`/services/<slug>` on the site), authored as
 * Markdown the same way articles are: `services/<slug>.<lang>.md`.
 *
 * A service document already exists per slug (seeded from
 * `seed-content.data.json`) and its `title` / `summary` are the short card copy
 * on the /services listing. The landing page adds, without touching those:
 *
 *   body               — the full page, per language
 *   meta.headline      — the page's <h1> (front-matter `title`)
 *   meta.lede          — the intro under it (front-matter `summary`)
 *   meta.seoTitle      — <title>, when it should differ from the headline
 *   meta.seoDescription
 *
 * The meta fields are LocalizedText objects so all four languages live in one
 * document, exactly like `title` and `body`.
 */

export const SERVICES_URL = new URL("./services/", import.meta.url);

const LANGS = ["en", "ar", "de", "fr"] as const;
type Lang = (typeof LANGS)[number];

export interface ServicePage {
  slug: string;
  body: LocalizedText;
  headline: LocalizedText;
  lede: LocalizedText;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
}

export async function loadServicePages(dir: URL = SERVICES_URL): Promise<ServicePage[]> {
  // The article reader already groups `<slug>.<lang>.md` into localized fields;
  // the SEO keys are read from the raw front matter it passes through below.
  const docs = await loadArticles(dir);

  const seo = new Map<string, { seoTitle: LocalizedText; seoDescription: LocalizedText }>();
  let files: string[];
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
  for (const file of files) {
    const m = /^(.+)\.([a-z]{2})\.md$/.exec(file);
    if (!m || !(LANGS as readonly string[]).includes(m[2])) continue;
    const [, slug, lang] = m as unknown as [string, string, Lang];
    const { front } = parseArticle(await readFile(new URL(file, dir), "utf8"));
    const raw = front as Record<string, string | undefined>;
    const entry = seo.get(slug) ?? {
      seoTitle: { en: "", ar: "", de: "", fr: "" },
      seoDescription: { en: "", ar: "", de: "", fr: "" },
    };
    entry.seoTitle[lang] = raw.seoTitle ?? "";
    entry.seoDescription[lang] = raw.seoDescription ?? "";
    seo.set(slug, entry);
  }

  return docs.map((d) => ({
    slug: d.slug as string,
    body: d.body as LocalizedText,
    headline: d.title as LocalizedText,
    lede: d.summary as LocalizedText,
    seoTitle: seo.get(d.slug as string)?.seoTitle ?? { en: "", ar: "", de: "", fr: "" },
    seoDescription: seo.get(d.slug as string)?.seoDescription ?? { en: "", ar: "", de: "", fr: "" },
  }));
}

/** A stored body that is still seed copy — the one-line card summary, or
 *  empty — rather than something an editor wrote in the dashboard. */
function isSeedBody(current: string, item: ContentItem, lang: Lang): boolean {
  const c = current.trim();
  if (!c) return true;
  const summary = (item.summary?.[lang] ?? item.summary?.en ?? "").trim();
  return c === summary || c.length < 400;
}

export interface ServiceChange {
  slug: string;
  id?: string;
  langs: Partial<Record<Lang, string>>;
  patch?: Partial<ContentItem>;
}

/**
 * Works out, per service, what writing the Markdown pages would change.
 * A language whose stored body was hand-written in the dashboard (longer than
 * the seed summary and different from the file) is left alone unless `force`.
 * Meta is merged, never replaced — `points`, `seedMedia` and any editor keys
 * survive.
 */
export function planServicePages(
  stored: ContentItem[],
  pages: ServicePage[],
  { force = false }: { force?: boolean } = {},
): ServiceChange[] {
  const bySlug = new Map(stored.map((s) => [s.slug, s]));
  const out: ServiceChange[] = [];

  for (const page of pages) {
    const item = bySlug.get(page.slug);
    if (!item) {
      out.push({ slug: page.slug, langs: { en: "skipped — no service with this slug" } });
      continue;
    }
    const body: LocalizedText = {
      en: item.body?.en ?? "",
      ar: item.body?.ar ?? "",
      de: item.body?.de ?? "",
      fr: item.body?.fr ?? "",
    };
    const meta = { ...((item.meta ?? {}) as Record<string, unknown>) };
    const localized = (key: string): LocalizedText => {
      const v = meta[key] as Partial<LocalizedText> | undefined;
      return { en: v?.en ?? "", ar: v?.ar ?? "", de: v?.de ?? "", fr: v?.fr ?? "" };
    };
    const headline = localized("headline");
    const lede = localized("lede");
    const seoTitle = localized("seoTitle");
    const seoDescription = localized("seoDescription");

    const langs: ServiceChange["langs"] = {};
    let changed = false;
    for (const lang of LANGS) {
      const next = page.body[lang] ?? "";
      if (!next) {
        langs[lang] = "no file";
        continue;
      }
      const current = body[lang] ?? "";
      const same =
        current === next &&
        headline[lang] === page.headline[lang] &&
        lede[lang] === page.lede[lang] &&
        seoTitle[lang] === page.seoTitle[lang] &&
        seoDescription[lang] === page.seoDescription[lang];
      if (same) {
        langs[lang] = "no change";
        continue;
      }
      if (current !== next && !isSeedBody(current, item, lang) && !force) {
        langs[lang] = `skipped — body edited in the dashboard (${current.length} chars); --force to overwrite`;
        continue;
      }
      body[lang] = next;
      headline[lang] = page.headline[lang] ?? "";
      lede[lang] = page.lede[lang] ?? "";
      seoTitle[lang] = page.seoTitle[lang] ?? "";
      seoDescription[lang] = page.seoDescription[lang] ?? "";
      langs[lang] = `update (${current.length} → ${next.length} chars)`;
      changed = true;
    }

    out.push({
      slug: page.slug,
      id: (item as { id?: string }).id,
      langs,
      patch: changed
        ? {
            body,
            meta: { ...meta, headline, lede, seoTitle, seoDescription },
            updatedAt: new Date().toISOString(),
          }
        : undefined,
    });
  }
  return out;
}
