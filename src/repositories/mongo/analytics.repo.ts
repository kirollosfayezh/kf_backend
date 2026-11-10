import { AnalyticsModel } from "../../models/analytics.model.js";
import { LeadModel } from "../../models/lead.model.js";
import { VisitorModel } from "../../models/visitor.model.js";
import { ContactModel } from "../../models/contact.model.js";
import { channelOf } from "../../shared/tracking.js";
import type { AdVisitor, AnalyticsEvent, AnalyticsInsights, AnalyticsSummary, DailyInsight, InsightRow, SeriesChannel, TouchInfo } from "../../shared/types/index.js";

/** Which kind of "reach out" a click label is: the site files these as contact clicks. */
export function contactKind(label: string | undefined): string | null {
  if (!label) return null;
  if (/^chat\.launcher$/.test(label)) return "chat";
  const m = /(^|\.)(whatsapp|email|phone)$/.exec(label);
  return m ? m[2] : null;
}

/** A touch that came from a Google ad: auto-tagged (gclid) or tagged google + cpc by hand. */
export function isGoogleAd(t: TouchInfo | undefined): boolean {
  if (!t) return false;
  return !!t.gclid || (/google/i.test(t.utmSource ?? "") && /cpc|ppc|paid/i.test(t.utmMedium ?? ""));
}

/** The traffic group for the dashboard, with Google Ads split out from other paid traffic. */
export function insightChannel(first: TouchInfo | undefined, last: TouchInfo | undefined): string {
  if (isGoogleAd(first) || isGoogleAd(last)) return "google_ads";
  const c = channelOf(first);
  return c === "paid" ? "other_ads" : c;
}

/** Folds the seven traffic groups into the five lines the trend chart draws. */
export function seriesChannel(channel: string): SeriesChannel {
  return channel === "google_ads" || channel === "search" || channel === "social" || channel === "direct" ? channel : "other";
}

/** Every ISO day from `from` to `to`, inclusive. */
export function dayRange(from: string, to: string): string[] {
  const out: string[] = [];
  for (let t = Date.parse(`${from}T00:00:00Z`), end = Date.parse(`${to}T00:00:00Z`); t <= end && out.length < 400; t += 86_400_000) {
    out.push(new Date(t).toISOString().slice(0, 10));
  }
  return out;
}

/**
 * The per-day trend: distinct visitors, visitors who tapped to contact, leads,
 * and the Google Ads share, plus visitors per source. Days with nothing stay in
 * the series as zeros so the chart's x-axis is continuous.
 */
export function dailySeries(input: {
  from: string;
  to: string;
  visitors: { id: string; days: string[]; tapDays: string[] }[];
  channelOf: (visitorId: string) => SeriesChannel | null;
  isAd: (visitorId: string) => boolean;
  leads: { day: string; visitorId?: string }[];
}): DailyInsight[] {
  const byDay = new Map<string, DailyInsight>(
    dayRange(input.from, input.to).map((day) => [
      day,
      { day, visitors: 0, contactTaps: 0, leads: 0, adVisitors: 0, adLeads: 0, channels: { google_ads: 0, search: 0, social: 0, direct: 0, other: 0 } },
    ]),
  );
  for (const v of input.visitors) {
    const ad = input.isAd(v.id);
    const ch = input.channelOf(v.id);
    for (const day of new Set(v.days)) {
      const d = byDay.get(day);
      if (!d) continue;
      d.visitors++;
      if (ad) d.adVisitors++;
      if (ch) d.channels[ch]++;
    }
    for (const day of new Set(v.tapDays)) {
      const d = byDay.get(day);
      if (d) d.contactTaps++;
    }
  }
  for (const l of input.leads) {
    const d = byDay.get(l.day);
    if (!d) continue;
    d.leads++;
    if (l.visitorId && input.isAd(l.visitorId)) d.adLeads++;
  }
  return [...byDay.values()];
}

function rows(map: Map<string, { visitors: number; leads: number }>, limit = 20): InsightRow[] {
  return [...map.entries()]
    .map(([key, v]) => ({ key, ...v }))
    .sort((a, b) => b.visitors - a.visitors || b.leads - a.leads)
    .slice(0, limit);
}

