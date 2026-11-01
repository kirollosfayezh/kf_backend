import express, { type Router } from "express";
import type { AddressInfo } from "node:net";
import type { TestContext } from "node:test";
import { errorHandler, notFoundHandler } from "../shared/middleware/error-handler.js";

/**
 * Mounts one router behind the same JSON parser and error handler as `app.ts`,
 * on an ephemeral port, and returns a `post` helper. Mounting the router alone
 * (rather than importing the whole app) keeps rate limits and unrelated
 * routes out of the unit under test.
 */
export async function serveRouter(t: TestContext, path: string, router: Router) {
  const app = express();
  app.use(express.json());
  app.use(path, router);
  app.use(notFoundHandler);
  app.use(errorHandler);
  const server = app.listen(0);
  await new Promise<void>((resolve) => server.once("listening", resolve));
  t.after(() => new Promise<void>((resolve) => server.close(() => resolve())));
  const base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;

  return {
    async post(route: string, body: unknown) {
      const res = await fetch(`${base}${route}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      return { status: res.status, body: (await res.json()) as { success: boolean; data: unknown; errors: { code: string; message: string }[] } };
    },
  };
}
