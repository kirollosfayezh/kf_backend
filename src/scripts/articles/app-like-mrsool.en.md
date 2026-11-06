---
title: Building an errand app like Mrsool: how it works
summary: How an errand app like Mrsool works, from request to courier offers, chat and payment, how it differs from food delivery, and what to launch first.
tag: Mobile
tags: errand app, courier app, on-demand delivery, marketplace app, MVP, Saudi Arabia
order: 59
media: https://images.unsplash.com/photo-1720827965169-13ba59a6ebc8
alt: Two pairs of hands passing a brown paper bag in front of a white building with arched windows
caption: In an errand app the handover is the last link in a chain of request, offer, chat and payment.
stats: 3|apps in an errand platform: customer, courier, admin; 1|city to launch in before you add a second; 72h|to notify SDAIA of a personal data breach under the PDPL
---

An errand app like Mrsool lets a customer ask for almost anything to be bought, picked up or delivered, and lets nearby couriers offer to do it for a fee. You need three pieces of software: a customer app, a courier app and an admin dashboard. The hard part is not the screens but the rules around offers, chat, cash and trust, so the sensible route is one city, a narrow first version, and manual control from the dashboard until real orders show you what to automate.

Last checked: 6 November 2026

## How an errand app works, step by step

Mrsool is useful here only as a reference for a familiar model. The flow behind most errand apps looks like this:

1. **The customer posts a request.** Free text such as "two shawarma sandwiches from the shop on this street" or "collect a parcel from this address", with a pickup point, a drop-off point and optional photos.
2. **Nearby couriers see the request.** The app shows it to couriers who are online within a set distance.
3. **Couriers send offers.** Each courier proposes a delivery fee. The customer sees the offers, usually with the courier's rating and distance, and accepts one.
4. **Customer and courier chat.** They confirm details, the courier sends a photo of the receipt, and the final amount for the goods is agreed.
5. **The courier buys or collects, then delivers.** The customer follows the status, and often the courier's position on a map.
6. **Payment and ratings.** The customer pays for the goods and the delivery fee, the platform takes its commission, and both sides rate each other.

Every step hides a business decision. Who is allowed to see a request, how far away? Can a courier change the fee after accepting? Who pays the shop, and when? These answers shape the software more than any screen design does.

## How it differs from a restaurant delivery app

An errand app and a food delivery app look alike on the phone, but they are different businesses with different risks.

| | Restaurant delivery app | Errand app |
|---|---|---|
| What is ordered | Items from a fixed menu | Anything the customer describes |
| Price of the goods | Known before checkout | Known only after the courier buys them |
| Delivery fee | Set by the platform | Offered by couriers or set by distance rules |
| Merchant side | Restaurant screen to accept orders | Usually none: the shop does not know the app exists |
| Who handles the goods money | The restaurant is paid through the platform | Often the courier pays the shop first |
| Main risk | Restaurant delays and peak-hour load | Disputes, cash handling and trust between strangers |

The missing merchant side makes an errand app cheaper to start: there are no restaurant contracts, menus or tablets. The open-ended request makes it harder to run: every order is different, and the price of the goods is uncertain until the courier is in the shop. If you are a restaurant that wants its own ordering app, a different and smaller project applies; see [Should your restaurant build its own ordering and delivery app?](/blog/restaurant-delivery-app-egypt). If you want a multi-restaurant marketplace, see [Building a delivery app like Jahez: scope and cost](/blog/delivery-app-like-jahez).

## What you need to build, and the hard parts

| Part | Who uses it | What it must do |
|---|---|---|
| Customer app | People placing requests | Post a request with text, photos and locations, compare offers, chat, track, pay, rate, saved addresses |
| Courier app | Couriers | Go online and offline, see nearby requests, send offers, chat, navigate, upload receipts, confirm delivery, see earnings |
| Admin dashboard | Your team | Approve couriers, set zones and fee rules, watch live orders, step into disputes, refunds, payouts, reports |

Behind them sits the server that matches requests to couriers, carries the chat messages and keeps every screen in step. Most of the engineering effort lives there, not in the apps themselves. Four areas take most of the design work.

### Offers and pricing

Letting couriers bid is simple to build and hard to balance. Too few offers and customers leave; too many low offers and couriers stop working. Many teams start with a fee calculated from distance, with a minimum, and add offers later, or let couriers bid only within a range you set in the dashboard.

### Chat

Chat is where the order is really agreed, so it has to be reliable: text, photos, read status, and a record your support team can review when there is a dispute. Hide personal phone numbers, and decide how long chat history is kept.

### Money for the goods

This is the biggest design question. If couriers pay the shop from their own pocket, they carry the risk when a customer cancels or refuses the item. If customers pay in advance, the amount is a guess until the receipt arrives. Common answers are a limit on the value of goods per order, an upfront payment for larger orders, and a clear cancellation rule once the courier has bought the items.

### Trust and safety

Couriers are strangers entering homes and handling money. You need courier sign-up with identity documents checked by your team, two-way ratings, a way to report a problem from inside an order, and the ability to suspend an account from the dashboard. Check the current rules for freelance couriers and for goods you will not allow, with the relevant authority and your lawyer, before launch.

