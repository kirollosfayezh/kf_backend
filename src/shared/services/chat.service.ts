import { repos } from "../../repositories/index.js";
import { emitToAdmins, emitToThread } from "../../realtime/io.js";
import { randomUUID } from "node:crypto";
import { AppError } from "../errors/app-error.js";
import { normalizePhone } from "../phone.js";
import type { ChatSender } from "../types.js";

/** Browser-minted ids are UUIDs or a short fallback — never anything this long. */
function assertVisitorId(visitorId: unknown): string {
  if (typeof visitorId !== "string" || !visitorId.trim() || visitorId.length > 100) {
    throw AppError.badRequest("A visitor id is required.");
  }
  return visitorId;
}

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

export function getThread(visitorId: string) {
  return repos.chat.getThread(assertVisitorId(visitorId));
}

/**
 * Starts (or resumes) a chat from the widget's phone step.
 *
 * The phone is validated for its country and stored in E.164, and it — not the
 * browser — is what identifies a returning visitor: if that number already has
 * a thread, the visitor is moved back into it with its whole history, even on
 * a new phone or after clearing their browser. The response carries the
 * thread's `visitorId`, which the widget adopts as its own.
 *
 * Two edge cases decide what happens to the thread this browser already had:
 * - it has messages but no phone yet (a chat from before phones were required):
 *   those messages are folded into the phone's thread, so nothing is lost;
 * - it belongs to a *different* phone (a shared computer): it is left alone
 *   and the new number gets a thread of its own.
 */
export async function startSession(input: {
  visitorId: unknown;
  phone: unknown;
  country?: unknown;
  name?: unknown;
}) {
  const visitorId = assertVisitorId(input.visitorId);
  const phone = normalizePhone(input.phone, input.country);
  if (!phone) {
    throw new AppError(400, "INVALID_PHONE", "Please enter a valid phone number, including the country code.");
  }
  const name = typeof input.name === "string" ? input.name.trim().slice(0, 80) : "";

  const [current, existing] = await Promise.all([
    repos.chat.getThread(visitorId),
    repos.chat.findLatestByPhone(phone.e164),
  ]);

  let targetId: string;
  let mergedFrom: string | undefined;
  if (existing) {
    targetId = existing.visitorId;
    if (current && current.visitorId !== existing.visitorId && !current.phone) {
      await repos.chat.mergeThreads(current.visitorId, existing.visitorId);
      mergedFrom = current.visitorId;
    }
  } else if (current?.phone && current.phone !== phone.e164) {
    targetId = randomUUID();
  } else {
    targetId = visitorId;
  }

  const thread = await repos.chat.setPhone(targetId, phone.e164, phone.country, name || undefined);
  const messages = await repos.chat.listMessages(targetId);

  emitToAdmins("chat:thread-updated", { thread, mergedFrom });

  return {
    thread,
    messages,
    /** True when an earlier conversation was found under this number. */
    resumed: !!existing,
    phone: { e164: phone.e164, country: phone.country, international: phone.international },
  };
}

export async function sendMessage(visitorId: string, from: ChatSender, text: string) {
  if (!text?.trim()) throw AppError.badRequest("Message text is required");

  // A visitor must have given a valid phone first — it is how the team follows
  // up, and how the visitor gets this conversation back later.
  if (from === "visitor") {
    const thread = await repos.chat.getThread(visitorId);
    if (!thread?.phone) {
      throw new AppError(400, "PHONE_REQUIRED", "Please add your phone number to start the chat.");
    }
  }

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
