import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { parseBody } from "../../shared/http/validate.js";
import { subscribe } from "../../shared/services/newsletter.service.js";
import { isHoneypotFilled, newsletterBodySchema } from "./schemas.js";

export const publicNewsletterRouter = Router();

publicNewsletterRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { email, lang, source, visitorId, website } = parseBody(newsletterBodySchema, req.body);
    // Honeypot: a bot gets the success it expects and nothing is stored — an
    // error would only teach it which field to leave blank.
    if (isHoneypotFilled(website)) {
      ok(res, { created: true }, 201);
      return;
    }
    const result = await subscribe({ email, lang, source, visitorId });
    ok(res, result, result.created ? 201 : 200);
  })
);
