---
title: Building an online store in Egypt: payments, delivery and what actually breaks
summary: The two problems that decide whether an Egyptian e-commerce build succeeds — and neither of them is the website.
tag: Web Development
tags: e-commerce, payments, Egypt, delivery, cash on delivery
order: 15
media: https://images.unsplash.com/photo-1556742049-0cfed4f6a45d
alt: An online store being browsed on a laptop
caption: The storefront is the easy part. Money in and goods out are where the work is.
stats: 2|problems that decide the outcome, neither of them the website; 30-70%|of orders that may arrive as cash on delivery; 1|reconciliation job that prevents most disputes
---

Most people planning an online store in Egypt spend their budget on the storefront:
the design, the product pages, the animations. That part is largely solved — plenty
of platforms do it well and cheaply.

The two things that decide whether the business works are money in and goods out.
Both are harder here than the tutorials suggest, and neither is really a website
problem.

## Problem one: cash on delivery

A significant share of Egyptian e-commerce orders are paid in cash at the door. Any
system that treats card payment as the normal case and cash as an edge case will
cause you problems from the first week.

Cash on delivery changes the whole model:

- **The order is not paid when it is placed.** It is a promise. Your stock must be
  reserved but your revenue must not be recognised.
- **Refusal at the door is routine.** Goods come back, stock must return, and the
  courier's fee is spent either way.
- **The courier holds your money**, sometimes for weeks, and remits in batches that
  do not match your orders one-to-one.
- **Reconciliation is a real job.** Which of the 340 orders in this remittance were
  actually collected, and which were returned?

**What to build for it:** an order lifecycle with explicit states — placed,
confirmed, dispatched, delivered, collected, returned, remitted. Most off-the-shelf
carts model two or three of these and assume the rest. The gap between "delivered"
and "money in our account" is where the losses hide.

Build the reconciliation report on day one, not when the disputes start.

## Problem two: delivery

You will use couriers, and probably more than one. Each has its own API, its own
status vocabulary, and its own definition of "delivered".

The trap is building against one courier's model. When you add a second, the
statuses do not map, and you end up with two parallel systems and a person mentally
translating between them.

**What to build for it:** your own status model first, then map each courier into it.
More work on day one, dramatically less on the day you switch or add a courier —
which you will, because coverage and pricing vary by governorate.

## Card payments

| Consideration | What to check |
|---|---|
| Settlement time | How many days until money reaches your account? |
| Fees | Percentage, fixed portion, and what a refund costs you |
| Failed payments | Are they retried, and is the customer told? |
| Refunds | Via API, or a person logging into a portal? |
| Test environment | Does a real sandbox exist, or do you test in production? |
| Instalments | Increasingly expected on higher-value items |

That last row matters commercially. For anything above a few thousand pounds,
instalment options materially affect conversion in this market.

The refund question catches people out: a gateway where refunds require manual
portal access does not scale past a certain order volume, and you will discover that
at exactly the wrong moment.

## What this means for the build

An honest scope for an Egyptian online store is not "a website". It is:

1. A storefront — the genuinely easy part, often a ready-made platform
2. An order system that models cash on delivery properly
3. Courier integration behind your own status model
4. A payment integration with refunds handled programmatically
5. A reconciliation report between courier remittances and your orders
6. Stock that decrements on dispatch, not on order, and returns on refusal
7. E-receipt submission, since these are consumer sales — see
   [connecting your POS to the ETA system](/blog/eta-e-invoicing-pos-integration)

Items two, three and five are where the cost sits, and they are the ones most often
missing from a quote. If a proposal prices only item one, it is pricing a different
project.

> A store that cannot tell you which delivered orders you have actually been paid
> for is not an online store. It is a catalogue with a form.

## Should you use a ready-made platform?

Often yes, at the start. A hosted platform handles the storefront, the basket and
card payment competently, and launching in weeks with something imperfect beats
launching in months with something bespoke.

The limits arrive predictably: when cash-on-delivery reconciliation outgrows what
the platform models, when you need a second courier, or when per-order fees exceed
what a build would cost. The general framework is in
[custom vs off-the-shelf](/blog/custom-software-vs-off-the-shelf-how-to-choose).

The requirement to protect from day one is a documented API and full data export.
Without those, moving later means starting over.

## Common questions

### How much does an online store cost to build?

A ready-made platform with proper cash-on-delivery handling and one courier: modest.
A custom build with multiple couriers, reconciliation and stock: considerably more.
The variable is items two to five above, not the design. See
[what a web app actually costs](/blog/what-does-a-web-app-actually-cost-to-build).

### Do we need an app as well?

Not at the start. A fast, responsive website reaches the same customers. Consider an
app when repeat purchase rates justify it —
[app costs break down here](/blog/app-development-cost-egypt).

### What is the single most common mistake?

Recognising revenue when an order is placed rather than when cash is remitted. It
makes the first months look far better than they are, and the correction is painful.
