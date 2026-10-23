/**
 * Gives a cover photo to articles that went live without one.
 *
 * Only `media` and the photo's `meta.alt` / `meta.caption` are written; the
 * rest of `meta` (tag, tags, stats) is kept, because a PATCH-style write would
 * otherwise replace it wholesale. An article that already has a photo is left
 * alone, so a re-run never overwrites one picked in the dashboard.
 *
 * Dry run by default. `--apply` writes. Redeploy the site afterwards so the
 * prerendered pages and cards pick the photos up.
 *
 * Usage: npm run add-article-photos            (dry run)
 *        npm run add-article-photos -- --apply
 */
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";

const PHOTOS: Record<string, { media: string; alt: string; caption: string }> = {
  "clinic-management-system-egypt": {
    media: "https://images.unsplash.com/photo-1758691462848-31a39258dbd8",
    alt: "A doctor on the phone with a patient while typing at her desk",
    caption: "Bookings, reminders and the patient file in one place, not on paper cards.",
  },
  "pharmacy-management-system-egypt": {
    media: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df",
    alt: "A pharmacist reaching for a medicine box on a pharmacy shelf",
    caption: "Every box on the shelf, with its batch and expiry date, known to the till.",
  },
  "inventory-management-system-egypt": {
    media: "https://images.unsplash.com/photo-1648824572347-517357c9c44e",
    alt: "Two men checking boxes in a stockroom against a list on a tablet",
    caption: "One stock figure per item that every branch can trust.",
  },
  "real-estate-crm-egypt": {
    media: "https://images.unsplash.com/photo-1781229771042-2a859f8f8022",
    alt: "Two men shaking hands over a model house and a set of keys",
    caption: "From the first ad lead to the signed contract, nothing gets lost on the way.",
  },
  "get-found-on-google-chatgpt-gemini": {
    media: "https://images.unsplash.com/photo-1687422808248-f807f4ea2a2e",
    alt: "A shop owner in an apron looking at his phone behind the counter",
    caption: "Customers ask Google and AI assistants first. Make sure they find you.",
  },
};

async function main() {
  const apply = process.argv.includes("--apply");
  const repo = repos.content.blogPosts;
  await connectDb();
  const bySlug = new Map((await repo.list()).map((item) => [item.slug, item]));

  console.log(`${apply ? "Applying" : "Dry run"} — ${Object.keys(PHOTOS).length} article(s)\n`);
  let writes = 0;
  for (const [slug, photo] of Object.entries(PHOTOS)) {
    const match = bySlug.get(slug);
    if (!match) {
      console.log(`${slug}: not found — skipped`);
      continue;
    }
    if (match.media?.length) {
      console.log(`${slug}: already has a photo (${match.media[0]}) — skipped`);
      continue;
    }
    console.log(`${slug}: add ${photo.media}`);
    writes++;
    if (!apply) continue;
    await repo.update((match as { id: string }).id, {
      media: [photo.media],
      meta: { ...(match.meta ?? {}), alt: photo.alt, caption: photo.caption },
      updatedAt: new Date().toISOString(),
    });
  }
  console.log(`\n${apply ? "Wrote" : "Would write"} ${writes} article(s).${apply ? "" : " Re-run with --apply to write."}`);
  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
