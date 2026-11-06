---
title: Odoo or custom ERP in Saudi Arabia: real costs
summary: What Odoo charges per user, what partners and hosting add, how Phase 2 e-invoicing fits in, and how to compare Odoo with a custom ERP over 3 years.
tag: Business Systems
tags: Odoo, ERP, custom ERP, ERP pricing, ZATCA, Saudi Arabia
order: 47
media: https://images.unsplash.com/photo-1784637729389-f24e1d2a8b22
alt: Riyadh skyline in daylight, with a pointed glass tower behind low office blocks and palm trees
caption: The licence is the smallest line in an ERP budget; compare partner fees and localisation over three years.
stats: US$ 11.20|Odoo Standard list price per user per month; 36|months to compare, not just the first year; 24 hours|to report a B2C invoice to FATOORA in Phase 2
---

Odoo's own pricing page lists the Standard plan at US$ 11.20 per user per month and the Custom plan at US$ 20.90, with a discount for the first 12 months. Implementation, customisation, data migration and some hosting options cost extra. A custom ERP costs more at the start but has no per-user licence, so which one is cheaper for a Saudi business depends on your number of users, how far you would have to change Odoo, and whether you compare three years or only the first one.

Last checked: 6 November 2026

## What Odoo itself charges

These are the figures on Odoo's pricing page when we checked it. The page showed prices in US dollars and offered yearly and monthly billing, so open it yourself before you budget: prices and promotions change.

| Plan | List price per user per month | First 12 months | What it includes | Hosting |
|---|---|---|---|---|
| One App Free | US$ 0 | US$ 0 | One app, unlimited users | Odoo Online |
| Standard | US$ 11.20 (about SAR 42) | US$ 8.95 | All apps | Odoo Online |
| Custom | US$ 20.90 (about SAR 78) | US$ 16.40 | All apps, plus Odoo Studio, multi-company and the external API | Odoo Online, Odoo.sh or on-premise |

The SAR figures use the official peg of 3.75 riyals per US dollar. Three details on the page matter for your budget:

- **The discount is temporary.** Odoo's footnote says it "is valid for 12 months, for initial users ordered". From month 13, and for users you add later, you pay the list price.
- **Customisation and integrations need the Custom plan.** Odoo Studio, multi-company and the external API are listed only under Custom. If you plan to connect Odoo to your POS, online store or bank, budget for Custom, not Standard.
- **Odoo.sh hosting is extra.** The Custom plan can run on Odoo.sh, but the page says the cost of Odoo.sh hosting is not included. On-premise means you pay for and run your own server.

The page also says implementation services are not included in any plan.

## What the licence leaves out

The licence is usually the smallest line in an ERP project. Odoo's page says companies with fewer than 50 employees usually work directly with Odoo using Success Packs, companies with more than 50 usually work with a partner that offers local project management, and companies with more than 250 should contact Odoo. Either way, these costs sit outside the licence:

- **Implementation:** setting up your chart of accounts, warehouses, price lists, taxes, approval rules and user permissions.
- **Data migration:** items, customers, suppliers, opening balances and open invoices from your current system or spreadsheets.
- **Customisation:** changes made in Odoo Studio or as custom modules written by a developer.
- **Integrations:** links to your POS, online store, delivery apps or other systems through the external API.
- **Training:** for each department, not just one person.
- **Support after go-live:** who fixes problems, how fast, and at what rate.
- **Upgrades:** every custom module has to be checked and often adjusted when you move to a new Odoo version.

When you ask a partner for a quote, ask for each of these as a separate line, with a fixed price or a number of days, and a written list of what is out of scope. Also ask who owns the code of any custom module they write for you.

## Saudi e-invoicing: ask how it works, don't assume

Since 2023 ZATCA has moved VAT-registered businesses onto Phase 2 in waves. Wave 25, covering VAT-able revenue above SAR 187,500 in any year from 2022 to 2025, must integrate with FATOORA by 1 Feb 2027. Your ERP is usually where invoices are issued, so this belongs in the comparison whichever system you choose.

ZATCA does not certify software. Its Solution Providers Directory is a guiding list and, in ZATCA's words, "is not considered as an approval by ZATCA". So a vendor saying "compliant" tells you little. Ask the partner or developer to show you, in a test environment, how the system does each of these:

- Onboards each invoicing unit on the FATOORA portal and stores its Cryptographic Stamp Identifier (CSID), and who renews it.
- Generates invoices as UBL 2.1 XML and sends them to ZATCA through the API.
- Clears tax invoices (usually B2B) with ZATCA before they go to the buyer, including credit and debit notes.
- Reports simplified invoices (usually B2C) to FATOORA within 24 hours, with the Phase 2 QR code on the printed copy.
- Chains each invoice to the previous one with a UUID and hash, and blocks editing or deleting stored invoices.
- Prints the invoice in Arabic.

This is general information, not tax advice. For the technical detail, read our guide to [ZATCA Phase 2 integration for a custom POS or ERP](/blog/zatca-phase-2-integration-custom-pos-erp).

## Odoo or custom: which fits your business

