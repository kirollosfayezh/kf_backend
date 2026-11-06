/**
 * Adds specific FAQs from `add-faqs.data.json` (all four languages) to
 * production, without the full `seed-content` run that would revert dashboard
 * edits.
 *
 * Only the slugs named are touched. A slug that does not exist yet is
 * created; one that already exists is left alone unless `--update` is passed,
 * because an FAQ already in the CMS may have been edited there since.
 *
 * Dry run by default. `--apply` writes. A script write does not fire the
 * deploy hook: redeploy the site afterwards so the FAQs and their FAQPage
 * schema are prerendered.
 *
 * Usage: npm run add-faqs -- --slugs a,b,c            (dry run)
 *        npm run add-faqs -- --slugs a,b,c --apply
 */
import { readFile } from "node:fs/promises";
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";
import type { ContentItem, LocalizedText } from "../shared/types/index.js";

const DATA_URL = new URL("./add-faqs.data.json", import.meta.url);
const LANGS = ["en", "ar", "de", "fr"] as const;

interface FaqSeed {
  slug: string;
  order: number;
  /** The question. */
  title: LocalizedText;
  /** The answer; also written as `body`, the field the site reads first. */
  summary: LocalizedText;
}

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

async function main() {
  const apply = process.argv.includes("--apply");
  const update = process.argv.includes("--update");
  const slugs = (arg("--slugs") ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  if (!slugs.length) throw new Error("Pass --slugs a,b,c — this script never adds every FAQ");

  const all = JSON.parse(await readFile(DATA_URL, "utf8")) as FaqSeed[];
  const repo = repos.content.faqs;
  await connectDb();
  const bySlug = new Map((await repo.list()).map((item) => [item.slug, item]));

  console.log(`${apply ? "Applying" : "Dry run"} — ${slugs.length} FAQ(s)\n`);
  let writes = 0;
  for (const slug of slugs) {
    const faq = all.find((f) => f.slug === slug);
    if (!faq) {
      console.log(`${slug}: not in add-faqs.data.json — skipped`);
      continue;
    }
    const langs = LANGS.filter((l) => faq.title[l]?.trim() && faq.summary[l]?.trim());
    const match = bySlug.get(slug);
    const now = new Date().toISOString();
    if (match && !update) {
      console.log(`${slug}: already exists (${(match as { id?: string }).id}) — skipped; --update to overwrite`);
      continue;
    }
    console.log(`${slug}: ${match ? "update" : "create"} — order ${faq.order}, "${faq.title.en}" [${langs.join(", ")}]`);
    writes++;
    if (!apply) continue;
    const item = {
      slug,
      published: true,
      order: faq.order,
      title: faq.title,
      summary: faq.summary,
      body: faq.summary,
      media: [],
    };
    if (match) {
      await repo.update((match as { id: string }).id, { ...item, meta: match.meta ?? {}, updatedAt: now });
    } else {
      await repo.create({ ...item, meta: {}, createdAt: now, updatedAt: now } as ContentItem);
    }
  }
  console.log(`\n${apply ? "Wrote" : "Would write"} ${writes} FAQ(s).${apply ? "" : " Re-run with --apply to write."}`);
  if (apply && writes) console.log("A script write does not fire the deploy hook: redeploy the site so the FAQs are prerendered.");
  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
