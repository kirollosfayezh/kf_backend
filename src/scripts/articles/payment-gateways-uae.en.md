---
title: Payment gateways in the UAE: how to choose
summary: How UAE payment gateways differ on fees, payment methods, settlement and data rules, where Aani and Jaywan fit, and what to ask before you sign.
tag: Web Development
tags: payment gateway, online payments, checkout, e-commerce, UAE
order: 63
media: https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec
alt: A hand in a dark sleeve holds a smartphone against a contactless payment terminal
caption: Before choosing a UAE gateway, ask which cards and wallets it accepts, when it settles and where it stores payment data.
stats: AED 50,000|maximum for a single Aani instant payment; 750,000|merchants already on Aani, per The National; 5%|VAT added on top of published gateway fees
---

The right payment gateway in the UAE is the one that accepts the methods your customers actually use, settles money to your account on a schedule you can live with, and gives your developers clean webhooks and refunds. Headline rates matter less than most owners expect: the real differences are in monthly fees, surcharges on foreign cards, payout timing and how much manual work each refund or dispute creates. Shortlist two or three licensed gateways, get written fee schedules, and test each one's sandbox before you sign.

Last checked: 6 November 2026

This guide is general information for business owners, not legal or tax advice. Fees and terms change often, so treat every figure below as something to confirm in writing with the provider.

## What a payment gateway actually does

A payment gateway is the piece that sits between your checkout and the card networks. The customer enters card details, or taps Apple Pay, on a page the gateway controls. The gateway sends the request for approval, tells your system whether it succeeded, and later pays the money into your bank account minus its fees.

Three jobs are often bundled together, and it helps to know which one you are buying:

- **The gateway** passes the payment request and returns the result to your website, app or POS.
- **The acquirer** is the bank or licensed provider that holds the merchant relationship and settles funds to you.
- **The payment service provider** is the company you sign with. In the UAE it is often all three at once, which is simpler, but you still need to know who settles your money and when.

Some international processors work differently for certain local methods. Checkout.com, for example, lists KNET and OmanNet as "gateway only", with a "direct contract with local provider required". If you also sell in Kuwait or Oman, that means two contracts, not one.

## How customers pay in the UAE, including Aani and Jaywan

Cards and phone wallets such as Apple Pay cover most online checkouts. Two national rails are now worth knowing about, because they are growing and the government already accepts them.

- **Aani** is the UAE's instant payments platform, unveiled in 2023. A single payment can be up to AED 50,000, and The National reports about 12.5 million users and 750,000 merchants.
- **Jaywan** is the UAE's domestic card scheme. It works at points of sale, online, at ATMs and in wallets.

Both are run by Al Etihad Payments, a subsidiary of the Central Bank of the UAE, and on 3 August 2026 the Ministry of Finance added both to its own payment channels. For a business, this does not mean you must accept them today. It does mean you should ask every gateway whether it accepts Jaywan cards and Aani payments now, and if not, when.

Buy-now-pay-later is the other method customers ask for. Gateways usually offer it through a partner: Telr, for example, describes its buy-now-pay-later product as "in partnership with Tabby". Check which instalment providers are available for UAE merchants specifically, because availability varies by country.

## The gateways you will meet

You will hear the same few names in almost every conversation. This table covers only what we could confirm from their own pages or a cited source; it is not a ranking.

| Provider | What we could confirm | Ask them |
|---|---|---|
| Network International | Based in Dubai; acquired by Brookfield in September 2024 and merged with Magnati in 2025 | Which entity you contract with after the merger, and settlement times |
| Telr | Dubai address; says it is "licensed and regulated by the Central Bank of the UAE"; publishes UAE plans by monthly volume | Which plan fits your volume, and the foreign-card surcharge |
| PayTabs | Lists the UAE among its markets; says "products and features may vary by country"; we found no public UAE gateway rates on its main pricing page | A written UAE quote and the methods live in the UAE |
| Checkout.com | International processor; some regional methods are gateway-only and need a direct contract with the local provider | Which UAE methods it acquires itself and which need a second contract |

