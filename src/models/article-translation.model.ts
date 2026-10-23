import { Schema, model } from "mongoose";

/**
 * One row per article language the server has handled on its own (see
 * `fillMissingTranslations` in `article-publisher.service.ts`): either filled
 * from `scripts/articles/<slug>.<lang>.md`, or found already written in the
 * CMS. The row is what stops a later restart from writing that language again,
 * so a translation cleared in the dashboard stays cleared.
 */
export interface ArticleTranslation {
  slug: string;
  lang: string;
  handledAt: string;
}

const articleTranslationSchema = new Schema<ArticleTranslation>(
  {
    slug: { type: String, required: true },
    lang: { type: String, required: true },
    handledAt: { type: String, required: true },
  },
  { versionKey: false }
);
articleTranslationSchema.index({ slug: 1, lang: 1 }, { unique: true });

export const ArticleTranslationModel = model<ArticleTranslation>(
  "ArticleTranslation",
  articleTranslationSchema,
  "articleTranslations"
);
