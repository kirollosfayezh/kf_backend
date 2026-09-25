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
  visitorId?: string;
  contactId?: string;
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
  /** LinkedIn Insight Tag partner id (numeric). */
  linkedinPartnerId?: string;
  /** The LinkedIn conversion id that pairs with `linkedinPartnerId`; optional. */
  linkedinConversionId?: string;
  /** Microsoft Clarity project id. */
  clarityId?: string;
  /** Site event key -> whether it is forwarded to the marketing tags. */
  events?: Record<string, boolean>;
  /** Honour the browser's Do Not Track header by loading nothing. */
  respectDnt?: boolean;
  /** Google Consent Mode v2: start denied until the visitor accepts. */
  consentMode?: boolean;
  /** Log what would be sent instead of sending it. */
  debug?: boolean;
}

/**
 * The company's public profiles, shown in the site footer and listed as
 * `sameAs` in its Organization schema. Every entry is a full https URL except
 * `x`, which is stored as `@handle` so it can double as `twitter:site`.
 * Blank means "not on that network".
 */
export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  x?: string;
  github?: string;
  youtube?: string;
  tiktok?: string;
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
  social: SocialLinks;
  updatedAt: string;
}

export interface MediaItem extends Record<string, unknown> {
  url: string;
  path: string;
  contentType: string;
  size: number;
  createdAt: string;
}

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

/**
 * One SEO text in every site language. Unlike `LocalizedText` all four keys are
 * always present once read back from the API: the repository fills the gaps,
 * and turns the plain string that rows saved before per-language overrides
 * hold into `{ en: <that string>, ar: "", de: "", fr: "" }`.
 */
export interface SeoLocalizedText {
  en: string;
  ar: string;
  de: string;
  fr: string;
}

/**
 * A per-page SEO override. Every field is optional in effect: the site treats a
 * blank string (or a null `noindex`) as "use the built-in default", so partial
 * documents are the normal case rather than an error. A blank language inside
 * `title`/`description` falls back to the English override, then to the
 * built-in text.
 */
export interface SeoPage extends Record<string, unknown> {
  key: string;
  title?: SeoLocalizedText;
  description?: SeoLocalizedText;
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
  /**
   * The visitor's phone in E.164 (`+201012345678`). Required before a visitor
   * can send a message, and what a returning visitor's thread is found by.
   */
  phone?: string;
  /** ISO country of `phone`, e.g. "EG" — lets the dashboard show a flag. */
  phoneCountry?: string;
  userTyping: boolean;
  lastMessageAt: string;
  createdAt: string;
}

/* ================================================================ CRM ===== */

/** Where a visit came from: the referrer host plus any campaign parameters. */
export interface TouchInfo {
  referrer?: string;
  landingPath?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  /** Google Ads / Meta click ids — present when the visit came from a paid ad. */
  gclid?: string;
  fbclid?: string;
  at?: string;
}

export type ConsentStatus = "granted" | "denied";

/**
 * One browser, identified by the `kf-visitor-id` the site keeps in
 * localStorage (the same id the chat and analytics use).
 */
export interface Visitor extends Record<string, unknown> {
  visitorId: string;
  firstSeenAt: string;
  lastSeenAt: string;
  sessions: number;
  pageviews: number;
  clicks: number;
  firstTouch?: TouchInfo;
  lastTouch?: TouchInfo;
  device?: DeviceKind;
  browser?: string;
  os?: string;
  lang?: string;
  timezone?: string;
  /** ISO country, from the device time zone. */
  country?: string;
  screen?: string;
  consent?: { status: ConsentStatus; at: string };
  /** Set once the visitor is identified (chat phone, form, booking, quote). */
  contactId?: string;
}

/** Append-only proof of each cookie choice. */
export interface ConsentRecord extends Record<string, unknown> {
  visitorId?: string;
  status: ConsentStatus;
  /** "banner" (first answer) or "settings" (changed later from the footer link). */
  source: "banner" | "settings";
  policyVersion: string;
  userAgent?: string;
  at: string;
}

export const CONTACT_STAGES = ["new", "qualified", "proposal", "won", "lost"] as const;
export type ContactStage = (typeof CONTACT_STAGES)[number];

export type ContactSource = "chat" | "contact" | "campaign" | "booking" | "quote" | "manual" | "newsletter";

export interface Contact extends Record<string, unknown> {
  name?: string;
  /** E.164 */
  phones: string[];
  /** lower-case */
  emails: string[];
  company?: string;
  country?: string;
  sources: ContactSource[];
  visitorIds: string[];
  stage: ContactStage;
  /** Estimated deal value, in `currency`. */
  value?: number;
  currency: string;
  tags: string[];
  lostReason?: string;
  nextFollowUpAt?: string;
  followUpNotifiedFor?: string;
  lastActivityAt: string;
  createdAt: string;
  updatedAt: string;
}

