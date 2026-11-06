---
title: Mobile app development cost in Saudi Arabia, explained
summary: What sets the price of an app in Saudi Arabia: platforms, backend, control panel, Arabic, mada and Apple Pay, Nafath, hosting and costs after launch.
tag: Mobile
tags: app development, pricing, mobile apps, Saudi Arabia, mada, MVP
order: 32
media: https://images.unsplash.com/photo-1698434156098-68e834638679
alt: Hand sketching mobile app screen wireframes with a pen on a sheet of white paper
caption: The screens sketched on day one, plus the backend, payments and admin panel behind them, decide what an app costs.
stats: 42%|of Saudi mobile web traffic ran on iOS in October 2026; $99|a year for Apple's developer account, in your company's name; 15%|Saudi VAT, the line to check on every quote
---

There is no fixed price for a mobile app in Saudi Arabia, because the price follows the scope: how many apps and user types the project has, whether it needs a backend and a control panel, which payments and integrations it must support, and where its data is hosted. A booking app for one type of user costs a fraction of a marketplace with customer, courier and admin apps. The useful answer is a written scope priced line by line, and this guide shows what each line covers.

Last checked: 6 November 2026

## What you are paying for

A good quote names each part of the app:

- **The app itself**, on iOS and Android: the screens your customers or staff use.
- **The backend**: the server, database and API that hold accounts, orders and data, and send notifications.
- **The control panel**: where your team edits content, handles orders, issues refunds and reads reports.
- **Design**: the screens in Arabic and English, tried on real phones before anyone writes code.
- **Testing and store release**: test builds, the store listings and the review process.
- **Support after launch**: fixes, and the yearly updates that Apple and Google require.

The screens are what a demo shows. The backend and the control panel are where two quotes for "the same app" usually part ways, as [what a web app actually costs to build](/blog/what-does-a-web-app-actually-cost-to-build) explains. If your staff work in Arabic, the control panel needs an Arabic interface too, and that is easy to leave out of a quote.

## The cost drivers, line by line

Each row moves the price on its own. Mark the column that matches your idea and you have most of a brief.

| Driver | Keeps the cost lower | Pushes the cost higher |
|---|---|---|
| Platforms | One cross-platform codebase for iOS and Android | Two separate native apps |
| User types | One, for example customers | Several, such as customers, couriers and branch staff, each with an app or role |
| Backend | Accounts and simple content | Orders, live tracking, sync between devices, many roles |
| Control panel | Edit content and view orders | Approvals, refunds, payouts, detailed reports |
| Language | Arabic and English planned from day one | A second language added after launch |
| Payments | A hosted payment page from a licensed gateway | Several methods, buy now pay later, refunds, split payouts |
| Identity | Phone number with a one-time code | Nafath identity checks |
| Integrations | None in the first release | POS, ERP, delivery companies, maps, SMS |
| Hosting | A standard international cloud region | Hosting inside the Kingdom, when clients or your sector ask for it |

Both platforms matter: StatCounter measured 42% of Saudi Arabia's mobile web traffic on iOS and 58% on Android in October 2026. One cross-platform codebase covers both stores without building everything twice.

## Saudi-specific items that change the price

### Arabic first, not translated later

Arabic carries extra weight in Saudi Arabia: the National Arabic Language Policy, approved in 2026, encourages it in contracts, invoices, advertising and communications. In an app, that means screens laid out right to left from the first sketch, Arabic type that stays readable at small sizes, names and addresses that mix Arabic and English, Hijri dates where users expect them, and store listings in both languages. Retrofitting right-to-left into an English app costs far more than planning it on day one.

### mada and Apple Pay, through a licensed gateway

mada, the national payment network owned by the Saudi Central Bank (SAMA), works with Apple Pay and other wallets, and its online payments go through 3-D Secure verification. An app reaches it through a payment gateway; Tap, for example, says it is licensed by the Saudi Central Bank and supports mada, Apple Pay, Tabby and Tamara. The build covers checkout, verification, failed and duplicate payments, refunds and a record your accountant can reconcile. Gateway fees are a separate, recurring cost.

### Nafath only when you need it

Nafath is Saudi Arabia's national single sign-on, used by government and private platforms to confirm who a user is. It is a separate integration, so add it when you must verify a person's identity, for contracts, rentals or financing, for example, and not as the default login. For most apps, a phone number with a one-time code is enough.

### Where the data is hosted

