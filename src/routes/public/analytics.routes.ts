import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { recordEvents } from "../../shared/services/analytics.service.js";

export const publicAnalyticsRouter = Router();

/**
 * The site batches events and sends them with `navigator.sendBeacon`, which
 * cannot read a response — so this answers 202 and never makes the caller wait.
 */
publicAnalyticsRouter.post(
  "/events",
  asyncHandler(async (req, res) => {
    const events = Array.isArray(req.body) ? req.body : req.body?.events;
    const written = await recordEvents(events, { userAgent: req.get("user-agent") });
    ok(res, { written }, 202);
  })
);
