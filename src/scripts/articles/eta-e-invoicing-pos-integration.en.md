---
title: Connecting your POS to Egypt's ETA e-invoicing system
summary: What the integration actually involves, where it usually breaks, and how to tell whether your current system can be made compliant or needs replacing.
tag: Business Systems
tags: ETA, e-invoicing, e-receipt, POS, compliance
order: 1
media: https://images.unsplash.com/photo-1556742049-0cfed4f6a45d
alt: A point-of-sale terminal printing a receipt
caption: Every receipt a POS prints is a document the tax authority expects to receive a signed copy of.
stats: 4-6 weeks|typical integration time for an existing POS; 3|separate systems most businesses discover they need to connect; 0 EGP|cost of the ETA portal itself
---

Most owners meet Egypt's e-invoicing rules the same way: an accountant forwards a
circular, the POS vendor says "we support it", and six weeks later nobody can
explain why half the receipts are being rejected.

The rules themselves are not the hard part. The hard part is that compliance is a
software integration, and it exposes every shortcut your current system took.

## What the ETA system actually is

The Egyptian Tax Authority runs two related systems, and businesses routinely
confuse them:

- **E-invoicing** (الفاتورة الإلكترونية) covers business-to-business and
  business-to-government sales. Each invoice is submitted as a structured
  document, signed, and returned with a unique identifier.
- **E-receipt** (الإيصال الإلكتروني) covers business-to-consumer sales — the
  receipts a shop, café or pharmacy hands to a walk-in customer. These come from
  registered POS devices and are submitted in near real time.

If you sell to consumers over a counter, e-receipt is the one that touches your
POS. If you also invoice companies, you need both, and they are not the same
integration.

> The phased rollout has moved several times and is set by taxpayer group.
> Confirm which phase and which deadline applies to your registration number with
> your accountant or the Authority directly — do not take a date from a vendor's
> marketing page.

## The five things an integration has to do

Whatever you buy or build, the work is the same five steps.

1. **Register.** The business is enrolled on the Authority's portal and issued
   credentials. POS devices are registered individually for e-receipt.
2. **Obtain a signing credential.** Documents are cryptographically signed. In
   practice this means an e-seal — a hardware token or an HSM — held by the
   business.
3. **Map your catalogue to official codes.** Every item you sell needs a
   recognised code, and every line needs the correct tax type and subtype. This
   is where most of the effort goes.
4. **Build the document and sign it.** The document is serialised into a precise
   canonical form before signing. Get a single character of that wrong and the
   signature is valid but the document is rejected.
5. **Submit and reconcile.** Send it, store the identifier that comes back, and
   have a plan for the ones that fail.

Step five is the one that gets skipped, and it is the one that hurts. A system
that submits but never reconciles will quietly accumulate rejected documents for
months.

## Where integrations actually fail

| What breaks | Why it happens | What it looks like |
|---|---|---|
| Item coding | The catalogue was built for the shop floor, not for a tax code table | Rejections on a subset of products, seemingly at random |
| Tax subtype | The right tax type with the wrong subtype | Whole categories rejected while everything else passes |
| Canonicalisation | The document was changed after signing, or serialised inconsistently | "Invalid signature" on documents that look correct |
| Token expiry | Nobody owns the renewal | Everything works for months, then stops on one specific day |
| Timestamps | Local time submitted where the format expects otherwise | Off-by-hours errors, worse around clock changes |
| No retry queue | The integration assumed the network is always up | Silent gaps in the record, found at audit |

None of these are exotic. All of them are cheap to handle at build time and
expensive to handle after a year of bad data.

## Can your current POS be made compliant?

Three honest questions:

**Does it have an API or an export you can read?** If the only way to get a sale
out of the system is a printed report, the answer is no, and no amount of
middleware fixes that.

**Does it store the fields the Authority wants?** Buyer tax registration number
for B2B, item codes, tax breakdown per line. A POS that stores a single "total"
per sale cannot produce a compliant document, because the information was never
captured.

**Can it be changed?** Plenty of businesses run a system whose vendor has
disappeared. Working software you cannot modify is a wall, not an asset.

If all three answers are yes, integration is usually a four-to-six week project
against an existing system. If any is no, you are replacing the POS, and the
compliance deadline is the reason rather than the project.

## Build, buy, or bridge

| Approach | Best when | Trade-off |
|---|---|---|
| **Vendor module** — your POS supplier ships compliance | Your POS is current and the vendor is active | You inherit their roadmap and their timeline |
| **Middleware bridge** — a service sits between POS and Authority | The POS works but cannot be modified | Ongoing per-document cost; another system to keep alive |
| **Direct integration** — built into your own system | You already run custom software, or are replacing the POS anyway | Higher up-front cost, no recurring per-document fee |

There is no universally right answer. The one consistently wrong answer is
waiting for the vendor to announce something while the deadline approaches.

## What to do first

Not a demo. Before you talk to anyone, export three months of sales and check
whether each line has: an item code, a tax breakdown, and — for anything sold to
a company — the buyer's tax registration number.

If those three fields are present and accurate, you have an integration project.
If they are not, you have a data project first, and every quote you receive
before fixing that will be wrong.

## Common questions

### Does this apply to a small business?

The phases are defined by taxpayer group rather than by size alone, and the scope
has widened over time. Check your own registration rather than assuming a
threshold protects you.

### Can we keep using our existing printer?

Usually yes. E-receipt changes what gets submitted, not what gets printed, though
the printed receipt normally has to carry the returned identifier.

### What happens to sales made while the internet is down?

A compliant integration queues them and submits when the connection returns. If
your proposed solution has no answer to this question, it is not finished.

### How long does it take?

Four to six weeks is typical against a modern POS with a working API. The
variable is almost never the submission code — it is how long it takes to get the
product catalogue coded correctly.
