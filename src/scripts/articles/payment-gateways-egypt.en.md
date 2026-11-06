---
title: Payment gateways in Egypt compared for online stores
summary: Paymob, Fawry, Kashier and Geidea compared: payment methods, published fees, settlement, paperwork and what integrating each one really takes.
tag: Web Development
tags: payment gateway, Paymob, Fawry, Meeza, mobile wallets, online payments, Egypt
order: 58
media: https://images.unsplash.com/photo-1793481815037-bfd345dbc5d4
alt: An Egyptian one-pound coin standing upright on a pile of other coins
caption: Fees, settlement times and the payment methods your customers use decide which gateway keeps more of every pound.
stats: 2.75% + EGP 3|Kashier's published online card rate, before 14% VAT on the fee; 24/7|InstaPay transfers, live since March 2022 per the Central Bank of Egypt; 3|things to test before launch: webhooks, refunds, reconciliation
---

To take online payments in Egypt, choose a gateway that accepts cards including Meeza, mobile wallets and, for many stores, a cash option through reference codes or cash on delivery. Paymob, Fawry, Kashier and Geidea all cover cards and at least some of the local methods, so the real choice comes down to fees, settlement timing, the paperwork they ask for and how cleanly they connect to your store or app. Whichever you pick, build the checkout so that every payment matches an order in your own system.

Last checked: 6 November 2026

## The payment methods Egyptian customers use

An Egyptian checkout has to handle more than cards: many customers have no credit card, prefer cash or pay from a phone.

| Method | What it is | Why it matters |
| --- | --- | --- |
| Visa and Mastercard | International debit and credit cards | Still the base of any online checkout |
| Meeza | Egypt's national card scheme | Many local debit and prepaid cards are Meeza, so a checkout without it turns some customers away |
| Mobile wallets | Wallets such as Vodafone Cash, Orange Cash, e& money and WE Pay | Customers without a card can still pay online |
| Reference code at a kiosk | The customer gets a code and pays cash at an outlet such as Fawry or Aman | Lets cash customers pay before shipping, not on delivery |
| Instalments (BNPL) | Providers such as valU, Sympl, Souhoola and Contact | Expected on electronics, furniture and other higher-value items |
| Cash on delivery | The courier collects cash | Still common; it is a delivery process, not a gateway feature |

InstaPay deserves a note. It runs on the Central Bank of Egypt's Instant Payment Network, launched in March 2022, and moves money 24/7 between bank accounts, Meeza cards and mobile wallets. It is a transfer service, though, and none of the gateway pages we checked list it as a checkout method. If you accept InstaPay transfers directly, someone has to match each transfer to an order by hand.

## Gateways that list these methods

The table below summarises what each provider publishes on its own pages. Availability can depend on your business type and account approval, so confirm every method you need in writing before you build.

| Gateway | Cards | Wallets | Cash and kiosk | Instalments | Ready-made integrations |
| --- | --- | --- | --- | --- | --- |
| Paymob | Visa, Mastercard and others; Apple Pay and Google Pay through its embedded checkout | Vodafone Cash, Orange Cash, e& money, WE Pay | Aman and Masary kiosks | valU, Sympl, Souhoola, Forsa, Contact and others | Shopify, WooCommerce, web and mobile SDKs, payment links |
| Fawry (FawryPay) | Cards | Mobile wallets | Pay at Fawry with a reference code; cash on delivery | Ask Fawry | Server APIs and hosted checkout |
| Kashier | Visa, Mastercard, Meeza | Available, priced by sales | Kiosk rates quoted by sales | Through partner programmes | APIs, hosted checkout, free test mode |
| Geidea | Meeza, Visa, Mastercard | Meeza QR wallet | Not listed on the gateway page | BNPL and bank instalments, including valU and Souhoola | Shopify, WooCommerce, Magento, OpenCart, PrestaShop; Android, iOS, Flutter and React Native SDKs |

A few practical differences stand out:

