---
title: QR menus and table ordering for restaurants in Egypt
summary: What a QR menu can do beyond showing prices: ordering and paying at the table, the kitchen screen, and the link to your POS and stock.
tag: POS System
tags: QR menu, table ordering, restaurant, kitchen display, POS, Egypt
order: 97
media: https://images.unsplash.com/photo-1777370439895-0bc929e08408
alt: QR code stand on an outdoor café table beside a potted plant, with greenery behind
caption: The code on the table is only the start: the order it takes has to reach the kitchen screen and the POS.
stats: 3|levels: view the menu, order, pay at the table; 1|menu and price list shared by QR, cashier and kitchen; 0|table orders a waiter should re-type into the POS
---

A QR menu system lets guests scan a code on the table, see your menu on their phone, and, if you choose, order and pay without waiting for a waiter. For a restaurant or café in Egypt, the useful version is not a PDF behind a QR code: it is a live menu connected to your kitchen and your POS, so an order placed at table 7 prints in the kitchen and lands on the right bill. Whether you need ordering and payment, or only a menu, depends on how your floor works.

## What a QR menu system can cover

There are three levels, and each one adds work and value:

| Level | What the guest does | What it needs behind it |
| --- | --- | --- |
| View-only menu | Scans, reads the menu and prices, calls the waiter | A menu you can edit from a control panel |
| Order at the table | Adds items, notes and options, sends the order | Table numbers, a kitchen screen or printer, a link to the POS |
| Order and pay | Orders, then pays by card or wallet from the phone | All of the above plus an online payment gateway |

Many restaurants start at the first level and move up later. A system built for the third level from day one should still let you switch ordering or payment off per branch or per time of day.

## A view-only menu is not nothing

Even without ordering, a proper digital menu solves real problems. You change a price or remove a sold-out dish once and every table sees it immediately, with no reprinting. You can show photos, ingredients and allergy notes, and offer Arabic and English on the same code.

What it does not solve is the wait for someone to take the order. If your bottleneck at peak time is waiters taking orders, a view-only menu helps little.

## How a table order should travel

The order is where most QR systems are either useful or a nuisance. A good flow looks like this:

1. The guest scans the code on table 7. The menu opens already knowing the table, with no table number to type.
2. The guest chooses items, sizes, extras and notes such as "no onions", and sends the order.
3. The order appears on the kitchen display, or prints on the kitchen printer, split by station: grill items to the grill, drinks to the bar.
4. The same order is added to table 7's open bill in the POS.
5. Staff see the order status, and the guest can see it too: received, being prepared, served.

The point to check is step 4. If a waiter has to read the phone order and type it into the cashier system again, you have doubled the work and added a place for mistakes.

Decide also who confirms orders. Some restaurants let orders go straight to the kitchen. Others want a waiter to accept each new order first, to catch a guest ordering from a code at the wrong table or as a joke.

## The link to your POS

The QR menu should not be a separate system with its own prices. One menu, one price list and one set of items should feed the QR menu, the cashier screen and the kitchen. When you change the price of a dish, it changes everywhere.

The same link matters for stock. If dishes deduct ingredients from inventory, an order placed from the phone has to deduct them exactly like an order taken by the cashier, or your stock figures drift.

If you are still choosing a POS, read [ready-made or custom POS for restaurants](/blog/ready-made-vs-custom-pos-restaurants) first, because the QR menu depends on what the POS allows.

If your business is covered by the e-receipt system, every sale still has to end on a receipt issued through your POS. The Egyptian Tax Authority publishes an eReceipt API that taxpayer systems integrate with, and its site has an inquiry service to check whether a taxpayer is included in the e-receipt decisions. Orders from the QR menu should simply join the bill, so the POS issues the receipt as usual.

## Paying at the table

Paying from the phone saves the wait for the bill at the end, which is often the slowest part of a busy evening. It needs an online payment gateway; our guide to [payment gateways in Egypt](/blog/payment-gateways-egypt) explains how they work and what to compare.

Decide early how you want to handle:

- **Splitting the bill** between several guests at one table.
- **Tips and service charge**, and how they show on the bill.
- **Mixed payment**, where part is paid by phone and part in cash at the counter.
- **Refunds** when a dish is cancelled after payment.

Every payment made at the table must close the right bill in the POS, so the cashier's end-of-shift count matches.

## What to check before you choose

- **No app download.** The menu should open in the phone browser in a few seconds, even on a weak mobile connection.
- **Arabic and English** with a proper right-to-left layout, not a mirrored English page.
- **Your own control panel** to edit items, prices, photos and availability without calling the vendor.
- **Sold-out switches** the kitchen or cashier can flip during service.
- **Per-table codes** that can be reprinted or changed if a code is copied.
- **What happens when the internet drops**, both for the guests' phones and for the kitchen and cashier.
- **Who owns the guest data**, such as phone numbers collected with orders, and whether you can export it.

If you also deliver, the same menu can feed your own ordering channel. Our article on [building your own ordering and delivery app](/blog/restaurant-delivery-app-egypt) covers when that is worth it.

## What KF Tech Solutions does here

We build POS, inventory and web systems as part of our [business systems](/services/business-systems) work, and we have integrated POS with Egypt's e-receipt system. A QR menu with table ordering is a web app built on top of that: one menu shared with your cashier, orders routed to the kitchen, and payment through a gateway when you want it. We work with businesses in Egypt and the Gulf.

## Common questions

### Do guests need to download an app?

No. The QR code opens a web page in the phone browser. Asking guests to install an app just to read the menu loses most of them.

### Can the menu be in Arabic and English?

Yes. The guest picks the language, and both versions come from the same list of items, so prices never differ between them.

### Can I change prices or mark a dish as sold out myself?

You should be able to, from a control panel on a phone or computer, and the change should appear on the tables and the cashier screen straight away.

### Does a QR menu replace waiters?

No. It removes waiting for the menu, the order and the bill. Waiters still serve, advise and look after the tables, with less time spent writing orders.

### What if a guest orders from the wrong table?

Each code carries its table, and you can require a waiter to accept new orders before they reach the kitchen. That catches most mistakes and pranks.

If you want a QR menu that feeds your kitchen and your POS rather than a PDF behind a code, [book a free call](/book) or [send us your menu and how your floor works](/contact).

## Sources

- [Egyptian Tax Authority](https://www.eta.gov.eg/en)
- [ETA eReceipt API documentation](https://sdk.invoicing.eta.gov.eg/ereceiptapi/)
