import { Schema, model } from "mongoose";
import type { Demo } from "../shared/types/index.js";

const demoSchema = new Schema<Demo>(
  {
    // One page per slug: a re-upload replaces it rather than adding a second row.
    slug: { type: String, required: true, unique: true },
    html: { type: String, required: true },
    size: { type: Number, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false }
);

export const DemoModel = model<Demo>("Demo", demoSchema, "demos");
