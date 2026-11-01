import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "node:path";
import { publicContentRouter } from "./routes/public/content.routes.js";
import { publicLeadsRouter } from "./routes/public/leads.routes.js";
import { publicChatRouter } from "./routes/public/chat.routes.js";
import { publicAnalyticsRouter } from "./routes/public/analytics.routes.js";
import { publicSeoRouter } from "./routes/public/seo.routes.js";
import { publicTranslationsRouter } from "./routes/public/translations.routes.js";
import { adminAuthRouter } from "./routes/admin/auth.routes.js";
import { adminLeadsRouter } from "./routes/admin/leads.routes.js";
import { adminContentRouter } from "./routes/admin/content.routes.js";
import { adminSettingsRouter } from "./routes/admin/settings.routes.js";
import { adminMediaRouter } from "./routes/admin/media.routes.js";
import { adminChatRouter } from "./routes/admin/chat.routes.js";
import { adminAnalyticsRouter } from "./routes/admin/analytics.routes.js";
import { adminSeoRouter } from "./routes/admin/seo.routes.js";
import { adminTranslationsRouter } from "./routes/admin/translations.routes.js";
import { adminContactsRouter, adminCrmRouter } from "./routes/admin/crm.routes.js";
import {
  adminBookingsRouter,
  adminCrmSettingsRouter,
  adminNotificationsRouter,
  adminQuotesRouter,
} from "./routes/admin/sales.routes.js";
import { publicBookingsRouter, publicQuotesRouter } from "./routes/public/sales.routes.js";
import { publicNewsletterRouter } from "./routes/public/newsletter.routes.js";
import { adminNewsletterRouter } from "./routes/admin/newsletter.routes.js";
import { adminDemosRouter } from "./routes/admin/demos.routes.js";
import { requireAdmin } from "./shared/middleware/auth.js";
import {
  analyticsRateLimit,
  chatRateLimit,
  leadsRateLimit,
  loginRateLimit,
  newsletterRateLimit,
  salesRateLimit,
} from "./shared/middleware/rate-limit.js";
import { errorHandler, notFoundHandler } from "./shared/middleware/error-handler.js";
import { env } from "./config/env.js";
import { corsOptions } from "./config/cors.js";
import { getMediaObject, SERVABLE_KEY } from "./shared/services/media.service.js";
import { DEMO_CSP, renderDemo } from "./shared/services/demo.service.js";
import { asyncHandler } from "./shared/http/async-handler.js";

export const app = express();

// Render terminates TLS at its proxy, so without this the rate limiters would
// see the proxy's IP for every request instead of the client's.
app.set("trust proxy", 1);

app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors(corsOptions(env.corsOrigins, env.isProduction)));
// A demo upload is a whole web page, far over the 100 kB the other routes
// allow. The bigger parser runs only here and only after the admin check, and
// the general parser below then skips the already-parsed body.
app.use("/api/admin/demos", requireAdmin, express.json({ limit: "1.5mb" }));
app.use(express.json());

// Dev-only local media fallback (production uses R2 — see media.service.ts)
app.use("/uploads", express.static(path.resolve("uploads")));

// Photos in the R2 bucket, served through the API while the bucket has no
// working public address (see publicUrlWorks in media.service.ts). Keys never
// change content (a new upload is a new key), so they cache for a year.
app.get("/files/*key", async (req, res) => {
  const key = ([] as string[]).concat((req.params as { key: string | string[] }).key).join("/");
  if (!SERVABLE_KEY.test(key)) {
    res.status(404).end();
    return;
  }
  const obj = await getMediaObject(key);
  if (!obj) {
    res.status(404).end();
    return;
  }
  if (obj.etag && req.headers["if-none-match"] === obj.etag) {
    res.status(304).end();
    return;
  }
  res.setHeader("Content-Type", obj.contentType ?? "application/octet-stream");
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  if (obj.length) res.setHeader("Content-Length", String(obj.length));
  if (obj.etag) res.setHeader("ETag", obj.etag);
  obj.body.on("error", () => res.destroy());
  obj.body.pipe(res);
});

// Demo websites (see demo.service.ts). The site proxies <site>/demos/<slug>
// here, so visitors see them on the main domain — inside a sandbox CSP that
// replaces helmet's, since a demo needs inline scripts and outside photos.
app.get(
  "/demos/:slug",
  asyncHandler(async (req, res) => {
    const page = await renderDemo(String(req.params.slug));
    res.setHeader("Content-Security-Policy", DEMO_CSP);
    res.setHeader("X-Robots-Tag", "noindex, nofollow");
    if (!page) {
      res.status(404).type("html").send("<!doctype html><title>Demo not found</title><p>This demo is not available.</p>");
      return;
    }
    res.setHeader("Cache-Control", "public, max-age=60");
    res.type("html").send(page);
  })
);

const api = express.Router();

api.get("/healthz", (_req, res) => {
  res.json({ ok: true, service: "kf-api" });
});

// Public (site). Reads are unlimited; the unauthenticated writes are throttled.
api.use("/content", publicContentRouter);
api.use("/seo", publicSeoRouter);
api.use("/translations", publicTranslationsRouter);
api.use("/quotes", salesRateLimit, publicQuotesRouter);
api.use("/bookings", salesRateLimit, publicBookingsRouter);
api.use("/leads", leadsRateLimit, publicLeadsRouter);
api.use("/newsletter", newsletterRateLimit, publicNewsletterRouter);
api.use("/chat", chatRateLimit, publicChatRouter);
// Beacons arrive in batches and are cheap to write; the ceiling only stops floods.
api.use("/analytics", analyticsRateLimit, publicAnalyticsRouter);

// Admin (dashboard)
api.use("/admin/auth", loginRateLimit, adminAuthRouter);
api.use("/admin/leads", requireAdmin, adminLeadsRouter);
api.use("/admin/content", requireAdmin, adminContentRouter);
api.use("/admin/settings", requireAdmin, adminSettingsRouter);
api.use("/admin/media", requireAdmin, adminMediaRouter);
api.use("/admin/chat", requireAdmin, adminChatRouter);
api.use("/admin/analytics", requireAdmin, adminAnalyticsRouter);
api.use("/admin/seo", requireAdmin, adminSeoRouter);
api.use("/admin/translations", requireAdmin, adminTranslationsRouter);
api.use("/admin/contacts", requireAdmin, adminContactsRouter);
api.use("/admin/crm", requireAdmin, adminCrmRouter);
api.use("/admin/quotes", requireAdmin, adminQuotesRouter);
api.use("/admin/bookings", requireAdmin, adminBookingsRouter);
api.use("/admin/notifications", requireAdmin, adminNotificationsRouter);
api.use("/admin/crm-settings", requireAdmin, adminCrmSettingsRouter);
api.use("/admin/newsletter", requireAdmin, adminNewsletterRouter);
api.use("/admin/demos", requireAdmin, adminDemosRouter);

app.use("/api", api);

app.get("/", (_req, res) => {
  res.json({ ok: true, service: "kf-api" });
});

app.use(notFoundHandler);
app.use(errorHandler);
