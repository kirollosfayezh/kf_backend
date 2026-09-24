import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import type { AuthedRequest } from "../../shared/middleware/auth.js";
import {
  addNote,
  createManualContact,
  crmOverview,
  eraseContact,
  getContactDetail,
  listContacts,
  updateContact,
} from "../../shared/services/contacts.service.js";
import { getVisitorDetail, listConsent, listVisitors } from "../../shared/services/visitors.service.js";

/** Who did it, for the activity timeline. */
const by = (req: AuthedRequest) => req.admin?.email ?? "admin";

export const adminContactsRouter = Router();

adminContactsRouter.get("/", asyncHandler(async (req, res) => ok(res, await listContacts(req.query))));
adminContactsRouter.post("/", asyncHandler(async (req, res) => ok(res, await createManualContact(req.body ?? {}, by(req)), 201)));
adminContactsRouter.get("/:id", asyncHandler(async (req, res) => ok(res, await getContactDetail(paramStr(req.params.id)))));
adminContactsRouter.patch(
  "/:id",
  asyncHandler(async (req, res) => ok(res, await updateContact(paramStr(req.params.id), req.body ?? {}, by(req))))
);
adminContactsRouter.delete("/:id", asyncHandler(async (req, res) => ok(res, await eraseContact(paramStr(req.params.id)))));
adminContactsRouter.post(
  "/:id/notes",
  asyncHandler(async (req, res) => ok(res, await addNote(paramStr(req.params.id), req.body?.text, by(req)), 201))
);

export const adminCrmRouter = Router();

adminCrmRouter.get("/overview", asyncHandler(async (_req, res) => ok(res, await crmOverview())));
adminCrmRouter.get("/visitors", asyncHandler(async (req, res) => ok(res, await listVisitors(req.query))));
adminCrmRouter.get(
  "/visitors/:visitorId",
  asyncHandler(async (req, res) => ok(res, await getVisitorDetail(paramStr(req.params.visitorId))))
);
adminCrmRouter.get("/consent", asyncHandler(async (req, res) => ok(res, await listConsent(req.query))));
