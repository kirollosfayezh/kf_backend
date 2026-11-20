import { Schema, model } from "mongoose";
import type { AdSearchTerm, AdsSyncState } from "../shared/types/index.js";

const searchTermSchema = new Schema<AdSearchTerm>(
  {
    day: { type: String, required: true },
    campaignId: { type: String, required: true },
    adGroupId: { type: String, required: true },
    term: { type: String, required: true },
    keyword: { type: String, default: "" },
    matchType: String,
    status: { type: String, default: "none" },
    impressions: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    costMicros: { type: Number, default: 0 },
    conversions: { type: Number, default: 0 },
    updatedAt: String,
  },
  { versionKey: false }
);
// One row per term, per day, per ad group and matched keyword: the script
// re-sends the last 30 days on every run (Google keeps revising recent days),
// so a run must overwrite its own earlier rows rather than add to them.
searchTermSchema.index({ day: 1, campaignId: 1, adGroupId: 1, term: 1, keyword: 1, matchType: 1 }, { unique: true });

export const AdSearchTermModel = model<AdSearchTerm>("AdSearchTerm", searchTermSchema, "adSearchTerms");

/** A singleton (`_id: "google"`): the sync key, the last run and the id → name lookups. */
const adsSyncSchema = new Schema<AdsSyncState & { _id: string }>(
  {
    _id: String,
    key: { type: String, required: true },
    account: { type: Schema.Types.Mixed },
    lastSyncAt: String,
    lastRows: Number,
    campaigns: { type: Schema.Types.Mixed, default: () => ({}) },
    adGroups: { type: Schema.Types.Mixed, default: () => ({}) },
  },
  { versionKey: false, minimize: false }
);

export const AdsSyncModel = model<AdsSyncState & { _id: string }>("AdsSync", adsSyncSchema, "adsSync");
