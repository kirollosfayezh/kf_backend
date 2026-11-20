import { randomBytes } from "node:crypto";
import { AdSearchTermModel, AdsSyncModel } from "../../models/ads.model.js";
import type { AdSearchTerm, AdsAccount, AdsSyncState, AdMatchType, AdTermStatus } from "../../shared/types/index.js";

const ID = "google";
const newKey = () => `kfads_${randomBytes(24).toString("base64url")}`;

/** A search term summed over a date range, still keyed by ids. */
export interface TermTotals {
  term: string;
  keyword: string;
  matchType?: AdMatchType;
  campaignId: string;
  adGroupId: string;
  status: AdTermStatus;
  impressions: number;
  clicks: number;
  costMicros: number;
  conversions: number;
}

/**
 * Google Ads search terms and the state of the script that sends them.
 * Bespoke rather than a `Repository<T>`: it is written in bulk by a keyed
 * endpoint and only ever read as sums.
 */
export class AdsRepository {
  async state(): Promise<AdsSyncState | null> {
    const doc = await AdsSyncModel.findById(ID).lean().exec();
    if (!doc) return null;
    return { key: doc.key, account: doc.account, lastSyncAt: doc.lastSyncAt, lastRows: doc.lastRows, campaigns: doc.campaigns ?? {}, adGroups: doc.adGroups ?? {} };
  }

  /** The state, creating the record (and its key) the first time it is asked for. */
  async ensure(): Promise<AdsSyncState> {
    await AdsSyncModel.updateOne({ _id: ID }, { $setOnInsert: { key: newKey(), campaigns: {}, adGroups: {} } }, { upsert: true }).exec();
    return (await this.state())!;
  }

  /** A new key; the script pasted with the old one stops being accepted. */
  async rotateKey(): Promise<AdsSyncState> {
    await AdsSyncModel.updateOne({ _id: ID }, { $set: { key: newKey() }, $setOnInsert: { campaigns: {}, adGroups: {} } }, { upsert: true }).exec();
    return (await this.state())!;
  }

  /** Merges what one request of a run carried; `finished` stamps the run as complete. */
  async saveSync(input: { account?: AdsAccount; campaigns: Record<string, string>; adGroups: Record<string, string>; finished?: { at: string; rows: number } }): Promise<void> {
    const set: Record<string, unknown> = {};
    if (input.account) set.account = input.account;
    for (const [id, name] of Object.entries(input.campaigns)) set[`campaigns.${id}`] = name;
    for (const [id, name] of Object.entries(input.adGroups)) set[`adGroups.${id}`] = name;
    if (input.finished) {
      set.lastSyncAt = input.finished.at;
      set.lastRows = input.finished.rows;
    }
    if (Object.keys(set).length) await AdsSyncModel.updateOne({ _id: ID }, { $set: set }).exec();
  }

  async upsertTerms(rows: AdSearchTerm[]): Promise<number> {
    if (!rows.length) return 0;
    const res = await AdSearchTermModel.bulkWrite(
      rows.map((r) => ({
        updateOne: {
          filter: { day: r.day, campaignId: r.campaignId, adGroupId: r.adGroupId, term: r.term, keyword: r.keyword, matchType: r.matchType ?? null },
          update: { $set: r },
          upsert: true,
        },
      })),
      { ordered: false }
    );
    return (res.upsertedCount ?? 0) + (res.matchedCount ?? 0);
  }

  /** Every term in the range, summed, most expensive first. The status is the latest day's. */
  async totals(fromDay: string, toDay: string, limit = 1000): Promise<TermTotals[]> {
    const rows = await AdSearchTermModel.aggregate([
      { $match: { day: { $gte: fromDay, $lte: toDay } } },
      { $sort: { day: 1 } },
      {
        $group: {
          _id: { term: "$term", keyword: "$keyword", matchType: "$matchType", campaignId: "$campaignId", adGroupId: "$adGroupId" },
          status: { $last: "$status" },
          impressions: { $sum: "$impressions" },
          clicks: { $sum: "$clicks" },
          costMicros: { $sum: "$costMicros" },
          conversions: { $sum: "$conversions" },
        },
      },
      { $sort: { costMicros: -1, clicks: -1, impressions: -1 } },
      { $limit: limit },
    ]).exec();
    return rows.map((r) => ({
      term: r._id.term as string,
      keyword: (r._id.keyword as string) ?? "",
      matchType: (r._id.matchType as AdMatchType | null) ?? undefined,
      campaignId: r._id.campaignId as string,
      adGroupId: r._id.adGroupId as string,
      status: (r.status as AdTermStatus) ?? "none",
      impressions: r.impressions as number,
      clicks: r.clicks as number,
      costMicros: r.costMicros as number,
      conversions: r.conversions as number,
    }));
  }

  /** Whole-range sums, including the terms `totals` cut off at its limit. */
  async sums(fromDay: string, toDay: string): Promise<{ terms: number; impressions: number; clicks: number; costMicros: number; conversions: number }> {
    const [terms, sums] = await Promise.all([
      AdSearchTermModel.distinct("term", { day: { $gte: fromDay, $lte: toDay } }).exec(),
      AdSearchTermModel.aggregate([
        { $match: { day: { $gte: fromDay, $lte: toDay } } },
        { $group: { _id: null, impressions: { $sum: "$impressions" }, clicks: { $sum: "$clicks" }, costMicros: { $sum: "$costMicros" }, conversions: { $sum: "$conversions" } } },
      ]).exec(),
    ]);
    const s = sums[0] ?? {};
    return { terms: terms.length, impressions: s.impressions ?? 0, clicks: s.clicks ?? 0, costMicros: s.costMicros ?? 0, conversions: s.conversions ?? 0 };
  }
}