Your own bank may also offer a gateway. A bank product can be convenient for settlement, but compare its developer documentation and refund tools with the specialists before deciding.

## How gateway fees work

Gateway pricing has more moving parts than the headline percentage. Telr's published UAE plans show the typical structure: tiers by monthly volume, a monthly fee that falls as volume rises, a percentage plus a fixed AED amount per transaction, an extra percentage for international cards, and a note that all fees are subject to 5% VAT. Above AED 500,000 a month, it asks merchants to contact it for a tailored plan.

When you compare offers, put every line into one table:

| Fee | What to check |
|---|---|
| Setup fee | Whether there is one, and whether it is refundable if onboarding fails |
| Monthly fee | Whether it applies in months with no sales |
| Per-transaction fee | The percentage and the fixed amount, for local and foreign cards |
| Wallets and instalments | Whether Apple Pay or buy-now-pay-later are priced differently |
| Refunds | Whether the original fee is returned, and whether refunds cost extra |
| Chargebacks | The fee per dispute, and who gathers the evidence |
| Settlement | How many days until money reaches your bank, and any reserve held back |
| Currency | Whether you are settled in AED, and the conversion margin on other currencies |

A small shop with a few hundred orders a month can pay more in fixed monthly fees than in percentages, so model the cost at your real volume, not the provider's example. Remember the 5% VAT on fees in your budget.

## Licensing, data and invoicing rules that affect your choice

Choose a provider that is licensed to operate in the UAE and check it on their own site. The rules below shape what you should ask, even when most of the duty sits with the provider.

- **Payment data stays in the UAE.** Under UAE sector rules, as summarised by DLA Piper, payment service providers must store personal and payment data in the UAE. Ask where your transaction data is stored and processed.
- **Personal data.** The UAE data protection law (Federal Decree-Law 45/2021) covers the mainland, but not DIFC or ADGM, which have their own laws. Its implementing regulations have not yet been issued, so ask your lawyer what applies to you rather than relying on a vendor's summary.
- **Your e-commerce licence.** Selling online in the UAE needs a licence that includes e-commerce activity and TDRA approval, and every transaction needs a clear digital invoice. Expect a gateway to ask for it during onboarding. We cover this in [the UAE e-commerce licence guide](/blog/uae-ecommerce-licence-online-store).
- **E-invoicing.** The Ministry of Finance's e-invoicing system covers B2B and B2G sales and starts on 1 January 2027 for businesses with revenue of AED 50 million or more and 1 July 2027 for the rest. B2C is excluded for now. A gateway receipt or a PDF is not an e-invoice, so if you sell to other businesses, your invoicing system needs its own connection to an accredited service provider.

One practical rule protects you whatever the law says: do not let card numbers touch your own servers. Use the gateway's hosted payment page or its tokenisation, so your system only ever stores a reference.

## What the integration actually involves

Most of the effort is not the payment button. It is everything around it.

1. **Choose the checkout type.** A hosted page (the customer is redirected to the gateway) is fastest and safest. An embedded form looks smoother but needs more care. Native app payments usually need the gateway's mobile SDK.
2. **Handle webhooks.** The gateway tells your server about each payment, refund and dispute in the background. Your system must accept these messages, verify them, and update the order even if the customer closed the browser.
3. **Refunds from your own control panel.** Staff should refund through your system, which calls the gateway, not by logging into a separate portal.
4. **Reconciliation.** Each payout should match a list of orders minus fees, so your accountant can close the month without guesswork.
5. **Arabic and English.** The payment page, error messages and receipts should work in both languages, including right-to-left layouts.
6. **Testing.** Use the sandbox to test declines, timeouts, duplicate webhooks, partial refunds and 3-D Secure before you go live.

