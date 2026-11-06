---
title: UAE e-invoicing for custom POS and ERP systems
summary: How UAE e-invoicing works from your own system's side: the five corners, PINT AE data, choosing an ASP and the data to clean before you connect.
tag: Business Systems
tags: e-invoicing, PINT AE, ASP, POS, ERP, UAE
order: 36
media: https://images.unsplash.com/photo-1762265591492-1454ae17f31a
alt: A calculator, printed receipts, a pen and prayer beads on a desk beside a blue binder
caption: A printed or emailed PDF is not an e-invoice in the UAE; the data has to travel as PINT AE through an ASP.
stats: 5|corners in the UAE e-invoicing exchange model; 86|accredited service providers on the Ministry of Finance list on 6 November 2026; 0|PDFs, scans or emails that count as an e-invoice
---

Yes, you can keep your own POS or ERP under UAE e-invoicing. Your system has to send every B2B and B2G invoice as structured data in the PINT AE format to an Accredited Service Provider (ASP), which validates it, passes it to your buyer's ASP and reports the tax data. Businesses with revenue of AED 50 million or more go live on 1 January 2027, other businesses on 1 July 2027 and government entities on 1 October 2027.

Last checked: 6 November 2026

This guide is written from the integrator's side: what your own system has to do, what the ASP does for you, and what to clean up in your data before the connection is built. It is general information, not tax or legal advice. Confirm your own position with your tax adviser.

## What changes for your invoices

The UAE system is set out in Ministerial Decisions 243/2025 and 244/2025, amended several times in 2026. For a business running its own software, the practical changes are these:

- **Scope.** All B2B and B2G transactions. Both the business that issues the invoice and the business that receives it must appoint an ASP.
- **B2C is excluded for now.** Sales to consumers stay outside the system until the Minister decides otherwise.
- **A PDF is not an e-invoice.** PDFs, Word files, scans and emails do not count. The invoice is the structured data your system sends to the ASP.
- **Tax groups get a break.** Transactions inside a VAT tax group are excluded for 24 months from 1 January 2027 (Ministerial Decision 197/2026).
- **No local storage rule.** The same 2026 amendment removed the requirement to store invoice data in the UAE, and the duty to notify the FTA of a system failure.

So a counter sale to a walk-in customer is not affected yet, but an invoice your POS issues to a company or a government entity is.

## The five corners, from your system's side

The Ministry calls the model "Decentralized Continuous Transaction Control and Exchange". In plain terms, there are five parties, called corners:

1. **Corner 1: you, the supplier.** Your POS or ERP creates the invoice data in PINT AE format.
2. **Corner 2: your ASP.** It validates the data and passes it on.
3. **Corner 3: your buyer's ASP.** It receives the invoice from your ASP.
4. **Corner 4: your buyer.** Their ASP delivers the invoice to their system.
5. **Corner 5: the tax side.** Your ASP reports the tax data.

| Corner | Who | What your system needs to handle |
|---|---|---|
| 1 | Your business | Build complete invoice data and send it to your ASP |
| 2 | Your ASP | Return a status: accepted, or rejected with reasons |
| 3 | Buyer's ASP | Nothing directly: your ASP deals with it |
| 4 | Your buyer | Nothing directly, unless you also buy from them |
| 5 | Tax reporting | Nothing directly: your ASP reports for you |

Your system only ever talks to corner 2. That is the key point for a custom POS or ERP: you do not build a connection to the government or to every customer, you build one connection to the ASP you choose. Because every buyer must also appoint an ASP, the same connection usually has to work in the other direction too, so that invoices from your own suppliers arrive in your system as data.

The Ministry also mentions OpenPeppol for cross-border exchange. If you invoice customers outside the UAE, ask your ASP how it handles that before you sign.

## Deadlines and penalties

The timeline comes from Ministerial Decision 244/2025 as amended. Revenue means gross income in your most recent accounting period.

| Group | Appoint an ASP by | Go live |
|---|---|---|
| Revenue of AED 50m or more | 30 October 2026 | 1 January 2027 |
| Revenue below AED 50m | 31 March 2027 | 1 July 2027 |
| Government entities | 31 March 2027 | 1 October 2027 |

