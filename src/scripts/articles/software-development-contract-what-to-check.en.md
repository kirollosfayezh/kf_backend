---
title: Nine things to check in a software development contract
summary: The clauses that decide whether you own what you paid for, written for the person signing rather than the lawyer reviewing.
tag: Business Systems
tags: contracts, procurement, IP ownership, outsourcing
order: 11
media: https://images.unsplash.com/photo-1450101499163-c8848c66ca85
alt: A contract being reviewed on a desk
caption: The clause that matters most is usually the one that is missing, not the one you are arguing about.
stats: 9|clauses that decide the outcome; 1|clause most disputes come back to; 3 months|the warranty period to insist on
---

Most software contracts are argued over price and delivery date. Those are rarely
what goes wrong. What goes wrong is discovered eighteen months later, when you want
to change something and find you cannot — because of a clause nobody read, or one
that was never there.

This is written for the person signing, not the lawyer reviewing. Get proper legal
advice for your jurisdiction; use this to know what to point at.

## 1. Who owns the code

The single most important clause, and the one most often vague.

You want: **exclusive, perpetual, irrevocable, transferable rights to all work
product, including source code**, assigned on payment.

Watch for "licence to use". A licence is not ownership. It can be limited by user
count, by territory, by time, and it can be withdrawn. In much of Europe, authorship
itself cannot be transferred — only usage rights — so the wording has to do the work
that "we own it" does elsewhere.

**Ask directly:** if we stopped working with you tomorrow, could we hire someone
else to modify this system, with no permission required from you?

## 2. What happens on payment default

Many contracts assign ownership only on final payment. That is reasonable. What is
not reasonable is ownership assigning on final payment where final payment is
contingent on an acceptance process the supplier controls.

## 3. Third-party components and licences

Every real system uses open-source libraries. That is normal and good. What you need
is a list, and an assurance that none of them carry licences incompatible with how
you intend to use the software.

The clause to insist on: the supplier warrants the work does not infringe third-party
rights, and will indemnify you if it does.

## 4. How it is handed over

"Delivery" must be defined as artefacts, not as a working URL.

- Source code in a repository **you own**, with full history
- Credentials for every service, in your name and paid by you
- Instructions to build and run it from scratch on a new machine
- Database schema and any migration scripts
- A list of every third-party service and what it costs

The test: could a competent developer who has never seen the project get it running
from what was delivered? If not, you have a dependency dressed as a deliverable.

## 5. Acceptance criteria

"To the client's satisfaction" protects nobody. It lets a supplier argue anything is
done and lets a client argue nothing is.

Define acceptance as a testable list. It does not need to be exhaustive — it needs
to be objective.

## 6. Warranty

After acceptance, who fixes defects, for how long, and at whose cost?

Three months minimum. A supplier confident in their work will not resist this; one
who resists is telling you something useful about the code before you have seen it.

Distinguish **defects** (it does not do what was agreed — supplier fixes, free) from
**changes** (you want something different — billable). Contracts that blur these
generate every subsequent argument.

## 7. Confidentiality, in both directions

Mutual, not one-way. You are sharing how your business works.

If personal data is involved, a data processing agreement is separate from and
additional to confidentiality — and if processing happens outside your jurisdiction,
the transfer mechanism belongs in the contract. For EU buyers this means Standard
Contractual Clauses, covered in
[nearshoring to Egypt](/blog/nearshoring-software-development-egypt).

## 8. Termination

How does either side exit, with what notice, and what happens to work in progress?

The clause people forget: **on termination, the supplier hands over everything in
point four within a defined number of days, regardless of the reason for
termination or any ongoing dispute.** Without it, a disagreement can strand your
system.

## 9. Key personnel and subcontracting

You chose a supplier partly on who you met. Name them, and require notice if they
change. Require disclosure and consent before subcontracting.

## The summary table

| Clause | What you want | Red flag |
|---|---|---|
| IP ownership | Exclusive, perpetual, transferable, assigned on payment | "Licence to use" |
| Handover | Repository, credentials, build instructions | "Deployed to your server" |
| Acceptance | An objective, testable list | "To the client's satisfaction" |
| Warranty | 3+ months, defects free | No warranty, or 30 days |
| Defects vs changes | Defined separately | Not distinguished |
| Third-party licences | Listed and warranted | Not mentioned |
| Confidentiality | Mutual | One-way |
| Termination | Handover regardless of cause | Silent, or conditional on payment disputes |
| Personnel | Named, notice on change | Anonymous team |

> The contract's job is not to win an argument. It is to make the expensive
> arguments impossible to have.

## Common questions

### Is a source code escrow worth it?

Rarely, if you have point one and point four. Escrow solves a problem that proper
ownership and continuous handover prevent. It matters mostly when buying a product
from a vendor who keeps the source, not when commissioning bespoke work.

### Fixed price or time and materials?

Fixed price for a defined scope, time and materials for genuinely exploratory work.
Fixed price on an undefined scope means the risk was priced in, and you pay for it
whether or not it happens. See
[what a web app actually costs](/blog/what-does-a-web-app-actually-cost-to-build).

### The supplier says this is all standard and not worth changing.

Then it costs them nothing to put it in writing.
