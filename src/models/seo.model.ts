import { Schema, model } from "mongoose";
import type { SeoPage } from "../shared/types.js";

/**
 * Per-page SEO overrides, one document per entry in the site's `PAGES` table.
 *
 * The site ships a complete built-in default for every page, so a document here
 * is purely an override: any field left blank falls back to the compiled-in
 * value rather than blanking the tag. That keeps an empty database and a
 * half-filled form both safe.
 */

// `title` and `description` used to be plain strings, which made every override
// English-only — an Arabic reader of a page with a saved title got the English
// one. Rows written back then still hold a string; the repository normalises
// them on read and the first save through the service rewrites them in this
// shape (a dotted `$set` into a string field would fail, so it is always the
// whole object).
const localized = new Schema(
  {
    en: { type: String, default: "" },
    ar: { type: String, default: "" },
    de: { type: String, default: "" },
    fr: { type: String, default: "" },
  },
  { _id: false },
);
const blank = () => ({ en: "", ar: "", de: "", fr: "" });

const seoPageSchema = new Schema<SeoPage>(
  {
    // Matches the key in the site's PAGES table (home, services, …).
    key: { type: String, required: true, unique: true, index: true },
    title: { type: localized, default: blank },
    description: { type: localized, default: blank },
    keywords: { type: String, default: "" },
    /** Absolute URL of the share image; blank uses the site-wide default. */
    image: { type: String, default: "" },
    /** `null` means "inherit the built-in value" — only `true`/`false` override. */
    noindex: { type: Boolean, default: null },
    updatedAt: { type: String, default: () => new Date().toISOString() },
  },
  { versionKey: false },
);

export const SeoPageModel = model<SeoPage>("SeoPage", seoPageSchema);
