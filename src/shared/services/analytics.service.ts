import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { cleanTouch, countryFromTimezone, parseUserAgent } from "../tracking.js";
import type { AnalyticsEvent, AnalyticsEventType, ConsentStatus, DeviceKind } from "../types.js";
import type { VisitorTouch } from "../../repositories/mongo/crm.repo.js";

const TYPES: AnalyticsEventType[] = ["pageview", "click", "conversion"];

/**
 * Bumped whenever the cookie wording or the Privacy Policy's cookie section
 * changes, so each consent record says which text the visitor agreed to.
 */
export const CONSENT_POLICY_VERSION = "2026-09-25";
const DEVICES: DeviceKind[] = ["mobile", "tablet", "desktop"];

export interface IncomingEvent {
  /** pageview | click | conversion, plus two that are not stored as events:
   *  `session` (once per tab: where the visit came from) and
   *  `consent` (the visitor's cookie choice). */
  type?: string;
  path?: string;
  /** Click: the control's label. Conversion: the kind (lead, booking, chat_start, quote_accepted, newsletter). */
  label?: string;
  visitorId?: string;
  sessionId?: string;
  touch?: unknown;
  timezone?: string;
  screen?: string;
  status?: string;
  source?: string;
  referrer?: string;
  lang?: string;
  device?: string;
  ts?: number;
}

/** Keeps stray or oversized values out of the collection — this is a public endpoint. */
function clean(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, max) : undefined;
}

export async function recordEvents(incoming: IncomingEvent[], context: { userAgent?: string } = {}): Promise<number> {
  if (!Array.isArray(incoming) || incoming.length === 0) {
    throw AppError.badRequest("events must be a non-empty array");
  }
  if (incoming.length > 50) throw AppError.badRequest("Too many events in one batch");

  const now = Date.now();
  const events: AnalyticsEvent[] = [];
  const ua = parseUserAgent(context.userAgent);
  // Crawlers still get their page views counted as before, but never a
  // visitor profile — they would swamp the Visitors screen.
  const touches = new Map<string, VisitorTouch>();
  const touchFor = (visitorId: string, ts: number): VisitorTouch => {
    let t = touches.get(visitorId);
    if (!t) {
      t = { visitorId, lastSeen: ts, pageviews: 0, clicks: 0, sessions: 0, browser: ua.browser, os: ua.os };
      touches.set(visitorId, t);
    }
    t.lastSeen = Math.max(t.lastSeen, ts);
    return t;
  };
  let special = 0;

  for (const raw of incoming) {
    const clientTs = typeof raw.ts === "number" && Math.abs(now - raw.ts) < 60 * 60 * 1000 ? raw.ts : now;
    const vid = clean(raw.visitorId, 64);

    if (raw.type === "session" && vid && !ua.bot) {
      const t = touchFor(vid, clientTs);
      t.sessions += 1;
      t.touch = cleanTouch(raw.touch, new Date(clientTs).toISOString());
      t.timezone = clean(raw.timezone, 64);
      t.country = countryFromTimezone(t.timezone);
      t.screen = clean(raw.screen, 20);
      t.lang = clean(raw.lang, 8) ?? t.lang;
      special++;
      continue;
    }

    if (raw.type === "consent") {
      const status = raw.status === "granted" || raw.status === "denied" ? (raw.status as ConsentStatus) : null;
      if (!status) continue;
      const at = new Date(clientTs).toISOString();
      await repos.consent.record({
        visitorId: vid,
        status,
        source: raw.source === "settings" ? "settings" : "banner",
        policyVersion: CONSENT_POLICY_VERSION,
        userAgent: clean(context.userAgent, 300),
        at,
      });
      if (vid) await repos.visitors.setConsent(vid, status, at);
      special++;
      continue;
    }

    const type = raw.type as AnalyticsEventType;
    if (!TYPES.includes(type)) continue;

    const path = clean(raw.path, 200);
    if (!path) continue;

    // Trust the client's clock only as far as "roughly now" — a wrong device
    // clock must not land events in the wrong day bucket.
    const ts = typeof raw.ts === "number" && Math.abs(now - raw.ts) < 60 * 60 * 1000 ? raw.ts : now;
    const device = DEVICES.includes(raw.device as DeviceKind) ? (raw.device as DeviceKind) : undefined;

    if (vid && !ua.bot) {
      const t = touchFor(vid, ts);
      // A conversion is neither: it shows in the visitor's journey, but must
      // not inflate the profile's click count or the dashboard's click totals.
      if (type === "pageview") t.pageviews += 1;
      else if (type === "click") t.clicks += 1;
      t.device = device ?? t.device;
      t.lang = clean(raw.lang, 8) ?? t.lang;
    }

    events.push({
      type,
      path,
      label: clean(raw.label, 80),
      visitorId: vid,
      sessionId: clean(raw.sessionId, 64),
      referrer: clean(raw.referrer, 200),
      lang: clean(raw.lang, 8),
      device,
      ts,
      day: new Date(ts).toISOString().slice(0, 10),
      createdAt: new Date(),
    });
  }

  if (events.length === 0 && special === 0) throw AppError.badRequest("No valid events in batch");
  // Profiles are best effort: a failed upsert must not lose the events themselves.
  await Promise.all([...touches.values()].map((t) => repos.visitors.touch(t).catch((err) => console.error("visitor touch", err))));
  return events.length ? repos.analytics.record(events) : 0;
}

export function getSummary(days: number) {
  // 365 so the dashboard can offer a full year; anything longer is a report,
  // not a dashboard, and the unindexed scan cost stops being worth it.
  const window = Number.isFinite(days) ? Math.min(Math.max(Math.trunc(days), 1), 365) : 30;
  return repos.analytics.summary(window);
}
