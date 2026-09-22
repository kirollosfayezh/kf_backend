import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { listSeoPages } from "../../shared/services/seo.service.js";

export const publicSeoRouter = Router();

/**
 * Read-only for the site and for the build-time prerender, which merges these
 * over its compiled-in defaults. Public because the values end up in the page's
 * own `<head>` anyway — there is nothing here a visitor cannot already see.
 */
publicSeoRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    ok(res, await listSeoPages());
  })
);
