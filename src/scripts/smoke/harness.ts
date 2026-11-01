import type { Socket } from "socket.io-client";
import type mongooseDefault from "mongoose";
import type * as DeployHook from "../../shared/services/deploy-hook.service.js";

/** Shared state and helpers for the smoke test's sections. */

const results = { passed: 0, failed: 0 };

export function check(label: string, condition: boolean, detail?: unknown) {
  if (condition) {
    results.passed++;
    console.log(`  PASS  ${label}`);
  } else {
    results.failed++;
    console.error(`  FAIL  ${label}`, detail ?? "");
  }
}

export function checkResults(): Readonly<typeof results> {
  return results;
}

export function waitForEvent<T>(socket: Socket, event: string, timeoutMs = 4000): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`timeout waiting for "${event}"`)), timeoutMs);
    socket.once(event, (payload: T) => {
      clearTimeout(timer);
      resolve(payload);
    });
  });
}

export type CallResult = { status: number; body: any };

/** Everything a section needs: the running server, an admin session and the fake deploy hook. */
export interface Smoke {
  base: string;
  token: string;
  authHeaders: Record<string, string>;
  call: (path: string, init?: RequestInit) => Promise<CallResult>;
  /** JSON POST; anonymous unless headers are passed. */
  post: (path: string, body: unknown, headers?: Record<string, string>) => Promise<CallResult>;
  /** JSON PATCH as the admin. */
  patch: (path: string, body: unknown) => Promise<CallResult>;
  mongoose: typeof mongooseDefault;
  deployHook: typeof DeployHook;
  /** URLs the fake Vercel hook was POSTed to; cleared in place between checks. */
  rebuilds: string[];
  /** Waits out the hook's debounce and returns how many POSTs it has seen. */
  rebuildRequested: () => Promise<number>;
}

export function makeCall(base: string) {
  return async (path: string, init?: RequestInit): Promise<CallResult> => {
    const res = await fetch(`${base}${path}`, init);
    const body = await res.json().catch(() => null);
    return { status: res.status, body } as CallResult;
  };
}
