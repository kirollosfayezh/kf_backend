import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { subscribe } from "../../shared/services/newsletter.service.js";

export const publicNewsletterRouter = Router();

publicNewsletterRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { email, lang, source, visitorId, website } = req.body ?? {};
    // Honeypot: the form renders a `website` field no person can see, so a
    // filled-in value is a bot. It gets the success it expects and nothing is
    // stored — an error would only teach it which field to leave blank.
    if (typeof website === "string" && website.trim()) {
      ok(res, { created: true }, 201);
      return;
    }
    const result = await subscribe({ email, lang, source, visitorId });
    ok(res, result, result.created ? 201 : 200);
  })
);
