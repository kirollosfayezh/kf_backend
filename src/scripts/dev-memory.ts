/**
 * Runs the real server against a throwaway in-memory MongoDB, seeded with the
 * admin account from .env. For local development when you don't have MongoDB
 * installed — nothing persists between restarts.
 * Usage: npm run dev:memory
 */
import { MongoMemoryServer } from "mongodb-memory-server";
import { createServer } from "node:http";

async function main() {
  const mongo = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongo.getUri("kf_dev_memory");

  const { env } = await import("../config/env.js");
  const { connectDb } = await import("../db/connect.js");
  const { app } = await import("../app.js");
  const { initIo } = await import("../realtime/io.js");
  const { repos } = await import("../repositories/index.js");
  const { hashPassword } = await import("../shared/services/auth.service.js");

  await connectDb();

  const email = env.superadminEmail.trim().toLowerCase();
  await repos.adminUsers.create({
    email,
    passwordHash: await hashPassword(env.superadminPassword),
    role: "admin",
    createdAt: new Date().toISOString(),
  });

  // Populate the throwaway database so the site and dashboard have real content
  // to render immediately.
  const { seedContent } = await import("./seed-content.js");
  await seedContent();

  const httpServer = createServer(app);
  initIo(httpServer);
  httpServer.listen(env.port, () => {
    console.log(`kf-api (in-memory MongoDB) listening on http://localhost:${env.port}`);
    console.log(`admin login: ${email} / ${env.superadminPassword}`);
  });

  const shutdown = async () => {
    httpServer.close();
    await mongo.stop();
    process.exit(0);
  };
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
