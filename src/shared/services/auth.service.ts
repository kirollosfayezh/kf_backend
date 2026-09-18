import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { SignOptions } from "jsonwebtoken";
import { env } from "../../config/env.js";
import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";

export interface AdminTokenPayload {
  sub: string;
  email: string;
  role: "admin";
}

export function signAdminToken(payload: AdminTokenPayload): string {
  return jwt.sign(payload, env.jwtAdminSecret, {
    expiresIn: env.jwtAdminTtl,
  } as SignOptions);
}

export function verifyAdminToken(token: string): AdminTokenPayload {
  try {
    const decoded = jwt.verify(token, env.jwtAdminSecret) as AdminTokenPayload;
    if (decoded.role !== "admin") throw new Error("not an admin token");
    return decoded;
  } catch {
    throw AppError.unauthorized("Invalid or expired token");
  }
}

export async function login(email: string, password: string) {
  if (!email?.trim() || !password) throw AppError.badRequest("Email and password are required");

  const [user] = await repos.adminUsers.list({ where: { email: email.trim().toLowerCase() } });
  if (!user) throw AppError.unauthorized("Invalid credentials");

  const matches = await bcrypt.compare(password, user.passwordHash);
  if (!matches) throw AppError.unauthorized("Invalid credentials");

  const token = signAdminToken({ sub: user.id, email: user.email, role: "admin" });
  return { token, user: { id: user.id, email: user.email, name: user.name ?? null } };
}

export async function getAdminById(id: string) {
  const user = await repos.adminUsers.get(id);
  if (!user) throw AppError.unauthorized("Account no longer exists");
  return { id: user.id, email: user.email, name: user.name ?? null };
}

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}
