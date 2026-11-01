import type { FilterQuery } from "mongoose";
import { VisitorModel, ConsentRecordModel } from "../../models/visitor.model.js";
import { ActivityModel, ContactModel } from "../../models/contact.model.js";
import { AnalyticsModel } from "../../models/analytics.model.js";
import type { Activity, ConsentRecord, Contact, TouchInfo, Visitor } from "../../shared/types/index.js";
import type { WithId } from "../types.js";

/**
 * The CRM's storage: visitor profiles, consent records, contacts and their
 * activity timeline. Like the analytics and SEO repositories, these are
 * aggregate- and upsert-shaped, so they get small bespoke classes rather than
 * the generic `Repository<T>` — still the only place the CRM touches Mongo.
 */

const THIRTEEN_MONTHS = 395 * 24 * 60 * 60 * 1000;

function withId<T>(doc: Record<string, unknown> & { _id?: unknown }): WithId<T> {
  const { _id, ...rest } = doc;
  return { id: String(_id), ...(rest as T) };
}

export interface VisitorTouch {
  visitorId: string;
  lastSeen: number;
  pageviews: number;
  clicks: number;
  sessions: number;
  device?: string;
  lang?: string;
  browser?: string;
  os?: string;
  timezone?: string;
  country?: string;
  screen?: string;
  touch?: TouchInfo;
}

export class VisitorRepository {
  /** One upsert per visitor per beacon batch. */
  async touch(t: VisitorTouch): Promise<void> {
    const lastSeenAt = new Date(t.lastSeen).toISOString();
    const set: Record<string, unknown> = { lastSeenAt };
    for (const k of ["device", "lang", "browser", "os", "timezone", "country", "screen"] as const) {
      if (t[k]) set[k] = t[k];
    }
    if (t.touch) set.lastTouch = t.touch;

    const existing = await VisitorModel.findOne({ visitorId: t.visitorId }, { contactId: 1, firstTouch: 1 }).lean().exec();
    // Identified visitors are kept with their contact; anonymous ones age out.
    if (!existing?.contactId) set.expiresAt = new Date(t.lastSeen + THIRTEEN_MONTHS);

    await VisitorModel.updateOne(
      { visitorId: t.visitorId },
      {
        $set: set,
        $setOnInsert: { firstSeenAt: lastSeenAt, ...(t.touch ? { firstTouch: t.touch } : {}) },
        $inc: { pageviews: t.pageviews, clicks: t.clicks, sessions: t.sessions },
      },
      { upsert: true }
    ).exec();

    // A profile created before sessions were tracked has no first touch yet.
    if (existing && !existing.firstTouch && t.touch) {
      await VisitorModel.updateOne({ visitorId: t.visitorId, firstTouch: { $exists: false } }, { $set: { firstTouch: t.touch } }).exec();
    }
  }

  async setConsent(visitorId: string, status: string, at: string): Promise<void> {
    await VisitorModel.updateOne(
      { visitorId },
      {
        $set: { consent: { status, at }, lastSeenAt: at },
        $setOnInsert: { firstSeenAt: at, expiresAt: new Date(Date.parse(at) + THIRTEEN_MONTHS) },
      },
      { upsert: true }
    ).exec();
  }

  /** Attaches visitors to a contact and stops them expiring. */
  async linkContact(visitorIds: string[], contactId: string): Promise<void> {
    if (!visitorIds.length) return;
    const now = new Date().toISOString();
    await VisitorModel.updateMany(
      { visitorId: { $in: visitorIds } },
      { $set: { contactId }, $unset: { expiresAt: 1 } }
    ).exec();
    // A visitor seen only through chat (no page beacon yet) still gets a profile.
    for (const visitorId of visitorIds) {
      await VisitorModel.updateOne(
        { visitorId },
        { $setOnInsert: { visitorId, firstSeenAt: now, lastSeenAt: now, contactId } },
        { upsert: true }
      ).exec();
    }
  }

