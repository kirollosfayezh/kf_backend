import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import { getSettings } from "../../shared/services/settings.service.js";
import { cardView, getContent, listContent } from "../../shared/services/content.service.js";
import { AppError } from "../../shared/errors/app-error.js";
import type { ContentCollection } from "../../shared/types/index.js";
import { CONTENT_COLLECTIONS } from "../../models/content.model.js";


function assertCollection(raw: string | string[]): ContentCollection {
  const value = paramStr(raw);
  if (!CONTENT_COLLECTIONS.includes(value as ContentCollection)) {
    throw AppError.notFound(`Unknown content collection: ${value}`);
  }
  return value as ContentCollection;
}

export const publicContentRouter = Router();

// Every page view revalidates its content in the background. A minute in the
// browser and ten minutes stale-while-revalidate turn most of those into no
// request at all, while an edit still shows within about a minute. (The site's
// build fetches with Node, which keeps no HTTP cache.)
publicContentRouter.use((_req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=60, stale-while-revalidate=600");
  next();
});

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
    const items = await listContent(collection, true);
    // `?view=card`: what a list of cards needs, without the bodies.
    ok(res, req.query.view === "card" ? items.map(cardView) : items);
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
