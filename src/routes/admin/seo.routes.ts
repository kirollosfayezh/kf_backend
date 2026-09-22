import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import { listSeoPages, upsertSeoPage } from "../../shared/services/seo.service.js";

export const adminSeoRouter = Router();

adminSeoRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    ok(res, await listSeoPages());
  })
);

adminSeoRouter.patch(
  "/:key",
  asyncHandler(async (req, res) => {
    ok(res, await upsertSeoPage(paramStr(req.params.key), req.body ?? {}));
  })
);
