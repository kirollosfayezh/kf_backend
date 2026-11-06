---
title: Oman e-invoicing (Fawtara): what your POS needs
summary: Oman makes XML e-invoices mandatory from 1 April 2027. Who is covered, how the five-corner Fawtara model works, and what your POS or ERP must do.
tag: Business Systems
tags: Fawtara, e-invoicing, VAT, Peppol, POS, Oman
order: 70
media: https://images.unsplash.com/photo-1599743777555-e362a2feab39
alt: Blue-tiled dome and minaret of a mosque on the Muttrah waterfront in Muscat, with mountains behind
caption: Oman's Fawtara turns every sales invoice into structured data sent through an accredited provider.
stats: 1 Apr 2027|e-invoicing becomes mandatory for businesses with annual supplies above OMR 5 million; 1 Oct 2027|the date for every other VAT-registered business; 24 h|to report a B2C invoice, while B2B invoices are exchanged in real time
---

Oman is making electronic invoicing mandatory for VAT-registered businesses. Under Decision 189/2026, companies with annual supplies above OMR 5 million must issue their tax invoices as XML through a system linked to a provider accredited by the Oman Tax Authority (OTA) from 1 April 2027, and all other VAT-registered businesses from 1 October 2027. Paper invoices, PDFs and invoices emailed as images will no longer count, so your POS or ERP has to produce structured invoice data and pass it to an accredited provider.

Last checked: 6 November 2026

The programme is called Fawtara. This guide explains what has been decided, how the system works and what to check in the software you use today. It is general information, not tax or legal advice: confirm how the rules apply to your business with the OTA or your tax adviser.

## What Oman has decided

Oman has charged VAT at 5% since 16 April 2021. Until now a VAT invoice could be printed, saved as a PDF or sent by email. Decision 189/2026, reported by the Oman Observer on 9 August 2026, changes that:

- All VAT-registered companies must issue their tax invoices electronically.
- Invoices must use the approved XML format, and be issued, transmitted and kept in that electronic format.
- They must be issued through an electronic system linked to an e-invoicing service provider accredited by the OTA.
- Each invoice must be secure, verifiable and contain all the data the VAT Law requires.
- Paper invoices, PDF invoices and invoices sent as images by email do not meet the requirement.

The OTA selected 100 companies for a voluntary pilot, scheduled to start at the end of August 2026. Deloitte puts the number of pilot participants at about 150. Either way, the pilot is voluntary. The dates that matter for everyone else are the two mandatory ones below.

## Who is covered, and when

| Group | Date | What applies |
|---|---|---|
| Pilot companies | End of August 2026 | Voluntary testing with the OTA |
| Annual supplies above OMR 5 million | 1 April 2027 | XML invoices through an OTA-accredited provider |
| All other VAT-registered businesses | 1 October 2027 | The same requirements |

Two points need care. First, some earlier secondary coverage gave different dates, and the OTA's own Fawtara FAQ describes a third phase for small and medium businesses that predates Decision 189/2026. The decision sets two dates, so plan on those, and check the OTA's Fawtara pages for any update before you commit to a schedule. Second, if your supplies are close to OMR 5 million, ask the OTA or your adviser which period the threshold is measured on. That detail decides whether you have an extra six months or not.

If you are below the threshold, 1 October 2027 can sound far away. It is less than a year from now, and the steps below take time.

## How Fawtara works: the five-corner model

The OTA's FAQ describes a five-corner model built on Peppol, the international network for exchanging e-invoices. Service providers complete testing on the OpenPeppol test bed as part of their OTA accreditation. In a five-corner model an invoice travels like this:

1. **You, the seller,** create the invoice in your POS, ERP or accounting software.
2. **Your accredited provider** receives the invoice data from your system, checks it and sends it over the network.
3. **Your buyer's provider** receives it.
4. **Your buyer** gets the invoice in their own system.
5. **The OTA** receives the tax data it needs.

The practical consequence is that your POS does not connect directly to the OTA. You choose an accredited provider, and your system talks to that provider. The OTA's FAQ also says ERP systems can be kept, depending on the arrangement you make with your accredited provider. Fawtara does not force you to change software, but whatever you use must be able to produce the invoice data and send it to your provider.

## B2B, B2C and the QR code

According to the OTA's FAQ, timing depends on who the customer is:

- **B2B invoices** (to other businesses) are exchanged in real time.
- **B2C invoices** (to consumers) are reported within 24 hours.
- **B2C starts at the same time as B2B and B2G**, so retail sales do not get a later date.
- **A QR code is mandatory on B2C invoices**, and the taxpayer generates it, which in practice means your POS.
- **Bilingual invoices are allowed**, so an invoice in Arabic and English is fine.
- **A paper receipt can still be given to a consumer**, but only in addition to the electronic invoice, never instead of it.

For a shop, restaurant or pharmacy, this is the part of Fawtara that matters most. Consumer sales are included from the start, so a cashier system that prints a simple receipt today will need to create an e-invoice record and a QR code for each sale, and report it to your provider within 24 hours.

## What your POS or ERP needs to do

The exact rules come from the OTA's technical specifications and from the provider you choose, but the work comes down to the same capabilities in almost every business. Use this as a checklist when you talk to your current supplier:

