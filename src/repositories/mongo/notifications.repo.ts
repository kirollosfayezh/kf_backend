import { CrmSettingsModel, CounterModel, NotificationModel } from "../../models/crm-settings.model.js";
import type { AdminNotification, CrmSettings } from "../../shared/types/index.js";
import type { WithId } from "../types.js";

function withId<T>(doc: Record<string, unknown> & { _id?: unknown }): WithId<T> {
  const { _id, expiresAt, ...rest } = doc;
  void expiresAt;
  return { id: String(_id), ...(rest as T) };
}

export class NotificationRepository {
  async create(n: AdminNotification): Promise<WithId<AdminNotification>> {
    const doc = await NotificationModel.create(n);
    return withId<AdminNotification>(doc.toObject({ versionKey: false }) as never);
  }

  async list(limit: number, unreadOnly: boolean): Promise<WithId<AdminNotification>[]> {
    const docs = await NotificationModel.find(unreadOnly ? { readAt: { $exists: false } } : {})
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean()
      .exec();
    return docs.map((d) => withId<AdminNotification>(d as never));
  }

  unreadCount(): Promise<number> {
    return NotificationModel.countDocuments({ readAt: { $exists: false } }).exec();
  }

  async markRead(ids: string[] | "all"): Promise<void> {
    const at = new Date().toISOString();
    const where = ids === "all" ? { readAt: { $exists: false } } : { _id: { $in: ids }, readAt: { $exists: false } };
    await NotificationModel.updateMany(where, { $set: { readAt: at } }).exec();
  }
}

/** The admin-only CRM settings document. Not a generic singleton: nested defaults are merged on read. */
export class CrmSettingsRepository {
  async get(): Promise<CrmSettings> {
    let doc = await CrmSettingsModel.findOne().lean().exec();
    if (!doc) {
      await CrmSettingsModel.create({ updatedAt: new Date().toISOString() });
      doc = await CrmSettingsModel.findOne().lean().exec();
    }
    const { _id, ...rest } = doc as CrmSettings & { _id?: unknown };
    void _id;
    return rest as CrmSettings;
  }

  async update(set: Record<string, unknown>): Promise<CrmSettings> {
    await this.get();
    await CrmSettingsModel.updateOne({}, { $set: { ...set, updatedAt: new Date().toISOString() } }).exec();
    return this.get();
  }

  /** Atomic next value of a named sequence. */
  async nextSeq(name: string): Promise<number> {
    const doc = await CounterModel.findOneAndUpdate({ _id: name }, { $inc: { seq: 1 } }, { new: true, upsert: true }).lean().exec();
    return doc!.seq;
  }
}