Before comparing prices, check whether you need an ERP at all. Many small businesses need good inventory and invoicing first; our article on [whether a small business needs an ERP](/blog/erp-for-small-business-egypt) walks through that question.

### When Odoo is the better fit

- Your processes are standard: buy, stock, sell, invoice, pay.
- You have a small team and want to start in weeks, not months.
- You are willing to adjust some habits to the way Odoo works.
- You want accounting, inventory, sales and purchasing in one place without paying for a build up front.

### When a custom ERP makes more sense

- The way you work is your advantage, and Odoo would need heavy customisation to follow it.
- You have many users who each do one narrow task, so per-user licences add up every month.
- You already use a POS or accounting system that works well and only need the missing pieces.
- You want to own the code and decide when to change or upgrade it.

Our article on [custom software vs off-the-shelf](/blog/custom-software-vs-off-the-shelf-how-to-choose) covers the general trade-off in more depth.

## The middle path: custom modules or a connector

The choice is often framed as "all of Odoo" or "a full custom ERP", but many businesses need neither. Three cheaper options are worth pricing:

1. **A connector.** Keep the systems that work (your POS, your online store, your accounting software) and build a link that moves sales, stock and invoices between them automatically. This removes double entry without replacing anything.
2. **One custom module.** If one process does not fit any standard system, such as job costing, rentals or a special approval flow, build only that piece and connect it to what you already have.
3. **A focused inventory or POS system.** If stock is where you lose money, start there. Our guide to [where stock really goes](/blog/inventory-management-system-egypt) shows the usual leaks, and [ready-made vs custom POS in Saudi Arabia](/blog/ready-made-vs-custom-pos-saudi-arabia) compares the cashier side.

A connector or single module usually costs a fraction of a full ERP project, and you can still move to Odoo or a custom ERP later.

## How to compare costs over three years

Most buying mistakes come from comparing one year of licences with the full price of a build. Put both options on the same 36-month sheet.

Here is the Odoo licence alone, at the prices on the pricing page on 6 November 2026, assuming they stay the same, all users are ordered at the start and the first-year discount applies:

| Users | Standard, 3 years | Custom, 3 years |
|---|---|---|
| 10 | US$ 3,762 (about SAR 14,100) | US$ 6,984 (about SAR 26,200) |
| 25 | US$ 9,405 (about SAR 35,300) | US$ 17,460 (about SAR 65,500) |

The arithmetic for 10 Standard users is 10 × US$ 8.95 × 12 months, plus 10 × US$ 11.20 × 24 months. Then add the lines that the licence leaves out:

- **Odoo side:** implementation, data migration, customisation, integrations, Odoo.sh or server hosting if you use them, training, support, and the cost of updating custom modules at each upgrade.
- **Custom side:** the build, data migration, hosting, a monthly maintenance and support plan, and any changes you expect to request.

Compare the two totals, then ask which one you can change more cheaply when your business changes. Projects start from $200 (about SAR 750 / AED 735); the final price depends on scope, with a fixed written quote after a free call.

## Where KF Tech Solutions fits in

We build custom business systems: ERP modules, POS and inventory systems, and the connectors that link them to the tools you keep. In Egypt we integrated a POS with the tax authority's [ETA e-receipt system](/projects/egypt-eta). We work with businesses in Egypt and the Gulf, and if a standard system such as Odoo fits you better, we will say so. See our [business systems service](/services/business-systems) and our page for [businesses in Saudi Arabia](/saudi-arabia).

## Common questions

### How much does Odoo cost in Saudi Arabia?

When we checked on 6 November 2026, Odoo's pricing page showed Standard at US$ 11.20 per user per month (about SAR 42) and Custom at US$ 20.90 (about SAR 78), with lower prices for the first 12 months. Implementation, customisation and Odoo.sh hosting are extra, so the licence is only part of the cost.

### Is there a free version of Odoo?

The pricing page lists One App Free: one app with unlimited users, hosted on Odoo Online. Once you need a second app, you move to a paid plan.

### Does Odoo work with ZATCA Phase 2?

ZATCA does not certify or approve any software, so do not rely on a label. Ask your partner to show onboarding, clearance, 24-hour reporting and the invoice hash chain working in a test environment before you sign. The same applies to a custom ERP.

### Is a custom ERP more expensive than Odoo?

At the start, usually yes, because you pay for the build. Over three years the gap can close or reverse when you have many users, need heavy customisation, or only need one module or connector rather than a full ERP.

### Can I start with Odoo and add custom parts later?

Yes. The Custom plan includes Odoo Studio and the external API, which let you add fields and connect other systems. Keep custom code small, because each piece has to be checked at every Odoo upgrade.

Not sure which route fits your business? [Book a free call](/book) or [send us your current setup](/contact), and we will help you compare the options on one sheet.

## Sources

- [Odoo pricing](https://www.odoo.com/pricing)
- [ZATCA: E-invoicing roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: Wave 25 announcement](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: E-Invoicing Detailed Guideline](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [SAMA: Saudi riyal exchange rate](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx)
