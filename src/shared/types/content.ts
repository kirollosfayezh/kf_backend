/** CMS content: translatable text, content collections, media, SEO and interface-copy overrides. */

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

export interface MediaItem extends Record<string, unknown> {
  url: string;
  path: string;
  contentType: string;
  size: number;
  createdAt: string;
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
