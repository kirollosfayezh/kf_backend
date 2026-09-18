import type { Model } from "mongoose";
import type { SingletonRepository } from "../types.js";

/** Generic MongoDB-backed repository for a single-document collection (e.g. site settings). */
export class MongoSingletonRepository<T extends Record<string, unknown>>
  implements SingletonRepository<T>
{
  constructor(
    private readonly model: Model<T>,
    private readonly defaults: T
  ) {}

  /** Drops Mongo's `_id` so the document shape stays database-agnostic. */
  private strip(doc: { toObject: (options?: { versionKey?: boolean }) => Record<string, unknown> }): T {
    const { _id, ...rest } = doc.toObject({ versionKey: false });
    return rest as T;
  }

  async get(): Promise<T> {
    let doc = await this.model.findOne().exec();
    if (!doc) {
      doc = await this.model.create(this.defaults);
    }
    return this.strip(doc);
  }

  async update(data: Partial<T>): Promise<T> {
    const doc = await this.model
      .findOneAndUpdate({}, data, { new: true, upsert: true, setDefaultsOnInsert: true })
      .exec();
    return this.strip(doc);
  }
}
