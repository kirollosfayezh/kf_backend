/**
 * Fills the stored site settings' `brand` block — the facts the site's
 * Organization schema, About page and llms.txt use to tell KF Tech Solutions
 * apart from similarly named companies — without a re-seed.
 *
 * Only fields that are still empty in the stored document are written: a value
 * the owner already set in the dashboard's "Brand identity" card is kept, and
 * re-running the script is a no-op. There is deliberately no `--force`; the
 * dashboard is the editor.
 *
 * Dry run by default — prints `keep` or `would set` per field and writes
 * nothing. `--apply` writes.
 *
 * Usage: npm run set-brand-identity            (dry run)
 *        npm run set-brand-identity -- --apply
 */
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { SettingsModel } from "../models/settings.model.js";
import { normalizeBrand } from "../shared/services/settings.service.js";
import type { BrandIdentity } from "../shared/types/index.js";

// Run through the same validation as a dashboard save, so the script cannot
// store anything the API would refuse.
const DESIRED = normalizeBrand({
  alternateNames: { en: ["KF Tech", "KFTech", "KFTech Solutions"], ar: ["كي إف تك"], de: [], fr: [] },
  foundingDate: "2020",
  founderProfiles: ["https://github.com/kirollosfayezh"],
  profiles: ["https://www.snapchat.com/add/kftechsolutions"],
  notAffiliatedWith: [{ name: "KFTECH Software Solutions", url: "https://kftechsols.com" }],
});

/** Every leaf the script may fill, as its dotted path and desired value. */
function fields(brand: BrandIdentity): [string, unknown][] {
  return [
    ...Object.entries(brand.alternateNames).map(([lang, names]): [string, unknown] => [`brand.alternateNames.${lang}`, names]),
    ["brand.foundingDate", brand.foundingDate],
    ["brand.founderProfiles", brand.founderProfiles],
    ["brand.profiles", brand.profiles],
    ["brand.notAffiliatedWith", brand.notAffiliatedWith],
  ];
}

function at(doc: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((value, key) => (value as Record<string, unknown> | undefined)?.[key], doc);
}

function isEmpty(value: unknown): boolean {
  return value == null || value === "" || (Array.isArray(value) && value.length === 0);
}

async function main() {
  const apply = process.argv.includes("--apply");
  await connectDb();

  const doc = await SettingsModel.findOne().lean().exec();
  if (!doc) throw new Error("No siteSettings document — nothing to update");

  const $set: Record<string, unknown> = {};
  for (const [path, desired] of fields(DESIRED)) {
    if (isEmpty(desired)) continue;
    const current = at(doc, path);
    if (isEmpty(current)) {
      $set[path] = desired;
      console.log(`${path}: ${apply ? "setting" : "would set"} ${JSON.stringify(desired)}`);
    } else {
      console.log(`${path}: keep ${JSON.stringify(current)}`);
    }
  }

  if (!Object.keys($set).length) {
    console.log("Nothing to set — every field already has a value.");
  } else if (apply) {
    await SettingsModel.updateOne(
      { _id: (doc as { _id: unknown })._id },
      { $set: { ...$set, updatedAt: new Date().toISOString() } },
    ).exec();
    console.log(`Applied ${Object.keys($set).length} field(s).`);
  } else {
    console.log("Dry run — pass --apply to write.");
  }
  console.log(
    "A script write does not fire the deploy hook: save any setting in the dashboard or POST the Vercel hook so the site rebuilds.",
  );

  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
