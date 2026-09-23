---
title: Cutting a restaurant chain's stock waste by a third
summary: How a four-branch group replaced paper tickets and weekly guesswork with one connected system — what we built, what it changed, and what we would do differently.
tag: Case Study
tags: case study, POS, restaurants, stock, automation
order: 10
media: https://images.unsplash.com/photo-1414235077428-338989a2e8c0
alt: A restaurant kitchen during service
caption: Ordering to habit rather than to consumption is the most expensive spreadsheet in the building.
stats: ~33%|reduction in stock waste in the first quarter; 4|branches brought onto one system; 30 min|saved per branch per night on reconciliation
---

A four-branch restaurant group came to us with a problem they described as "we need
a better POS". After a week of watching service, it was clear the till was not the
problem. The problem was that nothing the till knew ever reached anybody who made a
decision.

## What was actually happening

Orders were taken on paper, carried to the kitchen, and rung into a till separately.
Three consequences followed, and none of them looked like a software problem from
the inside:

- **Stock was a weekly guess.** Orders were placed from habit. The same quantities
  went in every week regardless of what had sold, so popular items ran out and
  perishables were thrown away.
- **Closing took forty minutes a night, per branch.** A manager reconciled paper
  tickets against the till by hand, producing a number the till already had.
- **Orders got lost between floor and kitchen.** Remade dishes cost twice: the food,
  and the wait.

The owners could see the money leaving. They could not see where.

## What we built

A single connected system, delivered in stages so each piece paid for itself before
the next began.

**Stage one — POS and kitchen display.** Orders go from the floor straight to a
kitchen screen. No handwriting, no lost tickets, no re-entry. This alone removed the
remake problem within two weeks.

**Stage two — recipes and live stock.** Every menu item is mapped to its
ingredients, so a sale deducts stock automatically. The weekly guess became
arithmetic: the system knows what left the building.

**Stage three — ordering against consumption.** Suggested purchase orders generated
from actual sales, adjusted by a manager before going to suppliers.

**Stage four — one dashboard across branches.** Owners see all four branches
together: sales, stock, waste and labour, in numbers that agree with each other
because they come from one source.

## What changed

| | Before | After first quarter |
|---|---|---|
| Stock waste | Baseline | ~33% lower |
| Nightly close | 30 – 40 min per branch | Confirmed, not assembled |
| Lost or remade orders | Several per service | Rare |
| Stock visibility | Weekly, on paper | Live, across branches |

The waste figure is the one the owners quote, and it came almost entirely from
stage three. Ordering to actual consumption instead of to habit is not a
sophisticated idea. It was simply impossible before the data existed.

> We were ordering the same amount every week regardless of what we sold. The
> system just showed us the difference.
> — the group's operations manager

## What made it work

**We watched a Friday service before writing anything.** Every wrong assumption we
would have made was corrected in that one evening. No specification document would
have surfaced them.

**Staged delivery.** Each stage went live on its own and earned its keep before the
next started. If the project had stopped after stage one, it would still have been
worth doing.

**One branch first.** The busiest one, for three weeks, before the other three. The
things that went wrong went wrong once.

## What we would do differently

**We underestimated recipe mapping.** Mapping every menu item to ingredients is
tedious, it needs the head chef rather than a developer, and we scheduled it as if
it were a data-entry task. It took roughly twice as long as planned and it is the
foundation everything else sits on.

**We built reporting too early.** The first dashboard was designed before anyone
had lived with the data, and half of it went unused. The version that stuck was
built in month three, from questions people had actually started asking. This is the
trap described in
[your dashboard is lying to you](/blog/your-dashboard-is-lying-to-you) — we walked
into it ourselves.

## Would this work for you?

The gains here came from a specific situation: multiple branches, perishable stock,
and a process where information was captured but never reached a decision. If that
describes you, the numbers are plausible for your business too.

If you are a single site with simple stock, a good off-the-shelf POS will get you
most of this for a fraction of the cost. That comparison is worked through in
[ready-made or custom POS](/blog/ready-made-vs-custom-pos-restaurants).

## Common questions

### How long did it take?

Fourteen weeks from first visit to all four branches live, across the four stages.
Stage one was running in the first branch by week five.

### What about the e-invoicing requirements?

Built in at stage one rather than retrofitted, which is considerably cheaper. See
[connecting your POS to the ETA system](/blog/eta-e-invoicing-pos-integration).

### Did staff resist it?

Less than the owners feared, because the kitchen screen made the cooks' jobs easier
on day one. The order matters: automate something that helps the people using it
first, and the rest is accepted far more readily.
