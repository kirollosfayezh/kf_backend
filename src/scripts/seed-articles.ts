import { readFile, readdir } from "node:fs/promises";
import type { ContentItem, LocalizedText } from "../shared/types.js";

/**
 * Articles, authored as Markdown files rather than as JSON strings.
 *
 * A real article is a thousand words with headings, a comparison table and a
 * pull quote. That is unreadable and unreviewable as a JSON string literal, and
 * the point of "you draft, I review" is that the draft can actually be read —
 * so each article is a file you can open, diff and edit directly.
 *
 * One file per article per language: `<slug>.<lang>.md`. The English file is
 * the record; a missing translation falls back to English at render time, so a
 * language can be added later by dropping in a file.
 *
 * Front matter is a deliberately tiny `key: value` block — no YAML dependency
 * for six keys, matching the site's own no-dependency Markdown renderer.
 */

const LANGS = ["en", "ar", "de", "fr"] as const;
type Lang = (typeof LANGS)[number];
const isLang = (s: string): s is Lang => (LANGS as readonly string[]).includes(s);

interface Front {
  title?: string;
  summary?: string;
  tag?: string;
  tags?: string;
  caption?: string;
  alt?: string;
  media?: string;
  /** `value|label; value|label` — the design's "rough math" band. */
  stats?: string;
  order?: string;
  /** Offer fields, read by the site's promo popup. */
  badge?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  startsAt?: string;
  endsAt?: string;
}

/** Front-matter keys copied straight into `meta` when present. Keeping this a
 *  list rather than a chain of ifs means a new optional field is one entry. */
const PASSTHROUGH = ["badge", "ctaLabel", "ctaUrl", "startsAt", "endsAt"] as const;

interface ParsedArticle {
  front: Front;
  body: string;
}

/** Splits `---\nkey: value\n---\n<body>`. A file without front matter is all body. */
export function parseArticle(source: string): ParsedArticle {
  const text = source.replace(/^﻿/, "").replace(/\r\n?/g, "\n");
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(text);
  if (!m) return { front: {}, body: text.trim() };

  const front: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const at = line.indexOf(":");
    if (at < 1) continue;
    front[line.slice(0, at).trim()] = line.slice(at + 1).trim();
  }
  return { front: front as Front, body: text.slice(m[0].length).trim() };
}

const list = (v: string | undefined) =>
  (v ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const pairs = (v: string | undefined) =>
  (v ?? "")
    .split(";")
    .map((chunk) => chunk.split("|").map((s) => s.trim()))
    .filter((p) => p.length === 2 && p[0] && p[1]);

/**
 * Reads `articles/` and returns one seedable item per slug, with every language
 * found folded into the localized fields.
 */
export async function loadArticles(dir: URL): Promise<Partial<ContentItem>[]> {
  let files: string[];
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith(".md"));
  } catch {
    return []; // no articles directory yet — not an error
  }

  const bySlug = new Map<string, Partial<Record<Lang, ParsedArticle>>>();
  for (const file of files.sort()) {
    const m = /^(.+)\.([a-z]{2})\.md$/.exec(file);
    if (!m || !isLang(m[2])) continue;
    const [, slug, lang] = m;
    const parsed = parseArticle(await readFile(new URL(file, dir), "utf8"));
    bySlug.set(slug, { ...bySlug.get(slug), [lang]: parsed });
  }

  const out: Partial<ContentItem>[] = [];
  for (const [slug, langs] of bySlug) {
    const en = langs.en;
    // English is the record: without it there is no canonical title to fall
    // back to, and every other language would inherit an empty string.
    if (!en) {
      console.warn(`Skipping "${slug}": no .en.md file`);
      continue;
    }

    const field = (get: (p: ParsedArticle) => string | undefined): LocalizedText => {
      const value = { en: get(en) ?? "", ar: "", de: "", fr: "" } as LocalizedText;
      for (const l of LANGS) {
        if (l === "en") continue;
        const p = langs[l];
        if (p) value[l] = get(p) ?? "";
      }
      return value;
    };

    out.push({
      slug,
      published: true,
      order: Number(en.front.order ?? 0) || 0,
      title: field((p) => p.front.title),
      summary: field((p) => p.front.summary),
      body: field((p) => p.body),
      media: en.front.media ? [en.front.media] : [],
      meta: {
        tag: en.front.tag,
        tags: list(en.front.tags),
        caption: en.front.caption,
        alt: en.front.alt,
        stats: pairs(en.front.stats),
        ...Object.fromEntries(
          PASSTHROUGH.filter((k) => en.front[k]).map((k) => [k, en.front[k]]),
        ),
      },
    });
  }
  return out;
}
