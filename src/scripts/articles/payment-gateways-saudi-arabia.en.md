---
title: Payment gateways in Saudi Arabia: how to choose
summary: Which payment methods Saudi customers expect, which gateways list them, how to compare fees and settlement, and what integration really involves.
tag: Web Development
tags: payment gateway, mada, Apple Pay, Tabby, Tamara, online payments, Saudi Arabia
order: 44
media: https://images.unsplash.com/photo-1628527304948-06157ee3c8a6
alt: A hand holds a blank card up to a black payment terminal on an orange surface
caption: A Saudi checkout has to accept mada first, then the wallets and pay-later options customers expect on top of it.
stats: 20,000|SAR per instant sarie transfer, 24/7; 1990|year mada launched, owned by SAMA; 3|things to test before launch: webhooks, refunds, reconciliation
---

To take online payments in Saudi Arabia, you need a gateway that supports mada first, then Apple Pay and other wallets, and usually Tabby and Tamara for buy-now-pay-later. Gateways such as Tap, PayTabs and Telr list these methods, so the real choice comes down to fees, settlement speed, the documents they ask for and how cleanly they connect to your store or app. Check that the gateway is licensed, test refunds and webhooks before you launch, and make sure every payment matches a sale in your own system.

Last checked: 6 November 2026

This guide is general information for business owners, not legal or financial advice. Gateway terms change often, so confirm every fee and requirement on the provider's own pricing page and in your contract.

## The payment methods Saudi customers expect

A Saudi checkout that only accepts Visa and Mastercard loses customers. These are the methods to plan for, roughly in order of importance for most consumer businesses.

| Method | What it is | Why it matters |
|---|---|---|
| mada | The national debit card network, owned by SAMA and launched in 1990 | The local debit card customers reach for first; online payments go through 3-D Secure |
| Apple Pay, mada Pay, Samsung Pay, Google Pay | Wallets that run on top of mada and other cards | Fast mobile checkout without typing card numbers |
| STC Bank | Formerly STC Pay; SAMA authorised full banking operations on 28 January 2025 | A digital bank and wallet; some gateways still list it as STC Pay |
| Tabby and Tamara | Buy-now-pay-later providers licensed by SAMA | Customers split a purchase into instalments; the merchant is paid by the provider |
| SADAD | SAMA's national bill presentment and payment system, launched in 2004 | Relevant for invoices and recurring bills rather than a shopping cart |
| sarie | SAMA's instant payment system, launched in 2021 | Bank transfers up to SAR 20,000, 24/7, by IBAN, mobile number, ID number or email |

SAMA licensed **Tamara Finance** for consumer finance and BNPL on 3 March 2025, and **Tabby Finance** for BNPL on 10 November 2025. For a shop selling to consumers, BNPL often shows up as a customer request before it shows up as a business plan.

For B2B sales, a card gateway is often the wrong tool. Larger invoices are commonly paid by bank transfer, and sarie makes transfers up to SAR 20,000 instant at any hour. What you need then is a clear invoice with your IBAN and a way to match incoming transfers to open invoices, not a checkout page.

## Gateways that list these methods

Several gateways serve Saudi merchants. The three below publish support for the local methods on their own websites. This is not a ranking, and other licensed providers exist.

| Gateway | What it says on its own site |
|---|---|
| Tap | Describes itself as "a payment institution licensed by the Saudi Central Bank"; supports mada, Apple Pay, Tabby and Tamara |
| PayTabs | Lists mada, STC Pay, Apple Pay, Tabby and Tamara |
| Telr | Covers Saudi Arabia and the UAE, with mada, Apple Pay and Tabby BNPL |

Two checks matter more than any feature list:

- **Licensing.** Prefer a provider licensed by SAMA, and check its name against the lists on SAMA's website, not just a badge on the provider's homepage.
- **Your exact methods.** "Supports Tabby" on a homepage does not always mean it is available for your business type or on the plugin you use. Ask for written confirmation of every method you plan to offer.

If your store runs on a hosted platform, the platform may already include a payment option or a short list of supported gateways, which narrows the choice. Our guide to [what an online store costs in Saudi Arabia](/blog/online-store-cost-saudi-arabia) covers that trade-off.

## How to compare gateways

Gateway pricing is rarely one number. Put every offer into the same table and ask the same questions of each provider.

| Question | What to ask for in writing |
|---|---|
| Fees per method | The rate for mada, for international cards and for each wallet, plus any fixed fee per transaction |
| Other fees | Setup, monthly, refund, chargeback and currency-conversion fees, if any |
| BNPL | Whether Tabby and Tamara go through the gateway or need a separate agreement, and who charges the BNPL fee |
| Settlement | How many days until money reaches your Saudi bank account, the minimum payout, and any reserve held back |
| Refunds | Full and partial refunds from the dashboard and the API, and how long they take to reach the customer |
| Integration | API documentation, a test (sandbox) environment, plugins for your platform, and SDKs for iOS and Android |
| Reports | Downloadable settlement reports that list every transaction, fee and refund |
| Support | Arabic and English support, response times and who handles a disputed payment |

A gateway with a slightly higher rate but next-day settlement and clean reports can cost you less than a cheaper one that pays out slowly and makes reconciliation manual. Work out the real monthly cost using your own mix of mada, international cards and BNPL.

## What you need before you apply

Gateways run their own checks, so the exact list varies, but expect to provide most of the following:

- **A commercial registration**, or a valid freelance (professional) certificate if you sell as an individual.
- **A commercial bank account** in the business's name, for settlement.
- **Registration on the Business Platform (business.sa)**, which replaced Maroof for online stores and requires the registration and bank account above.
- **A live website or app** that shows what you sell and your prices.
- **The disclosures the E-Commerce Law requires**: your name or identifier, contact details and commercial registration (Article 6), and the contract terms (Article 7), which in practice means clear terms, delivery and refund policies.

