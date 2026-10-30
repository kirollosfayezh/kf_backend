import { randomUUID } from "node:crypto";
import { mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { lookup } from "node:dns/promises";
import type { Readable } from "node:stream";
import sharp from "sharp";
import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { env, r2Enabled } from "../../config/env.js";
import { repos } from "../../repositories/index.js";
import type { MediaItem } from "../types.js";

const LOCAL_UPLOAD_DIR = path.resolve("uploads");

const s3 = r2Enabled
  ? new S3Client({
      region: "auto",
      endpoint: `https://${env.r2.accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: env.r2.accessKeyId!,
        secretAccessKey: env.r2.secretAccessKey!,
      },
    })
  : null;

/**
 * Whether CLOUDFLARE_R2_PUBLIC_URL actually points somewhere.
 *
 * It was set to a domain nobody had connected (media.kftechsolutions.com),
 * so every upload landed safely in the bucket and came back with an address
 * that does not resolve: blank thumbnails in the dashboard, broken images on
 * the site. Until the name resolves, uploads are addressed through this API
 * instead (GET /files/<key>, below), which works with no Cloudflare setup at
 * all. Checked at most every ten minutes, so connecting the domain later
 * takes effect without a redeploy.
 */
let hostCheck: { at: number; ok: boolean } | null = null;
async function publicUrlWorks(): Promise<boolean> {
  if (!env.r2.publicUrl) return false;
  if (hostCheck && Date.now() - hostCheck.at < 10 * 60_000) return hostCheck.ok;
  let ok: boolean;
  try {
    await lookup(new URL(env.r2.publicUrl).hostname);
    ok = true;
  } catch {
    ok = false;
  }
  hostCheck = { at: Date.now(), ok };
  return ok;
}

/** Bucket keys this API will serve: uploads and project photos, nothing else. */
export const SERVABLE_KEY = /^(media|projects)\/[A-Za-z0-9][A-Za-z0-9._-]{0,200}$/;

/** One object from the bucket, for GET /files/<key>. Null when absent. */
export async function getMediaObject(key: string): Promise<{ body: Readable; contentType?: string; length?: number; etag?: string } | null> {
  if (!s3 || !SERVABLE_KEY.test(key)) return null;
  try {
    const out = await s3.send(new GetObjectCommand({ Bucket: env.r2.bucket!, Key: key }));
    return { body: out.Body as Readable, contentType: out.ContentType, length: out.ContentLength, etag: out.ETag };
  } catch {
    return null;
  }
}

/**
 * Uploaded photos are re-encoded before they are stored: WebP, at most 2000 px
 * wide (and 4000 tall, for full-page phone captures), EXIF orientation
 * applied and metadata dropped. A screenshot straight off a laptop was an
 * 8 MB, 3580 px PNG that every visitor of that project would have downloaded;
 * the same picture is a few hundred kB this way and looks identical at any
 * size the site shows it. GIFs (animation), SVG, video and PDF pass through.
 */
const OPTIMIZABLE = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);
export async function optimizeImage(buffer: Buffer, contentType: string): Promise<{ buffer: Buffer; contentType: string; ext: string } | null> {
  if (!OPTIMIZABLE.has(contentType)) return null;
  try {
    const out = await sharp(buffer, { failOn: "none" })
      .rotate()
      .resize({ width: 2000, height: 4000, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toBuffer();
    // Keep the original when re-encoding would not help (an already tiny file).
    if (out.length >= buffer.length && contentType === "image/webp") return null;
    return { buffer: out, contentType: "image/webp", ext: "webp" };
  } catch {
    return null; // not decodable as an image: store it as it came
  }
}

export function listMedia() {
  return repos.media.list({ orderBy: { field: "createdAt", direction: "desc" } });
}

export async function uploadMedia(file: Express.Multer.File, publicBaseUrl: string) {
  const optimized = await optimizeImage(file.buffer, file.mimetype);
  if (optimized) {
    file = { ...file, buffer: optimized.buffer, mimetype: optimized.contentType, size: optimized.buffer.length };
  }
  const ext = optimized?.ext ?? (file.originalname.includes(".") ? file.originalname.split(".").pop() : "bin");
  const key = `media/${randomUUID()}.${ext}`;

  let url: string;
  if (s3) {
    await s3.send(
      new PutObjectCommand({
        Bucket: env.r2.bucket!,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
        CacheControl: "public, max-age=31536000, immutable",
      })
    );
    url = (await publicUrlWorks())
      ? `${env.r2.publicUrl!.replace(/\/$/, "")}/${key}`
      : `${publicBaseUrl.replace(/\/$/, "")}/files/${key}`;
  } else {
    // Dev fallback: Render's filesystem is ephemeral, so configure R2 for production.
    await mkdir(LOCAL_UPLOAD_DIR, { recursive: true });
    await writeFile(path.join(LOCAL_UPLOAD_DIR, path.basename(key)), file.buffer);
    url = `${publicBaseUrl.replace(/\/$/, "")}/uploads/${path.basename(key)}`;
  }

  const item: MediaItem = {
    url,
    path: key,
    contentType: file.mimetype,
    size: file.size,
    createdAt: new Date().toISOString(),
  };
  return repos.media.create(item);
}

export async function deleteMedia(id: string) {
  const item = await repos.media.get(id);
  if (!item) return;

  if (s3) {
    await s3.send(new DeleteObjectCommand({ Bucket: env.r2.bucket!, Key: item.path }));
  } else {
    await unlink(path.join(LOCAL_UPLOAD_DIR, path.basename(item.path))).catch(() => {});
  }
  await repos.media.delete(id);
}