A voluntary pilot is already running, and the Ministry says the five-corner model is operational in it. If your revenue is AED 50 million or more, your ASP appointment date has already passed. For deadlines by business size, see our guide to [UAE e-invoicing deadlines for SMEs](/blog/uae-e-invoicing-deadlines-smes).

Penalties are set by Cabinet Decision 173/2026, announced on 30 October 2026:

- Not implementing the system or not appointing an ASP: AED 5,000, then AED 5,000 per month, capped at AED 50,000 in any 12 months.
- Each e-invoice or credit note not issued or not transmitted: AED 100, capped at AED 5,000 per month.
- Not telling your ASP about changed registration data: AED 250 per day, capped at AED 5,000 per month.

The second line is the one a custom system controls. A sale that never reaches the ASP because a sync job failed quietly can lead to a penalty, so failures must be visible.

## Where your POS or ERP fits

There are three ways to connect a system you already run:

1. **Use the ASP's own portal or app**, if it offers one, and type B2B invoices in by hand. This works for a handful of invoices a month and breaks down after that.
2. **Export files** from your system to the ASP on a schedule. Cheaper to build, but rejections come back late and someone has to match them to the original sale.
3. **Connect directly through the ASP's API.** Your POS or ERP sends each invoice as it is issued, stores the response, and shows the status on the invoice screen.

For a custom system the third route is usually the right one. The work on your side is the same whichever ASP you pick:

- Map your invoice, customer and item records to the fields your ASP asks for.
- Send each B2B invoice and credit note when it is issued, not at the end of the day.
- Store the ASP's response against the invoice, including rejection reasons.
- Retry automatically after a network failure, and raise an alert if an invoice is still not accepted.
- Receive incoming invoices from your suppliers and match them to purchase orders.

A POS that serves both walk-in customers and companies needs a rule at the till: a sale to a business or government buyer is a B2B or B2G invoice and goes to the ASP, a sale to a consumer stays a B2C receipt. Mark the buyer type on the customer record, so the cashier does not have to decide this alone. For the general pattern of linking systems, see [connecting the systems you already run](/blog/api-integration-connecting-business-systems).

## Clean your data before you connect

Expect most problems to come from the data, not from the code. Fix these before the integration is built:

- **Customer TRNs.** Every business customer needs a correct legal name and address in your system, plus its Tax Registration Number if it is VAT-registered. Make the TRN a required field for VAT-registered B2B customers.
- **Your own registration data.** Keep it identical in your system, on EmaraTax and with your ASP. Changes must reach your ASP, or a daily penalty can apply.
- **Item codes and units.** Each product and service needs a consistent code, description and unit of measure. Free-text lines typed at the till are hard to validate.
- **VAT treatment per line.** The general rate is 5%. Each item should carry its VAT treatment in the item record, so the cashier never has to choose it at the till.
- **Credit notes.** Every credit note should point to the original invoice. If your system handles returns by deleting or editing invoices, change that first.
- **Invoice numbering.** One unbroken sequence per series, with no reuse after cancellations.

If your data lives in several places, such as a POS for the counter and spreadsheets for wholesale, plan to bring it into one system before you connect. Whether that system should be a full ERP is a separate question, covered in [does a small business actually need an ERP?](/blog/erp-for-small-business-egypt), and the reasoning is the same in the UAE.

## How to choose an ASP from the Ministry's list

Only providers on the Ministry of Finance list can act as your ASP. The list showed 86 accredited ASPs on 6 November 2026, up from 32 in May. The Ministry's onboarding steps are short: choose an ASP, register on EmaraTax, then connect.

Use the list to check accreditation, then compare providers on how well they fit your own system:

- **API documentation.** Ask for it before you sign. Your developer should be able to read it and estimate the work.
- **A test environment.** You need a sandbox to send test invoices and see real rejection messages.
- **Incoming invoices.** Confirm that the ASP delivers invoices from your suppliers to your system through the same API.
- **Error handling.** Ask how rejections are returned and how long the ASP keeps the history.
- **Pricing.** Check whether you pay per invoice, per month or per connected system, and what happens above your plan.
- **Support and language.** Find out who answers when an invoice is stuck on the go-live day.

