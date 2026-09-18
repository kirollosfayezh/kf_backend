import { repos } from "../../repositories/index.js";
import { emitToAdmins, emitToThread } from "../../realtime/io.js";
import { AppError } from "../errors/app-error.js";
import type { ChatSender } from "../types.js";

export function listThreads() {
  return repos.chat.listThreads();
}

export function listMessages(visitorId: string) {
  return repos.chat.listMessages(visitorId);
}

export function openThread(visitorId: string, meta?: { name?: string; contact?: string }) {
  if (meta && (meta.name || meta.contact)) {
    return repos.chat.setVisitorMeta(visitorId, meta);
  }
  return repos.chat.getOrCreateThread(visitorId);
}

export async function sendMessage(visitorId: string, from: ChatSender, text: string) {
  if (!text?.trim()) throw AppError.badRequest("Message text is required");

  const message = await repos.chat.addMessage(visitorId, from, text.trim());
  const thread = await repos.chat.getOrCreateThread(visitorId);

  emitToThread(visitorId, "chat:message", message);
  emitToAdmins("chat:thread-updated", { thread, message });

  return message;
}

/** Visitor is typing — only the dashboard needs to know. */
export async function setTyping(visitorId: string, typing: boolean) {
  await repos.chat.setTyping(visitorId, typing);
  emitToAdmins("chat:typing", { visitorId, typing });
}

/** Agent is typing — only that visitor needs to know. */
export function setAgentTyping(visitorId: string, typing: boolean) {
  emitToThread(visitorId, "chat:agent-typing", { visitorId, typing });
}
