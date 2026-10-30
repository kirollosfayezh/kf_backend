import { AnalyticsModel } from "../../models/analytics.model.js";
import { LeadModel } from "../../models/lead.model.js";
import type { AnalyticsEvent, AnalyticsSummary } from "../../shared/types/index.js";

/**
 * Analytics reads are aggregations, not row fetches, so this gets its own
 * repository rather than being forced through the generic `Repository<T>`.
 * Still the only place analytics touches Mongo, so it stays swappable.
 */
export class AnalyticsRepository {
  async record(events: AnalyticsEvent[]): Promise<number> {
    if (events.length === 0) return 0;
    const docs = await AnalyticsModel.insertMany(events, { ordered: false });
    return docs.length;
  }

  async summary(days: number): Promise<AnalyticsSummary> {
    const to = new Date();
    const from = new Date(to.getTime() - (days - 1) * 24 * 60 * 60 * 1000);
    const dayKey = (d: Date) => d.toISOString().slice(0, 10);
    const fromDay = dayKey(from);
    const toDay = dayKey(to);
    const window = { day: { $gte: fromDay, $lte: toDay } };

    // The window of the same length immediately before this one, used only for
    // the period-over-period deltas.
    const prevTo = new Date(from.getTime() - 24 * 60 * 60 * 1000);
    const prevFrom = new Date(prevTo.getTime() - (days - 1) * 24 * 60 * 60 * 1000);
    const prevWindow = { day: { $gte: dayKey(prevFrom), $lte: dayKey(prevTo) } };

    const [byType, daily, topPages, topClicks, topReferrers, devices, visitors, leads] =
      await Promise.all([
        AnalyticsModel.aggregate([
          { $match: window },
          { $group: { _id: "$type", n: { $sum: 1 } } },
        ]),
        AnalyticsModel.aggregate([
          { $match: window },
          {
            $group: {
              _id: "$day",
              pageviews: { $sum: { $cond: [{ $eq: ["$type", "pageview"] }, 1, 0] } },
              clicks: { $sum: { $cond: [{ $eq: ["$type", "click"] }, 1, 0] } },
            },
          },
          { $sort: { _id: 1 } },
        ]),
        AnalyticsModel.aggregate([
          { $match: { ...window, type: "pageview" } },
          { $group: { _id: "$path", views: { $sum: 1 } } },
          { $sort: { views: -1 } },
          { $limit: 20 },
        ]),
        AnalyticsModel.aggregate([
          { $match: { ...window, type: "click", label: { $nin: [null, ""] } } },
          { $group: { _id: "$label", clicks: { $sum: 1 } } },
          { $sort: { clicks: -1 } },
          { $limit: 20 },
        ]),
        AnalyticsModel.aggregate([
          { $match: { ...window, referrer: { $nin: [null, ""] } } },
          { $group: { _id: "$referrer", count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 10 },
        ]),
        AnalyticsModel.aggregate([
          { $match: { ...window, device: { $ne: null } } },
          { $group: { _id: "$device", count: { $sum: 1 } } },
          { $sort: { count: -1 } },
        ]),
        AnalyticsModel.distinct("visitorId", window),
        LeadModel.countDocuments({ createdAt: { $gte: from.toISOString() } }),
      ]);

    const [prevByType, prevVisitors, prevLeads] = await Promise.all([
      AnalyticsModel.aggregate([{ $match: prevWindow }, { $group: { _id: "$type", n: { $sum: 1 } } }]),
      AnalyticsModel.distinct("visitorId", prevWindow),
      LeadModel.countDocuments({
        createdAt: { $gte: prevFrom.toISOString(), $lt: from.toISOString() },
      }),
    ]);

    const typeCount = (t: string) => byType.find((r) => r._id === t)?.n ?? 0;
    const prevTypeCount = (t: string) => prevByType.find((r) => r._id === t)?.n ?? 0;

    return {
      range: { from: fromDay, to: toDay, days },
      totals: {
        pageviews: typeCount("pageview"),
        clicks: typeCount("click"),
        visitors: visitors.filter(Boolean).length,
        leads,
      },
      previous: {
        pageviews: prevTypeCount("pageview"),
        clicks: prevTypeCount("click"),
        visitors: prevVisitors.filter(Boolean).length,
        leads: prevLeads,
      },
      daily: daily.map((d) => ({ day: d._id, pageviews: d.pageviews, clicks: d.clicks })),
      topPages: topPages.map((p) => ({ path: p._id, views: p.views })),
      topClicks: topClicks.map((c) => ({ label: c._id, clicks: c.clicks })),
      topReferrers: topReferrers.map((r) => ({ referrer: r._id, count: r.count })),
      devices: devices.map((d) => ({ device: d._id, count: d.count })),
    };
  }
}
