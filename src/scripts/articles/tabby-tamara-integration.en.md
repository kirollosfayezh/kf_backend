---
title: Tabby and Tamara integration for your store or app
summary: What adding Tabby or Tamara really involves: plugin, gateway or direct API, the server-side check, webhooks, partial refunds and reconciliation.
tag: Web Development
tags: Tabby, Tamara, BNPL, payment integration, e-commerce, Saudi Arabia
order: 57
media: https://images.unsplash.com/photo-1758611974022-ca3182694951
alt: A young woman on a sofa holds a bank card in one hand and a smartphone in the other
caption: Splitting a payment is one tap for the shopper; refunds, partial returns and reconciliation are the merchant's work.
stats: 2|BNPL providers licensed by SAMA in 2025; 21|days before Tabby may capture an uncaptured payment itself; 0|orders that should ship on the checkout redirect alone
---

Adding Tabby or Tamara to a store or app takes more than a button at checkout. Your server creates a checkout session, confirms the payment server-to-server before anything ships, captures it when the order is fulfilled, sends refunds and partial returns through the provider's API, and matches the provider's settlements to your orders. On Salla, Zid, Shopify, WooCommerce or Magento a plugin does much of this for you; on a custom store or mobile app you build it, either directly or through a gateway that offers them.

Last checked: 6 November 2026

## Both providers are now licensed by SAMA

The Saudi Central Bank (SAMA) licensed **Tamara Finance** for consumer finance and buy-now-pay-later on 3 March 2025, and **Tabby Finance** for buy-now-pay-later on 10 November 2025. Both announcements are on SAMA's website and linked in the sources below.

This does not change the technical work, but it does change the paperwork. You are signing up with a regulated finance company, so expect an onboarding review of your business and the products you sell. The merchant fee, the settlement schedule and the refund rules are set in the agreement you sign with each provider. Ask for them in writing before development starts, because they decide what your reconciliation report has to check.

This article is general information about how the integration works, based on each provider's public developer documentation. It is not financial or legal advice.

## Plugin, gateway or direct API

There are three ways to put Tabby or Tamara in front of your customers. The right one depends on what your store or app is built on.

| Route | Fits | What you still own |
|---|---|---|
| Platform plugin | Stores on Salla, Zid, Shopify, WooCommerce or Magento | Settings, testing, refunds from the platform or the provider's portal |
| Payment gateway | Custom stores and apps that already use a gateway | The gateway's API, its webhooks and its settlement report |
| Direct API | Custom stores, mobile apps, marketplaces, ordering linked to a POS | Everything: sessions, verification, webhooks, capture, refunds, reconciliation |

**Plugins.** Tabby's documentation has setup pages for Shopify, WooCommerce, Magento 2, Salla and Zid. If your store already runs on one of these, start there and check the matching section of Tamara's documentation. Our comparison of [Salla, Zid and Shopify](/blog/salla-vs-zid-vs-shopify) covers the platform choice itself.

**Gateways.** Some gateways in Saudi Arabia list BNPL among their payment methods. Tap describes itself as "a payment institution licensed by the Saudi Central Bank" and lists mada, Apple Pay, Tabby and Tamara. PayTabs lists mada, STC Pay, Apple Pay, Tabby and Tamara. Telr lists mada, Apple Pay and Tabby. A gateway gives you one integration and one settlement report for cards and BNPL together. Before you rely on it, confirm what it supports for BNPL partial captures and refunds. Our guide to [payment gateways in Saudi Arabia](/blog/payment-gateways-saudi-arabia) compares the options.

**Direct API.** A custom store or mobile app can integrate with each provider's API directly. It is the most work, but you get the provider's full feature set and its own merchant dashboard. The rest of this article describes that work, and most of it is also what you should test when you use a plugin or a gateway.

## How a BNPL payment moves through its statuses

Both providers model a payment as a series of statuses. Your order system has to map each one to its own statuses, so that nobody marks an order as paid before the provider has confirmed it.

| What happened | Tabby status | Tamara status |
|---|---|---|
| Customer started checkout | CREATED | new |
| Customer completed checkout | AUTHORIZED | approved, then authorised |
| Customer left or was not approved | EXPIRED or REJECTED | expired or declined |
| You captured the order | CLOSED | fully_captured or partially_captured |
| You cancelled before capture | cancel an authorised payment | canceled, or updated for a partial cancel |
| You refunded after capture | refund recorded on a CLOSED payment | fully_refunded or partially_refunded |

The names differ, but the shape is the same: a checkout, an approval, a capture when you fulfil the order, and refunds against what you captured.

## Checkout and webhooks

### Never trust the redirect alone

The checkout starts on your server. It sends the order, the amount and the customer details to the provider's create-session endpoint and gets back a link to send the customer to. When the customer finishes, the provider sends them back to your success, cancel or failure page.

That redirect is not proof of payment. Tabby's documentation is direct about it: "Never rely on the redirect alone — always verify the payment server-to-server before processing the order." Your server retrieves the payment and checks its status before the order is confirmed. On Tamara, the order becomes approved when the customer completes checkout, and your server then calls the authorise endpoint, unless auto-authorisation is enabled for your account. Tamara's documentation also says an order expires if the customer does not complete payment within 30 minutes of the session being created.

Some customers close the browser before the redirect. Their payment is still approved, so your system has to learn about it another way: through webhooks, with polling as a fallback.

### Webhooks arrive late, twice or out of order

A webhook is a message the provider sends to your server when a payment changes status. Tabby's documentation warns that "the delivery order is not guaranteed and the same event may occasionally arrive twice", and that a closed event can arrive before the authorised one. A webhook that times out is resent up to four more times.

