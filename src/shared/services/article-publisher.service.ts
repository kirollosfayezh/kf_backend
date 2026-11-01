import { loadArticles } from "../../scripts/seed-articles.js";
import { repos } from "../../repositories/index.js";
import { requestSiteRebuild } from "./deploy-hook.service.js";
import type { ContentItem, LocalizedText } from "../types/index.js";

/**
 * Publishes new articles from `scripts/articles/` when the server starts, so a
 * post written in the repository goes live with the next backend deploy — no
 * one has to run `add-articles` against production by hand.
 *
 * Deliberately narrow:
 * - Only the slugs in `AUTO_PUBLISH` are considered. Older articles in the
 *   folder may have been removed from the CMS on purpose; they stay removed.
 * - It only ever creates. An article already in the CMS is never touched, so
 *   dashboard edits always win.
 * - Each slug is published once, ever: `articleImports` remembers it, so an
 *   article deleted in the dashboard is not brought back by the next restart.
 * - It never throws. A failure is logged and the server carries on.
 *
 * After creating anything it asks Vercel to rebuild the site, which prerenders
 * the new pages, lists them in the sitemap and announces them via IndexNow.
 *
 * To publish a new article: add `<slug>.en.md` (and translations) to
 * `scripts/articles/`, add the slug here, and deploy. To translate an article
 * that is already live, add `<slug>.<lang>.md` and deploy; see
 * `fillMissingTranslations` below.
 */
export const AUTO_PUBLISH = [
  "clinic-management-system-egypt",
  "pharmacy-management-system-egypt",
  "inventory-management-system-egypt",
  "real-estate-crm-egypt",
  "get-found-on-google-chatgpt-gemini",
];

export interface PublisherDeps {
  load: () => Promise<Partial<ContentItem>[]>;
  existingSlugs: () => Promise<Set<string>>;
  create: (item: ContentItem) => Promise<unknown>;
  imported: (slug: string) => Promise<boolean>;
  record: (slug: string, at: string) => Promise<void>;
  rebuild: (reason: string) => void;
  now: () => string;
  log: (message: string) => void;
}

const defaults: PublisherDeps = {
  load: () => loadArticles(new URL("../../scripts/articles/", import.meta.url)),
  existingSlugs: async () => new Set((await repos.content.blogPosts.list()).map((p) => p.slug)),
  create: (item) => repos.content.blogPosts.create(item),
  imported: (slug) => repos.articleImports.has(slug),
  record: (slug, at) => repos.articleImports.record(slug, at),
  rebuild: requestSiteRebuild,
  now: () => new Date().toISOString(),
  log: (message) => console.log(message),
};

/** Returns the slugs it created. */
export async function publishNewArticles(slugs: readonly string[] = AUTO_PUBLISH, deps: PublisherDeps = defaults): Promise<string[]> {
  const created: string[] = [];
  try {
    const pending: string[] = [];
    for (const slug of slugs) if (!(await deps.imported(slug))) pending.push(slug);
    if (!pending.length) return created;

    const [articles, existing] = await Promise.all([deps.load(), deps.existingSlugs()]);
    for (const slug of pending) {
      try {
        const article = articles.find((a) => a.slug === slug);
        if (!article) {
          deps.log(`Article auto-publish: no articles/${slug}.en.md — skipped`);
          continue;
        }
        const now = deps.now();
        // Already in the CMS (added by `add-articles`, or by hand): leave it
        // exactly as it is, and only remember that it is handled.
        if (!existing.has(slug)) {
          await deps.create({ ...article, createdAt: now, updatedAt: now } as ContentItem);
          created.push(slug);
        }
        await deps.record(slug, now);
      } catch (err) {
        deps.log(`Article auto-publish: ${slug} failed — ${err instanceof Error ? err.message : String(err)}`);
      }
    }
    if (created.length) {
      deps.log(`Article auto-publish: created ${created.join(", ")}`);
      deps.rebuild(`blogPosts ${created.join(", ")}`);
    }
  } catch (err) {
    deps.log(`Article auto-publish: skipped — ${err instanceof Error ? err.message : String(err)}`);
  }
  return created;
}

