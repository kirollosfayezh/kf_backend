import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import { listMessages, openThread, sendMessage, setTyping } from "../../shared/services/chat.service.js";

/**
 * Visitor-side chat. A visitor is identified only by the random `visitorId` their
 * browser generates and keeps in localStorage — there is no visitor login, so
 * treat thread contents as low-sensitivity (same trust model as the widget this
 * replaces).
 */
export const publicChatRouter = Router();

publicChatRouter.post(
  "/threads/:visitorId",
  asyncHandler(async (req, res) => {
    const { name, contact } = req.body ?? {};
    const thread = await openThread(paramStr(req.params.visitorId), { name, contact });
    ok(res, thread);
  })
);

publicChatRouter.get(
  "/threads/:visitorId/messages",
  asyncHandler(async (req, res) => {
    ok(res, await listMessages(paramStr(req.params.visitorId)));
  })
);

publicChatRouter.post(
  "/threads/:visitorId/messages",
  asyncHandler(async (req, res) => {
    const message = await sendMessage(paramStr(req.params.visitorId), "visitor", req.body?.text);
    ok(res, message, 201);
  })
);

publicChatRouter.patch(
  "/threads/:visitorId/typing",
  asyncHandler(async (req, res) => {
    await setTyping(paramStr(req.params.visitorId), Boolean(req.body?.typing));
    ok(res, { ok: true });
  })
);
