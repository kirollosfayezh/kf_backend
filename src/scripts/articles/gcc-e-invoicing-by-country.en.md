---
title: E-invoicing in the GCC: where each country stands
summary: Saudi Arabia is live, the UAE and Oman start in 2027, and Qatar, Bahrain and Kuwait have no mandate in force. Dates, models and what your POS needs.
tag: Business Systems
tags: e-invoicing, GCC, Saudi Arabia, UAE, Oman, VAT, POS
order: 40
media: https://images.unsplash.com/photo-1700901742651-6b353164caf3
alt: Twin curved towers on the Lusail waterfront in Qatar under a blue sky with scattered clouds
caption: Each GCC state sets its own e-invoicing timetable, and a system selling across the region has to follow every one.
stats: 3|GCC countries with live or dated e-invoicing; 24 h|to report a Saudi simplified invoice; 1 Jan 2027|first UAE go-live, revenue of AED 50m or more
---

Saudi Arabia is the only GCC country where e-invoicing is already live: ZATCA
is moving businesses onto Phase 2 in waves, and Wave 25 must integrate by
1 February 2027. The UAE starts on 1 January 2027 for businesses with revenue of
AED 50m or more, and Oman on 1 April 2027 for companies above OMR 5m. Qatar has
only a draft law, Bahrain has announced no date, and we found no mandate in
Kuwait.

Last checked: 6 November 2026

This guide puts every country in one table, explains how each system works in
plain terms, and lists what a single POS or ERP has to handle if you sell in more
than one of them. It is general information, not tax or legal advice. Confirm
your own obligations with the tax authority or a tax adviser.

## The GCC at a glance

| Country | VAT | E-invoicing status, Nov 2026 | Key dates | How invoices travel |
|---|---|---|---|---|
| Saudi Arabia | 15% | Live, in waves | Wave 25 by 1 Feb 2027 | Directly to ZATCA's FATOORA platform |
| UAE | 5% | Pilot and voluntary since 1 Jul 2026 | 1 Jan 2027 (revenue AED 50m+), 1 Jul 2027 (others), 1 Oct 2027 (government) | Through an Accredited Service Provider (ASP) |
| Oman | 5% | Voluntary pilot since Aug 2026 | 1 Apr 2027 (above OMR 5m), 1 Oct 2027 (others) | Through an OTA-accredited provider |
| Qatar | None | Draft law approved by the Cabinet on 6 May 2026, not in force | No dates | Not yet defined |
| Bahrain | 10% | Expected | No official date | Not yet defined |
| Kuwait | None | No mandate found | None | Not applicable |

Two patterns stand out. Saudi Arabia uses a central model, where your system
talks to the tax authority directly. The UAE and Oman use a 5-corner model,
where your system sends the invoice to an accredited provider, which passes it
to the buyer's provider and reports the tax data. Your software has to fit
whichever model applies in each country where you issue invoices.

## Saudi Arabia: live, wave by wave

Since 2023 ZATCA has moved VAT-registered businesses onto Phase 2 (integration)
in waves, starting with the largest. Wave 25 covers businesses with VAT-able
revenue above SAR 187,500 in any year from 2022 to 2025, and they must integrate
with FATOORA by 1 February 2027.

What Phase 2 asks of your invoicing software is concrete:

- **Structured XML.** Invoices follow the UBL 2.1 structure. Anything sent to ZATCA is XML through an API.
- **An onboarded device or system.** Each invoicing unit is onboarded on FATOORA and receives a cryptographic stamp identifier (CSID).
- **Clearance for tax invoices.** Usually B2B. ZATCA validates and stamps the invoice before it goes to the buyer.
- **Reporting for simplified invoices.** Usually B2C, such as a shop receipt. Your system stamps it, prints a QR code, and reports it to FATOORA within 24 hours.
- **Anti-tampering.** Every invoice carries a UUID and the hash of the previous invoice, so invoices form an unbroken chain.
- **Arabic.** Invoices must be issued in Arabic.

