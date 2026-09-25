import { Schema, model } from "mongoose";
import type { Subscriber } from "../shared/types.js";

const subscriberSchema = new Schema<Subscriber>(
  {
    // One row per address: the unique index is what makes a repeat sign-up a
    // no-op rather than a duplicate, and lower-casing keeps "A@x.com" and
    // "a@x.com" the same row.
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    lang: String,
    source: { type: String, enum: ["footer", "article", "popup"], default: "footer" },
    visitorId: String,
    contactId: { type: String, index: true },
    consentAt: { type: String, required: true },
    unsubscribedAt: String,
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false }
);

export const SubscriberModel = model<Subscriber>("Subscriber", subscriberSchema, "subscribers");
