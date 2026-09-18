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
import type { ContentCollection, ContentItem } from "../shared/types.js";

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

/** Exported so `dev-memory.ts` can populate its throwaway database too. */
export async function seedContent(): Promise<{ created: number; updated: number }> {
  const raw = await readFile(DATA_URL, "utf8");
  const data = JSON.parse(raw) as Record<string, SeedItem[]>;

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
      // Arabic is intentionally left empty — the site falls back to English
      // until translations are supplied through the dashboard.
      const payload: Partial<ContentItem> = {
        slug: item.slug,
        published: true,
        order: item.order,
        title: { en: item.title, ar: "" },
        summary: { en: item.summary ?? "", ar: "" },
        body: { en: item.summary ?? "", ar: "" },
        media: item.media ?? [],
        meta: {
          tag: item.tag,
          points: item.points ?? [],
          alt: item.alt,
          result: item.result,
        },
        updatedAt: now,
      };

      const match = bySlug.get(item.slug);
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
