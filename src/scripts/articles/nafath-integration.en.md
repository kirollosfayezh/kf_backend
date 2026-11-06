---
title: Nafath login for your website or app: how it works
summary: What Nafath login gives a Saudi website or app, how the flow works for users, when verified identity is worth the effort, and what to plan first.
tag: Web Development
tags: Nafath, single sign-on, identity verification, API integration, login, Saudi Arabia
order: 77
media: https://images.unsplash.com/photo-1782908423699-112c1d740242
alt: A thumb rests on the fingerprint sensor of a smartphone showing a purple lock screen
caption: With Nafath, logging in means confirming on a phone with a fingerprint or face instead of typing a password.
stats: 530+|government and private platforms connected to Nafath; 3bn+|verifications reported by November 2024; 2|login paths to plan: Nafath plus a fallback
---

Nafath integration lets people in Saudi Arabia sign in to your website or app with the national single sign-on they already use for government services, and lets you know the account belongs to a real, identified person. It is worth the effort when a wrong identity costs you money or exposes you legally, as in real estate, hiring and finance. For an ordinary online store or booking site, a phone number and a one-time code are usually enough.

Last checked: 6 November 2026

This guide is general information for business owners, not legal advice. Nafath's operator sets who can connect and on what terms, so confirm the current conditions through the official channel before you plan a launch date.

## What Nafath is and who can use it

Nafath (Unified National Access) is Saudi Arabia's national single sign-on. The Ministry of Interior started it with the National Information Center, and it was built by Elm and Technology Control Company. People reach it through the Nafath app, which uses biometrics, passkeys and request codes to approve each sign-in.

It is already part of daily life. Nafath connects to more than 530 government and private platforms and had handled more than 3 billion verifications by November 2024. Saudi citizens and residents sign in with their Absher account, so most of your Saudi users will have it on their phone before you ask.

That reach is the main reason to consider it. You are not asking customers to install anything new or create another password. You are offering a login they trust from their dealings with government services.

## How a Nafath login works for your user

From the user's side, the flow is short:

1. On your login page, the user chooses "Sign in with Nafath" and identifies themselves, typically with their national ID or residency (Iqama) number.
2. Your site or app sends a sign-in request through the integration.
3. The user opens the Nafath app on their phone and sees the request, with a request code to check against your screen.
4. They approve it with biometrics on their phone.
5. Your site receives the confirmation and opens their account.

The whole exchange takes seconds, but it depends on the user's phone. A customer whose phone is flat, or who left it in the car, cannot finish the login. Your design has to account for that, which is why the screen should explain what to expect and offer a clear way back if the request expires.

## Login or verified identity: two different jobs

Business owners often ask for "Nafath" when they mean one of two things, and the difference changes the project.

| | Login only | Verified identity |
|---|---|---|
| Question it answers | Is this the same person as last time? | Who exactly is this person? |
| What you store | A link between your account and their Nafath sign-in | Identity details you need for the transaction, kept with care |
| Typical use | Customer portals, member areas | Contracts, deposits, hiring, credit decisions |
| Fallback needed? | Yes, for anyone without Nafath | Usually a manual review path |
| Effort | Lower | Higher: records, audit trail, data handling |

If you only need a smooth login, a phone number with a one-time code may do the same job with less paperwork. Nafath earns its place when you need to rely on who the person is.

## When Nafath is worth the effort

Use this as a rough guide, then test it against your own risks:

- **Real estate.** Bookings, deposits and rental contracts involve real money and named parties. Knowing who signed reduces disputes, and it fits naturally into a CRM that tracks a lead from first enquiry to signed contract, like the flow in our [real estate CRM guide](/blog/real-estate-crm-egypt).
- **HR and hiring portals.** Candidate and employee records are tied to a person, and getting that person wrong in an HR file is costly to undo.
- **Finance and instalments.** Lending, buy-now-pay-later and anything where you extend credit needs a real identity behind the account.
- **Medical and other sensitive services.** Where records about a person must only reach that person.
- **Membership platforms with paid or restricted access.** Where shared or fake accounts cost you money.

Where it usually is not worth it:

