---
title: Building a delivery app like Jahez: scope and cost
summary: The four apps behind a Saudi delivery marketplace, why Jahez-scale platforms cost so much, and a phased plan to launch in a single city first.
tag: Mobile
tags: delivery app, food delivery, marketplace app, app development cost, MVP, Saudi Arabia
order: 46
media: https://images.unsplash.com/photo-1695654392176-5d5098c71260
alt: Delivery rider's view from a motorbike in traffic, with two phones mounted on the handlebars
caption: Behind each courier's phone sit dispatch, live tracking and payouts, the parts that make a delivery platform expensive.
stats: 150m+|orders Keeta passed in Saudi Arabia in 2025; 68.7m|orders Jahez handled in the first nine months of 2025; 4|apps in one delivery platform: customer, courier, restaurant, admin
---

To build a delivery app like Jahez, you are building four products, not one: a customer app, a courier app, a restaurant screen and an admin dashboard. The menu and the checkout are the cheap part. Dispatch, live tracking, payouts and running many cities are what make the big platforms expensive, so the sensible route is one city, a narrow first version, and the rest added once real orders justify it.

Last checked: 6 November 2026

## What "an app like Jahez" really means

When people ask for "an app like Jahez", they usually picture the customer app: browse restaurants, order, pay, and watch the courier on a map. Behind that screen sit three more pieces of software, each with its own users.

| Part | Who uses it | What it must do |
|---|---|---|
| Customer app | People ordering | Restaurants and menus, cart, payment, order status, ratings, saved addresses |
| Courier app | Drivers | Go online and offline, accept jobs, navigation, pickup and delivery confirmation, earnings |
| Restaurant screen | Restaurant staff | Order alerts, accept or reject, preparation time, mark items unavailable |
| Admin dashboard | Your team | Restaurants, menus, couriers, delivery zones and fees, commissions, refunds, support, reports |

There is also a fifth piece that nobody sees: the server that connects them, decides which courier gets which order and keeps every screen in sync. Most of the engineering effort lives there.

A marketplace also has three groups to win at the same time: people who order, restaurants that list, and couriers who deliver. The software can be finished long before the operation is ready, so plan both together.

## Why the big platforms cost so much

The size of the Saudi market explains why the leading apps run large engineering teams. Keeta, which launched in Saudi Arabia in autumn 2024, passed 150 million orders in the Kingdom in 2025, across 23 cities and more than 50,000 restaurants. Jahez handled about 68.7 million orders in the first nine months of 2025. HungerStation, the other leading local platform, does not publish its Saudi order numbers. You do not need anything close to this to start, but it shows where the money goes.

### Dispatch

Choosing the right courier for each order is the hardest part. A simple version offers the order to nearby couriers and the first to accept takes it. A serious version weighs distance, preparation time, traffic, batching two orders on one trip and fairness between drivers. That logic is tuned for years on real data.

### Live tracking

Showing the courier moving on a map means the courier app sends its location every few seconds, the server passes it on, and the customer app redraws it without draining the battery. Multiply that by thousands of couriers at the lunch peak and you need infrastructure built for it, plus map and routing services that charge per use.

### Payouts and money flows

Every order splits money between the restaurant, the courier, your commission, delivery fees, discounts and VAT. Then come refunds, cancelled orders, cash collected by couriers and weekly settlements with each restaurant. The accounting side is often bigger than the app side.

### Many cities

Each new city adds delivery zones, fee rules, courier supply, support hours and restaurant onboarding. The software has to handle different rules per zone, and your team has to run them.

### Reliability at peak

A delivery app is used in short, intense bursts around meal times. An outage at dinner time costs orders and restaurant trust at once, so monitoring, testing and support cover are part of the build, not extras.

## A phased plan for one city

Start where you can control quality: one city, a limited set of restaurants, and couriers you can talk to directly. A typical plan looks like this.

| Phase | What you launch | What waits |
|---|---|---|
| 1. First version | Customer app, simple restaurant screen, courier app with manual or nearest-courier assignment, basic admin, card and cash payment | Automatic batching, loyalty, a promotions engine, more cities |
| 2. Grow | Live map tracking, ratings, promo codes, restaurant reports, settlement reports | Advanced dispatch, subscriptions |
| 3. Scale | Smarter dispatch, more zones and cities, subscriptions, marketing tools, deeper analytics | Only what the data shows you need |

Phase 1 has to prove three things: customers order again, restaurants keep their tablets switched on, and couriers earn enough to stay. If any of those fails, more features will not fix it. We explain this approach in more detail in [Have an app idea? Start small with an MVP](/blog/mobile-app-mvp-egypt).

Two shortcuts save a lot in phase 1:

- **Manual dispatch from the admin dashboard.** An operator assigns orders by hand at first, which also teaches you what the automatic rules should be.
- **A web-based restaurant screen.** A tablet showing a web page in the browser is enough to receive orders; a separate native restaurant app can wait.

## What drives the cost of your version

There is no honest single price for "an app like Jahez", because two projects with the same name can differ several times over in size. These are the decisions that move the number most.

