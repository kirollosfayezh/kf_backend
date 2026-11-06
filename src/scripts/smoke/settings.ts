import { check } from "./harness.js";
import type { Smoke } from "./harness.js";

/** Site settings: defaults, marketing tags and social profiles round-trip. */
export async function settingsSection(ctx: Smoke) {
  const { call, authHeaders } = ctx;
  console.log("\nSettings");
  const settings = await call("/api/content/settings");
  check("public settings are seeded with defaults", settings.body?.data?.siteName === "KF Tech Solutions", settings);

  check(
    "settings carry no Mongoose _id noise",
    !JSON.stringify(settings.body.data).includes("_id"),
    settings.body.data
  );
  check(
    "seeded defaults expose the empty brand block",
    Array.isArray(settings.body?.data?.brand?.profiles) && Array.isArray(settings.body?.data?.brand?.alternateNames?.de),
    settings.body?.data?.brand
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

  /**
   * Brand identity: the Organization schema, the About page and llms.txt read
   * these. Read back from the public endpoint and compared whole, so a path
   * the model forgot to declare (which `strict` would drop silently) and an
   * `_id` on an array row both show up.
   */
  const brand = {
    alternateNames: { en: ["KF Tech", "KFTech"], ar: ["كي إف تك"], de: [], fr: ["KF Tech"] },
    foundingDate: "2020",
    founderProfiles: ["https://github.com/kirollosfayezh"],
    profiles: ["https://www.snapchat.com/add/kftechsolutions", "https://clutch.co/profile/kf-tech"],
    notAffiliatedWith: [{ name: "KFTECH Software Solutions", url: "https://kftechsols.com" }],
  };
  const brandSaved = await call("/api/admin/settings", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ brand: { ...brand, alternateNames: { ...brand.alternateNames, en: [" KF Tech ", "KFTech", ""] } } }),
  });
  const brandPublic = (await call("/api/content/settings")).body?.data?.brand;
  check(
    "brand identity round-trips through the public settings, normalised",
    brandSaved.status === 200 && JSON.stringify(brandPublic) === JSON.stringify(brand),
    brandPublic
  );
  check("brand identity carries no _id noise", !JSON.stringify(brandPublic).includes("_id"), brandPublic);

  const brandHttp = await call("/api/admin/settings", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ brand: { ...brand, profiles: ["http://clutch.co/profile/kf-tech"] } }),
  });
  check("a non-https brand profile is rejected", brandHttp.status === 400, brandHttp);
  const brandYear = await call("/api/admin/settings", {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ brand: { ...brand, foundingDate: "twenty-twenty" } }),
  });
  check("a malformed founding date is rejected", brandYear.status === 400, brandYear);

  // PATCH replaces top-level keys whole, so a save that does not mention the
  // brand must leave it as it was.
  await call("/api/admin/settings", { method: "PATCH", headers: authHeaders, body: JSON.stringify({ siteName: "KF Tech Solutions" }) });
  const brandAfter = (await call("/api/content/settings")).body?.data?.brand;
  check("a later settings save leaves the brand identity intact", JSON.stringify(brandAfter) === JSON.stringify(brand), brandAfter);

  // A document saved before the block existed has no `brand` at all; the
  // site expects the empty shape, not `undefined`.
  await ctx.mongoose.connection.collection("siteSettings").updateOne({}, { $unset: { brand: "" } });
  const legacyBrand = (await call("/api/content/settings")).body?.data?.brand;
  check(
    "a settings document without a brand block reads back with the empty shape",
    Array.isArray(legacyBrand?.profiles) && Array.isArray(legacyBrand?.alternateNames?.ar) && legacyBrand?.foundingDate === "",
    legacyBrand
  );
}
