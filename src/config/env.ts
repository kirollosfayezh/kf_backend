import "dotenv/config";

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  mongodbUri: required("MONGODB_URI", "mongodb://127.0.0.1:27017/kf_dev"),
  jwtAdminSecret: required("JWT_ADMIN_SECRET", "dev-only-insecure-secret-change-me"),
  jwtAdminTtl: process.env.JWT_ADMIN_TTL ?? "7d",
  corsOrigins: (process.env.CORS_ORIGINS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
  /** The dashboard's public URL, so Telegram alerts can link straight to the contact. Optional. */
  dashboardUrl: (process.env.DASHBOARD_URL ?? "").trim().replace(/\/+$/, ""),
  superadminEmail: process.env.SUPERADMIN_EMAIL ?? "admin@kftech.solutions",
  superadminPassword: process.env.SUPERADMIN_PASSWORD ?? "ChangeMe123!",
  r2: {
    accountId: process.env.CLOUDFLARE_R2_ACCOUNT_ID,
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
    bucket: process.env.CLOUDFLARE_R2_BUCKET,
    publicUrl: process.env.CLOUDFLARE_R2_PUBLIC_URL,
  },
};

/**
 * `publicUrl` is part of the gate on purpose. Without it the upload still
 * succeeded but returned a *relative* `/media/...` URL, which 404s from the
 * site's own origin — a silent half-configured state that looks like a broken
 * image rather than a missing setting. Missing it now falls back to local disk,
 * which at least serves a URL that works.
 */
export const r2Enabled = Boolean(
  env.r2.accountId &&
    env.r2.accessKeyId &&
    env.r2.secretAccessKey &&
    env.r2.bucket &&
    env.r2.publicUrl
);