| Decision | Smaller build | Larger build |
|---|---|---|
| Who sells | One restaurant or one chain | Many independent restaurants |
| Couriers | The restaurant's own drivers or a delivery partner | Your own freelance courier network |
| Assignment | Manual or nearest courier | Automatic dispatch with batching |
| Tracking | Status updates: accepted, on the way, delivered | Live map with arrival estimate |
| Payments | One gateway, card and cash | Wallets, split settlements, buy now pay later |
| Coverage | One city | Many cities with zone-based fees |

The first row matters most. If you are a restaurant or a chain that wants its own ordering app rather than a marketplace, the scope drops sharply; we cover that case in [Should your restaurant build its own ordering and delivery app?](/blog/restaurant-delivery-app-egypt). For app budgets in the Kingdom in general, see [Mobile app development cost in Saudi Arabia, explained](/blog/app-development-cost-saudi-arabia), and for how similar work is priced from Egypt, see [What a mobile app actually costs to build in Egypt in 2026](/blog/app-development-cost-egypt).

Running costs continue after launch: servers, map and SMS services, app store developer accounts, payment gateway fees and support. Ask any vendor to list these separately from the build price.

Projects start from $200 (about SAR 750 / AED 735); the final price depends on scope, with a fixed written quote after a free call.

## Payments, invoices and personal data in Saudi Arabia

This section is general information, not legal or tax advice. Confirm the details for your company with your accountant and lawyer.

- **Payments.** mada, the national payment network owned by SAMA, supports Apple Pay, mada Pay, Samsung Pay and Google Pay, and online payments through 3-D Secure. Apps usually accept these through a licensed gateway; Tap, PayTabs and Telr each list mada and Apple Pay, and some also list Tabby or Tamara. Ask the gateway early how it handles refunds and settlements to restaurants.
- **E-invoicing.** VAT-registered businesses resident in Saudi Arabia issue electronic invoices under ZATCA's FATOORA rules, and the detailed guideline also covers third parties that issue invoices on a taxpayer's behalf. Decide early who issues each invoice in your model; our guide to [ZATCA Phase 2 integration for your own POS or ERP](/blog/zatca-phase-2-integration-custom-pos-erp) explains what the system has to do.
- **Personal data.** A delivery app holds names, phone numbers, home addresses and courier locations. Saudi Arabia's Personal Data Protection Law (PDPL) has been in force since 14 September 2023, requires breach notification to SDAIA within 72 hours, and applies to foreign providers serving individuals in the Kingdom. Collect only what you need and decide where the data is hosted.
- **E-commerce disclosures.** The E-Commerce Law requires an online shop to disclose its name, contact details and commercial registration, and to give customers the contract terms. Put these in the app and on its website from day one.

## What KF Tech Solutions does here

KF Tech Solutions builds mobile apps and web dashboards, and we scope delivery platforms in phases: a one-city first version with the customer app, courier app, restaurant screen and admin dashboard in Arabic and English, then the next phase once orders come in. We work with businesses in Egypt and the Gulf, and Cairo works on Riyadh time from late April to late October and one hour behind it in winter. See our [mobile applications service](/services/mobile-applications) and our page for [businesses in Saudi Arabia](/saudi-arabia).

## Common questions

### How long does a delivery app take to build?

It depends on how many of the four parts you need on day one and how much of dispatch starts manual. A one-city first version with manual dispatch is far quicker than a multi-city platform with automatic dispatch. A written plan after the first call should give you a date for each phase.

### Can I copy the design of Jahez or Keeta?

No. Use the big apps as a reference for what customers expect, such as clear order status and saved addresses, but your brand, screens and content must be your own. Their names and logos belong to them.

### Do I need my own couriers from the start?

Not necessarily. Many projects start with the restaurants' own drivers or a delivery partner, and add an in-house courier network once order volume in a zone can keep couriers busy.

### One app for iOS and Android, or two native apps?

For most first versions, one cross-platform codebase for iOS and Android keeps the cost and the maintenance down. Native apps make sense later if heavy map or device features demand it.

### Will I own the source code?

You should. Ask for full source-code and IP assignment in the contract, along with an NDA, return or secure deletion of your data at the end of the contract, and an incident-notification procedure.

If you are planning a delivery app for Saudi Arabia, [tell us about the idea](/contact) or [book a free call](/book), and we will help you cut it down to a first phase you can launch.

## Sources

- [Argaam: Keeta and Jahez order numbers for 2025](https://www.argaam.com/en/article/articledetail/id/1886411)
- [Rest of World: Keeta, HungerStation and Jahez in Saudi Arabia](https://restofworld.org/2025/delivery-app-keeta-hungerstation-saudi-arabia/)
- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap Payments](https://www.tap.company/en-sa), [PayTabs](https://www.paytabs.com/en/) and [Telr](https://telr.com/)
- [ZATCA: what is e-invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: E-Invoicing Detailed Guideline](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [DLA Piper: data protection laws of Saudi Arabia](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Chambers TMT 2026: Saudi Arabia trends and developments](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Saudi E-Commerce Law (official translation)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
