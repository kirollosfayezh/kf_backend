import { createHash, timingSafeEqual } from "node:crypto";
import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import type { AdMatchType, AdSearchTerm, AdTermStatus, AdsAccount, AdsSetup, SearchTermsReport } from "../types/index.js";

/**
 * Google Ads search terms, pushed in by a script that runs inside the Ads
 * account (the dashboard hands the owner the script, key included).
 *
 * Why a script and not the Google Ads API: the API needs a developer token
 * that Google approves by hand over days or weeks; a script in the account
 * needs nothing but a paste, and reads the same report.
 */

/** The most one request may carry. The script sends runs in chunks well under this. */
export const MAX_ROWS = 400;
const MAX_NAMES = 600;

const digest = (s: string) => createHash("sha256").update(s).digest();

/** Constant-time: hashing first also hides the key's length. */
function sameKey(given: string, saved: string): boolean {
  return timingSafeEqual(digest(given), digest(saved));
}

const text = (v: unknown, max: number): string => (typeof v === "string" ? v.trim().slice(0, max) : typeof v === "number" ? String(v) : "");
const id = (v: unknown): string => {
  const s = text(v, 24);
  return /^\d+$/.test(s) ? s : "";
};
/** Google sends 64-bit numbers as strings, so both are accepted. */
const count = (v: unknown): number => {
  const n = typeof v === "string" ? Number(v) : v;
  return typeof n === "number" && Number.isFinite(n) && n > 0 ? n : 0;
};

const MATCH: Record<string, AdMatchType> = { exact: "exact", phrase: "phrase", broad: "broad" };
const STATUS: Record<string, AdTermStatus> = { added: "added", excluded: "excluded", added_excluded: "added_excluded", none: "none" };

/** One row as the script sends it → one stored row, or null when it is not usable. */
export function cleanTerm(raw: unknown, updatedAt: string): AdSearchTerm | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const day = text(r.day, 10);
  const term = text(r.term, 200);
  const campaignId = id(r.campaignId);
  const adGroupId = id(r.adGroupId);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || !term || !campaignId || !adGroupId) return null;
  const row: AdSearchTerm = {
    day,
    campaignId,
    adGroupId,
    term,
    keyword: text(r.keyword, 200),
    matchType: MATCH[text(r.matchType, 20).toLowerCase()],
    status: STATUS[text(r.status, 20).toLowerCase()] ?? "none",
    impressions: Math.round(count(r.impressions)),
    clicks: Math.round(count(r.clicks)),
    costMicros: Math.round(count(r.costMicros)),
    conversions: Math.round(count(r.conversions) * 100) / 100,
    updatedAt,
  };
  if (!row.matchType) delete row.matchType;
  return row;
}

/** `[{ id, name }]` → `{ id: name }`, ids being Google's numeric ones (safe as field names). */
function names(raw: unknown): Record<string, string> {
  if (!Array.isArray(raw)) return {};
  const out: Record<string, string> = {};
  for (const item of raw.slice(0, MAX_NAMES)) {
    const key = id((item as { id?: unknown })?.id);
    const name = text((item as { name?: unknown })?.name, 150);
    if (key && name) out[key] = name;
  }
  return out;
}

function cleanAccount(raw: unknown): AdsAccount | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const r = raw as Record<string, unknown>;
  const account: AdsAccount = {
    id: text(r.id, 20) || undefined,
    name: text(r.name, 120) || undefined,
    currency: /^[A-Z]{3}$/.test(text(r.currency, 3)) ? text(r.currency, 3) : undefined,
    timezone: text(r.timezone, 64) || undefined,
  };
  return Object.values(account).some(Boolean) ? account : undefined;
}

/**
 * One request of a script run. A run is several requests (rows in chunks,
 * then names); the last one carries `done: true` and the run's row count,
 * which is what stamps "last synced".
 */
export async function ingestAdsSync(key: unknown, body: unknown): Promise<{ written: number; skipped: number }> {
  const state = await repos.ads.state();
  if (typeof key !== "string" || !key || !state || !sameKey(key, state.key)) {
    throw AppError.unauthorized("Unknown sync key. Copy the script again from the dashboard.");
  }
  if (!body || typeof body !== "object") throw AppError.badRequest("Expected a JSON body");
  const b = body as Record<string, unknown>;
  const incoming = Array.isArray(b.rows) ? b.rows : [];
  if (incoming.length > MAX_ROWS) throw AppError.badRequest(`At most ${MAX_ROWS} rows per request`);

  const now = new Date().toISOString();
  const rows = incoming.map((r) => cleanTerm(r, now)).filter((r): r is AdSearchTerm => r !== null);
  const written = await repos.ads.upsertTerms(rows);
  await repos.ads.saveSync({
    account: cleanAccount(b.account),
    campaigns: names(b.campaigns),
    adGroups: names(b.adGroups),
    finished: b.done === true ? { at: now, rows: Math.round(count(b.totalRows)) } : undefined,
  });
  return { written, skipped: incoming.length - rows.length };
}

const money = (micros: number) => Math.round(micros / 10_000) / 100;

/** The dashboard's search-terms table for the last `days` days, ids swapped for names. */
export async function searchTermsReport(days: number): Promise<SearchTermsReport> {
  const window = Number.isFinite(days) ? Math.min(Math.max(Math.trunc(days), 1), 365) : 30;
  const to = new Date();
  const from = new Date(to.getTime() - (window - 1) * 24 * 60 * 60 * 1000);
  const fromDay = from.toISOString().slice(0, 10);
  // A day ahead: the account's calendar can already be on tomorrow's date.
  const toDay = new Date(to.getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const [state, totals, sums] = await Promise.all([repos.ads.state(), repos.ads.totals(fromDay, toDay), repos.ads.sums(fromDay, toDay)]);
  return {
    range: { from: fromDay, to: to.toISOString().slice(0, 10), days: window },
    synced: !!state?.lastSyncAt,
    lastSyncAt: state?.lastSyncAt,
    account: state?.account,
    totals: { terms: sums.terms, impressions: sums.impressions, clicks: sums.clicks, cost: money(sums.costMicros), conversions: Math.round(sums.conversions * 100) / 100 },
    rows: totals.map((t) => ({
      term: t.term,
      keyword: t.keyword,
      matchType: t.matchType,
      campaign: state?.campaigns[t.campaignId] ?? t.campaignId,
      adGroup: state?.adGroups[t.adGroupId] ?? t.adGroupId,
      status: t.status,
      impressions: t.impressions,
      clicks: t.clicks,
      cost: money(t.costMicros),
      conversions: Math.round(t.conversions * 100) / 100,
    })),
  };
}

const setup = (s: { key: string; lastSyncAt?: string; lastRows?: number; account?: AdsAccount }): AdsSetup => ({
  key: s.key,
  lastSyncAt: s.lastSyncAt,
  lastRows: s.lastRows,
  account: s.account,
});

/** The key for the script, created on first use. Admin only. */
export async function getAdsSetup(): Promise<AdsSetup> {
  return setup(await repos.ads.ensure());
}

/** Replaces the key: for when the script's text has been shared by mistake. */
export async function rotateAdsKey(): Promise<AdsSetup> {
  return setup(await repos.ads.rotateKey());
}

/** Campaign and ad-group names by id, for showing a visitor's `utm_campaign={campaignid}` as a name. */
export async function adNames(): Promise<{ campaigns: Record<string, string>; adGroups: Record<string, string> }> {
  const state = await repos.ads.state();
  return { campaigns: state?.campaigns ?? {}, adGroups: state?.adGroups ?? {} };
}
