import { test, type TestContext } from "node:test";
import assert from "node:assert/strict";
import express from "express";
import cors from "cors";
import type { AddressInfo } from "node:net";
import { allowedOrigins, corsOptions, PRODUCTION_ORIGINS } from "./cors.js";

/** Sends a beacon-style preflight from `origin` and returns the CORS headers. */
async function preflight(t: TestContext, allowlist: string[], origin: string) {
  const app = express();
  app.use(cors(corsOptions(allowlist)));
  app.post("/api/analytics/events", (_req, res) => res.status(202).end());
  const server = app.listen(0);
  await new Promise<void>((resolve) => server.once("listening", resolve));
  t.after(() => new Promise<void>((resolve) => server.close(() => resolve())));
  const res = await fetch(`http://127.0.0.1:${(server.address() as AddressInfo).port}/api/analytics/events`, {
    method: "OPTIONS",
    headers: { origin, "access-control-request-method": "POST", "access-control-request-headers": "content-type" },
  });
  return {
    allowOrigin: res.headers.get("access-control-allow-origin"),
    allowCredentials: res.headers.get("access-control-allow-credentials"),
  };
}

const ALLOWLIST = ["https://kftechsolutions.dev", "https://www.kftechsolutions.dev"];

test("cors: a listed origin is echoed back with credentials (sendBeacon needs both)", async (t) => {
  const h = await preflight(t, ALLOWLIST, "https://kftechsolutions.dev");
  assert.equal(h.allowOrigin, "https://kftechsolutions.dev");
  assert.equal(h.allowCredentials, "true");
});

test("cors: an unlisted origin gets no allow-origin header", async (t) => {
  const h = await preflight(t, ALLOWLIST, "https://evil.example");
  assert.equal(h.allowOrigin, null);
});

test("cors: matching is exact — no suffix or scheme tricks", async (t) => {
  for (const origin of ["https://kftechsolutions.dev.evil.example", "http://kftechsolutions.dev", "https://kftechsolutions.dev:8443"]) {
    assert.equal((await preflight(t, ALLOWLIST, origin)).allowOrigin, null, origin);
  }
});

test("cors: never answers with the credentialed `*` wildcard", async (t) => {
  const h = await preflight(t, [], "http://localhost:5173");
  assert.notEqual(h.allowOrigin, "*");
});

test("cors: an empty allowlist reflects the caller's origin (local development)", async (t) => {
  const h = await preflight(t, [], "http://localhost:5174");
  assert.equal(h.allowOrigin, "http://localhost:5174");
  assert.equal(h.allowCredentials, "true");
});

test("cors: production without CORS_ORIGINS falls back to the site and dashboard, not to any origin", async (t) => {
  assert.deepEqual(allowedOrigins([], true), PRODUCTION_ORIGINS);
  for (const origin of PRODUCTION_ORIGINS) {
    const res = await fetchPreflight(t, origin);
    assert.equal(res, origin, origin);
  }
  assert.equal(await fetchPreflight(t, "https://evil.example"), null);
});

test("cors: an explicit CORS_ORIGINS still wins in production", () => {
  assert.deepEqual(allowedOrigins(["https://staging.example"], true), ["https://staging.example"]);
});

/** Preflight against the production fallback (empty allowlist, isProduction=true). */
async function fetchPreflight(t: TestContext, origin: string) {
  const app = express();
  app.use(cors(corsOptions([], true)));
  app.post("/x", (_req, res) => res.status(202).end());
  const server = app.listen(0);
  await new Promise<void>((resolve) => server.once("listening", resolve));
  t.after(() => new Promise<void>((resolve) => server.close(() => resolve())));
  const res = await fetch(`http://127.0.0.1:${(server.address() as AddressInfo).port}/x`, {
    method: "OPTIONS",
    headers: { origin, "access-control-request-method": "POST" },
  });
  return res.headers.get("access-control-allow-origin");
}
