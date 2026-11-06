import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import type { ContentItem, LocalizedText } from "../shared/types/index.js";
import { parseArticle } from "./seed-articles.js";

/**
 * The country landing pages (`/saudi-arabia`, `/uae` and the `/gulf` hub on
 * the site), authored as Markdown the same way the service pages are:
 * `markets/<slug>.<lang>.md`, in English and Arabic only.
 *
 * A market has no card — nothing on the site lists them — so unlike a service
 * the document *is* the page:
 *
 *   title               — the page's <h1> (front-matter `title`)
 *   summary             — the intro under it (front-matter `summary`)
 *   body                — the page in Markdown, ending in its FAQ
 *   meta.seoTitle       — <title>
 *   meta.seoDescription
 *   meta.sourceHash     — per language, a hash of the title, summary and body
 *                         this script last wrote, so the next run can tell its
 *                         own text from an edit made in the dashboard
 *
 * The SEO fields are LocalizedText objects in `meta`, exactly as on services.
 */

export const MARKETS_URL = new URL("./markets/", import.meta.url);

/** German and French versions are deliberately never written: there is no
 *  audience for them, and machine-translated country pages read as scaled content. */
export const MARKET_LANGS = ["en", "ar"] as const;
export type MarketLang = (typeof MARKET_LANGS)[number];
const isMarketLang = (s: string): s is MarketLang => (MARKET_LANGS as readonly string[]).includes(s);

/**
 * The slugs the site has a route for (`MARKETS` in kf_site's
 * `src/lib/seo/market-page.ts`), in the order the dashboard lists them. A file
 * for any other slug is still written, but the site cannot show it.
 */
export const KNOWN_MARKETS = ["saudi-arabia", "uae", "gulf"] as const;

export interface MarketPage {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  body: LocalizedText;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
}

const blank = (): LocalizedText => ({ en: "", ar: "", de: "", fr: "" });

/** Reads `markets/` into one page per slug. A slug without its English file is skipped: English is the record. */
export async function loadMarketPages(dir: URL = MARKETS_URL): Promise<MarketPage[]> {
  let files: string[];
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith(".md")).sort();
  } catch {
    return []; // no markets directory yet — not an error
  }

  const bySlug = new Map<string, MarketPage>();
  for (const file of files) {
    const m = /^(.+)\.([a-z]{2})\.md$/.exec(file);
    if (!m) continue;
    const [, slug, lang] = m;
    if (!isMarketLang(lang)) {
      console.warn(`Skipping markets/${file}: market pages are written in English and Arabic only`);
      continue;
    }
    const { front, body } = parseArticle(await readFile(new URL(file, dir), "utf8"));
    const raw = front as Record<string, string | undefined>;
    const page = bySlug.get(slug) ?? {
      slug,
      title: blank(),
      summary: blank(),
      body: blank(),
      seoTitle: blank(),
      seoDescription: blank(),
    };
    page.title[lang] = raw.title ?? "";
    page.summary[lang] = raw.summary ?? "";
    page.body[lang] = body;
    page.seoTitle[lang] = raw.seoTitle ?? "";
    page.seoDescription[lang] = raw.seoDescription ?? "";
    bySlug.set(slug, page);
  }

  const out: MarketPage[] = [];
  for (const page of bySlug.values()) {
    if (!page.body.en.trim()) {
      console.warn(`Skipping "${page.slug}": no markets/${page.slug}.en.md`);
      continue;
    }
    out.push(page);
  }
  return out;
}

/** What a run wrote for one language: its title, summary and body, hashed. */
export function sourceHash(title: string, summary: string, body: string): string {
  return createHash("sha256").update(JSON.stringify([title, summary, body])).digest("hex").slice(0, 16);
}

/** The headings the site's FAQ parser (`kf_site/src/lib/faq.ts`) turns into FAQPage data. */
const FAQ_HEADING = /^##\s+(common questions|frequently asked questions|أسئلة شائعة|أسئلة متكررة)\s*$/im;

/**
 * What the site would make of one language of a page, for the dry run to show
 * before anything is written: the limits the SEO audit and Google apply, and
 * whether the FAQ will be picked up. Advice only; nothing is refused.
 */
export function lintMarketPage(page: MarketPage, lang: MarketLang): string[] {
  const out: string[] = [];
  const seoTitle = page.seoTitle[lang].trim();
  const seoDescription = page.seoDescription[lang].trim();
  if (!page.title[lang].trim()) out.push("no title");
  if (!seoTitle) out.push("no seoTitle");
  else {
    // Past 60 the site drops the trailing brand from the <title> (fitTitle).
    if (seoTitle.length > 60) out.push(`seoTitle is ${seoTitle.length} chars (over 60 the "| KF Tech" suffix is dropped)`);
    if (!/KF ?Tech/.test(seoTitle)) out.push('seoTitle lacks "KF Tech"');
  }
  if (!seoDescription) out.push("no seoDescription");
  else if (seoDescription.length > 160) out.push(`seoDescription is ${seoDescription.length} chars (over 160 it is cut)`);
  if (!FAQ_HEADING.test(page.body[lang])) out.push("no FAQ heading, so no FAQPage data");
  if (lang === "ar" && /^[A-Za-z]/.test(page.title[lang].trim())) out.push("Arabic title starts with a Latin word");
  return out;
}

