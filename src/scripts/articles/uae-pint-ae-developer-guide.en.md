---
title: PINT AE and the 5-corner model: a developer's guide
summary: How UAE e-invoices flow from your ERP to your ASP as PINT AE data: document codes, TIN and 0235 identifiers, credit notes, and testing.
tag: Business Systems
tags: PINT AE, Peppol, e-invoicing, five-corner model, ERP integration, developers, UAE
order: 88
media: https://images.unsplash.com/photo-1688644526472-13ba00bfbe18
alt: A date palm in the foreground with a slim Dubai skyscraper rising behind it in soft light
caption: In the UAE model, an invoice leaves your ERP, passes through your provider and reaches the buyer's provider before the buyer.
stats: 5|corners in the UAE e-invoicing model; 0235|Peppol scheme ID for UAE identifiers; 381|document type code for a UAE tax credit note
---

In the UAE e-invoicing system, your ERP or POS (Corner 1) produces every B2B and B2G invoice as PINT AE data and sends it to your Accredited Service Provider, or ASP (Corner 2). The ASP validates it, passes it to the buyer's ASP (Corner 3), which delivers it to the buyer (Corner 4), and reports the tax data to the tax side (Corner 5). Your team does not talk to the tax authority directly: the work is producing complete, correct PINT AE data, sending it to your ASP's API, handling the responses, and receiving invoices from your suppliers the same way.

Last checked: 6 November 2026

This is general information for developers, not tax advice: your tax adviser and your ASP have the final word on how each transaction is treated.

## The five corners, from your system's side

The Ministry of Finance calls the model "Decentralized Continuous Transaction Control and Exchange". Your code talks to only one of the five parties.

| Corner | Who it is | What your system does |
|---|---|---|
| 1 | The supplier: you, when you sell | Builds the invoice data and sends it to your ASP |
| 2 | Your ASP | Receives your data through its API and returns a result |
| 3 | The buyer's ASP | Nothing directly: your ASP reaches it |
| 4 | The buyer | Receives the invoice through its own ASP |
| 5 | The tax side | Nothing directly: your ASP reports to it |

- **Both sides need an ASP.** The scope covers all B2B and B2G transactions, and both the issuer and the recipient must appoint one. When you buy, your ERP is Corner 4 and must accept invoices from your ASP.
- **A PDF is not an e-invoice.** The Ministry states that PDFs, Word files, scans and emails do not count.
- **Where Peppol fits.** The Ministry mentions OpenPeppol for cross-border exchange, and PINT AE is published as a Peppol specification.

The Ministry's list showed 86 accredited ASPs when we checked on 6 November 2026. Each has its own API, so authentication and endpoints come from your ASP's documentation, while the data format is the same for all.

## What PINT AE is

PINT AE is the UAE version of Peppol's international invoice model (PINT), published on Peppol's documentation site. The current version, 1.0.4, has three parts:

- **PINT AE Billing**, for tax invoices and credit notes.
- **PINT AE Self-Billing**, for self-billed invoices and credit notes, using the same data model.
- **The UAE Tax Data Document (TDD)**, which, according to the specification, both the issuer and the receiver use to report an invoice to the tax authority.

The syntax is UBL. An invoice is a UBL Invoice document and a credit note is a UBL CreditNote document, and the specification gives the exact element for each business term. Your invoice identifies the specification in `cbc:CustomizationID`, with the value `urn:peppol:pint:billing-1@ae-1`.

Each field has a business-term code. Codes beginning with IBT come from the international model, and codes beginning with BTAE are UAE additions. Keep these codes in your mapping table next to your own database columns.

## Document types, transaction flags and credit notes

The document type code tells the receiver and the tax side what kind of document this is. PINT AE uses these:

| Document | Code | UBL root |
|---|---|---|
| Tax invoice | 380 | Invoice |
| Tax credit note | 381 | CreditNote |
| Self-billing invoice | 389 | Invoice |
| Self-billing credit note | 261 | CreditNote |
| Invoice out of scope of tax | 480 | Invoice |
| Credit note for an out-of-scope transaction | 81 | CreditNote |

### The transaction type flags

UAE VAT has a few special transaction types, and PINT AE records them in `cbc:ProfileExecutionID` as a string of eight 0s and 1s. Each position is one flag, in this order:

