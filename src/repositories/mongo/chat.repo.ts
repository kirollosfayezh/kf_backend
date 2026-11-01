import { ChatMessageModel, ChatThreadModel } from "../../models/chat.model.js";
import type { ChatMessage, ChatSender, ChatThread } from "../../shared/types/index.js";
import type { WithId } from "../types.js";

function plain<T extends Record<string, unknown>>(doc: {
  _id: unknown;
  toObject: (options?: { versionKey?: boolean }) => Record<string, unknown>;
}): WithId<T> {
  const obj = doc.toObject({ versionKey: false });
  const { _id, ...rest } = obj;
  return { id: String(_id), ...(rest as T) };
}

/**
 * Chat has a different shape than the generic content Repository<T> (a thread
 * plus an ordered message subcollection), so it gets its own small repository
 * instead of forcing it through the generic interface. Still Mongo-backed here,
 * still swappable later by writing a new implementation of this same shape.
 */
export class ChatRepository {
  listThreads(): Promise<WithId<ChatThread>[]> {
    return ChatThreadModel.find()
      .sort({ lastMessageAt: -1 })
      .exec()
      .then((docs) => docs.map((d) => plain<ChatThread>(d)));
  }

  async getOrCreateThread(visitorId: string): Promise<WithId<ChatThread>> {
    const existing = await ChatThreadModel.findOne({ visitorId }).exec();
    if (existing) return plain<ChatThread>(existing);
    const now = new Date().toISOString();
    const created = await ChatThreadModel.create({
      visitorId,
      visitorMeta: {},
      userTyping: false,
      lastMessageAt: now,
      createdAt: now,
    });
    return plain<ChatThread>(created);
  }

  /** Merges the provided keys — a later call with only a name must not wipe a saved contact. */
  async setVisitorMeta(
    visitorId: string,
    meta: { name?: string; contact?: string }
  ): Promise<WithId<ChatThread>> {
    await this.getOrCreateThread(visitorId);
    const update: Record<string, string> = {};
    if (meta.name !== undefined) update["visitorMeta.name"] = meta.name;
    if (meta.contact !== undefined) update["visitorMeta.contact"] = meta.contact;

    const doc = await ChatThreadModel.findOneAndUpdate({ visitorId }, update, {
      new: true,
    }).exec();
    return plain<ChatThread>(doc!);
  }

  async getThread(visitorId: string): Promise<WithId<ChatThread> | null> {
    const doc = await ChatThreadModel.findOne({ visitorId }).exec();
    return doc ? plain<ChatThread>(doc) : null;
  }

  /** The most recently active thread for this phone (E.164), if any. */
  async findLatestByPhone(phone: string): Promise<WithId<ChatThread> | null> {
    const doc = await ChatThreadModel.findOne({ phone }).sort({ lastMessageAt: -1 }).exec();
    return doc ? plain<ChatThread>(doc) : null;
  }

  /** Attaches a verified phone (and, when given, a name) to a thread, creating it if needed. */
  async setPhone(
    visitorId: string,
    phone: string,
    phoneCountry: string | undefined,
    name?: string
  ): Promise<WithId<ChatThread>> {
    await this.getOrCreateThread(visitorId);
    const update: Record<string, string> = { phone, "visitorMeta.contact": phone };
    if (phoneCountry) update.phoneCountry = phoneCountry;
    if (name) update["visitorMeta.name"] = name;
    const doc = await ChatThreadModel.findOneAndUpdate({ visitorId }, update, { new: true }).exec();
    return plain<ChatThread>(doc!);
  }

  /**
   * Folds one thread into another: its messages move across and it is removed.
   * Used when a visitor who chatted anonymously in this browser turns out to
   * already have a thread under their phone number.
   */
  async mergeThreads(fromVisitorId: string, intoVisitorId: string): Promise<void> {
    if (fromVisitorId === intoVisitorId) return;
    await ChatMessageModel.updateMany({ threadId: fromVisitorId }, { threadId: intoVisitorId }).exec();
    await ChatThreadModel.deleteOne({ visitorId: fromVisitorId }).exec();
    const last = await ChatMessageModel.findOne({ threadId: intoVisitorId }).sort({ ts: -1 }).exec();
    if (last) {
      await ChatThreadModel.updateOne(
        { visitorId: intoVisitorId },
        { lastMessageAt: new Date(last.ts).toISOString() }
      ).exec();
    }
  }

  async setTyping(visitorId: string, typing: boolean): Promise<void> {
    await ChatThreadModel.updateOne({ visitorId }, { userTyping: typing }).exec();
  }

  listMessages(visitorId: string): Promise<WithId<ChatMessage>[]> {
    return ChatMessageModel.find({ threadId: visitorId })
      .sort({ ts: 1 })
      .exec()
      .then((docs) => docs.map((d) => plain<ChatMessage>(d)));
  }

  async addMessage(
    visitorId: string,
    from: ChatSender,
    text: string
  ): Promise<WithId<ChatMessage>> {
    await this.getOrCreateThread(visitorId);
    const ts = Date.now();
    const message = await ChatMessageModel.create({ threadId: visitorId, from, text, ts });
    await ChatThreadModel.updateOne(
      { visitorId },
      { lastMessageAt: new Date(ts).toISOString(), userTyping: false }
    ).exec();
    return plain<ChatMessage>(message);
  }
}
