import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { AppError } from "../../shared/errors/app-error.js";
import { paramStr } from "../../shared/http/params.js";
import {
  createContent,
  deleteContent,
  getContent,
  listContent,
  updateContent,
} from "../../shared/services/content.service.js";
import type { ContentCollection } from "../../shared/types.js";
import { CONTENT_COLLECTIONS } from "../../models/content.model.js";


function assertCollection(raw: string | string[]): ContentCollection {
  const value = paramStr(raw);
  if (!CONTENT_COLLECTIONS.includes(value as ContentCollection)) {
    throw AppError.notFound(`Unknown content collection: ${value}`);
  }
  return value as ContentCollection;
}

export const adminContentRouter = Router();

adminContentRouter.get(
  "/:collection",
  asyncHandler(async (req, res) => {
    ok(res, await listContent(assertCollection(req.params.collection), false));
  })
);

adminContentRouter.get(
  "/:collection/:id",
  asyncHandler(async (req, res) => {
    const collection = assertCollection(req.params.collection);
    ok(res, await getContent(collection, paramStr(req.params.id)));
  })
);

adminContentRouter.post(
  "/:collection",
  asyncHandler(async (req, res) => {
    const collection = assertCollection(req.params.collection);
    ok(res, await createContent(collection, req.body ?? {}), 201);
  })
);

adminContentRouter.patch(
  "/:collection/:id",
  asyncHandler(async (req, res) => {
    const collection = assertCollection(req.params.collection);
    ok(res, await updateContent(collection, paramStr(req.params.id), req.body ?? {}));
  })
);

adminContentRouter.delete(
  "/:collection/:id",
  asyncHandler(async (req, res) => {
    const collection = assertCollection(req.params.collection);
    await deleteContent(collection, paramStr(req.params.id));
    ok(res, { id: paramStr(req.params.id) });
  })
);
