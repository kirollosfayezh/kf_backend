---
title: ZATCA Phase 2 integration for your own POS or ERP
summary: Keep your own cashier system or ERP and still meet ZATCA Phase 2: onboarding, clearance, 24-hour reporting, the hash chain and a deadline checklist.
tag: Business Systems
tags: ZATCA, e-invoicing, FATOORA, POS, ERP, Saudi Arabia
order: 30
media: https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa
alt: Card payment terminal printing a long paper receipt on a plain orange background
caption: Under Phase 2, every invoice your POS issues must also reach ZATCA as XML: cleared first, or reported within 24 hours.
stats: 24 h|to report each simplified invoice to FATOORA; 1 Feb 2027|integration deadline for Wave 25 businesses; SAR 10,000|fine published in 2021 for deleting or amending an issued e-invoice
---

Yes, a Saudi business can keep its own cashier system or ERP under ZATCA Phase 2. Each unit that issues invoices has to be onboarded on ZATCA's FATOORA platform, produce invoices as UBL 2.1 XML, get every tax invoice cleared by ZATCA before the buyer receives it, and report every simplified invoice within 24 hours. You can get there in one of three ways: replace the system, put middleware in front of it, or build the connector into it.

Last checked: 6 November 2026

This guide is for owners who run a cashier program written for them, an ERP with custom modules, or an in-house system. It covers what Phase 2 asks of that system, how to choose a route, and what to check before your deadline. It is general information, not tax advice.

## What Phase 2 asks of your system

Phase 1, the generation phase, has applied since 4 December 2021 to all taxpayers except non-residents: invoices must be generated electronically, and a scanned or copied paper invoice does not count. Phase 2, the integration phase, adds a live connection to ZATCA. Your system no longer just prints invoices. It stamps them, sends them and keeps proof of what happened to each one.

ZATCA treats two kinds of invoice differently, and many businesses issue both:

| | Tax invoice | Simplified tax invoice |
|---|---|---|
| Usually used for | Sales to businesses and government (B2B, B2G) | Sales to consumers (B2C) |
| Integration model | Clearance, in real time | Reporting, within 24 hours |
| Who stamps it | ZATCA adds its cryptographic stamp and a QR code during clearance | Your system stamps it with its own CSID and adds a QR code with 9 tags |
| When the customer gets it | Only after ZATCA returns the cleared XML | Immediately, usually as a printed copy |
| Credit and debit notes | Cleared the same way | Reported the same way |

In practice, a shop counter can keep selling while the connection is slow, because simplified invoices are stamped locally and reported afterwards. A B2B invoice cannot reach the customer until ZATCA clears it, so clearance sits inside your invoicing workflow, not in a nightly batch.

## Who must integrate, and by when

Phase 2 started on 1 January 2023 and is rolled out in waves defined by VAT-able revenue. ZATCA notifies each wave at least six months before its date. The latest, Wave 25, covers businesses whose VAT-able revenue exceeded SAR 187,500 in any year from 2022 to 2025, and they must integrate with FATOORA by 1 February 2027. The details are in [ZATCA Wave 25: who must integrate by 1 February 2027](/blog/zatca-wave-25-e-invoicing).

| Wave | VAT-able revenue above | Integrate by |
|---|---|---|
| 22 | SAR 1 million | 31 December 2025 |
| 23 | SAR 750,000 | 1 January to 31 March 2026 |
| 24 | SAR 375,000 | 30 June 2026 |
| 25 | SAR 187,500 | 1 February 2027 |

If your revenue put you in an earlier wave, your date has already passed, and the work below is overdue rather than upcoming.

## Three routes for a system you already run

ZATCA does not certify software. Its Solution Providers Directory is described as a guiding list that is not legally binding on taxpayers and is not an approval by ZATCA, and taxpayers may use any compliant solution. That leaves you with an engineering decision, not a shopping one.

