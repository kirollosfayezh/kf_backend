import { repos } from "../../repositories/index.js";
import { emitToAdmins } from "../../realtime/io.js";
import { env } from "../../config/env.js";
import type { AdminNotification, NotificationType } from "../types.js";

/**
 * One call for "tell the team": saved to the dashboard's alert feed, pushed
 * live to every open dashboard (bell + browser notification), and sent to
 * Telegram when a bot is configured and that event is switched on.
 *
 * Never throws. An alert that cannot be delivered must not fail the lead,
 * chat or booking that caused it.
 */
export async function notify(input: {
  type: NotificationType;
  title: string;
  body?: string;
  link?: string;
  contactId?: string;
}): Promise<void> {
  try {
    const n: AdminNotification = { ...input, createdAt: new Date().toISOString() };
    const saved = await repos.notifications.create(n);
    emitToAdmins("admin:notification", saved);
    await sendTelegram(input.type, input.title, input.body, input.link).catch((err) =>
      console.error("Telegram alert failed:", err instanceof Error ? err.message : err)
    );
  } catch (err) {
    console.error("notify failed", err);
  }
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const ICON: Record<NotificationType, string> = {
  lead: "📩",
  chat: "💬",
  booking: "📅",
  quote_viewed: "👀",
  quote_accepted: "✅",
  quote_declined: "❌",
  followup_due: "⏰",
  call_soon: "📞",
  test: "🔔",
};

async function sendTelegram(type: NotificationType, title: string, body?: string, link?: string): Promise<void> {
  const { telegram } = await repos.crmSettings.get();
  if (!telegram?.enabled || !telegram.botToken || !telegram.chatId) return;
  if (type !== "test" && telegram.events?.[type] === false) return;
  await telegramSend(telegram.botToken, telegram.chatId, formatTelegram(type, title, body, link));
}

export function formatTelegram(type: NotificationType, title: string, body?: string, link?: string): string {
  const url = link && env.dashboardUrl ? `${env.dashboardUrl}${link}` : undefined;
  return [
    `${ICON[type] ?? "🔔"} <b>${esc(title)}</b>`,
    body ? esc(body.length > 700 ? `${body.slice(0, 700)}…` : body) : "",
    url ? `<a href="${esc(url)}">Open in dashboard</a>` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

/** Bot API sendMessage. Throws with Telegram's own description on failure, for the "Send test" button. */
export async function telegramSend(token: string, chatId: string, html: string): Promise<void> {
  const res = await fetch(`https://api.telegram.org/bot${encodeURIComponent(token)}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: html, parse_mode: "HTML", disable_web_page_preview: true }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as { description?: string } | null;
    throw new Error(data?.description || `Telegram answered ${res.status}`);
  }
}

export function listNotifications(query: Record<string, unknown>) {
  const limit = Math.min(Math.max(Number(query.limit) || 30, 1), 200);
  return repos.notifications.list(limit, query.unread === "true");
}

export async function notificationCount() {
  return { unread: await repos.notifications.unreadCount() };
}

export async function markNotificationsRead(ids: unknown) {
  if (ids === "all") await repos.notifications.markRead("all");
  else if (Array.isArray(ids)) await repos.notifications.markRead(ids.filter((x): x is string => typeof x === "string").slice(0, 200));
  return notificationCount();
}
