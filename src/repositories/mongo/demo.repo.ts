import { DemoModel } from "../../models/demo.model.js";
import type { Demo, DemoSummary } from "../../shared/types/index.js";
import type { WithId } from "../types.js";

function withId<T>(doc: Record<string, unknown> & { _id?: unknown }): WithId<T> {
  const { _id, ...rest } = doc;
  return { id: String(_id), ...(rest as T) };
}

/**
 * Uploaded demo pages, addressed by slug. The list leaves the HTML out: it is
 * up to a megabyte per row and the dashboard only needs to know what exists.
 */
export class DemoRepository {
  async list(): Promise<WithId<DemoSummary>[]> {
    const docs = await DemoModel.find({}, { html: 0 }).sort({ slug: 1 }).lean().exec();
    return docs.map((d) => withId<DemoSummary>(d as never));
  }

  async findBySlug(slug: string): Promise<WithId<Demo> | null> {
    const doc = await DemoModel.findOne({ slug }).lean().exec();
    return doc ? withId<Demo>(doc as never) : null;
  }

  async summaryBySlug(slug: string): Promise<WithId<DemoSummary> | null> {
    const doc = await DemoModel.findOne({ slug }, { html: 0 }).lean().exec();
    return doc ? withId<DemoSummary>(doc as never) : null;
  }

  /** Creates the page or replaces the one already under this slug, keeping its createdAt. */
  async upsert(slug: string, html: string, now: string): Promise<WithId<DemoSummary>> {
    const doc = await DemoModel.findOneAndUpdate(
      { slug },
      { $set: { html, size: Buffer.byteLength(html), updatedAt: now }, $setOnInsert: { slug, createdAt: now } },
      { upsert: true, new: true, projection: { html: 0 } }
    )
      .lean()
      .exec();
    return withId<DemoSummary>(doc as never);
  }

  async delete(slug: string): Promise<boolean> {
    const res = await DemoModel.deleteOne({ slug }).exec();
    return res.deletedCount > 0;
  }
}
