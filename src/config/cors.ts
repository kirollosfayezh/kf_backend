import type { CorsOptions } from "cors";

/**
 * CORS for the site and the dashboard, from the `CORS_ORIGINS` allowlist.
 *
 * An empty allowlist reflects any origin. That is convenient locally (any
 * Vite port works) but is also what production would do if `CORS_ORIGINS`
 * were ever unset on Render — so keep it set there (site, www and dashboard
 * origins). Tightening the fallback needs the dashboard's production origin,
 * which is not recorded in this repo.
 */
export function corsOptions(allowlist: string[]): CorsOptions {
  return {
    origin: allowlist.length ? allowlist : true,
    // `navigator.sendBeacon` issues credentialed requests, so without this the
    // analytics preflight fails and every beacon is silently dropped. Safe
    // because the allowlist is explicit — it is never the `*` wildcard.
    credentials: true,
  };
}
