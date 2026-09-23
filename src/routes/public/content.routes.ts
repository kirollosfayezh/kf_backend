import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import { getSettings } from "../../shared/services/settings.service.js";
import { getContent, listContent } from "../../shared/services/content.service.js";
import { AppError } from "../../shared/errors/app-error.js";
import type { ContentCollection } from "../../shared/types.js";
import { CONTENT_COLLECTIONS } from "../../models/content.model.js";


function assertCollection(raw: string | string[]): ContentCollection {
  const value = paramStr(raw);
  if (!CONTENT_COLLECTIONS.includes(value as ContentCollection)) {
    throw AppError.notFound(`Unknown content collection: ${value}`);
  }
  return value as ContentCollection;
}

export const publicContentRouter = Router();

publicContentRouter.get(
  "/settings",
  asyncHandler(async (_req, res) => {
    ok(res, await getSettings());
  })
);

publicContentRouter.get(
  "/:collection",
  asyncHandler(async (req, res) => {
    const collection = assertCollection(req.params.collection);
    ok(res, await listContent(collection, true));
  })
);

publicContentRouter.get(
  "/:collection/:id",
  asyncHandler(async (req, res) => {
    const collection = assertCollection(req.params.collection);
    const item = await getContent(collection, paramStr(req.params.id));
    if (!item.published) throw AppError.notFound(`${collection} item not found`);
    ok(res, item);
  })
);
