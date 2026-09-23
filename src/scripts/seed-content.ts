/**
 * Seeds the CMS collections with the real KF Tech Solutions content.
 * Idempotent: matches on `slug` per collection, updating in place rather than
 * duplicating, so it is safe to re-run after editing the source data.
 *
 * Source: `seed-content.data.json`, extracted from the original static site
 * design files so the copy matches what the client already signed off on.
 *
 * Usage: npm run seed-content
 */
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";
import { loadArticles } from "./seed-articles.js";
import type { ContentCollection, ContentItem, LocalizedText } from "../shared/types.js";

interface SeedItem {
  slug: string;
  order: number;
  title: string;
  summary?: string;
  media?: string[];
  /** Eyebrow label over the card ("RETAIL", "POS System", …). */
  tag?: string;
  /** Bullet list: "what we build" for solutions, the tech stack for projects. */
  points?: string[];
  alt?: string;
  result?: string;
}

const DATA_URL = new URL("./seed-content.data.json", import.meta.url);
const ARTICLES_URL = new URL("./articles/", import.meta.url);

/** Exported so `dev-memory.ts` can populate its throwaway database too. */
export async function seedContent(): Promise<{ created: number; updated: number }> {
  const raw = await readFile(DATA_URL, "utf8");
  const data = JSON.parse(raw) as Record<string, SeedItem[]>;

  // Articles are authored as Markdown files, not as JSON strings — see
  // `seed-articles.ts`. They replace any `blogPosts` entry with the same slug.
  const articles = await loadArticles(ARTICLES_URL);

  let created = 0;
  let updated = 0;

  for (const [collection, items] of Object.entries(data)) {
    const repo = repos.content[collection as ContentCollection];
    if (!repo) {
      console.warn(`Skipping unknown collection: ${collection}`);
      continue;
    }

    const existing = await repo.list();
    const bySlug = new Map(existing.map((item) => [item.slug, item]));

    for (const item of items) {
      const now = new Date().toISOString();
      const match = bySlug.get(item.slug);

      /**
       * English comes from the seed file; every other language is preserved.
       *
       * This used to write `{ en, ar: "", de: "", fr: "" }` unconditionally,
       * which meant re-running the seeder silently destroyed every Arabic,
       * German and French translation an editor had typed into the dashboard
       * for a seeded slug. That was harmless while the schema only stored
       * `en`/`ar` and the seeds were the only writer — it is not now that the
       * CMS stores four languages and holds real translated copy.
       *
       * All four keys are still written, because the schema declares four and
       * omitting one leaves the field absent rather than empty.
       */
      const keep = (
        current: LocalizedText | undefined,
        en: string,
      ): LocalizedText => ({
        en,
        ar: current?.ar ?? "",
        de: current?.de ?? "",
        fr: current?.fr ?? "",
      });

      const payload: Partial<ContentItem> = {
        slug: item.slug,
        published: true,
        order: item.order,
        title: keep(match?.title, item.title),
        summary: keep(match?.summary, item.summary ?? ""),
        body: keep(match?.body, item.summary ?? ""),
        media: item.media ?? [],
        meta: {
          tag: item.tag,
          points: item.points ?? [],
          alt: item.alt,
          result: item.result,
        },
        updatedAt: now,
      };

      if (match) {
        await repo.update(match.id, payload);
        updated++;
      } else {
        await repo.create({ ...payload, createdAt: now } as ContentItem);
        created++;
      }
    }

    console.log(`${collection}: ${items.length} items`);
  }

  // Written last so a Markdown article wins over any JSON entry sharing its
  // slug — the .md file is the source of truth for anything with one.
  if (articles.length) {
    const repo = repos.content.blogPosts;
    const bySlug = new Map((await repo.list()).map((item) => [item.slug, item]));
    for (const article of articles) {
      const now = new Date().toISOString();
      const payload = { ...article, updatedAt: now };
      const match = bySlug.get(article.slug as string);
      if (match) {
        await repo.update(match.id, payload);
        updated++;
      } else {
        await repo.create({ ...payload, createdAt: now } as ContentItem);
        created++;
      }
    }
    console.log(`blogPosts: ${articles.length} full articles from Markdown`);
  }

  return { created, updated };
}

async function main() {
  await connectDb();
  const { created, updated } = await seedContent();
  console.log(`\nSeed completed — ${created} created, ${updated} updated.`);
  await mongoose.disconnect();
}

// Only run when invoked directly — dev-memory.ts imports `seedContent` instead.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(async (err) => {
    console.error(err);
    await mongoose.disconnect();
    process.exit(1);
  });
}
