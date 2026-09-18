import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "node:path";
import { publicContentRouter } from "./routes/public/content.routes.js";
import { publicLeadsRouter } from "./routes/public/leads.routes.js";
import { publicChatRouter } from "./routes/public/chat.routes.js";
import { adminAuthRouter } from "./routes/admin/auth.routes.js";
import { adminLeadsRouter } from "./routes/admin/leads.routes.js";
import { adminContentRouter } from "./routes/admin/content.routes.js";
import { adminSettingsRouter } from "./routes/admin/settings.routes.js";
import { adminMediaRouter } from "./routes/admin/media.routes.js";
import { adminChatRouter } from "./routes/admin/chat.routes.js";
import { requireAdmin } from "./shared/middleware/auth.js";
import { chatRateLimit, leadsRateLimit, loginRateLimit } from "./shared/middleware/rate-limit.js";
import { errorHandler, notFoundHandler } from "./shared/middleware/error-handler.js";
import { env } from "./config/env.js";

export const app = express();

// Render terminates TLS at its proxy, so without this the rate limiters would
// see the proxy's IP for every request instead of the client's.
app.set("trust proxy", 1);

app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(
  cors({
    origin: env.corsOrigins.length ? env.corsOrigins : true,
  })
);
app.use(express.json());

// Dev-only local media fallback (production uses R2 — see media.service.ts)
app.use("/uploads", express.static(path.resolve("uploads")));

const api = express.Router();

api.get("/healthz", (_req, res) => {
  res.json({ ok: true, service: "kf-api" });
});

// Public (site). Reads are unlimited; the unauthenticated writes are throttled.
api.use("/content", publicContentRouter);
api.use("/leads", leadsRateLimit, publicLeadsRouter);
api.use("/chat", chatRateLimit, publicChatRouter);

// Admin (dashboard)
api.use("/admin/auth", loginRateLimit, adminAuthRouter);
api.use("/admin/leads", requireAdmin, adminLeadsRouter);
api.use("/admin/content", requireAdmin, adminContentRouter);
api.use("/admin/settings", requireAdmin, adminSettingsRouter);
api.use("/admin/media", requireAdmin, adminMediaRouter);
api.use("/admin/chat", requireAdmin, adminChatRouter);

app.use("/api", api);

app.get("/", (_req, res) => {
  res.json({ ok: true, service: "kf-api" });
});

app.use(notFoundHandler);
app.use(errorHandler);
