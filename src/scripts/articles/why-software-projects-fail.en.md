---
title: Why software projects fail, and the five checks that prevent it
summary: Failure is almost never technical. It is five specific decisions made badly at the start, each of which you can check before committing.
tag: Business Systems
tags: project management, scoping, risk, procurement
order: 13
media: https://images.unsplash.com/photo-1454165804606-c3d57bc86b40
alt: A team reviewing a project plan
caption: Almost every failed project was decided in week one and discovered in month six.
stats: 5|decisions that determine the outcome; week 1|when most failures are already fixed in place; 1 page|the document that prevents the most common one
---

When a software project fails, the story is usually told as a technical one: the
wrong framework, an underperforming developer, an integration that turned out to be
harder than expected.

That is almost never what happened. The technical difficulty was real, but it was a
symptom. The failure was decided in the first two weeks, by one of five decisions,
and discovered five months later.

## 1. Nobody could describe the process

The most common failure, and the least technical.

Software encodes a process. If the process is not agreed — if two departments
describe it differently, or it exists only in one person's head — then the software
cannot be built, because there is nothing to build.

Development does not resolve this. It converts an unresolved disagreement into an
expensive one, discovered at acceptance when each side sees something they did not
approve.

**The check:** can two people from different parts of the business describe the
process the same way, in writing, before anyone quotes? If not, that is the project,
and it is a business project rather than a software one.

## 2. The decision-maker was not in the room

Requirements get gathered from the people who will use the system. Sensible. Then
sign-off comes from someone who was never in those conversations, who sees it for
the first time at the end and asks for changes that reach the foundations.

**The check:** who signs the final invoice, and have they personally reviewed the
scope? If they have not, get that before work starts. Not a status report — the
actual scope.

## 3. Integration was assumed to be easy

A new system almost always has to talk to an old one. The new system is scoped in
detail; the old one is a single line saying "integrate with existing POS".

Difficulty is set entirely by the old system, and nobody checks before committing.
A documented API is days. A closed system with a nightly CSV export is weeks and
compromise. A system whose vendor has disappeared can be impossible.

**The check:** before signing, ask to see the API documentation of every system that
must be connected. Not a promise it exists — the actual document. This one check
prevents more overruns than any other on this list.

## 4. There was no first version

A project scoped as one twelve-month delivery has no feedback until month twelve. By
then the business has changed, the people have changed, and the requirements from
month one are stale.

**The check:** can this be cut into pieces that each work on their own? If the
answer is no, the scope is too entangled, and that entanglement is itself the risk.
The restaurant project in
[cutting stock waste by a third](/blog/cutting-a-restaurant-s-stock-waste-by-a-third)
went live in four stages precisely for this reason.

## 5. Nobody owned it internally

Every successful project has one person inside the business who wants it to exist,
has authority to decide, and has time. Where that person is missing, decisions queue,
the supplier guesses to keep moving, and the guesses compound.

**The check:** name that person, and confirm they have several hours a week for this.
"Everyone owns it" means nobody does.

## The five checks, together

| Check | Ask before signing | Failure if skipped |
|---|---|---|
| Process agreed | Two people describe it the same way, in writing | Endless revisions |
| Decision-maker engaged | They personally reviewed the scope | Rework at acceptance |
| Integration verified | You have seen the other system's API docs | The largest overruns |
| Staged delivery | Each stage works alone | Twelve months to first feedback |
| Internal owner named | One person, with authority and hours | Decisions queue; supplier guesses |

None of these require technical knowledge. All five can be verified in a week, and
that week is the highest-return week of the entire project.

> The expensive mistakes are made before anyone writes code. They are simply not
> discovered until after.

## What failure actually looks like

Rarely dramatic. Usually: delivery slips by a month, then another. Scope is trimmed
to hit a date. What ships works but is not used, because it does not fit the
process. Six months later someone quietly resumes the old spreadsheet.

Nobody calls it a failure. It is described as "the system we bought that we do not
really use", and most businesses have one.

## Common questions

### Whose fault is it usually?

Shared, and the split is unhelpful. Suppliers should refuse projects where these
five are not in place, and most do not. Clients should establish them, and most
assume the supplier will.

### Can a project be rescued once it is going wrong?

Often, if you stop and re-run the five checks. What does not work is adding people
or extending the deadline while the underlying decision stays unmade.

### How do we avoid this with a supplier we have not worked with before?

Start with a small paid project — the test in
[how to choose a software company](/blog/how-to-choose-a-software-company). Two to
four weeks reveals all five of these, at a fraction of the cost of discovering them
in month six.
