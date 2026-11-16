/**
 * Adds company profile URLs (directory listings such as Clutch) to the stored
 * site settings' `brand.profiles` — the list the site's Organization schema
 * (`sameAs`), the About page and llms.txt read — without a re-seed.
 *
 * `set-brand-identity` only fills a field that is still empty, so it cannot
 * extend a list that already has an entry. This script appends: every URL
 * already stored is kept in its place, and a URL that is already there is not
 * added twice. Nothing else in the settings document is touched.
 *
 * Dry run by default — prints the list before and after and writes nothing.
 * `--apply` writes.
 *
 * Usage: npm run add-brand-profiles -- <url> [<url> …]            (dry run)
 *        npm run add-brand-profiles -- <url> [<url> …] --apply
 */
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { SettingsModel } from "../models/settings.model.js";
import { normalizeBrand } from "../shared/services/settings.service.js";

async function main() {
  const apply = process.argv.includes("--apply");
  const urls = process.argv.slice(2).filter((a) => a !== "--apply");
  if (!urls.length) throw new Error("Pass at least one profile URL");
  for (const u of urls) {
    if (new URL(u).protocol !== "https:") throw new Error(`Not an https URL: ${u}`);
  }

  await connectDb();
  const doc = await SettingsModel.findOne().lean().exec();
  if (!doc) throw new Error("No siteSettings document — nothing to update");

  const brand = (doc as { brand?: { profiles?: string[] } }).brand;
  const before = brand?.profiles ?? [];
  // Through the same validation as a dashboard save, so the script cannot
  // store anything the API would refuse (and duplicates collapse there too).
  const after = normalizeBrand({ ...brand, profiles: [...before, ...urls] }).profiles;

  console.log(`before: ${JSON.stringify(before)}`);
  console.log(`after:  ${JSON.stringify(after)}`);

  const kept = before.every((u, i) => after[i] === u);
  if (!kept) throw new Error("Validation would drop or reorder an existing profile — refusing to write");

  if (after.length === before.length) {
    console.log("Nothing to add — every URL is already stored.");
  } else if (apply) {
    await SettingsModel.updateOne(
      { _id: (doc as { _id: unknown })._id },
      { $set: { "brand.profiles": after, updatedAt: new Date().toISOString() } },
    ).exec();
    console.log(`Applied: ${after.length - before.length} profile(s) added.`);
  } else {
    console.log("Dry run — pass --apply to write.");
  }
  console.log(
    "A script write does not fire the deploy hook: save any setting in the dashboard or redeploy the site so the pages rebuild.",
  );

  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
