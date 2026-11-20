import { check } from "./harness.js";
import type { Smoke } from "./harness.js";

/**
 * Google Ads: the extra detail an ad click carries, and the search terms the
 * account's script uploads with its sync key.
 */
export async function adsSection(ctx: Smoke) {
  const { call, post, authHeaders } = ctx;
  console.log("\nGoogle Ads");
  // `post` sends exactly the headers it is given, so the key travels with the content type.
  const keyed = (k: string) => ({ "content-type": "application/json", "x-kf-key": k });

  // ---- the key
  const noAuth = await call("/api/admin/analytics/google-ads/setup");
  check("ads setup requires auth", noAuth.status === 401, noAuth.status);
  const setup = await call("/api/admin/analytics/google-ads/setup", { headers: authHeaders });
  const key: string = setup.body?.data?.key ?? "";
  check("ads setup hands out a sync key", setup.status === 200 && /^kfads_.{20,}$/.test(key) && !setup.body?.data?.lastSyncAt, setup.body);
  const again = await call("/api/admin/analytics/google-ads/setup", { headers: authHeaders });
  check("the key is stable between visits", again.body?.data?.key === key, again.body);

  // ---- uploads
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const row = (day: string, term: string, extra: Record<string, unknown> = {}) => ({
    day,
    campaignId: "2199",
    adGroupId: "77",
    term,
    keyword: "pos system",
    matchType: "BROAD",
    status: "NONE",
    impressions: "10",
    clicks: "2",
    costMicros: "30000000",
    conversions: 0,
    ...extra,
  });
  const payload = {
    account: { id: "123-456-7890", name: "KF Tech", currency: "EGP", timezone: "Africa/Cairo" },
    rows: [row(today, "free pos software"), row(yesterday, "free pos software"), row(today, "pos system for restaurant", { clicks: "1", costMicros: "9000000", conversions: 1 }), { day: "bad" }],
  };

  const anonymous = await post("/api/integrations/google-ads/sync", payload);
  check("upload without a key is refused", anonymous.status === 401, anonymous);
  const wrongKey = await post("/api/integrations/google-ads/sync", payload, keyed("kfads_not-the-key"));
  check("upload with a wrong key is refused", wrongKey.status === 401, wrongKey);

  const first = await post("/api/integrations/google-ads/sync", payload, keyed(key));
  check("upload with the key is stored, bad rows skipped", first.status === 200 && first.body?.data?.written === 3 && first.body?.data?.skipped === 1, first);

  const beforeDone = await call("/api/admin/analytics/search-terms?days=30", { headers: authHeaders });
  check("a run is not 'synced' until its last request", beforeDone.body?.data?.synced === false, beforeDone.body?.data);

  // The same days again (every run re-sends the last 30) plus the closing request with the names.
  await post("/api/integrations/google-ads/sync", { rows: payload.rows.slice(0, 3) }, keyed(key));
  const done = await post(
    "/api/integrations/google-ads/sync",
    { campaigns: [{ id: "2199", name: "POS – Egypt" }], adGroups: [{ id: "77", name: "POS generic" }], rows: [], done: true, totalRows: 3 },
    keyed(key)
  );
  check("the closing request is accepted", done.status === 200, done);

  const tooMany = await post("/api/integrations/google-ads/sync", { rows: Array.from({ length: 401 }, (_, i) => row(today, `t${i}`)) }, keyed(key));
  check("an oversized request is refused", tooMany.status === 400 || tooMany.status === 413, tooMany.status);

  // ---- the report
  const noAuthReport = await call("/api/admin/analytics/search-terms");
  check("search terms require auth", noAuthReport.status === 401, noAuthReport.status);
  const report = await call("/api/admin/analytics/search-terms?days=30", { headers: authHeaders });
  const r = report.body?.data;
  const free = r?.rows?.find((x: { term: string }) => x.term === "free pos software");
  check("re-sending a day overwrites it (no double counting)", r?.rows?.length === 2 && free?.clicks === 4 && free?.cost === 60 && free?.impressions === 20, r?.rows);
  check("terms come most expensive first, with names for ids", r?.rows?.[0]?.term === "free pos software" && free?.campaign === "POS – Egypt" && free?.adGroup === "POS generic", r?.rows?.[0]);
  check("the report carries match type and status", free?.matchType === "broad" && free?.status === "none" && free?.keyword === "pos system", free);
  check("totals and sync state are reported", r?.synced === true && !!r?.lastSyncAt && r?.totals?.terms === 2 && r?.totals?.clicks === 5 && r?.totals?.cost === 69 && r?.account?.currency === "EGP", { totals: r?.totals, synced: r?.synced });

  // ---- what an ad click itself carries
  const beacon = await post("/api/analytics/events", {
    events: [
      {
        type: "session",
        visitorId: "ad-visitor-1",
        timezone: "Africa/Cairo",
        touch: { landingPath: "/services/pos", utmSource: "google", utmMedium: "cpc", utmCampaign: "2199", utmTerm: "pos system", utmContent: "77", matchType: "b", network: "g", adId: "70012", gbraid: "0AAAAAB" },
        ts: Date.now(),
      },
      { type: "pageview", path: "/services/pos", visitorId: "ad-visitor-1", device: "mobile", ts: Date.now() },
      // iOS: no gclid and no tags at all, only Google's wbraid.
      { type: "session", visitorId: "ad-visitor-2", touch: { landingPath: "/", wbraid: "0BBBBBB" }, ts: Date.now() },
      { type: "pageview", path: "/", visitorId: "ad-visitor-2", device: "mobile", ts: Date.now() },
    ],
  });
  check("ad click beacons accepted", beacon.status === 202, beacon);

  const insights = await call("/api/admin/analytics/insights?days=30", { headers: authHeaders });
  const ads = insights.body?.data?.ads;
  const person = ads?.people?.find((p: { visitorId: string }) => p.visitorId === "ad-visitor-1");
  check("an ad visitor shows keyword, match type, network and ad", person?.keyword === "pos system" && person?.matchType === "broad" && person?.network === "g" && person?.adId === "70012", person);
  check("campaign and ad group ids are shown by name", person?.campaign === "POS – Egypt" && person?.adGroup === "POS generic" && ads?.campaigns?.some((c: { key: string }) => c.key === "POS – Egypt"), { person, campaigns: ads?.campaigns });
  check("match types and networks are counted", ads?.matchTypes?.[0]?.key === "broad" && ads?.networks?.[0]?.key === "g", { m: ads?.matchTypes, n: ads?.networks });
  check("an iOS click id alone counts as a Google ad", ads?.people?.some((p: { visitorId: string }) => p.visitorId === "ad-visitor-2"), ads?.people?.map((p: { visitorId: string }) => p.visitorId));

  // ---- rotating the key
  const rotated = await call("/api/admin/analytics/google-ads/setup/rotate", { method: "POST", headers: authHeaders });
  const newKey: string = rotated.body?.data?.key ?? "";
  check("rotating issues a different key and keeps the sync state", /^kfads_/.test(newKey) && newKey !== key && !!rotated.body?.data?.lastSyncAt, rotated.body);
  const stale = await post("/api/integrations/google-ads/sync", { rows: [] }, keyed(key));
  check("the old key stops working", stale.status === 401, stale.status);
  const fresh = await post("/api/integrations/google-ads/sync", { rows: [] }, keyed(newKey));
  check("the new key works", fresh.status === 200, fresh.status);
}
