import { Schema, model } from "mongoose";
import type { AdminNotification, CrmSettings } from "../shared/types.js";

const sub = (definition: Record<string, unknown>) => new Schema(definition, { _id: false });

/** Sunday–Thursday, 10:00–18:00 — the Egyptian working week. */
const WORKDAY = () => ({ windows: [{ start: "10:00", end: "18:00" }] });
const CLOSED = () => ({ windows: [] });
export const DEFAULT_WEEKLY = () => [WORKDAY(), WORKDAY(), WORKDAY(), WORKDAY(), WORKDAY(), CLOSED(), CLOSED()];

const crmSettingsSchema = new Schema<CrmSettings>(
  {
    telegram: {
      type: sub({
        botToken: String,
        chatId: String,
        enabled: { type: Boolean, default: false },
        events: { type: Schema.Types.Mixed, default: {} },
      }),
      default: () => ({ enabled: false, events: {} }),
    },
    booking: {
      type: sub({
        weekly: { type: Schema.Types.Mixed, default: DEFAULT_WEEKLY },
        slotMinutes: { type: Number, default: 30 },
        bufferMinutes: { type: Number, default: 10 },
        minNoticeHours: { type: Number, default: 3 },
        daysAhead: { type: Number, default: 14 },
        timezone: { type: String, default: "Africa/Cairo" },
        blockedDates: { type: [String], default: [] },
        // Per-date hours ("YYYY-MM-DD" → { windows }), see BookingSettings.
        dateOverrides: { type: Schema.Types.Mixed, default: () => ({}) },
        enabled: { type: Boolean, default: true },
      }),
      default: () => ({}),
    },
    quotes: {
      type: sub({
        companyName: { type: String, default: "KF Tech Solutions" },
        address: String,
        email: String,
        phone: String,
        taxId: String,
        footer: String,
        defaultCurrency: { type: String, default: "EGP" },
        defaultTaxRate: { type: Number, default: 0 },
        defaultValidDays: { type: Number, default: 14 },
      }),
      default: () => ({}),
    },
    updatedAt: { type: String, default: () => new Date().toISOString() },
  },
  { versionKey: false, minimize: false }
);

export const CrmSettingsModel = model<CrmSettings>("CrmSettings", crmSettingsSchema, "crmSettings");

const notificationSchema = new Schema<AdminNotification & { expiresAt?: Date }>(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    body: String,
    link: String,
    contactId: String,
    readAt: { type: String, index: true },
    createdAt: { type: String, required: true, index: true },
    // Alerts are a feed, not a record — they clear themselves after 90 days.
    expiresAt: { type: Date, default: () => new Date(Date.now() + 90 * 24 * 60 * 60 * 1000) },
  },
  { versionKey: false }
);
notificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const NotificationModel = model<AdminNotification & { expiresAt?: Date }>(
  "AdminNotification",
  notificationSchema,
  "notifications"
);

/** Sequential numbers (quotes: KF-2026-0001). */
const counterSchema = new Schema({ _id: String, seq: { type: Number, default: 0 } }, { versionKey: false });
export const CounterModel = model<{ _id: string; seq: number }>("Counter", counterSchema, "counters");
