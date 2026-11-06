---
title: Building a website or app for Kuwait: KNET and CITRA
summary: What changes when your customers are in Kuwait: KNET payments, CITRA's data rules, Arabic and English terms, no VAT, and how to choose who builds it.
tag: Mobile
tags: web design, app development, KNET, CITRA, data protection, Kuwait
order: 45
media: https://images.unsplash.com/photo-1650563401244-12028cd7ee4e
alt: Kuwait Towers rising above leafy green trees against a clear blue sky
caption: A site for Kuwait must accept KNET, publish its terms in Arabic and English, and follow CITRA's data rules.
stats: ~80%|of online transactions in Kuwait are made with KNET cards; 24 h|to report a data breach under CITRA Decision 26/2024; 2|languages your terms must be in: Arabic and English
---

A website or app for customers in Kuwait needs two things that a generic build often misses: KNET at checkout, because nearly 80% of online transactions in Kuwait use KNET cards, and a privacy setup that follows CITRA Decision 26/2024, which asks for terms in Arabic and English, consent, and a breach notice within 24 hours. The tax side is simpler than in Saudi Arabia: Kuwait has no VAT, and we found no e-invoicing mandate. The rest of this guide covers what to plan, what to ask a developer, and where the real effort goes.

Last checked: 6 November 2026

## What changes when the customers are in Kuwait

Most of a good website or app is the same everywhere: fast pages, clear content, a checkout that works on a phone. The differences for Kuwait sit in a few specific places, and each one is cheaper to plan before design than to add after launch.

| Topic | Kuwait today | What it means for the build |
|---|---|---|
| Card payments | KNET carries nearly 80% of online transactions | KNET must be on the checkout, not only Visa and Mastercard |
| Personal data | CITRA Administrative Decision 26/2024 | Bilingual terms, consent, a 24-hour breach procedure |
| VAT | None; GCC VAT still under discussion in Parliament | No VAT lines on invoices for now |
| E-invoicing | No mandate found | No tax-authority integration needed today |
| Food delivery | talabat and Keeta both operate | Decide whether you sell through them, directly, or both |
| Time zone | UTC+3 all year, no clock changes | Same as Cairo in summer, one hour ahead in winter |

The rest of this guide takes these one at a time, starting with the simplest.

### Tax and invoices: simpler than Saudi Arabia

Kuwait has no VAT. PwC's tax summary, reviewed in July 2026, describes the GCC VAT framework as still "under discussion in the Parliament". We also found no e-invoicing mandate in Kuwait as of 6 November 2026.

For your project, this means a Kuwaiti online store or booking app does not need VAT calculations or a tax-authority integration today. If you also sell in Saudi Arabia, the UAE or Oman, the picture is different: those countries have VAT and e-invoicing timelines, and a system that serves several Gulf markets should keep tax settings per country rather than hard-coding one. Ask your accountant how any of this applies to your business.

## Payments: plan for KNET from day one

KNET is Kuwait's local card network. According to Checkout.com, nearly 80% of online transactions in Kuwait use KNET cards, it has 11 member banks, and it accepts local debit cards. If your checkout only takes Visa and Mastercard, a large share of Kuwaiti customers will reach the payment page and leave.

In practice this means three things:

- **Choose the payment gateway before design starts.** KNET is added through a licensed payment gateway that supports it, and that choice shapes the checkout screens, the refund flow and the reports your accountant receives.
- **Start the merchant onboarding early.** The gateway has to approve your business as a merchant. Paperwork can take longer than the code, so begin it while the site is being designed.
- **Test with real KNET cards before launch.** Test cards prove the integration works. A small live payment and a refund prove your business is set up correctly.

If you plan to use Shopify, note that Shopify Payments, Shopify's built-in payment option, is not available in Kuwait. A Shopify store there needs a third-party payment provider, so check that the provider you pick supports KNET before you commit to the platform.

## Personal data: CITRA Decision 26/2024

Kuwait's data protection rules come from the Communication and Information Technology Regulatory Authority (CITRA), in Administrative Decision 26/2024. This section is general information, not legal advice. According to DLA Piper's summary, its definition of "service provider" is broad enough to cover anyone running a website, app or cloud service that collects personal data. If your contact form takes a name and phone number, assume it applies to you.

The points that affect the build directly:

- **Terms in Arabic and English.** Your privacy policy and terms must be provided in both languages. This is content work, but the site must also be built so both versions are easy to find and kept in step.
- **Consent.** Users must agree before their data is collected. That means a clear consent step on sign-up and contact forms, and a record of when each person agreed.
- **A breach notice within 24 hours.** Breaches must be reported to CITRA and to the people affected within 24 hours. You cannot meet that deadline without logging, alerts, and a written plan for who does what when something goes wrong.

