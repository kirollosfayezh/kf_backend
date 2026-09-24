import { Schema, model } from "mongoose";
import type { SiteSettings } from "../shared/types.js";

// `_id: false` keeps Mongoose from stamping an _id onto these nested objects,
// which would otherwise leak into every API response.
const sub = (definition: Record<string, unknown>) => new Schema(definition, { _id: false });

// All four languages — declaring only en/ar made Mongoose `strict` silently drop
// the German and French tagline the dashboard sends.
const localized = sub({
  en: { type: String, default: "" },
  ar: { type: String, default: "" },
  de: { type: String, default: "" },
  fr: { type: String, default: "" },
});

const settingsSchema = new Schema<SiteSettings>({
  siteName: { type: String, default: "KF Tech Solutions" },
  tagline: { type: localized, default: () => ({ en: "", ar: "", de: "", fr: "" }) },
  logoUrl: String,
  brandColors: { type: [String], default: ["#FF6A00", "#FF0080", "#9B5DE5", "#0A0A0D"] },
  languages: {
    type: [sub({ code: String, label: String, enabled: Boolean })],
    // All four ship real translations (ported from the design export's
    // kf-i18n.js), so all four are on by default. Turning one off here removes
    // it from the site's switcher — the site reads this list rather than
    // hardcoding its own.
    default: [
      { code: "en", label: "English", enabled: true },
      { code: "ar", label: "العربية", enabled: true },
      { code: "de", label: "Deutsch", enabled: true },
      { code: "fr", label: "Français", enabled: true },
    ],
  },
  defaultLanguage: { type: String, default: "en" },
  seo: {
    type: sub({ defaultTitle: String, defaultDescription: String }),
    default: () => ({ defaultTitle: "KF Tech Solutions", defaultDescription: "" }),
  },
  // Extended in place rather than renamed to `tracking`: the path already holds
  // saved values, and Mongoose `strict` silently drops anything not declared —
  // which is exactly how `de`/`fr` went missing from content for months.
  pixels: {
    type: sub({
      gtmId: String,
      googleAnalyticsId: String,
      googleAdsId: String,
      googleAdsLabel: String,
      metaPixelId: String,
      tiktokPixelId: String,
      snapchatPixelId: String,
      events: { type: Schema.Types.Mixed, default: {} },
      respectDnt: { type: Boolean, default: true },
      consentMode: { type: Boolean, default: false },
      debug: { type: Boolean, default: false },
    }),
    default: () => ({}),
  },
  contact: {
    type: sub({ email: String, phone: String, whatsapp: String }),
    default: () => ({}),
  },
  updatedAt: { type: String, required: true },
});

export const SettingsModel = model<SiteSettings>("SiteSettings", settingsSchema, "siteSettings");
