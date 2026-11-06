/** Public site settings (served to the site, edited in the dashboard). */

import type { LocalizedText } from "./content.js";

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

/** Other spellings of the company name, per site language. */
export interface BrandNames {
  en: string[];
  ar: string[];
  de: string[];
  fr: string[];
}

/**
 * The facts that tell this company apart from others with a similar name.
 * The site publishes them in its Organization schema and llms.txt; the
 * dashboard edits them. Every URL is a full https address. `profiles` are the
 * company's own listings (directories, the GitHub organisation) and join the
 * social links as `sameAs`; `founderProfiles` describe the founder, not the
 * company, and land on the Person node only.
 */
export interface BrandIdentity {
  alternateNames: BrandNames;
  /** YYYY, YYYY-MM or YYYY-MM-DD; blank means the site's built-in default. */
  foundingDate: string;
  founderProfiles: string[];
  profiles: string[];
  notAffiliatedWith: { name: string; url: string }[];
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
  /** Optional only for documents saved before the block existed; reads back as the empty shape. */
  brand?: BrandIdentity;
  updatedAt: string;
}