The 24-hour window matters for shops and restaurants: the till can keep selling
during a short internet outage, as long as each receipt still reaches FATOORA
within 24 hours of being issued. ZATCA also publishes a directory of solution providers, but it states that
the listing is not an approval, so be careful with any vendor who calls a
system approved by ZATCA.

## UAE: B2B and B2G from 2027, through an ASP

The UAE system covers business-to-business and business-to-government
invoices. Business-to-consumer invoices are excluded for now, until a later
ministerial decision. A pilot with voluntary adopters started on 1 July 2026;
that was not a mandate.

The mandatory dates come from Ministerial Decision 244 of 2025, as amended:

| Group | Appoint an ASP by | Go live |
|---|---|---|
| Revenue of AED 50m or more | 30 Oct 2026 | 1 Jan 2027 |
| Revenue below AED 50m | 31 Mar 2027 | 1 Jul 2027 |
| Government entities | 31 Mar 2027 | 1 Oct 2027 |

On 10 May 2026 the Ministry of Finance moved the ASP deadline for the largest
group to 30 October 2026, while keeping the 1 January 2027 go-live unchanged.

Both the seller and the buyer appoint an ASP. Your ERP or POS sends the invoice
data in the UAE format, called PINT AE, to your ASP. The ASP validates it,
delivers it to the buyer's ASP and reports the tax data. A PDF, a Word file or
an emailed scan is not an e-invoice under this system.

## Oman: Fawtara from April 2027, B2C included

Oman's Decision 189/2026, announced in August 2026, sets the dates: 1 April 2027
for companies with annual supplies above OMR 5m, and 1 October 2027 for
everyone else. A voluntary pilot started in August 2026.

Invoices must be in the approved XML format, issued through a system linked to
an OTA-accredited provider, on a 5-corner model based on Peppol. Unlike the UAE,
Oman includes B2C from the start. The detailed technical rules, such as
reporting windows and QR codes, come from the Oman Tax Authority, so check its
current guidance before you build.

## Qatar, Bahrain and Kuwait: watch, but don't build yet

- **Qatar** has no VAT. On 6 May 2026 the Cabinet approved a draft e-invoicing law and its executive regulations. We found no evidence that it is in force and no dates. Nothing applies to Qatari invoices yet.
- **Bahrain** has had 10% VAT since 1 January 2022. E-invoicing is expected, and PwC reports that the market expects it to resemble the Saudi framework, but no official date has been announced.
- **Kuwait** has no VAT, and we found no e-invoicing mandate.

For these three countries the sensible step is to keep your invoice data clean
and structured, and to follow announcements from the tax authority, rather than
paying for an integration whose rules have not been published.

## What one POS or ERP must handle across the region

If you sell in more than one GCC country, or plan to, the country rules differ
but the groundwork is the same. Before you choose or rebuild a system, check
that it can do the following:

1. **Store every invoice as structured data.** Customer tax number, line items, VAT per line, totals and currency in fields, not only as a printed layout.
2. **Keep separate profiles per country.** Each country has its own VAT rate, tax number, currency and invoice format, so a branch in Riyadh and a branch in Dubai need different settings in the same system.
3. **Separate B2B from B2C.** Saudi Arabia treats them differently, the UAE excludes B2C for now, and Oman includes both.
4. **Plug in more than one connector.** A direct ZATCA connection for Saudi Arabia, and a link to the provider you appoint in the UAE or Oman.
5. **Keep selling offline.** Queue invoices locally and send them when the connection returns, within each country's window.
6. **Lock issued invoices.** Corrections go through credit and debit notes, never by editing or deleting an invoice.
7. **Print Arabic and bilingual invoices** with a QR code where the country requires one.
8. **Keep an error log** that shows which invoices were rejected and why, so someone can fix them the same day.

A system built this way only needs a new connector and a new profile when the
next country starts, not a rebuild. A system that only prints a PDF will need
replacing in Saudi Arabia, the UAE and Oman alike. If you are deciding between
a ready-made package and a custom build, our article on
[whether a small business needs an ERP](/blog/erp-for-small-business-egypt)
walks through the trade-offs.

