import { randomBytes } from "node:crypto";
import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { quoteTotals } from "../quote-math.js";
import { addActivity, updateContact } from "./contacts.service.js";
import { notify } from "./notify.service.js";
import type { Quote, QuoteLineItem, QuoteSettings, QuoteStatus } from "../types.js";

const LANGS = ["en", "ar", "de", "fr"];
const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : undefined);

function lineItems(raw: unknown): QuoteLineItem[] {
  if (!Array.isArray(raw)) throw AppError.badRequest("lineItems must be a list");
  if (raw.length > 50) throw AppError.badRequest("A quote can have at most 50 lines.");
  return raw.map((l, i) => {
    const description = text(l?.description, 300);
    const qty = Number(l?.qty);
    const unitPrice = Number(l?.unitPrice);
    if (!description) throw AppError.badRequest(`Line ${i + 1} needs a description.`);
    if (!Number.isFinite(qty) || qty < 0 || qty > 1e6) throw AppError.badRequest(`Line ${i + 1}: quantity is not valid.`);
    if (!Number.isFinite(unitPrice) || unitPrice < 0 || unitPrice > 1e9) throw AppError.badRequest(`Line ${i + 1}: price is not valid.`);
    return { description, qty, unitPrice };
  });
}

/** Whether the link has run out: only quotes still waiting on the client expire. */
function effectiveStatus(q: Quote, now = Date.now()): QuoteStatus {
  if ((q.status === "sent" || q.status === "viewed") && q.validUntil && Date.parse(q.validUntil) < now) return "expired";
  return q.status;
}

function withTotals<T extends Quote>(q: T) {
  return { ...q, status: effectiveStatus(q), totals: quoteTotals(q.lineItems ?? [], q.discountType, q.discountValue, q.taxRate) };
}

/** Shared by create and update: every editable field, validated. */
async function editable(input: Record<string, unknown>, partial: boolean): Promise<Partial<Quote>> {
  const out: Partial<Quote> = {};
  if (!partial || "title" in input) {
    const title = text(input.title, 150);
    if (!title) throw AppError.badRequest("Give the quote a title.");
    out.title = title;
  }
  if ("contactId" in input) {
    if (input.contactId && !(await repos.contacts.get(String(input.contactId)))) throw AppError.badRequest("Unknown contact.");
    out.contactId = input.contactId ? String(input.contactId) : undefined;
  }
  if ("language" in input) {
    if (!LANGS.includes(String(input.language))) throw AppError.badRequest("Unknown language.");
    out.language = String(input.language);
  }
  if ("currency" in input) {
    if (typeof input.currency !== "string" || !/^[A-Z]{3}$/.test(input.currency)) throw AppError.badRequest("Currency must be a 3-letter code.");
    out.currency = input.currency;
  }
  if ("lineItems" in input) out.lineItems = lineItems(input.lineItems);
  if ("discountType" in input) out.discountType = input.discountType === "amount" ? "amount" : "percent";
  if ("discountValue" in input) out.discountValue = Math.max(0, Number(input.discountValue) || 0);
  if ("taxRate" in input) out.taxRate = Math.min(100, Math.max(0, Number(input.taxRate) || 0));
  if ("notes" in input) out.notes = text(input.notes, 5000);
  if ("validUntil" in input) {
    if (!input.validUntil) out.validUntil = undefined;
    else {
      const d = new Date(String(input.validUntil));
      if (Number.isNaN(d.getTime())) throw AppError.badRequest("Invalid validity date.");
      out.validUntil = d.toISOString();
    }
  }
  return out;
}

export async function createQuote(input: Record<string, unknown>) {
  const { quotes: defaults } = await repos.crmSettings.get();
  const fields = await editable(input, false);
  const now = new Date();
  const year = now.getUTCFullYear();
  const seq = await repos.crmSettings.nextSeq(`quote-${year}`);
  const q: Quote = {
    number: `KF-${year}-${String(seq).padStart(4, "0")}`,
    token: randomBytes(24).toString("base64url"),
    title: fields.title!,
    contactId: fields.contactId,
    language: fields.language ?? "en",
    currency: fields.currency ?? defaults?.defaultCurrency ?? "EGP",
    lineItems: fields.lineItems ?? [],
    discountType: fields.discountType ?? "percent",
    discountValue: fields.discountValue ?? 0,
    taxRate: fields.taxRate ?? defaults?.defaultTaxRate ?? 0,
    notes: fields.notes,
    validUntil: fields.validUntil ?? new Date(now.getTime() + (defaults?.defaultValidDays ?? 14) * 86400000).toISOString(),
    status: "draft",
    total: 0,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  };
  q.total = quoteTotals(q.lineItems, q.discountType, q.discountValue, q.taxRate).total;
  return withTotals(await repos.quotes.create(q));
}

export async function updateQuote(id: string, input: Record<string, unknown>) {
  const existing = await repos.quotes.get(id);
  if (!existing) throw AppError.notFound("Quote not found");
  if (existing.status === "accepted" || existing.status === "declined") {
    throw AppError.badRequest("This quote has been answered — duplicate it to change it.");
  }
  const patch = await editable(input, true);
  const merged = { ...existing, ...patch };
  patch.total = quoteTotals(merged.lineItems, merged.discountType, merged.discountValue, merged.taxRate).total;
  patch.updatedAt = new Date().toISOString();
  return withTotals((await repos.quotes.update(id, patch))!);
}

