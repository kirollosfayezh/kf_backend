import { test } from "node:test";
import assert from "node:assert/strict";
import { cleanTerm } from "./ads.service.js";

const AT = "2026-11-20T10:00:00.000Z";

test("a search-term row is read the way Google Ads sends it", () => {
  const row = cleanTerm(
    // 64-bit numbers arrive as strings; enums arrive upper-case.
    { day: "2026-11-19", campaignId: "2199", adGroupId: 77, term: "  free pos software  ", keyword: "pos system", matchType: "BROAD", status: "NONE", impressions: "40", clicks: "3", costMicros: "45500000", conversions: 0.333 },
    AT
  );
  assert.deepEqual(row, {
    day: "2026-11-19",
    campaignId: "2199",
    adGroupId: "77",
    term: "free pos software",
    keyword: "pos system",
    matchType: "broad",
    status: "none",
    impressions: 40,
    clicks: 3,
    costMicros: 45500000,
    conversions: 0.33,
    updatedAt: AT,
  });
});

test("a term already excluded keeps that status", () => {
  assert.equal(cleanTerm({ day: "2026-11-19", campaignId: "1", adGroupId: "2", term: "jobs", status: "EXCLUDED" }, AT)?.status, "excluded");
  assert.equal(cleanTerm({ day: "2026-11-19", campaignId: "1", adGroupId: "2", term: "jobs", status: "ADDED" }, AT)?.status, "added");
  assert.equal(cleanTerm({ day: "2026-11-19", campaignId: "1", adGroupId: "2", term: "jobs", status: "whatever" }, AT)?.status, "none");
});

test("rows that cannot be keyed are dropped, and bad numbers become zero", () => {
  assert.equal(cleanTerm(null, AT), null);
  assert.equal(cleanTerm({ day: "19/11/2026", campaignId: "1", adGroupId: "2", term: "x" }, AT), null);
  assert.equal(cleanTerm({ day: "2026-11-19", campaignId: "abc", adGroupId: "2", term: "x" }, AT), null);
  assert.equal(cleanTerm({ day: "2026-11-19", campaignId: "1", adGroupId: "2", term: "   " }, AT), null);
  const row = cleanTerm({ day: "2026-11-19", campaignId: "1", adGroupId: "2", term: "x", clicks: -4, costMicros: "nope", impressions: null }, AT);
  assert.equal(row?.clicks, 0);
  assert.equal(row?.costMicros, 0);
  assert.equal(row?.impressions, 0);
  assert.equal(row?.keyword, "");
  assert.equal("matchType" in (row ?? {}), false);
});
