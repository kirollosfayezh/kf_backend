---
title: ZATCA API integration: a checklist for developers
summary: Onboarding and CSIDs, UBL 2.1 XML, clearance versus 24-hour reporting, the QR code and the hash chain: what your team must build for FATOORA.
tag: Business Systems
tags: ZATCA, FATOORA, API integration, e-invoicing, UBL 2.1, developers, Saudi Arabia
order: 49
media: https://images.unsplash.com/photo-1674386491555-5b92161e4d04
alt: Riyadh seen from above, with office towers along a wide avenue through low-rise districts
caption: In Phase 2, each invoice is stamped, chained to the one before it and sent to ZATCA as XML through its API.
stats: 128-bit|UUID carried by every invoice; 9|TLV tags in the Phase 2 QR code, base64-encoded; 24 h|to report each simplified invoice to FATOORA
---

Integrating with ZATCA's FATOORA platform means onboarding each invoicing device or server as an "E-Invoice Generation Solution" (EGS) with its own Cryptographic Stamp Identifier (CSID), generating every invoice as UBL 2.1 XML, and sending that XML through ZATCA's API. Tax invoices go for real-time clearance before the buyer receives them, while simplified invoices are stamped by your own system and reported within 24 hours. This checklist takes an in-house team through each piece, whatever language you build in.

Last checked: 6 November 2026

This is general technical information, not tax or legal advice. ZATCA's own documents, listed under Sources, are the reference. Where this page and ZATCA disagree, follow ZATCA.

## Before you write code: scope and source documents

Phase 1 (generation) has applied to all taxpayers except non-residents since 4 December 2021. Phase 2 (integration) started on 1 January 2023 and is rolled out in waves, and ZATCA announces each wave at least six months before its date. Wave 25, covering VAT-able revenue above SAR 187,500 in any year from 2022 to 2025, must integrate with FATOORA by 1 Feb 2027. Our [Wave 25 guide](/blog/zatca-wave-25-e-invoicing) covers the business side of that deadline.

Before the first commit, settle four things:

- **Which documents you issue.** Tax invoices (usually B2B and B2G), simplified invoices (usually B2C), and the credit and debit notes linked to them.
- **What counts as one EGS unit.** Each unit is onboarded separately and keeps its own invoice chain, so decide early whether a unit is a till, a branch server or a central service.
- **Who issues the invoices.** ZATCA's guideline covers taxable persons resident in Saudi Arabia, plus third parties that issue invoices on their behalf.
- **Your reference documents.** Read ZATCA's E-Invoicing Detailed Guidelines and the XML Implementation Standard before you design a single table.

## Onboarding each EGS unit and managing the CSID

Invoices must come from an onboarded EGS. Each unit is onboarded through the FATOORA portal, which issues its CSID and can later renew or revoke it. That gives you three lifecycle events to build for, not one:

- **Issue.** Keep the CSID and its key material in a secrets store, never in source code, in a config file in the repository or in the POS database.
- **Renew.** Treat renewal as a scheduled job with alerts, so no unit stops invoicing on a busy day.
- **Revoke.** When a device is lost, replaced or retired, revoke its CSID and make sure the software stops issuing from that unit at once.
- **Track.** Keep a register of every EGS unit, its CSID status and the last invoice it issued, and show it in your admin panel.

The first point is ordinary security practice rather than a ZATCA rule, but a leaked stamp key is hard to explain to a tax authority.

## Building the invoice XML

Anything sent to ZATCA must be XML sent through an API. The XML follows the UBL 2.1 structure, with validation rules based on the European standard EN 16931, as set out in ZATCA's XML Implementation Standard. The invoice itself can be the XML, or a PDF/A-3 file with the XML embedded.

- **Generate from data, not from a print layout.** Build the XML from the sale record, then render the readable invoice from the same data, so the two cannot drift apart.
- **Arabic on the readable copy.** The human-readable invoice must be in Arabic, and other languages may be added beside it. Arabic or Hindi numerals both count as Arabic.
- **Validate before you send.** Run every document type through ZATCA's testing toolkit during development, and keep automated tests for each one in your build.
- **Keep the exact document.** Store the XML exactly as it was stamped and sent. Regenerating or reformatting it later can change its hash.

## Clearance and reporting: two API flows

Phase 2 has two flows, and your code must route each document to the right one.

| | Tax invoice (usually B2B/B2G) | Simplified invoice (usually B2C) |
|---|---|---|
| Who stamps it | ZATCA, during clearance | Your EGS, with its CSID |
| Who adds the QR code | ZATCA | Your EGS (9 tags, TLV, base64) |
| When ZATCA receives it | Before the buyer gets it | Within 24 hours of issue |
| What the buyer gets | The cleared XML that ZATCA returns | A printed copy at once, or an electronic one if both sides agree |
| If ZATCA cannot be reached | Keep retrying; in an outage ZATCA's guidelines allow sharing the uncleared invoice, then the cleared one | Queue it, keep retrying, and notify ZATCA if the 24 hours pass |

For a tax invoice, the cleared XML that comes back is the invoice: store it and give the buyer that version, not the one you submitted. The same clearance applies to the credit and debit notes related to tax invoices.

Around the two calls, build these:

- **A router** that picks clearance or reporting from the document type, never from a choice a cashier makes on screen.
- **Retries that are safe to repeat**, so one invoice with one UUID never becomes two invoices in your records.
- **A status for every document** (created, sent, cleared or reported, rejected) that finance staff can see without asking a developer.
- **A path for rejected documents.** Invoices cannot be cancelled: fix the error and submit a new document with its own counter value and hash, never by editing stored XML.

