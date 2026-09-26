/**
 * Re-encodes media-library photos uploaded before uploads were optimised
 * (see optimizeImage in media.service.ts), and points every content item at
 * the new files. Originals stay in the bucket untouched.
 *
 *   npm run optimize-media                 # dry run: what would be converted, and the size saved
 *   npm run optimize-media -- --apply
 *
 * Only library items that are not already WebP are touched. The new file is
 * a new key (media/<uuid>.webp); a #desktop / #mobile flag on a content item's
 * URL is kept.
 */
import { randomUUID } from "node:crypto";
import mongoose from "mongoose";
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { connectDb } from "../db/connect.js";
import { env } from "../config/env.js";
import { repos } from "../repositories/index.js";
import { CONTENT_COLLECTIONS } from "../models/content.model.js";
import { optimizeImage } from "../shared/services/media.service.js";

async function main() {
  const apply = process.argv.includes("--apply");
  if (!env.r2.accountId || !env.r2.accessKeyId || !env.r2.secretAccessKey || !env.r2.bucket) throw new Error("R2 is not configured");
  const s3 = new S3Client({
    region: "auto",
    endpoint: `https://${env.r2.accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: env.r2.accessKeyId, secretAccessKey: env.r2.secretAccessKey },
  });
  await connectDb();

  const renames = new Map<string, string>(); // old URL (no fragment) → new URL
  for (const m of await repos.media.list()) {
    if (m.contentType === "image/webp" || !m.path) continue;
    const obj = await s3.send(new GetObjectCommand({ Bucket: env.r2.bucket, Key: m.path }));
    const original = Buffer.from(await obj.Body!.transformToByteArray());
    const out = await optimizeImage(original, m.contentType);
    if (!out) continue;
    const key = `media/${randomUUID()}.webp`;
    const url = m.url.slice(0, m.url.length - m.path.length) + key;
    console.log(`  ${m.path}  ${Math.round(original.length / 1024)} kB → ${key}  ${Math.round(out.buffer.length / 1024)} kB`);
    renames.set(m.url, url);
    if (!apply) continue;
    await s3.send(
      new PutObjectCommand({ Bucket: env.r2.bucket, Key: key, Body: out.buffer, ContentType: out.contentType, CacheControl: "public, max-age=31536000, immutable" }),
    );
    await repos.media.update(m.id, { url, path: key, contentType: out.contentType, size: out.buffer.length });
  }

  let items = 0;
  for (const collection of CONTENT_COLLECTIONS) {
    const repo = repos.content[collection];
    for (const item of await repo.list()) {
      const media = item.media ?? [];
      const next = media.map((u) => {
        const [base, flag] = u.split("#");
        const to = renames.get(base);
        return to ? (flag ? `${to}#${flag}` : to) : u;
      });
      if (next.every((u, i) => u === media[i])) continue;
      items++;
      console.log(`  ${collection}/${item.slug}: ${next.filter((u, i) => u !== media[i]).length} image(s) re-pointed`);
      if (apply) await repo.update(item.id, { media: next, updatedAt: new Date().toISOString() });
    }
  }
  console.log(`\n${renames.size} file(s), ${items} item(s) ${apply ? "updated" : "would change (dry run; add --apply)"}.`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
