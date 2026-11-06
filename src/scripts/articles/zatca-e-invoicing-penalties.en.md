---
title: ZATCA e-invoicing fines: what the official list says
summary: Fines start at SAR 5,000 for not issuing an e-invoice and SAR 10,000 for editing one; three faults get a warning first. What ZATCA lists and the causes.
tag: Business Systems
tags: ZATCA, e-invoicing, penalties, FATOORA, VAT, Saudi Arabia
order: 38
media: https://images.unsplash.com/photo-1673874855449-e8620ddfa867
alt: A heap of curled thermal receipts piled on top of each other
caption: Each receipt is an invoice ZATCA can fine: not issuing one, or changing it after issue, carries a set penalty.
stats: SAR 5,000|starting fine in ZATCA's published list for not issuing e-invoices; SAR 10,000|starting fine for deleting or amending an e-invoice after it has been issued; 31 Dec 2026|end of the current fines-waiver initiative, whose notice does not mention e-invoicing
---

ZATCA's published list of e-invoicing fines starts at SAR 5,000 for not issuing e-invoices and at SAR 10,000 for deleting or amending one after it has been issued. A missing QR code on a simplified tax invoice, a missing buyer VAT number on a tax invoice, or not notifying ZATCA of a malfunction that stops the system issuing e-invoices gets a warning first, and all fines are applied according to the type of violation and the number of repetitions. Most of these violations come from how the invoicing system is built, so they can be found and fixed before an inspection does it for you.

Last checked: 6 November 2026

This is general information, not tax or legal advice. For your own case, ask ZATCA or a Saudi tax adviser.

## What ZATCA's published list says

ZATCA (the Zakat, Tax and Customs Authority, formerly GAZT, the General Authority of Zakat and Tax) published its e-invoicing violations and fines on 16 November 2021, shortly before Phase 1 became enforceable on 4 December 2021. We found no newer consolidated schedule on ZATCA's site, so this is still the list to work from.

| Violation | What ZATCA's list says |
|---|---|
| Not issuing e-invoices | Fine starting at SAR 5,000 |
| Deleting or amending an e-invoice after it has been issued | Fine starting at SAR 10,000 |
| Simplified tax invoice without a QR code | Warning first |
| Tax invoice without the buyer's VAT number | Warning first |
| Not notifying ZATCA of a malfunction that prevents issuing e-invoices | Warning first |
| All violations | Fines applied according to the type of violation and the number of repetitions |

Two points are worth reading carefully. First, the two amounts are starting points for the two most serious acts: not producing an e-invoice at all, and changing one after the fact. The list says these violations "begin with" those fines, so a repeat can cost more. Second, the "warning first" items are not free. The list applies all fines according to the type of violation and the number of repetitions, so a warning is the first step, not the end of the matter.

## Is there a fine for missing your integration date?

Many Saudi business owners search for the penalty for not linking their system to FATOORA by their wave's date. The 2021 list does not name a separate amount for that. It lists violations, not deadlines.

In practice, a business that misses its Phase 2 date keeps issuing invoices from a system that does not meet the Phase 2 rules. Whether a specific invoice then counts as "not issued" or as another violation is a question for ZATCA, not for a software vendor. What is clear is that missing the date does not remove the obligation, and ZATCA notifies each wave at least six months ahead, so "we did not know" is a weak position. Wave 25, for VAT-able revenue above SAR 187,500 in any year from 2022 to 2025, must integrate by 1 February 2027. We cover who is in it in [ZATCA Wave 25: who must integrate by 1 February 2027](/blog/zatca-wave-25-e-invoicing).

## Which system designs trigger each violation

Almost every item on the list maps to a design decision in the cashier or accounting system. This is the useful part: you can test for each one today.

### Not issuing an e-invoice

- **Paper books for busy hours.** If cashiers switch to a handwritten or pre-printed invoice book when the queue is long, those sales have no e-invoice. ZATCA states that a scanned or copied paper invoice is not an e-invoice.
- **Sales recorded outside the system.** Delivery orders, phone orders or branch sales typed into a spreadsheet and entered "later" are invoices that were never issued electronically.
- **No offline mode.** A system that stops invoicing when the internet drops pushes staff back to paper. Simplified (B2C) invoices are reported within 24 hours, so a system can keep issuing them offline and report later. Tax invoices are different under Phase 2: they must be cleared before they go to the buyer, so the system needs a clear procedure for B2B sales during an outage.

### Deleting or amending an invoice after issue

This carries the highest starting fine on the list, and it is the one most often built into older systems by accident.

- **An "edit invoice" or "delete invoice" button.** Once issued, an invoice must not change. A wrong price is corrected with a credit or debit note linked to the original invoice, not by editing it.
- **"Void and reissue" that overwrites the original.** Cancelling a sale must leave the first invoice in place, with a note that reverses it.
- **Resettable counters and system dates.** ZATCA's detailed guidelines say the invoice counter cannot be reset, users cannot change the system date, and stored invoice XML cannot be edited or deleted.
- **Database access for staff.** If someone can open the database and change a row, the system cannot prove it was not done.

### Missing QR code

The list's QR item refers to the simplified tax invoice, usually the B2C receipt. The QR code usually goes missing in the print template, not in the invoice logic. Common causes are a new receipt printer with a different paper width, a custom template made for a promotion, or a PDF export that drops the image. Print a test invoice from every printer and every template you use.

### Missing buyer VAT number

A tax invoice to a VAT-registered business needs the buyer's VAT number. Systems that let a cashier issue a tax invoice with that field empty, or that keep customer records without a VAT number field at all, produce this violation every time a B2B sale is rushed. The fix is a required field with format validation, and a customer record that stores it once.

