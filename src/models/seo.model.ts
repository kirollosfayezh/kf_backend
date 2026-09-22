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
const seoPageSchema = new Schema<SeoPage>(
  {
    // Matches the key in the site's PAGES table (home, services, …).
    key: { type: String, required: true, unique: true, index: true },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
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
