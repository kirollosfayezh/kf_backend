import { randomUUID } from "node:crypto";
import { mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
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

export function listMedia() {
  return repos.media.list({ orderBy: { field: "createdAt", direction: "desc" } });
}

export async function uploadMedia(file: Express.Multer.File, publicBaseUrl: string) {
  const ext = file.originalname.includes(".") ? file.originalname.split(".").pop() : "bin";
  const key = `media/${randomUUID()}.${ext}`;

  let url: string;
  if (s3) {
    await s3.send(
      new PutObjectCommand({
        Bucket: env.r2.bucket!,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      })
    );
    url = `${env.r2.publicUrl?.replace(/\/$/, "") ?? ""}/${key}`;
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
