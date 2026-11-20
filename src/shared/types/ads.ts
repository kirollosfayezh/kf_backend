/**
 * Google Ads data pushed in by the account's own script (see ads.service.ts).
 *
 * The website can never see what a person typed into Google: an ad click
 * carries at most the keyword that was bid on. The typed words exist only in
 * the account's Search terms report, so a small Google Ads script sends that
 * report here once a day and the dashboard reads it from this store.
 */

export type AdMatchType = "exact" | "phrase" | "broad";

/** added = already a keyword; excluded = already a negative; none = neither yet. */
export type AdTermStatus = "added" | "excluded" | "added_excluded" | "none";

/** One search term, on one day, in one ad group, for the keyword it matched. */
export interface AdSearchTerm extends Record<string, unknown> {
  /** The account's own calendar day, YYYY-MM-DD. */
  day: string;
  campaignId: string;
  adGroupId: string;
  /** What the person typed. */
  term: string;
  /** The keyword it matched ("" where Google reports none). */
  keyword: string;
  matchType?: AdMatchType;
  status: AdTermStatus;
  impressions: number;
  clicks: number;
  /** Millionths of the account currency, as Google reports it. */
  costMicros: number;
  conversions: number;
  updatedAt: string;
}

export interface AdsAccount {
  id?: string;
  name?: string;
  currency?: string;
  timezone?: string;
}

/** The single record that holds the sync key, when it last ran and the id → name lookups. */
export interface AdsSyncState extends Record<string, unknown> {
  key: string;
  account?: AdsAccount;
  lastSyncAt?: string;
  /** Rows received by the last finished run. */
  lastRows?: number;
  campaigns: Record<string, string>;
  adGroups: Record<string, string>;
}

/** One row of the dashboard's search-terms table: a term summed over the range. */
export interface SearchTermRow {
  term: string;
  keyword: string;
  matchType?: AdMatchType;
  campaign: string;
  adGroup: string;
  status: AdTermStatus;
  impressions: number;
  clicks: number;
  /** In the account currency. */
  cost: number;
  conversions: number;
}

export interface SearchTermsReport extends Record<string, unknown> {
  range: { from: string; to: string; days: number };
  /** False until the script has completed one run. */
  synced: boolean;
  lastSyncAt?: string;
  account?: AdsAccount;
  totals: { terms: number; impressions: number; clicks: number; cost: number; conversions: number };
  rows: SearchTermRow[];
}

/** What the dashboard needs to hand the owner a ready-to-paste script. */
export interface AdsSetup extends Record<string, unknown> {
  key: string;
  lastSyncAt?: string;
  lastRows?: number;
  account?: AdsAccount;
}
