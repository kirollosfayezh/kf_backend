/**
 * Removes profiles from the stored site settings' `social` block that belong
 * to a person rather than the company.
 *
 * The site's Organization `sameAs` and footer are built from `social`; a
 * personal GitHub account listed there tells Google it is the company's own
 * profile. Only the named keys are unset — every other setting, including the
 * company's Facebook, Instagram, LinkedIn and TikTok links, is left alone.
 *
 * Dry run by default — prints the current and resulting `social` block and
 * writes nothing. `--apply` writes. Redeploy the site afterwards so the
 * prerendered pages catch up.
 *
 * Usage: npm run update-social-links            (dry run)
 *        npm run update-social-links -- --apply
 */
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { SettingsModel } from "../models/settings.model.js";

const REMOVE = ["github"] as const;

async function main() {
  const apply = process.argv.includes("--apply");
  await connectDb();

  const doc = await SettingsModel.findOne().lean().exec();
  if (!doc) throw new Error("No siteSettings document — nothing to update");

  const social = { ...((doc.social ?? {}) as Record<string, string | undefined>) };
  const present = REMOVE.filter((k) => social[k]);
  console.log("current social:", social);

  if (!present.length) {
    console.log("Nothing to remove.");
  } else {
    for (const k of present) delete social[k];
    console.log(`${apply ? "removing" : "would remove"}: ${present.join(", ")}`);
    console.log("resulting social:", social);
    if (apply) {
      await SettingsModel.updateOne(
        { _id: (doc as { _id: unknown })._id },
        {
          $unset: Object.fromEntries(present.map((k) => [`social.${k}`, ""])),
          $set: { updatedAt: new Date().toISOString() },
        },
      ).exec();
      console.log("Applied. Redeploy the site so the prerendered pages pick it up.");
    } else {
      console.log("Dry run — pass --apply to write.");
    }
  }

  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
