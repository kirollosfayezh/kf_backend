/**
 * End-to-end smoke test against a throwaway in-memory MongoDB.
 * Exercises auth, content, SEO overrides, leads, settings, the full realtime chat
 * round-trip, the CRM cycle (visitor → consent → lead/chat → contact → quote →
 * booking → alerts) and the newsletter.
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
  let rebuilds: string[] = [];
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
  check("a content write asks the site to rebuild (once, after the debounce)", (await rebuildRequested()) === 1, rebuilds);

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
    seoSaved.status === 200 && seoSaved.body?.data?.title?.en === "Edited title",
    seoSaved
  );

  const seoPublic = await call("/api/seo");
  check(
    "saved override is readable by the site and the build",
    seoPublic.body?.data?.some((r: { key: string; title: { en: string } }) => r.key === "services" && r.title?.en === "Edited title"),
    seoPublic
  );

  /**
   * Overrides are per language. A saved title used to be one string, which
   * made every override English-only — an Arabic reader of a page with a saved
   * title got the English one. Each language is now written and read back on
   * its own, a save of one language leaves the others alone, and rows from
   * before the change still read (and save) as the new shape.
   */
  const seoRow = (key: string, rows: { key: string }[] | undefined) => (rows ?? []).find((r) => r.key === key) as any;
  const seoLangs = await call("/api/admin/seo/services", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ title: { en: "Services", ar: "خدماتنا", de: "Leistungen", fr: "Services FR" }, description: { ar: "وصف" } }),
  });
  const seoLangsPublic = seoRow("services", (await call("/api/seo")).body?.data);
  check(
    "SEO override round-trips every language",
    seoLangs.status === 200 &&
      seoLangsPublic?.title?.ar === "خدماتنا" &&
      seoLangsPublic?.title?.de === "Leistungen" &&
      seoLangsPublic?.title?.fr === "Services FR" &&
      seoLangsPublic?.description?.ar === "وصف" &&
      seoLangsPublic?.description?.en === "Edited description",
    seoLangsPublic
  );

  const seoMerge = await call("/api/admin/seo/services", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ title: { de: "Neu" } }),
  });
  const seoMerged = seoRow("services", (await call("/api/seo")).body?.data);
  check(
    "saving one SEO language keeps the others",
    seoMerge.status === 200 && seoMerged?.title?.de === "Neu" && seoMerged?.title?.en === "Services" && seoMerged?.title?.ar === "خدماتنا",
    seoMerged?.title
  );

  const seoPlain = await call("/api/admin/seo/services", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ title: "Plain string" }),
  });
  const seoPlained = seoRow("services", (await call("/api/seo")).body?.data);
  check(
    "a plain-string SEO title lands in English and keeps the rest",
    seoPlain.status === 200 && seoPlained?.title?.en === "Plain string" && seoPlained?.title?.ar === "خدماتنا",
    seoPlained?.title
  );

  // A row saved before per-language overrides holds plain strings. Inserted
  // straight into the collection, bypassing the schema, exactly as it sits in
  // production.
  const seoCollection = mongoose.connection.collection("seopages");
  await seoCollection.insertOne({
    key: "about",
    title: "Legacy title",
    description: "Legacy description",
    keywords: "",
    image: "",
    noindex: null,
    updatedAt: new Date().toISOString(),
  });
  const seoLegacy = seoRow("about", (await call("/api/seo")).body?.data);
  check(
    "a legacy string SEO row reads back as an object",
    seoLegacy?.title?.en === "Legacy title" && seoLegacy?.title?.ar === "" && seoLegacy?.description?.en === "Legacy description",
    seoLegacy
  );
  const seoLegacyPatch = await call("/api/admin/seo/about", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ title: { fr: "Titre" } }),
  });
  const seoLegacyStored = await seoCollection.findOne({ key: "about" });
  check(
    "a legacy SEO row accepts a per-language save and is migrated in place",
    seoLegacyPatch.status === 200 &&
      seoLegacyPatch.body?.data?.title?.en === "Legacy title" &&
      seoLegacyPatch.body?.data?.title?.fr === "Titre" &&
      typeof seoLegacyStored?.title === "object" &&
      seoLegacyStored?.title?.fr === "Titre" &&
      typeof seoLegacyStored?.description === "object" &&
      seoLegacyStored?.description?.en === "Legacy description",
    seoLegacyStored
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

  await rebuildRequested(); // let the rebuild queued by the writes above go out first
  rebuilds = [];
  await call("/api/admin/seo/home", { method: "PATCH", headers: authHeaders, body: JSON.stringify({ keywords: "pos" }) });
  check("an SEO override asks the site to rebuild", (await rebuildRequested()) === 1, rebuilds);

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
  await rebuildRequested(); // the tagline write above queued one; let it go out first
  rebuilds = [];
  await call("/api/admin/settings", { method: "PATCH", headers: authHeaders, body: JSON.stringify({ tagline: { en: "E2", ar: "A", de: "D", fr: "F" } }) });
  check("a settings write asks the site to rebuild", (await rebuildRequested()) === 1, rebuilds);
  // From here on nothing should reach the hook: later sections write content
  // too, and a stray POST would only be noise in the assertions above.
  deployHook._resetForTests();
  process.env.VERCEL_DEPLOY_HOOK_URL = "";

  const badCollection = await call("/api/content/not-a-collection");
  check("unknown collection returns 404", badCollection.status === 404, badCollection);

  const serialized = JSON.stringify(publicVisible.body.data[0]);
  check(
    "responses carry no Mongoose _id noise in nested objects",
    !serialized.includes("_id"),
    serialized
  );

  // SMOKE_SKIP_SEED=1 for servers that cannot store the seed data's nested
  // arrays (FerretDB); real MongoDB always runs it.
  if (!process.env.SMOKE_SKIP_SEED) {
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

    // The seeded projects are illustrative layouts; the site labels them and
    // hides its sample block once a real project (no flag) exists.
    const seededProjects = (await call("/api/content/projects")).body?.data ?? [];
    check(
      "seeded projects are flagged as samples",
      seededProjects.length === 6 && seededProjects.every((p: { meta?: { sample?: boolean } }) => p.meta?.sample === true),
      seededProjects.map((p: { slug: string; meta?: { sample?: boolean } }) => [p.slug, p.meta?.sample])
    );
  }

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
    linkedinPartnerId: "1234567",
    linkedinConversionId: "12345678",
    clarityId: "abcdefghij",
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

  /** Social profiles: the footer and the Organization schema read these. `x`
   *  is stored as "@handle" because it doubles as the `twitter:site` tag. */
  const socialSaved = await call("/api/admin/settings", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ social: { facebook: "https://facebook.com/kftech", x: "kftech", youtube: "" } }),
  });
  const socialPublic = (await call("/api/content/settings")).body?.data?.social;
  check(
    "social profiles round-trip and the X handle is normalised",
    socialSaved.status === 200 &&
      socialPublic?.facebook === "https://facebook.com/kftech" &&
      socialPublic?.x === "@kftech" &&
      socialPublic?.youtube === "",
    socialPublic
  );
  check(
    "social profiles carry no _id noise",
    !JSON.stringify(socialSaved.body?.data?.social).includes("_id"),
    socialSaved.body?.data?.social
  );
  const badHandle = await call("/api/admin/settings", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ social: { x: "bad handle!" } }),
  });
  check("a malformed X handle is rejected", badHandle.status === 400, badHandle);

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

  const json = { "content-type": "application/json" };
  const noPhone = await call(`/api/chat/threads/${visitorId}/messages`, {
    method: "POST",
    headers: json,
    body: JSON.stringify({ text: "no phone yet" }),
  });
  check(
    "a visitor cannot chat before giving a phone",
    noPhone.status === 400 && noPhone.body?.errors?.[0]?.code === "PHONE_REQUIRED",
    noPhone
  );

  const badPhone = await call("/api/chat/session", {
    method: "POST",
    headers: json,
    body: JSON.stringify({ visitorId, phone: "12345", country: "EG" }),
  });
  check("an invalid phone is rejected", badPhone.status === 400 && badPhone.body?.errors?.[0]?.code === "INVALID_PHONE", badPhone);

  const session = await call("/api/chat/session", {
    method: "POST",
    headers: json,
    // Arabic-Indic digits and a national number: stored as E.164 all the same.
    body: JSON.stringify({ visitorId, phone: "٠١٠١٢٣٤٥٦٧٨", country: "EG", name: "Smoke" }),
  });
  check(
    "a valid phone starts the session, normalised to E.164",
    session.status === 200 &&
      session.body?.data?.thread?.visitorId === visitorId &&
      session.body?.data?.thread?.phone === "+201012345678" &&
      session.body?.data?.resumed === false,
    session
  );
  // Let the session's own thread-updated push land before listening for the next one.
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

  // The same number from another browser picks the conversation back up.
  const resumed = await call("/api/chat/session", {
    method: "POST",
    headers: json,
    body: JSON.stringify({ visitorId: "visitor-smoke-other-device", phone: "+20 101 234 5678" }),
  });
  check(
    "entering the same phone elsewhere resumes the last chat",
    resumed.body?.data?.resumed === true &&
      resumed.body?.data?.thread?.visitorId === visitorId &&
      resumed.body?.data?.messages?.length === 2,
    resumed
  );

  // A different number on a browser whose thread already has a phone gets its own thread.
  const shared = await call("/api/chat/session", {
    method: "POST",
    headers: json,
    body: JSON.stringify({ visitorId, phone: "+971501234567" }),
  });
  check(
    "a second person on the same browser gets a separate thread",
    shared.body?.data?.resumed === false &&
      shared.body?.data?.thread?.visitorId !== visitorId &&
      shared.body?.data?.messages?.length === 0,
    shared
  );

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
        // A goal completed — sent once by the site when the server accepted the lead, not on the click.
        { type: "conversion", path: "/contact", label: "lead", visitorId: "v1", ts: Date.now() },
        { type: "nonsense", path: "/", ts: Date.now() },
      ],
    }),
  });
  check("analytics beacon accepted (invalid events dropped)", beacon.status === 202 && beacon.body?.data?.written === 6, beacon);

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
  check(
    "conversions are stored but never counted as clicks",
    s?.totals?.clicks === 2 && !s?.topClicks?.some((c: { label: string }) => c.label === "lead"),
    s?.topClicks
  );
  const v1Detail = await call("/api/admin/crm/visitors/v1", { headers: authHeaders });
  check(
    "a conversion shows in the visitor's journey with its kind",
    v1Detail.body?.data?.journey?.some((e: { type: string; label?: string }) => e.type === "conversion" && e.label === "lead") &&
      v1Detail.body?.data?.visitor?.clicks === 1,
    v1Detail.body?.data
  );

  console.log("\nCRM: visitors, consent, contacts, pipeline");
  const J = { "content-type": "application/json" };
  const post = (path: string, body: unknown, headers: Record<string, string> = J) =>
    call(path, { method: "POST", headers, body: JSON.stringify(body) });
  const patch = (path: string, body: unknown) =>
    call(path, { method: "PATCH", headers: authHeaders, body: JSON.stringify(body) });
  const V1 = "crm-visitor-1";
  const V2 = "crm-visitor-2";
  const now = Date.now();

  const crmBeacon = await call("/api/analytics/events", {
    method: "POST",
    headers: { ...J, "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1" },
    body: JSON.stringify({
      events: [
        { type: "session", path: "/campaign", visitorId: V1, sessionId: "s1", timezone: "Africa/Cairo", screen: "390x844", lang: "ar", ts: now,
          touch: { landingPath: "/campaign", utmSource: "facebook", utmMedium: "cpc", utmCampaign: "pos-sept", fbclid: "abc" } },
        { type: "pageview", path: "/campaign", visitorId: V1, sessionId: "s1", device: "mobile", lang: "ar", ts: now },
        { type: "pageview", path: "/services", visitorId: V1, sessionId: "s1", device: "mobile", lang: "ar", ts: now + 1000 },
        { type: "click", path: "/services", label: "hero.start-project", visitorId: V1, sessionId: "s1", device: "mobile", ts: now + 2000 },
        { type: "pageview", path: "/contact", visitorId: V1, sessionId: "s1", device: "mobile", lang: "ar", ts: now + 3000 },
        { type: "consent", path: "/contact", visitorId: V1, status: "granted", source: "banner", ts: now + 4000 },
      ],
    }),
  });
  check("session, page and consent beacons are accepted", crmBeacon.status === 202, crmBeacon);

  const visitors = await call(`/api/admin/crm/visitors?q=${V1}`, { headers: authHeaders });
  const v1 = visitors.body?.data?.[0];
  check(
    "visitor profile: sessions, pages, source, country, device, consent",
    v1?.visitorId === V1 && v1.sessions === 1 && v1.pageviews === 3 && v1.clicks === 1 &&
      v1.country === "EG" && v1.os === "iOS" && v1.browser === "Safari" &&
      v1.firstTouch?.utmCampaign === "pos-sept" && v1.channel === "paid" && v1.consent?.status === "granted",
    v1
  );

  const consentLog = await call("/api/admin/crm/consent?days=7", { headers: authHeaders });
  check(
    "consent log records the choice with policy version",
    consentLog.body?.data?.totals?.granted >= 1 && consentLog.body?.data?.records?.[0]?.policyVersion,
    consentLog.body?.data
  );

  const crmLead = await post("/api/leads", {
    source: "campaign", name: "Sara Crm", email: "Sara.CRM@Example.com", phone: "+966 50 123 4567",
    message: "We need a POS for 3 branches", projectType: "Business system / POS", budget: "5k-10k", visitorId: V1,
  });
  const contactId: string = crmLead.body?.data?.contactId;
  check("a lead is filed as a contact", crmLead.status === 201 && !!contactId, crmLead);

  const detail = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  const d = detail.body?.data;
  check(
    "contact has the phone (E.164), email, journey and consent from before the lead",
    d?.contact?.phones?.[0] === "+966501234567" && d.contact.emails?.[0] === "sara.crm@example.com" &&
      d.journey?.filter((e: { type: string }) => e.type === "pageview").length === 3 &&
      d.consent?.[0]?.status === "granted" && d.activities?.some((a: { type: string }) => a.type === "lead"),
    d
  );

  const crmChat = await post("/api/chat/session", { visitorId: V2, phone: "0501234567", country: "SA", name: "Sara" });
  check("chat session with the same phone succeeds", crmChat.status === 200, crmChat);
  const sameContact = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  check(
    "chat from another browser joins the same contact",
    sameContact.body?.data?.contact?.visitorIds?.includes(V1) && sameContact.body?.data?.contact?.visitorIds?.includes(V2) &&
      sameContact.body?.data?.activities?.some((a: { type: string }) => a.type === "chat_started"),
    sameContact.body?.data?.contact
  );

  const staged = await patch(`/api/admin/contacts/${contactId}`, { stage: "qualified", value: 8000, tags: ["pos", "retail"] });
  const note = await post(`/api/admin/contacts/${contactId}/notes`, { text: "Wants a demo next week" }, authHeaders);
  const afterStage = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  check(
    "stage, value, tags and notes are saved, with a stage-change entry",
    staged.body?.data?.stage === "qualified" && note.status === 201 &&
      afterStage.body?.data?.activities?.some((a: { type: string; by: string }) => a.type === "stage_change" && a.by === "smoke@kftech.solutions"),
    afterStage.body?.data?.activities
  );
  const badStage = await patch(`/api/admin/contacts/${contactId}`, { stage: "maybe" });
  check("unknown stage is rejected", badStage.status === 400, badStage);

  const search = await call("/api/admin/contacts?q=501234", { headers: authHeaders });
  check("contacts search by phone digits", search.body?.data?.some((c: { id: string }) => c.id === contactId), search.body?.data?.length);

  console.log("\nCRM: quotes");
  const quote = await post("/api/admin/quotes", {
    title: "POS for 3 branches", contactId, language: "ar", currency: "EGP", discountType: "percent", discountValue: 10, taxRate: 14,
    lineItems: [{ description: "POS licence", qty: 3, unitPrice: 10000 }, { description: "Setup", qty: 1, unitPrice: 5000 }],
  }, authHeaders);
  const qd = quote.body?.data;
  check("quote is created with a number, token and totals", quote.status === 201 && /^KF-\d{4}-\d{4}$/.test(qd?.number) && qd?.totals?.total === 35910 && qd?.token, qd);
  const badLine = await post("/api/admin/quotes", { title: "x", lineItems: [{ description: "", qty: 1, unitPrice: 1 }] }, authHeaders);
  check("a quote line without a description is rejected", badLine.status === 400, badLine);

  const sent = await post(`/api/admin/quotes/${qd.id}/sent`, {}, authHeaders);
  const afterSent = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  check("marking sent moves the contact to Proposal", sent.body?.data?.status === "sent" && afterSent.body?.data?.contact?.stage === "proposal", afterSent.body?.data?.contact?.stage);

  const pub = await call(`/api/quotes/${qd.token}`);
  check(
    "the client link shows the quote without internal ids",
    pub.status === 200 && pub.body?.data?.status === "viewed" && pub.body?.data?.token === undefined && pub.body?.data?.contactId === undefined && pub.body?.data?.company?.companyName,
    pub.body?.data
  );
  const wrongToken = await call("/api/quotes/not-a-real-token");
  check("an unknown quote link is a 404", wrongToken.status === 404, wrongToken);
  const noName = await post(`/api/quotes/${qd.token}/accept`, { name: "" });
  check("accepting needs a typed name", noName.status === 400, noName);
  const accepted = await post(`/api/quotes/${qd.token}/accept`, { name: "Sara Crm" });
  const won = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  check(
    "accepting marks the quote, wins the deal and sets its value",
    accepted.body?.data?.status === "accepted" && won.body?.data?.contact?.stage === "won" && won.body?.data?.contact?.value === 35910,
    won.body?.data?.contact
  );
  const twice = await post(`/api/quotes/${qd.token}/accept`, { name: "Sara Crm" });
  check("an answered quote cannot be answered again", twice.status === 409, twice);
  const locked = await patch(`/api/admin/quotes/${qd.id}`, { title: "changed" });
  check("an accepted quote can no longer be edited", locked.status === 400, locked);

  console.log("\nCRM: bookings");
  const settings0 = await call("/api/admin/crm-settings", { headers: authHeaders });
  check("CRM settings load with defaults", settings0.body?.data?.booking?.timezone === "Africa/Cairo" && settings0.body?.data?.telegram?.hasBotToken === false, settings0.body?.data);
  const allDay = { windows: [{ start: "00:00", end: "23:30" }] };
  const openAll = await patch("/api/admin/crm-settings", { booking: { weekly: [allDay, allDay, allDay, allDay, allDay, allDay, allDay], minNoticeHours: 0, bufferMinutes: 0, slotMinutes: 30, enabled: true } });
  check("booking hours save", openAll.status === 200, openAll);
  const closed = { windows: [] };
  const badHours = await patch("/api/admin/crm-settings", { booking: { weekly: [{ windows: [{ start: "18:00", end: "09:00" }] }, closed, closed, closed, closed, closed, closed] } });
  check("an opening window that ends before it starts is rejected", badHours.status === 400, badHours);

  const slots = await call("/api/bookings/slots");
  const slot = slots.body?.data?.slots?.[0];
  check("public slots are listed", slots.status === 200 && !!slot?.start, slots.body?.data?.slots?.length);
  const badBooking = await post("/api/bookings", { start: slot.start, phone: "123", name: "X" });
  check("booking with an invalid phone is rejected", badBooking.status === 400 && badBooking.body?.errors?.[0]?.code === "INVALID_PHONE", badBooking);
  const booked = await post("/api/bookings", { start: slot.start, phone: "+966501234567", name: "Sara", topic: "POS demo", visitorId: V1, lang: "ar" });
  check("a call is booked", booked.status === 201 && booked.body?.data?.phone?.startsWith("+966"), booked);
  const again = await post("/api/bookings", { start: slot.start, phone: "+201012345678", name: "Other" });
  check("the same slot cannot be booked twice", again.status === 409 && again.body?.errors?.[0]?.code === "SLOT_TAKEN", again);
  const slots2 = await call("/api/bookings/slots");
  check("a booked slot leaves the list", !slots2.body?.data?.slots?.some((s: { start: string }) => s.start === slot.start), null);
  const bookings = await call("/api/admin/bookings", { headers: authHeaders });
  const bk = bookings.body?.data?.find((b: { start: string }) => b.start === slot.start);
  check("the booking is filed under the same contact", bk?.contactId === contactId && bk?.contactName, bk);
  const done = await patch(`/api/admin/bookings/${bk.id}`, { status: "completed" });
  check("booking status updates", done.body?.data?.status === "completed", done);

  console.log("\nCRM: alerts");
  const notes = await call("/api/admin/notifications?limit=50", { headers: authHeaders });
  const types = (notes.body?.data ?? []).map((n: { type: string }) => n.type);
  check("alerts were raised for lead, chat, quote and booking", ["lead", "chat", "quote_viewed", "quote_accepted", "booking"].every((t) => types.includes(t)), types);
  const count = await call("/api/admin/notifications/count", { headers: authHeaders });
  const cleared = await post("/api/admin/notifications/read", { ids: "all" }, authHeaders);
  check("unread count and mark-all-read", count.body?.data?.unread > 0 && cleared.body?.data?.unread === 0, [count.body, cleared.body]);

  await patch(`/api/admin/contacts/${contactId}`, { stage: "qualified", nextFollowUpAt: new Date(Date.now() - 60000).toISOString() });
  const check1 = await post("/api/admin/notifications/check", {}, authHeaders);
  const check2 = await post("/api/admin/notifications/check", {}, authHeaders);
  check("a due follow-up alerts once", check1.body?.data?.followUps === 1 && check2.body?.data?.followUps === 0, [check1.body, check2.body]);

  const tgNoToken = await post("/api/admin/crm-settings/telegram/test", {}, authHeaders);
  check("Telegram test needs a token first", tgNoToken.status === 400, tgNoToken);
  const tgBad = await patch("/api/admin/crm-settings", { telegram: { botToken: "nope" } });
  check("a malformed bot token is rejected", tgBad.status === 400, tgBad);
  const tgOk = await patch("/api/admin/crm-settings", { telegram: { botToken: "123456789:AAFakeTokenForSmokeTest_abcdefghij", chatId: "42", enabled: false } });
  check(
    "a saved bot token is never sent back",
    tgOk.body?.data?.telegram?.hasBotToken === true && tgOk.body?.data?.telegram?.botToken === undefined && tgOk.body?.data?.telegram?.botTokenHint === "ghij",
    tgOk.body?.data?.telegram
  );
  const publicSettings2 = await call("/api/content/settings");
  check("the public settings never include CRM secrets", !JSON.stringify(publicSettings2.body).includes("AAFakeToken"), null);

  const overview = await call("/api/admin/crm/overview", { headers: authHeaders });
  check(
    "CRM overview reports stages, new contacts and won value per currency",
    overview.body?.data?.newContacts7 >= 1 &&
      overview.body?.data?.stages?.some((s: { stage: string; values: Record<string, number> }) => s.stage === "qualified" || s.stage === "won"),
    overview.body?.data
  );

  const unauth = await call("/api/admin/contacts");
  check("CRM endpoints require auth", unauth.status === 401, unauth);

  const erased = await call(`/api/admin/contacts/${contactId}`, { method: "DELETE", headers: authHeaders });
  const gone = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  const v1Gone = await call(`/api/admin/crm/visitors/${V1}`, { headers: authHeaders });
  const quoteGone = await call(`/api/quotes/${qd.token}`);
  check("erasing a contact removes them, their browsing and their quotes", erased.status === 200 && gone.status === 404 && v1Gone.status === 404 && quoteGone.status === 404, [gone.status, v1Gone.status, quoteGone.status]);

  console.log("\nNewsletter");
  const subscribed = await post("/api/newsletter", {
    email: "News.Reader@Example.com",
    lang: "ar",
    source: "footer",
    visitorId: "newsletter-visitor-1",
  });
  const subscriberId: string = subscribed.body?.data?.id;
  check(
    "a new address subscribes (201, created)",
    subscribed.status === 201 && subscribed.body?.data?.created === true && !!subscriberId,
    subscribed
  );
  const subscribedAgain = await post("/api/newsletter", { email: "news.reader@example.com", source: "article" });
  check(
    "the same address again is a 200, not a duplicate",
    subscribedAgain.status === 200 && subscribedAgain.body?.data?.created === false && subscribedAgain.body?.data?.id === subscriberId,
    subscribedAgain
  );
  const badEmail = await post("/api/newsletter", { email: "not-an-email" });
  check("an invalid email is rejected", badEmail.status === 400, badEmail);
  // The hidden `website` field: a bot fills it, gets its 201, and nothing is stored.
  const honeypot = await post("/api/newsletter", { email: "bot@example.com", website: "http://spam.example" });
  check("the honeypot answers 201 to the bot", honeypot.status === 201 && honeypot.body?.data?.created === true, honeypot);
  const secondSubscriber = await post("/api/newsletter", { email: "Other.Person@Example.org", lang: "de", source: "popup" });
  check("a second address subscribes", secondSubscriber.status === 201, secondSubscriber);

  const subscribers = await call("/api/admin/newsletter", { headers: authHeaders });
  const subRows: { id: string; email: string; lang?: string; source: string; contactId?: string }[] = subscribers.body?.data ?? [];
  const reader = subRows.find((r) => r.id === subscriberId);
  check(
    "admin list has the address lower-cased, filed under a contact, and never the bot",
    subRows.length === 2 &&
      reader?.email === "news.reader@example.com" &&
      reader?.lang === "ar" &&
      reader?.source === "footer" &&
      !!reader?.contactId &&
      !subRows.some((r) => r.email === "bot@example.com"),
    subRows
  );
  const subscriberContact = await call(`/api/admin/contacts/${reader?.contactId}`, { headers: authHeaders });
  check(
    "the subscriber's contact carries the newsletter source and a timeline entry",
    subscriberContact.body?.data?.contact?.sources?.includes("newsletter") &&
      subscriberContact.body?.data?.contact?.emails?.includes("news.reader@example.com") &&
      subscriberContact.body?.data?.contact?.visitorIds?.includes("newsletter-visitor-1") &&
      subscriberContact.body?.data?.activities?.some((a: { type: string }) => a.type === "newsletter"),
    subscriberContact.body?.data
  );
  const subscriberSearch = await call("/api/admin/newsletter?q=other.person", { headers: authHeaders });
  check(
    "subscribers can be searched by email",
    subscriberSearch.body?.data?.length === 1 && subscriberSearch.body.data[0].email === "other.person@example.org",
    subscriberSearch.body?.data
  );

  const csvRes = await fetch(`${base}/api/admin/newsletter?format=csv`, { headers: authHeaders });
  // Raw bytes: `Response.text()` (and TextDecoder by default) strip a leading
  // BOM, which is exactly the byte this checks for.
  const csvBytes = new Uint8Array(await csvRes.arrayBuffer());
  const csvHasBom = csvBytes[0] === 0xef && csvBytes[1] === 0xbb && csvBytes[2] === 0xbf;
  const csv = new TextDecoder().decode(csvBytes);
  const csvLines = csv.split("\r\n");
  check(
    "CSV export has the right headers, a BOM, and every subscriber",
    csvRes.headers.get("content-type") === "text/csv; charset=utf-8" &&
      csvRes.headers.get("content-disposition") === 'attachment; filename="subscribers.csv"' &&
      csvHasBom &&
      csvLines[0] === "email,lang,source,consentAt,unsubscribedAt,createdAt" &&
      csvLines.some((l) => l.startsWith("news.reader@example.com,ar,footer,")) &&
      csvLines.some((l) => l.startsWith("other.person@example.org,de,popup,")),
    { headers: Object.fromEntries(csvRes.headers), csv }
  );

  const newsletterAlerts = await call("/api/admin/notifications?limit=50", { headers: authHeaders });
  check(
    "a new subscriber raises an alert linked to the contact",
    (newsletterAlerts.body?.data ?? []).some(
      (n: { type: string; contactId?: string }) => n.type === "newsletter" && n.contactId === reader?.contactId
    ),
    (newsletterAlerts.body?.data ?? []).map((n: { type: string }) => n.type)
  );

  const removedReader = await call(`/api/admin/newsletter/${subscriberId}`, { method: "DELETE", headers: authHeaders });
  const removedOther = await call(`/api/admin/newsletter/${subscriberSearch.body?.data?.[0]?.id}`, {
    method: "DELETE",
    headers: authHeaders,
  });
  const afterRemove = await call("/api/admin/newsletter", { headers: authHeaders });
  check(
    "subscribers can be removed",
    removedReader.status === 200 && removedOther.status === 200 && afterRemove.body?.data?.length === 0,
    afterRemove.body?.data
  );
  const removeMissing = await call("/api/admin/newsletter/000000000000000000000000", { method: "DELETE", headers: authHeaders });
  check("removing an unknown subscriber is a 404", removeMissing.status === 404, removeMissing);
  const newsletterNoAuth = await call("/api/admin/newsletter");
  check("the subscriber list requires auth", newsletterNoAuth.status === 401, newsletterNoAuth);

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

  // Distinct addresses, so it is the limiter and not the idempotent 200 that stops the flood.
  let sawNewsletterLimit = false;
  for (let i = 0; i < 8; i++) {
    const res = await post("/api/newsletter", { email: `flood${i}@example.com` });
    if (res.status === 429) {
      sawNewsletterLimit = true;
      break;
    }
  }
  check("repeated newsletter sign-ups get rate limited", sawNewsletterLimit);

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
  if (external) await mongoose.connection.db?.dropDatabase().catch(() => {});
  await mongoose.disconnect();
  await mongo?.stop();

  console.log(`\n${passed} passed, ${failed} failed\n`);
  process.exit(failed === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
