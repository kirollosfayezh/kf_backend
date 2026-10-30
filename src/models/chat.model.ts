import { Schema, model } from "mongoose";
import type { ChatMessage, ChatThread } from "../shared/types/index.js";

const visitorMetaSchema = new Schema({ name: String, contact: String }, { _id: false });

const threadSchema = new Schema<ChatThread>({
  visitorId: { type: String, required: true, unique: true },
  visitorMeta: { type: visitorMetaSchema, default: () => ({}) },
  // Indexed: entering a phone number in the widget looks its thread up by this.
  phone: { type: String, index: true },
  phoneCountry: String,
  userTyping: { type: Boolean, default: false },
  lastMessageAt: { type: String, required: true },
  createdAt: { type: String, required: true },
});

const messageSchema = new Schema<ChatMessage>({
  threadId: { type: String, required: true, index: true },
  from: { type: String, enum: ["visitor", "agent"], required: true },
  text: { type: String, required: true },
  ts: { type: Number, required: true },
});

export const ChatThreadModel = model<ChatThread>("ChatThread", threadSchema, "chatThreads");
export const ChatMessageModel = model<ChatMessage>("ChatMessage", messageSchema, "chatMessages");
