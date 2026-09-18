import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { getAdminById, login } from "../../shared/services/auth.service.js";
import { requireAdmin } from "../../shared/middleware/auth.js";
import type { AuthedRequest } from "../../shared/middleware/auth.js";

export const adminAuthRouter = Router();

adminAuthRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body ?? {};
    ok(res, await login(email, password));
  })
);

adminAuthRouter.get(
  "/me",
  requireAdmin,
  asyncHandler(async (req: AuthedRequest, res) => {
    ok(res, await getAdminById(req.admin!.sub));
  })
);
