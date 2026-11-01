import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import { deleteDemo, getDemoSummary, listDemos, saveDemo } from "../../shared/services/demo.service.js";

/** Demo websites for the dashboard: list, upload or replace (`{ html }`), remove. */
export const adminDemosRouter = Router();

adminDemosRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    ok(res, await listDemos());
  })
);

adminDemosRouter.get(
  "/:slug",
  asyncHandler(async (req, res) => {
    ok(res, await getDemoSummary(paramStr(req.params.slug)));
  })
);

adminDemosRouter.put(
  "/:slug",
  asyncHandler(async (req, res) => {
    ok(res, await saveDemo(paramStr(req.params.slug), (req.body ?? {}).html));
  })
);

adminDemosRouter.delete(
  "/:slug",
  asyncHandler(async (req, res) => {
    const slug = paramStr(req.params.slug);
    await deleteDemo(slug);
    ok(res, { slug });
  })
);
