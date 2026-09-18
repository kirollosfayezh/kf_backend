import { repos } from "../../repositories/index.js";
import type { SiteSettings } from "../types.js";

export function getSettings() {
  return repos.settings.get();
}

export function updateSettings(input: Partial<SiteSettings>) {
  return repos.settings.update({ ...input, updatedAt: new Date().toISOString() });
}
