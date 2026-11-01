import { test } from "node:test";
import assert from "node:assert/strict";
import { env } from "../../config/env.js";
import type { Subscriber } from "../types/index.js";
import { subscribersCsv } from "./newsletter.service.js";
import { formatTelegram } from "./notify.service.js";

/** Output formats built from visitor-supplied text: the CSV export and Telegram alerts. */

const sub = (over: Partial<Subscriber>): Subscriber => ({
  email: "a@example.com",
  source: "footer",
  consentAt: "2026-10-01T00:00:00.000Z",
  createdAt: "2026-10-01T00:00:00.000Z",
  updatedAt: "2026-10-01T00:00:00.000Z",
  ...over,
});

test("csv: starts with a UTF-8 BOM and the fixed header, CRLF line ends", () => {
  const csv = subscribersCsv([sub({ lang: "ar" })]);
  assert.equal(csv.charCodeAt(0), 0xfeff);
  const lines = csv.slice(1).split("\r\n");
  assert.equal(lines[0], "email,lang,source,consentAt,unsubscribedAt,createdAt");
  assert.equal(lines[1], "a@example.com,ar,footer,2026-10-01T00:00:00.000Z,,2026-10-01T00:00:00.000Z");
  assert.equal(lines[2], "", "ends with a line break");
});

test("csv: commas, quotes and line breaks are quoted per RFC 4180", () => {
  const csv = subscribersCsv([sub({ email: 'odd,"name"@example.com', lang: "a\nb" })]);
  assert.ok(csv.includes('"odd,""name""@example.com","a\nb",footer'));
});

test("csv: an empty list is just the header", () => {
  assert.equal(subscribersCsv([]), "﻿email,lang,source,consentAt,unsubscribedAt,createdAt\r\n");
});

test("telegram: visitor text is HTML-escaped so it cannot inject markup", () => {
  const html = formatTelegram("lead", "New lead: <b>Eve</b> & co", 'Hi <a href="x">click</a>');
  assert.ok(html.startsWith("📩 <b>New lead: &lt;b&gt;Eve&lt;/b&gt; &amp; co</b>"));
  assert.ok(html.includes("Hi &lt;a href=\"x\"&gt;click&lt;/a&gt;"));
  assert.equal(html.includes("<a href=\"x\">"), false);
});

test("telegram: a long body is cut at 700 characters with an ellipsis", () => {
  const html = formatTelegram("chat", "t", "x".repeat(2000));
  const body = html.split("\n")[1];
  assert.equal(body, `${"x".repeat(700)}…`);
});

test("telegram: the dashboard link appears only when DASHBOARD_URL is configured", () => {
  const html = formatTelegram("booking", "Booked", undefined, "/contacts/abc");
  if (env.dashboardUrl) {
    assert.ok(html.endsWith(`<a href="${env.dashboardUrl}/contacts/abc">Open in dashboard</a>`));
  } else {
    assert.equal(html, "📅 <b>Booked</b>");
  }
});
