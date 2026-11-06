---
title: POS systems in Saudi Arabia: ready-made or custom?
summary: Who carries ZATCA Phase 2, how card terminals connect, Arabic invoices and branch stock: the Saudi factors in choosing a ready-made or custom POS.
tag: POS System
tags: POS, cashier system, ZATCA, e-invoicing, retail, Saudi Arabia
order: 39
media: https://images.unsplash.com/photo-1739830895627-7a19b551fb4b
alt: Hands tapping a white tablet on a shop counter, with a glass display case behind
caption: Whichever POS sits on the counter, someone has to carry Phase 2 compliance: the vendor or you.
stats: 1 Feb 2027|Wave 25 deadline to integrate with FATOORA; 24 h|to report each simplified (B2C) invoice; 1|invoice hash chain per unit, never reset
---

For most shops and restaurants in Saudi Arabia, a ready-made (SaaS) POS is the right start, as long as it already issues Phase 2 e-invoices for your setup, works with your bank's card terminals and prints a proper Arabic invoice. A custom POS makes sense when your workflow, branch structure or integrations fit no package, and the middle path, keeping the SaaS and building only the missing pieces, is often the cheapest of the three. Whichever you choose, the e-invoicing obligation stays with your business, not with the software company.

Last checked: 6 November 2026

This article covers only the factors that are specific to Saudi Arabia. For the general framework (features, contracts and total cost over time), read [Ready-made or custom POS: how a restaurant owner should actually decide](/blog/ready-made-vs-custom-pos-restaurants) first. Most of it applies to retail as well.

## Phase 2 e-invoicing: the obligation stays with you

ZATCA's e-invoicing rules apply to VAT taxpayers resident in Saudi Arabia, and to third parties that issue invoices on their behalf. Phase 1 (generating invoices electronically) has applied since 4 December 2021, and a scanned or copied paper invoice does not count. Phase 2 (integration with ZATCA's FATOORA platform) started on 1 January 2023 and brings businesses in by waves. Wave 25, covering VAT-able revenue above SAR 187,500 in any year from 2022 to 2025, must integrate by 1 February 2027. ZATCA announces each wave at least six months ahead, so follow its news page rather than a vendor's summary.

In Phase 2, the POS has real technical work to do:

- Generate each invoice as UBL 2.1 XML and send it to ZATCA through an API.
- Stamp simplified (usually B2C) invoices with its cryptographic stamp, add the Phase 2 QR code and report the XML within 24 hours.
- Send tax (usually B2B) invoices for clearance before they reach the buyer, including the related credit and debit notes.
- Give every invoice a UUID and the hash of the previous one, and stop users from changing the system date or editing stored invoices.

Each invoicing unit, which ZATCA calls an "E-Invoice Generation Solution" (EGS), is onboarded on the FATOORA portal, and the portal issues its Cryptographic Stamp Identifier (CSID). ZATCA does not certify software. Its Solution Providers Directory is a guiding list and, in ZATCA's own words, "is not considered as an approval". A badge on a vendor's website therefore proves nothing. Ask to see an onboarding on a test account, a cleared B2B invoice and a reported B2C invoice.

With a ready-made POS, the vendor develops and maintains these rules, which is a real advantage. With a custom POS, you carry them through your developer for as long as you use the system. Either way, the fines fall on the business. ZATCA's published schedule (16 November 2021) lists SAR 5,000 for not issuing e-invoices and SAR 10,000 for deleting or amending one after issue. This is general information, not tax advice, so confirm your wave and obligations with your accountant. The technical details are in our guide to [ZATCA Phase 2 integration for a custom POS or ERP](/blog/zatca-phase-2-integration-custom-pos-erp).

## Card payments: mada and Apple Pay come through your acquirer

mada, the national debit network owned by the Saudi Central Bank (SAMA), supports contactless payments and Apple Pay, mada Pay, Samsung Pay and Google Pay. Your customers expect to tap their card or phone. The card terminal, however, does not come from the POS company. It comes from your acquirer: the bank or licensed payment provider that settles card payments into your account.

The real question is whether the POS talks to the terminal your acquirer gives you. If it does, the amount goes from the till to the terminal and the result comes back to the invoice. If it does not, the cashier types the amount into a standalone terminal, and every mistyped figure becomes a gap in the end-of-day reconciliation. Before choosing any POS, ask which acquirers and terminal models it integrates with, and ask your bank the same question from its side.

If you also sell online, the payment gateway is a separate decision. Gateways such as Tap and PayTabs list mada, Apple Pay, Tabby and Tamara among their methods. Our comparison of [payment gateways in Saudi Arabia](/blog/payment-gateways-saudi-arabia) covers that choice.

## Arabic invoices and an Arabic interface

The human-readable invoice must be in Arabic, and other languages may be added beside it. Many international POS products print a translated invoice that looks fine until you check long product names, right-to-left alignment on a narrow 80 mm receipt, or Arabic and English mixed on one line. Print a real receipt from the demo, with your own product names, before you sign anything.

