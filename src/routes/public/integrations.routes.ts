import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { ingestAdsSync } from "../../shared/services/ads.service.js";

export const publicIntegrationsRouter = Router();

/**
 * Where the Google Ads script posts the account's search terms. Not an admin
 * session: the script runs inside Google Ads, so it proves itself with the
 * sync key from the dashboard (`x-kf-key`), which can do nothing but this.
 */
publicIntegrationsRouter.post(
  "/google-ads/sync",
  asyncHandler(async (req, res) => {
    ok(res, await ingestAdsSync(req.get("x-kf-key"), req.body));
  })
);