const TRANSLATED = ["ar", "de", "fr"] as const;
const FIELDS = ["title", "summary", "body"] as const;

type Post = Partial<Record<(typeof FIELDS)[number], LocalizedText>> & { id: string; slug: string };

export interface TranslationDeps {
  load: () => Promise<Partial<ContentItem>[]>;
  posts: () => Promise<Post[]>;
  /** `fields` holds dotted paths (`"body.de"`), so the other languages are left as they are. */
  set: (id: string, fields: Record<string, string>) => Promise<unknown>;
  handled: () => Promise<Set<string>>;
  record: (slug: string, lang: string, at: string) => Promise<void>;
  rebuild: (reason: string) => void;
  now: () => string;
  log: (message: string) => void;
}

const translationDefaults: TranslationDeps = {
  load: defaults.load,
  posts: () => repos.content.blogPosts.list() as Promise<Post[]>,
  set: (id, fields) => repos.content.blogPosts.update(id, fields),
  handled: () => repos.articleTranslations.handled(),
  record: (slug, lang, at) => repos.articleTranslations.record(slug, lang, at),
  rebuild: requestSiteRebuild,
  now: () => new Date().toISOString(),
  log: (message) => console.log(message),
};

/**
 * Copies translations from `scripts/articles/<slug>.<lang>.md` into articles
 * that are already in the CMS, when the server starts. Without it a German or
 * French file added after an article went live would never reach the site:
 * `publishNewArticles` only creates.
 *
 * Deliberately narrow:
 * - Only a language the CMS article has no body for is filled, and only the
 *   blank fields of that language are written. Text typed in the dashboard is
 *   never replaced.
 * - Each language of each article is handled once, ever: `articleTranslations`
 *   remembers it, whether it was filled or was already there, so a translation
 *   cleared in the dashboard is not brought back by the next restart.
 * - It never creates an article, so one deleted in the dashboard stays deleted.
 * - It never throws. A failure is logged and the server carries on.
 *
 * Returns the `<slug>:<lang>` keys it filled.
 */
export async function fillMissingTranslations(deps: TranslationDeps = translationDefaults): Promise<string[]> {
  const filled: string[] = [];
  try {
    const [articles, posts, handled] = await Promise.all([deps.load(), deps.posts(), deps.handled()]);
    const bySlug = new Map(articles.map((a) => [a.slug, a]));
    for (const post of posts) {
      const article = bySlug.get(post.slug);
      if (!article) continue;
      // A language with no file is not recorded, so a file added later still applies.
      const langs = TRANSLATED.filter((l) => !handled.has(`${post.slug}:${l}`) && article.body?.[l]?.trim());
      if (!langs.length) continue;
      try {
        const now = deps.now();
        const fields: Record<string, string> = {};
        const filling = langs.filter((l) => !post.body?.[l]?.trim());
        for (const lang of filling) {
          for (const f of FIELDS) {
            const value = article[f]?.[lang];
            if (value?.trim() && !post[f]?.[lang]?.trim()) fields[`${f}.${lang}`] = value;
          }
        }
        if (filling.length) await deps.set(post.id, { ...fields, updatedAt: now });
        for (const lang of langs) await deps.record(post.slug, lang, now);
        filled.push(...filling.map((l) => `${post.slug}:${l}`));
      } catch (err) {
        deps.log(`Article translations: ${post.slug} failed — ${err instanceof Error ? err.message : String(err)}`);
      }
    }
    if (filled.length) {
      deps.log(`Article translations: filled ${filled.join(", ")}`);
      deps.rebuild(`blogPosts translations ${filled.length}`);
    }
  } catch (err) {
    deps.log(`Article translations: skipped — ${err instanceof Error ? err.message : String(err)}`);
  }
  return filled;
}
