/**
 * Dev-only helper: writes backdated analytics events straight through the
 * model, so the dashboard can be developed against a realistic multi-day
 * series. The public ingest endpoint deliberately clamps client timestamps to
 * ±1 hour (a wrong device clock must not land events in the wrong day), so it
 * cannot be used to backfill history.
 *
 * Never run this against production data.
 */
import { connectDb } from "../db/connect.js";
import { AnalyticsModel } from "../models/analytics.model.js";
import type { AnalyticsEvent } from "../shared/types.js";

const PATHS = ["/", "/services", "/solutions", "/projects", "/blog", "/contact", "/about"];
const LABELS = ["hero.start-project", "hero.see-work", "contact.submit", "nav.lets-build", "footer.whatsapp"];
const REFS = ["https://www.google.com", "https://www.linkedin.com", "https://t.co", "https://www.facebook.com", null];
const DEVICES = ["mobile", "desktop", "tablet"] as const;
const DAY = 86_400_000;

function rand(n: number) {
  return Math.floor(Math.random() * n);
}

export async function seedAnalytics(days = 75) {
  const events: AnalyticsEvent[] = [];
  const now = Date.now();

  for (let d = 0; d < days; d++) {
    // A gentle upward trend with weekday seasonality, so the chart looks like
    // traffic rather than noise.
    const dow = new Date(now - d * DAY).getUTCDay();
    const weekend = dow === 0 || dow === 6 ? 0.55 : 1;
    const growth = 1 + (days - d) / days;
    const views = Math.round((18 + rand(14)) * weekend * growth);

    for (let i = 0; i < views; i++) {
      const ts = now - d * DAY - rand(DAY);
      events.push({
        type: "pageview",
        path: PATHS[rand(PATHS.length)],
        visitorId: `v${rand(240)}`,
        referrer: REFS[rand(REFS.length)] ?? undefined,
        device: DEVICES[rand(DEVICES.length)],
        lang: ["en", "ar", "de", "fr"][rand(4)],
        ts,
        day: new Date(ts).toISOString().slice(0, 10),
        createdAt: new Date(ts),
      } as AnalyticsEvent);
    }

    for (let i = 0; i < Math.round(views * 0.28); i++) {
      const ts = now - d * DAY - rand(DAY);
      events.push({
        type: "click",
        path: PATHS[rand(PATHS.length)],
        label: LABELS[rand(LABELS.length)],
        visitorId: `v${rand(240)}`,
        device: DEVICES[rand(DEVICES.length)],
        ts,
        day: new Date(ts).toISOString().slice(0, 10),
        createdAt: new Date(ts),
      } as AnalyticsEvent);
    }
  }

  await AnalyticsModel.insertMany(events, { ordered: false });
  return events.length;
}

// Standalone use: `tsx src/scripts/dev-seed-analytics.ts`
if (process.argv[1]?.includes("dev-seed-analytics")) {
  await connectDb();
  const n = await seedAnalytics();
  console.log(`seeded ${n} analytics events`);
  process.exit(0);
}