- **Fawry's strength is cash.** A FawryPay reference code can be paid at Fawry outlets or through the myfawry app, which suits customers who will not pay by card.
- **Paymob lists the widest set of instalment providers**, which matters if you sell higher-priced goods.
- **Kashier publishes a card rate** on its pricing page, which makes a first comparison easier.
- **Geidea lists plugins for five store platforms** and also sells in-store payment terminals, which helps if you want one provider online and in the shop.

## Fees and settlement: what the providers publish

Kashier's pricing page lists 2.75% + EGP 3.00 per successful online card transaction for Visa, Mastercard and Meeza, with no setup fee and no monthly fee. VAT at 14% is charged on Kashier's fee only, not on the order amount, and refunds and failed attempts are not billed. Wallets, kiosk payments, instalments and international cards are quoted by sales, and settlement follows the schedule agreed on your account.

The other three do not publish a full rate card on the pages we checked, so you will need a written offer. Ask every provider the same questions so the offers can be compared:

1. What is the rate for each method you will use: local cards, international cards, wallets, kiosk and instalments?
2. Is VAT charged on top of the fee?
3. Are there setup, monthly, refund or chargeback fees?
4. How many days after a payment does the money reach your bank account, and can you choose a faster cycle?
5. Is there a reserve or rolling hold on new accounts?
6. What does the settlement report contain, and can you download it or fetch it by API?

Then run the numbers on your own sales mix, since wallet and kiosk payments may be priced differently from cards.

## What you need before you apply

Each provider sets its own onboarding requirements, so ask for the exact list early. Prepare the following, because some or all of them are likely to be requested:

- **Company papers**: commercial register and tax card, or the equivalent for your business type.
- **A bank account in the business name** for settlement.
- **A live website or app** that shows your products, prices, contact details, delivery and refund policy, and terms of use.
- **Owner identification**: Geidea's documentation, for example, says Meeza requires the merchant's National ID and Commercial Register Number before Meeza QR can be enabled.

Some methods need their own approval on top of the gateway account. Meeza QR wallet payments on Geidea, for example, require the merchant to register with Meeza first, and Kashier says instalments depend on each partner's approval. Build that time into your launch plan.

## What integration actually involves

Adding a "Pay" button is quick; making payments reliable is where the work is. We cover the general approach in [connecting the systems you already run](/blog/api-integration-connecting-business-systems); for payments in Egypt, these are the parts that matter.

### Hosted page, embedded form or SDK

- **Hosted or redirect checkout.** The customer goes to the gateway's page and comes back. Card details never touch your server.
- **Embedded checkout.** The payment form appears inside your page but is served by the gateway, such as Paymob's Pixel or Geidea's pop-up and embedded forms.
- **Mobile SDK.** For Android and iOS apps, the gateway's SDK handles cards, wallets and authentication inside the app.

If you sell on Shopify or WooCommerce, a ready plugin may be enough. Our comparison of [Shopify and a custom online store in Egypt](/blog/shopify-vs-custom-online-store-egypt) explains when it is not.

### Not every payment is instant

A card payment succeeds or fails in seconds. A kiosk reference code may be paid hours later, or never. Your order system needs a "waiting for payment" status, a time limit after which unpaid orders are cancelled and stock is released, and a clear message telling the customer how long the code stays valid. Ask each provider how long its reference codes last.

### Webhooks, not the redirect

Your site learns a payment's result twice: when the browser returns to your "thank you" page, and when the gateway sends a server-to-server notification, or webhook. Trust the webhook, because customers close tabs and phones lose signal. Your backend should verify the notification's signature, handle the same event arriving twice and record a status for every order: pending, paid, failed, refunded.

### Refunds and reconciliation

Refunds should start from your own dashboard, call the gateway's API and update the order, stock and customer record in one step. Wallet, kiosk and instalment refunds can follow different rules from card refunds, so test each one. Then make sure the gateway's settlement report matches paid orders, refunds and fees in your system. If a bank deposit cannot be traced to a list of orders, month-end turns into guesswork.

