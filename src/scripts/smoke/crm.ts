import { check } from "./harness.js";
import type { Smoke } from "./harness.js";

/** The CRM cycle: visitor → consent → lead/chat → contact → quote → booking → alerts → erasure. */
export async function crmSection(ctx: Smoke) {
  const { call, authHeaders, post, patch } = ctx;
  console.log("\nCRM: visitors, consent, contacts, pipeline");
  const J = { "content-type": "application/json" };
  const V1 = "crm-visitor-1";
  const V2 = "crm-visitor-2";
  const now = Date.now();

  const crmBeacon = await call("/api/analytics/events", {
    method: "POST",
    headers: { ...J, "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1" },
    body: JSON.stringify({
      events: [
        { type: "session", path: "/campaign", visitorId: V1, sessionId: "s1", timezone: "Africa/Cairo", screen: "390x844", lang: "ar", ts: now,
          touch: { landingPath: "/campaign", utmSource: "facebook", utmMedium: "cpc", utmCampaign: "pos-sept", fbclid: "abc" } },
        { type: "pageview", path: "/campaign", visitorId: V1, sessionId: "s1", device: "mobile", lang: "ar", ts: now },
        { type: "pageview", path: "/services", visitorId: V1, sessionId: "s1", device: "mobile", lang: "ar", ts: now + 1000 },
        { type: "click", path: "/services", label: "hero.start-project", visitorId: V1, sessionId: "s1", device: "mobile", ts: now + 2000 },
        { type: "pageview", path: "/contact", visitorId: V1, sessionId: "s1", device: "mobile", lang: "ar", ts: now + 3000 },
        { type: "consent", path: "/contact", visitorId: V1, status: "granted", source: "banner", ts: now + 4000 },
      ],
    }),
  });
  check("session, page and consent beacons are accepted", crmBeacon.status === 202, crmBeacon);

  const visitors = await call(`/api/admin/crm/visitors?q=${V1}`, { headers: authHeaders });
  const v1 = visitors.body?.data?.[0];
  check(
    "visitor profile: sessions, pages, source, country, device, consent",
    v1?.visitorId === V1 && v1.sessions === 1 && v1.pageviews === 3 && v1.clicks === 1 &&
      v1.country === "EG" && v1.os === "iOS" && v1.browser === "Safari" &&
      v1.firstTouch?.utmCampaign === "pos-sept" && v1.channel === "paid" && v1.consent?.status === "granted",
    v1
  );

  const consentLog = await call("/api/admin/crm/consent?days=7", { headers: authHeaders });
  check(
    "consent log records the choice with policy version",
    consentLog.body?.data?.totals?.granted >= 1 && consentLog.body?.data?.records?.[0]?.policyVersion,
    consentLog.body?.data
  );

  const crmLead = await post("/api/leads", {
    source: "campaign", name: "Sara Crm", email: "Sara.CRM@Example.com", phone: "+966 50 123 4567",
    message: "We need a POS for 3 branches", projectType: "Business system / POS", budget: "5k-10k", visitorId: V1,
  });
  const contactId: string = crmLead.body?.data?.contactId;
  check("a lead is filed as a contact", crmLead.status === 201 && !!contactId, crmLead);

  const detail = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  const d = detail.body?.data;
  check(
    "contact has the phone (E.164), email, journey and consent from before the lead",
    d?.contact?.phones?.[0] === "+966501234567" && d.contact.emails?.[0] === "sara.crm@example.com" &&
      d.journey?.filter((e: { type: string }) => e.type === "pageview").length === 3 &&
      d.consent?.[0]?.status === "granted" && d.activities?.some((a: { type: string }) => a.type === "lead"),
    d
  );

  const crmChat = await post("/api/chat/session", { visitorId: V2, phone: "0501234567", country: "SA", name: "Sara" });
  check("chat session with the same phone succeeds", crmChat.status === 200, crmChat);
  const sameContact = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  check(
    "chat from another browser joins the same contact",
    sameContact.body?.data?.contact?.visitorIds?.includes(V1) && sameContact.body?.data?.contact?.visitorIds?.includes(V2) &&
      sameContact.body?.data?.activities?.some((a: { type: string }) => a.type === "chat_started"),
    sameContact.body?.data?.contact
  );

  const staged = await patch(`/api/admin/contacts/${contactId}`, { stage: "qualified", value: 8000, tags: ["pos", "retail"] });
  const note = await post(`/api/admin/contacts/${contactId}/notes`, { text: "Wants a demo next week" }, authHeaders);
  const afterStage = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  check(
    "stage, value, tags and notes are saved, with a stage-change entry",
    staged.body?.data?.stage === "qualified" && note.status === 201 &&
      afterStage.body?.data?.activities?.some((a: { type: string; by: string }) => a.type === "stage_change" && a.by === "smoke@kftech.solutions"),
    afterStage.body?.data?.activities
  );
  const badStage = await patch(`/api/admin/contacts/${contactId}`, { stage: "maybe" });
  check("unknown stage is rejected", badStage.status === 400, badStage);

  const search = await call("/api/admin/contacts?q=501234", { headers: authHeaders });
  check("contacts search by phone digits", search.body?.data?.some((c: { id: string }) => c.id === contactId), search.body?.data?.length);

  console.log("\nCRM: quotes");
  const quote = await post("/api/admin/quotes", {
    title: "POS for 3 branches", contactId, language: "ar", currency: "EGP", discountType: "percent", discountValue: 10, taxRate: 14,
    lineItems: [{ description: "POS licence", qty: 3, unitPrice: 10000 }, { description: "Setup", qty: 1, unitPrice: 5000 }],
  }, authHeaders);
  const qd = quote.body?.data;
  check("quote is created with a number, token and totals", quote.status === 201 && /^KF-\d{4}-\d{4}$/.test(qd?.number) && qd?.totals?.total === 35910 && qd?.token, qd);
  const badLine = await post("/api/admin/quotes", { title: "x", lineItems: [{ description: "", qty: 1, unitPrice: 1 }] }, authHeaders);
  check("a quote line without a description is rejected", badLine.status === 400, badLine);

  const sent = await post(`/api/admin/quotes/${qd.id}/sent`, {}, authHeaders);
  const afterSent = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  check("marking sent moves the contact to Proposal", sent.body?.data?.status === "sent" && afterSent.body?.data?.contact?.stage === "proposal", afterSent.body?.data?.contact?.stage);

  const pub = await call(`/api/quotes/${qd.token}`);
  check(
    "the client link shows the quote without internal ids",
    pub.status === 200 && pub.body?.data?.status === "viewed" && pub.body?.data?.token === undefined && pub.body?.data?.contactId === undefined && pub.body?.data?.company?.companyName,
    pub.body?.data
  );
  const wrongToken = await call("/api/quotes/not-a-real-token");
  check("an unknown quote link is a 404", wrongToken.status === 404, wrongToken);
  const noName = await post(`/api/quotes/${qd.token}/accept`, { name: "" });
  check("accepting needs a typed name", noName.status === 400, noName);
  const accepted = await post(`/api/quotes/${qd.token}/accept`, { name: "Sara Crm" });
  const won = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  check(
    "accepting marks the quote, wins the deal and sets its value",
    accepted.body?.data?.status === "accepted" && won.body?.data?.contact?.stage === "won" && won.body?.data?.contact?.value === 35910,
    won.body?.data?.contact
  );
  const twice = await post(`/api/quotes/${qd.token}/accept`, { name: "Sara Crm" });
  check("an answered quote cannot be answered again", twice.status === 409, twice);
  const locked = await patch(`/api/admin/quotes/${qd.id}`, { title: "changed" });
  check("an accepted quote can no longer be edited", locked.status === 400, locked);

  console.log("\nCRM: bookings");
  const settings0 = await call("/api/admin/crm-settings", { headers: authHeaders });
  check("CRM settings load with defaults", settings0.body?.data?.booking?.timezone === "Africa/Cairo" && settings0.body?.data?.telegram?.hasBotToken === false, settings0.body?.data);
  const allDay = { windows: [{ start: "00:00", end: "23:30" }] };
  const openAll = await patch("/api/admin/crm-settings", { booking: { weekly: [allDay, allDay, allDay, allDay, allDay, allDay, allDay], minNoticeHours: 0, bufferMinutes: 0, slotMinutes: 30, enabled: true } });
  check("booking hours save", openAll.status === 200, openAll);
  const closed = { windows: [] };
  const badHours = await patch("/api/admin/crm-settings", { booking: { weekly: [{ windows: [{ start: "18:00", end: "09:00" }] }, closed, closed, closed, closed, closed, closed] } });
  check("an opening window that ends before it starts is rejected", badHours.status === 400, badHours);

  // Dated exceptions: the calendar in the dashboard closes a day or gives it its own hours.
  const cairoDay = (when: number) => new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Cairo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(when));
  const cairoTime = (iso: string) => new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Cairo", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date(iso));
  const tomorrow = cairoDay(Date.now() + 86400000);
  const onDay = (list: { start: string }[] | undefined, day: string) => (list ?? []).filter((s) => cairoDay(Date.parse(s.start)) === day);
  const closedDay = await patch("/api/admin/crm-settings", { booking: { dateOverrides: { [tomorrow]: { windows: [] } } } });
  check("a dated exception saves", closedDay.status === 200 && closedDay.body?.data?.booking?.dateOverrides?.[tomorrow]?.windows?.length === 0, closedDay.body?.data?.booking?.dateOverrides);
  const slotsClosed = await call("/api/bookings/slots");
  check("a date closed by exception has no times", onDay(slotsClosed.body?.data?.slots, tomorrow).length === 0 && slotsClosed.body?.data?.daysAhead >= 1, onDay(slotsClosed.body?.data?.slots, tomorrow).length);
  await patch("/api/admin/crm-settings", { booking: { dateOverrides: { [tomorrow]: { windows: [{ start: "13:00", end: "14:00" }] } } } });
  const slotsCustom = await call("/api/bookings/slots");
  const customTimes = onDay(slotsCustom.body?.data?.slots, tomorrow).map((s) => cairoTime(s.start));
  check("a date's own hours replace the weekday's", customTimes.join(",") === "13:00,13:30", customTimes);
  const pastOverride = await patch("/api/admin/crm-settings", { booking: { dateOverrides: { "2020-01-01": { windows: [] } } } });
  check("a past dated exception is dropped", pastOverride.status === 200 && Object.keys(pastOverride.body?.data?.booking?.dateOverrides ?? { x: 1 }).length === 0, pastOverride.body?.data?.booking?.dateOverrides);
  const badOverride = await patch("/api/admin/crm-settings", { booking: { dateOverrides: { "next tuesday": { windows: [] } } } });
  check("a malformed exception date is rejected", badOverride.status === 400, badOverride);

  const slots = await call("/api/bookings/slots");
  const slot = slots.body?.data?.slots?.[0];
  check("public slots are listed", slots.status === 200 && !!slot?.start, slots.body?.data?.slots?.length);
  const badBooking = await post("/api/bookings", { start: slot.start, phone: "123", name: "X" });
  check("booking with an invalid phone is rejected", badBooking.status === 400 && badBooking.body?.errors?.[0]?.code === "INVALID_PHONE", badBooking);
  const booked = await post("/api/bookings", { start: slot.start, phone: "+966501234567", name: "Sara", topic: "POS demo", visitorId: V1, lang: "ar" });
  check("a call is booked", booked.status === 201 && booked.body?.data?.phone?.startsWith("+966"), booked);
  const again = await post("/api/bookings", { start: slot.start, phone: "+201012345678", name: "Other" });
  check("the same slot cannot be booked twice", again.status === 409 && again.body?.errors?.[0]?.code === "SLOT_TAKEN", again);
  const slots2 = await call("/api/bookings/slots");
  check("a booked slot leaves the list", !slots2.body?.data?.slots?.some((s: { start: string }) => s.start === slot.start), null);
  const bookings = await call("/api/admin/bookings", { headers: authHeaders });
  const bk = bookings.body?.data?.find((b: { start: string }) => b.start === slot.start);
  check("the booking is filed under the same contact", bk?.contactId === contactId && bk?.contactName, bk);
  const done = await patch(`/api/admin/bookings/${bk.id}`, { status: "completed" });
  check("booking status updates", done.body?.data?.status === "completed", done);

  console.log("\nCRM: alerts");
  const notes = await call("/api/admin/notifications?limit=50", { headers: authHeaders });
  const types = (notes.body?.data ?? []).map((n: { type: string }) => n.type);
  check("alerts were raised for lead, chat, quote and booking", ["lead", "chat", "quote_viewed", "quote_accepted", "booking"].every((t) => types.includes(t)), types);
  const count = await call("/api/admin/notifications/count", { headers: authHeaders });
  const cleared = await post("/api/admin/notifications/read", { ids: "all" }, authHeaders);
  check("unread count and mark-all-read", count.body?.data?.unread > 0 && cleared.body?.data?.unread === 0, [count.body, cleared.body]);

  await patch(`/api/admin/contacts/${contactId}`, { stage: "qualified", nextFollowUpAt: new Date(Date.now() - 60000).toISOString() });
  const check1 = await post("/api/admin/notifications/check", {}, authHeaders);
  const check2 = await post("/api/admin/notifications/check", {}, authHeaders);
  check("a due follow-up alerts once", check1.body?.data?.followUps === 1 && check2.body?.data?.followUps === 0, [check1.body, check2.body]);

  const tgNoToken = await post("/api/admin/crm-settings/telegram/test", {}, authHeaders);
  check("Telegram test needs a token first", tgNoToken.status === 400, tgNoToken);
  const tgBad = await patch("/api/admin/crm-settings", { telegram: { botToken: "nope" } });
  check("a malformed bot token is rejected", tgBad.status === 400, tgBad);
  const tgOk = await patch("/api/admin/crm-settings", { telegram: { botToken: "123456789:AAFakeTokenForSmokeTest_abcdefghij", chatId: "42", enabled: false } });
  check(
    "a saved bot token is never sent back",
    tgOk.body?.data?.telegram?.hasBotToken === true && tgOk.body?.data?.telegram?.botToken === undefined && tgOk.body?.data?.telegram?.botTokenHint === "ghij",
    tgOk.body?.data?.telegram
  );
  const publicSettings2 = await call("/api/content/settings");
  check("the public settings never include CRM secrets", !JSON.stringify(publicSettings2.body).includes("AAFakeToken"), null);

  const overview = await call("/api/admin/crm/overview", { headers: authHeaders });
  check(
    "CRM overview reports stages, new contacts and won value per currency",
    overview.body?.data?.newContacts7 >= 1 &&
      overview.body?.data?.stages?.some((s: { stage: string; values: Record<string, number> }) => s.stage === "qualified" || s.stage === "won"),
    overview.body?.data
  );

  const unauth = await call("/api/admin/contacts");
  check("CRM endpoints require auth", unauth.status === 401, unauth);

  const erased = await call(`/api/admin/contacts/${contactId}`, { method: "DELETE", headers: authHeaders });
  const gone = await call(`/api/admin/contacts/${contactId}`, { headers: authHeaders });
  const v1Gone = await call(`/api/admin/crm/visitors/${V1}`, { headers: authHeaders });
  const quoteGone = await call(`/api/quotes/${qd.token}`);
  check("erasing a contact removes them, their browsing and their quotes", erased.status === 200 && gone.status === 404 && v1Gone.status === 404 && quoteGone.status === 404, [gone.status, v1Gone.status, quoteGone.status]);
}
