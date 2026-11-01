import { SeoPageModel } from "../../models/seo.model.js";
import type { SeoLocalizedText, SeoPage } from "../../shared/types/index.js";

/**
 * SEO overrides are keyed by the site's page key, not by an ObjectId, and are
 * written with upserts (there is no "create" step — editing a page that has
 * never been saved is the normal first action). That does not fit the generic
 * `Repository<T>`, so it gets its own class, like the analytics repository.
 */

const str = (v: unknown) => (typeof v === "string" ? v : "");

/**
 * Whatever is stored, the API always answers with all four languages. A plain
 * string is a row from before per-language overrides existed: it was the
 * English text, so it becomes `en` and the others are blank (= fall back).
 */
function localize(value: unknown): SeoLocalizedText {
  const src: Record<string, unknown> =
    value && typeof value === "object" ? (value as Record<string, unknown>) : { en: str(value) };
  return { en: str(src.en), ar: str(src.ar), de: str(src.de), fr: str(src.fr) };
}

function normalize(doc: SeoPage & { _id?: unknown }): SeoPage {
  const { _id, ...rest } = doc;
  void _id;
  return { ...rest, title: localize(rest.title), description: localize(rest.description) };
}

export class SeoRepository {
  async list(): Promise<SeoPage[]> {
    const docs = await SeoPageModel.find().lean<(SeoPage & { _id?: unknown })[]>().exec();
    return docs.map(normalize);
  }

  async get(key: string): Promise<SeoPage | null> {
    const doc = await SeoPageModel.findOne({ key }).lean<SeoPage & { _id?: unknown }>().exec();
    return doc ? normalize(doc) : null;
  }

  async upsert(key: string, patch: Partial<SeoPage>): Promise<SeoPage> {
    const doc = await SeoPageModel.findOneAndUpdate(
      { key },
      { $set: { ...patch, key } },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    )
      .lean<SeoPage & { _id?: unknown }>()
      .exec();
    return normalize(doc);
  }
}