## A first version you can launch in one city

Start with one city, a limited set of request types and couriers you can reach directly. A phased plan keeps the first build small.

| Phase | What you launch | What waits |
|---|---|---|
| 1. First version | Customer and courier apps, request with text and photo, distance-based fee, chat, status updates, card and cash payment, admin dashboard with manual assignment | Courier bidding, wallets, promotions, more cities |
| 2. Grow | Courier offers within limits, live map tracking, ratings, promo codes, courier earnings and payout reports | Subscriptions, automatic dispatch rules |
| 3. Scale | Smarter matching, more zones and cities, wallets, business accounts, deeper analytics | Only what the data shows you need |

Phase 1 has to prove that customers come back, that couriers earn enough to stay online, and that disputes stay manageable. If any of those fails, more features will not fix it. We explain this way of starting in [Have an app idea? Start small with an MVP](/blog/mobile-app-mvp-egypt).

Manual control from the dashboard is the most useful shortcut: an operator can assign a courier, adjust a fee or settle a dispute by hand, and those decisions become the rules you automate later.

## What drives the cost of your version

There is no honest single price for "an app like Mrsool", because the name covers anything from a one-city service with fixed fees to a national platform with bidding, wallets and business accounts. These choices move the number most.

| Decision | Smaller build | Larger build |
|---|---|---|
| Pricing | Fee from distance rules | Courier bidding with limits and counter-offers |
| Request types | A few, such as groceries and parcels | Open-ended requests of any kind |
| Assignment | Manual from the dashboard | Automatic matching by distance, rating and load |
| Tracking | Status updates | Live map with arrival estimate |
| Payments | One gateway, card and cash | Wallets, split payouts, refunds by rule |
| Coverage | One city | Many cities with zone-based fees |

Running costs continue after launch: servers, maps, SMS for log-in codes, push notifications, app store developer accounts, payment gateway fees and support. Ask any vendor to list these separately from the build price.

Projects start from $200 (about SAR 750 / AED 735); the final price depends on scope, with a fixed written quote after a free call.

## Payments and personal data in Saudi Arabia

This section is general information, not legal or tax advice. Confirm the details for your company with your accountant and lawyer.

- **Payments.** mada, the national payment network owned by SAMA, supports Apple Pay, mada Pay, Samsung Pay and Google Pay, and online payments through 3-D Secure. Apps usually accept these through a licensed gateway; Tap, PayTabs and Telr each list mada and Apple Pay. In an errand app, ask the gateway early how it handles refunds, holds and payouts to couriers. Our guide to [payment gateways in Saudi Arabia](/blog/payment-gateways-saudi-arabia) compares the options.
- **Personal data.** An errand app holds names, phone numbers, home addresses, chat messages, receipt photos and courier locations. Saudi Arabia's Personal Data Protection Law (PDPL) has been in force since 14 September 2023, is supervised by SDAIA, requires breach notification within 72 hours, and applies to foreign providers serving individuals in the Kingdom. Collect only what you need and decide where the data is hosted.
- **E-commerce disclosures.** The E-Commerce Law requires an online store to disclose its name, contact details and commercial registration, and to give customers the contract terms. Put your terms, cancellation rules and contact details in the app from day one.

## What KF Tech Solutions does here

KF Tech Solutions builds mobile apps and web dashboards, and we have built request-and-dispatch software before: the [Eltayib](/projects/eltayib) towing and roadside-assistance platform lets a driver request help in a few taps, tracks the request in real time and gives the operator one place to manage services, coverage and the fleet. For an errand app, we scope a one-city first version with customer and courier apps and an admin dashboard in Arabic and English, then plan the next phase from real orders. We work with businesses in Egypt and the Gulf. See our [mobile applications service](/services/mobile-applications) and our page for [businesses in Saudi Arabia](/saudi-arabia).

## Common questions

### Can I copy Mrsool's design and name?

No. Use it as a reference for what customers expect, such as clear offers and a simple chat, but your brand, screens and content must be your own. Its name and logo belong to its owner.

### Do I need couriers before the app is ready?

You need a first group before launch, because customers who see no offers rarely try again. Many teams sign up and train couriers in one area during development and open the app to customers only in that area.

### Should couriers bid, or should the app set the fee?

For a first version, a fee from distance rules is easier to explain and to support. Bidding can be added once you know typical fees, and it works better with limits set from the dashboard.

### One app for iOS and Android, or two native apps?

For most first versions, one cross-platform codebase for iOS and Android keeps cost and maintenance down. Native apps make sense later if heavy map or device features demand it.

### Will I own the source code?

You should. Ask for full source-code and IP assignment in the contract, along with an NDA, return or secure deletion of your data at the end of the contract, and an incident-notification procedure.

If you are planning an errand or courier app for Saudi Arabia, [tell us about the idea](/contact) or [book a free call](/book), and we will help you cut it down to a first phase you can launch.

## Sources

- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap Payments](https://www.tap.company/en-sa), [PayTabs](https://www.paytabs.com/en/) and [Telr](https://telr.com/)
- [DLA Piper: data protection laws of Saudi Arabia](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Chambers TMT 2026: Saudi Arabia trends and developments](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Saudi E-Commerce Law (official translation)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
