---
title: ZATCA Wave 25: who must integrate by 1 February 2027
summary: Wave 25 covers businesses with VAT-able revenue over SAR 187,500 in any year from 2022 to 2025. Who is in, what changes, and a plan for the deadline.
tag: Business Systems
tags: ZATCA, e-invoicing, FATOORA, Phase 2, VAT, Saudi Arabia
order: 31
media: https://images.unsplash.com/photo-1636742377324-c0b07a1ea727
alt: A trader in a red-checked shemagh sits among textiles and goods at a covered Gulf market stall
caption: Wave 25 reaches down to small traders: a VAT-able turnover above SAR 187,500 is enough to be called up.
stats: SAR 187,500|of revenue subject to VAT, in any one year from 2022 to 2025, puts a business in Wave 25; 1 Feb 2027|the date ZATCA set for Wave 25 to be integrated with FATOORA; 24 h|to report each simplified invoice to FATOORA once Phase 2 applies
---

Wave 25 is the latest group of Saudi businesses that ZATCA is bringing into Phase 2 of e-invoicing, the integration phase. It covers taxpayers whose revenue subject to VAT exceeded SAR 187,500 in any one of 2022, 2023, 2024 or 2025, and they must have their invoicing integrated with ZATCA's FATOORA platform by no later than 1 February 2027. ZATCA announced the wave on 24 July 2026 and says it will notify every taxpayer it targets.

Last checked: 6 November 2026

The threshold is half of Wave 24's, so this wave reaches far smaller businesses than any before it. This is general information, not tax advice.

## What ZATCA announced

| Item | Wave 25 |
|---|---|
| Who | Taxpayers whose revenue subject to VAT exceeded SAR 187,500 |
| Reference years | 2022, 2023, 2024 or 2025; one year is enough |
| Integrate with FATOORA by | 1 February 2027 |

**2025 counts for the first time.** Every earlier wave measured revenue in 2024 or before, so a business that only grew past the line last year, or only started trading in 2025, can be in this wave.

**The amount is small.** SAR 187,500 is USD 50,000 at the fixed rate of 3.75 riyals to the dollar, or SAR 15,625 a month. That is within reach of a single shop, café or workshop.

## Is your business in Wave 25?

Check three things in your VAT returns.

1. **Are you VAT-registered and resident in Saudi Arabia?** ZATCA's e-invoicing rules apply to taxable persons resident in the Kingdom, and to anyone issuing invoices on their behalf.
2. **Did your revenue subject to VAT exceed SAR 187,500 in any single year from 2022 to 2025?** One year is enough. A weak 2024 does not cancel a strong 2023.
3. **Were you already in an earlier wave?** If your revenue passed a higher line in that wave's reference years, its date applied to you, not this one.

In practice, Wave 25 mostly picks up three kinds of business:

- those with revenue between SAR 187,500 and SAR 375,000, the band where VAT registration is voluntary rather than mandatory;
- those whose revenue first crossed the line in 2025, since Wave 24 looked only at 2022 to 2024;
- those that started trading in 2025 and passed SAR 187,500 in their first year.

The revenue test is already in your VAT returns, so you do not need to wait for ZATCA's message to start. If your case is less clear, for example a VAT group or a change of legal form, confirm it with your tax adviser or with ZATCA.

## How the threshold came down: waves 20 to 25

Phase 2 started on 1 January 2023 with the largest taxpayers, those above SAR 3 billion, and has moved down in waves since. The last six:

| Wave | Revenue subject to VAT above (SAR) | Reference years | Integrate by | Announced |
|---|---|---|---|---|
| 20 | 1,500,000 | 2022 or 2023 | 31 Oct 2025 | 31 Jan 2025 |
| 21 | 1,250,000 | 2022, 2023 or 2024 | 30 Nov 2025 | 28 Feb 2025 |
| 22 | 1,000,000 | 2022, 2023 or 2024 | 31 Dec 2025 | 21 Mar 2025 |
| 23 | 750,000 | 2022, 2023 or 2024 | 1 Jan to 31 Mar 2026 | 27 Jun 2025 |
| 24 | 375,000 | 2022, 2023 or 2024 | 30 Jun 2026 | 26 Sep 2025 |
| 25 | 187,500 | 2022, 2023, 2024 or 2025 | 1 Feb 2027 | 24 Jul 2026 |

