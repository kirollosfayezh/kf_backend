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
}
