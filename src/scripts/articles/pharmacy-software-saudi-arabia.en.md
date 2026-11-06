---
title: Pharmacy software in Saudi Arabia: Wasfaty, Rassed, stock
summary: What a Saudi pharmacy system must handle: Wasfaty e-prescriptions, SFDA's Rassed track and trace, batch and expiry stock, and ZATCA e-invoices.
tag: Business Systems
tags: pharmacy software, Wasfaty, RSD track and trace, ZATCA e-invoicing, inventory, Saudi Arabia
order: 89
media: https://images.unsplash.com/photo-1580281657529-557a6abb6387
alt: A pharmacist in a white coat checks a box between tall shelves of medicine stock
caption: Every box on these shelves has a batch, an expiry date and a track-and-trace record to keep in step.
stats: 4|codes in each pack's data matrix: GTIN, serial, expiry, batch; 2|sides to every RSD movement: send and accept; 24 h|to report each simplified (B2C) invoice to FATOORA
---

A pharmacy system in Saudi Arabia has to do more than ring up sales. It must report every pack you receive and sell to SFDA's drug track and trace system (Rassed, RSD), keep stock by batch and expiry date, fit alongside the Ministry of Health's Wasfaty e-prescription service, and issue invoices that meet ZATCA's e-invoicing rules. This guide explains each of these in plain terms and what to ask before you buy or build software.

Last checked: 6 November 2026

## The four systems a Saudi pharmacy deals with

Most pharmacy owners meet these one at a time, from different authorities. Your own software sits in the middle and has to keep them consistent.

| System | Run by | What it covers | What your software must do |
|---|---|---|---|
| Rassed (RSD), drug track and trace | SFDA | Every pack of registered human medicine, from factory or import to the patient | Send and receive notifications for each pack: accept, sale, return, transfer |
| Wasfaty | Ministry of Health, with NUPCO | E-prescriptions from participating government health facilities, dispensed free at accredited community pharmacies | Keep Wasfaty dispensing separate from cash sales and in step with stock |
| FATOORA e-invoicing | ZATCA | Tax invoices and simplified invoices of VAT-registered businesses | Generate compliant e-invoices; in Phase 2, clear or report them through ZATCA's API |
| Your own stock and cashier | You | Batches, expiry dates, branches, shifts, suppliers | Be the single record the other three are reconciled against |

## Rassed (RSD): every pack has an identity

SFDA describes its Drug Track and Trace System as a system that tracks products "starting from the manufacturing/importing until the patient usage". Its integration guide lists pharmacies among the stakeholders, alongside manufacturers, warehouses and medical and dispense centres.

What this means at the counter:

- **Each pack carries a GS1 data matrix** holding four codes: the GTIN (product), a serial number, the expiry date and the batch number.
- **Each pharmacy needs a GLN**, a global location number. SFDA registers the stakeholder in the system after it has one.
- **Movements are two-sided.** When a warehouse sends packs, your pharmacy must send an accept notification. Until it does, the packs stay "between" the two parties and neither can do anything with them.
- **Pharmacy operations include** accept, pharmacy sale, sale cancel, return, transfer and deactivate, each by serial number or, for some operations, by batch. SFDA notes that it may restrict them.

SFDA's guide says stakeholders "need to modify their own computer systems" to send and receive these notifications, through SOAP-XML web services with credentials SFDA issues after registration. The RSD FAQ adds that you can use the system's portals to report until your own system is ready, and that the system accepts data in bulk. In practice, a pharmacy that sells hundreds of packs a day needs its cashier to send the sale notification automatically, not a person typing serial numbers into a portal.

SFDA is also paying attention to pharmacies specifically. In January 2026 it met the pharmacy sector's national committee to discuss the challenges of implementing RSD and to raise compliance in the sector.

## Wasfaty: e-prescriptions at community pharmacies

