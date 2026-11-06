---
title: Building an app like Haraj: scope, phases and cost
summary: What a classifieds app like Haraj needs: listings, search, chat, moderation, identity checks and revenue, and how an MVP differs from a full build.
tag: Mobile
tags: classifieds app, marketplace app, app development cost, MVP, Saudi Arabia
order: 52
media: https://images.unsplash.com/photo-1780849327862-fc62c0cc7620
alt: Shoppers bending over tables of second-hand household goods at an outdoor market
caption: A classifieds app moves this browsing online, so search, chat and moderation have to carry the whole experience.
stats: 4|features no classifieds MVP can skip: listings, search, chat, reports; 72|hours to notify SDAIA of a personal-data breach under the PDPL; 96.1%|of search in Saudi Arabia ran on Google in Oct 2026
---

An app like Haraj is a classifieds marketplace: sellers post listings, buyers search and message them, and the platform keeps out fraud and earns from featured ads or commissions. The cost depends far less on the screens than on moderation, chat, identity checks and payments, so the sensible route is a focused MVP for one city or category, then a full build once real users show what they need. Haraj is used here only as a familiar reference for the type of product, not as a description of how it works inside.

Last checked: 6 November 2026

## What you are actually building

A classifieds app serves three groups at once, and each one needs its own tools:

- **Sellers** post a listing with photos, a price, a category and a location, then edit, renew or close it.
- **Buyers** browse, search, filter, save listings and contact the seller.
- **Your team** reviews reports, removes bad listings, blocks accounts and manages categories, fees and promotions from a dashboard.

Most first quotes cover the first two and forget the third. The admin side is where a marketplace is kept clean, and it is a large part of the real work.

## The core features, MVP versus full build

| Feature | MVP | Full build |
|---|---|---|
| Listings | Photos, title, price, category, city | Category-specific fields (cars, property, phones), video, drafts, auto-expiry and renewal |
| Search | Keyword, category and city filters | Saved searches, alerts for new matches, sorting, map view |
| Contact | In-app chat with text and photos | Chat with voice notes, offers, read receipts, blocking and spam filters |
| Accounts | Phone number with one-time code | Verified badges, seller ratings, business accounts |
| Moderation | Report button and a review queue | Automatic checks, banned-word lists, duplicate detection, moderator roles |
| Revenue | One paid option, such as featured listings | Several packages, commissions, subscriptions, invoices |
| Platforms | One app plus a simple web page per listing | iOS, Android and a full website |
| Languages | Arabic | Arabic and English |

The MVP column is enough to learn whether sellers post and buyers reply in your chosen market. Everything in the right-hand column is worth building only once you see where users get stuck. We explain this approach in more detail in [Have an app idea? Start small with an MVP](/blog/mobile-app-mvp-egypt).

### Why listings need web pages, not just app screens

Google handled 96.1% of search in Saudi Arabia in October 2026. People often search for the item itself, such as a car model and a city, before they think of opening a particular app. If each listing also exists as a fast, indexable web page, your listings can appear in those results and bring in buyers who have not installed the app yet. This is one reason a marketplace usually needs a website alongside the mobile app.

## Trust and safety: moderation, fraud and identity

A marketplace lives or dies on whether buyers trust what they see. This part deserves budget from day one, even in an MVP.

### Moderation

At minimum you need a report button on every listing and every chat, a queue where your team reviews reports, and the ability to hide a listing or suspend an account in one step. Later you can add rules that hold listings for review automatically, for example when a price is far below normal for the category, a phone number appears in the description, or the same photos are posted from several accounts.

### Fraud control

Common patterns in classifieds are fake listings with stolen photos, requests for a deposit before viewing, and attempts to move the conversation to another channel immediately. The app can help by:

- Keeping contact inside the in-app chat for as long as possible, so reports include the full conversation.
- Showing safety tips inside the chat at the moments that matter, such as when a payment is mentioned.
- Limiting how many listings a new account can post in its first days.
- Logging device and account history so your team can link repeat offenders.

### Identity check options

There is a range of options, from light to strong:

1. **Phone number with a one-time code.** The usual minimum, and enough for an MVP.
2. **Manual review of business documents** for dealers and companies that want a verified badge.
3. **National digital identity.** Nafath, Saudi Arabia's national single sign-on, connects to more than 530 government and private platforms. Whether your app can connect to it, and on what terms, is something to confirm before you plan a release around it.

Stronger checks reduce fraud but also slow down sign-up. Many marketplaces keep sign-up light and ask for stronger verification only from sellers who want a badge or a higher posting limit.

## How an app like this makes money

Classifieds apps usually combine a few of these models:

- **Featured or boosted listings** that appear at the top of a category or search for a set period.
- **Paid categories or posting fees** for high-value items such as cars or property.
- **Commissions** on completed sales, either collected through in-app payment or declared by the seller.
- **Subscriptions** for dealers and businesses that post in volume.
- **Advertising** sold to brands that want to reach a category.

