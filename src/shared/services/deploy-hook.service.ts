import { env } from "../../config/env.js";

/**
 * Asks Vercel to rebuild the site after something it prerenders has changed.
 *
 * The site bakes blog posts, projects, legal pages, the sitemap, feeds and the
 * SEO overrides into static HTML at build time, so a dashboard edit is invisible
 * to crawlers (and to anything else that reads the HTML rather than the API)
 * until the next deploy. Posting to a Vercel Deploy Hook is that deploy.
 *
 * Editors save in bursts, and a Vercel build takes a minute or two, so this is
 * deliberately lazy: calls are collected for `DEBOUNCE_MS` after the last one
 * and sent as a single POST; a call that arrives while a POST is in flight
 * marks the state dirty and schedules exactly one more once it settles. It
 * never throws — a rebuild that cannot be requested must not fail the write
 * that asked for it — and its timers never keep the process alive.
 */

type FetchLike = (url: string, init?: RequestInit) => Promise<Response>;

const DEBOUNCE_MS = 60_000;
const REQUEST_TIMEOUT_MS = 10_000;

let hookUrl = env.vercelDeployHookUrl;
let fetchImpl: FetchLike = (url, init) => fetch(url, init);
let delayMs = DEBOUNCE_MS;

let timer: NodeJS.Timeout | null = null;
let inFlight = false;
let dirty = false;
let reasons = new Set<string>();

/** Fire-and-forget. `reason` is only for the log line, e.g. "blogPosts abc123". */
export function requestSiteRebuild(reason: string): void {
  if (!hookUrl) return;
  reasons.add(reason);
  if (inFlight) {
    dirty = true;
    return;
  }
  schedule();
}

function schedule(): void {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    timer = null;
    void fire();
  }, delayMs);
  timer.unref();
}

async function fire(): Promise<void> {
  if (inFlight) {
    dirty = true;
    return;
  }
  inFlight = true;
  const batch = [...reasons];
  reasons = new Set();
  try {
    const res = await fetchImpl(hookUrl, { method: "POST", signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
    if (res.ok) console.log(`Site rebuild requested (${batch.join(", ")})`);
    else console.error(`Site rebuild request failed: Vercel answered ${res.status}`);
  } catch (err) {
    console.error("Site rebuild request failed:", err instanceof Error ? err.message : err);
  } finally {
    inFlight = false;
    if (dirty) {
      dirty = false;
      schedule();
    }
  }
}

/** Test seam: swap the URL, the transport and the debounce without touching env. */
export function _configureForTests(options: { fetch?: FetchLike; url?: string; delayMs?: number }): void {
  if (options.fetch) fetchImpl = options.fetch;
  if (options.url !== undefined) hookUrl = options.url;
  if (options.delayMs !== undefined) delayMs = options.delayMs;
}

export function _resetForTests(): void {
  if (timer) clearTimeout(timer);
  timer = null;
  inFlight = false;
  dirty = false;
  reasons = new Set();
  hookUrl = env.vercelDeployHookUrl;
  fetchImpl = (url, init) => fetch(url, init);
  delayMs = DEBOUNCE_MS;
}