export type ActivityType =
  | "lead"
  | "chat_started"
  | "chat_resumed"
  | "booking"
  | "booking_status"
  | "quote_sent"
  | "quote_viewed"
  | "quote_accepted"
  | "quote_declined"
  | "note"
  | "stage_change"
  | "contact_created"
  | "newsletter";

export interface Activity extends Record<string, unknown> {
  contactId: string;
  type: ActivityType;
  text?: string;
  meta?: Record<string, unknown>;
  /** "system", or the admin's email for things done in the dashboard. */
  by: string;
  at: string;
}

export type NotificationType =
  | "lead"
  | "chat"
  | "booking"
  | "quote_viewed"
  | "quote_accepted"
  | "quote_declined"
  | "followup_due"
  | "call_soon"
  | "newsletter"
  | "test";

export interface AdminNotification extends Record<string, unknown> {
  type: NotificationType;
  title: string;
  body?: string;
  /** A dashboard path, e.g. "/contacts/abc". */
  link?: string;
  contactId?: string;
  readAt?: string;
  createdAt: string;
}

/** One opening window in a day, "HH:mm" in the booking time zone. */
export interface TimeWindow {
  start: string;
  end: string;
}

/** One weekday's opening hours. Empty `windows` = closed that day. */
export interface DayHours {
  windows: TimeWindow[];
}

export interface BookingSettings {
  /**
   * Seven entries, index 0 = Sunday … 6 = Saturday, like `Date#getDay`.
   * Objects rather than a list of lists, which not every Mongo-compatible
   * store accepts.
   */
  weekly: DayHours[];
  slotMinutes: number;
  bufferMinutes: number;
  minNoticeHours: number;
  daysAhead: number;
  timezone: string;
  /** "YYYY-MM-DD" days with no bookings (holidays, travel). */
  blockedDates: string[];
  enabled: boolean;
}

export interface QuoteSettings {
  companyName: string;
  address?: string;
  email?: string;
  phone?: string;
  taxId?: string;
  footer?: string;
  defaultCurrency: string;
  defaultTaxRate: number;
  defaultValidDays: number;
}

export interface TelegramSettings {
  botToken?: string;
  chatId?: string;
  enabled: boolean;
  /** NotificationType -> forwarded to Telegram. Missing means on. */
  events: Record<string, boolean>;
}

/** Admin-only settings — never served by the public settings endpoint. */
export interface CrmSettings extends Record<string, unknown> {
  telegram: TelegramSettings;
  booking: BookingSettings;
  quotes: QuoteSettings;
  updatedAt: string;
}

export type QuoteStatus = "draft" | "sent" | "viewed" | "accepted" | "declined" | "expired";

export interface QuoteLineItem {
  description: string;
  qty: number;
  unitPrice: number;
}

export interface Quote extends Record<string, unknown> {
  number: string;
  token: string;
  contactId?: string;
  title: string;
  /** en | ar | de | fr — the language the client sees it in. */
  language: string;
  currency: string;
  lineItems: QuoteLineItem[];
  discountType: "percent" | "amount";
  discountValue: number;
  taxRate: number;
  notes?: string;
  validUntil?: string;
  status: QuoteStatus;
  total: number;
  sentAt?: string;
  viewedAt?: string;
  acceptedAt?: string;
  acceptedBy?: string;
  declinedAt?: string;
  declineReason?: string;
  createdAt: string;
  updatedAt: string;
}

/* ========================================================= Newsletter ===== */

/** Which form the subscription came from. */
export type SubscriberSource = "footer" | "article" | "popup";

/**
 * A newsletter subscriber. Stored only — nothing is sent yet (no email
 * provider). The email is the identity: lower-cased, one row per address.
 */
export interface Subscriber extends Record<string, unknown> {
  /** lower-case */
  email: string;
  /** The site language at the time of subscribing (en | ar | de | fr). */
  lang?: string;
  source: SubscriberSource;
  visitorId?: string;
  /** The CRM contact this address was filed under, when that succeeded. */
  contactId?: string;
  /** When consent was (last) given — re-subscribing refreshes it. */
  consentAt: string;
  /** Set when the person asks to be removed; cleared if they subscribe again. */
  unsubscribedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export type BookingStatus = "confirmed" | "completed" | "no_show" | "cancelled";

export interface Booking extends Record<string, unknown> {
  start: string;
  end: string;
  name?: string;
  /** E.164 — the number we call on WhatsApp. */
  phone: string;
  phoneCountry?: string;
  topic?: string;
  lang?: string;
  visitorId?: string;
  contactId?: string;
  status: BookingStatus;
  remindedAt?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
