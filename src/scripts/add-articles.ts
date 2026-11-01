/**
 * Adds specific articles from `articles/<slug>.<lang>.md` to production,
 * without the full `seed-content` run that would revert dashboard edits.
 *
 * Only the slugs named are touched. A slug that does not exist yet is
 * created; one that already exists is left alone unless `--update` is passed,
 * because an article already in the CMS may have been edited there since.
 *
 * Dry run by default. `--apply` writes. Redeploy the site afterwards so the
 * new posts are prerendered and listed in the sitemap.
 *
 * Usage: npm run add-articles -- --slugs a,b,c            (dry run)
 *        npm run add-articles -- --slugs a,b,c --apply
 */
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";
import { loadArticles } from "./seed-articles.js";
import type { ContentItem } from "../shared/types/index.js";

const ARTICLES_URL = new URL("./articles/", import.meta.url);

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

async function main() {
  const apply = process.argv.includes("--apply");
  const update = process.argv.includes("--update");
  const slugs = (arg("--slugs") ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  if (!slugs.length) throw new Error("Pass --slugs a,b,c — this script never adds every article");

  const all = await loadArticles(ARTICLES_URL);
  const repo = repos.content.blogPosts;
  await connectDb();
  const bySlug = new Map((await repo.list()).map((item) => [item.slug, item]));

  console.log(`${apply ? "Applying" : "Dry run"} — ${slugs.length} article(s)\n`);
  let writes = 0;
  for (const slug of slugs) {
    const article = all.find((a) => a.slug === slug);
    if (!article) {
      console.log(`${slug}: no articles/${slug}.en.md — skipped`);
      continue;
    }
    const langs = (["en", "ar", "de", "fr"] as const).filter((l) => article.body?.[l]?.trim());
    const words = (article.body?.en ?? "").split(/\s+/).filter(Boolean).length;
    const match = bySlug.get(slug);
    const now = new Date().toISOString();
    if (match && !update) {
      console.log(`${slug}: already exists (${(match as { id?: string }).id}) — skipped; --update to overwrite`);
      continue;
    }
    console.log(
      `${slug}: ${match ? "update" : "create"} — "${article.title?.en}" [${langs.join(", ")}], ${words} words, ` +
        `media ${article.media?.length ? "yes" : "none"}`,
    );
    writes++;
    if (!apply) continue;
    if (match) {
      await repo.update((match as { id: string }).id, { ...article, meta: { ...(match.meta ?? {}), ...article.meta }, updatedAt: now });
    } else {
      await repo.create({ ...article, createdAt: now, updatedAt: now } as ContentItem);
    }
  }
  console.log(`\n${apply ? "Wrote" : "Would write"} ${writes} article(s).${apply ? "" : " Re-run with --apply to write."}`);
  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
