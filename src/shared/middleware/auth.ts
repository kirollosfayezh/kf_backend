import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error.js";
import { verifyAdminToken } from "../services/auth.service.js";
import type { AdminTokenPayload } from "../services/auth.service.js";

export interface AuthedRequest extends Request {
  admin?: AdminTokenPayload;
}

export function bearerToken(header: string | undefined): string | null {
  if (!header?.startsWith("Bearer ")) return null;
  return header.slice(7) || null;
}

/** Verifies the admin JWT issued by `POST /api/admin/auth/login`. */
export function requireAdmin(req: AuthedRequest, _res: Response, next: NextFunction): void {
  const token = bearerToken(req.headers.authorization);
  if (!token) throw AppError.unauthorized("Missing bearer token");
  req.admin = verifyAdminToken(token);
  next();
}