The last two figures are not arbitrary: SAR 375,000 is the mandatory VAT-registration threshold and SAR 187,500 the voluntary one, both measured over 12 months. Wave 24 used the mandatory figure; Wave 25 uses the voluntary one.

ZATCA's rule is to notify each wave at least six months ahead, and Wave 25 got a little over six months. ZATCA's news page, last updated on 21 October 2026, still showed it as the latest wave.

## What changes on 1 February 2027

If you are VAT-registered, you should already be issuing e-invoices. Phase 1 has applied to resident taxpayers since 4 December 2021, and a scanned or copied paper invoice does not count as an electronic one. Wave 25 adds the second phase.

| | Phase 1: issuing and storing | Phase 2: integration |
|---|---|---|
| Applies | Since 4 December 2021 | From your wave's date |
| Format | Generated electronically by a system | XML in the UBL 2.1 structure, or PDF/A-3 with the XML embedded |
| Your system | Issues and stores invoices electronically | Onboarded on FATOORA, with a CSID for each device |
| Tax invoices, usually B2B | Issued and stored | Cleared by ZATCA before the buyer receives them |
| Simplified invoices, usually B2C | Issued and stored | Stamped by your system and reported within 24 hours |

In practice:

- **Every device is onboarded.** Each solution or device that issues invoices under your VAT number is onboarded on the FATOORA portal as an e-invoice generation solution. The portal issues, renews and revokes each unit's cryptographic stamp identifier (CSID).
- **Clearance comes first.** ZATCA validates each tax invoice, adds its stamp and a QR code, and returns it, and only then can it go to the buyer. The XML is sent through an API, and credit and debit notes on these invoices are cleared too.
- **Reporting within 24 hours.** For a simplified invoice, your system applies its own stamp and a QR code, the customer gets a printed copy at once (or an electronic one if you both agree), and the XML must reach FATOORA within 24 hours.
- **No edits after issue.** Each invoice carries a unique ID and the hash of the previous one, so each device's invoices form one chain. Users cannot delete or change stored invoices, reset the counter or change the system date. A mistake on an issued invoice is corrected with a credit or debit note against it, not by editing it.
- **Arabic on the invoice.** The readable invoice must be in Arabic. Other languages can sit alongside it.

For updating, connecting or replacing a POS or ERP you already own, see [ZATCA Phase 2 integration for your own POS or ERP](/blog/zatca-phase-2-integration-custom-pos-erp).

## Can your current system do it?

Whatever you run today, get written answers to these questions from your supplier before you pay for anything:

- Is the system already onboarded on FATOORA and issuing live invoices for other customers, beyond ZATCA's sandbox? Ask to see a cleared tax invoice and a reported simplified invoice from a real installation.
- Does every cashier, tablet and branch get its own CSID, and what does adding a device involve?
- When the internet drops, do sales continue, with simplified invoices queued and reported inside the 24 hours?
- How are returns handled? A refund on a cleared tax invoice needs a credit note that is cleared as well.
- What does the update cost, per device or per branch, and by what date will it be live for you?

Do not be reassured by a logo. ZATCA's Solution Providers Directory is a guiding list that is not legally binding, and ZATCA says it "is not considered as an approval" of the solutions listed. Any compliant solution may be used, listed or not.

If the answers are weak, decide this month, not in January. If replacing is on the table, the questions in [how to choose a POS cashier system](/blog/pos-cashier-system-for-shops-egypt) on offline mode, returns and shifts apply in Riyadh as much as in Cairo.

## A 12-week plan to 1 February 2027

The twelve weeks start on Monday 9 November 2026. If you start later, shorten the first two stages, not the testing.

### Weeks 12 to 10: confirm and list (to 23 November)

- Check your revenue subject to VAT for each year from 2022 to 2025 against SAR 187,500, and keep the figures on file.
- List every place an invoice is issued: each cashier, tablet, branch, accounting package and online store, plus any paper invoice book.
- Send your suppliers the questions above, and name one person who owns the project until the last device is live.

### Weeks 10 to 6: decide and prepare (to 21 December)

- Choose the route for each system: update it, connect it or replace it.
- Clean the data the invoice will carry: Arabic item names, the right VAT category on each item, and VAT numbers for your business customers.
- Agree the timetable with your supplier or developer, including a test period with real transactions.

### Weeks 6 to 2: onboard and test (to 18 January)

