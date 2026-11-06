---
title: Website and app projects in Bahrain: payments, VAT, data
summary: What a website or app for a Bahrain business needs: BenefitPay and card payments, 10% VAT at checkout, PDPL data rules and e-invoicing to come.
tag: Web Development
tags: website design, app development, Bahrain, BenefitPay, VAT, PDPL, GCC
order: 99
media: https://images.unsplash.com/photo-1748066768504-99532da7d1e9
alt: Bahrain World Trade Center towers above the Manama waterfront at sunrise
caption: A project built for Manama has to handle 10% VAT, BenefitPay and Bahrain's own data-protection law.
stats: 10%|VAT rate in Bahrain since 1 January 2022; 72|hours to give notice of a personal data breach under PDPL; 83|jurisdictions listed for transfers of personal data
---

A website, online store or mobile app for a business in Bahrain is designed and built the same way as anywhere else. Four local details change the plan: how customers pay (BenefitPay, bank transfers and cards), 10% VAT for registered businesses, Bahrain's Personal Data Protection Law (Law 30/2018), and e-invoicing, which is expected but has no official date. Settle these before the first design and you will not have to rebuild the checkout later.

Last checked: 6 November 2026

This guide is general information for business owners, not tax or legal advice. Confirm anything that affects your filings or contracts with your accountant or lawyer.

## Payments: BenefitPay, Fawri+ and Fawateer

BENEFIT runs Bahrain's electronic funds transfer system. The Central Bank of Bahrain lists its services as Fawri+ (transfers available 24/7), Fawri, and Fawateer for bill payment. BENEFIT's app, BenefitPay, lets customers pay merchants by QR code, send Fawri+ transfers and pay Fawateer bills.

For a website or app, that gives you three common ways to get paid:

| Method | Where it fits | What to check before building |
|---|---|---|
| Card checkout through a licensed payment gateway | Online stores, bookings, subscriptions | Which cards and wallets the gateway supports, its fees and how refunds work |
| BenefitPay QR | Shops, restaurants, payment on collection | Whether your bank or provider offers it for your business, and how a paid order is confirmed |
| Bank transfer or Fawri+ | Larger B2B invoices and deposits | Who matches each transfer to its order, and how quickly |

The decision that matters is not the logo on the checkout page but what happens after the customer pays: how the order is marked as paid, who is notified, and how a refund is recorded. You sign the merchant agreement with the bank or gateway; the developer connects your site to it using that provider's documentation and test environment. Start the merchant application early, because approval runs on the provider's timeline, not the developer's.

If you take most payments in person or by transfer, you may not need online card payment on day one. A clear order form, a WhatsApp button and a confirmed payment step in the dashboard can be enough to start, with a gateway added once online orders justify the fees.

## VAT at 10%, and e-invoicing still to come

Bahrain's VAT rate has been 10% since 1 January 2022. It is administered by the National Bureau for Revenue (NBR), and registration is mandatory above the BHD 37,500 threshold. If your business is registered, the website or app has to handle VAT correctly wherever it shows prices or issues documents:

- **Prices.** Decide with your accountant how prices are shown, and make the checkout display the VAT amount clearly.
- **Invoices and receipts.** The system that issues them needs your VAT number, the correct rate on each line and totals that add up.
- **A rate you can change.** Keep VAT as a setting per product in the dashboard, not a number fixed in the code, so a change is an edit rather than a new release.
- **Reports.** Sales, refunds and VAT by period, exported in a format your accountant can use.

E-invoicing is expected in Bahrain, in a framework "similar to the framework introduced in Saudi Arabia" according to PwC's tax summary, but no official date has been announced. It is not mandatory today. The sensible step now is modest: store invoice data as structured records (seller, buyer, items, rates, totals and a unique number), not only as PDF files. Then connecting to a future system is an integration job, not a rewrite. Be cautious with any vendor that calls its product "ready" for Bahraini e-invoicing rules that have not yet been published.

## Personal data under PDPL (Law 30/2018)

Bahrain's Personal Data Protection Law, Law 30/2018, has been in effect since 1 August 2019. Two of its points affect a website or app directly:

- **Breach notice within 72 hours.** The law sets a 72-hour window to give notice of a personal data breach. Ask your developer how a breach would be detected, and who would be told.
- **Transfers abroad.** Personal data may be transferred to 83 listed jurisdictions, or on other legal grounds. Many websites keep their database with a cloud provider outside Bahrain, so ask where the database and backups are hosted and check that location with your adviser.

In the build itself, the habits are simple. Collect only the fields you need. Protect the dashboard with individual logins and roles, so staff see only what their job requires. Keep backups and test that they restore. Write down what each form collects and why. Publish a privacy notice in Arabic and English that describes what your site actually does, not a template copied from another company.

## Arabic, English and phones first

Plan for phones first, and for both languages from the start:

- **Arabic designed right to left from the first sketch**, not a mirrored English page, with separate pages for each language so both can appear in search results.
- **Prices in Bahraini dinars**, entered once in the dashboard and shown the same way in both languages.
- **Fast pages on mobile data**, with compressed images and no heavy effects that slow down a phone.
- **Direct contact.** Call and WhatsApp buttons that work, and forms that reach a person who answers.