function bump(map: Map<string, { visitors: number; leads: number }>, key: string | undefined, lead: boolean): void {
  if (!key) return;
  const r = map.get(key) ?? { visitors: 0, leads: 0 };
  r.visitors += 1;
  if (lead) r.leads += 1;
  map.set(key, r);
}

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

  /**
   * Deletes every recorded event and visitor profile: "start analytics from
   * zero". Leads, contacts, chats and consent records are left alone — they
   * are CRM and legal records, not traffic.
   */
  async reset(): Promise<{ events: number; visitors: number }> {
    const [events, visitors] = await Promise.all([AnalyticsModel.deleteMany({}), VisitorModel.deleteMany({})]);
    return { events: events.deletedCount ?? 0, visitors: visitors.deletedCount ?? 0 };
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

  /**
   * Where visitors come from and how far they get, per visitor rather than per
   * event. Google Ads visitors are listed one by one with their journey and,
   * when they left details, the CRM contact they became.
   */
  async insights(days: number): Promise<AnalyticsInsights> {
    const to = new Date();
    const from = new Date(to.getTime() - (days - 1) * 24 * 60 * 60 * 1000);
    from.setUTCHours(0, 0, 0, 0);
    const fromIso = from.toISOString();
    const dayKey = (d: Date) => d.toISOString().slice(0, 10);
    const window = { day: { $gte: dayKey(from), $lte: dayKey(to) } };

    const DAY = 24 * 60 * 60 * 1000;
    const prevFrom = new Date(from.getTime() - days * DAY);
    const prevFromIso = prevFrom.toISOString();
    const prevWindow = { day: { $gte: dayKey(prevFrom), $lte: dayKey(new Date(from.getTime() - DAY)) } };

    const [visitors, leads, perVisitor, taps, conversions, cells, prevPerVisitor, prevLeads] = await Promise.all([
      VisitorModel.find({ lastSeenAt: { $gte: fromIso } })
        .select("visitorId firstSeenAt lastSeenAt sessions pageviews firstTouch lastTouch device country lang contactId")
        .lean(),
      LeadModel.find({ createdAt: { $gte: fromIso } }).select("visitorId contactId createdAt").lean(),
      AnalyticsModel.aggregate([
        { $match: { ...window, visitorId: { $nin: [null, ""] } } },
        // Oldest first, so each person's pages read in the order they visited them.
        { $sort: { ts: 1 } },
        {
          $group: {
            _id: "$visitorId",
            pageviews: { $sum: { $cond: [{ $eq: ["$type", "pageview"] }, 1, 0] } },
            clicks: { $sum: { $cond: [{ $eq: ["$type", "click"] }, 1, 0] } },
            clicksAt: { $push: { $cond: [{ $eq: ["$type", "click"] }, { label: "$label", day: "$day" }, "$$REMOVE"] } },
            days: { $addToSet: "$day" },
            firstTs: { $min: "$ts" },
            lastTs: { $max: "$ts" },
            conv: { $push: { $cond: [{ $eq: ["$type", "conversion"] }, "$label", "$$REMOVE"] } },
            paths: { $push: { $cond: [{ $eq: ["$type", "pageview"] }, "$path", "$$REMOVE"] } },
          },
        },
      ]),
      AnalyticsModel.aggregate([
        { $match: { ...window, type: "click", label: { $nin: [null, ""] } } },
        { $group: { _id: "$label", taps: { $sum: 1 }, visitors: { $addToSet: "$visitorId" } } },
      ]),
      AnalyticsModel.aggregate([
        { $match: { ...window, type: "conversion" } },
        { $group: { _id: "$label", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
      // Weekday x hour in Cairo time; the hour and weekday totals are sums of these cells.
      AnalyticsModel.aggregate([
        { $match: { ...window, type: "pageview" } },
        { $addFields: { at: { $toDate: "$ts" } } },
        {
          $group: {
            _id: { d: { $dayOfWeek: { date: "$at", timezone: "Africa/Cairo" } }, h: { $hour: { date: "$at", timezone: "Africa/Cairo" } } },
            n: { $sum: 1 },
          },
        },
      ]),
      // The previous period, for the deltas: only who was there and who tapped.
      AnalyticsModel.aggregate([
        { $match: { ...prevWindow, visitorId: { $nin: [null, ""] } } },
        { $group: { _id: "$visitorId", labels: { $addToSet: { $cond: [{ $eq: ["$type", "click"] }, "$label", "$$REMOVE"] } } } },
      ]),
      LeadModel.countDocuments({ createdAt: { $gte: prevFromIso, $lt: fromIso } }),
    ]);

    const leadVisitors = new Set(leads.map((l) => l.visitorId).filter(Boolean) as string[]);
    const ev = new Map(perVisitor.map((v) => [v._id as string, v]));
    const isLead = (vid: string) => leadVisitors.has(vid) || (ev.get(vid)?.conv ?? []).includes("lead");

    // Sources, landing pages, countries, languages, new vs returning.
    const channels = new Map<string, { visitors: number; leads: number }>();
    const landing = new Map<string, { visitors: number; leads: number }>();
    const countries = new Map<string, number>();
    const langs = new Map<string, number>();
    let returning = 0;
    for (const v of visitors) {
      const lead = isLead(v.visitorId);
      bump(channels, insightChannel(v.firstTouch, v.lastTouch), lead);
      if (v.firstSeenAt >= fromIso) bump(landing, v.firstTouch?.landingPath, lead);
      if (v.country) countries.set(v.country, (countries.get(v.country) ?? 0) + 1);
      if (v.lang) langs.set(v.lang, (langs.get(v.lang) ?? 0) + 1);
      if (v.firstSeenAt < fromIso || (v.sessions ?? 0) > 1) returning++;
    }

    // Funnel, from the events actually recorded in the range.
    let engaged = 0;
    let tapped = 0;
    for (const v of perVisitor) {
      if (v.pageviews >= 2 || v.clicks >= 1) engaged++;
      if ((v.clicksAt as { label?: string }[]).some((c) => contactKind(c.label))) tapped++;
    }
    const tapKinds = new Map<string, { taps: number; visitors: Set<string> }>();
    for (const t of taps) {
      const k = contactKind(t._id as string);
      if (!k) continue;
      const r = tapKinds.get(k) ?? { taps: 0, visitors: new Set<string>() };
      r.taps += t.taps;
      for (const id of t.visitors as string[]) if (id) r.visitors.add(id);
      tapKinds.set(k, r);
    }

    // Google Ads, person by person.
    const adVisitors = visitors.filter((v) => isGoogleAd(v.firstTouch) || isGoogleAd(v.lastTouch));
    const adTouch = (v: (typeof adVisitors)[number]) => (isGoogleAd(v.lastTouch) ? v.lastTouch : v.firstTouch) as TouchInfo | undefined;
    const contactIds = new Set<string>();
    for (const v of adVisitors) if (v.contactId) contactIds.add(v.contactId);
    for (const l of leads) if (l.contactId && adVisitors.some((v) => v.visitorId === l.visitorId)) contactIds.add(l.contactId);
    const contacts = await ContactModel.find({
      $or: [{ _id: { $in: [...contactIds].filter((id) => /^[0-9a-f]{24}$/.test(id)) } }, { visitorIds: { $in: adVisitors.map((v) => v.visitorId) } }],
    })
      .select("name phones emails company stage visitorIds")
      .lean();
    const contactFor = (vid: string, cid?: string) =>
      contacts.find((c) => String(c._id) === cid) ?? contacts.find((c) => (c.visitorIds ?? []).includes(vid));

    const campaigns = new Map<string, { visitors: number; leads: number }>();
    const keywords = new Map<string, { visitors: number; leads: number }>();
    const adLanding = new Map<string, { visitors: number; leads: number }>();
    let adLeads = 0;
    let adTaps = 0;
    const people: AdVisitor[] = adVisitors
      .map((v) => {
        const t = adTouch(v);
        const e = ev.get(v.visitorId);
        const lead = isLead(v.visitorId);
        const tapsOf = [...new Set(((e?.clicksAt ?? []) as { label?: string }[]).map((c) => contactKind(c.label)).filter(Boolean) as string[])];
        if (lead) adLeads++;
        if (tapsOf.length) adTaps++;
        bump(campaigns, t?.utmCampaign || "(not tagged)", lead);
        bump(keywords, t?.utmTerm || "(not tagged)", lead);
        bump(adLanding, t?.landingPath, lead);
        const c = contactFor(v.visitorId, v.contactId);
        return {
          visitorId: v.visitorId,
          firstSeenAt: v.firstSeenAt,
          lastSeenAt: v.lastSeenAt,
          landingPath: t?.landingPath,
          campaign: t?.utmCampaign,
          keyword: t?.utmTerm,
          adGroup: t?.utmContent,
          device: v.device,
          country: v.country,
          lang: v.lang,
          sessions: v.sessions ?? 0,
          pageviews: e?.pageviews ?? 0,
          pages: [...new Set((e?.paths ?? []) as string[])].slice(0, 12),
          spanSeconds: e ? Math.max(0, Math.round(((e.lastTs as number) - (e.firstTs as number)) / 1000)) : 0,
          activeDays: ((e?.days ?? []) as string[]).length,
          contactTaps: tapsOf,
          conversions: [...new Set((e?.conv ?? []) as string[])],
          contact: c
            ? { id: String(c._id), name: c.name, phones: c.phones ?? [], emails: c.emails ?? [], company: c.company, stage: c.stage }
            : undefined,
        };
      })
      // Leads and people who tapped to call or message first, then the most recent.
      .sort((a, b) => Number(!!b.contact || b.conversions.length > 0) - Number(!!a.contact || a.conversions.length > 0) || b.contactTaps.length - a.contactTaps.length || b.lastSeenAt.localeCompare(a.lastSeenAt))
      .slice(0, 200);

    const heatmap = cells
      .map((c) => ({ day: c._id.d as number, hour: c._id.h as number, pageviews: c.n as number }))
      .sort((a, b) => a.day - b.day || a.hour - b.hour);
    const hourRows = Array.from({ length: 24 }, (_, h) => ({ hour: h, pageviews: heatmap.filter((c) => c.hour === h).reduce((a, c) => a + c.pageviews, 0) }));
    const dayRows = Array.from({ length: 7 }, (_, i) => ({ day: i + 1, pageviews: heatmap.filter((c) => c.day === i + 1).reduce((a, c) => a + c.pageviews, 0) }));

    // The trend, one point per day.
    const profile = new Map(visitors.map((v) => [v.visitorId, v]));
    const adIds = new Set(adVisitors.map((v) => v.visitorId));
    const daily = dailySeries({
      from: dayKey(from),
      to: dayKey(to),
      visitors: perVisitor.map((v) => ({
        id: v._id as string,
        days: v.days as string[],
        tapDays: (v.clicksAt as { label?: string; day: string }[]).filter((c) => contactKind(c.label)).map((c) => c.day),
      })),
      channelOf: (id) => {
        const p = profile.get(id);
        return p ? seriesChannel(insightChannel(p.firstTouch, p.lastTouch)) : null;
      },
      isAd: (id) => adIds.has(id),
      leads: leads.map((l) => ({ day: String(l.createdAt).slice(0, 10), visitorId: l.visitorId ?? undefined })),
    });

    // The previous period: Google Ads visitors are looked up from the profiles of who was there.
    const prevIds = prevPerVisitor.map((v) => v._id as string);
    const prevProfiles = prevIds.length
      ? await VisitorModel.find({ visitorId: { $in: prevIds } }).select("firstTouch lastTouch").lean()
      : [];
    const previous = {
      visitors: prevIds.length,
      contactTaps: prevPerVisitor.filter((v) => (v.labels as string[]).some((l) => contactKind(l))).length,
      leads: prevLeads,
      adVisitors: prevProfiles.filter((v) => isGoogleAd(v.firstTouch) || isGoogleAd(v.lastTouch)).length,
    };
    const top = (m: Map<string, number>, n = 12) => [...m.entries()].map(([key, visitors]) => ({ key, visitors })).sort((a, b) => b.visitors - a.visitors).slice(0, n);

    return {
      range: { from: dayKey(from), to: dayKey(to), days },
      channels: rows(channels),
      funnel: { visitors: perVisitor.length, engaged, contactTaps: tapped, leads: leads.length },
      contactTaps: [...tapKinds.entries()].map(([kind, r]) => ({ kind, taps: r.taps, visitors: r.visitors.size })).sort((a, b) => b.taps - a.taps),
      conversions: conversions.map((c) => ({ kind: c._id as string, count: c.count as number })),
      landingPages: rows(landing, 15),
      countries: top(countries),
      languages: top(langs, 6),
      hours: hourRows,
      weekdays: dayRows,
      heatmap,
      daily,
      previous,
      returning: { new: visitors.length - returning, returning },
      ads: {
        visitors: adVisitors.length,
        leads: adLeads,
        contactTaps: adTaps,
        campaigns: rows(campaigns),
        keywords: rows(keywords, 30),
        landingPages: rows(adLanding, 10),
        people,
      },
    };
  }
}