1. Free trade zone
2. Deemed supply
3. Profit margin scheme
4. Summary invoice
5. Continuous supply
6. Disclosed agent billing
7. Supply through e-commerce
8. Exports

A standard tax invoice with no special type carries `00000000`. An export carries `00000001`, and a supply involving a free trade zone carries `10000000`. Store each flag as a yes/no field on the sale and build the string at export time.

### Credit notes, never negative invoices

The specification says that in the UAE an invoice can be reversed only with a credit note. Businesses cannot issue negative invoices. If your system handles returns by posting a negative sale, you need a separate credit note document before go-live.

Each credit note needs a reason code in BTAE-03 and a reference to the original invoice. The exception is a volume discount: the reason code is `VD`, and the original invoice reference can be left out. Make sure every return in your system is linked to the sale it reverses, because that link becomes the reference in the credit note.

## Identifiers and predefined endpoints

- **Seller TRN.** The seller's VAT registration number goes in IBT-031, with the tax scheme `VAT`.
- **Seller TIN.** The seller's Tax Identification Number goes in IBT-032.
- **Electronic address.** In the UAE, the electronic address (IBT-034) is the TIN, and the scheme identifier is `0235`. This is how the network finds the right ASP.
- **Buyer TRN.** The buyer's TRN is required if the buyer is VAT-registered in the UAE.
- **Legal registration.** The seller's registration type is recorded, for example a trade licence, and for a trade licence the issuing authority is required (BTAE-12).

Your customer master data therefore needs a TRN and a TIN for every registered business customer, checked before the first invoice is sent, not discovered on rejection.

Some invoices have no buyer on the network. For three cases the specification defines a fixed recipient, still under scheme `0235`. The document is then reported to Corner 5 and not exchanged with Corner 3:

| Case | Participant ID |
|---|---|
| Deemed supply (second flag set) | 9900000097 |
| Buyer not subject to UAE e-invoicing | 9900000098 |
| Export to a receiver not registered on Peppol (last flag set) | 9900000099 |

If you invoice in a currency other than dirhams, the specification also states the VAT total in the tax accounting currency. Its example invoices in euros with `cbc:TaxCurrencyCode` set to AED and a second tax total in AED. Store the exchange rate you used with the invoice.

## Building the flow from your ERP to the ASP

A reliable integration has the same shape whatever your stack, and it follows the pattern in [connecting the systems you already run](/blog/api-integration-connecting-business-systems).

1. **Map your data.** Build one table that links each PINT AE business term to a field in your database, with a note for anything missing.
2. **Generate the UBL** from a posted invoice only. Once an invoice is sent, it must not be edited. Corrections go through a credit note.
3. **Queue the send.** Write the invoice to an outbox table and send it from a background worker, so a slow or unavailable ASP never blocks a sale or a month-end close.
4. **Store every response.** Keep the ASP's identifier, status and any error codes against the invoice, and show them to the user.
5. **Retry with care.** Retry network failures automatically, but use your own invoice number as a key so the same invoice is never sent twice.
6. **Alert on rejections.** A rejected invoice needs a person to fix the data. Send it to a list someone checks daily.
7. **Receive inbound invoices.** Pull or accept supplier invoices from your ASP and match them to purchase orders and goods received.

Ministerial Decision 197/2026, effective 1 October 2026, removed the e-invoicing requirement to store invoice data in the UAE, so these rules no longer tie your integration to UAE hosting; sector rules, such as those for payment providers and health data, may still apply. It also excluded transactions inside a tax group for 24 months from 1 January 2027. Keep sent and received invoices with their responses in your own system anyway, so every status can be traced.

## Testing with your ASP and planning around deadlines

Ask your ASP for a test environment and the sample files it expects before you write the generator. Then test in cycles:

- **Format.** Send one standard invoice and fix every validation error.
- **Coverage.** Send one document of each type you actually issue: credit notes with and without an original reference, a free zone sale, an export, a foreign-currency invoice.
- **Failure.** Disconnect the network, send duplicates, send bad TRNs, and check that your system records each outcome.
- **Inbound.** Have the ASP deliver test invoices to you and check that they reach the right ledger.
- **Rehearsal.** Run a full day of real transactions through the test environment before switching.

