import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { createLead } from "../../shared/services/leads.service.js";
import { AppError } from "../../shared/errors/app-error.js";

export const publicLeadsRouter = Router();

publicLeadsRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { source, name, email, phone, company, projectType, budget, message, visitorId } = req.body ?? {};
    if (source !== "contact" && source !== "campaign") {
      throw AppError.badRequest('source must be "contact" or "campaign"');
    }
    const lead = await createLead({
      source,
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      message,
      visitorId,
    });
    ok(res, lead, 201);
  })
);
