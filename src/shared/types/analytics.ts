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

/** One row of a "how many, and how many became enquiries" table. */
export interface InsightRow {
  key: string;
  visitors: number;
  leads: number;
}

/** A visitor who arrived from a Google ad, with everything we know about them. */
export interface AdVisitor {
  visitorId: string;
  firstSeenAt: string;
  lastSeenAt: string;
  landingPath?: string;
  campaign?: string;
  keyword?: string;
  adGroup?: string;
  device?: string;
  country?: string;
  lang?: string;
  sessions: number;
  pageviews: number;
  pages: string[];
  /** Seconds between their first and last recorded event in the range. */
  spanSeconds: number;
  /** Distinct days they were active in the range. */
  activeDays: number;
  /** Contact taps in the range, e.g. ["whatsapp", "phone"]. */
  contactTaps: string[];
  /** Conversion kinds in the range, e.g. ["lead", "chat_start"]. */
  conversions: string[];
  /** Filled when the visitor left their details (form, chat or booking). */
  contact?: { id: string; name?: string; phones: string[]; emails: string[]; company?: string; stage?: string };
}

/**
 * The second half of the Analytics screen: where visitors come from, how far
 * they get, and — for Google Ads — who each one is.
 */
/** The five lines on the dashboard's "visitors by source" chart; rarer groups fold into "other". */
export type SeriesChannel = "google_ads" | "search" | "social" | "direct" | "other";

/** One day of the insights trend. Visitors and taps are distinct people that day. */
export interface DailyInsight {
  day: string;
  visitors: number;
  contactTaps: number;
  leads: number;
  adVisitors: number;
  adLeads: number;
  /** Visitors with a profile, by the source of their first visit. */
  channels: Record<SeriesChannel, number>;
}

export interface AnalyticsInsights extends Record<string, unknown> {
  range: { from: string; to: string; days: number };
  channels: InsightRow[];
  funnel: { visitors: number; engaged: number; contactTaps: number; leads: number };
  contactTaps: { kind: string; taps: number; visitors: number }[];
  conversions: { kind: string; count: number }[];
  landingPages: InsightRow[];
  countries: { key: string; visitors: number }[];
  languages: { key: string; visitors: number }[];
  hours: { hour: number; pageviews: number }[];
  weekdays: { day: number; pageviews: number }[];
  /** Pageviews by Cairo weekday (1 = Sunday) and hour; only non-empty cells. */
  heatmap: { day: number; hour: number; pageviews: number }[];
  daily: DailyInsight[];
  /** The same counts for the equal-length period just before this range. */
  previous: { visitors: number; contactTaps: number; leads: number; adVisitors: number };
  returning: { new: number; returning: number };
  ads: {
    visitors: number;
    leads: number;
    contactTaps: number;
    campaigns: InsightRow[];
    keywords: InsightRow[];
    landingPages: InsightRow[];
    people: AdVisitor[];
  };
}
