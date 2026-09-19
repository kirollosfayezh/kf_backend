import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { getSummary } from "../../shared/services/analytics.service.js";

export const adminAnalyticsRouter = Router();

adminAnalyticsRouter.get(
  "/summary",
  asyncHandler(async (req, res) => {
    const days = Number(req.query.days ?? 30);
    ok(res, await getSummary(days));
  })
);
