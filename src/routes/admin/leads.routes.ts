import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import { listLeads, updateLeadStatus } from "../../shared/services/leads.service.js";
import { AppError } from "../../shared/errors/app-error.js";
import type { LeadStatus } from "../../shared/types/index.js";

const STATUSES: LeadStatus[] = ["new", "contacted", "won", "lost"];

export const adminLeadsRouter = Router();

adminLeadsRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const status = req.query.status as LeadStatus | undefined;
    if (status && !STATUSES.includes(status)) throw AppError.badRequest("Invalid status filter");
    ok(res, await listLeads(status));
  })
);

adminLeadsRouter.patch(
  "/:id/status",
  asyncHandler(async (req, res) => {
    const { status } = req.body ?? {};
    if (!STATUSES.includes(status)) throw AppError.badRequest("Invalid status");
    ok(res, await updateLeadStatus(paramStr(req.params.id), status));
  })
);
