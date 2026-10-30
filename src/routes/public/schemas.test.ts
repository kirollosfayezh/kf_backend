import { test } from "node:test";
import assert from "node:assert/strict";
import { AppError } from "../../shared/errors/app-error.js";
import { parseBody } from "../../shared/http/validate.js";
import { isHoneypotFilled, leadBodySchema, newsletterBodySchema } from "./schemas.js";

/** The message `parseBody` would answer with, or null when the body passes. */
function rejection(schema: Parameters<typeof parseBody>[0], body: unknown): string | null {
  try {
    parseBody(schema, body);
    return null;
  } catch (err) {
    assert.ok(err instanceof AppError);
    assert.equal(err.statusCode, 400);
    assert.equal(err.code, "BAD_REQUEST");
    return err.message;
  }
}

// --- Leads: every payload the site's two forms send today must still pass ---

test("lead schema: the Contact page payload passes unchanged", () => {
  const body = {
    source: "contact",
    name: "Test Visitor",
    email: "visitor@example.com",
    phone: "+20 101 234 5678",
    company: "Acme",
    projectType: "POS",
    budget: "5k-10k",
    message: "I need a POS system",
    visitorId: "v-123",
  };
  assert.deepEqual(parseBody(leadBodySchema, body), body);
});

test("lead schema: the Campaign page payload (no company/budget) passes", () => {
  const body = { source: "campaign", name: "Sara", email: "s@example.com", projectType: "Business system / POS", message: "3 branches" };
  assert.deepEqual(parseBody(leadBodySchema, body), body);
});

test("lead schema: optional fields may be null, as the old `?.trim()` allowed", () => {
  const parsed = parseBody(leadBodySchema, { source: "contact", name: "A", email: "a@b.co", message: "m", phone: null, company: null });
  assert.equal(parsed.phone, null);
  assert.equal(parsed.company, null);
});

test("lead schema: a missing name/email/message is left for the service to reject with its own message", () => {
  // The route used to pass these straight through; "Name is required" etc. come from createLead.
  assert.equal(rejection(leadBodySchema, { source: "contact" }), null);
  assert.equal(rejection(leadBodySchema, { source: "contact", name: "", email: "", message: "" }), null);
});

test("lead schema: visitorId of any type is accepted (the service drops non-strings)", () => {
  for (const visitorId of [123, true, { nested: 1 }, null]) {
    assert.equal(rejection(leadBodySchema, { source: "contact", name: "A", email: "a@b.co", message: "m", visitorId }), null);
  }
});

test("lead schema: unknown keys are stripped, not rejected", () => {
  const parsed = parseBody(leadBodySchema, { source: "contact", name: "A", email: "a@b.co", message: "m", status: "won", contactId: "x" });
  assert.equal("status" in parsed, false);
  assert.equal("contactId" in parsed, false);
});

test("lead schema: a missing or unknown source keeps the original error message", () => {
  const message = 'source must be "contact" or "campaign"';
  assert.equal(rejection(leadBodySchema, {}), message);
  assert.equal(rejection(leadBodySchema, { source: "chat", name: "A" }), message);
  assert.equal(rejection(leadBodySchema, { source: "CONTACT" }), message);
});

test("lead schema: a non-string text field is a 400 (it used to crash `.trim()` into a 500)", () => {
  assert.equal(rejection(leadBodySchema, { source: "contact", name: 42, email: "a@b.co", message: "m" }), "name must be text");
  assert.equal(rejection(leadBodySchema, { source: "contact", name: "A", email: ["a@b.co"], message: "m" }), "email must be text");
});

test("parseBody: a missing, null or array body reads as {} — the old `req.body ?? {}`", () => {
  const message = 'source must be "contact" or "campaign"';
  assert.equal(rejection(leadBodySchema, undefined), message);
  assert.equal(rejection(leadBodySchema, null), message);
  assert.equal(rejection(leadBodySchema, [{ source: "contact" }]), message);
});

// --- Newsletter: shape only; the service normalises every field ---

test("newsletter schema: the site's payload passes through untouched", () => {
  const body = { email: "News.Reader@Example.com", source: "footer", lang: "ar", visitorId: "v1", website: "" };
  assert.deepEqual(parseBody(newsletterBodySchema, body), body);
});

test("newsletter schema: any field types pass — validation stays in subscribe()", () => {
  assert.equal(rejection(newsletterBodySchema, { email: 5, source: "nope", lang: [], visitorId: {} }), null);
  assert.equal(rejection(newsletterBodySchema, {}), null);
  assert.equal(rejection(newsletterBodySchema, ["x"]), null);
});

test("honeypot: only a non-blank string counts as filled", () => {
  assert.equal(isHoneypotFilled("http://spam.example"), true);
  assert.equal(isHoneypotFilled("  x  "), true);
  for (const value of [undefined, null, "", "   ", 0, 1, true, {}, []]) {
    assert.equal(isHoneypotFilled(value), false, `${JSON.stringify(value)} is not a bot`);
  }
});