export async function listQuotes(query: Record<string, unknown>) {
  const quotes = await repos.quotes.list({
    status: text(query.status, 20),
    contactId: text(query.contactId, 40),
    limit: Math.min(Number(query.limit) || 300, 1000),
  });
  const names = await repos.contacts.namesFor([...new Set(quotes.map((q) => q.contactId).filter((x): x is string => !!x))]);
  return quotes.map((q) => ({ ...q, status: effectiveStatus(q), contactName: q.contactId ? names[q.contactId] : undefined }));
}

export async function getQuote(id: string) {
  const q = await repos.quotes.get(id);
  if (!q) throw AppError.notFound("Quote not found");
  return withTotals(q);
}

export async function deleteQuote(id: string) {
  await repos.quotes.delete(id);
  return { id };
}

/** "Mark as sent" (or copying the link / sending on WhatsApp). Moves an early-stage contact to Proposal. */
export async function markQuoteSent(id: string, by: string) {
  const q = await repos.quotes.get(id);
  if (!q) throw AppError.notFound("Quote not found");
  if (q.status !== "draft") return withTotals(q);
  const updated = await repos.quotes.update(id, { status: "sent", sentAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  if (q.contactId) {
    await addActivity(q.contactId, "quote_sent", `Quote ${q.number} sent: ${q.title}`, { quoteId: id, total: q.total, currency: q.currency }, by);
    const contact = await repos.contacts.get(q.contactId);
    if (contact && (contact.stage === "new" || contact.stage === "qualified")) await updateContact(q.contactId, { stage: "proposal" }, by);
  }
  return withTotals(updated!);
}

/** What the client's page shows. No internal fields, no contact details. */
function publicView(q: Quote, company: QuoteSettings | undefined) {
  const { token, contactId, ...rest } = q;
  void token;
  void contactId;
  return { ...withTotals(rest as Quote), company };
}

export async function viewQuoteByToken(token: string) {
  const q = await repos.quotes.byToken(token);
  if (!q) throw AppError.notFound("This quote link is not valid.");
  const { quotes: company } = await repos.crmSettings.get();
  const status = effectiveStatus(q);
  let current: Quote = q;
  // The first open counts as "viewed" (a draft opened from a copied link counts as sent too).
  if (status === "draft" || status === "sent") {
    const now = new Date().toISOString();
    current = (await repos.quotes.update(q.id, { status: "viewed", viewedAt: now, sentAt: q.sentAt ?? now, updatedAt: now }))!;
    if (q.contactId) await addActivity(q.contactId, "quote_viewed", `Opened quote ${q.number}`, { quoteId: q.id });
    await notify({
      type: "quote_viewed",
      title: `Quote ${q.number} was opened`,
      body: q.title,
      link: `/quotes/${q.id}`,
      contactId: q.contactId,
    });
  }
  return publicView(current, company);
}

async function answerable(token: string) {
  const q = await repos.quotes.byToken(token);
  if (!q) throw AppError.notFound("This quote link is not valid.");
  const status = effectiveStatus(q);
  if (status === "expired") throw new AppError(409, "QUOTE_EXPIRED", "This quote has expired. Ask us for an updated one.");
  if (status === "accepted" || status === "declined") throw new AppError(409, "QUOTE_ANSWERED", "This quote has already been answered.");
  return q;
}

export async function acceptQuote(token: string, name: unknown) {
  const q = await answerable(token);
  const signer = text(name, 80);
  if (!signer || signer.length < 2) throw AppError.badRequest("Type your full name to accept.");
  const now = new Date().toISOString();
  const updated = await repos.quotes.update(q.id, { status: "accepted", acceptedAt: now, acceptedBy: signer, updatedAt: now });
  if (q.contactId) {
    await addActivity(q.contactId, "quote_accepted", `Accepted quote ${q.number} (signed "${signer}")`, { quoteId: q.id, total: q.total, currency: q.currency });
    await updateContact(q.contactId, { stage: "won", value: q.total, currency: q.currency }, "system");
  }
  await notify({
    type: "quote_accepted",
    title: `Quote ${q.number} accepted 🎉`,
    body: `${signer} accepted "${q.title}" — ${q.total.toLocaleString("en-US")} ${q.currency}`,
    link: `/quotes/${q.id}`,
    contactId: q.contactId,
  });
  const { quotes: company } = await repos.crmSettings.get();
  return publicView(updated!, company);
}

export async function declineQuote(token: string, reason: unknown) {
  const q = await answerable(token);
  const why = text(reason, 500);
  const now = new Date().toISOString();
  const updated = await repos.quotes.update(q.id, { status: "declined", declinedAt: now, declineReason: why, updatedAt: now });
  if (q.contactId) await addActivity(q.contactId, "quote_declined", `Declined quote ${q.number}${why ? `: ${why}` : ""}`, { quoteId: q.id });
  await notify({
    type: "quote_declined",
    title: `Quote ${q.number} declined`,
    body: why ? `${q.title} — "${why}"` : q.title,
    link: `/quotes/${q.id}`,
    contactId: q.contactId,
  });
  const { quotes: company } = await repos.crmSettings.get();
  return publicView(updated!, company);
}
