import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error.js";
import { fail } from "../http/api-response.js";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof AppError) {
    fail(res, err.statusCode, err.code, err.message);
    return;
  }
  console.error(err);
  fail(res, 500, "INTERNAL_ERROR", "Something went wrong");
}

export function notFoundHandler(_req: Request, res: Response): void {
  fail(res, 404, "NOT_FOUND", "Route not found");
}
