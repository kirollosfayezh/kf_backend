import type { FilterQuery } from "mongoose";
import { BookingModel, QuoteModel } from "../../models/sales.model.js";
import type { Booking, Quote } from "../../shared/types/index.js";
import type { WithId } from "../types.js";

function withId<T>(doc: Record<string, unknown> & { _id?: unknown }): WithId<T> {
  const { _id, ...rest } = doc;
  return { id: String(_id), ...(rest as T) };
}

export class QuoteRepository {
  async create(q: Quote): Promise<WithId<Quote>> {
    const doc = await QuoteModel.create(q);
    return withId<Quote>(doc.toObject({ versionKey: false }) as never);
  }
  async get(id: string): Promise<WithId<Quote> | null> {
    const doc = await QuoteModel.findById(id).lean().exec().catch(() => null);
    return doc ? withId<Quote>(doc as never) : null;
  }
  async byToken(token: string): Promise<WithId<Quote> | null> {
    const doc = await QuoteModel.findOne({ token }).lean().exec();
    return doc ? withId<Quote>(doc as never) : null;
  }
  async update(id: string, patch: Partial<Quote>): Promise<WithId<Quote> | null> {
    const doc = await QuoteModel.findByIdAndUpdate(id, { $set: patch }, { new: true }).lean().exec().catch(() => null);
    return doc ? withId<Quote>(doc as never) : null;
  }
  async list(filter: { status?: string; contactId?: string; limit: number }): Promise<WithId<Quote>[]> {
    const where: FilterQuery<Quote> = {};
    if (filter.status) where.status = filter.status;
    if (filter.contactId) where.contactId = filter.contactId;
    const docs = await QuoteModel.find(where, { token: 1, number: 1, title: 1, contactId: 1, status: 1, total: 1, currency: 1, validUntil: 1, sentAt: 1, viewedAt: 1, acceptedAt: 1, createdAt: 1, updatedAt: 1, language: 1 })
      .sort({ createdAt: -1 })
      .limit(filter.limit)
      .lean()
      .exec();
    return docs.map((d) => withId<Quote>(d as never));
  }
  async delete(id: string): Promise<void> {
    await QuoteModel.findByIdAndDelete(id).exec();
  }
  async deleteForContact(contactId: string): Promise<void> {
    await QuoteModel.deleteMany({ contactId }).exec();
  }
}

export class BookingRepository {
  async create(b: Booking): Promise<WithId<Booking>> {
    const doc = await BookingModel.create(b);
    return withId<Booking>(doc.toObject({ versionKey: false }) as never);
  }
  async get(id: string): Promise<WithId<Booking> | null> {
    const doc = await BookingModel.findById(id).lean().exec().catch(() => null);
    return doc ? withId<Booking>(doc as never) : null;
  }
  async update(id: string, patch: Partial<Booking>): Promise<WithId<Booking> | null> {
    const doc = await BookingModel.findByIdAndUpdate(id, { $set: patch }, { new: true }).lean().exec().catch(() => null);
    return doc ? withId<Booking>(doc as never) : null;
  }
  /** Confirmed bookings overlapping a window — what makes a slot busy. */
  async confirmedBetween(from: string, to: string): Promise<WithId<Booking>[]> {
    const docs = await BookingModel.find({ status: "confirmed", start: { $lt: to }, end: { $gt: from } }).lean().exec();
    return docs.map((d) => withId<Booking>(d as never));
  }
  async list(filter: { from?: string; to?: string; status?: string; contactId?: string; limit: number }): Promise<WithId<Booking>[]> {
    const where: FilterQuery<Booking> = {};
    if (filter.from || filter.to) where.start = { ...(filter.from ? { $gte: filter.from } : {}), ...(filter.to ? { $lt: filter.to } : {}) };
    if (filter.status) where.status = filter.status;
    if (filter.contactId) where.contactId = filter.contactId;
    const docs = await BookingModel.find(where).sort({ start: 1 }).limit(filter.limit).lean().exec();
    return docs.map((d) => withId<Booking>(d as never));
  }
  /** Confirmed calls starting soon that have not been announced yet. */
  async dueForReminder(until: string, from: string): Promise<WithId<Booking>[]> {
    const docs = await BookingModel.find({ status: "confirmed", start: { $gte: from, $lte: until }, remindedAt: { $exists: false } }).lean().exec();
    return docs.map((d) => withId<Booking>(d as never));
  }
  async deleteForContact(contactId: string): Promise<void> {
    await BookingModel.deleteMany({ contactId }).exec();
  }
}
