import { test } from "node:test";
import assert from "node:assert/strict";
import { quoteTotals } from "./quote-math.js";
import { computeSlots, zonedToUtc, zoneOffsetMinutes } from "./slots.js";
import type { BookingSettings } from "./types.js";

test("quote totals: lines, percent discount, tax", () => {
  const t = quoteTotals(
    [
      { description: "POS setup", qty: 1, unitPrice: 25000 },
      { description: "Training hours", qty: 3, unitPrice: 750.5 },
    ],
    "percent",
    10,
    14
  );
  assert.deepEqual(t.lines, [25000, 2251.5]);
  assert.equal(t.subtotal, 27251.5);
  assert.equal(t.discount, 2725.15);
  assert.equal(t.taxable, 24526.35);
  assert.equal(t.tax, 3433.69);
  assert.equal(t.total, 27960.04);
});

test("quote totals: a fixed discount never exceeds the subtotal, bad input is zero", () => {
  const t = quoteTotals([{ description: "x", qty: 2, unitPrice: 100 }], "amount", 500, 0);
  assert.equal(t.discount, 200);
  assert.equal(t.total, 0);
  const bad = quoteTotals([{ description: "x", qty: Number.NaN, unitPrice: 5 }], "percent", -5, -1);
  assert.equal(bad.total, 0);
});

test("time zones: Cairo summer and winter offsets", () => {
  // Egypt observes DST (UTC+3) from late April to late October since 2023.
  assert.equal(zoneOffsetMinutes(Date.UTC(2026, 6, 1, 12), "Africa/Cairo"), 180);
  assert.equal(zoneOffsetMinutes(Date.UTC(2026, 0, 15, 12), "Africa/Cairo"), 120);
  assert.equal(new Date(zonedToUtc("2026-07-01", "10:00", "Africa/Cairo")).toISOString(), "2026-07-01T07:00:00.000Z");
  assert.equal(new Date(zonedToUtc("2026-01-15", "10:00", "Africa/Cairo")).toISOString(), "2026-01-15T08:00:00.000Z");
  // Berlin, either side of the October change.
  assert.equal(new Date(zonedToUtc("2026-10-24", "09:00", "Europe/Berlin")).toISOString(), "2026-10-24T07:00:00.000Z");
  assert.equal(new Date(zonedToUtc("2026-10-26", "09:00", "Europe/Berlin")).toISOString(), "2026-10-26T08:00:00.000Z");
});

const base: BookingSettings = {
  weekly: [{ windows: [{ start: "10:00", end: "12:00" }] }, { windows: [] }, { windows: [] }, { windows: [] }, { windows: [] }, { windows: [] }, { windows: [] }], // Sundays only
  slotMinutes: 30,
  bufferMinutes: 0,
  minNoticeHours: 0,
  daysAhead: 7,
  timezone: "Africa/Cairo",
  blockedDates: [],
  enabled: true,
};
// Friday 2026-01-09 08:00 UTC; the next Sunday is 2026-01-11 (Cairo UTC+2).
const NOW = Date.UTC(2026, 0, 9, 8);

test("slots: opening hours in the business time zone", () => {
  const slots = computeSlots(base, NOW, []);
  assert.deepEqual(
    slots.map((s) => s.start),
    ["2026-01-11T08:00:00.000Z", "2026-01-11T08:30:00.000Z", "2026-01-11T09:00:00.000Z", "2026-01-11T09:30:00.000Z"]
  );
});

test("slots: buffer spacing, bookings, blocked dates, notice, disabled", () => {
  // 10:00, 10:45, 11:30 (Cairo) — each slot plus its 15-minute gap.
  assert.equal(computeSlots({ ...base, bufferMinutes: 15 }, NOW, []).length, 3);
  const taken = [{ start: "2026-01-11T08:30:00.000Z", end: "2026-01-11T09:00:00.000Z" }];
  assert.deepEqual(
    computeSlots({ ...base, bufferMinutes: 0 }, NOW, taken).map((s) => s.start.slice(11, 16)),
    ["08:00", "09:00", "09:30"]
  );
  // With a 10-minute buffer the neighbours of a booking are blocked too.
  assert.deepEqual(computeSlots({ ...base, slotMinutes: 30, bufferMinutes: 10 }, NOW, taken).map((s) => s.start.slice(11, 16)), ["09:20"]);
  assert.equal(computeSlots({ ...base, blockedDates: ["2026-01-11"] }, NOW, []).length, 0);
  // Two hours before the first Sunday slot, a 3-hour notice rule hides the first slot only.
  const justBefore = Date.UTC(2026, 0, 11, 5, 30);
  assert.equal(computeSlots({ ...base, minNoticeHours: 3 }, justBefore, [])[0].start, "2026-01-11T08:30:00.000Z");
  assert.equal(computeSlots({ ...base, enabled: false }, NOW, []).length, 0);
});

test("slots: a date's own hours replace the weekday's, and empty hours close it", () => {
  // Sunday 2026-01-11 normally 10:00–12:00 Cairo; this Sunday runs 15:00–16:00 instead.
  const custom = computeSlots({ ...base, dateOverrides: { "2026-01-11": { windows: [{ start: "15:00", end: "16:00" }] } } }, NOW, []);
  assert.deepEqual(custom.map((s) => s.start), ["2026-01-11T13:00:00.000Z", "2026-01-11T13:30:00.000Z"]);
  assert.equal(computeSlots({ ...base, dateOverrides: { "2026-01-11": { windows: [] } } }, NOW, []).length, 0);
  // An override on a normally closed day opens it.
  const opened = computeSlots({ ...base, dateOverrides: { "2026-01-10": { windows: [{ start: "09:00", end: "10:00" }] } } }, NOW, []);
  assert.equal(opened.filter((s) => s.start.startsWith("2026-01-10")).length, 2);
});

test("slots: a Cairo summer day uses the summer offset", () => {
  const summerNow = Date.UTC(2026, 6, 3, 8); // Friday 3 July 2026
  assert.equal(computeSlots(base, summerNow, [])[0].start, "2026-07-05T07:00:00.000Z");
});
