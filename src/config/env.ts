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

export const r2Enabled = Boolean(
  env.r2.accountId && env.r2.accessKeyId && env.r2.secretAccessKey && env.r2.bucket
);
