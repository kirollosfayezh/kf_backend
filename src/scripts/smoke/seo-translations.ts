import { check } from "./harness.js";
import type { Smoke } from "./harness.js";

/** SEO overrides (per language, legacy rows), translation overrides, and the rebuild each kind of write requests. */
export async function seoAndTranslationsSection(ctx: Smoke) {
  const { call, authHeaders, mongoose, rebuilds, rebuildRequested, deployHook } = ctx;
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
  rebuilds.length = 0;
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
  rebuilds.length = 0;
  await call("/api/admin/settings", { method: "PATCH", headers: authHeaders, body: JSON.stringify({ tagline: { en: "E2", ar: "A", de: "D", fr: "F" } }) });
  check("a settings write asks the site to rebuild", (await rebuildRequested()) === 1, rebuilds);
  // From here on nothing should reach the hook: later sections write content
  // too, and a stray POST would only be noise in the assertions above.
  deployHook._resetForTests();
  process.env.VERCEL_DEPLOY_HOOK_URL = "";
}
