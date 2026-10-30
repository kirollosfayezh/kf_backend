import { TranslationModel } from "../../models/translation.model.js";
import type { TranslationOverride } from "../../shared/types/index.js";

/**
 * Keyed by the English source string and written with upserts, like the SEO
 * overrides — so it gets its own small class rather than the generic repository.
 */
export class TranslationRepository {
  async list(): Promise<TranslationOverride[]> {
    const docs = await TranslationModel.find().sort({ key: 1 }).lean<(TranslationOverride & { _id?: unknown })[]>().exec();
    return docs.map(({ _id, ...rest }) => rest as TranslationOverride);
  }

  async upsert(key: string, patch: Partial<TranslationOverride>): Promise<TranslationOverride> {
    const doc = await TranslationModel.findOneAndUpdate(
      { key },
      { $set: { ...patch, key } },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    )
      .lean<TranslationOverride & { _id?: unknown }>()
      .exec();
    const { _id, ...rest } = doc;
    return rest as TranslationOverride;
  }

  async delete(key: string): Promise<void> {
    await TranslationModel.deleteOne({ key }).exec();
  }
}
