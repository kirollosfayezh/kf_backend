import { ArticleTranslationModel } from "../../models/article-translation.model.js";

/** Which article languages the server has already handled on its own, ever. */
export class ArticleTranslationRepository {
  /** Every handled language, as `<slug>:<lang>` keys. */
  async handled(): Promise<Set<string>> {
    const rows = await ArticleTranslationModel.find({}, { slug: 1, lang: 1 }).lean().exec();
    return new Set(rows.map((r) => `${r.slug}:${r.lang}`));
  }

  /** Idempotent: recording a language twice leaves one row with the first date. */
  async record(slug: string, lang: string, at: string): Promise<void> {
    await ArticleTranslationModel.updateOne(
      { slug, lang },
      { $setOnInsert: { slug, lang, handledAt: at } },
      { upsert: true }
    ).exec();
  }
}