The Ministry says the five-corner model is already working in the pilot, and that onboarding means choosing an ASP, registering on EmaraTax, then connecting.

| Group | Appoint an ASP by | Go live |
|---|---|---|
| Revenue of AED 50m or more | 30 October 2026 | 1 January 2027 |
| Revenue below AED 50m | 31 March 2027 | 1 July 2027 |
| Government entities | 31 March 2027 | 1 October 2027 |

Leave time for at least two full test cycles before your date. For the business side of these deadlines, read our [guide to UAE e-invoicing deadlines for SMEs](/blog/uae-e-invoicing-deadlines-smes). Under Cabinet Decision 173/2026, announced on 30 October 2026, each e-invoice or credit note not issued or transmitted can bring a fine of AED 100, capped at AED 5,000 per month. Not appointing an ASP has a separate fine.

## What KF Tech Solutions does here

KF Tech Solutions is not an ASP and is not on the Ministry's list. We build and maintain custom business systems and the APIs between them. Here, that means mapping your ERP or POS data to PINT AE, building the outbox, the retries and the error screens, and connecting it all to the ASP you choose. We have already connected a POS to Egypt's e-receipt system, described in [connecting your POS to Egypt's ETA e-invoicing system](/blog/eta-e-invoicing-pos-integration). If your system is custom-built, see also [UAE e-invoicing for custom POS and ERP systems](/blog/uae-e-invoicing-custom-pos-erp). We work with businesses in Egypt and the Gulf. See our [API and backend service](/services/api-and-backend) and our [UAE page](/uae).

## Common questions

### Do we need our own Peppol access point?

No. Under the UAE model, you send your data to your ASP, and the ASP handles the exchange with the buyer's ASP and the reporting. You need an API integration with one accredited provider.

### Can we keep sending PDF invoices?

You can send a PDF as a readable copy, but it is not the e-invoice. The Ministry states that PDFs, Word files, scans and emails are not e-invoices. The structured data sent through your ASP is the invoice.

### Our ERP posts returns as negative invoices. Is that a problem?

Yes. PINT AE does not allow negative invoices in the UAE. A reversal must be a credit note (code 381, or 81 for an out-of-scope transaction) with a reason code and, except for volume discounts, a reference to the original invoice.

### Which identifier does the network use to find our buyer?

The TIN, with scheme identifier `0235`. The TRN goes in the VAT identifier field. Deemed supplies, exports to receivers not on Peppol, and buyers outside UAE e-invoicing use fixed participant IDs instead.

### Does the invoice data have to be stored in the UAE?

Not any more. Ministerial Decision 197/2026, effective 1 October 2026, removed that requirement. Keep complete records in your own system anyway, and check other rules that may apply to your sector.

Want a developer to check what your system needs before your go-live date? [Book a free call](/book) or [send us your details](/contact).

## Sources

- [Ministry of Finance: eInvoicing](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
- [Ministry of Finance: decisions on scope and timelines (29 September 2025)](https://mof.gov.ae/en/news/ministry-of-finance-announces-the-issuance-of-two-ministerial-decisions-on-the-scope-of-obligations-and-the-timelines-for-implementing-the-electronic-invoicing-system-2/)
- [Ministerial Decision No. 244 of 2025](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [Ministry of Finance: amendments and deadline extension](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
- [Ministry of Finance: amendments under MD 197/2026](https://mof.gov.ae/en/news/ministry-of-finance-amends-electronic-invoicing-regulations-to-ease-the-burden-on-businesses/)
- [Ministry of Finance: updated penalties](https://mof.gov.ae/en/news/mof-announces-updated-administrative-penalties-related-to-the-uae-einvoicing-system-to-enhance-clarity-and-support-business-compliance/)
- [Ministry of Finance: accredited service providers](https://mof.gov.ae/en/about-us/initiatives/einvoicing/einvoicing-accredited-service-providers-asps/)
- [Ministry of Finance: pilot and onboarding update](https://mof.gov.ae/en/news/ministry-of-finance-hosts-awareness-event-in-ras-al-khaimah-on-latest-einvoicing-updates/)
- [Peppol: UAE electronic document specifications](https://docs.peppol.eu/poac/ae/)
- [Peppol: PINT AE Billing specification](https://docs.peppol.eu/poac/ae/pint-ae/bis/)
