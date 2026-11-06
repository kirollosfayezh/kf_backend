---
title: One POS for Egypt and Saudi Arabia: ETA vs ZATCA
summary: Egypt's ETA and Saudi Arabia's ZATCA want different documents, signatures and flows. How one POS can serve both, with one tax module per country.
tag: POS System
tags: POS, ETA, ZATCA, e-invoicing, Egypt, Saudi Arabia
order: 66
media: https://images.unsplash.com/photo-1771575521357-f6c9237fe16f
alt: Staff in hairnets serving at a bakery checkout counter with two customer-facing POS screens
caption: The same sale at the same counter must leave as an ETA receipt in Egypt and a ZATCA invoice in Saudi Arabia.
stats: 2|tax authorities, each with its own portal, format and rules; 24 h|to submit or report a consumer sale in both countries; 1|shared POS core, with one tax module per country
---

Yes, one POS can serve branches in Egypt and Saudi Arabia, but not with one e-invoicing connection. Egypt's Egyptian Tax Authority (ETA) and Saudi Arabia's Zakat, Tax and Customs Authority (ZATCA) run separate systems with different document formats, signatures, device registration and approval flows. The workable design is a shared POS core for sales, stock and shifts, with a separate tax module for each country that knows its own authority's rules.

Last checked: 6 November 2026

This guide is general information for business owners and their teams, not tax or legal advice. Confirm which rules and dates apply to your registration with your accountant or the authority itself.

## Egypt: ETA e-invoice and e-receipt

The ETA runs one platform, described in its developer documentation as "the solution of the Egyptian Tax Authority" for eInvoicing and eReceipt, with APIs exposed to taxpayers' ERP and POS systems. It has two tracks, and a business that sells both over the counter and to companies usually needs both.

**E-invoice (invoices to businesses and government).** Your system submits each invoice to the ETA's API as JSON or XML. Before signing, the document is serialised into a canonical form and hashed with SHA-256, and the hash is signed with a CAdES-BES signature using an eSeal certificate. An issued invoice can be cancelled only within a period the ETA sets for each document type. After that, the documentation points you to a credit note instead.

**E-receipt (sales to consumers at the till).** This is the track that touches a shop's POS directly. The ETA's receipt documentation sets out these rules:

- The POS device must be registered and linked to the issuer's registration number (RIN) before it issues a receipt.
- Receipts are submitted as JSON only.
- Each receipt's UUID is a SHA-256 hash of the receipt's normalised content, written as 64 hexadecimal characters.
- Each receipt includes the UUID of the previous receipt issued by the same POS device, so every device keeps its own chain.
- A receipt may be submitted within 24 hours, and its submission time cannot be in the future.
- The printed receipt carries a QR code that points to the receipt's details on the ETA portal, together with the total and the seller's registration number.

Which tracks apply to your business, and from when, depends on your registration, so confirm it with the ETA itself rather than a vendor's page. Our guide to [connecting your POS to Egypt's ETA](/blog/eta-e-invoicing-pos-integration) covers the integration steps and where they usually fail.

## Saudi Arabia: ZATCA Phase 2 (FATOORA)

ZATCA's e-invoicing has two phases. Phase 1 (Generation) has applied since 4 December 2021 to all taxpayers except non-residents, and a scanned or copied paper invoice does not count as an e-invoice. Phase 2 (Integration) started on 1 January 2023 and is rolled out in waves, with ZATCA announcing each wave at least six months ahead. Wave 25, covering businesses with VAT-able revenue above SAR 187,500 in any year from 2022 to 2025, must integrate with the FATOORA platform by 1 February 2027.

What Phase 2 asks of a POS, according to ZATCA's detailed guidelines and XML standard:

- **Onboarding.** Each invoicing unit, called an "E-Invoice Generation Solution" (EGS), is onboarded on the FATOORA portal, which issues its Cryptographic Stamp Identifier (CSID).
- **Format.** Invoices are XML in the UBL 2.1 structure, with validation rules based on EN 16931, and anything sent to ZATCA goes as XML through an API.
- **Tax invoices (usually to businesses and government).** ZATCA clears them in real time: it validates the invoice, adds its stamp and QR code, and returns the cleared XML. The invoice must be cleared before it reaches the buyer, and the same applies to related credit and debit notes.
- **Simplified invoices (usually to consumers).** Your own system stamps the XML with its CSID, adds a QR code with 9 TLV tags in base64, and hands the customer a copy. The XML must be reported to FATOORA within 24 hours.
- **Anti-tampering.** Each invoice carries a 128-bit UUID and the hash of the previous invoice, forming one chain per EGS unit. The counter cannot be reset, users cannot change the system date, and stored XML cannot be deleted or edited.
- **Arabic.** The human-readable invoice must be in Arabic. Other languages may be added.

