import { Schema, model } from "mongoose";
import type { AnalyticsEvent } from "../shared/types.js";

const analyticsSchema = new Schema<AnalyticsEvent>({
  type: { type: String, enum: ["pageview", "click"], required: true, index: true },
  path: { type: String, required: true, index: true },
  /** For clicks: which control was used, e.g. "hero.start-project". */
  label: String,
  /** Anonymous per-browser id, so repeat visits can be told apart without cookies. */
  visitorId: { type: String, index: true },
  /** One browser tab's visit, so a visitor's journey can be split into sessions. */
  sessionId: String,
  referrer: String,
  lang: String,
  device: { type: String, enum: ["mobile", "tablet", "desktop"] },
  ts: { type: Number, required: true },
  /** Day bucket (YYYY-MM-DD) so daily rollups don't need date maths in the query. */
  day: { type: String, required: true, index: true },
  /** A real Date, because the TTL index below can only expire on a Date field. */
  createdAt: { type: Date, default: Date.now },
});

// Events are high-volume and only ever read in aggregate for recent windows.
// 180 days is plenty for the dashboard's reporting and keeps the collection small.
analyticsSchema.index({ createdAt: 1 }, { expireAfterSeconds: 180 * 24 * 60 * 60 });
analyticsSchema.index({ day: 1, type: 1 });

export const AnalyticsModel = model<AnalyticsEvent>("AnalyticsEvent", analyticsSchema, "analyticsEvents");