The Personal Data Protection Law (PDPL) has been fully enforceable since 14 September 2024, and it lets personal data leave the Kingdom only under conditions. In October 2026 the regulator, SDAIA, published draft amendments that would require personal data to be stored in the Kingdom; they are not in force. Hosting in the Kingdom is available but narrows your options: Google Cloud's Dammam region is sold to Saudi-based customers through CNTXT, and AWS has said its first Saudi region is on track to launch in December 2026. Decide before the quote, because moving an app later costs more than choosing once.

### E-invoices, if the app sells

If the app sells and your business is registered for VAT, the invoices it issues fall under ZATCA's e-invoicing rules. Phase 2 integration with ZATCA's FATOORA platform is rolled out in waves; Wave 25, covering VAT-able revenue above SAR 187,500 in any year from 2022 to 2025, must integrate by 1 February 2027. Either the app passes each sale to a POS or ERP that already handles this, or the integration becomes part of the build.

## Costs that most quotes leave out

Ask about each of these in writing, even when the vendor does not charge for them:

- **Store accounts.** Apple's developer program costs $99 a year (shown in local currency when you enrol), and Google Play charges a one-time $25. Apple asks organisations for a D-U-N-S number and shows the organisation's name as the seller, so open both accounts in your company's name, not the developer's.
- **Store commission, only on digital sales.** Apple and Google take 15% from smaller developers on digital content and subscriptions. Physical goods and real-world services, such as deliveries and bookings, must be paid by other means, such as Apple Pay or a card, with no store commission.
- **Payment fees.** The gateway charges per transaction, and rates differ by payment method. Get them in writing before you choose.
- **SMS for login codes.** Each message has a cost, and Saudi SMS providers register your sender name under the Communications, Space and Technology Commission's rules, which takes paperwork and a yearly fee.
- **Hosting and services.** Servers, maps, notifications and email are billed monthly and grow with usage.
- **Privacy and legal pages.** Apple requires a privacy policy link in the app and in the store listing, and an app with sign-up must let people delete their account inside the app. If the app sells online, the E-Commerce Law requires your name, contact details and commercial registration to be shown.
- **Yearly platform updates.** Since 28 April 2026, Apple accepts only apps built with Xcode 26 or later and the iOS 26 SDK, and since 31 August 2026 Google Play requires new apps and updates to target Android 16 or higher. An app that nobody maintains eventually cannot ship a fix.

## VAT, withholding tax and dollar quotes

This is general information, not tax advice; confirm the details with your accountant.

- **VAT is 15%.** A Saudi vendor registered for VAT adds it to the invoice.
- **Reverse charge on foreign vendors.** When a VAT-registered Saudi business buys services from a non-resident supplier, it accounts for the VAT itself.
- **Withholding tax.** When a Saudi business pays a non-resident for technical services, which ZATCA's guideline says can include software development, maintenance and support, it may have to withhold 5% and pay it to ZATCA. Agree in the contract whether the quoted price includes it.
- **Dollar quotes convert at a known rate.** The riyal is pegged at 3.75 to the US dollar, so $1,000 is always SAR 3,750.

## Lowering the cost and comparing quotes

### Cut scope, not foundations

- **Start with one user type and one core action.** How to choose that action is covered in [start small with an MVP](/blog/mobile-app-mvp-egypt).
- **Launch with your gateway's hosted payment page**, and build a custom checkout once order volume justifies it.
- **Leave Nafath and most integrations for version two**, unless the app cannot work without them.
- **Keep the control panel plain.** It has to exist from day one, but it does not have to be pretty.

Do not cut security, the control panel or proper payment handling. They cost far more to add after launch.

### Compare like with like

| Question | A good answer | A warning sign |
|---|---|---|
| Who owns the code and the store accounts? | You do, in your company's name | The app is published under the vendor's account |
| Is the control panel included? | Yes, with its screens listed | "We can add one later" |
| What is excluded? | Hosting, gateway fees, SMS and store fees are listed | Nothing is listed as excluded |
| Who fixes problems after launch, and for how long? | A stated period and response time | "Contact us when needed" |
| Can we see Arabic screens? | Real right-to-left screens from past work | English screens only |

The table works for a Saudi studio and a remote one alike. For the same breakdown in the Egyptian market, see [what a mobile app costs to build in Egypt](/blog/app-development-cost-egypt). If your idea is a marketplace, the scope grows quickly: see [building a delivery app like Jahez](/blog/delivery-app-like-jahez).

