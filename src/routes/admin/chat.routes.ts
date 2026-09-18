import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import {
  listMessages,
  listThreads,
  sendMessage,
  setAgentTyping,
} from "../../shared/services/chat.service.js";

export const adminChatRouter = Router();

adminChatRouter.get(
  "/threads",
  asyncHandler(async (_req, res) => {
    ok(res, await listThreads());
  })
);

adminChatRouter.get(
  "/threads/:visitorId/messages",
  asyncHandler(async (req, res) => {
    ok(res, await listMessages(paramStr(req.params.visitorId)));
  })
);

adminChatRouter.post(
  "/threads/:visitorId/messages",
  asyncHandler(async (req, res) => {
    const message = await sendMessage(paramStr(req.params.visitorId), "agent", req.body?.text);
    ok(res, message, 201);
  })
);

adminChatRouter.patch(
  "/threads/:visitorId/typing",
  asyncHandler(async (req, res) => {
    setAgentTyping(paramStr(req.params.visitorId), Boolean(req.body?.typing));
    ok(res, { ok: true });
  })
);
