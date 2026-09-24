import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { isHHMM, isValidTimeZone } from "../slots.js";
import { formatTelegram, telegramSend } from "./notify.service.js";
import type { CrmSettings, TimeWindow } from "../types.js";

/**
 * The CRM settings as the dashboard sees them: the Telegram bot token is never
 * sent back, only whether one is saved and its last four characters.
 */
export async function getCrmSettings() {
  const s = await repos.crmSettings.get();
  const { botToken, ...telegram } = s.telegram ?? { enabled: false, events: {} };
  return {
    ...s,
    telegram: { ...telegram, hasBotToken: !!botToken, botTokenHint: botToken ? botToken.slice(-4) : undefined },
  };
}

const num = (v: unknown, min: number, max: number, field: string) => {
  const n = Number(v);
  if (!Number.isFinite(n) || n < min || n > max) throw AppError.badRequest(`${field} must be between ${min} and ${max}.`);
  return n;
};
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : undefined);

export async function updateCrmSettings(input: Record<string, unknown>) {
  const set: Record<string, unknown> = {};

  const tg = input.telegram as Record<string, unknown> | undefined;
  if (tg && typeof tg === "object") {
    if ("enabled" in tg) set["telegram.enabled"] = Boolean(tg.enabled);
    if ("chatId" in tg) set["telegram.chatId"] = str(tg.chatId, 40) ?? "";
    // A blank token field means "keep the saved one"; `null` removes it.
    if (tg.botToken === null) set["telegram.botToken"] = "";
    else if (typeof tg.botToken === "string" && tg.botToken.trim()) {
      if (!/^\d+:[\w-]{20,}$/.test(tg.botToken.trim())) throw AppError.badRequest("That doesn't look like a Telegram bot token (123456:ABC…).");
      set["telegram.botToken"] = tg.botToken.trim();
    }
    if (tg.events && typeof tg.events === "object") {
      set["telegram.events"] = Object.fromEntries(Object.entries(tg.events).map(([k, v]) => [k.slice(0, 30), Boolean(v)]));
    }
  }

  const bk = input.booking as Record<string, unknown> | undefined;
  if (bk && typeof bk === "object") {
    if ("enabled" in bk) set["booking.enabled"] = Boolean(bk.enabled);
    if ("slotMinutes" in bk) set["booking.slotMinutes"] = num(bk.slotMinutes, 10, 240, "Slot length");
    if ("bufferMinutes" in bk) set["booking.bufferMinutes"] = num(bk.bufferMinutes, 0, 120, "Buffer");
    if ("minNoticeHours" in bk) set["booking.minNoticeHours"] = num(bk.minNoticeHours, 0, 336, "Minimum notice");
    if ("daysAhead" in bk) set["booking.daysAhead"] = num(bk.daysAhead, 1, 90, "Days ahead");
    if ("timezone" in bk) {
      if (!isValidTimeZone(bk.timezone)) throw AppError.badRequest("Unknown time zone.");
      set["booking.timezone"] = bk.timezone;
    }
    if ("blockedDates" in bk) {
      if (!Array.isArray(bk.blockedDates)) throw AppError.badRequest("blockedDates must be a list");
      set["booking.blockedDates"] = [...new Set(bk.blockedDates.filter((d): d is string => typeof d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d)))].sort();
    }
    if ("weekly" in bk) {
      if (!Array.isArray(bk.weekly) || bk.weekly.length !== 7) throw AppError.badRequest("weekly must list 7 days");
      set["booking.weekly"] = bk.weekly.map((day: { windows?: unknown }, i) => {
        if (!day || !Array.isArray(day.windows)) throw AppError.badRequest(`Day ${i} needs a list of opening windows`);
        return {
          windows: (day.windows as TimeWindow[]).slice(0, 6).map((w) => {
            if (!isHHMM(w?.start) || !isHHMM(w?.end) || w.start >= w.end) {
              throw AppError.badRequest("Each opening window needs a start before its end (HH:mm).");
            }
            return { start: w.start, end: w.end };
          }),
        };
      });
    }
  }

  const qt = input.quotes as Record<string, unknown> | undefined;
  if (qt && typeof qt === "object") {
    for (const k of ["companyName", "address", "email", "phone", "taxId", "footer"] as const) {
      if (k in qt) set[`quotes.${k}`] = str(qt[k], k === "footer" || k === "address" ? 600 : 120) ?? "";
    }
    if ("defaultCurrency" in qt) {
      if (typeof qt.defaultCurrency !== "string" || !/^[A-Z]{3}$/.test(qt.defaultCurrency)) throw AppError.badRequest("Currency must be a 3-letter code.");
      set["quotes.defaultCurrency"] = qt.defaultCurrency;
    }
    if ("defaultTaxRate" in qt) set["quotes.defaultTaxRate"] = num(qt.defaultTaxRate, 0, 100, "Tax rate");
    if ("defaultValidDays" in qt) set["quotes.defaultValidDays"] = num(qt.defaultValidDays, 1, 365, "Validity");
  }

  if (Object.keys(set).length) await repos.crmSettings.update(set);
  return getCrmSettings();
}

/** "Send test" on the Notifications screen: uses the saved token, reports Telegram's own error. */
export async function testTelegram(): Promise<{ ok: true }> {
  const { telegram }: CrmSettings = await repos.crmSettings.get();
  if (!telegram?.botToken || !telegram.chatId) throw AppError.badRequest("Save a bot token and chat ID first.");
  try {
    await telegramSend(telegram.botToken, telegram.chatId, formatTelegram("test", "KF Tech alerts are working", "You'll get new leads, chats, bookings and quote replies here."));
  } catch (err) {
    throw AppError.badRequest(`Telegram said: ${err instanceof Error ? err.message : "unknown error"}`);
  }
  return { ok: true };
}