  async list(filter: { identified?: boolean; consent?: string; q?: string; since?: string; limit: number }): Promise<WithId<Visitor>[]> {
    const where: FilterQuery<Visitor> = {};
    if (filter.identified === true) where.contactId = { $exists: true, $ne: null };
    if (filter.identified === false) where.contactId = { $exists: false };
    if (filter.consent === "none") where["consent.status"] = { $exists: false };
    else if (filter.consent) where["consent.status"] = filter.consent;
    if (filter.since) where.lastSeenAt = { $gte: filter.since };
    if (filter.q) {
      const re = new RegExp(filter.q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      where.$or = [{ visitorId: re }, { country: re }, { "firstTouch.utmCampaign": re }, { "firstTouch.referrer": re }];
    }
    const docs = await VisitorModel.find(where, { expiresAt: 0 }).sort({ lastSeenAt: -1 }).limit(filter.limit).lean().exec();
    return docs.map((d) => withId<Visitor>(d as never));
  }

  async countSince(since: string): Promise<number> {
    return VisitorModel.countDocuments({ lastSeenAt: { $gte: since } }).exec();
  }

  async get(visitorId: string): Promise<WithId<Visitor> | null> {
    const doc = await VisitorModel.findOne({ visitorId }, { expiresAt: 0 }).lean().exec();
    return doc ? withId<Visitor>(doc as never) : null;
  }

  async byIds(visitorIds: string[]): Promise<WithId<Visitor>[]> {
    if (!visitorIds.length) return [];
    const docs = await VisitorModel.find({ visitorId: { $in: visitorIds } }, { expiresAt: 0 }).sort({ lastSeenAt: -1 }).lean().exec();
    return docs.map((d) => withId<Visitor>(d as never));
  }

  /** Page views and clicks, oldest first — the visitor's path through the site. */
  async journey(visitorIds: string[], limit = 500) {
    if (!visitorIds.length) return [];
    const docs = await AnalyticsModel.find(
      { visitorId: { $in: visitorIds } },
      { _id: 0, type: 1, path: 1, label: 1, ts: 1, device: 1, lang: 1, sessionId: 1, visitorId: 1 }
    )
      .sort({ ts: -1 })
      .limit(limit)
      .lean()
      .exec();
    return docs.reverse();
  }

  async deleteMany(visitorIds: string[]): Promise<void> {
    if (!visitorIds.length) return;
    await VisitorModel.deleteMany({ visitorId: { $in: visitorIds } }).exec();
    await AnalyticsModel.deleteMany({ visitorId: { $in: visitorIds } }).exec();
  }
}

export class ConsentRepository {
  async record(rec: ConsentRecord): Promise<void> {
    await ConsentRecordModel.create(rec);
  }

  async list(filter: { status?: string; visitorId?: string; limit: number }): Promise<WithId<ConsentRecord>[]> {
    const where: FilterQuery<ConsentRecord> = {};
    if (filter.status) where.status = filter.status;
    if (filter.visitorId) where.visitorId = filter.visitorId;
    const docs = await ConsentRecordModel.find(where).sort({ at: -1 }).limit(filter.limit).lean().exec();
    return docs.map((d) => withId<ConsentRecord>(d as never));
  }

  async byVisitors(visitorIds: string[]): Promise<WithId<ConsentRecord>[]> {
    if (!visitorIds.length) return [];
    const docs = await ConsentRecordModel.find({ visitorId: { $in: visitorIds } }).sort({ at: -1 }).lean().exec();
    return docs.map((d) => withId<ConsentRecord>(d as never));
  }

  /** Latest choice per visitor in the window, so someone who changed their mind counts once. */
  async totals(since: string): Promise<{ granted: number; denied: number }> {
    const rows = await ConsentRecordModel.find({ at: { $gte: since } }, { visitorId: 1, status: 1, at: 1 })
      .sort({ at: -1 })
      .lean()
      .exec();
    const seen = new Set<string>();
    const totals = { granted: 0, denied: 0 };
    for (const r of rows) {
      const key = r.visitorId ?? String(r._id);
      if (seen.has(key)) continue;
      seen.add(key);
      totals[r.status] += 1;
    }
    return totals;
  }
}

export class ContactRepository {
  async findByIdentity(phone?: string, email?: string): Promise<WithId<Contact>[]> {
    const or: FilterQuery<Contact>[] = [];
    if (phone) or.push({ phones: phone });
    if (email) or.push({ emails: email });
    if (!or.length) return [];
    const docs = await ContactModel.find({ $or: or }).lean().exec();
    return docs.map((d) => withId<Contact>(d as never));
  }

  async findByVisitor(visitorId: string): Promise<WithId<Contact> | null> {
    const doc = await ContactModel.findOne({ visitorIds: visitorId }).lean().exec();
    return doc ? withId<Contact>(doc as never) : null;
  }

