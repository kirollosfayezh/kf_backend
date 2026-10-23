---
title: Pharmacy software in Egypt: stock, expiry and the cashier
summary: Why a general POS falls short in a pharmacy, and what pharmacy software should do: selling by box or strip, batches and expiry alerts, price changes, distributor orders, delivery and branches.
tag: POS System
tags: pharmacy system, pharmacy POS, pharmacy software, inventory, expiry dates, Egypt
order: 26
media: https://images.unsplash.com/photo-1580281657527-47f249e8f4df
alt: A pharmacist reaching for a medicine box on a pharmacy shelf
caption: Every box on the shelf, with its batch and expiry date, known to the till.
stats: 1|stock figure per item, across every branch; 3 months|ahead: an expiry alert with time left to act; 1|price change that reaches every till at once
---

A pharmacy looks like a shop: shelves, a counter, a till. Then you look closer.
The same medicine is sold by the box and by the strip. Half the stock has an
expiry date that matters more than its price. Prices change by official
decision, not by the owner. Distributors give bonus units and credit terms. And
at 10 p.m. there are five people at the counter and two delivery orders on
WhatsApp.

A general cashier program handles the till. It does not handle the pharmacy.
Here is what pharmacy software should do.

## Selling by box, strip and unit

In Egypt, customers often buy one strip instead of the whole box. The system has
to know that a box holds, say, three strips of ten tablets, and that selling one
strip reduces the stock by a third of a box, not by one.

Each item should therefore carry:

- **Units**: box, strip and, where it applies, single unit
- **Prices per unit**, calculated from the box price where it is fixed
- **The barcode** on the box, and a quick way to sell a strip without it

If the cashier has to calculate a strip price in their head, it will be wrong
some of the time, and the stock will drift every day.

## Batches and expiry dates

This is where pharmacies lose the most money without noticing. Medicine expires
on the shelf, gets found too late to return to the distributor, and is written
off.

The system should record every purchase with its **batch and expiry date**, and
then:

1. **Sell the nearest expiry first**, by default.
2. **Warn early**, a few months ahead, while there is still time to sell or
   return the stock.
3. **Report the value** of what will expire this month and next, by
   distributor, so you can act on it.
4. **Block the sale** of anything already expired.

> A near-expiry report you check once a week pays for the whole system.

## Prices that change by decision

Medicine prices in Egypt are set officially, and they change. When they do, the
new price has to reach every till at once, and the old stock bought at the old
price still has to be valued correctly.

The system should let you update prices in one place, from a list where
possible, and keep a record of what changed and when. Cashiers should never be
able to change a price on the spot without a permission and a log.

## Buying from distributors

Most of a pharmacy's purchases come from a handful of distributors, each with
its own terms. Pharmacy software should handle:

- **Purchase orders** suggested from what is selling and what is running low
- **Bonus units**, which change the real cost of each item
- **Credit terms**, so you know what you owe each distributor and when
- **Returns** of near-expiry or damaged stock, with what you are owed back

Without this, the owner's real profit per item is a guess.

## A cashier that keeps up at rush hour

At the counter, speed is everything. The cashier should be able to:

- **Scan the barcode** or search by trade name, quickly, in Arabic or English
- **Find alternatives** when an item is out of stock, by active ingredient
- **Take cash, cards and wallets**, and split a payment
- **Print a receipt**, and issue it electronically where your business is
  required to

The electronic receipt system is being rolled out across Egyptian businesses in
phases. We explained how it connects to the till in
[ETA e-invoicing and POS integration](/blog/eta-e-invoicing-pos-integration).

## Delivery orders and branches

Many pharmacies now take a large share of orders by phone and WhatsApp. The
system should record each delivery order, who is delivering it, and the cash
they are bringing back, so the evening count matches.

With more than one branch, each branch needs its own stock, plus transfers
between branches and one view for the owner: what sold where, what is running
low, and what is about to expire.

The system also has to keep selling when the internet drops, and catch up when
it returns. A pharmacy cannot close its till because the router restarted.

## Ready-made or custom

There are ready-made pharmacy systems in Egypt, and for a single pharmacy one of
them is often the right start. Check the expiry handling, the strip selling and
the reports before you sign, not just the cashier screen.

Custom software makes sense for chains with their own purchasing rules, delivery
operations, a website or app for orders, or reports the ready-made systems
cannot produce. Our guide to
[choosing a POS for shops](/blog/pos-cashier-system-for-shops-egypt) lists the
questions to ask any provider.

KF Tech Solutions builds [business systems](/services/business-systems) and
POS software for businesses in Egypt. If your pharmacy has outgrown its current
system, you can [tell us where it falls short](/contact).

## Common questions

### Can the system suggest what to order?

Yes. From recent sales, current stock and a minimum level per item, it can
suggest an order per distributor. The pharmacist still reviews it; seasonal
demand and new medicines need judgement.

### Can it handle prescriptions and controlled medicines?

It can record which sales came with a prescription, attach a photo of it, and
keep the separate records some medicines require. Exactly what is required for
controlled medicines is set by the regulator, so confirm the rules that apply
to you.

### How do we move from our current system?

Item lists and current stock can usually be exported and imported. Expiry dates
for existing stock are the hard part; most pharmacies do a full count with
expiry dates when they switch, which is worth doing anyway.

### Does it work on a tablet?

The cashier screen can, with a barcode scanner and a receipt printer. Purchasing
and reports are easier on a computer.
