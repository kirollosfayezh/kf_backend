/**
 * Writes the country landing pages from `markets/<slug>.<lang>.md` (English
 * and Arabic) into the markets collection: a page that is not there yet is
 * created — as a draft unless `--publish` — and one that is gets its title,
 * summary, body and SEO fields per language (meta merged, not replaced).
 *
 * Only the markets collection is touched. A full `seed-content` would also
 * revert every other dashboard edit, which is why this exists. A language
 * edited in the dashboard since the last run is skipped unless `--force`.
 *
 * Dry run by default. `--apply` writes. `--slugs a,b` limits the run to those
 * pages; `--publish` also puts them live. A write from here does not ask for
 * a rebuild, so redeploy the site afterwards (publishing a page in the
 * dashboard does ask for one) to prerender /saudi-arabia and the rest.
 *
 * Usage: npm run update-market-pages                                   (dry run)
 *        npm run update-market-pages -- --slugs saudi-arabia,uae --apply
 *        npm run update-market-pages -- --slugs saudi-arabia --apply --publish
 */
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";
import { KNOWN_MARKETS, MARKET_LANGS, lintMarketPage, loadMarketPages, planMarketPages } from "./seed-markets.js";

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

async function main() {
  const apply = process.argv.includes("--apply");
  const force = process.argv.includes("--force");
  const publish = process.argv.includes("--publish");
  const slugs = (arg("--slugs") ?? "").split(",").map((s) => s.trim()).filter(Boolean);

  const all = await loadMarketPages();
  if (!all.length) throw new Error("No markets/*.md files found next to this script");
  const unknown = slugs.filter((slug) => !all.some((p) => p.slug === slug));
  if (unknown.length) throw new Error(`No markets/<slug>.en.md for: ${unknown.join(", ")}`);
  const pages = slugs.length ? all.filter((p) => slugs.includes(p.slug)) : all;

  await connectDb();
  const repo = repos.content.markets;
  const plan = planMarketPages(await repo.list(), pages, { force, publish });

  console.log(`${apply ? "Applying" : "Dry run"} — ${pages.length} market page(s)\n`);
  let writes = 0;
  for (const change of plan) {
    const page = pages.find((p) => p.slug === change.slug)!;
    const verb = change.action === "none" ? "nothing to write" : change.action;
    console.log(`${change.slug}: ${verb} (${change.published ? "published" : "draft"})`);
    if (!(KNOWN_MARKETS as readonly string[]).includes(change.slug)) {
      console.log("  note: the site has no route for this slug, so it cannot show the page");
    }
    for (const [lang, verdict] of Object.entries(change.langs)) console.log(`  ${lang}: ${verdict}`);
    for (const lang of MARKET_LANGS) {
      if (!page.body[lang].trim()) continue;
      for (const warning of lintMarketPage(page, lang)) console.log(`  ${lang} check: ${warning}`);
    }
    if (change.action === "none") continue;
    writes++;
    if (!apply) continue;
    if (change.create) await repo.create(change.create);
    else if (change.id && change.patch) await repo.update(change.id, change.patch);
  }
  console.log(
    `\n${apply ? "Wrote" : "Would write"} ${writes} of ${plan.length} market page(s).` +
      (apply ? " Redeploy the site so the pages are prerendered." : " Re-run with --apply to write."),
  );
  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