- **Online stores.** A guest checkout and a phone number keep friction low, and payment is already handled by the gateway. Our guide to [payment gateways in Saudi Arabia](/blog/payment-gateways-saudi-arabia) covers that side.
- **Booking and enquiry forms.** A one-time code to the customer's phone is enough to stop most spam.
- **Sites with many visitors from outside the Kingdom.** They will not have Nafath, so it can only ever be one option among several.

## Getting access: what to check first

Nafath is not a public login button that any developer can switch on. Access goes through the official channels of its operator, and the eligibility conditions can depend on your type of entity and the service you offer. We could not verify the current onboarding steps from a public official document, so we will not list them here as fact.

Before you budget for development, find out:

- **Whether your entity is eligible**, and which documents you need, such as your commercial registration.
- **Which service you need:** sign-in only, or identity details returned to you.
- **What the commercial terms are**, including any fees per verification or per year.
- **Whether a test environment is available**, and how long approval for live use takes.
- **What security and data-handling conditions** you will have to meet.

Ask these questions through the official Nafath channel (iam.gov.sa) or the integrator you choose, and get the answers in writing. The timeline for approval is outside your developer's control, so plan the launch date around it.

## What to build on your side

The Nafath connection is a small part of the work. Most of the effort sits in your own system, and this is where projects go wrong:

- **A fallback login.** Visitors, new residents and anyone without the app still need to get in, by phone code or email.
- **Account linking.** Decide how a Nafath identity attaches to an existing customer record, and what happens if two accounts claim the same person.
- **Clear waiting and expiry states.** Show the user what to do on their phone, and let them retry without starting over.
- **Session handling.** How long a sign-in lasts, and which actions, such as signing a contract, need a fresh confirmation.
- **An audit log.** Record when each verification happened and what it was used for, so you can answer a dispute later.
- **Data minimisation.** Store only the identity fields you need for the transaction, and restrict who in your team can see them.

Identity data is personal data. Saudi Arabia's Personal Data Protection Law has been in force since 14 September 2023, and its main obligations include registration for certain controllers, notifying the regulator SDAIA of a breach within 72 hours, and penalties of up to SAR 5 million. Draft amendments published for consultation in October 2026 would add a rule on storing personal data in the Kingdom; they are still a draft, but it is worth knowing where your data is hosted.

A Nafath login usually sits inside a wider build. If you are planning an app around it, our guide to [app development costs in Saudi Arabia](/blog/app-development-cost-saudi-arabia) explains what drives the budget, and [connecting the systems you already run](/blog/api-integration-connecting-business-systems) explains how integrations like this fit together.

## How KF Tech Solutions helps

KF Tech Solutions is a software studio in Cairo that builds websites, web and mobile apps and the [APIs and backends](/services/api-and-backend) behind them. We work with businesses in Egypt and the Gulf. For a Nafath project we help you decide whether you need login or verified identity, design the sign-in screens in Arabic and English, build the account linking, fallback login, audit log and data handling in your system, and connect it once your access is approved through the official channel. Access itself comes only from Nafath's operator, not from us or any developer. You can read more about how we work with Saudi businesses on our [Saudi Arabia page](/saudi-arabia).

## Common questions

### Can any website add a Nafath login?

Not by itself. Access is granted through Nafath's official channels and depends on eligibility conditions set by the operator. Check those conditions before you commit to a launch date.

### Can visitors and people outside Saudi Arabia use Nafath?

Nafath is used by Saudi citizens and residents through their Absher account. Anyone else needs another way to sign in, so plan a fallback from the start.

### Does Nafath replace my own user accounts?

No. Nafath confirms who the person is. Your system still holds the customer account, their orders, contracts and settings, and links them to that confirmed identity.

### Is a phone number with a one-time code enough instead?

For most stores, booking sites and portals, yes. Choose Nafath when you must rely on a person's real identity, for example before a contract, a deposit or a credit decision.

### How long does a Nafath integration take?

The development work on your side is usually a few weeks within a larger project. The approval for access is set by the operator and is often the longer part, so start that conversation early.

If you are weighing Nafath for a portal or app, [tell us what you are building](/contact) or [book a free call](/book), and we will help you decide whether it is worth it before any code is written.

## Sources

- [Unified national access (Nafath), Wikipedia](https://en.wikipedia.org/wiki/Unified_national_access)
- [Saudi Arabia data protection law, DLA Piper](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [SDAIA publishes draft amendments to the PDPL, Clyde & Co](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