## What KF Tech Solutions does here

We have integrated a POS with Egypt's ETA e-receipt system, which works on the
same principles: structured invoice data, unique invoice identifiers, and
submission to a tax authority. You can read how that works in
[connecting your POS to Egypt's ETA e-invoicing system](/blog/eta-e-invoicing-pos-integration).
We work with businesses in Egypt and the Gulf, and build custom
[POS and ERP systems](/services/business-systems) with the invoice data
structured for the countries you sell in. We are not an accredited service
provider in the UAE or Oman, and we do not hold any ZATCA approval; in those
countries the transmission goes through the provider or platform the rules
require. See our [Gulf page](/gulf) for how we work with clients in the region,
and [what to check before hiring an Egyptian software company](/blog/hire-egyptian-software-company-from-gulf).

## Common questions

### Is e-invoicing mandatory everywhere in the GCC?

No. It is live in Saudi Arabia, and mandatory dates are set in the UAE (from
1 January 2027) and Oman (from 1 April 2027). Qatar has a draft law that is not
in force, Bahrain has no official date, and we found no mandate in Kuwait.

### Does a PDF invoice count as an e-invoice?

Not in Saudi Arabia, the UAE or Oman. All three require structured data (XML)
that passes through ZATCA or an accredited provider. A PDF can still be the copy
the customer sees, but it is not the invoice the system recognises.

### Do UAE shops need to send receipts to an ASP in 2027?

Not under the current rules. The UAE system covers B2B and B2G invoices, and B2C
is excluded until a later ministerial decision. A shop that also invoices other
businesses still needs to handle those invoices through an ASP.

### Can one system cover Saudi Arabia and the UAE?

Yes, if it stores invoices as structured data, keeps a profile per country and
supports both a direct ZATCA connection and an ASP link. Ask any vendor to show
both working, not just describe them.

### Should I prepare now for Qatar, Bahrain or Kuwait?

Keep your invoice data structured and your customer tax details complete, which
helps everywhere. Building a specific integration makes sense only after the
tax authority publishes the technical rules and dates.

If you want your POS or ERP checked against the countries you sell in, or need
a system built for them, [book a free call](/book) or
[send us the details](/contact). We'll tell you what applies and what it would
take.

## Sources

- [ZATCA: Wave 25 e-invoicing integration notice](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Electronic Invoice XML Implementation Standard](https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/20230519_ZATCA_Electronic_Invoice_XML_Implementation_Standard_%20vF.pdf)
- [ZATCA: E-invoicing solution providers directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [UAE Ministry of Finance: Ministerial Decision No. 244 of 2025](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [UAE Ministry of Finance: amendments to the e-invoicing decisions, 10 May 2026](https://mof.gov.ae/en/news/ministry-of-finance-announces-targeted-amendments-to-einvoicing-system-decisions/)
- [Oman Tax Authority: Fawtara FAQ](https://tms.taxoman.gov.om/portal/documents/d/taxportal/faq-s)
- [Oman Observer: Decision 189/2026 on electronic tax invoices](https://www.omanobserver.om/article/1194193/business/decision-issued-on-tax-invoices-in-electronic-format)
- [Qatar News Agency: Cabinet meeting of 6 May 2026](https://qna.org.qa/en/news/news-details?id=cabinet-holds-regular-meeting&date=6%2F05%2F2026)
- [PwC Tax Summaries: Qatar, other taxes](https://taxsummaries.pwc.com/qatar/corporate/other-taxes)
- [PwC Tax Summaries: Bahrain, other taxes](https://taxsummaries.pwc.com/bahrain/corporate/other-taxes)
- [PwC Tax Summaries: Kuwait, other taxes](https://taxsummaries.pwc.com/kuwait/corporate/other-taxes)
- [PwC Tax Summaries: Oman, other taxes](https://taxsummaries.pwc.com/oman/corporate/other-taxes)
