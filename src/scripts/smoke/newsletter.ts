import { check } from "./harness.js";
import type { Smoke } from "./harness.js";

/** Newsletter sign-up, idempotency, honeypot, admin list, CSV export and removal. */
export async function newsletterSection(ctx: Smoke) {
  const { base, call, authHeaders, post } = ctx;
  console.log("\nNewsletter");
  const subscribed = await post("/api/newsletter", {
    email: "News.Reader@Example.com",
    lang: "ar",
    source: "footer",
    visitorId: "newsletter-visitor-1",
  });
  const subscriberId: string = subscribed.body?.data?.id;
  check(
    "a new address subscribes (201, created)",
    subscribed.status === 201 && subscribed.body?.data?.created === true && !!subscriberId,
    subscribed
  );
  const subscribedAgain = await post("/api/newsletter", { email: "news.reader@example.com", source: "article" });
  check(
    "the same address again is a 200, not a duplicate",
    subscribedAgain.status === 200 && subscribedAgain.body?.data?.created === false && subscribedAgain.body?.data?.id === subscriberId,
    subscribedAgain
  );
  const badEmail = await post("/api/newsletter", { email: "not-an-email" });
  check("an invalid email is rejected", badEmail.status === 400, badEmail);
  // The hidden `website` field: a bot fills it, gets its 201, and nothing is stored.
  const honeypot = await post("/api/newsletter", { email: "bot@example.com", website: "http://spam.example" });
  check("the honeypot answers 201 to the bot", honeypot.status === 201 && honeypot.body?.data?.created === true, honeypot);
  const secondSubscriber = await post("/api/newsletter", { email: "Other.Person@Example.org", lang: "de", source: "popup" });
  check("a second address subscribes", secondSubscriber.status === 201, secondSubscriber);

  const subscribers = await call("/api/admin/newsletter", { headers: authHeaders });
  const subRows: { id: string; email: string; lang?: string; source: string; contactId?: string }[] = subscribers.body?.data ?? [];
  const reader = subRows.find((r) => r.id === subscriberId);
  check(
    "admin list has the address lower-cased, filed under a contact, and never the bot",
    subRows.length === 2 &&
      reader?.email === "news.reader@example.com" &&
      reader?.lang === "ar" &&
      reader?.source === "footer" &&
      !!reader?.contactId &&
      !subRows.some((r) => r.email === "bot@example.com"),
    subRows
  );
  const subscriberContact = await call(`/api/admin/contacts/${reader?.contactId}`, { headers: authHeaders });
  check(
    "the subscriber's contact carries the newsletter source and a timeline entry",
    subscriberContact.body?.data?.contact?.sources?.includes("newsletter") &&
      subscriberContact.body?.data?.contact?.emails?.includes("news.reader@example.com") &&
      subscriberContact.body?.data?.contact?.visitorIds?.includes("newsletter-visitor-1") &&
      subscriberContact.body?.data?.activities?.some((a: { type: string }) => a.type === "newsletter"),
    subscriberContact.body?.data
  );
  const subscriberSearch = await call("/api/admin/newsletter?q=other.person", { headers: authHeaders });
  check(
    "subscribers can be searched by email",
    subscriberSearch.body?.data?.length === 1 && subscriberSearch.body.data[0].email === "other.person@example.org",
    subscriberSearch.body?.data
  );

  const csvRes = await fetch(`${base}/api/admin/newsletter?format=csv`, { headers: authHeaders });
  // Raw bytes: `Response.text()` (and TextDecoder by default) strip a leading
  // BOM, which is exactly the byte this checks for.
  const csvBytes = new Uint8Array(await csvRes.arrayBuffer());
  const csvHasBom = csvBytes[0] === 0xef && csvBytes[1] === 0xbb && csvBytes[2] === 0xbf;
  const csv = new TextDecoder().decode(csvBytes);
  const csvLines = csv.split("\r\n");
  check(
    "CSV export has the right headers, a BOM, and every subscriber",
    csvRes.headers.get("content-type") === "text/csv; charset=utf-8" &&
      csvRes.headers.get("content-disposition") === 'attachment; filename="subscribers.csv"' &&
      csvHasBom &&
      csvLines[0] === "email,lang,source,consentAt,unsubscribedAt,createdAt" &&
      csvLines.some((l) => l.startsWith("news.reader@example.com,ar,footer,")) &&
      csvLines.some((l) => l.startsWith("other.person@example.org,de,popup,")),
    { headers: Object.fromEntries(csvRes.headers), csv }
  );

  const newsletterAlerts = await call("/api/admin/notifications?limit=50", { headers: authHeaders });
  check(
    "a new subscriber raises an alert linked to the contact",
    (newsletterAlerts.body?.data ?? []).some(
      (n: { type: string; contactId?: string }) => n.type === "newsletter" && n.contactId === reader?.contactId
    ),
    (newsletterAlerts.body?.data ?? []).map((n: { type: string }) => n.type)
  );

  const removedReader = await call(`/api/admin/newsletter/${subscriberId}`, { method: "DELETE", headers: authHeaders });
  const removedOther = await call(`/api/admin/newsletter/${subscriberSearch.body?.data?.[0]?.id}`, {
    method: "DELETE",
    headers: authHeaders,
  });
  const afterRemove = await call("/api/admin/newsletter", { headers: authHeaders });
  check(
    "subscribers can be removed",
    removedReader.status === 200 && removedOther.status === 200 && afterRemove.body?.data?.length === 0,
    afterRemove.body?.data
  );
  const removeMissing = await call("/api/admin/newsletter/000000000000000000000000", { method: "DELETE", headers: authHeaders });
  check("removing an unknown subscriber is a 404", removeMissing.status === 404, removeMissing);
  const newsletterNoAuth = await call("/api/admin/newsletter");
  check("the subscriber list requires auth", newsletterNoAuth.status === 401, newsletterNoAuth);
}