The cashier screen matters as much as the receipt. If your staff work in Arabic, test the whole flow in Arabic: search by Arabic product name, a return, a shift close and the daily report. A half-translated interface slows down every new cashier you hire.

## Several branches, one stock figure

Multi-branch stock is where ready-made systems differ most. Check whether each branch can see the others' stock, whether a transfer between branches is a document with a sender and a receiver, and whether a central warehouse can be set up at all. Ask how e-invoicing works per branch and per till, because the hash chain runs per EGS unit and each unit is onboarded separately.

Then ask what happens when the internet drops in one branch. Sales should continue, and stored invoices should be reported once the connection returns, inside the 24-hour window for simplified invoices. For the usual ways stock leaks between the warehouse and the till, see [where your stock really goes](/blog/inventory-management-system-egypt). That article is written for Egypt, but the stock problems are the same in Riyadh or Jeddah.

## Ready-made or custom: the comparison

| Factor | Ready-made (SaaS) POS | Custom POS |
|---|---|---|
| Phase 2 e-invoicing | Built and maintained by the vendor; you check it works for your setup | Built by your developer; you pay for updates when ZATCA changes its specifications |
| Card terminals | Only the acquirers the vendor supports | The acquirer you choose, if it offers an integration |
| Arabic invoice and screens | Varies by product; test with your own items | Designed around your receipts and your staff |
| Branches and warehouse | Fixed structure; each extra branch usually adds to the subscription | Modelled on how your business actually moves stock |
| Running cost | Monthly subscription per branch or device | Hosting plus a maintenance contract |
| Time to start | Days | Weeks to months |
| Your data | Inside the vendor's system; check the export options | In a database you control, with the source code assigned to you in the contract |

### The middle path: keep the SaaS, build only the gaps

Many Saudi businesses do not need to replace their POS. They need something it does not do: a kitchen or production workflow, a loyalty programme tied to their own app, a wholesale price list, reports that combine several companies, or an online ordering channel. If the POS has an API or a reliable data export, these pieces can be built around it while the vendor keeps carrying the Phase 2 work.

A full custom POS is worth it when the gaps sit inside the sale itself, such as a pricing model, a service workflow or a device the SaaS cannot handle, or when subscriptions across many branches and devices add up to more than owning the system. Our [Odoo or custom ERP](/blog/odoo-vs-custom-erp-saudi-arabia) comparison covers the same decision one level up.

A simple test: list the five things your current system makes your staff do on paper or in a spreadsheet. If they happen around the sale, build the gaps. If they are the sale, consider a custom POS.

## Questions to ask any POS vendor in Saudi Arabia

1. Can you show a Phase 2 onboarding, a cleared tax invoice and a reported simplified invoice on a test account?
2. Who onboards each till or branch on FATOORA, and who renews the CSID?
3. Which acquirers and terminal models do you integrate with?
4. Can I print a sample Arabic receipt with my own product names today?
5. How do transfers between branches work, and what happens when a branch goes offline?
6. How do I export my sales, invoices and stock if I leave?

For the everyday features every till needs (barcodes, returns, shifts and the cash drawer), the checklist in [how to choose a POS cashier system for a shop](/blog/pos-cashier-system-for-shops-egypt) applies in Saudi Arabia too.

## Where KF Tech Solutions fits

KF Tech Solutions builds custom POS, inventory and business systems, and has integrated a POS with Egypt's ETA e-receipt system. We work with businesses in Egypt and the Gulf, remotely. For a Saudi business, we can help you decide whether a SaaS POS is enough, build the missing pieces around it, or build a custom system around ZATCA's published Phase 2 requirements, with the source code assigned to you. Projects start from $200 (about SAR 750 / AED 735); the final price depends on scope, with a fixed written quote after a free call. See our [business systems service](/services/business-systems) and [what we offer businesses in Saudi Arabia](/saudi-arabia).

## Common questions

### Is a ready-made POS automatically compliant with ZATCA Phase 2?

No. ZATCA does not certify software, and its directory of solution providers is not an approval. Check that the vendor has actually onboarded units and that clearance and reporting work for your types of invoice. The obligation stays with your business.

### When does my business need Phase 2 integration?

It depends on your wave. ZATCA selects businesses by VAT-able revenue in reference years and announces each wave at least six months ahead. Wave 25, for revenue above SAR 187,500 in any year from 2022 to 2025, must integrate by 1 February 2027.

### Can a custom POS work with mada and Apple Pay?

Yes, through your acquirer's terminal, if the acquirer offers an integration for it. Without one, the terminal works on its own and the cashier enters the amount twice.

### Do I have to replace my current POS to add features?

Not usually. If it has an API or exports its data, new features can be built around it, and the vendor keeps maintaining e-invoicing.

### Does the invoice have to be in Arabic?

Yes. The human-readable invoice must be in Arabic, and you may add English or another language beside it.

Not sure which way your business should go? [Book a free call](/book) and bring a sample receipt and your branch list, or [send us a message](/contact).

## Sources

- [ZATCA: What is e-invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: Roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: E-Invoicing Detailed Guideline (PDF)](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Wave 25 announcement](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA: E-invoicing violations and fines](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap Payments](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
