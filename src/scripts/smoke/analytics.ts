import { check } from "./harness.js";
import type { Smoke } from "./harness.js";

/** Analytics beacons, the credentialed preflight and the dashboard summary. */
export async function analyticsSection(ctx: Smoke) {
  const { base, call, authHeaders } = ctx;
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
}