ZATCA does not certify software. Its Solution Providers Directory is a guiding list that, in ZATCA's words, "is not considered as an approval", so treat any "ZATCA-certified" label with caution. ZATCA's published fines, from November 2021, include SAR 5,000 for not issuing e-invoices and SAR 10,000 for deleting or amending an e-invoice after issue.

## ETA and ZATCA side by side

| | Egypt (ETA) | Saudi Arabia (ZATCA) |
|---|---|---|
| Platform | ETA eInvoicing and eReceipt solution | FATOORA |
| Business invoices | E-invoice, JSON or XML, submitted through the API | Tax invoice, UBL 2.1 XML, cleared before it reaches the buyer |
| Consumer sales | E-receipt, JSON only, submitted within 24 hours | Simplified invoice, stamped by your system, reported within 24 hours |
| Device identity | POS registered and linked to the issuer's RIN | Each EGS unit onboarded, with its own CSID |
| Signature | CAdES-BES with an eSeal certificate (e-invoices) | Cryptographic stamp from the CSID; ZATCA adds its stamp on clearance |
| Document ID | UUID is a SHA-256 hash of the receipt | 128-bit UUID on every invoice |
| Chain | Previous receipt UUID, per POS device | Previous invoice hash, per EGS unit |
| QR code | Link to the receipt on the ETA portal, with total and RIN | 9 TLV tags, base64 |
| Corrections | E-invoices: cancel within the ETA's window, then credit note; e-receipts: return receipt | No deleting or editing; credit and debit notes |

The similarities are real: both countries chain documents per device, both give consumer sales 24 hours, and both put a QR code on the receipt. But the formats, the identities and the hashing rules differ in every detail, so code written for one cannot be pointed at the other.

## What one POS can share, and what it cannot

Most of a POS has nothing to do with tax authorities, and that part can be shared across both countries:

- the item catalogue, barcodes, variants and stock per branch;
- shifts, cash drawer counts and cashier permissions;
- returns linked to the original sale;
- reports, with a group view across both countries;
- one admin panel for head office.

What must be separate is everything that faces the authority. Each branch belongs to one country, and each country gets its own tax module: its own device registration, document builder, signing method, submission rules and archive. A branch in Jeddah should never be able to send a receipt to the ETA, and a branch in Cairo should never build UBL XML for FATOORA.

The catalogue also needs per-country tax data. An item can carry one code and tax treatment for Egypt and another for Saudi Arabia, with prices in Egyptian pounds and Saudi riyals. Our guide to [choosing a POS cashier system for a shop in Egypt](/blog/pos-cashier-system-for-shops-egypt) covers the shop-floor features in more detail.

## How to design the tax module for each country

A clean design puts both countries behind the same internal interface, so the till only says "this sale is final" and the right module takes over:

1. **Country per branch.** The branch decides the module, the currency, the time zone and the receipt language. Cairo moves its clocks forward in summer while Riyadh stays on UTC+3 all year, so store timestamps with their offset.
2. **Device identity per till.** For Egypt, the registered POS and the issuer's RIN. For Saudi Arabia, the onboarded EGS unit and its CSID. Plan who renews certificates and when.
3. **A document builder per country.** ETA JSON for receipts and JSON or XML for invoices in Egypt; UBL 2.1 XML for both invoice types in Saudi Arabia.
4. **A chain per device.** Each till keeps its own previous-document reference. Never share a chain across tills, and never let a reset or a restored backup break one.
5. **A queue that survives the internet going down.** Both countries allow 24 hours for consumer sales, so the till keeps selling and the queue submits or reports when the line returns, with an alert well before the window closes.
6. **An archive that cannot be edited.** Store what was sent and what came back with the sale. Corrections go through new documents, such as credit notes or Egyptian return receipts, never edits.
7. **Receipt layouts per country.** Arabic on Saudi invoices, the right QR code for each authority, and reprints that come from the stored document.

