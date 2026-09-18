import type { Model } from "mongoose";
import type { ListOptions, Repository, WithId } from "../types.js";

function toPlain<T extends Record<string, unknown>>(doc: {
  _id: unknown;
  toObject: (options?: { versionKey?: boolean }) => Record<string, unknown>;
}): WithId<T> {
  const obj = doc.toObject({ versionKey: false });
  const { _id, ...rest } = obj;
  return { id: String(_id), ...(rest as T) };
}

/**
 * Generic MongoDB-backed repository. This is the ONLY file (along with
 * mongo-singleton-repo.ts) that should import a Mongoose `Model`.
 */
export class MongoRepository<T extends Record<string, unknown>> implements Repository<T> {
  constructor(private readonly model: Model<T>) {}

  async list(options: ListOptions = {}): Promise<WithId<T>[]> {
    let query = this.model.find(options.where ?? {});
    if (options.orderBy) {
      query = query.sort({ [options.orderBy.field]: options.orderBy.direction === "desc" ? -1 : 1 });
    }
    if (options.limit) {
      query = query.limit(options.limit);
    }
    const docs = await query.exec();
    return docs.map((doc) => toPlain<T>(doc));
  }

  async get(id: string): Promise<WithId<T> | null> {
    const doc = await this.model.findById(id).exec().catch(() => null);
    return doc ? toPlain<T>(doc) : null;
  }

  async create(data: T): Promise<WithId<T>> {
    const doc = await this.model.create(data);
    return toPlain<T>(doc);
  }

  async update(id: string, data: Partial<T>): Promise<WithId<T>> {
    const doc = await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!doc) throw new Error(`Document not found: ${id}`);
    return toPlain<T>(doc);
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
