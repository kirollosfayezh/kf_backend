/** Domain types. Plain TS interfaces — routes/services depend only on these, never on Mongoose directly. */

export type LeadSource = "contact" | "campaign";
export type LeadStatus = "new" | "contacted" | "won" | "lost";

export interface Lead extends Record<string, unknown> {
  source: LeadSource;
  status: LeadStatus;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

/** Shared shape for every "content" collection (projects, services, solutions, testimonials, faqs, blogPosts, about). */
export interface ContentItem extends Record<string, unknown> {
  slug: string;
  published: boolean;
  order: number;
  title: { en: string; ar: string };
  summary?: { en: string; ar: string };
  body?: { en: string; ar: string };
  media?: string[];
  meta?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export type ContentCollection =
  | "projects"
  | "services"
  | "solutions"
  | "testimonials"
  | "faqs"
  | "blogPosts"
  | "aboutSections";

export interface SiteSettings extends Record<string, unknown> {
  siteName: string;
  tagline: { en: string; ar: string };
  logoUrl?: string;
  brandColors: string[];
  languages: { code: string; label: string; enabled: boolean }[];
  defaultLanguage: string;
  seo: { defaultTitle: string; defaultDescription: string };
  pixels: { googleAnalyticsId?: string; metaPixelId?: string };
  contact: { email?: string; phone?: string; whatsapp?: string };
  updatedAt: string;
}

export interface MediaItem extends Record<string, unknown> {
  url: string;
  path: string;
  contentType: string;
  size: number;
  createdAt: string;
}

export type AnalyticsEventType = "pageview" | "click";
export type DeviceKind = "mobile" | "tablet" | "desktop";

export interface AnalyticsEvent extends Record<string, unknown> {
  type: AnalyticsEventType;
  path: string;
  label?: string;
  visitorId?: string;
  referrer?: string;
  lang?: string;
  device?: DeviceKind;
  ts: number;
  day: string;
  createdAt?: Date;
}

/**
 * A per-page SEO override. Every field is optional in effect: the site treats a
 * blank string (or a null `noindex`) as "use the built-in default", so partial
 * documents are the normal case rather than an error.
 */
export interface SeoPage extends Record<string, unknown> {
  key: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  noindex?: boolean | null;
  updatedAt?: string;
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

export interface AdminUser extends Record<string, unknown> {
  email: string;
  passwordHash: string;
  name?: string;
  role: "admin";
  createdAt: string;
}

export type ChatSender = "visitor" | "agent";

export interface ChatMessage extends Record<string, unknown> {
  threadId: string;
  from: ChatSender;
  text: string;
  ts: number;
}

export interface ChatThread extends Record<string, unknown> {
  visitorId: string;
  visitorMeta?: { name?: string; contact?: string };
  userTyping: boolean;
  lastMessageAt: string;
  createdAt: string;
}
