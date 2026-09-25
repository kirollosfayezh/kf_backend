import type { FilterQuery } from "mongoose";
import { SubscriberModel } from "../../models/subscriber.model.js";
import type { Subscriber } from "../../shared/types.js";
import type { WithId } from "../types.js";

function withId<T>(doc: Record<string, unknown> & { _id?: unknown }): WithId<T> {
  const { _id, ...rest } = doc;
  return { id: String(_id), ...(rest as T) };
}

/**
 * Newsletter subscribers. Looked up by email rather than id on the public
 * path and searched on the admin path, which the generic `Repository<T>`
 * does not offer — so a small bespoke class, like the sales repositories.
 */
export class SubscriberRepository {
  async findByEmail(email: string): Promise<WithId<Subscriber> | null> {
    const doc = await SubscriberModel.findOne({ email }).lean().exec();
    return doc ? withId<Subscriber>(doc as never) : null;
  }

  async get(id: string): Promise<WithId<Subscriber> | null> {
    const doc = await SubscriberModel.findById(id).lean().exec().catch(() => null);
    return doc ? withId<Subscriber>(doc as never) : null;
  }

  async create(s: Subscriber): Promise<WithId<Subscriber>> {
    const doc = await SubscriberModel.create(s);
    return withId<Subscriber>(doc.toObject({ versionKey: false }) as never);
  }

  async update(id: string, patch: Partial<Subscriber>, unset: string[] = []): Promise<WithId<Subscriber> | null> {
    const update: Record<string, unknown> = { $set: patch };
    if (unset.length) update.$unset = Object.fromEntries(unset.map((k) => [k, 1]));
    const doc = await SubscriberModel.findByIdAndUpdate(id, update, { new: true }).lean().exec().catch(() => null);
    return doc ? withId<Subscriber>(doc as never) : null;
  }

  /** Newest first. `q` is a case-insensitive substring of the email. */
  async list(filter: { q?: string; limit: number }): Promise<WithId<Subscriber>[]> {
    const where: FilterQuery<Subscriber> = {};
    if (filter.q) where.email = new RegExp(filter.q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    const docs = await SubscriberModel.find(where)
      .sort({ createdAt: -1 })
      .limit(Math.min(filter.limit, 5000))
      .lean()
      .exec();
    return docs.map((d) => withId<Subscriber>(d as never));
  }

  async delete(id: string): Promise<void> {
    await SubscriberModel.findByIdAndDelete(id).exec();
  }
}
