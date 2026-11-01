import { Schema, model } from "mongoose";
import { CONTACT_STAGES, type Activity, type Contact } from "../shared/types/index.js";

const contactSchema = new Schema<Contact>(
  {
    name: String,
    phones: { type: [String], default: [], index: true },
    emails: { type: [String], default: [], index: true },
    company: String,
    country: String,
    sources: { type: [String], default: [] },
    visitorIds: { type: [String], default: [], index: true },
    stage: { type: String, enum: CONTACT_STAGES, default: "new", index: true },
    value: Number,
    currency: { type: String, default: "EGP" },
    tags: { type: [String], default: [] },
    lostReason: String,
    nextFollowUpAt: { type: String, index: true },
    /** The follow-up date that already raised an alert, so each date alerts once. */
    followUpNotifiedFor: String,
    lastActivityAt: { type: String, required: true, index: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false }
);

export const ContactModel = model<Contact>("Contact", contactSchema, "contacts");

const activitySchema = new Schema<Activity>(
  {
    contactId: { type: String, required: true, index: true },
    type: { type: String, required: true },
    text: String,
    meta: { type: Schema.Types.Mixed },
    by: { type: String, default: "system" },
    at: { type: String, required: true, index: true },
  },
  { versionKey: false }
);

export const ActivityModel = model<Activity>("Activity", activitySchema, "activities");
