import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { getInsights, getSummary, resetAnalytics } from "../../shared/services/analytics.service.js";
import { getAdsSetup, rotateAdsKey, searchTermsReport } from "../../shared/services/ads.service.js";

export const adminAnalyticsRouter = Router();

adminAnalyticsRouter.get(
  "/summary",
  asyncHandler(async (req, res) => {
    const days = Number(req.query.days ?? 30);
    ok(res, await getSummary(days));
  })
);

adminAnalyticsRouter.get(
  "/insights",
  asyncHandler(async (req, res) => {
    const days = Number(req.query.days ?? 30);
    ok(res, await getInsights(days));
  })
);

/** What people typed before clicking an ad, from the account's own Search terms report. */
adminAnalyticsRouter.get(
  "/search-terms",
  asyncHandler(async (req, res) => {
    ok(res, await searchTermsReport(Number(req.query.days ?? 30)));
  })
);

/** The key the Google Ads script signs its uploads with, and when it last ran. */
adminAnalyticsRouter.get(
  "/google-ads/setup",
  asyncHandler(async (_req, res) => {
    ok(res, await getAdsSetup());
  })
);

adminAnalyticsRouter.post(
  "/google-ads/setup/rotate",
  asyncHandler(async (_req, res) => {
    ok(res, await rotateAdsKey());
  })
);

/**
 * Wipes every analytics event and visitor profile, so the numbers start from
 * zero (early traffic was the owner and test data). Irreversible; the body
 * must carry { confirm: "RESET" }.
 */
adminAnalyticsRouter.post(
  "/reset",
  asyncHandler(async (req, res) => {
    ok(res, await resetAnalytics(req.body?.confirm));
  })
);