## Rolling it out across both countries

1. **List the obligations.** Confirm with your accountant which ETA tracks apply to your Egyptian entity and which ZATCA wave applies to your Saudi one.
2. **Clean the catalogue.** Add the tax codes and treatments each country needs before you write any integration code.
3. **Build one country first.** Usually the one with the nearer deadline. Run it against the authority's test environment: the ETA provides a pre-production environment and ZATCA provides a testing toolkit.
4. **Pilot one branch.** Watch rejections, the queue and the reconciliation report for a few weeks.
5. **Add the second module.** The shared core is already proven, so the work is the new tax module and its tests.
6. **Assign an owner.** Someone must watch rejected documents, certificate expiry and new authority announcements in both countries.

## Where KF Tech Solutions fits

We build custom [POS, ERP and inventory systems](/services/business-systems). In Egypt, our [ETA e-receipt integration](/projects/egypt-eta) signs and submits each receipt to the Egyptian Tax Authority's API, handles its responses and keeps the submission status with the sale; it is live in production. For Saudi branches, we scope the ZATCA module with you against ZATCA's published specifications and test it with ZATCA's toolkit before any EGS unit is onboarded on your FATOORA portal account. We work with businesses in Egypt and the Gulf; see our page for [businesses in Saudi Arabia](/saudi-arabia).

## Common questions

### Can I connect my Egyptian POS to ZATCA as it is?

No. ZATCA expects UBL 2.1 XML from an onboarded EGS unit with its own CSID, while the ETA expects its own JSON or XML documents from a registered POS. The sales screen and the stock logic can stay, but the tax side must be a new module built to ZATCA's rules.

### Do both countries require real-time submission at the till?

Not quite. Saudi tax invoices, usually to businesses, must be cleared before they reach the buyer. Consumer sales in both countries have a 24-hour window: Egypt's e-receipts must be submitted within 24 hours and Saudi simplified invoices reported within 24 hours.

### Does my POS need to be "ZATCA-certified"?

ZATCA does not certify software. Its Solution Providers Directory is a guiding list that "is not considered as an approval". What matters is whether the system does onboarding, clearance, reporting and the anti-tampering rules correctly.

### Can one database hold both countries' sales?

It can, as long as each sale belongs to one branch and one country, and each country's documents, chains and responses are stored separately and cannot be edited. Where your data is hosted is a separate decision to make with your advisers.

### What if a receipt or invoice was sent with a mistake?

Neither system lets you quietly edit it. In Egypt an e-invoice can be cancelled within the ETA's window for that document type and otherwise corrected with a credit note, while a consumer sale is reversed with a return receipt. In Saudi Arabia stored XML cannot be deleted or edited, so corrections go through credit or debit notes.

If you run, or plan to run, branches in both countries, [tell us about your setup](/contact) or [book a free call](/book), and we will map what your current POS can keep and what each country's module needs.

## Sources

- [ETA eInvoicing and eReceipt SDK](https://sdk.invoicing.eta.gov.eg/)
- [ETA: document signature creation](https://sdk.invoicing.eta.gov.eg/signature-creation/)
- [ETA: submit documents API](https://sdk.invoicing.eta.gov.eg/einvoicingapi/01-submit-documents/)
- [ETA: cancel document API](https://sdk.invoicing.eta.gov.eg/einvoicingapi/02-cancel-document/)
- [ETA: submit receipt API](https://sdk.invoicing.eta.gov.eg/ereceiptapi/02-submit-receipt/)
- [ETA: receipt issuance FAQ](https://sdk.invoicing.eta.gov.eg/receiptissuancefaq/)
- [ETA: SDK FAQ (test environment)](https://sdk.invoicing.eta.gov.eg/faq/)
- [ZATCA: what is e-invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: Wave 25 announcement](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: e-invoicing detailed guidelines](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: XML implementation standard](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA: Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA: e-invoicing violations and fines](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
- [Ahram Online: Egypt's daylight saving time](https://english.ahram.org.eg/NewsContentP/1/566547/Egypt/Egypt-to-move-clocks-forward-one-hour-on-Friday-fo.aspx)