Wasfaty is the Ministry of Health's e-prescription service. Patients of participating government health facilities collect their medicines free of charge from accredited community pharmacies. By December 2021 the ministry reported more than 20 million prescriptions dispensed through it, with 2,018 healthcare centres and 197 hospitals taking part.

NUPCO's Wasfaty documents define a participating pharmacy as a community pharmacy accredited in the service and contracted with NUPCO. Joining criteria and registration are published on wasfaty.sa, so check them there rather than relying on a vendor's summary.

For your software, the practical points are:

- **Wasfaty dispensing is not a cash sale.** The patient pays nothing at the counter, so it must not inflate the cashier's drawer or your sales report.
- **The stock still leaves your shelf.** Each item dispensed has to come out of the right batch, like any other sale.
- **You need a clean record to reconcile.** Keep Wasfaty items as their own transaction type, so you can match them later against what the service settles.

Ask NUPCO's Wasfaty team how dispensing and settlement work for your pharmacy before you design anything around it. Do not accept a vendor's claim that a product is "connected to Wasfaty" without seeing it work.

## Batches and expiry dates in your own stock

A pharmacy cannot run on one stock figure per item. The same medicine sits on the shelf in several batches with different expiry dates, and RSD already tracks each pack by batch and expiry.

What the system should do:

- **Read batch and expiry from the data matrix on receipt.** Scanning the pack fills both fields, so nobody types them by hand.
- **Sell the earliest expiry first.** The cashier should be guided to the batch that expires soonest, and warned when an item is close to expiry.
- **Report near-expiry stock early.** A monthly list of what expires in the next 60 or 90 days gives you time to return, transfer or discount it.
- **Return and recall by batch.** When a batch is recalled, you need to find every pack of it across branches in seconds. SFDA says RSD lets recalled products be stopped directly; your own system should block them at the counter too.
- **Transfer between branches properly.** A transfer is one movement out of one branch and into another, and in RSD it is a transfer and an accept, not a sale.

We explain the same stock problems for Egyptian pharmacies in [pharmacy software in Egypt](/blog/pharmacy-management-system-egypt), and the wider causes of stock loss in [where your stock really goes](/blog/inventory-management-system-egypt).

## ZATCA e-invoices at the pharmacy counter

A VAT-registered pharmacy issues e-invoices under ZATCA's rules like any other shop. Phase 1 (generation) has applied since 4 December 2021 to taxpayers resident in the Kingdom, and a scanned paper invoice does not count as an e-invoice.

Phase 2 (integration) started on 1 January 2023. Since 2023 ZATCA has moved VAT-registered businesses onto Phase 2 in waves. Wave 25, covering VAT-able revenue above SAR 187,500 in any year from 2022 to 2025, must integrate with FATOORA by 1 Feb 2027.

For a pharmacy, most invoices are simplified invoices to patients. In Phase 2 these are stamped by your onboarded system, carry a QR code, are printed for the customer straight away and must be reported to FATOORA within 24 hours. Invoices to a business, such as a clinic buying supplies, are tax invoices that ZATCA must clear before the buyer receives them. Every invoice also carries a UUID and the hash of the previous one, and the human-readable invoice must be in Arabic.

Two points matter when you choose software:

- **The VAT treatment is set per item.** Your accountant decides how each product is taxed; the system must apply it correctly on every line.
- **ZATCA does not certify software.** Its Solution Providers Directory is a non-binding list and "is not considered as an approval". Judge a product by whether it is actually onboarded and does clearance and reporting, not by a badge.

Our [ZATCA Phase 2 integration guide for custom POS and ERP](/blog/zatca-phase-2-integration-custom-pos-erp) covers the technical side in detail.

## Questions to ask before you buy or build

Whether you choose a ready-made package or custom software, ask the same questions:

