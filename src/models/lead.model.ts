import { Schema, model } from "mongoose";
import type { Lead } from "../shared/types.js";

const leadSchema = new Schema<Lead>({
  source: { type: String, enum: ["contact", "campaign"], required: true },
  status: { type: String, enum: ["new", "contacted", "won", "lost"], default: "new" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  company: String,
  projectType: String,
  budget: String,
  message: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

export const LeadModel = model<Lead>("Lead", leadSchema);
