---
title: How to write a software brief vendors can price
summary: A one-page software brief template: users, workflows, priorities, integrations, data and success measures, what to leave out, and how quotes are built.
tag: Business Systems
tags: software requirements, project brief, MoSCoW, fixed quote, custom software, Egypt, GCC
order: 76
media: https://images.unsplash.com/photo-1600132806608-231446b2e7af
alt: Hand-drawn website wireframes sketched on paper next to an orange pen
caption: A brief vendors can price describes users and workflows; rough sketches like these say more than a long feature list.
stats: 1|page is enough for a first quote; 4|priority levels: must, should, could, won't; 60%|typical ceiling for must-have effort in DSDM guidance
---

A software brief that vendors can price fits on one page. It names who will use the system, the main jobs they do in it, which features are essential and which can wait, what it must connect to, what data it holds and how you will judge success. It leaves the technology choices to the vendor.

Most first briefs are either a single line ("we need an app like X") or a forty-page wish list. The first gets quotes that differ wildly, because every vendor guesses differently. The second gets padded quotes, because every vendor prices the risk of everything in it. A one-page brief sits between the two.

## What a brief is for

A brief has one job: to let several vendors price the same project. If two vendors read your brief and imagine different systems, their quotes cannot be compared, and the cheaper one is often cheaper because it understood less.

It is not a contract and not a full specification; the detail usually comes later, written with the vendor you choose during a discovery or design phase. The brief only needs to be clear enough for a vendor to ask good questions and give you a range, or a fixed quote for a well-understood scope.

## The one-page template

Copy this structure into a document and fill each row in plain language.

| Section | What to write | Example |
|---|---|---|
| Background | The business and the problem, in two or three sentences | A distributor with three warehouses tracks orders in spreadsheets, and the stock figures never agree |
| Users | Each type of user and roughly how many | 12 sales reps, 4 warehouse staff, 2 managers, about 300 customers |
| Workflows | The main jobs, as short steps | Rep takes order, warehouse picks, driver delivers, invoice is issued |
| Priorities | Must, should, could, won't | Must: orders and stock. Could: a customer app |
| Integrations | The systems it must talk to | Accounting software, WhatsApp, a payment gateway |
| Data | What it stores and what moves over from today | 2,000 products and five years of customer records in Excel |
| Success | How you will know it works | Stock counts match the shelves within a week of launch |
| Constraints | Deadline, budget range, languages, devices | Live in four months, Arabic and English, staff on Android phones |

## Users and workflows

Write the users first, because every feature belongs to someone. "Admin" is not enough: say whether the person approving discounts is the owner, a branch manager or an accountant, because each role usually needs its own permissions and screens.

Then describe each workflow as a short sequence of steps, in the order it happens today. "A customer orders on WhatsApp, a rep enters the order, the warehouse confirms stock, the driver delivers and collects cash" tells a vendor more than a list of screens. It also exposes the awkward cases: an item out of stock, a customer who pays half, an order cancelled after picking. Add those exceptions as one-line notes. They are where most of the hidden effort lives.

## Must, should, could, won't

Split the features into four groups. This is the MoSCoW method, widely used in agile projects:

- **Must have:** the system is useless at launch without it.
- **Should have:** important, but there is a workaround for the first weeks.
- **Could have:** useful if time and budget allow.
- **Won't have this time:** agreed to be out of scope for now.

Be strict with the must list. The Agile Business Consortium, which maintains the DSDM framework the method comes from, recommends keeping must-have work to typically no more than 60% of the effort, so the should and could items act as a buffer when estimates turn out wrong. The won't list matters too: it stops scope from creeping back in later.

## Integrations, data and success

**Integrations** are the most common source of surprise cost. For each one, name the exact product (not "the accounting system" but which one), say whether data flows one way or both ways, and whether it must happen instantly or once a day. If you know the other system has no API, say so.

**Data** covers what the system stores and what must be moved into it on day one. A vendor needs to know whether it is importing a clean spreadsheet of 500 customers or ten years of records from an old system full of duplicates.

**Success measures** turn the brief into something both sides can check. Choose two or three you can observe: an order entered in under a minute, month-end closing in one day instead of four, no more paper delivery notes. Avoid "user-friendly" and "fast" with no number attached.

## What to leave out

A good brief describes the problem, not the solution. Leave out:

- **Programming languages, frameworks and databases**, unless your own team will maintain the code and already uses them.
- **Finished screen designs.** A rough sketch of an important screen helps; polished mock-ups usually get redone.
- **Feature lists copied from a competitor's brochure.** Half of them will not match how you work.
- **Every edge case you can imagine.** Note the exceptions you meet each week; the rare ones are found in discovery.

Do include what only you know: tax or legal obligations you already follow, the languages you need, the devices staff actually use, and whether people work with a weak internet connection.

## How a vendor turns the brief into a fixed quote

A careful vendor reads the brief, then asks questions, usually on a call. From the answers it breaks each workflow into screens and functions, estimates each piece, and adds integrations, data migration, testing and deployment. A risk allowance covers whatever is still unclear.

If the brief is clear and the scope is stable, the result is a fixed price with a written scope attached. If large parts are unknown, an honest vendor will either quote a paid discovery phase first or suggest time and materials. Our guide to [fixed price vs time and materials](/blog/fixed-price-vs-time-and-materials) explains when each makes sense, and [what a web app actually costs to build](/blog/what-does-a-web-app-actually-cost-to-build) shows where the money goes.

Compare quotes against the same brief and ask each vendor what is excluded. If you are not technical, [how to choose a software company](/blog/how-to-choose-a-software-company) gives you the questions to ask, and [why software projects fail](/blog/why-software-projects-fail) covers the mistakes a clear brief prevents.

At KF Tech Solutions we build [custom software](/services/custom-software), and we work with businesses in Egypt and the Gulf. On a call we go through your brief with you and ask about anything it leaves open. Projects start from $200 (about SAR 750 / AED 735); the final price depends on scope, with a fixed written quote after a free call.

## Common questions

### How long should a software brief be?

One to two pages for a first quote. Longer documents rarely add clarity at this stage. Attach examples instead: a sample invoice, a current spreadsheet, a screenshot of the tool you use now.

### Should I share my budget?

A range helps. It tells vendors whether to propose a simple first version or a fuller system, and it saves both sides time. A quote that lands exactly at the top of your range deserves a few extra questions.

### What if my requirements change after the quote?

They usually do. Agree in the contract how changes are requested, priced and approved before any work on them starts. A clear won't-have list makes these conversations much easier.

### Can a vendor help me write the brief?

Yes, and many will on a first call. Write your own draft first, though, so the scope reflects how your business works rather than what the vendor finds easiest to build.

Have a draft brief, or only a problem to describe? [Send it to us](/contact) or [book a free call](/book), and we will go through it with you.

## Sources

- [MoSCoW prioritisation, DSDM Project Framework, Agile Business Consortium](https://www.agilebusiness.org/dsdm-project-framework/moscow-prioritisation.html)