In practice, your webhook handler should:

- Check the authentication header you registered, so it only accepts messages from the provider.
- Store the raw event before processing it, so you keep an audit trail.
- Ignore an event it has already processed, so a duplicate never ships an order twice.
- Re-read the payment from the API when the order of events matters, instead of trusting arrival order.
- Answer quickly and do the slow work afterwards, so the provider does not time out and retry.

These are the same rules we apply to any integration. Our article on [connecting the systems you already run](/blog/api-integration-connecting-business-systems) covers them in more general terms.

## Capture, cancellations and partial returns

**Capture** tells the provider you have fulfilled the order, and it is what triggers your money. Tabby states that "only captured payments are settled to you", and Tamara says capturing "acts as a confirmation that the order amount will be added to the merchant's next settlement". Tabby recommends a full capture right after verification, although partial captures are supported. Tamara supports full or partial capture as you ship. Both describe a 21-day point after which the provider may capture an authorised order itself, so an order forgotten in your system does not stay open forever.

**Cancellation** happens before capture. On Tamara, only authorised orders can be cancelled, in full or in part. A partial cancellation is how you handle an item that turns out to be out of stock after the customer has paid.

**Refunds** happen after capture. On Tabby, a payment can be refunded more than once, but "the total cannot exceed the captured amount". Refunds must start within 180 days of the payment being created, and a processed refund cannot be cancelled. A partial refund reduces the customer's remaining instalments first. On Tamara, refunds are full or partial against captured orders, through the API or the partners portal.

Partial returns are where most integrations break. A customer returns one item from a three-item order and the warehouse records it, but nobody sends the partial refund. Or the refund is sent twice: once from the provider's portal and once from your system. Choose one place where refunds start, usually your order system or control panel, and make it send the API call and record the result. Our [online store guide](/blog/online-store-egypt-payments-and-delivery) describes the same problem with card payments and cash on delivery.

## Reconciliation and testing

Every captured order should end up in a settlement from the provider, and every refund should reduce one. To check that, you need:

- The provider's payment or order ID stored against your own order number. Tamara also has an endpoint to update your order reference after checkout.
- A record of every capture and refund, with its amount and date.
- A regular report that compares those totals with the provider's settlement report, the fees in your agreement and what reaches your bank account.

Without this, a missed capture looks like a missing payment, and a refund sent twice is found only when the customer notices.

Before going live, use the providers' test environments. Tabby publishes testing credentials and a full testing checklist. Tamara publishes testing scenarios, a Saudi testing guide and an online go-live checklist. Test the unhappy paths as well: a rejected customer, a closed browser, a duplicate webhook and a partial return. Tabby also sends dispute webhooks when a customer disputes a captured payment, so decide who on your team receives them.

## Where KF Tech Solutions fits

KF Tech Solutions builds custom online stores, mobile apps and the backends behind them, and connects them to other services through their APIs. For BNPL that means the checkout session, the server-side check, a webhook handler that tolerates duplicates, capture and refund actions in your control panel, and a reconciliation report. We work with businesses in Egypt and the Gulf; see our [Saudi Arabia page](/saudi-arabia) and our [API and backend service](/services/api-and-backend). We are not a partner of Tabby or Tamara: you sign the merchant agreement with each provider directly, and the merchant account stays in your name.

## Common questions

### Do I need a payment gateway, or can I connect Tabby and Tamara directly?

Either works. A gateway that lists them saves you separate integrations and gives you one report, which suits a store that already uses it for cards. A direct integration gives you each provider's full feature set and dashboard, at the cost of building and maintaining two integrations.

### Can I offer both Tabby and Tamara at checkout?

Technically, yes. They are separate integrations with separate merchant agreements, and your checkout can show both. Each needs its own session, webhook handling and reconciliation. Check that neither agreement restricts it before you build.

### Can a customer return part of an order?

Yes. Both providers support partial refunds against a captured order, and both support partial changes before capture: a partial capture, or a partial cancellation on Tamara. Your system has to send the right amount once and record it.

### Who collects the instalments from the customer?

The provider does. You are settled for the orders you capture, under the terms of your agreement, and the customer pays the provider. A refund you send reduces what the customer still owes the provider.

### What should I ask a provider before development starts?

Ask for the merchant fee, the settlement schedule and report format, the refund and dispute rules, and test credentials. These decide how your capture, refund and reconciliation code has to work.

If you want Tabby or Tamara in a custom store or app, or want an existing integration checked, [contact us](/contact) or [book a free call](/book).

## Sources

- [SAMA: Tamara Finance licence (3 March 2025)](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1079.aspx)
- [SAMA: Tabby Finance licence (10 November 2025)](https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1116.aspx)
- [Tabby: payment processing](https://docs.tabby.ai/pay-in-4-custom-integration/payment-processing.md)
- [Tabby: payment webhooks](https://docs.tabby.ai/pay-in-4-custom-integration/webhooks.md)
- [Tabby: payment statuses](https://docs.tabby.ai/pay-in-4-custom-integration/payment-statuses.md)
- [Tabby: developer documentation index](https://docs.tabby.ai/llms.txt)
- [Tamara: online order status flow](https://docs.tamara.co/docs/online-order-status-flow.md)
- [Tamara: authorise order](https://docs.tamara.co/reference/authoriseorder.md)
- [Tamara: cancel order](https://docs.tamara.co/reference/cancelorder.md)
- [Tamara: online go-live checklist](https://docs.tamara.co/docs/online-go-live-testing-checklist.md)
- [Tap Payments](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
- [Telr](https://telr.com/)
