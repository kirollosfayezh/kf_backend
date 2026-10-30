import type { CorsOptions } from "cors";

/** The live site (apex + www) and the dashboard. Used when production has no `CORS_ORIGINS`. */
export const PRODUCTION_ORIGINS = [
  "https://kftechsolutions.dev",
  "https://www.kftechsolutions.dev",
  "https://kf-dashboard-iota.vercel.app",
];

/**
 * The origins allowed to call the API (and open the Socket.io channel).
 *
 * `CORS_ORIGINS` wins when set. Without it, production falls back to the known
 * site and dashboard origins — it fails closed rather than reflecting any
 * origin — while development reflects the caller so any Vite port works.
 */
export function allowedOrigins(allowlist: string[], isProduction: boolean): string[] | true {
  if (allowlist.length) return allowlist;
  return isProduction ? PRODUCTION_ORIGINS : true;
}

export function corsOptions(allowlist: string[], isProduction = false): CorsOptions {
  return {
    origin: allowedOrigins(allowlist, isProduction),
    // `navigator.sendBeacon` issues credentialed requests, so without this the
    // analytics preflight fails and every beacon is silently dropped. Safe
    // because the allowlist is explicit — it is never the `*` wildcard.
    credentials: true,
  };
}
