import { Schema, model } from "mongoose";
import type { AdminUser } from "../shared/types/index.js";

const adminUserSchema = new Schema<AdminUser>({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  name: String,
  role: { type: String, enum: ["admin"], default: "admin" },
  createdAt: { type: String, required: true },
});

export const AdminUserModel = model<AdminUser>("AdminUser", adminUserSchema, "adminUsers");