To collect payments in Saudi Arabia you work through a payment gateway. Gateways such as Tap, PayTabs and Telr list support for mada and Apple Pay, and SAMA has licensed Tamara and Tabby for buy-now-pay-later. Before you design paid boosts inside the iOS or Android app, check Apple's and Google's current rules on payments for digital features, because they decide which payment methods the app itself may use. Our guide to [payment gateways in Saudi Arabia](/blog/payment-gateways-saudi-arabia) compares the main options.

Commission models are harder than they look. If the sale happens in person, the platform only knows the price if the seller reports it, so plan how you will invoice, remind and enforce from the start.

## Data, hosting and the law

A classifieds app holds phone numbers, chats, locations and sometimes identity documents. That is personal data, and Saudi Arabia's Personal Data Protection Law (PDPL) has been in force since 14 September 2023, with its grace period ending on 14 September 2024. It is enforced by SDAIA. Among the obligations: a breach must be reported to SDAIA within 72 hours, and penalties reach up to SAR 5 million. Legal commentary notes that the law applies to foreign providers serving individuals in the Kingdom.

On hosting, SDAIA published draft PDPL amendments for consultation from 6 October to 5 November 2026, including a proposal that controllers store personal data in the Kingdom. This is still a draft, not law. If you want local hosting anyway, Google Cloud has a Dammam region, and AWS says its first Saudi region is on track to launch in December 2026.

If your platform sells goods or services, or takes payment for them, also read the E-Commerce Law (Royal Decree M/126). It requires a shop to disclose its name, contact details and commercial registration, and sets penalties of up to SAR 1 million. Ask a lawyer whether and how it applies to your model. This is general information, not legal advice.

## From MVP to full build: phases and what drives the price

A realistic plan runs in phases:

1. **Discovery.** Pick one city or one category, define the listing fields, the moderation rules and the single revenue model you will test.
2. **Design.** Arabic-first screens for posting, searching and chatting, plus the admin dashboard, reviewed before any code is written.
3. **MVP build.** One app, listing web pages, chat, reports and the review queue.
4. **Soft launch.** Seed the category with real listings, watch the reports, fix what slows posting down.
5. **Full build.** Add the second platform, richer categories, verification, more revenue options and automation in moderation.

The main cost drivers are the number of platforms, how rich the chat is, how many categories need their own fields, how much moderation is automated, which identity and payment integrations you add, and whether you need both Arabic and English. A small MVP and a full Haraj-scale platform differ by many times in effort, which is why a single price for "an app like Haraj" means little until the scope is written down. For typical ranges, see [what an app costs in Saudi Arabia](/blog/app-development-cost-saudi-arabia) and [what a mobile app costs to build in Egypt](/blog/app-development-cost-egypt).

Projects start from $200 (about SAR 750 / AED 735); the final price depends on scope, with a fixed written quote after a free call.

## How KF Tech Solutions can help

We design and build [mobile apps](/services/mobile-applications) together with the web dashboards and websites behind them, in Arabic and English. For a classifieds idea, we usually start by writing the MVP scope with you, so the first release tests one market with the features that matter, and the rest waits for real usage. We work with businesses in Egypt and the Gulf, and Cairo works on Riyadh time from late April to late October and one hour behind it in winter. More on how we work with Saudi clients is on our [Saudi Arabia page](/saudi-arabia).

## Common questions

### Can I copy Haraj's design and features?

You can build the same type of product, but not copy another company's brand, design or content. A clear scope based on your own market and category is also more useful than a copy, because your users and revenue model will differ.

### Should the MVP be an app or a website?

Many marketplaces start with one mobile app plus web pages for each listing, so listings can be found on Google and shared as links. A full website and the second app platform can follow once the MVP shows traction.

### Do I need identity verification from day one?

Usually not. A phone number with a one-time code, a report button and an active review queue cover most early risk. Add document checks or national digital identity when fraud patterns or business sellers justify it.

### How long does an MVP take?

It depends on the scope: the number of categories, the chat features and the admin tools. After a scoping call you get a written plan with phases and dates, rather than a guess.

### Do I have to host the data in Saudi Arabia?

The current PDPL allows transfers abroad under conditions, and the proposal to require storage in the Kingdom is still a draft. Many founders choose a hosting setup that can move later. Check with a legal adviser for your case.

Have a classifieds or marketplace idea? [Book a free call](/book) or [send us your idea](/contact), and we will help you turn it into a scoped MVP with a fixed written quote.

## Sources

- [Unified National Access (Nafath)](https://en.wikipedia.org/wiki/Unified_national_access)
- [DLA Piper: Data protection laws, Saudi Arabia](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Chambers: TMT 2026, Saudi Arabia trends and developments](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Clyde & Co: SDAIA publishes draft amendments to the PDPL](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [Ministry of Investment: E-Commerce Law (English translation)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [SAMA: Tamara Finance licence](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1079.aspx)
- [SAMA: Tabby Finance licence](https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1116.aspx)
- [Tap Payments](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
- [Telr](https://telr.com/)
- [StatCounter: search engine market share, Saudi Arabia](https://gs.statcounter.com/search-engine-market-share/all/saudi-arabia)
- [Google Cloud: Dammam region access](https://docs.cloud.google.com/docs/dammam-region-access)
- [Amazon: AWS cloud region in Saudi Arabia](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
