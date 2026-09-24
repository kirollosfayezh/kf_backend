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

/**
 * A translatable field. `de` and `fr` are optional because every document
 * written before they existed lacks them; readers fall back to English.
 */
export interface LocalizedText {
  en: string;
  ar: string;
  de?: string;
  fr?: string;
}

/** Shared shape for every "content" collection (projects, services, solutions, testimonials, faqs, blogPosts, about). */
export interface ContentItem extends Record<string, unknown> {
  slug: string;
  published: boolean;
  order: number;
  title: LocalizedText;
  summary?: LocalizedText;
  body?: LocalizedText;
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
  | "aboutSections"
  | "legalPages"
  | "promos";

/**
 * Marketing tags for the public site.
 *
 * Still called `pixels` in the stored document because that is what already
 * exists there; renaming the path would orphan every saved value for a cosmetic
 * gain. `googleAnalyticsId` and `metaPixelId` predate the rest and keep their
 * names for the same reason.
 *
 * Everything is optional and empty by default: a site with nothing configured
 * loads no third-party script and sets no third-party cookie.
 */
export interface TrackingSettings {
  /** GTM-XXXXXXX. When set, the container is expected to own the other tags. */
  gtmId?: string;
  /** G-XXXXXXXXXX */
  googleAnalyticsId?: string;
  /** AW-123456789 */
  googleAdsId?: string;
  /** The conversion label that pairs with `googleAdsId`; both are required. */
  googleAdsLabel?: string;
  metaPixelId?: string;
  tiktokPixelId?: string;
  snapchatPixelId?: string;
  /** Site event key -> whether it is forwarded to the marketing tags. */
  events?: Record<string, boolean>;
  /** Honour the browser's Do Not Track header by loading nothing. */
  respectDnt?: boolean;
  /** Google Consent Mode v2: start denied until the visitor accepts. */
  consentMode?: boolean;
  /** Log what would be sent instead of sending it. */
  debug?: boolean;
}

export interface SiteSettings extends Record<string, unknown> {
  siteName: string;
  tagline: LocalizedText;
  logoUrl?: string;
  brandColors: string[];
  languages: { code: string; label: string; enabled: boolean }[];
  defaultLanguage: string;
  seo: { defaultTitle: string; defaultDescription: string };
  pixels: TrackingSettings;
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

/**
 * A dashboard override for one piece of the site's interface copy, keyed by the
 * English string the site translates. Blank languages fall back to the site's
 * shipped dictionary.
 */
export interface TranslationOverride extends Record<string, unknown> {
  key: string;
  en?: string;
  ar?: string;
  de?: string;
  fr?: string;
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
