import { test } from "node:test";
import assert from "node:assert/strict";
import { cleanIdentity, mergeIdentity, pickMatch } from "./contact-merge.js";
import { channelOf, cleanTouch, countryFromTimezone, parseUserAgent } from "./tracking.js";

test("identity: phones are normalised and bad input dropped", () => {
  const id = cleanIdentity({ phone: "010 1234 5678", phoneCountry: "EG", email: " Ahmed@Mail.COM ", source: "contact" });
  assert.equal(id.phone, "+201012345678");
  assert.equal(id.phoneCountry, "EG");
  assert.equal(id.email, "ahmed@mail.com");
  const bad = cleanIdentity({ phone: "123", email: "not-an-email", source: "contact" });
  assert.equal(bad.phone, undefined);
  assert.equal(bad.email, undefined);
});

test("identity: phone match wins over email match", () => {
  const a = { id: "a", phones: ["+201012345678"], emails: [] as string[] };
  const b = { id: "b", phones: [] as string[], emails: ["x@y.com"] };
  const id = cleanIdentity({ phone: "+20 101 234 5678", email: "x@y.com", source: "chat" });
  assert.equal(pickMatch(id, [b, a])?.id, "a");
  assert.equal(pickMatch(cleanIdentity({ email: "X@Y.com", source: "chat" }), [a, b])?.id, "b");
  assert.equal(pickMatch(cleanIdentity({ email: "z@y.com", source: "chat" }), [a, b]), undefined);
});

test("identity: merge adds, never overwrites a known name", () => {
  const merged = mergeIdentity(
    { phones: ["+201012345678"], emails: [], visitorIds: ["v1"], sources: ["chat"], name: "Mina", company: undefined, country: "EG" },
    cleanIdentity({ phone: "01012345678", phoneCountry: "EG", email: "m@x.com", name: "Typo", company: "Acme", visitorId: "v2", source: "contact" })
  );
  assert.deepEqual(merged.phones, ["+201012345678"]);
  assert.deepEqual(merged.emails, ["m@x.com"]);
  assert.deepEqual(merged.visitorIds, ["v1", "v2"]);
  assert.deepEqual(merged.sources, ["chat", "contact"]);
  assert.equal(merged.name, "Mina");
  assert.equal(merged.company, "Acme");
});

test("tracking: user agents", () => {
  const iphone = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1";
  assert.deepEqual(parseUserAgent(iphone), { browser: "Safari", os: "iOS", bot: false });
  const chromeWin = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
  assert.deepEqual(parseUserAgent(chromeWin), { browser: "Chrome", os: "Windows", bot: false });
  const edge = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 Edg/126.0";
  assert.equal(parseUserAgent(edge).browser, "Edge");
  const android = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/121.0 Mobile Safari/537.36";
  assert.deepEqual(parseUserAgent(android), { browser: "Samsung Internet", os: "Android", bot: false });
  assert.equal(parseUserAgent("Googlebot/2.1 (+http://www.google.com/bot.html)").bot, true);
});

test("tracking: country from time zone", () => {
  assert.equal(countryFromTimezone("Africa/Cairo"), "EG");
  assert.equal(countryFromTimezone("Europe/Berlin"), "DE");
  assert.equal(countryFromTimezone("Asia/Riyadh"), "SA");
  assert.equal(countryFromTimezone("Not/AZone"), undefined);
});

test("tracking: touch cleaning and channels", () => {
  const t = cleanTouch({ utmSource: " facebook ", utmMedium: "cpc", landingPath: "/campaign", junk: "x" }, "2026-01-01");
  assert.deepEqual(t, { utmSource: "facebook", utmMedium: "cpc", landingPath: "/campaign", at: "2026-01-01" });
  assert.equal(channelOf(t), "paid");
  assert.equal(channelOf({ referrer: "https://www.google.com" }), "search");
  assert.equal(channelOf({ referrer: "https://l.instagram.com" }), "social");
  assert.equal(channelOf({ referrer: "https://someblog.dev" }), "referral");
  assert.equal(channelOf({ utmCampaign: "ramadan" }), "campaign");
  assert.equal(channelOf(undefined), "direct");
});
