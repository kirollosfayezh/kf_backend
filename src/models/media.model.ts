import { Schema, model } from "mongoose";
import type { MediaItem } from "../shared/types.js";

const mediaSchema = new Schema<MediaItem>({
  url: { type: String, required: true },
  path: { type: String, required: true },
  contentType: { type: String, required: true },
  size: { type: Number, required: true },
  createdAt: { type: String, required: true },
});

export const MediaModel = model<MediaItem>("Media", mediaSchema, "media");