export interface MarketChange {
  slug: string;
  /** The stored document, when there is one. */
  id?: string;
  action: "create" | "update" | "none";
  langs: Partial<Record<MarketLang, string>>;
  /** Whether the page is published once the change is written. */
  published: boolean;
  /** The new document, for `create`. */
  create?: ContentItem;
  /** The fields to write, for `update`. */
  patch?: Partial<ContentItem>;
}

const localized = (v: unknown): LocalizedText => {
  const t = (v ?? {}) as Partial<LocalizedText>;
  return { en: t.en ?? "", ar: t.ar ?? "", de: t.de ?? "", fr: t.fr ?? "" };
};

/**
 * Works out, per market, what writing the Markdown pages would change.
 *
 * - A slug with no document yet is created — as a draft, unless `publish`:
 *   going live is the owner's call, made in the dashboard or with `--publish`.
 * - An existing document gets the file's title, summary, body and SEO fields
 *   per language. A language whose stored text was changed in the dashboard
 *   since this script last wrote it is left alone unless `force`.
 * - `published` changes only with `publish`; `order`, `media` and any other
 *   meta key are never touched, and German or French text an editor typed
 *   stays as it is.
 */
export function planMarketPages(
  stored: ContentItem[],
  pages: MarketPage[],
  { force = false, publish = false, now = new Date().toISOString() }: { force?: boolean; publish?: boolean; now?: string } = {},
): MarketChange[] {
  const bySlug = new Map(stored.map((s) => [s.slug, s]));
  const out: MarketChange[] = [];

  for (const page of pages) {
    const item = bySlug.get(page.slug);
    const hashes: Partial<Record<MarketLang, string>> = {};
    const langs: MarketChange["langs"] = {};

    if (!item) {
      for (const lang of MARKET_LANGS) {
        if (!page.body[lang].trim()) {
          langs[lang] = "no file";
          continue;
        }
        hashes[lang] = sourceHash(page.title[lang], page.summary[lang], page.body[lang]);
        langs[lang] = `create (${page.body[lang].length} chars)`;
      }
      const known = (KNOWN_MARKETS as readonly string[]).indexOf(page.slug);
      out.push({
        slug: page.slug,
        action: "create",
        langs,
        published: publish,
        create: {
          slug: page.slug,
          published: publish,
          order: known >= 0 ? known + 1 : 0,
          title: page.title,
          summary: page.summary,
          body: page.body,
          media: [],
          meta: { seoTitle: page.seoTitle, seoDescription: page.seoDescription, sourceHash: hashes },
          createdAt: now,
          updatedAt: now,
        },
      });
      continue;
    }

    const meta = { ...((item.meta ?? {}) as Record<string, unknown>) };
    const title = localized(item.title);
    const summary = localized(item.summary);
    const body = localized(item.body);
    const seoTitle = localized(meta.seoTitle);
    const seoDescription = localized(meta.seoDescription);
    const recorded = (meta.sourceHash ?? {}) as Partial<Record<MarketLang, string>>;
    Object.assign(hashes, recorded);

    let changed = false;
    for (const lang of MARKET_LANGS) {
      if (!page.body[lang].trim()) {
        langs[lang] = "no file";
        continue;
      }
      const same =
        title[lang] === page.title[lang] &&
        summary[lang] === page.summary[lang] &&
        body[lang] === page.body[lang] &&
        seoTitle[lang] === page.seoTitle[lang] &&
        seoDescription[lang] === page.seoDescription[lang];
      if (same) {
        langs[lang] = "no change";
        continue;
      }
      // Text this script did not write — an edit in the dashboard, or a page
      // first written there — is kept unless forced. Text identical to the
      // file's is nobody's edit (only the SEO fields differ), and an empty
      // language is not anyone's work yet, so the file fills it.
      const current = sourceHash(title[lang], summary[lang], body[lang]);
      const next = sourceHash(page.title[lang], page.summary[lang], page.body[lang]);
      const ours = current === next || (recorded[lang] ? recorded[lang] === current : !body[lang].trim());
      if (!ours && !force) {
        langs[lang] = `skipped — edited in the dashboard (${body[lang].length} chars); --force to overwrite`;
        continue;
      }
      langs[lang] = `update (${body[lang].length} → ${page.body[lang].length} chars)`;
      title[lang] = page.title[lang];
      summary[lang] = page.summary[lang];
      body[lang] = page.body[lang];
      seoTitle[lang] = page.seoTitle[lang];
      seoDescription[lang] = page.seoDescription[lang];
      hashes[lang] = next;
      changed = true;
    }

    const publishing = publish && !item.published;
    out.push({
      slug: page.slug,
      id: (item as { id?: string }).id,
      action: changed || publishing ? "update" : "none",
      langs,
      published: item.published || publish,
      patch:
        changed || publishing
          ? {
              ...(changed
                ? { title, summary, body, meta: { ...meta, seoTitle, seoDescription, sourceHash: hashes } }
                : {}),
              ...(publishing ? { published: true } : {}),
              updatedAt: now,
            }
          : undefined,
    });
  }
  return out;
}
