import { test, type TestContext } from "node:test";
import assert from "node:assert/strict";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { env } from "../../config/env.js";
import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { getAdminById, hashPassword, login, signAdminToken, verifyAdminToken } from "./auth.service.js";

const ADMIN = { sub: "admin-1", email: "admin@example.com", role: "admin" as const };

/** Asserts `fn` throws an AppError with this status (and, optionally, message). */
async function rejectsWith(fn: () => unknown, status: number, message?: string) {
  await assert.rejects(
    async () => fn(),
    (err: unknown) => err instanceof AppError && err.statusCode === status && (message === undefined || err.message === message)
  );
}

// --- Tokens ---

test("token: a signed admin token verifies back to its payload", () => {
  const decoded = verifyAdminToken(signAdminToken(ADMIN));
  assert.equal(decoded.sub, ADMIN.sub);
  assert.equal(decoded.email, ADMIN.email);
  assert.equal(decoded.role, "admin");
  assert.ok(typeof (decoded as { exp?: number }).exp === "number", "tokens always expire");
});

test("token: one signed with another secret is a 401", async () => {
  const forged = jwt.sign(ADMIN, `${env.jwtAdminSecret}-but-not-quite`);
  await rejectsWith(() => verifyAdminToken(forged), 401, "Invalid or expired token");
});

test("token: an expired token is a 401", async () => {
  const expired = jwt.sign({ ...ADMIN, exp: Math.floor(Date.now() / 1000) - 60 }, env.jwtAdminSecret);
  await rejectsWith(() => verifyAdminToken(expired), 401);
});

test("token: a validly signed token without the admin role is a 401", async () => {
  const visitor = jwt.sign({ sub: "v", email: "v@example.com", role: "visitor" }, env.jwtAdminSecret);
  await rejectsWith(() => verifyAdminToken(visitor), 401);
});

test("token: a tampered payload is a 401", async () => {
  const [header, , signature] = signAdminToken(ADMIN).split(".");
  const payload = Buffer.from(JSON.stringify({ ...ADMIN, sub: "someone-else" })).toString("base64url");
  await rejectsWith(() => verifyAdminToken(`${header}.${payload}.${signature}`), 401);
});

test("token: 'alg: none' is refused", async () => {
  const unsigned = jwt.sign(ADMIN, "", { algorithm: "none" });
  await rejectsWith(() => verifyAdminToken(unsigned), 401);
});

// --- Login ---

function withAdminUser(t: TestContext, user: Record<string, unknown> | null) {
  const queries: unknown[] = [];
  t.mock.method(repos.adminUsers, "list", async (options: unknown) => {
    queries.push(options);
    return user ? [user] : [];
  });
  return queries;
}

test("login: email and password are both required", async (t) => {
  withAdminUser(t, null);
  for (const [email, password] of [["", "x"], ["   ", "x"], ["a@b.co", ""], [undefined, undefined]]) {
    await rejectsWith(() => login(email as string, password as string), 400, "Email and password are required");
  }
});

test("login: the email is matched trimmed and lower-cased", async (t) => {
  const queries = withAdminUser(t, null);
  await rejectsWith(() => login("  Admin@Example.COM ", "pw"), 401);
  assert.deepEqual(queries, [{ where: { email: "admin@example.com" } }]);
});

test("login: an unknown email and a wrong password get the same 401", async (t) => {
  const passwordHash = await bcrypt.hash("right-password", 4);
  withAdminUser(t, null);
  await rejectsWith(() => login("nobody@example.com", "right-password"), 401, "Invalid credentials");
  t.mock.restoreAll();
  withAdminUser(t, { id: "admin-1", email: "admin@example.com", passwordHash });
  await rejectsWith(() => login("admin@example.com", "wrong-password"), 401, "Invalid credentials");
});

test("login: the right password returns a working token and no password hash", async (t) => {
  const passwordHash = await bcrypt.hash("right-password", 4);
  withAdminUser(t, { id: "admin-1", email: "admin@example.com", name: "Kiro", passwordHash });
  const result = await login("admin@example.com", "right-password");
  assert.deepEqual(result.user, { id: "admin-1", email: "admin@example.com", name: "Kiro" });
  assert.equal(JSON.stringify(result).includes(passwordHash), false);
  assert.equal(verifyAdminToken(result.token).sub, "admin-1");
});

test("getAdminById: a deleted account can no longer use its token", async (t) => {
  t.mock.method(repos.adminUsers, "get", async () => null);
  await rejectsWith(() => getAdminById("gone"), 401, "Account no longer exists");
});

test("hashPassword: produces a salted bcrypt hash that verifies", async () => {
  const [a, b] = await Promise.all([hashPassword("s3cret!"), hashPassword("s3cret!")]);
  assert.match(a, /^\$2[aby]\$10\$/);
  assert.notEqual(a, b, "salted");
  assert.equal(await bcrypt.compare("s3cret!", a), true);
  assert.equal(await bcrypt.compare("s3cret?", a), false);
});
