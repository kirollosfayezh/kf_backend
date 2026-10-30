import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { parseBody } from "../../shared/http/validate.js";
import { createLead, type CreateLeadInput } from "../../shared/services/leads.service.js";
import { leadBodySchema } from "./schemas.js";

export const publicLeadsRouter = Router();

publicLeadsRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const body = parseBody(leadBodySchema, req.body);
    // The schema guarantees the types; `createLead` owns the required-field
    // checks ("Name is required", …) and their messages.
    const lead = await createLead(body as CreateLeadInput);
    ok(res, lead, 201);
  })
);