1. Does the system send RSD notifications itself, and which operations does it support: accept, sale, return, transfer, deactivate?
2. What happens to RSD notifications and invoices when the internet drops, and how are they sent once it is back?
3. Does it read the GS1 data matrix and fill batch and expiry automatically?
4. How does it record Wasfaty dispensing apart from cash sales?
5. Is it onboarded for ZATCA Phase 2 today, and can you see a cleared invoice and a reported one?
6. Does each branch have its own stock, with transfers between them?
7. Are the interface, the receipt and the reports in Arabic?
8. Who owns the data, and can you export all of it if you leave?

For the general trade-offs, see [ready-made or custom POS in Saudi Arabia](/blog/ready-made-vs-custom-pos-saudi-arabia).

## What KF Tech Solutions does here

We build custom [business systems](/services/business-systems), including pharmacy, clinic, POS and inventory systems, and we work with businesses in Egypt and the Gulf. In Egypt we integrated a POS with the tax authority's e-receipt system ([ETA e-receipt project](/projects/egypt-eta)), so we know what connecting a cashier to a government API involves. For a Saudi pharmacy, we read the current SFDA and ZATCA specifications with you, scope the RSD and FATOORA connections, and build the stock, batch, expiry and branch logic around how your pharmacy actually works. More on how we work with Saudi businesses is on our [Saudi Arabia page](/saudi-arabia).

## Common questions

### Does a pharmacy have to connect its own software to RSD?

SFDA's integration guide expects stakeholders to adapt their own systems to send and receive notifications. The RSD FAQ allows the portals to be used until your system is ready. For a pharmacy with real volume, automatic notifications from the cashier are the only practical option.

### What is in the data matrix on a medicine pack?

Four GS1 codes: the GTIN, a serial number, the expiry date and the batch number. Together they identify one physical pack.

### Are Wasfaty and RSD the same thing?

No. Wasfaty is the Ministry of Health's e-prescription service, run with NUPCO. RSD is SFDA's track and trace system for every pack of registered medicine. A pharmacy deals with both, and its own system has to keep them consistent with its stock.

### Does my pharmacy need ZATCA Phase 2 now?

It depends on your VAT-able revenue and the wave ZATCA notifies you of. ZATCA announces each wave at least six months ahead. Wave 25 covers revenue above SAR 187,500 in any year from 2022 to 2025, with integration due by 1 Feb 2027. This is general information, not tax advice; confirm your position with your accountant.

### Is there a ZATCA-approved pharmacy system?

ZATCA does not approve software. Its directory of solution providers is a guiding list and not an approval. Ask to see the system onboarded and clearing or reporting real invoices.

### Can one system run several branches?

Yes. Each branch should have its own stock by batch and expiry, with transfers recorded as movements out of one branch and into another, which matches how RSD treats transfers between pharmacies.

If you are planning a pharmacy system for Saudi Arabia, [tell us how your pharmacy works](/contact) or [book a free call](/book), and we will go through RSD, Wasfaty and e-invoicing with you before any quote.

## Sources

- [SFDA: Drug Track and Trace System integration guide, v2.1](https://www.sfda.gov.sa/sites/default/files/2024-08/IntegrationGuideDTTSV21.pdf)
- [SFDA: RSD frequently asked questions](https://rsd.sfda.gov.sa/faqs.html)
- [SFDA: track and trace system has recorded over one billion operations (March 2021)](https://www.sfda.gov.sa/en/news/79406)
- [SFDA: meeting with the national pharmacies committee on RSD (January 2026)](https://sfda.gov.sa/en/news/18786)
- [Ministry of Health: over 20 million prescriptions dispensed via Wasfaty (December 2021)](https://www.moh.gov.sa/en/ministry/mediacenter/news/pages/news-2021-12-29-001.aspx)
- [NUPCO: Wasfaty service requirements](https://www.nupco.com/wp-content/uploads/2025/01/%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D8%B7%D8%A7%D8%AA-%D9%88%D8%B5%D9%81%D8%AA%D9%8A.pdf)
- [ZATCA: what is e-invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: Wave 25 announcement](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: E-Invoicing Detailed Guideline](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