- **Structured invoice data.** Every invoice must carry the fields the VAT Law requires, stored as data rather than as text on a printed layout: seller and buyer details, VAT numbers where required, item lines, VAT rates and amounts, and totals.
- **XML in the approved format,** or a clean export that your provider converts. Ask the provider which one it expects.
- **A connection to your provider.** Usually an API: the POS sends the invoice and receives a response saying whether it was accepted.
- **A status for every invoice.** Each sale needs a record of whether it was sent, accepted or rejected, and why. Without it you cannot show that an invoice was reported.
- **Retry and offline handling.** If the internet drops, the shop should keep selling and send the queued B2C invoices automatically when the connection returns, well inside the 24-hour window. B2B invoices are exchanged in real time, so plan for a working connection where you issue them.
- **A QR code on B2C receipts,** generated by the system and printed or shown to the customer.
- **Returns and corrections.** Ask how your system and provider handle a refund or a corrected invoice. According to the OTA's FAQ, an issued invoice is adjusted by issuing an electronic credit or debit note.
- **Electronic records.** Invoices must be kept in the approved electronic format, not only as printed copies.
- **Arabic and English text** on the invoice, if you want bilingual invoices.

If your branches use different systems, or some invoices are still typed into a spreadsheet, every one of those routes needs a path to the provider. This is often the moment a business consolidates its sales, stock and accounts in one system. Our article on [whether a small business actually needs an ERP](/blog/erp-for-small-business-egypt) was written for Egypt, but the questions it asks are the same in Muscat.

## A plan for your deadline

Count back from your date, 1 April 2027 or 1 October 2027:

1. **List every place an invoice is issued:** each branch POS, the accounting system, the online store and any manual invoices.
2. **Ask each software supplier in writing** whether they will support Fawtara, through which accredited provider, and by what date.
3. **Choose an OTA-accredited provider** and compare pricing. The OTA's FAQ says each provider sets its own fees, per invoice, by subscription or otherwise, and that the OTA itself charges nothing.
4. **Clean your master data:** customer VAT numbers, item names, VAT categories and branch details.
5. **Build or switch on the integration** and test it in the provider's test environment, including returns, cancelled sales and an internet outage.
6. **Train cashiers and accountants** on what changes at the counter and at month end.
7. **Go live early,** with time to fix rejected invoices before your date.

If a supplier cannot give a clear answer to step 2, treat that as the answer. A system that is no longer maintained will not gain an e-invoicing connection by itself, and replacing it in the last two months is far harder than doing it now.

## Where KF Tech Solutions fits

KF Tech Solutions builds POS, ERP and other [business systems](/services/business-systems), and we work with businesses in Egypt and the Gulf ([our Gulf page](/gulf)). The closest work we have shipped is the Egyptian equivalent: a POS integration with the Egyptian Tax Authority's e-receipt system that submits each receipt and keeps its status with the sale ([what that kind of integration involves](/blog/eta-e-invoicing-pos-integration)). We are not an OTA-accredited provider, and Fawtara's model is different. For an Omani business we start by reviewing what you run today, and we tell you plainly whether it looks able to produce what Fawtara needs. If your system is custom-built, we can quote for the changes.

## Common questions

### Is e-invoicing mandatory in Oman?

Yes, for VAT-registered businesses, under Decision 189/2026: from 1 April 2027 for companies with annual supplies above OMR 5 million and from 1 October 2027 for the rest. Check the OTA's Fawtara pages for any change before you plan.

### Do I have to replace my POS or ERP?

Not necessarily. The OTA's FAQ says ERP systems can be kept, depending on your arrangement with your accredited provider. Your system does need to produce the required invoice data and connect to an accredited provider, so ask your supplier whether it will, and when.

### Is a PDF invoice still enough?

No. As reported, the decision says paper invoices, PDFs and invoices emailed as images do not meet the requirement. Invoices must be issued in the approved XML format.

### Does Fawtara cover retail sales to consumers?

Yes. According to the OTA's FAQ, B2C invoices start at the same time as B2B, must be reported within 24 hours and must carry a QR code generated by the taxpayer.

### Can my invoices be in Arabic and English?

Yes. The OTA's FAQ says bilingual invoices are allowed.

### Can I connect my system directly to the OTA?

Fawtara works through OTA-accredited service providers. Your system sends each invoice to your provider, and the provider handles the exchange over the Peppol network. According to the OTA's FAQ, a company that meets the provider criteria and passes the OTA's tests can also be accredited and act as its own provider.

Not sure whether your current system will be ready in time? [Book a free call](/book) and tell us what you run, or [send us a message](/contact).

## Sources

- [Oman Observer: Decision issued on tax invoices in electronic format, 9 August 2026](https://www.omanobserver.om/article/1194193/business/decision-issued-on-tax-invoices-in-electronic-format)
- [Oman Tax Authority: Fawtara FAQ, updated 23 April 2026](https://tms.taxoman.gov.om/portal/documents/d/taxportal/faq-s)
- [Deloitte: Oman e-invoicing (Fawtara)](https://www.deloitte.com/middle-east/en/services/tax/perspectives/oman-e-invoicing-fawtara.html)
- [PwC: Oman, other taxes (VAT)](https://taxsummaries.pwc.com/oman/corporate/other-taxes)