Restaurants and shops should also think about delivery apps. talabat and Keeta both operate in Bahrain; Keeta launched there on 5 January 2026. Many food businesses sell through these apps, and your own website or app does a different job: it is where returning customers find your full menu, your branches and your contact details, and where you can take direct orders if you choose to. Decide early whether your own menu and prices match what customers see on the apps, so they do not find conflicting information.

## Choosing who builds it

Whether you hire a studio in Manama or work remotely with one elsewhere, the questions are the same. Our guide on [how to choose a software company](/blog/how-to-choose-a-software-company) covers them in detail. For a Bahrain project, add these:

1. Ask which payment gateways they have connected before, and ask to see one working.
2. Ask where your data will be hosted and how backups are restored.
3. Ask how VAT is set up, and who changes the rate if it changes.
4. Ask to see an Arabic site they built, and open it on your own phone.
5. Ask for a written scope and a fixed quote before any work starts.

Put the protections in the contract: a non-disclosure agreement, return or secure deletion of your data at the end of the contract, an incident-notification procedure, and full source-code and IP assignment to your company. The domain, hosting and app store accounts should be registered in your company's name, not the developer's.

If the team is outside Bahrain, check the working hours. Manama is on UTC+3 all year. Cairo matches Manama from late April to late October and is one hour behind it in winter, so a normal working day overlaps almost completely.

What drives the price is the same in Manama as in Cairo: the number of pages and languages, who writes the content, and which integrations you need, such as payments, delivery or accounting. Our breakdown of [what a company website costs in Egypt](/blog/company-website-cost-egypt) walks through those drivers.

## How KF Tech Solutions helps

KF Tech Solutions is a software studio in Cairo, founded in 2020. We build company websites, online stores, web apps and mobile apps in Arabic and English, with a dashboard where you edit content yourself, and we also build POS, inventory and ERP systems when the website needs to connect to how you sell. We work with businesses in Egypt and the Gulf. See our [web development service](/services/web-development) and our [Gulf page](/gulf) for how we work remotely. Projects start from $200 (about SAR 750 / AED 735); the final price depends on scope, with a fixed written quote after a free call.

## Common questions

### Do I need BenefitPay on my website?

Not necessarily. It depends on how your customers pay. Many online stores start with card checkout through a licensed gateway and add other methods when customers ask for them. If customers pay on collection or in your shop, a BenefitPay QR from your bank or provider may suit you better than an online checkout.

### Is e-invoicing mandatory in Bahrain?

Not as of 6 November 2026. It is expected, but no official date has been announced. Keep your invoice data structured so the system can be connected once the rules are published.

### Does my website need to handle VAT?

If your business is VAT-registered, your checkout, invoices and reports need to apply the 10% rate correctly. How prices should be presented is a question for your accountant.

### Can my website's data be hosted outside Bahrain?

PDPL allows transfers of personal data to 83 listed jurisdictions, or on other legal grounds. Ask your developer where the database and backups are hosted, and confirm that location with your adviser.

### Can a company outside Bahrain build my website or app?

Yes. What matters is a written scope, a contract that covers your data and ownership of the code, and enough overlap in working hours. Manama and Cairo share the same time from late April to late October and are one hour apart in winter.

## Next step

Tell us what you want to build and how your customers pay. [Book a free call](/book) or [send us a message](/contact), and we will reply with questions first and then a fixed written quote.

## Sources

- [Bahrain National Portal: Value Added Tax](https://www.bahrain.bh/wps/portal/en/BNP/HomeNationalPortal/ContentDetailsPage/!ut/p/z0/lY9BT8JAEIX_ynpoogezQ6uAR5GEaoKgJgh7IdN2LCPtbOluG36-LfFA5ORxJu99-Z42eq2NYMs5eraCRXdvzHA7eL6HePwEsJzehfC2engfTuYDmM8i_UGiX7Q5D8WvyykMF_F4FI4m0WIV9RT-PhzMozapFU9Hr9eJVFuSADCxjVd-R2rPkme2DCDBXY0sKoQIAqipQE-Z8rbi1AWQN5x1SVXVLClXBTllv04A6uC25FS17Dr9U_-v3OWC_8o1joWcUyiZYmnJ-ZLEX3q2WDSkMMv6Hx7VdYv-pmuc43rz37W62s8-b83m6gcBLJvw/)
- [PwC Worldwide Tax Summaries: Bahrain, other taxes](https://taxsummaries.pwc.com/bahrain/corporate/other-taxes)
- [DLA Piper: Data protection laws in Bahrain](https://www.dlapiperdataprotection.com/countries/bahrain/law.html)
- [Central Bank of Bahrain: Payment and settlement](https://www.cbb.gov.bh/payment-settlement/)
- [BenefitPay on the App Store](https://apps.apple.com/bh/app/id1249328388)
- [EqualOcean: Keeta launches food delivery in Bahrain](https://equalocean.com/news/2026010721712-meituans-keeta-launches-food-delivery-service-bahrain)
