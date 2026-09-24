import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import type { AuthedRequest } from "../../shared/middleware/auth.js";
import { createQuote, deleteQuote, getQuote, listQuotes, markQuoteSent, updateQuote } from "../../shared/services/quotes.service.js";
import { listBookings, updateBooking } from "../../shared/services/bookings.service.js";
import { getCrmSettings, testTelegram, updateCrmSettings } from "../../shared/services/crm-settings.service.js";
import { listNotifications, markNotificationsRead, notificationCount } from "../../shared/services/notify.service.js";
import { runDueAlerts } from "../../shared/services/scheduler.js";

const by = (req: AuthedRequest) => req.admin?.email ?? "admin";

export const adminQuotesRouter = Router();
adminQuotesRouter.get("/", asyncHandler(async (req, res) => ok(res, await listQuotes(req.query))));
adminQuotesRouter.post("/", asyncHandler(async (req, res) => ok(res, await createQuote(req.body ?? {}), 201)));
adminQuotesRouter.get("/:id", asyncHandler(async (req, res) => ok(res, await getQuote(paramStr(req.params.id)))));
adminQuotesRouter.patch("/:id", asyncHandler(async (req, res) => ok(res, await updateQuote(paramStr(req.params.id), req.body ?? {}))));
adminQuotesRouter.delete("/:id", asyncHandler(async (req, res) => ok(res, await deleteQuote(paramStr(req.params.id)))));
adminQuotesRouter.post("/:id/sent", asyncHandler(async (req, res) => ok(res, await markQuoteSent(paramStr(req.params.id), by(req)))));

export const adminBookingsRouter = Router();
adminBookingsRouter.get("/", asyncHandler(async (req, res) => ok(res, await listBookings(req.query))));
adminBookingsRouter.patch("/:id", asyncHandler(async (req, res) => ok(res, await updateBooking(paramStr(req.params.id), req.body ?? {}, by(req)))));

export const adminNotificationsRouter = Router();
adminNotificationsRouter.get("/", asyncHandler(async (req, res) => ok(res, await listNotifications(req.query))));
adminNotificationsRouter.get("/count", asyncHandler(async (_req, res) => ok(res, await notificationCount())));
adminNotificationsRouter.post("/read", asyncHandler(async (req, res) => ok(res, await markNotificationsRead(req.body?.ids))));
/** Runs the reminder check now — the dashboard calls it on load, which also covers a host that slept. */
adminNotificationsRouter.post("/check", asyncHandler(async (_req, res) => ok(res, await runDueAlerts())));

export const adminCrmSettingsRouter = Router();
adminCrmSettingsRouter.get("/", asyncHandler(async (_req, res) => ok(res, await getCrmSettings())));
adminCrmSettingsRouter.patch("/", asyncHandler(async (req, res) => ok(res, await updateCrmSettings(req.body ?? {}))));
adminCrmSettingsRouter.post("/telegram/test", asyncHandler(async (_req, res) => ok(res, await testTelegram())));
