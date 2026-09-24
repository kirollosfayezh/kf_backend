/**
 * End-to-end smoke test against a throwaway in-memory MongoDB.
 * Exercises auth, content, leads, settings and the full realtime chat round-trip.
 * Usage: npm run smoke-test
 */
import { MongoMemoryServer } from "mongodb-memory-server";
import { createServer } from "node:http";
import { io as ioClient } from "socket.io-client";
import type { Socket } from "socket.io-client";

let passed = 0;
let failed = 0;

function check(label: string, condition: boolean, detail?: unknown) {
  if (condition) {
    passed++;
    console.log(`  PASS  ${label}`);
  } else {
    failed++;
    console.error(`  FAIL  ${label}`, detail ?? "");
  }
}

function waitForEvent<T>(socket: Socket, event: string, timeoutMs = 4000): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`timeout waiting for "${event}"`)), timeoutMs);
    socket.once(event, (payload: T) => {
      clearTimeout(timer);
      resolve(payload);
    });
  });
}

async function main() {
  const mongo = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongo.getUri("kf_smoke");
  process.env.JWT_ADMIN_SECRET = "smoke-test-secret";
  process.env.SUPERADMIN_EMAIL = "smoke@kftech.solutions";
  process.env.SUPERADMIN_PASSWORD = "SmokeTest123!";

  // Imported after env is set, since config/env.ts reads process.env at import time.
  const { connectDb } = await import("../db/connect.js");
  const { app } = await import("../app.js");
  const { initIo } = await import("../realtime/io.js");
  const { repos } = await import("../repositories/index.js");
  const { hashPassword } = await import("../shared/services/auth.service.js");
  const mongoose = (await import("mongoose")).default;

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

  const call = async (path: string, init?: RequestInit) => {
    const res = await fetch(`${base}${path}`, init);
    const body = await res.json().catch(() => null);
    return { status: res.status, body } as { status: number; body: any };
  };

  console.log("\nHealth + auth");
  const health = await call("/api/healthz");
  check("GET /api/healthz", health.status === 200 && health.body?.ok === true, health);

  const badLogin = await call("/api/admin/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "smoke@kftech.solutions", password: "wrong" }),
  });
  check("login rejects a bad password", badLogin.status === 401, badLogin);

  const login = await call("/api/admin/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "smoke@kftech.solutions", password: "SmokeTest123!" }),
  });
  const token: string = login.body?.data?.token;
  check("login returns a token", login.status === 200 && Boolean(token), login);

  const authHeaders = {
    "content-type": "application/json",
    authorization: `Bearer ${token}`,
  };

  const me = await call("/api/admin/auth/me", { headers: authHeaders });
  check("GET /api/admin/auth/me", me.status === 200 && me.body?.data?.email === "smoke@kftech.solutions", me);

  const noAuth = await call("/api/admin/leads");
  check("admin routes reject anonymous requests", noAuth.status === 401, noAuth);

  console.log("\nContent CRUD + public visibility");
  const created = await call("/api/admin/content/services", {
    method: "POST",
    headers: authHeaders,
    body: JSON.stringify({
      slug: "pos-systems",
      published: false,
      order: 1,
      title: { en: "POS Systems", ar: "أنظمة نقاط البيع" },
      summary: { en: "Point of sale", ar: "نقطة بيع" },
    }),
  });
  const itemId: string = created.body?.data?.id;
  check("create a service", created.status === 201 && Boolean(itemId), created);

  const publicHidden = await call("/api/content/services");
  check(
    "unpublished item is hidden from the public API",
    publicHidden.status === 200 && publicHidden.body?.data?.length === 0,
    publicHidden
  );

  const published = await call(`/api/admin/content/services/${itemId}`, {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ published: true }),
  });
  check("publish the service", published.status === 200 && published.body?.data?.published === true, published);

  const publicVisible = await call("/api/content/services");
  check(
    "published item appears in the public API",
    publicVisible.body?.data?.length === 1 && publicVisible.body.data[0].title.en === "POS Systems",
    publicVisible
  );

  // The site links articles as /blog/<slug>, so slug resolution is load-bearing
  // for every article URL, the sitemap and the prerendered pages.
  const createdSlug: string = created.body?.data?.slug;
  const bySlug = await call(`/api/content/services/${createdSlug}`);
  check(
    "public item resolves by slug",
    bySlug.status === 200 && bySlug.body?.data?.id === itemId,
    bySlug
  );

  const byId = await call(`/api/content/services/${itemId}`);
  check("public item still resolves by id", byId.status === 200 && byId.body?.data?.id === itemId, byId);

  const missingSlug = await call("/api/content/services/no-such-slug");
  check("unknown slug returns 404", missingSlug.status === 404, missingSlug);

  /**
   * German and French round-trip through the CMS.
   *
   * The localized sub-schema only declared `en` and `ar`, so Mongoose dropped
   * `de` and `fr` on the way in — the write returned 200, the dashboard showed
   * the text it had just sent from its own state, and the values were simply
   * gone on the next read. A silent drop like that needs a test that reads the
   * value back from the API rather than trusting the write's response.
   */
  const withDeFr = await call(`/api/admin/content/services/${itemId}`, {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({
      title: { en: "POS Systems", ar: "أنظمة نقاط البيع", de: "Kassensysteme", fr: "Systèmes de caisse" },
    }),
  });
  const reread = await call(`/api/content/services/${itemId}`);
  check(
    "German and French survive a write",
    withDeFr.status === 200 &&
      reread.body?.data?.title?.de === "Kassensysteme" &&
      reread.body?.data?.title?.fr === "Systèmes de caisse",
    reread
  );

  /** Project links live in `meta`, which is Mixed — new keys must not need a
   *  schema change, and an edit must not clobber the keys it did not send. */
  const withLinks = await call(`/api/admin/content/services/${itemId}`, {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({
      meta: { demoUrl: "https://demo.example.com", repoUrl: "https://github.com/kf/x", year: "2026" },
    }),
  });
  const rereadMeta = await call(`/api/content/services/${itemId}`);
  check(
    "project links round-trip through meta",
    withLinks.status === 200 &&
      rereadMeta.body?.data?.meta?.demoUrl === "https://demo.example.com" &&
      rereadMeta.body?.data?.meta?.repoUrl === "https://github.com/kf/x" &&
      rereadMeta.body?.data?.meta?.year === "2026",
    rereadMeta
  );

  // SEO overrides: the dashboard writes them, the site and the build read them.
  const seoEmpty = await call("/api/seo");
  check("public SEO list starts empty", seoEmpty.status === 200 && Array.isArray(seoEmpty.body?.data), seoEmpty);

  const seoSaved = await call("/api/admin/seo/services", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ title: "Edited title", description: "Edited description", noindex: false }),
  });
  check(
    "SEO override saves",
    seoSaved.status === 200 && seoSaved.body?.data?.title === "Edited title",
    seoSaved
  );

  const seoPublic = await call("/api/seo");
  check(
    "saved override is readable by the site and the build",
    seoPublic.body?.data?.some((r: { key: string; title: string }) => r.key === "services" && r.title === "Edited title"),
    seoPublic
  );

  const seoBadKey = await call("/api/admin/seo/not-a-page", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ title: "nope" }),
  });
  check("unknown SEO page key is rejected", seoBadKey.status === 404, seoBadKey);

  const seoNoAuth = await call("/api/admin/seo/services", {
    method: "PATCH",
    body: JSON.stringify({ title: "nope" }),
  });
  check("SEO writes require auth", seoNoAuth.status === 401, seoNoAuth);

  // Translation overrides: the dashboard edits the site's interface copy.
  const trKey = "Forecast demand / weekly?";
  const trSaved = await call("/api/admin/translations", {
    method: "PUT",
    headers: authHeaders,
    body: JSON.stringify({ key: trKey, ar: "توقّع الطلب", de: "" }),
  });
  check("translation override saves", trSaved.status === 200 && trSaved.body?.data?.ar === "توقّع الطلب", trSaved);

  const trPublic = await call("/api/translations/ar");
  check("site reads one language as a flat map", trPublic.body?.data?.[trKey] === "توقّع الطلب", trPublic);

  const trDe = await call("/api/translations/de");
  check("blank languages are left out of the map", trDe.status === 200 && !(trKey in (trDe.body?.data ?? {})), trDe);

  const trBadLang = await call("/api/translations/xx");
  check("unknown translation language is rejected", trBadLang.status === 400, trBadLang);

  const trNoAuth = await call("/api/admin/translations", { method: "PUT", body: JSON.stringify({ key: "x", ar: "y" }) });
  check("translation writes require auth", trNoAuth.status === 401, trNoAuth);

  const trCleared = await call("/api/admin/translations", {
    method: "PUT",
    headers: authHeaders,
    body: JSON.stringify({ key: trKey, ar: "" }),
  });
  const trAfter = await call("/api/admin/translations", { headers: authHeaders });
  check(
    "clearing every language removes the override",
    trCleared.status === 200 && !trAfter.body?.data?.some((r: { key: string }) => r.key === trKey),
    trAfter
  );

  const trImport = await call("/api/admin/translations/import", {
    method: "POST",
    headers: authHeaders,
    body: JSON.stringify({ rows: [{ key: "Home", fr: "Accueil!" }, { key: "About", de: "Über" }] }),
  });
  check("bulk import saves every row", trImport.status === 200 && trImport.body?.data?.saved === 2, trImport);

  const trDelete = await call("/api/admin/translations", {
    method: "DELETE",
    headers: authHeaders,
    body: JSON.stringify({ key: "Home" }),
  });
  const trFr = await call("/api/translations/fr");
  check("deleted override is gone", trDelete.status === 200 && !("Home" in (trFr.body?.data ?? {})), trFr);

  // The tagline used to lose de/fr: the schema only declared en/ar.
  const tagline = await call("/api/admin/settings", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ tagline: { en: "E", ar: "A", de: "D", fr: "F" } }),
  });
  check("settings keep German and French tagline", tagline.body?.data?.tagline?.de === "D" && tagline.body?.data?.tagline?.fr === "F", tagline);

  const badCollection = await call("/api/content/not-a-collection");
  check("unknown collection returns 404", badCollection.status === 404, badCollection);

  const serialized = JSON.stringify(publicVisible.body.data[0]);
  check(
    "responses carry no Mongoose _id noise in nested objects",
    !serialized.includes("_id"),
    serialized
  );

  console.log("\nContent seeding (idempotent re-runs)");
  const { seedContent } = await import("../scripts/seed-content.js");
  await seedContent();
  const firstPass = await call("/api/content/services");
  const seededCount = firstPass.body?.data?.length ?? 0;
  check("seed-content populates the catalog", seededCount > 1, seededCount);

  await seedContent();
  const secondPass = await call("/api/content/services");
  check(
    "re-running seed-content does not duplicate",
    secondPass.body?.data?.length === seededCount,
    `${seededCount} -> ${secondPass.body?.data?.length}`
  );

  console.log("\nLeads");
  const lead = await call("/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      source: "contact",
      name: "Test Visitor",
      email: "visitor@example.com",
      message: "I need a POS system",
      projectType: "POS",
    }),
  });
  const leadId: string = lead.body?.data?.id;
  check("public lead submission", lead.status === 201 && Boolean(leadId), lead);

  const invalidLead = await call("/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ source: "contact", name: "No Email", message: "hi" }),
  });
  check("lead validation rejects a missing email", invalidLead.status === 400, invalidLead);

  const inbox = await call("/api/admin/leads", { headers: authHeaders });
  check("lead shows up in the admin inbox", inbox.body?.data?.length === 1, inbox);

  const statusUpdate = await call(`/api/admin/leads/${leadId}/status`, {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ status: "contacted" }),
  });
  check("lead status update", statusUpdate.body?.data?.status === "contacted", statusUpdate);

  const filtered = await call("/api/admin/leads?status=new", { headers: authHeaders });
  check("lead status filter", filtered.body?.data?.length === 0, filtered);

  console.log("\nSettings");
  const settings = await call("/api/content/settings");
  check("public settings are seeded with defaults", settings.body?.data?.siteName === "KF Tech Solutions", settings);

  check(
    "settings carry no Mongoose _id noise",
    !JSON.stringify(settings.body.data).includes("_id"),
    settings.body.data
  );

  const patched = await call("/api/admin/settings", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ siteName: "KF Tech" }),
  });
  check("settings update", patched.body?.data?.siteName === "KF Tech", patched);
  check(
    "updated settings carry no _id noise either",
    !JSON.stringify(patched.body.data).includes("_id"),
    patched.body.data
  );

  /**
   * Marketing tags round-trip.
   *
   * Every field here lives inside a declared Mongoose sub-schema, so a key that
   * is added to the dashboard but not to the model is silently dropped on write
   * and reads back as absent — the same failure that hid `de` and `fr` on
   * content for months. Reading the values back from the public endpoint, which
   * is what the site actually consumes, is the only check that catches it.
   */
  const tracking = {
    gtmId: "GTM-ABC1234",
    googleAnalyticsId: "G-DH49NSL0SS",
    googleAdsId: "AW-123456789",
    googleAdsLabel: "AbC-D_efG-h12_34-567",
    metaPixelId: "123456789012345",
    tiktokPixelId: "CABCDEFGHIJKLMNOPQRS",
    snapchatPixelId: "11111111-2222-3333-4444-555555555555",
    events: { lead: true, cta: false },
    respectDnt: false,
    consentMode: true,
    debug: true,
  };
  const savedTracking = await call("/api/admin/settings", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ pixels: tracking }),
  });
  const publicSettings = await call("/api/content/settings");
  const back = publicSettings.body?.data?.pixels ?? {};
  const missing = Object.keys(tracking).filter(
    (k) => JSON.stringify(back[k]) !== JSON.stringify(tracking[k as keyof typeof tracking])
  );
  check(
    "every marketing tag field survives a write",
    savedTracking.status === 200 && missing.length === 0,
    { missing, back }
  );
  check(
    "marketing tags reach the public settings the site reads",
    back.gtmId === "GTM-ABC1234" && back.events?.cta === false,
    back
  );

  console.log("\nRealtime chat");
  const visitorId = "visitor-smoke-1";

  const visitorSocket = ioClient(base, { auth: { visitorId }, transports: ["websocket"] });
  const adminSocket = ioClient(base, { auth: { token }, transports: ["websocket"] });
  await Promise.all([
    waitForEvent(visitorSocket, "connect"),
    waitForEvent(adminSocket, "connect"),
  ]);
  check("visitor + admin sockets connect", visitorSocket.connected && adminSocket.connected);

  const rejectedSocket = ioClient(base, { auth: { token: "not-a-real-token" }, transports: ["websocket"] });
  await waitForEvent(rejectedSocket, "disconnect", 4000).catch(() => null);
  check("socket with an invalid admin token is disconnected", !rejectedSocket.connected);

  adminSocket.emit("chat:watch", visitorId);
  await new Promise((r) => setTimeout(r, 150));

  const adminNotified = waitForEvent<{ message: { text: string } }>(adminSocket, "chat:thread-updated");
  const visitorMsg = await call(`/api/chat/threads/${visitorId}/messages`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: "Hello, are you there?" }),
  });
  check("visitor sends a message", visitorMsg.status === 201, visitorMsg);

  const notified = await adminNotified.catch((e) => ({ message: { text: `ERROR: ${e.message}` } }));
  check(
    "admin is notified live of the visitor message",
    notified.message?.text === "Hello, are you there?",
    notified
  );

  const threads = await call("/api/admin/chat/threads", { headers: authHeaders });
  check("thread appears in the admin thread list", threads.body?.data?.length === 1, threads);

  const visitorReceives = waitForEvent<{ text: string; from: string }>(visitorSocket, "chat:message");
  const agentReply = await call(`/api/admin/chat/threads/${visitorId}/messages`, {
    method: "POST",
    headers: authHeaders,
    body: JSON.stringify({ text: "Yes! How can I help?" }),
  });
  check("agent replies", agentReply.status === 201 && agentReply.body?.data?.from === "agent", agentReply);

  const received = await visitorReceives.catch((e) => ({ text: `ERROR: ${e.message}`, from: "" }));
  check(
    "visitor receives the agent reply live",
    received.text === "Yes! How can I help?" && received.from === "agent",
    received
  );

  const history = await call(`/api/chat/threads/${visitorId}/messages`);
  check("chat history persists both messages", history.body?.data?.length === 2, history);

  const typingNotice = waitForEvent<{ typing: boolean }>(adminSocket, "chat:typing");
  await call(`/api/chat/threads/${visitorId}/typing`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ typing: true }),
  });
  const typing = await typingNotice.catch(() => ({ typing: false }));
  check("typing indicator reaches the admin", typing.typing === true, typing);

  console.log("\nAnalytics");
  const beacon = await call("/api/analytics/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      events: [
        { type: "pageview", path: "/", visitorId: "v1", device: "desktop", referrer: "https://google.com", ts: Date.now() },
        { type: "pageview", path: "/services", visitorId: "v1", device: "desktop", ts: Date.now() },
        { type: "pageview", path: "/", visitorId: "v2", device: "mobile", ts: Date.now() },
        { type: "click", path: "/", label: "hero.start-project", visitorId: "v2", device: "mobile", ts: Date.now() },
        { type: "click", path: "/", label: "hero.start-project", visitorId: "v1", device: "desktop", ts: Date.now() },
        { type: "nonsense", path: "/", ts: Date.now() },
      ],
    }),
  });
  check("analytics beacon accepted (invalid events dropped)", beacon.status === 202 && beacon.body?.data?.written === 5, beacon);

  // `navigator.sendBeacon` is a credentialed request: without this header the
  // browser drops every beacon at preflight and analytics silently stays empty.
  const preflight = await fetch(`${base}/api/analytics/events`, {
    method: "OPTIONS",
    headers: {
      origin: "https://kf-site.example",
      "access-control-request-method": "POST",
      "access-control-request-headers": "content-type",
    },
  });
  check(
    "analytics preflight allows credentialed beacons",
    preflight.headers.get("access-control-allow-credentials") === "true",
    Object.fromEntries(preflight.headers)
  );

  const noAuthSummary = await call("/api/admin/analytics/summary");
  check("analytics summary requires auth", noAuthSummary.status === 401, noAuthSummary.status);

  const summary = await call("/api/admin/analytics/summary?days=30", { headers: authHeaders });
  const s = summary.body?.data;
  check("summary counts pageviews and clicks", s?.totals?.pageviews === 3 && s?.totals?.clicks === 2, s?.totals);
  check("summary counts unique visitors", s?.totals?.visitors === 2, s?.totals);
  check("summary ranks the most-viewed page", s?.topPages?.[0]?.path === "/" && s.topPages[0].views === 2, s?.topPages);
  check(
    "summary ranks the most-clicked control",
    s?.topClicks?.[0]?.label === "hero.start-project" && s.topClicks[0].clicks === 2,
    s?.topClicks
  );
  check("summary breaks down devices", s?.devices?.length === 2, s?.devices);
  check("summary reports referrers", s?.topReferrers?.[0]?.referrer === "https://google.com", s?.topReferrers);

  console.log("\nAbuse protection");
  // Runs last: it deliberately exhausts the lead limiter for this IP/window.
  let sawRateLimit = false;
  for (let i = 0; i < 8; i++) {
    const res = await call("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        source: "contact",
        name: `Flood ${i}`,
        email: "flood@example.com",
        message: "flood",
      }),
    });
    if (res.status === 429) {
      sawRateLimit = true;
      break;
    }
  }
  check("repeated lead submissions get rate limited", sawRateLimit);

  const rejectedUpload = await call("/api/admin/media", {
    method: "POST",
    headers: { authorization: `Bearer ${token}` },
    body: (() => {
      const form = new FormData();
      form.append("file", new Blob(["<svg onload=alert(1)>"], { type: "image/svg+xml" }), "x.svg");
      return form;
    })(),
  });
  check(
    "media upload rejects a disallowed file type (svg)",
    rejectedUpload.status === 400,
    rejectedUpload
  );

  visitorSocket.close();
  adminSocket.close();
  rejectedSocket.close();
  httpServer.closeAllConnections();
  await new Promise<void>((resolve) => httpServer.close(() => resolve()));
  await mongoose.disconnect();
  await mongo.stop();

  console.log(`\n${passed} passed, ${failed} failed\n`);
  process.exit(failed === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
