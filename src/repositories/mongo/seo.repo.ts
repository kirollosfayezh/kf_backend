import { SeoPageModel } from "../../models/seo.model.js";
import type { SeoPage } from "../../shared/types.js";

/**
 * SEO overrides are keyed by the site's page key, not by an ObjectId, and are
 * written with upserts (there is no "create" step — editing a page that has
 * never been saved is the normal first action). That does not fit the generic
 * `Repository<T>`, so it gets its own class, like the analytics repository.
 */
export class SeoRepository {
  async list(): Promise<SeoPage[]> {
    const docs = await SeoPageModel.find().lean<SeoPage[]>().exec();
    return docs.map(({ _id, ...rest }: SeoPage & { _id?: unknown }) => rest as SeoPage);
  }

  async upsert(key: string, patch: Partial<SeoPage>): Promise<SeoPage> {
    const doc = await SeoPageModel.findOneAndUpdate(
      { key },
      { $set: { ...patch, key } },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    )
      .lean<SeoPage & { _id?: unknown }>()
      .exec();
    const { _id, ...rest } = doc;
    return rest as SeoPage;
  }
}
