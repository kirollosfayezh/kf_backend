import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import type { AnalyticsEvent, AnalyticsEventType, DeviceKind } from "../types.js";

const TYPES: AnalyticsEventType[] = ["pageview", "click"];
const DEVICES: DeviceKind[] = ["mobile", "tablet", "desktop"];

export interface IncomingEvent {
  type?: string;
  path?: string;
  label?: string;
  visitorId?: string;
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

export async function recordEvents(incoming: IncomingEvent[]): Promise<number> {
  if (!Array.isArray(incoming) || incoming.length === 0) {
    throw AppError.badRequest("events must be a non-empty array");
  }
  if (incoming.length > 50) throw AppError.badRequest("Too many events in one batch");

  const now = Date.now();
  const events: AnalyticsEvent[] = [];

  for (const raw of incoming) {
    const type = raw.type as AnalyticsEventType;
    if (!TYPES.includes(type)) continue;

    const path = clean(raw.path, 200);
    if (!path) continue;

    // Trust the client's clock only as far as "roughly now" — a wrong device
    // clock must not land events in the wrong day bucket.
    const ts = typeof raw.ts === "number" && Math.abs(now - raw.ts) < 60 * 60 * 1000 ? raw.ts : now;
    const device = DEVICES.includes(raw.device as DeviceKind) ? (raw.device as DeviceKind) : undefined;

    events.push({
      type,
      path,
      label: clean(raw.label, 80),
      visitorId: clean(raw.visitorId, 64),
      referrer: clean(raw.referrer, 200),
      lang: clean(raw.lang, 8),
      device,
      ts,
      day: new Date(ts).toISOString().slice(0, 10),
      createdAt: new Date(),
    });
  }

  if (events.length === 0) throw AppError.badRequest("No valid events in batch");
  return repos.analytics.record(events);
}

export function getSummary(days: number) {
  const window = Number.isFinite(days) ? Math.min(Math.max(Math.trunc(days), 1), 180) : 30;
  return repos.analytics.summary(window);
}