The E-Commerce Law allows penalties including a warning, a fine of up to SAR 1 million, suspension or blocking of the store (Article 18). Gateway reviewers look at the same pages, so a site that is missing them tends to stall the application too.

## What integration actually involves

Adding a "Pay" button takes a day. Making payments reliable takes longer, and it is where most problems appear after launch. We cover the general approach in [connecting the systems you already run](/blog/api-integration-connecting-business-systems); for payments, these are the parts that matter.

### Hosted page, embedded form or in-app SDK

- **Hosted payment page.** The customer is sent to the gateway's page and returns afterwards. Card details never touch your server, which keeps your security burden small.
- **Embedded fields.** The card form appears inside your checkout but is served by the gateway. It looks more seamless and still keeps card numbers off your server.
- **Mobile SDK.** For iOS and Android apps, the gateway's SDK handles cards, Apple Pay and 3-D Secure inside the app.

Avoid any setup where your own server receives raw card numbers unless you have a strong reason and the security programme to match.

### Webhooks, not the redirect

When a customer pays, your site learns the result in two ways: the browser returns to your "thank you" page, and the gateway sends a server-to-server message called a webhook. Only trust the webhook. Customers close tabs, phones lose signal, and 3-D Secure screens time out, so an order system that waits for the redirect will miss paid orders. Your backend should verify the webhook's signature, handle the same event arriving twice, and record a status for every order: pending, paid, failed, refunded.

### Refunds and partial refunds

Refunds should start from your own dashboard, call the gateway's API and update the order, the stock and the customer's record in one step. Partial refunds matter for orders with several items. BNPL refunds follow the BNPL provider's rules, so test them separately.

### Reconciliation

Every day or week, the gateway's settlement report should match three things in your system: paid orders, refunds and fees. If you cannot match a deposit in your bank account to a list of orders, accounting turns into guesswork. Plan this export or automatic matching before launch, not after the first month-end.

### Test before you go live

Run the full cycle in the gateway's sandbox for each method: a successful payment, a declined card, a 3-D Secure failure, a full refund, a partial refund and a BNPL purchase. Then do one small real payment and refund in production.

The same discipline applies in other markets; our article on [online stores in Egypt: payments and delivery](/blog/online-store-egypt-payments-and-delivery) shows where these flows break in practice.

## Payments and your invoices

A gateway collects money; it does not issue your tax invoice. In Saudi Arabia, VAT-registered businesses issue e-invoices under ZATCA's FATOORA rules, and businesses moved into Phase 2 must generate them from a system that is onboarded with ZATCA. Your store, POS or ERP needs to create the invoice when the payment is confirmed, ideally from the same webhook that marks the order as paid. Our guide to [ZATCA Phase 2 integration for a custom POS or ERP](/blog/zatca-phase-2-integration-custom-pos-erp) explains what that system has to do.

## How KF Tech Solutions helps

KF Tech Solutions builds websites, online stores, mobile apps and the backends behind them, and connects them to the gateway you choose: the checkout flow, webhook handling, refunds from your dashboard and reconciliation against settlement reports. The choice of gateway stays yours. We work with businesses in Egypt and the Gulf, remotely; Cairo works on Riyadh time from late April to late October and one hour behind it in winter. See [our Saudi Arabia page](/saudi-arabia) and our [API and backend development](/services/api-and-backend) service.

## Common questions

### Which payment gateway is best in Saudi Arabia?

There is no single best one. Shortlist gateways that are licensed by SAMA and support mada, Apple Pay and the BNPL providers your customers ask for, then compare written offers on fees, settlement time and reports using your own sales mix.

### Do I have to accept mada?

No law in our sources requires it, but mada is the national debit network that local customers use every day. A checkout without mada will lose many of them, so treat it as essential.

### Can I offer Tabby and Tamara through my gateway?

Often, yes. Tap and PayTabs list both, and Telr lists Tabby. Ask whether BNPL is available for your business type through the gateway, or whether you need a separate agreement with the BNPL provider.

### How long does it take to integrate a payment gateway?

A plugin on a standard platform can be live within days once your account is approved. A custom website or app takes longer, because webhooks, refunds, reconciliation and testing each method need to be built and checked properly.

### Can I take payments without a commercial registration?

Online stores register on the Business Platform with either a commercial registration or a valid freelance certificate, plus a commercial bank account. Each gateway then sets its own requirements, so confirm with the provider before you build.

### Is a payment link enough for a small business?

For low volumes, yes. Many gateways offer payment links you can send by WhatsApp or email; ask whether yours does. Once orders grow, you will want payments tied to orders, stock and invoices automatically.

Choosing a gateway or building a checkout for the Saudi market? [Tell us what you sell](/contact) or [book a free call](/book), and we will help you plan the integration before you sign.

## Sources

- [mada, Saudi Central Bank (SAMA)](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [SADAD, Saudi Central Bank (SAMA)](https://www.sama.gov.sa/en-US/payment/pages/sadad.aspx)
- [sarie, Saudi Central Bank (SAMA)](https://www.sama.gov.sa/en-US/payment/pages/sarie.aspx)
- [SAMA licenses Tamara Finance](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1079.aspx)
- [SAMA licenses Tabby Finance](https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1116.aspx)
- [STC Bank begins full operations, Arab News](https://www.arabnews.pk/node/2588148/business-economy)
- [Tap Payments, Saudi Arabia](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
- [Telr](https://telr.com/)
- [Online stores move to the Business Platform, Ministry of Commerce](https://mc.gov.sa/en/mediacenter/News/Pages/29-03-23-02.aspx)
- [E-Commerce Law, official translation](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
- [What is e-invoicing, ZATCA](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