DLA Piper's summary also lists penalties of 1 to 5 years in prison and/or fines of KWD 500 to 20,000. Have a Kuwaiti lawyer review your final policy text; your developer's job is to make sure the site can do what the policy promises.

## Website, web app or mobile app?

Start with what your customers need to do, not with the format:

- **A company website** explains what you offer and turns visits into calls, WhatsApp messages and quote requests. It is the right first step for most service businesses. Our guide to [what a company website costs](/blog/company-website-cost-egypt) explains what drives the size of such a project.
- **An online store or web app** suits businesses that take orders, bookings or payments. It works in the browser on any phone and needs no app store approval.
- **A mobile app** makes sense when customers come back often: loyalty, repeat orders, booking, tracking. It adds work for two app stores and for updates. Our breakdown of [what a mobile app costs to build](/blog/app-development-cost-egypt) shows where that effort goes.

Restaurants and shops have one extra question. talabat and Keeta both operate in Kuwait (Keeta launched there on 15 September 2025, its third Middle East market). Many businesses sell through these platforms and also run their own ordering site or app, so regular customers can order directly. If you do both, plan from the start how orders from each channel reach the kitchen or the stockroom, so staff are not watching three screens.

## Choosing the company that builds it

You do not need to be technical to choose well. Our guide on [how to choose a software company](/blog/how-to-choose-a-software-company) covers the general method; for Kuwait, add these checks:

1. **Ask whether they have connected KNET before**, through which gateway, and ask to see a live checkout.
2. **Check the Arabic.** Ask for an Arabic page they built. It should be designed right to left, not just mirrored, with correct numbers and punctuation.
3. **Ask how the site handles consent and breaches**, given CITRA's 24-hour notice rule.
4. **Ask where your data will be hosted**, and get the answer in writing.
5. **Put ownership in the contract**: an NDA, return or secure deletion of your data at the end of the contract, an incident-notification procedure, and full source code and IP assignment to your business.
6. **Agree how you will work across time zones.** Kuwait is UTC+3 all year. Cairo is on the same time from late April to late October and one hour behind in winter, so a team in Cairo shares your working day.

Projects start from $200 (about SAR 750 / AED 735); the final price depends on scope, with a fixed written quote after a free call.

## What KF Tech Solutions does here

KF Tech Solutions is a software studio based in Cairo, Egypt, founded in 2020. We work with businesses in Egypt and the Gulf, remotely. We build company websites, online stores, web apps and [mobile apps](/services/mobile-applications) in Arabic and English, with a control panel so you can edit content yourself. We connect the payment gateway you choose and build the Arabic and English versions side by side. You can read more about how we work with Gulf businesses on our [Gulf page](/gulf).

## Common questions

### Do I need KNET if I already accept Visa and Mastercard?

For most consumer businesses in Kuwait, yes. Nearly 80% of online transactions there use KNET cards, so a checkout without it turns away a large share of customers at the last step.

### Does CITRA Decision 26/2024 apply to a small business website?

Its definition of "service provider" is broad enough to cover anyone running a website or app that collects personal data. If you collect names, phone numbers or emails, plan bilingual terms, consent and a breach procedure, and confirm the details with a lawyer.

### Do I need e-invoicing or VAT on my Kuwaiti store?

Not as of 6 November 2026. Kuwait has no VAT, and we found no e-invoicing mandate. If you sell in other Gulf countries too, build tax settings per country.

### Can a company in Cairo build an app for a business in Kuwait?

Yes. The work is done remotely, with calls, shared designs and test builds. Cairo matches Kuwait time from late April to late October and is one hour behind in winter.

### Can I use Shopify in Kuwait?

You can run a Shopify store, but Shopify Payments is not available in Kuwait. You will need a third-party payment provider, so confirm it supports KNET first.

## Ready to plan your project?

Tell us what you want to build and who it is for. [Book a free call](/book) or [send us a message](/contact), and you will get a fixed written quote after we understand the scope.

## Sources

- [KNET payment method, Checkout.com](https://www.checkout.com/payment-methods/knet)
- [Data protection laws of Kuwait, DLA Piper](https://www.dlapiperdataprotection.com/?t=law&c=KW)
- [Kuwait: other taxes, PwC Worldwide Tax Summaries](https://taxsummaries.pwc.com/kuwait/corporate/other-taxes)
- [Shopify Payments supported countries, Shopify Help Center](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries)
- [Meituan expands Keeta to Kuwait, TechNode](https://technode.com/2025/09/16/meituan-expands-food-delivery-brand-keeta-to-kuwait/)
- [Egypt's daylight saving time, Ahram Online](https://english.ahram.org.eg/NewsContentP/1/566547/Egypt/Egypt-to-move-clocks-forward-one-hour-on-Friday-fo.aspx)