An ASP built for large ERPs may not suit a small custom POS, and the reverse is also true. Shortlist two or three and run a small test before you commit.

## What KF Tech Solutions does here

KF Tech Solutions is not an ASP and is not on the Ministry's list. We build and maintain custom POS and ERP systems, and we prepare the data in those systems and connect it to the ASP you choose through its API. We have already connected a POS to Egypt's e-receipt system, described in [connecting your POS to Egypt's ETA e-invoicing system](/blog/eta-e-invoicing-pos-integration), and the same work applies here: clean master data, reliable sending, and visible errors. We work with businesses in Egypt and the Gulf. See our [business systems service](/services/business-systems) and our [UAE page](/uae).

## Common questions

### Does UAE e-invoicing apply to my retail POS?

Only to its B2B and B2G sales for now. Sales to consumers are excluded until the Minister decides otherwise. If your shop also invoices companies, those invoices are in scope.

### Can I keep sending PDF invoices by email?

You can still send a PDF as a courtesy copy, but it is not the e-invoice. The e-invoice is the PINT AE data your system sends to your ASP.

### Do I need my own ASP if I only buy from suppliers?

The Ministry says both the issuer and the recipient must appoint an ASP. Check your own position with your tax adviser, because the dates depend on your revenue group.

### Does my invoice data have to be stored in the UAE?

Not under the e-invoicing rules any more. Ministerial Decision 197/2026 removed that requirement. Other sector rules, such as those for payment providers or health data, can still apply.

### How long does it take to connect a custom system?

It depends on the state of your data and on the ASP's API. Cleaning customer TRNs and item codes usually takes longer than writing the connector, so start with the data.

### What if the ASP rejects an invoice?

Your system should record the reason, flag the invoice to a person, and send a corrected document. Repeated rejections usually point to missing or wrong master data. For the technical detail of the format, see our [PINT AE developer guide](/blog/uae-pint-ae-developer-guide).

Want to know how much work your system needs before your go-live date? [Book a free call](/book) or [send us your details](/contact), and we will look at what you run today.

## Sources

- [UAE Ministry of Finance: eInvoicing (page updated 5 November 2026)](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
- [UAE Ministry of Finance: decisions on scope and timelines (29 September 2025)](https://mof.gov.ae/en/news/ministry-of-finance-announces-the-issuance-of-two-ministerial-decisions-on-the-scope-of-obligations-and-the-timelines-for-implementing-the-electronic-invoicing-system-2/)
- [Ministerial Decision No. 244 of 2025 on the Implementation of the Electronic Invoicing System](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [UAE Ministry of Finance: targeted amendments to eInvoicing decisions](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
- [UAE Ministry of Finance: amendments to ease the burden on businesses (19 October 2026)](https://mof.gov.ae/en/news/ministry-of-finance-amends-electronic-invoicing-regulations-to-ease-the-burden-on-businesses/)
- [UAE Ministry of Finance: updated eInvoicing penalties (30 October 2026)](https://mof.gov.ae/en/news/mof-announces-updated-administrative-penalties-related-to-the-uae-einvoicing-system-to-enhance-clarity-and-support-business-compliance/)
- [UAE Ministry of Finance: accredited service providers (ASPs)](https://mof.gov.ae/en/about-us/initiatives/einvoicing/einvoicing-accredited-service-providers-asps/)
- [UAE Ministry of Finance: awareness event on eInvoicing updates (27 September 2026)](https://mof.gov.ae/en/news/ministry-of-finance-hosts-awareness-event-in-ras-al-khaimah-on-latest-einvoicing-updates/)
- [PwC Worldwide Tax Summaries: United Arab Emirates, other taxes](https://taxsummaries.pwc.com/united-arab-emirates/corporate/other-taxes)
- [DLA Piper: data protection laws of the world, UAE](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
