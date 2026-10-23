import { Schema, model } from "mongoose";

/**
 * One row per article slug the server has ever published by itself (see
 * `article-publisher.service.ts`). The row outlives the article: if an editor
 * deletes an auto-published post in the dashboard, this is what stops the next
 * restart from bringing it back.
 */
export interface ArticleImport {
  slug: string;
  publishedAt: string;
}

const articleImportSchema = new Schema<ArticleImport>(
  {
    slug: { type: String, required: true, unique: true },
    publishedAt: { type: String, required: true },
  },
  { versionKey: false }
);

export const ArticleImportModel = model<ArticleImport>("ArticleImport", articleImportSchema, "articleImports");
