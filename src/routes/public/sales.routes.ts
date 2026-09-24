import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import { acceptQuote, declineQuote, viewQuoteByToken } from "../../shared/services/quotes.service.js";
import { createBooking, publicSlots } from "../../shared/services/bookings.service.js";

/** The client's quote link. The random token is the only key; nothing is listable. */
export const publicQuotesRouter = Router();
publicQuotesRouter.get("/:token", asyncHandler(async (req, res) => ok(res, await viewQuoteByToken(paramStr(req.params.token)))));
publicQuotesRouter.post("/:token/accept", asyncHandler(async (req, res) => ok(res, await acceptQuote(paramStr(req.params.token), req.body?.name))));
publicQuotesRouter.post("/:token/decline", asyncHandler(async (req, res) => ok(res, await declineQuote(paramStr(req.params.token), req.body?.reason))));

export const publicBookingsRouter = Router();
publicBookingsRouter.get("/slots", asyncHandler(async (_req, res) => ok(res, await publicSlots())));
publicBookingsRouter.post("/", asyncHandler(async (req, res) => ok(res, await createBooking(req.body ?? {}), 201)));
