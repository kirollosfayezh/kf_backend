import type { NextFunction, Request, Response } from "express";
import { MulterError } from "multer";
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

  /**
   * Multer rejects an oversized upload by throwing its own error type, which is
   * not an `AppError` — so it used to fall through to a generic 500 "Something
   * went wrong" and the dashboard could not tell the user their file was simply
   * too big. These are client mistakes, so they answer 4xx with a usable message.
   */
  if (err instanceof MulterError) {
    const tooBig = err.code === "LIMIT_FILE_SIZE";
    fail(
      res,
      tooBig ? 413 : 400,
      tooBig ? "FILE_TOO_LARGE" : "UPLOAD_REJECTED",
      tooBig ? "That file is larger than the 10 MB limit." : `Upload rejected: ${err.message}`
    );
    return;
  }

  console.error(err);
  fail(res, 500, "INTERNAL_ERROR", "Something went wrong");
}

export function notFoundHandler(_req: Request, res: Response): void {
  fail(res, 404, "NOT_FOUND", "Route not found");
}
