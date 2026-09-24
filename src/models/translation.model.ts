import { Schema, model } from "mongoose";
import type { TranslationOverride } from "../shared/types.js";

/**
 * Dashboard overrides for the site's interface copy.
 *
 * The site ships a complete dictionary for every language, keyed by the English
 * string. A document here replaces one entry of it — or supplies one the
 * shipped dictionary lacks — without a redeploy. A blank language falls back to
 * the shipped value, so an override can target a single language.
 */
const translationSchema = new Schema<TranslationOverride>(
  {
    // The English source string, exactly as the site passes it to `t()`.
    key: { type: String, required: true, unique: true, index: true },
    en: { type: String, default: "" },
    ar: { type: String, default: "" },
    de: { type: String, default: "" },
    fr: { type: String, default: "" },
    updatedAt: { type: String, default: () => new Date().toISOString() },
  },
  { versionKey: false },
);

export const TranslationModel = model<TranslationOverride>("Translation", translationSchema, "translations");
