/**
 * End-to-end smoke test against a throwaway in-memory MongoDB.
 * Exercises auth, content, SEO overrides, leads, settings, the full realtime chat
 * round-trip, the CRM cycle (visitor → consent → lead/chat → contact → quote →
 * booking → alerts) and the newsletter. Each area lives in ./smoke/<area>.ts and
 * runs in order against one server and database; later sections rely on state
 * the earlier ones leave behind.
 * Usage: npm run smoke-test
 */
import { MongoMemoryServer } from "mongodb-memory-server";
import { createServer } from "node:http";
import { checkResults, makeCall } from "./smoke/harness.js";
import type { Smoke } from "./smoke/harness.js";
import { adminHeaders, authSection } from "./smoke/auth.js";
import { contentSection } from "./smoke/content.js";
import { leadsSection } from "./smoke/leads.js";
import { settingsSection } from "./smoke/settings.js";
import { chatSection } from "./smoke/chat.js";
import { analyticsSection } from "./smoke/analytics.js";
import { crmSection } from "./smoke/crm.js";
import { newsletterSection } from "./smoke/newsletter.js";
import { abuseSection } from "./smoke/abuse.js";

async function main() {
  // SMOKE_MONGODB_URI points the run at an existing server (a local mongod,
  // or FerretDB where MongoDB binaries cannot be downloaded) — each run uses
  // a fresh database on it. Otherwise a throwaway in-memory MongoDB is started.
  const external = process.env.SMOKE_MONGODB_URI?.replace(/\/+$/, "");
  const mongo = external ? null : await MongoMemoryServer.create();
  process.env.MONGODB_URI = external ? `${external}/kf_smoke_${Date.now()}` : mongo!.getUri("kf_smoke");
  process.env.JWT_ADMIN_SECRET = "smoke-test-secret";
  process.env.SUPERADMIN_EMAIL = "smoke@kftech.solutions";
  process.env.SUPERADMIN_PASSWORD = "SmokeTest123!";
  // Never let a hook URL from a local .env trigger a real site rebuild from here.
  process.env.VERCEL_DEPLOY_HOOK_URL = "";

  // Imported after env is set, since config/env.ts reads process.env at import time.
  const { connectDb } = await import("../db/connect.js");
  const { app } = await import("../app.js");
  const { initIo } = await import("../realtime/io.js");
  const { repos } = await import("../repositories/index.js");
  const { hashPassword } = await import("../shared/services/auth.service.js");
  const deployHook = await import("../shared/services/deploy-hook.service.js");
  const mongoose = (await import("mongoose")).default;

  // A fake Vercel hook, so the test can see that content, settings and SEO
  // writes ask for a rebuild without anything leaving the machine.
  const rebuilds: string[] = [];
  deployHook._configureForTests({
    url: "https://hook.test/deploy",
    delayMs: 40,
    fetch: async (url) => {
      rebuilds.push(url);
      return new Response(null, { status: 201 });
    },
  });
  const rebuildRequested = () => new Promise<number>((resolve) => setTimeout(() => resolve(rebuilds.length), 120));

  await connectDb();

  await repos.adminUsers.create({
    email: "smoke@kftech.solutions",
    passwordHash: await hashPassword("SmokeTest123!"),
    role: "admin",
    createdAt: new Date().toISOString(),
  });

  const httpServer = createServer(app);
  initIo(httpServer);
  await new Promise<void>((resolve) => httpServer.listen(0, resolve));
  const port = (httpServer.address() as { port: number }).port;
  const base = `http://127.0.0.1:${port}`;

  const call = makeCall(base);
  const token = await authSection(call);
  const authHeaders = adminHeaders(token);
  const json = { "content-type": "application/json" };
  const ctx: Smoke = {
    base,
    token,
    authHeaders,
    call,
    post: (path, body, headers = json) => call(path, { method: "POST", headers, body: JSON.stringify(body) }),
    patch: (path, body) => call(path, { method: "PATCH", headers: authHeaders, body: JSON.stringify(body) }),
    mongoose,
    deployHook,
    rebuilds,
    rebuildRequested,
  };

  await contentSection(ctx);
  await leadsSection(ctx);
  await settingsSection(ctx);
  const { visitorSocket, adminSocket, rejectedSocket } = await chatSection(ctx);
  await analyticsSection(ctx);
  await crmSection(ctx);
  await newsletterSection(ctx);
  await abuseSection(ctx);

  visitorSocket.close();
  adminSocket.close();
  rejectedSocket.close();
  httpServer.closeAllConnections();
  await new Promise<void>((resolve) => httpServer.close(() => resolve()));
  if (external) await mongoose.connection.db?.dropDatabase().catch(() => {});
  await mongoose.disconnect();
  await mongo?.stop();

  const { passed, failed } = checkResults();
  console.log(`\n${passed} passed, ${failed} failed\n`);
  process.exit(failed === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