| Route | When it fits | What to watch |
|---|---|---|
| **Replace** the POS or ERP with a package that already handles Phase 2 | The current system has no API, no maintainer, or would need rewriting anyway | Data migration, retraining, and losing the custom workflows you built the system for |
| **Middleware**: a separate service receives invoice data from your system, builds the XML, stamps it and talks to ZATCA | Your system works and can export each sale reliably, but its code is hard to change | The middleware becomes part of your invoicing. If it is down, B2B invoices stop. It also cannot fix rules your system breaks, such as editing issued invoices |
| **Build the connector in**: your own system generates, stamps, submits and stores each invoice | You own the source code and have, or can hire, people who maintain it | More work up front, but every rule is enforced where the invoice is created |

Middleware is often sold as the quick fix. It is quick only if the system behind it already behaves the way Phase 2 expects. If cashiers can still edit a completed sale, a connector in front will faithfully submit bad data. The general trade-offs are in [custom software vs off-the-shelf](/blog/custom-software-vs-off-the-shelf-how-to-choose). For Phase 2, the deciding question is usually whether you control the code.

## What the connector actually does

Whichever route you take, the same jobs have to be done somewhere.

### Onboarding each invoicing unit

ZATCA calls the thing that issues invoices an E-Invoice Generation Solution (EGS). Each EGS unit is onboarded on the FATOORA portal, which issues its Cryptographic Stamp Identifier (CSID) and is also where a CSID is renewed or revoked.

So decide early where invoices are generated: on each till, or on a central server the tills call. Whatever generates and stamps invoices is what you onboard, renew and monitor. Changing it later is costly, so settle it before you build.

### Building the XML

Phase 2 invoices are XML following the UBL 2.1 structure, with validation rules based on the European standard EN 16931. They are generated as XML, or as PDF/A-3 with the XML embedded, but anything sent to ZATCA must be XML sent through an API. This is where older systems struggle: the XML needs data that a cashier screen never asked for, such as the VAT treatment of each line and, on tax invoices, the buyer's details.

### Stamping, the QR code and the hash chain

Every invoice carries a 128-bit UUID and the hash of the previous invoice. The hashes link all invoices from one EGS unit into a single chain, so their order cannot be changed later, and the invoice counter cannot be reset. For simplified invoices, your system applies the cryptographic stamp and generates the QR code itself, encoded as TLV in base64. For tax invoices, ZATCA does both during clearance and your system uses the cleared XML it gets back.

### Submitting, storing and reconciling

The connector sends tax invoices for clearance and simplified invoices for reporting, then records ZATCA's response against the sale. A rejected document should be visible to someone the same day, not discovered at the next audit. Every invoice, response and attempt is kept so it can be retrieved later.

The plumbing behind this, from webhooks to retry queues, is the same kind of work described in [connecting the systems you already run](/blog/api-integration-connecting-business-systems).

## The rules that break older cashier systems

The XML is the visible part of the work. The anti-tampering rules are the part that forces changes inside the system:

- **No editing or deleting stored invoices.** A mistake is corrected with a credit or debit note, not by changing the original. ZATCA's fines published in November 2021 list SAR 10,000 for deleting or amending an e-invoice after it is issued.
- **No changing the system date.** Users must not be able to put a different date on invoices.
- **No resetting the invoice counter.** Numbering continues without restarting.
- **Time-stamped logs.** Activity is logged with timestamps, and tampering attempts must be detectable.

Many cashier programs have a "void" button, a manager override after printing, or a way to restart the numbering. Each has to go, or be rebuilt as a credit-note flow.

Language is a rule too. The human-readable invoice must be in Arabic, and other languages may be added alongside it. Arabic or Hindi numerals both count as Arabic.

## When the internet or FATOORA is down

Phase 2 assumes a connection, and your design has to plan for losing it. For simplified invoices, the 24-hour reporting window gives room: the shop keeps selling, stamped invoices wait in a queue on the device or server, and the system keeps trying until FATOORA confirms each one. Tax invoices are harder, because they must be cleared before they go to the buyer. ZATCA's Detailed Guidelines describe what to do when its systems or yours are unavailable; build your fallback from that document. Not reporting a malfunction is also on ZATCA's published fines list, with a warning first.

