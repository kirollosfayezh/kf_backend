---
title: Connecting scales and barcode labels to your POS
summary: How goods sold by weight reach the cashier: price-embedded barcode labels, a scale wired to the POS, or live weight streaming, and what to check first.
tag: POS System
tags: POS, weighing scale, barcode labels, scale integration, retail, Egypt
order: 91
media: https://images.unsplash.com/photo-1764211968419-40ceb2e9df44
alt: Label-printing produce scale with a keypad standing among vegetables in a supermarket
caption: A scale that prints the weight and price into the barcode lets the till charge loose goods without retyping anything.
stats: 13|digits in a standard EAN-13 scale label; 20–29|GS1 prefixes kept for in-store numbers such as weighed items; 1|item code each product should share between scale and POS
---

There are three ways to connect a scale to your POS. The scale prints a barcode label with the weight or price built into it and the cashier scans it. The scale sits at the checkout and sends its reading straight to the cashier screen. Or the scale streams live weight to an app or server. The right choice depends on where the weighing happens and who does it.

Whichever you pick, the scale and the POS must agree on one thing: the item code. If they do not, weighed sales land as "miscellaneous" and your stock figures stop meaning anything.

## Three ways weighed goods reach the cashier

| Method | Where weighing happens | Best for | Main thing to get right |
| --- | --- | --- | --- |
| Price-embedded barcode label | At the counter, before the checkout | Delis, butchers, bakeries, supermarkets with service counters | The label format the POS reads |
| Scale connected to the POS | At the checkout itself | Produce sold loose, small shops with one cashier | The cable, driver and protocol |
| Live weight streaming | Anywhere, on a networked scale | Warehouses, production, remote monitoring | Network reliability and what happens offline |

Many shops use two of these at once: labelled packs from the counter and a checkout scale for loose produce.

## Price-embedded barcode labels

A label scale weighs the item, works out the price from the price per kilo, and prints a barcode label. When the cashier scans it, the POS reads the item and the price or weight from the barcode, with no typing.

These labels are usually 13-digit EAN barcodes that start with a digit from 20 to 29. GS1, the organisation behind retail barcodes, calls these **Restricted Circulation Numbers**: numbers meant for use inside a store or a country, not globally unique, and not a GTIN (the normal product barcode). Each national GS1 organisation decides what those prefixes mean in its market.

One common layout looks like this:

| Digits | Meaning |
| --- | --- |
| 2 digits | Prefix telling the POS "this is a scale label" |
| 5 digits | Your internal item code (often called the PLU) |
| 5 digits | Price, or weight in grams |
| 1 digit | Check digit that catches misreads |

That is only one layout. Some scales put weight instead of price, use another prefix, or add a price check digit. So **set the same format on the scale and in the POS**, then test it with a real label.

### Price or weight in the barcode?

- **Price in the barcode** is simplest at the checkout, but the POS has to work out the weight backwards for stock, which can give rounding gaps.
- **Weight in the barcode** keeps stock accurate in kilos, and the POS applies today's price, even to labels printed this morning.

For stock control, weight is usually the better choice.

### Newer label formats

GS1's fresh-food guidance describes a move from these in-store numbers to a proper GTIN plus data such as net weight, price and expiry date, carried in GS1 DataBar or 2D barcodes (GS1 QR Code, GS1 DataMatrix). An expiry date lets the POS block the sale of an expired pack. Ask whether a new scanner reads 2D codes before you buy it.

## A scale connected directly to the POS

For loose produce weighed at the checkout, the scale connects to the cashier computer, usually by a serial (RS-232) or USB cable, and some models by network. The cashier picks the item, the POS asks the scale for the weight, and the line is added with the weight as the quantity.

Before you buy, check:

- **Which protocol the scale speaks**, and whether your POS supports it out of the box or needs custom work.
- **That the POS only accepts a stable reading**, not the number shown while the bag is still moving.
- **Tare handling**, so the container is not charged as product.

If you sell by weight to the public, also ask your supplier about the calibration and verification the scale needs for trade use.

## Live weight streaming

Some businesses need the weight on a screen away from the till: a stock room, a production line, a delivery check, or a phone. Here the scale reads its load cell and sends each reading over the network to a server or app. Our [Smart Balance](/projects/smart-balance) prototype works this way: a Raspberry Pi reads the load cell in Python and streams the weight live to a mobile app, so the reading is available the moment it changes.

A networked scale can also post a weight to the cashier, record goods received against a purchase order, or log every weighing. The design questions are about reliability: what the app shows when the connection drops, how readings are time-stamped, and who may override a weight by hand.

## Keep item codes and prices in one place

The common failure is two lists, one on the scale and one in the POS, updated by different people. A week later, the scale sells at last month's price.

- **Keep the item list and prices in the POS**, and send them to the scale, either through the scale vendor's software or a direct link.
- **Use the same item code everywhere**: in the POS, on the scale and on the label.
- **Record who changed a price and when**, especially for items sold at the counter.

This is a large part of what [choosing a POS cashier system](/blog/pos-cashier-system-for-shops-egypt) for a shop with weighed goods is about.

## Stock and reports for weighed goods

Weighed items are where stock drifts most: trimming, drying and the extra grams given to a regular. The POS should:

- Store weighed items in kilos or grams, with decimals, not whole units.
- Record waste and trimming as its own movement, not as a hidden sale.
- Show sold weight per item per day, so you can compare it with what was received.

If the totals do not match, the [inventory management guide](/blog/inventory-management-system-egypt) explains where stock usually goes. And if your checkout also takes cards or wallets, see [payment gateways in Egypt](/blog/payment-gateways-egypt).

## How KF Tech Solutions helps

We build [business systems](/services/business-systems), including POS and inventory software, and we have built a connected scale that streams live weight to an app. For a shop or warehouse, that means we can read your scale's label format or connection in the POS, keep item codes and prices in one place, and record weighed stock correctly. We work with businesses in Egypt and the Gulf.

## Common questions

### Can I use my existing scale with a new POS?

Often, yes. If it prints barcode labels, the POS only needs to read its label format. If it connects by cable, check which protocol it uses and whether the POS supports it.

### Do I need a GS1 membership for scale labels?

The 20–29 prefixes are meant for in-store use, so labels printed and sold inside your own shop do not normally use your company's GTINs. Check with GS1 Egypt if you also supply weighed packs to other retailers, because then the product needs a proper barcode.

### Why does the POS reject some scale labels?

Usually the label format on the scale does not match the POS setting, or the item code on the label is missing from the POS. Print and test one label per item type.

### Does this work with e-receipts?

It should. A weighed item becomes a receipt line with the weight as the quantity and kilograms as the unit, so check that your POS sends decimal quantities correctly on e-receipts.

Selling by weight and tired of typing prices at the till? [Tell us how your shop works](/contact) or [book a free call](/book), and we will help you plan the link between your scales and your POS.

## Sources

- [GS1 Fresh Foods Sold at Point-of-Sale Implementation Guideline](https://ref.gs1.org/guidelines/fresh-foods/)
- [GS1 summary of prefixes 20–29 by GS1 Member Organisation](https://www.gs1.org/docs/barcodes/SummaryOfGS1MOPrefixes20-29.pdf)