  async create(data: Contact): Promise<WithId<Contact>> {
    const doc = await ContactModel.create(data);
    return withId<Contact>(doc.toObject({ versionKey: false }) as never);
  }

  async get(id: string): Promise<WithId<Contact> | null> {
    const doc = await ContactModel.findById(id).lean().exec().catch(() => null);
    return doc ? withId<Contact>(doc as never) : null;
  }

  async update(id: string, patch: Partial<Contact>, unset: string[] = []): Promise<WithId<Contact> | null> {
    const update: Record<string, unknown> = { $set: patch };
    if (unset.length) update.$unset = Object.fromEntries(unset.map((k) => [k, 1]));
    const doc = await ContactModel.findByIdAndUpdate(id, update, { new: true }).lean().exec().catch(() => null);
    return doc ? withId<Contact>(doc as never) : null;
  }

  async list(filter: { q?: string; stage?: string; source?: string; limit: number }): Promise<WithId<Contact>[]> {
    const where: FilterQuery<Contact> = {};
    if (filter.stage) where.stage = filter.stage;
    if (filter.source) where.sources = filter.source;
    if (filter.q) {
      const safe = filter.q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(safe, "i");
      const digits = filter.q.replace(/\D/g, "");
      where.$or = [
        { name: re },
        { company: re },
        { emails: re },
        { tags: re },
        ...(digits.length >= 3 ? [{ phones: new RegExp(digits) }] : []),
      ];
    }
    const docs = await ContactModel.find(where).sort({ lastActivityAt: -1 }).limit(filter.limit).lean().exec();
    return docs.map((d) => withId<Contact>(d as never));
  }

  /**
   * Deals per stage, with values kept per currency — adding euros to pounds
   * would be meaningless. Done in code rather than an aggregation: it is a
   * small scan and stays portable across Mongo-compatible stores.
   */
  async stageTotals(): Promise<{ stage: string; count: number; values: Record<string, number> }[]> {
    const docs = await ContactModel.find({}, { stage: 1, value: 1, currency: 1 }).lean().exec();
    const by = new Map<string, { stage: string; count: number; values: Record<string, number> }>();
    for (const d of docs) {
      const row = by.get(d.stage) ?? { stage: d.stage, count: 0, values: {} };
      row.count += 1;
      if (typeof d.value === "number" && d.value > 0) {
        const cur = d.currency || "EGP";
        row.values[cur] = Math.round(((row.values[cur] ?? 0) + d.value) * 100) / 100;
      }
      by.set(d.stage, row);
    }
    return [...by.values()];
  }

  async countSince(since: string): Promise<number> {
    return ContactModel.countDocuments({ createdAt: { $gte: since } }).exec();
  }

  async followUpsDue(until: string): Promise<WithId<Contact>[]> {
    const docs = await ContactModel.find({ nextFollowUpAt: { $lte: until }, stage: { $nin: ["won", "lost"] } })
      .sort({ nextFollowUpAt: 1 })
      .limit(50)
      .lean()
      .exec();
    return docs.map((d) => withId<Contact>(d as never));
  }

  async delete(id: string): Promise<void> {
    await ContactModel.findByIdAndDelete(id).exec();
    await ActivityModel.deleteMany({ contactId: id }).exec();
  }

  async addActivity(a: Activity): Promise<WithId<Activity>> {
    const doc = await ActivityModel.create(a);
    await ContactModel.updateOne({ _id: a.contactId }, { $set: { lastActivityAt: a.at } }).exec().catch(() => {});
    return withId<Activity>(doc.toObject({ versionKey: false }) as never);
  }

  async activities(contactId: string, limit = 200): Promise<WithId<Activity>[]> {
    const docs = await ActivityModel.find({ contactId }).sort({ at: -1 }).limit(limit).lean().exec();
    return docs.map((d) => withId<Activity>(d as never));
  }

  async recentActivities(limit: number): Promise<WithId<Activity>[]> {
    const docs = await ActivityModel.find().sort({ at: -1 }).limit(limit).lean().exec();
    return docs.map((d) => withId<Activity>(d as never));
  }

  async namesFor(ids: string[]): Promise<Record<string, string>> {
    if (!ids.length) return {};
    const docs = await ContactModel.find({ _id: { $in: ids } }, { name: 1, phones: 1, emails: 1 }).lean().exec();
    return Object.fromEntries(docs.map((d) => [String(d._id), d.name || d.phones?.[0] || d.emails?.[0] || "Contact"]));
  }
}
