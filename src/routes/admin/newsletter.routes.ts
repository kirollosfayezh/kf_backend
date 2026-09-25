import { Router } from "express";
import { asyncHandler } from "../../shared/http/async-handler.js";
import { ok } from "../../shared/http/api-response.js";
import { paramStr } from "../../shared/http/params.js";
import { listSubscribers, removeSubscriber, subscribersCsv } from "../../shared/services/newsletter.service.js";

export const adminNewsletterRouter = Router();

/** `?q=` filters by email; `?format=csv` downloads the same list for a mailing tool. */
adminNewsletterRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const rows = await listSubscribers(req.query);
    if (req.query.format === "csv") {
      res.set("content-type", "text/csv; charset=utf-8");
      res.set("content-disposition", 'attachment; filename="subscribers.csv"');
      res.send(subscribersCsv(rows));
      return;
    }
    ok(res, rows);
  })
);

adminNewsletterRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => ok(res, await removeSubscriber(paramStr(req.params.id))))
);
