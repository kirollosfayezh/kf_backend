import { Schema, model } from "mongoose";
import type { ConsentRecord, Visitor } from "../shared/types.js";

const touchSchema = new Schema(
  {
    referrer: String,
    landingPath: String,
    utmSource: String,
    utmMedium: String,
    utmCampaign: String,
    utmTerm: String,
    utmContent: String,
    gclid: String,
    fbclid: String,
    at: String,
  },
  { _id: false }
);

const visitorSchema = new Schema<Visitor & { expiresAt?: Date }>(
  {
    visitorId: { type: String, required: true, unique: true },
    firstSeenAt: { type: String, required: true },
    lastSeenAt: { type: String, required: true, index: true },
    sessions: { type: Number, default: 0 },
    pageviews: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    firstTouch: touchSchema,
    lastTouch: touchSchema,
    device: String,
    browser: String,
    os: String,
    lang: String,
    timezone: String,
    country: String,
    screen: String,
    consent: new Schema({ status: String, at: String }, { _id: false }),
    contactId: { type: String, index: true },
    /**
     * Anonymous profiles expire 13 months after the last visit (the CNIL's
     * guidance for audience measurement). Linking a profile to a contact
     * removes this, so a customer's history is kept with their record.
     */
    expiresAt: Date,
  },
  { versionKey: false }
);
visitorSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const VisitorModel = model<Visitor & { expiresAt?: Date }>("Visitor", visitorSchema, "visitors");

const consentSchema = new Schema<ConsentRecord>(
  {
    visitorId: { type: String, index: true },
    status: { type: String, enum: ["granted", "denied"], required: true },
    source: { type: String, enum: ["banner", "settings"], default: "banner" },
    policyVersion: { type: String, required: true },
    userAgent: String,
    at: { type: String, required: true, index: true },
  },
  { versionKey: false }
);

export const ConsentRecordModel = model<ConsentRecord>("ConsentRecord", consentSchema, "consentRecords");
