import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { requestSiteRebuild } from "./deploy-hook.service.js";
import type { SiteSettings, SocialLinks } from "../types/index.js";

export function getSettings() {
  return repos.settings.get();
}

/** X (Twitter) usernames: 1–15 word characters. */
const X_HANDLE = /^[A-Za-z0-9_]{1,15}$/;

/**
 * Stores the X profile as "@handle" whatever form it was typed in — bare,
 * with the "@", or pasted as a profile URL — because the site uses it both as
 * a link and as the `twitter:site` tag, which wants the "@" form. Blank clears
 * it; anything that is not a valid username is rejected rather than saved as
 * a link that goes nowhere.
 */
export function normalizeXHandle(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return "";
  let handle = value.trim();
  const url = /^(?:https?:\/\/)?(?:www\.)?(?:x|twitter)\.com\/@?([^/?#]+)/i.exec(handle);
  if (url) handle = url[1];
  handle = handle.replace(/^@/, "");
  if (!X_HANDLE.test(handle)) throw AppError.badRequest("The X handle must be 1–15 letters, digits or underscores.");
  return `@${handle}`;
}

export async function updateSettings(input: Partial<SiteSettings>) {
  const patch: Partial<SiteSettings> = { ...input };
  if (input.social && typeof input.social === "object") {
    const social: SocialLinks = { ...input.social };
    if ("x" in social) social.x = normalizeXHandle(social.x);
    patch.social = social;
  }
  const saved = await repos.settings.update({ ...patch, updatedAt: new Date().toISOString() });
  // Languages, contact details and social links are baked into the
  // prerendered pages and the sitemap.
  requestSiteRebuild("settings");
  return saved;
}
