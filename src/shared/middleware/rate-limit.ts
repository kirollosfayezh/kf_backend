import rateLimit from "express-rate-limit";
import type { Request, Response } from "express";
import { fail } from "../http/api-response.js";

/**
 * The public endpoints take unauthenticated writes, so they need a ceiling:
 * a contact form and a chat widget are the two things bots find first.
 * Limits are per IP and per window, counting only writes.
 *
 * Note these counters live in memory, so they are per Render instance. That is
 * fine at one instance; if the service is ever scaled out, move the store to
 * Redis rather than raising the limits.
 */

function limitReached(_req: Request, res: Response): void {
  fail(res, 429, "RATE_LIMITED", "Too many requests. Please wait a moment and try again.");
}

/** Lead submissions: generous enough for a real person retrying, useless for a bot. */
export const leadsRateLimit = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: limitReached,
});

/** Chat messages: a real conversation is chatty, so this is much higher. */
export const chatRateLimit = rateLimit({
  windowMs: 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
  handler: limitReached,
});

/** Quote links and bookings: a person clicks a few times; a script guessing tokens or slots does not get far. */
export const salesRateLimit = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 30,
  standardHeaders: true,
  legacyHeaders: false,
  handler: limitReached,
});

/** Login attempts, to blunt credential stuffing against the admin account. */
export const loginRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  handler: limitReached,
});

/** Analytics beacons: batched, so this is per batch rather than per event. */
export const analyticsRateLimit = rateLimit({
  windowMs: 60 * 1000,
  limit: 60,
  standardHeaders: true,
  legacyHeaders: false,
  handler: limitReached,
});
