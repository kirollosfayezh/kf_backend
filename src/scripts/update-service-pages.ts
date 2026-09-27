/**
 * Writes the long-form service landing pages from `services/<slug>.<lang>.md`
 * into the existing service documents — body per language, plus headline,
 * lede and SEO fields in `meta` (merged, not replaced).
 *
 * Only the services collection is touched, and only these fields; the card
 * title, summary, photos and points stay as they are. A full `seed-content`
 * would also revert every other dashboard edit, which is why this exists.
 * A body an editor wrote by hand is skipped unless `--force`.
 *
 * Dry run by default. `--apply` writes. Redeploy the site afterwards so the
 * prerendered /services/<slug> pages are built.
 *
 * Usage: npm run update-service-pages            (dry run)
 *        npm run update-service-pages -- --apply
 */
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";
import { loadServicePages, planServicePages } from "./seed-services.js";

async function main() {
  const apply = process.argv.includes("--apply");
  const force = process.argv.includes("--force");
  await connectDb();

  const pages = await loadServicePages();
  if (!pages.length) throw new Error("No services/*.md files found next to this script");
  const repo = repos.content.services;
  const plan = planServicePages(await repo.list(), pages, { force });

  console.log(`${apply ? "Applying" : "Dry run"} — ${pages.length} service pages\n`);
  let writes = 0;
  for (const change of plan) {
    console.log(`${change.slug}${change.patch ? "" : " (nothing to write)"}`);
    for (const [lang, verdict] of Object.entries(change.langs)) console.log(`  ${lang}: ${verdict}`);
    if (change.patch && change.id) {
      writes++;
      if (apply) await repo.update(change.id, change.patch);
    }
  }
  console.log(
    `\n${apply ? "Wrote" : "Would write"} ${writes} of ${plan.length} services.` +
      (apply ? "" : " Re-run with --apply to write."),
  );
  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