- Run the system through ZATCA's testing toolkit first, before any live invoice.
- Onboard each device on the FATOORA portal, then check that the portal's list of onboarded devices matches yours.
- Test a full trading day, not one clean sale: a tax invoice to a business customer, a return with its credit note, and an hour with the internet unplugged.

### The last two weeks: go live (to 1 February)

- Go live on one counter first, then the rest once a full day of invoices has gone through cleanly.
- Check rejections and warnings daily, and fix the cause in the data rather than the single invoice.
- Make sure cashiers know what to do when an invoice is rejected, and who to call.

## Where KF Tech Solutions fits

KF Tech Solutions builds POS, ERP and other [business systems](/services/business-systems), and we work with businesses in Egypt and the Gulf ([our page for Saudi businesses](/saudi-arabia)). The closest work we have shipped is the Egyptian equivalent: an integration with the Egyptian Tax Authority's e-receipt system that signs and submits each receipt and keeps its submission status with the sale ([what that kind of integration involves](/blog/eta-e-invoicing-pos-integration)). ZATCA's format and onboarding are different, so for a Saudi business we start by reviewing what you run today and what your supplier has promised, and we tell you plainly whether it looks ready.

## Common questions

### Our revenue passed SAR 187,500 only in 2025. Are we in Wave 25?

Yes, unless you were already in an earlier wave. 2025 is one of the four reference years, and exceeding the threshold in any one of them is enough, including for a business that started trading during 2025.

### We have not received a notification. Can we wait?

ZATCA says it will notify every taxpayer targeted in Wave 25, and it notifies each wave at least six months ahead. Waiting for the message only shortens your preparation time, though. If your revenue meets the test and no message has arrived, ask ZATCA or your tax adviser rather than assume you are outside the wave.

### Our revenue never exceeded SAR 187,500. What applies to us?

If you are VAT-registered, Phase 1 still applies: invoices must be issued and stored electronically. ZATCA's news page, last updated on 21 October 2026, showed no Phase 2 date for businesses below this line, and ZATCA gives each wave at least six months' notice.

### Can we keep issuing invoices from Excel or a Word template?

Not once your wave applies. Phase 2 invoices must come from a solution that is onboarded on FATOORA, produces ZATCA's XML and connects through its API, which a spreadsheet or document template cannot do.

### What happens if we miss 1 February 2027?

ZATCA publishes fines for e-invoicing violations, and they depend on the type of violation and how often it is repeated. We go through the official list in [ZATCA e-invoicing fines: what the official list says](/blog/zatca-e-invoicing-penalties).

Wave 25 has a fixed date and a short runway. If you want a second opinion on your current system or on your supplier's answers, [book a free call](/book) or [send us a message](/contact).

## Sources

- [ZATCA: criteria for Wave 25 of the integration phase, 24 July 2026](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: criteria for Wave 24, 26 September 2025](https://zatca.gov.sa/en/Pages/news-1426.aspx)
- [ZATCA: Wave 22 regulations, 21 March 2025](https://zatca.gov.sa/en/MediaCenter/News/Pages/e-invoicing-wave-22-2025.aspx)
- [ZATCA: Wave 21 regulations, 28 February 2025](https://zatca.gov.sa/en/MediaCenter/News/Pages/e-invoicing-wave-21-2025.aspx)
- [ZATCA: Wave 20 regulations, 31 January 2025](https://zatca.gov.sa/en/MediaCenter/News/Pages/e-invoicing-wave-20-2025.aspx)
- [EY: Saudi Arabia announces 23rd wave of Phase 2 e-invoicing integration, 7 July 2025](https://www.ey.com/en_gl/technical/tax-alerts/saudi-arabia-announces-23rd-wave-of-phase-2-e-invoicing-integration)
- [ZATCA: e-invoicing roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: what e-invoicing is](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: E-Invoicing Detailed Guidelines](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Guideline for Regional Headquarters in KSA, for the VAT registration thresholds](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-for-Regional-Headquarters-in-KSA.pdf)
- [ZATCA: E-Invoicing Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [ZATCA: violations and fines related to e-invoicing, 16 November 2021](https://zatca.gov.sa/en/MediaCenter/News/Pages/E-invoicing-Violations-Fines.aspx)
- [ZATCA: news](https://zatca.gov.sa/en/MediaCenter/News/Pages/default.aspx)
- [SAMA: the riyal's peg to the US dollar](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx)
