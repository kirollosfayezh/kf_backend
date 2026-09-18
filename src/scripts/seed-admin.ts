/**
 * Idempotent bootstrap for the first dashboard admin user.
 * Usage: npm run seed-admin  (reads MONGODB_URI, SUPERADMIN_EMAIL, SUPERADMIN_PASSWORD)
 */
import mongoose from "mongoose";
import { env } from "../config/env.js";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";
import { hashPassword } from "../shared/services/auth.service.js";

async function main() {
  await connectDb();

  const email = env.superadminEmail.trim().toLowerCase();
  const [existing] = await repos.adminUsers.list({ where: { email } });

  if (existing) {
    console.log(`Admin user already exists: ${email}`);
  } else {
    await repos.adminUsers.create({
      email,
      passwordHash: await hashPassword(env.superadminPassword),
      role: "admin",
      createdAt: new Date().toISOString(),
    });
    console.log(`Created admin user: ${email}`);
  }

  console.log("Seed completed. Change SUPERADMIN_PASSWORD before production use.");
  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
