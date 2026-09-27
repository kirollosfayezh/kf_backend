/**
 * Re-points media saved with a dead public address at the API's /files/ route.
 *
 * Uploads made while CLOUDFLARE_R2_PUBLIC_URL named an unconnected domain are
 * safely in the bucket but were stored as https://<that domain>/<key>. This
 * rewrites them, in the media library and in every content item's `media`, to
 * <api origin>/files/<key>, which serves the same object from the bucket.
 *
 *   npm run fix-media-urls -- --to https://kf-backend-tv5l.onrender.com            # dry run
 *   npm run fix-media-urls -- --to https://kf-backend-tv5l.onrender.com --apply
 *   npm run fix-media-urls -- --from https://kf-backend-tv5l.onrender.com/files --to-base https://media.kftechsolutions.dev --apply
 *
 * --from defaults to CLOUDFLARE_R2_PUBLIC_URL.
 */
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { env } from "../config/env.js";
import { repos } from "../repositories/index.js";
import { CONTENT_COLLECTIONS } from "../models/content.model.js";

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

async function main() {
  const apply = process.argv.includes("--apply");
  const from = (arg("--from") ?? env.r2.publicUrl ?? "").replace(/\/+$/, "");
  const to = (arg("--to") ?? "").replace(/\/+$/, "");
  if (!from || !(/^https:\/\//.test(to) || /^https:\/\//.test(arg("--to-base") ?? ""))) {
    console.error("usage: fix-media-urls (--to https://<api origin> | --to-base https://<new prefix>) [--from https://<old prefix>] [--apply]");
    process.exit(2);
  }
  // --to-base: plain prefix swap (e.g. the API's /files route → the media
  // domain, once it exists). Otherwise the original mode: dead host → /files/.
  const toBase = (arg("--to-base") ?? "").replace(/\/+$/, "");
  const rewrite = (u: string) => {
    if (!u.startsWith(from + "/")) return u;
    const rest = u.slice(from.length + 1);
    return toBase ? `${toBase}/${rest}` : `${to}/files/${rest}`;
  };

  await connectDb();
  console.log(`${apply ? "Rewriting" : "Dry run:"} ${from}/… → ${arg("--to-base") ? arg("--to-base") + "/…" : to + "/files/…"}\n`);
  let changes = 0;

  for (const m of await repos.media.list()) {
    const next = rewrite(m.url);
    if (next === m.url) continue;
    console.log(`  media library  ${m.url}\n              → ${next}`);
    changes++;
    if (apply) await repos.media.update(m.id, { url: next });
  }

  for (const collection of CONTENT_COLLECTIONS) {
    const repo = repos.content[collection];
    for (const item of await repo.list()) {
      const media = item.media ?? [];
      const next = media.map(rewrite);
      if (next.every((u, i) => u === media[i])) continue;
      console.log(`  ${collection}/${item.slug}: ${media.filter((u, i) => u !== next[i]).length} image(s)`);
      changes++;
      if (apply) await repo.update(item.id, { media: next, updatedAt: new Date().toISOString() });
    }
  }

  console.log(`\n${changes} record(s) ${apply ? "updated" : "would change (dry run; add --apply)"}.`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
