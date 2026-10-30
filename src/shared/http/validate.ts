import type { z } from "zod";
import { AppError } from "../errors/app-error.js";

/**
 * Parses a request body against a zod schema, or throws a 400 `AppError` with
 * the first issue's message — the same envelope every other validation error
 * in the API uses.
 *
 * Anything that is not a plain object (a missing body, `null`, a JSON array)
 * is read as `{}`. That is what the routes did before schemas existed
 * (`const { a, b } = req.body ?? {}`), so a malformed body still gets the
 * field-level message ("source must be …") rather than a generic type error.
 */
export function parseBody<S extends z.ZodType>(schema: S, body: unknown): z.output<S> {
  const input = body && typeof body === "object" && !Array.isArray(body) ? body : {};
  const result = schema.safeParse(input);
  if (!result.success) throw AppError.badRequest(result.error.issues[0]?.message ?? "Invalid request body");
  return result.data;
}
