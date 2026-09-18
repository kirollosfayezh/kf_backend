import type { Response } from "express";

export interface ApiErrorItem {
  code: string;
  message: string;
}

export interface ApiEnvelope<T> {
  success: boolean;
  data: T | null;
  errors: ApiErrorItem[];
  message: string | null;
}

export function ok<T>(res: Response, data: T, statusCode = 200): void {
  const body: ApiEnvelope<T> = { success: true, data, errors: [], message: null };
  res.status(statusCode).json(body);
}

export function fail(res: Response, statusCode: number, code: string, message: string): void {
  const body: ApiEnvelope<null> = {
    success: false,
    data: null,
    errors: [{ code, message }],
    message,
  };
  res.status(statusCode).json(body);
}
