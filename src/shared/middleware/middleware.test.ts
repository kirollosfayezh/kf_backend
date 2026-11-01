import { test } from "node:test";
import assert from "node:assert/strict";
import type { NextFunction, Request, Response } from "express";
import { MulterError } from "multer";
import { AppError } from "../errors/app-error.js";
import { signAdminToken } from "../services/auth.service.js";
import { bearerToken, requireAdmin, type AuthedRequest } from "./auth.js";
import { errorHandler, notFoundHandler } from "./error-handler.js";

/** The slice of Express's Response the handlers use, recording what they sent. */
function fakeRes() {
  const sent: { status?: number; body?: unknown } = {};
  const res = {
    status(code: number) {
      sent.status = code;
      return res;
    },
    json(body: unknown) {
      sent.body = body;
      return res;
    },
  };
  return { res: res as unknown as Response, sent };
}

const noNext: NextFunction = () => assert.fail("error handlers must not call next");

// --- bearerToken / requireAdmin ---

test("bearerToken: reads only a well-formed 'Bearer <token>' header", () => {
  assert.equal(bearerToken("Bearer abc.def.ghi"), "abc.def.ghi");
  assert.equal(bearerToken(undefined), null);
  assert.equal(bearerToken(""), null);
  assert.equal(bearerToken("Bearer "), null);
  assert.equal(bearerToken("bearer abc"), null, "scheme is case-sensitive, as before");
  assert.equal(bearerToken("Basic dXNlcjpwYXNz"), null);
  assert.equal(bearerToken("abc.def.ghi"), null);
});

test("requireAdmin: no header is a 401 and next() is not called", () => {
  const req = { headers: {} } as AuthedRequest;
  let called = false;
  assert.throws(
    () => requireAdmin(req, {} as Response, () => (called = true)),
    (err: unknown) => err instanceof AppError && err.statusCode === 401 && err.message === "Missing bearer token"
  );
  assert.equal(called, false);
});

test("requireAdmin: a bad token is a 401", () => {
  const req = { headers: { authorization: "Bearer not-a-jwt" } } as AuthedRequest;
  assert.throws(() => requireAdmin(req, {} as Response, () => {}), (err: unknown) => err instanceof AppError && err.statusCode === 401);
});

test("requireAdmin: a valid token attaches the admin and continues", () => {
  const token = signAdminToken({ sub: "admin-1", email: "admin@example.com", role: "admin" });
  const req = { headers: { authorization: `Bearer ${token}` } } as AuthedRequest;
  let called = 0;
  requireAdmin(req, {} as Response, () => called++);
  assert.equal(called, 1);
  assert.equal(req.admin?.sub, "admin-1");
  assert.equal(req.admin?.email, "admin@example.com");
});

// --- errorHandler ---

test("errorHandler: an AppError keeps its status, code and message", () => {
  const { res, sent } = fakeRes();
  errorHandler(new AppError(409, "SLOT_TAKEN", "That time was just booked."), {} as Request, res, noNext);
  assert.equal(sent.status, 409);
  assert.deepEqual(sent.body, {
    success: false,
    data: null,
    errors: [{ code: "SLOT_TAKEN", message: "That time was just booked." }],
    message: "That time was just booked.",
  });
});

test("errorHandler: an oversized upload is a 413 with a readable message", () => {
  const { res, sent } = fakeRes();
  errorHandler(new MulterError("LIMIT_FILE_SIZE", "file"), {} as Request, res, noNext);
  assert.equal(sent.status, 413);
  assert.equal((sent.body as { errors: { code: string }[] }).errors[0].code, "FILE_TOO_LARGE");
});

test("errorHandler: any other upload rejection is a 400", () => {
  const { res, sent } = fakeRes();
  errorHandler(new MulterError("LIMIT_UNEXPECTED_FILE", "other"), {} as Request, res, noNext);
  assert.equal(sent.status, 400);
  assert.equal((sent.body as { errors: { code: string }[] }).errors[0].code, "UPLOAD_REJECTED");
});

test("errorHandler: an unexpected error is a generic 500 that leaks nothing", (t) => {
  const logged = t.mock.method(console, "error", () => {});
  const { res, sent } = fakeRes();
  errorHandler(new Error("connection string mongodb://user:pass@host failed"), {} as Request, res, noNext);
  assert.equal(sent.status, 500);
  assert.equal(JSON.stringify(sent.body).includes("mongodb://"), false);
  assert.equal((sent.body as { message: string }).message, "Something went wrong");
  assert.equal(logged.mock.callCount(), 1, "the real error goes to the server log");
});

test("notFoundHandler: answers 404 in the standard envelope", () => {
  const { res, sent } = fakeRes();
  notFoundHandler({} as Request, res);
  assert.equal(sent.status, 404);
  assert.deepEqual((sent.body as { errors: unknown[] }).errors, [{ code: "NOT_FOUND", message: "Route not found" }]);
});
