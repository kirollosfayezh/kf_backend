import { getCountryForTimezone } from "countries-and-timezones";
import type { TouchInfo } from "./types/index.js";

/**
 * Small, dependency-free readers for what a browser tells us about itself.
 * Only the coarse facts the dashboard shows — browser family, OS family — are
 * extracted; nothing that fingerprints a device.
 */

const BROWSERS: [RegExp, string][] = [
  [/Edg(?:e|A|iOS)?\//, "Edge"],
  [/OPR\/|Opera/, "Opera"],
  [/SamsungBrowser\//, "Samsung Internet"],
  [/YaBrowser\//, "Yandex"],
  [/FBAN|FBAV|FB_IAB/, "Facebook app"],
  [/Instagram/, "Instagram app"],
  [/Firefox\/|FxiOS\//, "Firefox"],
  [/CriOS\/|Chrome\//, "Chrome"],
  [/Safari\//, "Safari"],
];

const SYSTEMS: [RegExp, string][] = [
  [/iPhone|iPad|iPod/, "iOS"],
  [/Android/, "Android"],
  [/Windows NT/, "Windows"],
  [/Mac OS X|Macintosh/, "macOS"],
  [/CrOS/, "ChromeOS"],
  [/Linux/, "Linux"],
];

export function parseUserAgent(ua: string | undefined): { browser?: string; os?: string; bot: boolean } {
  if (!ua) return { bot: false };
  const bot = /bot|crawler|spider|crawling|headless|lighthouse|preview/i.test(ua);
  return {
    browser: BROWSERS.find(([re]) => re.test(ua))?.[1],
    os: SYSTEMS.find(([re]) => re.test(ua))?.[1],
    bot,
  };
}

/** ISO country for an IANA time zone ("Africa/Cairo" → "EG"), when it maps to one. */
export function countryFromTimezone(tz: unknown): string | undefined {
  if (typeof tz !== "string" || !tz || tz.length > 64) return undefined;
  try {
    return getCountryForTimezone(tz)?.id;
  } catch {
    return undefined;
  }
}

function str(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const v = value.trim();
  return v ? v.slice(0, max) : undefined;
}

/**
 * The first-touch / last-touch record from a session beacon. Public input, so
 * every field is optional, trimmed and capped.
 */
export function cleanTouch(raw: unknown, at: string): TouchInfo | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const r = raw as Record<string, unknown>;
  const touch: TouchInfo = {
    referrer: str(r.referrer, 200),
    landingPath: str(r.landingPath, 200),
    utmSource: str(r.utmSource, 100),
    utmMedium: str(r.utmMedium, 100),
    utmCampaign: str(r.utmCampaign, 150),
    utmTerm: str(r.utmTerm, 150),
    utmContent: str(r.utmContent, 150),
    gclid: str(r.gclid, 200),
    fbclid: str(r.fbclid, 200),
    at,
  };
  for (const k of Object.keys(touch) as (keyof TouchInfo)[]) if (touch[k] === undefined) delete touch[k];
  return touch;
}

/**
 * A one-word channel for a touch, matching the dashboard's traffic groups:
 * paid ad, campaign, search, social, referral or direct.
 */
export function channelOf(touch: TouchInfo | undefined): string {
  if (!touch) return "direct";
  if (touch.gclid || touch.fbclid || /cpc|ppc|paid/i.test(touch.utmMedium ?? "")) return "paid";
  if (touch.utmSource || touch.utmCampaign) return "campaign";
  const host = (touch.referrer ?? "").replace(/^https?:\/\//, "");
  if (!host) return "direct";
  if (/google\.|bing\.|duckduckgo\.|yahoo\.|yandex\.|baidu\./i.test(host)) return "search";
  if (/facebook\.|fb\.|instagram\.|t\.co|twitter\.|x\.com|linkedin\.|lnkd\.|tiktok\.|youtube\.|whatsapp\./i.test(host)) return "social";
  return "referral";
}