### Not reporting a malfunction

If a malfunction stops the system issuing e-invoices, the list treats failing to notify ZATCA as a violation. That needs a person, not just software: someone who knows the system is down, records when it started and ended, and reports it to ZATCA. A system that logs its own outages with timestamps makes this much easier.

## What Phase 2 adds

Phase 2 (Integration) started on 1 January 2023 and is rolled out in waves. The fines list predates it, but Phase 2 changes how invoices are produced, and each rule closes off some of the failures above while adding new things that can go wrong:

- **Onboarding.** Invoices must come from an onboarded E-Invoice Generation Solution (EGS) unit, each with its own Cryptographic Stamp Identifier (CSID) from the FATOORA portal.
- **Clearance for tax invoices.** Usually B2B. ZATCA validates and stamps the invoice, and it must be cleared before it goes to the buyer. A system that hands the buyer an uncleared invoice has a design problem.
- **Reporting for simplified invoices.** Usually B2C. The EGS stamps the XML, adds a Phase 2 QR code and must report the XML to FATOORA within 24 hours. An offline queue that never empties is a quiet failure.
- **Anti-tampering.** Each invoice carries a UUID and the hash of the previous invoice, forming one chain per EGS unit. Editing or deleting an invoice breaks the chain, which is exactly what the SAR 10,000 item targets.
- **Arabic.** The human-readable invoice must be in Arabic. Other languages may be added.

For the technical side of integrating a custom POS or ERP, see [ZATCA Phase 2 integration for a custom POS or ERP](/blog/zatca-phase-2-integration-custom-pos-erp).

## The fines-waiver initiative and e-invoicing

ZATCA runs a fines-waiver initiative for taxpayers. On 29 June 2026 it extended it to 31 December 2026, and the notice says it does not cover returns due after 30 June 2026.

The detail that matters here: the August 2025 version explicitly listed "VAT field control related to applying the e-invoicing regulations" among the fines it covered. The June 2026 notice does not mention e-invoicing at all. That may be a drafting choice or a change in scope, and we cannot tell which from the text. Do not assume an e-invoicing fine will be waived. If you have one, read the current notice and confirm with ZATCA before 31 December 2026.

## A checklist to run on your system this month

1. Issue a test invoice, then try to edit it, delete it and void it. Each attempt should be blocked or produce a linked credit note.
2. Try to change the system date and reset the invoice counter from a cashier account and from a manager account.
3. Print one invoice from every printer and template, and check the QR code and the Arabic text on each.
4. Issue a tax invoice to a business customer with the VAT number empty. The system should refuse.
5. Disconnect the internet, make three cash sales on simplified invoices, reconnect, and confirm they were issued and reported within 24 hours.
6. Ask who in the business would report a system breakdown to ZATCA, and where the outage log is.
7. Count how many sales last month were recorded outside the system. The target is zero.

If you cannot run these tests yourself, ask your software supplier to run them in front of you. Be wary of a supplier who answers with a badge: ZATCA does not certify software, and its Solution Providers Directory says it is not an approval. A clear scope and an honest test session matter more, which is the same lesson as in [why software projects fail](/blog/why-software-projects-fail).

## What KF Tech Solutions does here

We build custom POS and business systems, and we integrated a POS with Egypt's ETA e-receipt system, described in [connecting your POS to Egypt's ETA e-invoicing system](/blog/eta-e-invoicing-pos-integration). For a Saudi business, we can review how your current system issues, corrects and stores invoices against the points above, and build or fix the parts that fall short: credit and debit notes, locked records, required fields, print templates and offline queues. We work with businesses in Egypt and the Gulf. More on our [business systems service](/services/business-systems) and our [work for Saudi Arabia](/saudi-arabia).

## Common questions

### How much is the fine for not issuing an e-invoice in Saudi Arabia?

ZATCA's published list says the violation of not issuing e-invoices begins with a fine of SAR 5,000, and that all fines are applied according to the type of violation and the number of repetitions. A business that keeps doing it should not expect the amount to stay at SAR 5,000.

### Is changing an invoice after issue really worse than not issuing one?

On ZATCA's list, yes. Deleting or amending an e-invoice after it has been issued carries a starting fine of SAR 10,000, double the starting fine for not issuing one. The correct way to fix a mistake is a credit or debit note.

### Will I be fined straight away for a missing QR code?

According to the published list, a missing QR code on a simplified tax invoice, a missing buyer VAT number and an unreported malfunction get a warning first. After that, fines are applied according to the type of violation and the number of repetitions.

### Does the fines-waiver initiative cover e-invoicing fines?

The August 2025 version explicitly did. The current notice, which extends the initiative to 31 December 2026, does not mention e-invoicing. Check with ZATCA before relying on it.

### Is there an official list of approved e-invoicing software?

No. ZATCA does not certify software, and its Solution Providers Directory is a guiding list that is not legally binding and not an approval. Any solution that meets the requirements can be used.

> If you want your invoicing system tested against this list before an inspector does it, [book a free call](/book) or [send us a message](/contact).

## Sources

- [ZATCA: violations and fines related to e-invoicing, 16 November 2021](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
- [ZATCA: fines-waiver initiative extended to 31 December 2026](https://zatca.gov.sa/en/MediaCenter/News/Pages/Cancellation-of-fines-Dec-2026.aspx)
- [ZATCA: fines-waiver initiative, August 2025 extension](https://zatca.gov.sa/en/MediaCenter/News/Pages/benefit-fine-waiver-2025.aspx)
- [ZATCA: what e-invoicing is](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: e-invoicing roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: E-Invoicing Detailed Guidelines](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: criteria for Wave 25 of the integration phase, 24 July 2026](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: E-Invoicing Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
