import { check } from "./harness.js";
import type { CallResult } from "./harness.js";

export const adminHeaders = (token: string) => ({
  "content-type": "application/json",
  authorization: `Bearer ${token}`,
});

/** Health check and admin login. Returns the admin token the other sections use. */
export async function authSection(call: (path: string, init?: RequestInit) => Promise<CallResult>): Promise<string> {
  console.log("\nHealth + auth");
  const health = await call("/api/healthz");
  check("GET /api/healthz", health.status === 200 && health.body?.ok === true, health);

  const badLogin = await call("/api/admin/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "smoke@kftech.solutions", password: "wrong" }),
  });
  check("login rejects a bad password", badLogin.status === 401, badLogin);

  const login = await call("/api/admin/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "smoke@kftech.solutions", password: "SmokeTest123!" }),
  });
  const token: string = login.body?.data?.token;
  check("login returns a token", login.status === 200 && Boolean(token), login);

  const authHeaders = adminHeaders(token);

  const me = await call("/api/admin/auth/me", { headers: authHeaders });
  check("GET /api/admin/auth/me", me.status === 200 && me.body?.data?.email === "smoke@kftech.solutions", me);

  const noAuth = await call("/api/admin/leads");
  check("admin routes reject anonymous requests", noAuth.status === 401, noAuth);

  return token;
}
