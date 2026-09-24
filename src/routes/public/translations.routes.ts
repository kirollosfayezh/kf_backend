import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import { translationMap } from "../../shared/services/translation.service.js";

export const publicTranslationsRouter = Router();

/**
 * One language's dashboard overrides as a flat map. Public: every value ends up
 * rendered on the site anyway.
 */
publicTranslationsRouter.get(
  "/:lang",
  asyncHandler(async (req, res) => {
    ok(res, await translationMap(paramStr(req.params.lang)));
  })
);
