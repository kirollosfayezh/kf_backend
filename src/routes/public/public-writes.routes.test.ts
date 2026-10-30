import { test } from "node:test";
import assert from "node:assert/strict";
import { installFakeRepos } from "../../testing/fake-repos.js";
import { serveRouter } from "../../testing/http.js";
import { publicLeadsRouter } from "./leads.routes.js";
import { publicNewsletterRouter } from "./newsletter.routes.js";

/**
 * HTTP-level checks of the two public form endpoints: real router, real
 * schema, real service, in-memory repositories.
 */

const quiet = (t: import("node:test").TestContext) => t.mock.method(console, "error", () => {});

test("POST /leads: the Contact form's payload is stored and filed under a contact", async (t) => {
  const store = installFakeRepos(t);
  const api = await serveRouter(t, "/leads", publicLeadsRouter);

  const res = await api.post("/leads", {
    source: "contact",
    name: "  Test Visitor ",
    email: " visitor@example.com ",
    phone: "+20 101 234 5678",
    company: "Acme",
    projectType: "POS",
    budget: "5k-10k",
    message: "I need a POS system",
    visitorId: "v-1",
  });

  assert.equal(res.status, 201);
  assert.equal(res.body.success, true);
  const lead = store.leads[0];
  assert.equal(lead.name, "Test Visitor", "trimmed");
  assert.equal(lead.email, "visitor@example.com", "trimmed");
  assert.equal(lead.phone, "+201012345678", "normalised to E.164");
  assert.equal(lead.status, "new");
  assert.equal(store.contacts.length, 1);
  assert.equal(lead.contactId, store.contacts[0].id);
  assert.deepEqual(store.linkedVisitors, [{ visitorIds: ["v-1"], contactId: store.contacts[0].id }]);
  assert.equal(store.notifications[0].type, "lead");
});

test("POST /leads: the Campaign form's minimal payload is accepted", async (t) => {
  const store = installFakeRepos(t);
  const api = await serveRouter(t, "/leads", publicLeadsRouter);
  const res = await api.post("/leads", { source: "campaign", name: "Sara", email: "s@example.com", message: "3 branches" });
  assert.equal(res.status, 201);
  assert.equal(store.leads[0].source, "campaign");
  assert.match(String(store.notifications[0].title), /^New campaign lead: Sara$/);
});

test("POST /leads: a bad source is a 400 in the standard envelope and nothing is stored", async (t) => {
  const store = installFakeRepos(t);
  const api = await serveRouter(t, "/leads", publicLeadsRouter);
  const res = await api.post("/leads", { source: "chat", name: "A", email: "a@b.co", message: "m" });
  assert.equal(res.status, 400);
  assert.deepEqual(res.body.errors, [{ code: "BAD_REQUEST", message: 'source must be "contact" or "campaign"' }]);
  assert.equal(store.leads.length, 0);
});

test("POST /leads: the service's required-field messages still reach the form", async (t) => {
  installFakeRepos(t);
  const api = await serveRouter(t, "/leads", publicLeadsRouter);
  const cases: [Record<string, unknown>, string][] = [
    [{ source: "contact", email: "a@b.co", message: "m" }, "Name is required"],
    [{ source: "contact", name: "A", message: "m" }, "Email is required"],
    [{ source: "contact", name: "A", email: "a@b.co", message: "   " }, "Message is required"],
  ];
  for (const [body, message] of cases) {
    const res = await api.post("/leads", body);
    assert.equal(res.status, 400);
    assert.equal(res.body.errors[0].message, message);
  }
});

test("POST /leads: a CRM failure never costs the visitor their lead", async (t) => {
  quiet(t);
  const store = installFakeRepos(t, { failCrm: true });
  const api = await serveRouter(t, "/leads", publicLeadsRouter);
  const res = await api.post("/leads", { source: "contact", name: "A", email: "a@b.co", message: "m" });
  assert.equal(res.status, 201);
  assert.equal(store.leads.length, 1);
  assert.equal(store.contacts.length, 0);
  assert.equal(store.notifications[0].link, "/inbox", "no contact, so the alert links to the inbox");
});

test("POST /newsletter: a new address is 201, the same address again is 200 and not a duplicate", async (t) => {
  const store = installFakeRepos(t);
  const api = await serveRouter(t, "/newsletter", publicNewsletterRouter);

  const first = await api.post("/newsletter", { email: "News.Reader@Example.com", source: "footer", lang: "ar", visitorId: "v1" });
  assert.equal(first.status, 201);
  assert.deepEqual(first.body.data, { id: store.subscribers[0].id, created: true });
  assert.equal(store.subscribers[0].email, "news.reader@example.com", "lower-cased");

  const again = await api.post("/newsletter", { email: "news.reader@example.com", source: "article" });
  assert.equal(again.status, 200);
  assert.equal((again.body.data as { created: boolean }).created, false);
  assert.equal(store.subscribers.length, 1);
  assert.equal(store.notifications.filter((n) => n.type === "newsletter").length, 1, "one alert, for the first sign-up only");
});

test("POST /newsletter: the honeypot answers 201 and stores nothing", async (t) => {
  const store = installFakeRepos(t);
  const api = await serveRouter(t, "/newsletter", publicNewsletterRouter);
  const res = await api.post("/newsletter", { email: "bot@example.com", website: "http://spam.example" });
  assert.equal(res.status, 201);
  assert.deepEqual(res.body.data, { created: true });
  assert.equal(store.subscribers.length, 0);
  assert.equal(store.notifications.length, 0);
});

test("POST /newsletter: an invalid address is a 400 with the form's message", async (t) => {
  installFakeRepos(t);
  const api = await serveRouter(t, "/newsletter", publicNewsletterRouter);
  for (const email of ["not-an-email", "", 42, undefined]) {
    const res = await api.post("/newsletter", { email });
    assert.equal(res.status, 400, String(email));
    assert.equal(res.body.errors[0].message, "Enter a valid email address.");
  }
});

test("POST /newsletter: an unknown source falls back to footer", async (t) => {
  const store = installFakeRepos(t);
  const api = await serveRouter(t, "/newsletter", publicNewsletterRouter);
  await api.post("/newsletter", { email: "a@example.com", source: "somewhere-else" });
  assert.equal(store.subscribers[0].source, "footer");
});
