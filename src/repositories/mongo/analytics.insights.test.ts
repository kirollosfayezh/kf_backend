import { test } from "node:test";
import assert from "node:assert/strict";
import { contactKind, dailySeries, dayRange, insightChannel, isGoogleAd, seriesChannel } from "./analytics.repo.js";

test("contact taps are read from the site's click labels", () => {
  assert.equal(contactKind("footer.whatsapp"), "whatsapp");
  assert.equal(contactKind("nav.phone"), "phone");
  assert.equal(contactKind("contact.email"), "email");
  assert.equal(contactKind("chat.launcher"), "chat");
  assert.equal(contactKind("whatsapp.banner"), null);
  assert.equal(contactKind("hero.start-project"), null);
  assert.equal(contactKind(undefined), null);
});

test("a Google ad is a gclid, or google + cpc tags", () => {
  assert.equal(isGoogleAd({ gclid: "abc" }), true);
  assert.equal(isGoogleAd({ utmSource: "google", utmMedium: "cpc" }), true);
  assert.equal(isGoogleAd({ utmSource: "google", utmMedium: "organic" }), false);
  assert.equal(isGoogleAd({ referrer: "www.google.com" }), false);
  assert.equal(isGoogleAd(undefined), false);
});

test("channels split Google Ads from other paid traffic", () => {
  assert.equal(insightChannel({ gclid: "x" }, undefined), "google_ads");
  assert.equal(insightChannel({ referrer: "www.google.com" }, { gclid: "x" }), "google_ads");
  assert.equal(insightChannel({ fbclid: "x" }, undefined), "other_ads");
  assert.equal(insightChannel({ referrer: "www.google.com" }, undefined), "search");
  assert.equal(insightChannel({ referrer: "l.facebook.com" }, undefined), "social");
  assert.equal(insightChannel(undefined, undefined), "direct");
});

test("the trend folds rare sources into other", () => {
  assert.equal(seriesChannel("google_ads"), "google_ads");
  assert.equal(seriesChannel("search"), "search");
  assert.equal(seriesChannel("referral"), "other");
  assert.equal(seriesChannel("other_ads"), "other");
  assert.equal(seriesChannel("campaign"), "other");
});

test("day range is inclusive and crosses month ends", () => {
  assert.deepEqual(dayRange("2026-10-30", "2026-11-02"), ["2026-10-30", "2026-10-31", "2026-11-01", "2026-11-02"]);
  assert.deepEqual(dayRange("2026-11-02", "2026-11-02"), ["2026-11-02"]);
  assert.deepEqual(dayRange("2026-11-03", "2026-11-02"), []);
});

test("daily series counts distinct people per day, ads and leads", () => {
  const series = dailySeries({
    from: "2026-11-01",
    to: "2026-11-03",
    visitors: [
      { id: "a", days: ["2026-11-01", "2026-11-02"], tapDays: ["2026-11-02", "2026-11-02"] },
      { id: "b", days: ["2026-11-02"], tapDays: [] },
      { id: "c", days: ["2026-10-20"], tapDays: [] }, // outside the range: ignored
      { id: "bot", days: ["2026-11-03"], tapDays: [] }, // no profile: counted, but in no source
    ],
    channelOf: (id) => (id === "a" ? "google_ads" : id === "b" ? "search" : null),
    isAd: (id) => id === "a",
    leads: [{ day: "2026-11-02", visitorId: "a" }, { day: "2026-11-03" }],
  });
  assert.deepEqual(series.map((d) => d.day), ["2026-11-01", "2026-11-02", "2026-11-03"]);
  assert.deepEqual(series.map((d) => d.visitors), [1, 2, 1]);
  assert.deepEqual(series.map((d) => d.adVisitors), [1, 1, 0]);
  assert.deepEqual(series.map((d) => d.contactTaps), [0, 1, 0]);
  assert.deepEqual(series.map((d) => d.leads), [0, 1, 1]);
  assert.deepEqual(series.map((d) => d.adLeads), [0, 1, 0]);
  assert.deepEqual(series[1].channels, { google_ads: 1, search: 1, social: 0, direct: 0, other: 0 });
  assert.equal(Object.values(series[2].channels).reduce((a, b) => a + b, 0), 0);
});