If your gateway also has to feed a POS, an accounting system or an ERP, plan those links together; we explain the approach in [connecting the systems you already run](/blog/api-integration-connecting-business-systems). Many of the same lessons appear in our guide to [building an online store in Egypt](/blog/online-store-egypt-payments-and-delivery), where payments and refunds are what usually break first. If you are still budgeting the site itself, see [what a website costs in the UAE](/blog/website-design-cost-uae).

At KF Tech Solutions we build the [backend and integrations](/services/api-and-backend) behind websites, apps and business systems, including payment gateway integrations with webhooks, refunds and reconciliation, and links to accounting systems and government platforms. We work with businesses in Egypt and the Gulf; read more about [working with us from the UAE](/uae).

## Questions to ask a gateway before you sign

Send the same list to each provider and compare the answers in writing:

1. Which entity do we contract with, and which UAE licence does it hold?
2. Which methods are live for UAE merchants today: cards, Apple Pay, Jaywan, Aani, buy-now-pay-later?
3. What is the full fee schedule, including monthly, foreign-card, refund and chargeback fees, before VAT?
4. How many days until settlement, in which currency, and is any reserve held back?
5. Where is our transaction data stored and processed?
6. Do you offer a sandbox, webhooks with signatures, refunds by API and a settlement report we can download?
7. What documents do you need for onboarding, and how long does approval usually take?
8. What notice period applies if we want to leave, and can we export our transaction history?

## Common questions

### Which payment gateway is best in the UAE?

There is no single best one. The right choice depends on your volume, the payment methods your customers use, how fast you need settlement and the quality of the developer tools. Compare two or three licensed providers on the same written list of questions.

### Do I have to accept Aani or Jaywan?

Nothing in the sources we checked says a private business must accept them. They are run by a Central Bank subsidiary and the Ministry of Finance already accepts both, so ask each gateway whether it supports them and when.

### Can a free-zone company use a UAE payment gateway?

Ask the gateway directly; expect it to ask for your trade licence during onboarding. If you sell to customers on the mainland, check that your licence and set-up allow it, because free-zone companies need a mainland distributor, branch or company to sell there.

### How long does integration take?

A hosted payment page on a simple store can be connected quickly once the merchant account is approved. Webhooks, refunds, reconciliation and links to your POS or accounting system take longer, and gateway approval itself can take time, so start onboarding early.

### Is a gateway receipt enough as an invoice?

Every online transaction needs a clear digital invoice under the UAE e-commerce rules, and a gateway receipt is not designed for that. For B2B sales from 2027, invoices must go through the e-invoicing system, which a gateway receipt or a PDF does not satisfy.

Choosing a gateway and need it wired into your store, app or business system? [Contact us](/contact) or [book a free call](/book) and tell us what you sell and how your customers pay.

## Sources

- [The National: UAE expands federal payment channels with Aani and Jaywan](https://thenationalnews.com/business/banking/2026/08/03/uae-expands-federal-payment-channels-with-aani-and-jaywan)
- [Network International (Wikipedia)](https://en.wikipedia.org/wiki/Network_International)
- [Telr UAE pricing](https://telr.com/pricing)
- [Telr UAE](https://telr.com/)
- [PayTabs](https://www.paytabs.com/en/) and [PayTabs pricing](https://paytabs.com/en/pricing)
- [Checkout.com: KNET](https://www.checkout.com/payment-methods/knet)
- [DLA Piper: data protection laws, UAE](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
- [Legal 500: UAE data and AI governance](https://www.legal500.com/intelligence/united-arab-emirates/strategy/the-uae-artificial-intelligence-and-data-authority-what-it-means-for-ai-data-and-digital-governance)
- [UAE Government portal: e-commerce](https://u.ae/en/information-and-services/business/Managing-and-growing-your-business/ecommerce)
- [UAE Government portal: running a business in a free zone](https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/running-a-business-in-a-free-zone-)
- [UAE Ministry of Finance: eInvoicing](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
