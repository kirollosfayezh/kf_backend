---
title: What does a web app actually cost to build?
summary: The line items that move the number, the ones that are always missing from a quote, and how to compare two proposals that look nothing alike.
tag: Web Development
tags: web development, pricing, procurement, scoping
order: 6
media: https://images.unsplash.com/photo-1498050108023-c5249f4df085
alt: A developer's screen showing application code
caption: Two quotes for "the same" web app routinely differ by a factor of four. Usually they are not describing the same thing.
stats: 4x|typical spread between quotes for the "same" app; 40%|of a build that is usually invisible to the buyer; 3 years|the horizon that makes costs comparable
---

Ask three firms to price the same web application and you will get three numbers
that differ by a factor of four. The instinct is to assume someone is overcharging.
Usually the truth is duller: they are pricing three different projects, because the
brief left room for three interpretations.

Here is what actually moves the number.

## The parts a buyer can see

These are the screens. Everyone quotes them, and they are the smaller half of the
work.

- How many distinct screens, and how many states does each have? A list is one
  screen; a list with search, filters, empty state, error state, loading state and
  pagination is closer to six.
- How much of it is bespoke design versus a component library?
- Does it need to work properly on a phone, or only survive on one?

## The parts a buyer cannot see

Roughly 40% of most builds, and the usual reason two quotes diverge.

**Authentication and permissions.** "Users can log in" is an afternoon. "Managers
see their branch, regional managers see their region, finance sees everything but
cannot edit" is a week, and it touches every query in the system afterwards.

**Data modelling.** Getting this wrong is the single most expensive mistake in
software, because every later feature inherits it. It is invisible in a demo and
decisive in year two.

**The admin side.** Someone has to add products, correct mistakes, refund orders
and answer "why does this customer see the wrong price?". If the quote has no admin
area, either you will be asking a developer to run database queries forever, or the
cost is hiding.

**Error handling.** What happens when the payment gateway times out after taking
the money? A system without an answer to that question is not finished, it is
demoed.

## The parts nobody mentions

| Item | Typical range | Notes |
|---|---|---|
| Hosting and infrastructure | $30 – 400 / month | Grows with traffic |
| Domain and certificates | $15 – 60 / year | Certificates are usually free now |
| Transactional email | $0 – 80 / month | Free tiers end quickly |
| Error monitoring | $0 – 100 / month | Not optional on anything real |
| Backups and restore testing | Small, but not zero | A backup you have never restored is a hope |
| Maintenance | 15 – 20% of build cost / year | Dependencies and browsers move |

That maintenance line is the one people argue with, and it is the one that is never
wrong. Software rots because the world around it changes — browsers, libraries,
payment APIs, tax rules. An application nobody touches for two years is not stable,
it is unmaintained.

## How scope actually moves the price

| Scope | What it is | Relative cost |
|---|---|---|
| Prototype | Clickable, no real data, for showing | 1x |
| MVP | Real data, one user type, the core flow | 3 – 4x |
| Production v1 | Permissions, admin, payments, errors handled | 8 – 12x |
| Integrated system | Talks to your existing systems | 15x+ |

The jump from MVP to production is the one that surprises people, and it is almost
entirely the invisible half above. The jump to "integrated" depends on the systems
you already run, not on the new application at all: a documented API is days, a
closed system is weeks.

## Comparing two quotes that look nothing alike

Normalise them with four questions:

1. **Does this include an admin interface?** If not, add it — you will need one.
2. **Who owns the code, and how is it handed over?** A repository and credentials,
   not a deployed URL.
3. **What happens in the first three months after launch?** Is fixing what you find
   included, and for how long?
4. **What is explicitly excluded?** A good proposal answers this in writing without
   being asked.

Then compare over three years including hosting and maintenance. The cheapest
build is frequently not the cheapest system.

> A quote is a description of scope with a number attached. When two numbers differ
> wildly, read the descriptions, not the numbers.

## What you can do to lower it honestly

- **Cut user types before you cut features.** Supporting three roles costs far more
  than supporting one, and it is easier to add a role later than to remove one.
- **Use a component library.** Bespoke design on every screen is where budgets go.
  Spend the design money on the two screens that matter.
- **Defer integrations.** Launch, then connect. Integration is easier against a
  system that already exists.
- **Write the page.** One page describing who uses it, the three things they do, and
  which systems it must talk to will change your price more than any negotiation.

## Common questions

### Can we get a fixed price?

For a well-defined scope, yes, and you should want one. For "build us a platform",
no honest firm can — and one that does has priced the risk into the number, which
you pay whether or not it occurs.

### Is it cheaper to build mobile at the same time?

Usually yes if you plan for it from the start, and considerably more expensive if
you add it afterwards. If you are weighing a mobile app specifically,
[app costs break down differently](/blog/app-development-cost-egypt).

### Should we buy something instead?

Quite possibly. Work through
[custom vs off-the-shelf](/blog/custom-software-vs-off-the-shelf-how-to-choose)
before commissioning anything.