In design terms, that means a durable queue that survives a restart, spaced retries, an alert well before any invoice nears the 24-hour limit, and a record of every attempt.

## A checklist before your deadline

1. Confirm your wave and date from ZATCA's notification, not from a vendor's marketing.
2. List every place that issues invoices: each till, the ERP, the online store, the delivery integration and any manual invoice book.
3. Check your data: seller and buyer VAT numbers, buyer details for tax invoices, the VAT treatment of every item, and Arabic item names.
4. Choose your route (replace, middleware or built-in) based on who controls the code.
5. Replace edit, void and delete functions with credit and debit notes.
6. Lock the system date and the invoice counter, and make the logs tamper-evident.
7. Build the queue, retries and alerts for reporting within 24 hours.
8. Test every document type with ZATCA's testing toolkit, including credit notes and offline sales.
9. Onboard each EGS unit on FATOORA and note when each CSID will need renewing.
10. Train cashiers and accountants on what changes: corrections, the printed QR code, and what to do when offline.

KF Tech Solutions builds POS, ERP and other [business systems](/services/business-systems), and we work with businesses in Egypt and the Gulf ([our page for Saudi businesses](/saudi-arabia)). Our closest related experience is in Egypt: we integrated a POS with the Egyptian Tax Authority's e-receipt system ([what that kind of work involves](/blog/eta-e-invoicing-pos-integration)). ZATCA's rules differ, but the engineering is similar: structured documents, signing, sequencing, queues and reconciliation. We start by reviewing the system you run today, then recommend replacing it, connecting it or building the connector in, and explain why.

## Common questions

### Does every till need its own CSID?

Each EGS unit is onboarded and gets its own CSID and its own hash chain. Whether a unit is each till or one central server depends on where your invoices are generated and stamped. Settle that design before you build, and check it against ZATCA's guidelines.

### Should we just buy a system from ZATCA's directory instead?

ZATCA does not certify software. Its Solution Providers Directory is a non-binding guiding list, not an approval. What matters is whether the system actually does onboarding, clearance, reporting and the anti-tampering rules.

### Can a cleared invoice be corrected?

Not by editing it. Stored invoices cannot be edited or deleted. You issue a credit or debit note instead, and it goes through clearance or reporting like the original.

### Our POS prints receipts in English. Is that a problem?

Yes. The human-readable invoice must be in Arabic, and English can appear alongside it. Plan Arabic item names, Arabic labels and a receipt layout that fits both languages, then test the printed result on the printers you actually use.

### What are the penalties if our system gets it wrong?

ZATCA's fines published on 16 November 2021 list SAR 5,000 for not issuing e-invoices and SAR 10,000 for deleting or amending one after issue. Some issues, such as a missing QR code, start with a warning. See [ZATCA e-invoicing penalties](/blog/zatca-e-invoicing-penalties) for more.

Not sure which route fits your system? [Book a free call](/book) and we will look at what you run today before anyone writes code.

## Sources

- [ZATCA: Wave 25 of e-invoicing integration (announced 24 July 2026)](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Wave 24 announcement](https://zatca.gov.sa/en/Pages/news-1426.aspx)
- [ZATCA: Wave 22 announcement](https://zatca.gov.sa/en/MediaCenter/News/Pages/e-invoicing-wave-22-2025.aspx)
- [EY: Saudi Arabia announces 23rd wave of Phase 2 e-invoicing integration](https://www.ey.com/en_gl/technical/tax-alerts/saudi-arabia-announces-23rd-wave-of-phase-2-e-invoicing-integration)
- [ZATCA: E-invoicing roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: What is e-invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: Detailed Guidelines for E-Invoicing, version 2 (May 2023)](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Electronic Invoice XML Implementation Standard, version 1.2 (May 2023)](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA: Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA: E-invoicing violations and fines (16 November 2021)](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
