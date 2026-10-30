import type { BookingSettings } from "./types/index.js";

/**
 * Bookable call slots, as pure functions of the settings and the clock.
 *
 * Opening hours are wall-clock times in the business's time zone ("10:00" in
 * Cairo), so every conversion goes through that zone's real offset for that
 * date — Egypt and Europe both move their clocks, and a slot must not shift by
 * an hour on the day they do.
 */

/** The zone's offset from UTC, in minutes, at a given instant. */
export function zoneOffsetMinutes(instant: number, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date(instant));
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
  return Math.round((asUtc - Math.floor(instant / 1000) * 1000) / 60000);
}

/** The UTC instant of a wall-clock time in a zone ("2026-10-29", "10:00", "Africa/Cairo"). */
export function zonedToUtc(date: string, time: string, timeZone: string): number {
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  const naive = Date.UTC(y, m - 1, d, hh, mm);
  // Two passes settle the offset across a clock change.
  let guess = naive - zoneOffsetMinutes(naive, timeZone) * 60000;
  guess = naive - zoneOffsetMinutes(guess, timeZone) * 60000;
  return guess;
}

/** "YYYY-MM-DD" and weekday (0 = Sunday) of an instant in a zone. */
export function zonedDate(instant: number, timeZone: string): { date: string; weekday: number } {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  }).formatToParts(new Date(instant));
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { date: `${get("year")}-${get("month")}-${get("day")}`, weekday };
}

export function isValidTimeZone(tz: unknown): tz is string {
  if (typeof tz !== "string" || !tz) return false;
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: tz });
    return true;
  } catch {
    return false;
  }
}

const HHMM = /^([01]\d|2[0-3]):[0-5]\d$/;
export const isHHMM = (v: unknown): v is string => typeof v === "string" && HHMM.test(v);

export interface Slot {
  /** ISO start, UTC. */
  start: string;
  end: string;
}

/** The opening windows for one date: its own override if set, else the weekday's. */
export function windowsFor(settings: BookingSettings, date: string, weekday: number) {
  const override = settings.dateOverrides?.[date];
  if (override && Array.isArray(override.windows)) return override.windows;
  return settings.weekly?.[weekday]?.windows ?? [];
}

/**
 * Every free slot from now to `daysAhead` days out. A slot is free when it is
 * inside opening hours (that date's own hours when set, else the weekday's),
 * at least `minNoticeHours` away, not on a blocked date, and at least
 * `bufferMinutes` clear of every existing booking.
 */
export function computeSlots(settings: BookingSettings, now: number, taken: { start: string; end: string }[]): Slot[] {
  if (!settings.enabled) return [];
  const tz = isValidTimeZone(settings.timezone) ? settings.timezone : "UTC";
  const slotMs = Math.max(10, settings.slotMinutes) * 60000;
  const bufferMs = Math.max(0, settings.bufferMinutes) * 60000;
  const earliest = now + Math.max(0, settings.minNoticeHours) * 3600000;
  const busy = taken.map((b) => [Date.parse(b.start) - bufferMs, Date.parse(b.end) + bufferMs] as const);
  const blocked = new Set(settings.blockedDates ?? []);
  const out: Slot[] = [];

  for (let d = 0; d <= Math.min(Math.max(settings.daysAhead, 0), 90); d++) {
    // Noon avoids landing on the wrong date near midnight in any zone.
    const { date, weekday } = zonedDate(now + d * 86400000, tz);
    if (blocked.has(date)) continue;
    for (const w of windowsFor(settings, date, weekday)) {
      if (!isHHMM(w.start) || !isHHMM(w.end)) continue;
      const open = zonedToUtc(date, w.start, tz);
      const close = zonedToUtc(date, w.end, tz);
      for (let t = open; t + slotMs <= close; t += slotMs + bufferMs) {
        if (t < earliest) continue;
        const end = t + slotMs;
        if (busy.some(([s, e]) => t < e && end > s)) continue;
        out.push({ start: new Date(t).toISOString(), end: new Date(end).toISOString() });
      }
    }
  }
  // De-duplicate (a zone's date can repeat across the day loop) and sort.
  const seen = new Set<string>();
  return out.filter((s) => (seen.has(s.start) ? false : (seen.add(s.start), true))).sort((a, b) => a.start.localeCompare(b.start));
}
