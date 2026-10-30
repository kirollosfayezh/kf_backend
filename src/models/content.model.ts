import { Schema, model } from "mongoose";
import type { Model } from "mongoose";
import type { ContentCollection, ContentItem } from "../shared/types/index.js";

// `_id: false` keeps Mongoose from stamping an _id onto these nested objects,
// which would otherwise leak into every API response.
// All four languages the site serves. `de` and `fr` were missing, so Mongoose
// silently dropped anything typed into those fields — German and French content
// could be entered in the dashboard, saved without error, and never come back.
const localized = new Schema(
  {
    en: { type: String, default: "" },
    ar: { type: String, default: "" },
    de: { type: String, default: "" },
    fr: { type: String, default: "" },
  },
  { _id: false }
);

const contentSchema = new Schema<ContentItem>({
  slug: { type: String, required: true },
  published: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  title: { type: localized, required: true },
  summary: { type: localized, required: false },
  body: { type: localized, required: false },
  media: { type: [String], default: [] },
  meta: { type: Schema.Types.Mixed, default: {} },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

/**
 * The one list of content collections.
 *
 * It used to be written out three times — here, and again in the public and
 * admin route guards — so adding a collection meant remembering all three, and
 * forgetting one produced "Unknown content collection" at runtime with
 * everything else type-checking cleanly. Both routers now import this.
 */
export const CONTENT_COLLECTIONS: ContentCollection[] = [
  "projects",
  "services",
  "solutions",
  "testimonials",
  "faqs",
  "blogPosts",
  "aboutSections",
  "legalPages",
  "promos",
];

/** One Mongoose model per content collection, all sharing the same schema shape. */
export const contentModels = Object.fromEntries(
  CONTENT_COLLECTIONS.map((name) => [name, model<ContentItem>(name, contentSchema, name)])
) as Record<ContentCollection, Model<ContentItem>>;
