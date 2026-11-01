import { test } from "node:test";
import assert from "node:assert/strict";
import type { NextFunction, Request, Response } from "express";
import { asyncHandler } from "./async-handler.js";
import { paramStr } from "./params.js";

test("asyncHandler: a rejected handler reaches next(err) instead of an unhandled rejection", async () => {
  const boom = new Error("boom");
  let received: unknown;
  const handler = asyncHandler(async () => {
    throw boom;
  });
  await new Promise<void>((resolve) => {
    handler({} as Request, {} as Response, ((err?: unknown) => {
      received = err;
      resolve();
    }) as NextFunction);
  });
  assert.equal(received, boom);
});

test("asyncHandler: a handler that resolves does not call next", async () => {
  let calls = 0;
  const handler = asyncHandler(async () => "done");
  handler({} as Request, {} as Response, (() => calls++) as NextFunction);
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(calls, 0);
});

test("paramStr: takes the first value of a repeated param", () => {
  assert.equal(paramStr("abc"), "abc");
  assert.equal(paramStr(["first", "second"]), "first");
});
