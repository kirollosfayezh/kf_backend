---
title: Software maintenance plans: what a fair one includes
summary: Response vs resolution times, bugs vs changes, hosting, updates, backups and pricing: what a fair software maintenance contract should spell out.
tag: Business Systems
tags: software maintenance, support contract, SLA, custom software, hosting, Egypt
order: 100
media: https://images.unsplash.com/photo-1785682117028-6fcf2c0b515b
alt: A technician in a high-visibility vest works inside an open server rack
caption: Software keeps needing care after launch: updates, backups and monitoring belong in a written maintenance plan.
stats: 3|common pricing models: retainer, bank of hours, per incident; 2|clocks for every issue: response time and resolution time; 36|Android API level new Play apps and updates must target from 31 Aug 2026
---

A fair software maintenance plan says exactly what is covered, how fast someone answers and how fast the problem is fixed, and what you pay when you need something outside the plan. It separates bug fixes from new features, names who owns the hosting, the backups and the app-store updates, and prices all of this in a way you can predict. If your contract only says "support for 12 months", it says almost nothing.

Last checked: 6 November 2026

Software is not finished on launch day. Phones update, browsers change, outside services retire old versions of their APIs, and your staff find the edge cases nobody tested. The plan decides whether those moments cost you an afternoon or a week.

## What a maintenance plan should cover

Most disputes start because the two sides meant different things by "maintenance". Write the scope as a list, not a sentence:

- **Bug fixes**: the system does not do what was agreed and documented.
- **Security updates**: patches to the server, the framework and the libraries the system uses.
- **Compatibility updates**: changes needed because Android, iOS, a browser or a third-party service changed.
- **Hosting and monitoring**: keeping the servers running, renewed and watched.
- **Backups and restore tests**: copies of your data, and proof they can be restored.
- **Small changes**: text, prices, a new field on a form, within an agreed number of hours.

Anything not on the list is new work and should be quoted separately. That is not a trick; it is what keeps the monthly price honest.

## Response time is not resolution time

A plan that promises "response within 2 hours" only promises that someone will reply. It does not promise the problem will be fixed. A useful plan has two clocks for every issue, and they change with severity:

| Severity | Example | Response | Target resolution |
|---|---|---|---|
| Critical | System down, no sales or bookings possible | Agreed in hours | Same day, or a workaround |
| High | A key feature broken for all users | Same working day | Within a few working days |
| Medium | A feature broken with a workaround | Next working day | Next planned update |
| Low | Cosmetic issue, wording, layout | Within a week | When convenient |

The exact numbers are yours to negotiate; the table above shows the shape, not a standard. Also agree on **working hours and time zone**, how you report an issue (a ticket, an email, a WhatsApp group), and who on your side is allowed to raise a critical one. A critical issue raised at midnight on a Friday is only covered if the plan says so.

## Bugs versus changes

This is the line that causes the most arguments. A simple rule works: **if the system does not do what the signed scope or documentation says, it is a bug and the fix is covered. If you want it to do something different, it is a change.**

Examples help. A report that shows the wrong totals is a bug. A report you now want split by branch is a change. A login that fails on the new iPhone is a compatibility update. Adding Apple sign-in is a change. Put a few examples like these in the contract; they save hours of discussion later. Our guide to [what to check in a software development contract](/blog/software-development-contract-what-to-check) covers how scope and acceptance should be written in the first place, which is what this rule depends on.

## Hosting, monitoring and backups

### Accounts and alerts

Ask three questions: whose account is the hosting in, who pays the bill, and who gets the alert when the server goes down? The safest answer for you is that the hosting, the domain and the app-store accounts are in your company's name, with your developer given access. That way a dispute or a lost contact never takes your system offline.

Monitoring means the system is checked automatically, and someone is notified before your customers notice. The plan should say what is monitored (uptime, errors, disk space, certificate expiry) and who receives the alerts. Renewals of domains and SSL certificates belong on the list too; an expired certificate can make a working site look broken to every visitor.

### Backups you have actually restored

A backup that has never been restored is a hope, not a backup. The plan should state:

1. What is backed up: the database, uploaded files, and the configuration.
2. How often, and how many copies are kept.
3. Where the copies are stored, ideally separate from the main server.
4. How often a restore is tested, and who confirms it worked.

Ask also how much data you could lose in the worst case. If backups run once a night, a failure at 6 pm can lose a day of sales.

## OS, framework and app-store updates

Mobile apps need regular work even when nothing is broken. Google Play, for example, requires that from 31 August 2026 new apps and app updates target Android 16 (API level 36) or higher, and existing apps that fall too far behind stop being available to new users on newer Android versions ([Android Developers](https://developer.android.com/google/play/requirements/target-sdk)). Apple releases a new iOS version every year as well, and an app that is never rebuilt slowly drifts out of date.

The same applies to websites and back ends: the programming language, the framework and every library have supported versions, and running old ones means no security fixes. A good plan includes a scheduled review, for example every quarter, where these updates are checked and done, rather than waiting for something to break.

## Pricing models: retainer, bank of hours, per incident

There are three common ways to price maintenance, and each fits a different business:

| Model | How it works | Fits | Watch out for |
|---|---|---|---|
| Monthly retainer | Fixed monthly fee for a defined scope and response times | Systems your business runs on every day | Unused hours that silently expire |
| Bank of hours | You buy a block of hours and draw them down | Steady small changes and updates | Who logs the hours and how you see them |
| Per incident | You pay each time something is fixed | Simple sites that rarely change | No guaranteed response time |

Whatever the model, ask for a monthly report of what was done and how many hours it took. If you are also weighing how to price the original build, our comparison of [fixed price vs time and materials](/blog/fixed-price-vs-time-and-materials) explains the same trade-offs at project level.

## What happens when the plan ends

Plans end: you change supplier, bring development in-house, or simply stop paying. The contract should say that you receive the source code, the database, the credentials and the documentation, and that there is a short handover period. This is much easier if the handover was done properly at launch; our [software project handover checklist](/blog/software-project-handover-checklist) lists what you should already have. For the checks that keep a project healthy from the start, see [why software projects fail](/blog/why-software-projects-fail).

KF Tech Solutions builds [custom software](/services/custom-software), websites and mobile apps, and keeps supporting them after launch with fixes, updates and new features. We work with businesses in Egypt and the Gulf, and we write maintenance terms in the plain way described here: a listed scope, two clocks per issue, accounts in your name, and a clear rate for anything outside the plan.

## Common questions

### Is maintenance included in the price of building the software?

Usually only a short warranty period is included, during which bugs in the delivered work are fixed. Ongoing hosting, updates and support are a separate agreement. Check how long the warranty lasts and what it covers.

### Do I need a maintenance plan for a simple website?

A simple company website still needs hosting, domain and certificate renewals, backups and occasional updates. A light plan or a per-incident arrangement is often enough; you do not need a full retainer.

### What if I want to change supplier later?

Make sure the contract gives you the source code, the database and all credentials, and that hosting and app-store accounts are in your company's name. Then any competent developer can take over.

### Who owns the code written under a maintenance plan?

The contract should say. The usual fair position is that code written for your system belongs to you, just like the original build.

### Can unused retainer hours roll over?

Some plans allow it for a month or two, many do not. Agree on it in writing before you sign, not when the hours are already gone.

If you are about to sign a maintenance contract, or your current one leaves you unsure what is covered, [contact us](/contact) or [book a free call](/book) and we will go through it with you.

## Sources

- [Android Developers: Meet Google Play's target API level requirement](https://developer.android.com/google/play/requirements/target-sdk)
