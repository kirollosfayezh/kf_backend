---
title: Connecting the systems you already run
summary: Why integration costs what it does, the four ways systems can be joined, and how to tell before you commit which one you are facing.
tag: Business Systems
tags: integration, API, business systems, data
order: 14
media: https://images.unsplash.com/photo-1558494949-ef010cbdcc31
alt: Server infrastructure connecting systems
caption: The cost of connecting two systems is set by the older one, not the new one.
stats: 4|ways two systems can be joined, in descending order of sanity; 1|question to ask before committing; 80%|of integration cost that sits in error handling, not in the happy path
---

Most businesses do not need new software. They need the software they already have
to stop disagreeing with itself.

The POS knows what sold. The accounting package knows what was invoiced. The
warehouse system knows what is on the shelf. None of them agree, and a person spends
their week reconciling three screens.

That is an integration problem, and it is priced very differently depending on one
thing you can check in an afternoon.

## The four ways to connect two systems

In descending order of how well they work.

### 1. A documented API

The system offers a defined way for other software to read and write its data.
This is the good case: predictable, supported, and it survives the vendor's next
update.

**Typical effort:** days to two weeks per integration.

### 2. An undocumented but real API

The system has an interface, but it is not published — often it is what the vendor's
own mobile app uses. It works, but nothing stops it changing without warning.

**Typical effort:** two to four weeks, plus ongoing fragility. Acceptable as a
bridge, not as a foundation.

### 3. Scheduled file exchange

The system exports a file on a schedule; you read it. Crude, but genuinely robust —
plenty of serious businesses run on a nightly CSV.

The limitation is time: your data is as fresh as the last export. If decisions need
live numbers, this is not enough.

**Typical effort:** one to three weeks.

### 4. Screen scraping or manual export

No interface at all. Someone downloads a report, or software pretends to be a user
clicking through pages.

**Typical effort:** variable, and it breaks whenever the vendor changes a screen.
Treat this as a temporary measure with a plan to replace it — or as evidence that
the system itself needs replacing.

## The question to ask first

Before scoping any integration, ask the vendor of the **older** system:

**"Do you have API documentation, and can I see it now?"**

Not "do you support integration" — every vendor says yes. Ask for the document. The
answer places you on the list above, and that placement, not the new project,
determines the cost.

| Answer | What it means |
|---|---|
| Sends you a link immediately | Case 1. Proceed. |
| "Yes, our partners have access" | Possibly case 1, with a commercial gate. Ask about cost and terms. |
| "We can build you an export" | Case 3. Budget accordingly. |
| "What would you like it to do?" | They do not have one. Case 4. |
| No reply | Case 4, and a reason to reconsider the system. |

## Where the cost actually is

Not in reading the data. Reading the data is the easy part, and it is what demos
show.

The cost is in everything that happens when reality misbehaves:

- **The other system is down.** Do you queue and retry, or fail and alert?
- **The same record arrives twice.** Does it create a duplicate order?
- **The two systems disagree.** Which one wins, and who is told?
- **A record changes after you copied it.** Do you notice?
- **Someone edits both sides at once.** Which edit survives?

These decisions are business decisions, not technical ones, and they need someone
from the business to make them. An integration built without answering them will
work in testing and produce silent, compounding data errors in production — the kind
found at audit, a year later.

> Integration is not about moving data. It is about deciding what is true when two
> systems disagree.

## A sensible order

1. **One direction first.** Read from the old system into the new one. Two-way sync
   is significantly harder and often unnecessary.
2. **One record type first.** Products, then customers, then orders. Each teaches
   you something about the next.
3. **Log everything from day one.** When a number is wrong in month four, the log is
   how you find out why.
4. **Reconcile deliberately.** A daily job that compares both sides and reports
   differences. Without it you are trusting rather than knowing.

## Common questions

### Should we use an integration platform instead of building it?

For common systems with ready-made connectors, often yes — it is cheaper and faster.
It becomes the wrong answer when your logic is unusual, when per-record pricing
outgrows a build, or when the connector does not cover the fields you actually need.

### Our vendor charges for API access. Is that normal?

Common, and worth pricing into the comparison. What is not acceptable is a vendor
charging for access to **your own data**. That is a reason to plan an exit, and
[buy vs build](/blog/custom-software-vs-off-the-shelf-how-to-choose) is the next
thing to read.

### How do we avoid this next time?

Make "documented API and full data export" a written requirement in every future
software purchase. It costs nothing at purchase and it is the single thing that
determines whether your systems can ever work together.
