import { Router } from "express";
import multer from "multer";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import { AppError } from "../../shared/errors/app-error.js";
import { deleteMedia, listMedia, uploadMedia } from "../../shared/services/media.service.js";

/**
 * Uploads land on a public URL, so the type allowlist matters: SVG is excluded
 * deliberately because it can carry script, and anything not renderable as site
 * media has no business here.
 */
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/avif",
  "video/mp4",
  "application/pdf",
]);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (ALLOWED_TYPES.has(file.mimetype)) {
      cb(null, true);
      return;
    }
    cb(AppError.badRequest(`Unsupported file type: ${file.mimetype}`));
  },
});

export const adminMediaRouter = Router();

adminMediaRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    ok(res, await listMedia());
  })
);

adminMediaRouter.post(
  "/",
  upload.single("file"),
  asyncHandler(async (req, res) => {
    if (!req.file) throw AppError.badRequest("file is required");
    const publicBaseUrl = `${req.protocol}://${req.get("host")}`;
    ok(res, await uploadMedia(req.file, publicBaseUrl), 201);
  })
);

adminMediaRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    await deleteMedia(paramStr(req.params.id));
    ok(res, { id: paramStr(req.params.id) });
  })
);