### Test before you go live

Use the sandbox to run a successful payment, a declined card, an abandoned reference code, a wallet payment, a full refund and a partial refund. Then make one small real payment and refund in production. Our article on [online stores in Egypt: payments and delivery](/blog/online-store-egypt-payments-and-delivery) shows where these flows break in practice, including cash on delivery.

## Receipts and customer data

A gateway collects money; it does not issue your tax documents. If your business issues electronic invoices or e-receipts through the Egyptian Tax Authority's systems, the store, POS or ERP should create them when a payment is confirmed, ideally from the same webhook that marks the order as paid.

Payments also involve personal data: names, phone numbers, addresses and order history. Keep card numbers on the gateway's side and store only what you need. Our guide to [Egypt's data protection law for apps](/blog/egypt-data-protection-law-apps) covers the rest.

## How KF Tech Solutions helps

KF Tech Solutions builds websites, online stores, mobile apps and the backends behind them, and connects them to the gateway you choose: the checkout, webhook handling, waiting-for-payment logic for kiosk codes, refunds from your dashboard and reconciliation against settlement reports. We have also connected POS systems to the Egyptian Tax Authority's e-receipt system. The choice of gateway stays yours. See our [API and backend development](/services/api-and-backend) service.

## Common questions

### Which payment gateway is best in Egypt?

There is no single best one. List the methods your customers use, shortlist gateways that support all of them for your type of business, then compare written offers on fees, settlement time and reports using your own sales mix.

### Do I still need cash on delivery?

For many Egyptian stores, yes, at least at first. Kiosk reference codes and wallets can move some cash customers to paying before shipping, which reduces refused deliveries, but forcing every customer to prepay can cost you orders.

### Can customers pay by InstaPay through my store?

None of the gateway pages we checked list InstaPay as a checkout method. You can accept InstaPay transfers directly, but each one has to be matched to an order by hand, which becomes a problem as orders grow. Ask your gateway whether it plans to support it.

### Are the published fees final?

Not always. Kashier, for example, says custom rates are available as your volume grows, and other providers quote by sales. Ask whether VAT is added, and compare the total cost per method, not just the headline card rate.

### How long does it take to integrate a payment gateway?

A plugin on Shopify or WooCommerce can be live within days once your account is approved. A custom store or app takes longer, because webhooks, refunds, reconciliation and each payment method need to be built and tested.

### Is a payment link enough for a small business?

For low volumes, yes. Paymob, Geidea and others offer payment links you can send by WhatsApp or email. Once orders grow, you will want payments tied to orders, stock and receipts automatically.

Choosing a gateway or building a checkout for an Egyptian store or app? [Tell us what you sell](/contact) or [book a free call](/book), and we will help you plan the integration before you sign.

## Sources

- [Instant Payment Network (IPN), Central Bank of Egypt](https://www.cbe.org.eg/en/payment-systems-and-services/instant-payment-network)
- [Paymob online payments](https://paymob.com/products/pay-accept/online-payments)
- [Paymob developer documentation](https://developers.paymob.com/paymob-docs/getting-started/overview)
- [Paymob CS-Cart plugin guide (kiosk and wallet methods)](https://docs.paymob.com/docs/cs-cart)
- [Fawry online checkout](https://www.fawry.com/business/acceptance/online-checkout/)
- [FawryPay reference number payments, developer documentation](https://developer.fawrystaging.com/docs/server-apis/create-payment-refno-apis)
- [Kashier pricing](https://www.kashier.io/pricing)
- [Geidea payment gateway, Egypt](https://geidea.net/egy/en/solutions/payments/payment-gateway)
- [Meeza QR wallet payment, Geidea documentation](https://docs.geidea.net/docs/meeza-qr-payment-method)
- [Geidea: valU and Souhoola in Egypt](https://docs.geidea.net/docs/valu)
