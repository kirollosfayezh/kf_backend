import { MongoRepository } from "./mongo/mongo-repo.js";
import { SeoRepository } from "./mongo/seo.repo.js";
import { MongoSingletonRepository } from "./mongo/mongo-singleton-repo.js";
import { ChatRepository } from "./mongo/chat.repo.js";
import { AnalyticsRepository } from "./mongo/analytics.repo.js";
import { LeadModel } from "../models/lead.model.js";
import { contentModels } from "../models/content.model.js";
import { SettingsModel } from "../models/settings.model.js";
import { MediaModel } from "../models/media.model.js";
import { AdminUserModel } from "../models/admin-user.model.js";
import type { Repository, SingletonRepository } from "./types.js";
import type {
  Lead,
  ContentItem,
  ContentCollection,
  SiteSettings,
  MediaItem,
  AdminUser,
} from "../shared/types.js";

/**
 * THE seam. Everything above this file only knows about the `Repository` /
 * `SingletonRepository` interfaces in `./types.ts` (plus the bespoke
 * `ChatRepository` shape for chat). To move off MongoDB later, swap the
 * classes instantiated below for new implementations of the same interfaces —
 * no route or service code needs to change.
 */

const contentRepos: Record<ContentCollection, Repository<ContentItem>> = {
  projects: new MongoRepository<ContentItem>(contentModels.projects),
  services: new MongoRepository<ContentItem>(contentModels.services),
  solutions: new MongoRepository<ContentItem>(contentModels.solutions),
  testimonials: new MongoRepository<ContentItem>(contentModels.testimonials),
  faqs: new MongoRepository<ContentItem>(contentModels.faqs),
  blogPosts: new MongoRepository<ContentItem>(contentModels.blogPosts),
  aboutSections: new MongoRepository<ContentItem>(contentModels.aboutSections),
  legalPages: new MongoRepository<ContentItem>(contentModels.legalPages),
  promos: new MongoRepository<ContentItem>(contentModels.promos),
};

const defaultSettings: SiteSettings = {
  siteName: "KF Tech Solutions",
  tagline: { en: "Software that fits how your business works", ar: "برمجيات تناسب طريقة عمل شركتك" },
  brandColors: ["#FF6A00", "#FF0080", "#9B5DE5", "#0A0A0D"],
  languages: [
    { code: "en", label: "English", enabled: true },
    { code: "ar", label: "العربية", enabled: true },
    { code: "de", label: "Deutsch", enabled: true },
    { code: "fr", label: "Français", enabled: true },
  ],
  defaultLanguage: "en",
  seo: { defaultTitle: "KF Tech Solutions", defaultDescription: "" },
  pixels: {},
  contact: {},
  updatedAt: new Date().toISOString(),
};

export const repos = {
  leads: new MongoRepository<Lead>(LeadModel) as Repository<Lead>,
  media: new MongoRepository<MediaItem>(MediaModel) as Repository<MediaItem>,
  adminUsers: new MongoRepository<AdminUser>(AdminUserModel) as Repository<AdminUser>,
  content: contentRepos,
  settings: new MongoSingletonRepository<SiteSettings>(
    SettingsModel,
    defaultSettings
  ) as SingletonRepository<SiteSettings>,
  chat: new ChatRepository(),
  analytics: new AnalyticsRepository(),
  seo: new SeoRepository(),
};
