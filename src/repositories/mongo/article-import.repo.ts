import { ArticleImportModel } from "../../models/article-import.model.js";

/** Which article slugs the server has already published on its own, ever. */
export class ArticleImportRepository {
  async has(slug: string): Promise<boolean> {
    return (await ArticleImportModel.exists({ slug }).exec()) !== null;
  }

  /** Idempotent: recording a slug twice leaves one row with the first date. */
  async record(slug: string, at: string): Promise<void> {
    await ArticleImportModel.updateOne({ slug }, { $setOnInsert: { slug, publishedAt: at } }, { upsert: true }).exec();
  }
}