## The stamp, the QR code and anti-tampering rules

Several of ZATCA's controls live in your data model rather than in the API call:

- **UUID.** Every invoice carries a 128-bit UUID. Generate it once, when the invoice is created, and never again on a retry.
- **Previous-invoice hash.** Each invoice includes the hash of the previous one, forming one chain per EGS unit. Two processes writing to the same chain at once will break it, so create invoices one at a time per unit.
- **Counter.** The invoice counter cannot be reset. Plan how the counter and the chain survive a reinstall, a hardware swap or a database restore.
- **System date.** Users must not be able to change the system date.
- **Stored XML.** Users cannot delete or edit stored XML, so do not build an edit or delete action for issued invoices into any role.
- **Logs.** Logs are time-stamped, and attempts at tampering must be detectable. Append-only logs make that far easier.
- **QR code.** On simplified invoices your EGS adds the Phase 2 QR code, with 9 tags in TLV format, encoded in base64. Test that it prints and scans on the receipt printers your branches really use.

These rules carry weight. In the penalties ZATCA published on 16 November 2021, fines start at SAR 5,000 for not issuing e-invoices and at SAR 10,000 for deleting or amending an e-invoice after issue, while a missing QR code first draws a warning. Fines then depend on the violation and how often it repeats.

## Offline mode and the 24-hour window

Shops lose their internet connection, and FATOORA can be unreachable. Simplified invoices cope with this by design: your EGS stamps the invoice locally, the customer gets the printed copy, and the XML waits in a queue that must reach FATOORA within 24 hours.

- **Write before you print.** Save each simplified invoice to a durable local queue before the receipt prints, so a crash cannot lose it.
- **Send in issue order.** Keep the chain intact and never rebuild it to fill a gap.
- **Alert early.** Raise an alert when the oldest unreported invoice is a few hours old, not when the 24 hours are nearly over. If the window is missed, ZATCA's guidelines say to notify it through the form on its website.
- **Make the queue visible.** Show its size and age on the till and in the back office.

Tax invoices are different. They must normally be cleared before the buyer receives them. For outages, ZATCA's Detailed Guidelines describe a fallback: keep retrying, and if ZATCA stays unreachable, share the uncleared invoice, keep records and send the cleared one once clearance succeeds. If the failure is on your side, notify ZATCA through its online form. Build this as an explicit, logged path.

## Testing and go-live checklist

1. List every document type you issue, with its flow: clearance or reporting.
2. Define your EGS units and how each one's chain and counter survive a restore or a device swap.
3. Generate XML from structured data and pass ZATCA's testing toolkit for every document type.
4. Build CSID issue, renewal and revocation, with keys kept out of the code.
5. Store the XML you send and the response you receive for every document.
6. Build the offline queue, with alerts well before the 24-hour limit.
7. Lock the system date, issued XML and logs against edits.
8. Check the Arabic invoice and the printed QR code on real printers.
9. Rehearse a lost connection, a rejected document and a revoked CSID before go-live.

A note on vendors and badges: ZATCA does not certify software. Its Solution Providers Directory is a guiding list that "is not considered as an approval by ZATCA", and taxpayers may use any compliant solution, including one built in-house. Judge a connector by what it does in testing, not by a logo.

For the same project from the business owner's side, read [ZATCA Phase 2 integration for your own POS or ERP](/blog/zatca-phase-2-integration-custom-pos-erp). Once e-invoicing works, the same API discipline helps with [connecting the systems you already run](/blog/api-integration-connecting-business-systems).

**Where KF Tech Solutions fits.** We build APIs and backends through our [API and backend development](/services/api-and-backend) service, and we have integrated a POS with [Egypt's ETA e-receipt system](/projects/egypt-eta), another government platform built on signed, validated invoices ([how that integration works](/blog/eta-e-invoicing-pos-integration)). We work with businesses in Egypt and the Gulf (see our [Saudi Arabia page](/saudi-arabia)), and can build the connector with your team or review an existing one against this checklist.

## Common questions

### Does ZATCA certify or approve integration software?

No. ZATCA's Solution Providers Directory is a guiding list that is not legally binding on taxpayers and, in ZATCA's words, "is not considered as an approval by ZATCA". Taxpayers may use any compliant solution.

### Can we build the integration in C#, Laravel or another stack?

Yes. ZATCA specifies XML, a cryptographic stamp, a QR code and an API, not a programming language. Any stack that can build and validate UBL 2.1 XML, compute hashes, sign documents and call an HTTPS API can do the job, and C#/.NET and PHP/Laravel both can. Choose the stack your team already maintains.

### Does each device need its own CSID?

Each EGS unit is onboarded on its own, with its own CSID and its own invoice hash chain. Whether a unit is each till or one server per branch is a design choice to settle against ZATCA's guidelines before you onboard anything.

### Can we send PDF invoices to ZATCA?

No. What you send to ZATCA must be XML through the API. The buyer's copy can be the XML or a PDF/A-3 with the XML embedded, and its readable content must be in Arabic.

### What happens to simplified invoices when the internet is down?

Your system keeps stamping and printing them, queues the XML and reports it once the connection is back, within 24 hours; if that fails, notify ZATCA. For tax invoices, see the outage fallback above.

Building this in-house and want a second opinion on the design? [Book a call](/book) or [send us your current setup](/contact), and we will tell you plainly what we would change.

## Sources

- [ZATCA: What is e-invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: Roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: E-Invoicing Detailed Guidelines (PDF)](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Electronic Invoice XML Implementation Standard (PDF)](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA: Wave 25 of e-invoicing integration](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA: E-invoicing violations and fines (16 November 2021)](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
