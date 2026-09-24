import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import {
  deleteTranslation,
  importTranslations,
  listTranslations,
  upsertTranslation,
} from "../../shared/services/translation.service.js";

export const adminTranslationsRouter = Router();

adminTranslationsRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    ok(res, await listTranslations());
  })
);

// The key travels in the body, not the path: it is a full English sentence,
// often with slashes, question marks and punctuation a path would mangle.
adminTranslationsRouter.put(
  "/",
  asyncHandler(async (req, res) => {
    ok(res, await upsertTranslation(req.body ?? {}));
  })
);

adminTranslationsRouter.post(
  "/import",
  asyncHandler(async (req, res) => {
    ok(res, await importTranslations(req.body?.rows));
  })
);

adminTranslationsRouter.delete(
  "/",
  asyncHandler(async (req, res) => {
    const key = req.body?.key;
    await deleteTranslation(key);
    ok(res, { key });
  })
);
