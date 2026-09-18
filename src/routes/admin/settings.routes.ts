import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { getSettings, updateSettings } from "../../shared/services/settings.service.js";

export const adminSettingsRouter = Router();

adminSettingsRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    ok(res, await getSettings());
  })
);

adminSettingsRouter.patch(
  "/",
  asyncHandler(async (req, res) => {
    ok(res, await updateSettings(req.body ?? {}));
  })
);
