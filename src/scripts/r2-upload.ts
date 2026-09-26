/**
 * Uploads files to the site's Cloudflare R2 bucket, the same bucket the
 * dashboard's media library writes to (see media.service.ts), using the
 * CLOUDFLARE_R2_* variables from the environment.
 *
 *   npm run r2-upload -- <file-or-folder>... --prefix projects           # dry run: what would go where
 *   npm run r2-upload -- <file-or-folder>... --prefix projects --apply   # upload
 *
 * Existing keys are left alone unless --overwrite is given. Objects are sent
 * with a one-year immutable cache header: a changed image gets a new name,
 * never a new body under the old one, or every cache between here and the
 * visitor keeps showing the old picture.
 */
import "dotenv/config";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { S3Client, PutObjectCommand, HeadObjectCommand } from "@aws-sdk/client-s3";

const TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
};

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

async function expand(inputs: string[]): Promise<string[]> {
  const files: string[] = [];
  for (const input of inputs) {
    const s = await stat(input);
    if (s.isDirectory()) {
      for (const name of (await readdir(input)).sort()) {
        const full = path.join(input, name);
        if ((await stat(full)).isFile() && TYPES[path.extname(name).toLowerCase()]) files.push(full);
      }
    } else {
      files.push(input);
    }
  }
  return files;
}

async function main() {
  const apply = process.argv.includes("--apply");
  const overwrite = process.argv.includes("--overwrite");
  const prefix = (arg("--prefix") ?? "").replace(/^\/+|\/+$/g, "");
  const inputs = process.argv.slice(2).filter((a, i, all) => !a.startsWith("--") && all[i - 1] !== "--prefix");
  if (!inputs.length) {
    console.error("usage: r2-upload <file-or-folder>... --prefix <folder> [--apply] [--overwrite]");
    process.exit(2);
  }

  const { CLOUDFLARE_R2_ACCOUNT_ID, CLOUDFLARE_R2_ACCESS_KEY_ID, CLOUDFLARE_R2_SECRET_ACCESS_KEY, CLOUDFLARE_R2_BUCKET, CLOUDFLARE_R2_PUBLIC_URL } = process.env;
  if (!CLOUDFLARE_R2_ACCOUNT_ID || !CLOUDFLARE_R2_ACCESS_KEY_ID || !CLOUDFLARE_R2_SECRET_ACCESS_KEY || !CLOUDFLARE_R2_BUCKET) {
    console.error("CLOUDFLARE_R2_ACCOUNT_ID, CLOUDFLARE_R2_ACCESS_KEY_ID, CLOUDFLARE_R2_SECRET_ACCESS_KEY and CLOUDFLARE_R2_BUCKET must be set");
    process.exit(2);
  }
  const publicBase = (CLOUDFLARE_R2_PUBLIC_URL ?? "").replace(/\/+$/, "");
  const s3 = new S3Client({
    region: "auto",
    endpoint: `https://${CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: CLOUDFLARE_R2_ACCESS_KEY_ID, secretAccessKey: CLOUDFLARE_R2_SECRET_ACCESS_KEY },
  });

  const files = await expand(inputs);
  console.log(`${apply ? "Uploading" : "Dry run:"} ${files.length} file(s) to bucket "${CLOUDFLARE_R2_BUCKET}"${prefix ? ` under ${prefix}/` : ""}\n`);
  let uploaded = 0;
  let skipped = 0;
  for (const file of files) {
    const key = `${prefix ? prefix + "/" : ""}${path.basename(file)}`;
    const type = TYPES[path.extname(file).toLowerCase()] ?? "application/octet-stream";
    const size = (await stat(file)).size;
    let exists = false;
    try {
      await s3.send(new HeadObjectCommand({ Bucket: CLOUDFLARE_R2_BUCKET, Key: key }));
      exists = true;
    } catch {
      /* not there yet */
    }
    const url = publicBase ? `${publicBase}/${key}` : `(no CLOUDFLARE_R2_PUBLIC_URL) ${key}`;
    if (exists && !overwrite) {
      console.log(`  skip     ${key}  (already in the bucket)`);
      skipped++;
      continue;
    }
    console.log(`  ${apply ? "put " : "would"}  ${key}  ${Math.round(size / 1024)} kB  ${type}\n           → ${url}`);
    if (!apply) continue;
    await s3.send(
      new PutObjectCommand({
        Bucket: CLOUDFLARE_R2_BUCKET,
        Key: key,
        Body: await readFile(file),
        ContentType: type,
        CacheControl: "public, max-age=31536000, immutable",
      }),
    );
    uploaded++;
  }
  console.log(`\n${apply ? `${uploaded} uploaded` : "nothing uploaded (dry run)"}, ${skipped} skipped.`);
  if (!apply) console.log("Re-run with --apply to upload.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