## How KF Tech Solutions works on app projects

We design and build iOS and Android apps from one codebase, together with the backend, the control panel and full right-to-left Arabic alongside English, and we publish them on the App Store and Google Play under developer accounts in your company's name. We work with businesses in Egypt and the Gulf, remotely from Cairo. Projects start from $200 (about SAR 750 / AED 735); the final price depends on scope, with a fixed written quote after a free call. Read more about our [mobile app development](/services/mobile-applications) work and about [working with clients in Saudi Arabia](/saudi-arabia).

## Common questions

### How much does a simple app cost in Saudi Arabia?

It depends on what "simple" includes. An app for one type of user, with sign-in, a few screens and a basic control panel, sits at the low end of any vendor's range; payments, a second user type or live tracking each move it up. Ask for a quote that prices those parts separately.

### Do I need both iOS and Android?

In most cases, yes. Both platforms carry a large share of Saudi mobile traffic, and a cross-platform codebase lets you publish on both stores without building the app twice.

### Will Apple or Google take a cut of my sales?

Only on digital content and subscriptions sold inside the app. Deliveries, rides, bookings and other physical goods or services must use other payment methods, so the stores take no commission on them, though your gateway's fees still apply.

### Do I have to host my app's data in Saudi Arabia?

The PDPL in force today allows personal data to be transferred abroad under conditions, such as an adequate level of protection or appropriate safeguards. Draft amendments published in October 2026 would add a duty to store it in the Kingdom, but they are not law yet, and some clients and sectors set their own hosting rules, so check yours first.

### How long does an app take to build?

At KF, a focused first version usually takes eight to fourteen weeks, including the backend and the control panel. Payments, integrations and a second user type add time, and so does store review, so set the launch date from the scope, not the other way round.

**Planning an app for the Saudi market?** Send us a one-page brief through the [contact form](/contact) or [book a free call](/book). We will ask our questions first, then send a fixed written quote.

## Sources

- [Apple: enrolling in the Apple Developer Program](https://developer.apple.com/programs/enroll/)
- [Apple: App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Apple: App Store Small Business Program](https://developer.apple.com/app-store/small-business-program/)
- [Apple: SDK minimum requirements from 28 April 2026](https://developer.apple.com/news/upcoming-requirements/?id=04282026a)
- [Google Play: developer registration fee](https://support.google.com/googleplay/android-developer/answer/6112435)
- [Google Play: service fees](https://support.google.com/googleplay/android-developer/answer/112622)
- [Google Play: payments policy](https://support.google.com/googleplay/android-developer/answer/9858738)
- [Google Play: target API level requirements](https://support.google.com/googleplay/android-developer/answer/11926878)
- [StatCounter: mobile operating system share in Saudi Arabia](https://gs.statcounter.com/os-market-share/mobile/saudi-arabia)
- [CMS: Saudi Arabia's National Arabic Language Policy](https://cms.law/en/int/legal-updates/saudi-arabia-s-national-arabic-language-policy-what-businesses-need-to-know)
- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Tap Payments, Saudi Arabia](https://www.tap.company/en-sa)
- [Wikipedia: Nafath (Unified National Access)](https://en.wikipedia.org/wiki/Unified_national_access)
- [DLA Piper: Saudi Arabia's data protection law](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Clyde & Co: SDAIA's draft PDPL amendments](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [Google Cloud: access to the Dammam region](https://docs.cloud.google.com/docs/dammam-region-access)
- [Amazon: the AWS region in Saudi Arabia](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
- [ZATCA: what e-invoicing is](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx)
- [ZATCA: Wave 25 announcement](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [Unifonic: sender ID registration in Saudi Arabia](https://docs.unifonic.com/articles/products-documentation/ksa-sender-id-registration-requirmnets)
- [E-Commerce Law, English translation (MISA)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
- [PwC: Saudi Arabia, other taxes](https://taxsummaries.pwc.com/saudi-arabia/corporate/other-taxes)
- [ZATCA: VAT guideline on imports and exports](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-on-Imports-and-Exports-under-VAT-Provision.pdf)
- [ZATCA: withholding tax guideline](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/General-Guideline-for-Withholding-Tax-In-accordance-with-the-provisions-of-the-Income-Tax-Law-and-its-Implementing-Regulations.pdf)
- [SAMA: the riyal's rate to the US dollar](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx)
