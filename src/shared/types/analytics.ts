/** First-party analytics events and the dashboard's summary. */

/**
 * `conversion` is a goal the visitor completed (a lead accepted by the server,
 * a booking, a chat started…), sent once on success rather than on the click
 * that attempted it. It is kept apart from `click` so the dashboard's click
 * totals and "most-clicked control" ranking are not inflated by it.
 */
export type AnalyticsEventType = "pageview" | "click" | "conversion";
export type DeviceKind = "mobile" | "tablet" | "desktop";

export interface AnalyticsEvent extends Record<string, unknown> {
  type: AnalyticsEventType;
  path: string;
  /** Clicks: which control was used. Conversions: the kind (lead, booking, chat_start…). */
  label?: string;
  visitorId?: string;
  sessionId?: string;
  referrer?: string;
  lang?: string;
  device?: DeviceKind;
  ts: number;
  day: string;
  createdAt?: Date;
}

export interface AnalyticsTotals {
  pageviews: number;
  clicks: number;
  visitors: number;
  leads: number;
}

export interface AnalyticsSummary extends Record<string, unknown> {
  range: { from: string; to: string; days: number };
  totals: AnalyticsTotals;
  /**
   * The same totals for the window immediately before this one, so the screen
   * can show direction of travel. "180 visitors" alone says nothing about
   * whether the site is growing.
   */
  previous: AnalyticsTotals;
  daily: { day: string; pageviews: number; clicks: number }[];
  topPages: { path: string; views: number }[];
  topClicks: { label: string; clicks: number }[];
  topReferrers: { referrer: string; count: number }[];
  devices: { device: string; count: number }[];
}
