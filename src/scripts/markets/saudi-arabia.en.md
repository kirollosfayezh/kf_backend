---
title: Software, apps and POS systems for companies in Saudi Arabia
summary: Arabic-first apps, websites, cashier and business systems for Saudi businesses, built remotely from Cairo on the same Sunday-to-Thursday week.
seoTitle: Software Development Company for Saudi Businesses | KF Tech
seoDescription: KF Tech Solutions, a Cairo software studio, builds Arabic-first apps, websites and POS systems for Saudi businesses, remotely, on Saudi working days.
---

KF Tech Solutions is an independent software studio in Cairo, founded in 2020 by Kirollos Fayez. We design and build apps, websites and business systems for companies in Saudi Arabia, working remotely. We have no office in the Kingdom, and we say so up front. We already work with clients in the Gulf, and we don't name a client publicly without their permission.

This page covers what is specific to a Saudi project: the rules your system has to meet, the payment methods your customers expect, and how working with us from Cairo fits your week. Each outside fact links to its source, and the full list is at the end.

Last checked: 6 November 2026.

## What we build for Saudi businesses

- **Arabic-first websites and online stores**, with right-to-left layouts from the start. See [web development](/services/web-development) and our guide to [Salla vs Zid vs Shopify](/blog/salla-vs-zid-vs-shopify).
- **iOS and Android apps**, published under your company's own Apple and Google developer accounts. See [mobile app development](/services/mobile-applications) and our guide to [building a delivery app like Jahez](/blog/delivery-app-like-jahez).
- **Cashier (POS), inventory and ERP systems** for one branch or many. See [business systems](/services/business-systems) and our guides to [ready-made vs custom POS in Saudi Arabia](/blog/ready-made-vs-custom-pos-saudi-arabia) and [Odoo vs a custom ERP](/blog/odoo-vs-custom-erp-saudi-arabia).
- **E-invoicing integration** between your own cashier or ERP and ZATCA's FATOORA platform, built to ZATCA's published specifications. See our guides to [Phase 2 integration for your own POS or ERP](/blog/zatca-phase-2-integration-custom-pos-erp) and [Wave 25](/blog/zatca-wave-25-e-invoicing).
- **WhatsApp assistants in Arabic** that answer from your own information and hand the conversation to your team when needed. See [AI solutions](/services/ai-solutions) and our guide to [WhatsApp chatbots for Saudi businesses](/blog/whatsapp-chatbot-saudi-arabia).
- **Payment and API integrations** between your store, app, payment gateway and back office. See [API and backend development](/services/api-and-backend) and our guide to [payment gateways in Saudi Arabia](/blog/payment-gateways-saudi-arabia).

## Saudi requirements we design for

### Arabic first

- **Invoices.** ZATCA requires the human-readable tax invoice to be in Arabic. Other languages may be added, and Arabic or Hindi numerals both count ([ZATCA](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)).
- **Everything else.** The National Arabic Language Policy, approved by the Council of Ministers in 2026, encourages Arabic in contracts, invoices, signage, advertising and communications. It is not a standalone enforcement instrument, but foreign businesses are expected to give Arabic due consideration when presenting their products ([CMS](https://cms.law/en/int/legal-updates/saudi-arabia-s-national-arabic-language-policy-what-businesses-need-to-know)).
- **How we build.** Right-to-left Arabic interfaces alongside English as standard, including reports and printed documents, with copy in formal Modern Standard Arabic and the words Saudi customers actually search for. More in [Arabic–English websites: the RTL details that break](/blog/arabic-english-website-rtl).

### E-invoicing: FATOORA Phase 2

Since 1 January 2023, ZATCA has been moving VAT-registered businesses onto Phase 2, the integration phase, in waves ([ZATCA](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)). Wave 25 covers businesses with VAT-able revenue above SAR 187,500 in any year from 2022 to 2025, and they must integrate with FATOORA by 1 February 2027 ([ZATCA](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)).

What Phase 2 asks of your cashier or ERP ([ZATCA](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)):

- Each invoicing unit (an EGS unit) is onboarded on FATOORA and receives its own cryptographic stamp identifier (CSID).
- Invoices are XML in the UBL 2.1 structure, and what goes to ZATCA is sent through an API.
- Tax invoices, usually issued to businesses and government, are cleared by ZATCA before they reach the buyer.
- Simplified invoices, usually issued to consumers, carry a QR code and are reported to FATOORA within 24 hours.
- Every invoice carries a UUID and the hash of the previous invoice, and stored invoices cannot be edited or deleted.

ZATCA does not certify software. Its Solution Providers Directory is a guiding list that, in ZATCA's words, "is not considered as an approval" ([ZATCA](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)). So no vendor, us included, can honestly sell you a "ZATCA-certified" system. What we offer is integration work: we assess your current system, then build its connection to FATOORA to ZATCA's published specifications. Our e-invoicing track record so far is in Egypt: the [ETA e-receipt integration](/projects/egypt-eta) signs and submits each receipt to the Egyptian Tax Authority and keeps its status with the sale, and it is live in production. For the fines ZATCA has published, see [ZATCA e-invoicing fines](/blog/zatca-e-invoicing-penalties).

### Payments your customers expect

- **mada**, owned by SAMA and launched in 1990, supports Apple Pay, mada Pay, Samsung Pay and Google Pay, contactless payments and online payments through 3-D Secure ([SAMA](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)).
- **STC Bank**, formerly STC Pay: SAMA approved the conversion in April 2024 and authorised full operations on 28 January 2025 ([Arab News](https://www.arabnews.pk/node/2588148/business-economy)).
- **Tabby and Tamara** for buy now, pay later: SAMA licensed Tamara Finance on 3 March 2025 and Tabby Finance on 10 November 2025 ([SAMA](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1079.aspx); [SAMA](https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1116.aspx)).
- **SADAD** for bills and **sarie** for instant transfers of up to SAR 20,000, around the clock, both owned by SAMA ([SADAD](https://www.sama.gov.sa/en-US/payment/pages/sadad.aspx); [sarie](https://www.sama.gov.sa/en-US/payment/pages/sarie.aspx)).

These reach a store or app through a payment gateway you contract with. Tap, PayTabs and Telr, for example, each list mada, Apple Pay and Tabby among their methods ([Tap](https://www.tap.company/en-sa); [PayTabs](https://www.paytabs.com/en/); [Telr](https://telr.com/)). We connect your store, app or cashier to the gateway you choose through its published API. More in [adding Tabby or Tamara to your store or app](/blog/tabby-tamara-integration).

### Digital identity

Nafath is the national single sign-on: an app with biometric verification, connected to more than 530 government and private platforms ([Wikipedia](https://en.wikipedia.org/wiki/Unified_national_access)). If your service needs verified identities, see [Nafath login for your website or app](/blog/nafath-integration).

### Personal data and hosting

- **The PDPL applies.** Saudi Arabia's Personal Data Protection Law has been in force since 14 September 2023, and its grace period ended on 14 September 2024. SDAIA is the regulator. Breaches must be notified to it within 72 hours, and personal data may go abroad only to a country with adequate protection or with appropriate safeguards, limited to the minimum needed ([DLA Piper](https://www.dlapiperdataprotection.com/?t=law&c=SA)). The law also reaches providers outside the Kingdom that serve people in it ([Chambers](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)).
- **In-Kingdom storage is a draft.** SDAIA consulted on draft amendments from 6 October to 5 November 2026, and one of them would require controllers to store personal data in the Kingdom. As of 6 November 2026 that is a proposal, not law ([Clyde & Co](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)).
- **Cybersecurity controls.** NCA's Essential Cybersecurity Controls (ECC-2:2024) bind government agencies and organisations that own, operate or host critical national infrastructure; everyone else is strongly encouraged to follow them. The 2024 edition dropped the old sub-control that required hosting inside the Kingdom and refers data localisation to the National Data Management Office at SDAIA ([NCA](https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf)).
- **Where we host.** Hosting runs in cloud accounts in your company's name, so you choose the provider and region. If you need it inside the Kingdom, Google Cloud's Dammam region is sold to Saudi-based customers through CNTXT ([Google Cloud](https://docs.cloud.google.com/docs/dammam-region-access)), and AWS says its first Saudi region is on track to launch in December 2026 ([Amazon](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)).

In practice: [Saudi PDPL for websites and apps, an engineering checklist](/blog/saudi-pdpl-website-app-checklist).

### Online stores

- **Business Platform.** Online stores register on the Business Platform (business.sa), run by the Saudi Business Center, instead of Maroof. You need a commercial registration or a valid freelance certificate, plus a commercial bank account ([Ministry of Commerce](https://mc.gov.sa/en/mediacenter/News/Pages/29-03-23-02.aspx)).
- **What the store must show.** The E-Commerce Law requires a store to disclose its name or identifier, its contact details and its commercial registration (Art. 6), and to give customers the contract terms (Art. 7). Penalties include a warning, a fine of up to SAR 1 million, and suspension or blocking of the store (Art. 18) ([E-Commerce Law](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)).

We build these disclosures into the store's pages. More in [Saudi Business Platform documentation for online stores](/blog/saudi-business-platform-store-documentation).

## How we work with you from Cairo

### The same working week

Saudi Arabia's weekend has been Friday and Saturday since 29 June 2013 ([Crowell](https://www.crowell.com/en/insights/client-alerts/saudi-arabia-changes-weekend-to-friday-saturday-from-29-june-2013)). We work Sunday to Thursday, 10:00 to 18:00 Cairo time, so our working days are yours.

### Riyadh time

Cairo keeps Riyadh time (UTC+3) from the last Friday of April to the last Thursday of October, and is one hour behind it the rest of the year; Riyadh does not change its clocks ([Ahram Online](https://english.ahram.org.eg/NewsContentP/1/566547/Egypt/Egypt-to-move-clocks-forward-one-hour-on-Friday-fo.aspx); offsets from the [IANA time zone database](https://www.iana.org/time-zones)).

| Period | Our hours in Riyadh time |
|---|---|
| Last Friday of April to last Thursday of October | 10:00–18:00 |
| Rest of the year | 11:00–19:00 |

The [booking page](/book) shows our free times in your own time zone.

### How a project runs

1. **A free 30-minute call** on WhatsApp to understand the problem, in Arabic or English.
2. **A fixed, written quote** with the scope, screens and deliverables.
3. **Clickable screens** you can try before development starts.
4. **Working software every one to two weeks**, so you can change direction early.
5. **Launch and handover**: data migration, training, documentation and full access to your code and servers, then support.

You talk directly to the people who build your product, and Kirollos Fayez leads every project.

## Prices, currency and tax

Projects start from $200 (about SAR 750); final price depends on scope, with a fixed written quote after a free call. The riyal figure uses the official peg of 3.75 riyals to the US dollar ([SAMA](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx)). What drives a budget is covered in our guides to [app development](/blog/app-development-cost-saudi-arabia), [website design](/blog/website-design-cost-saudi-arabia) and [online store](/blog/online-store-cost-saudi-arabia) costs in Saudi Arabia.

On tax, the following is general information rather than tax advice, so check your own case with your accountant:

- VAT in Saudi Arabia is 15% ([PwC](https://taxsummaries.pwc.com/saudi-arabia/corporate/other-taxes)). A VAT-registered Saudi business that buys services from a non-resident supplier accounts for the VAT itself under the reverse charge ([ZATCA](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-on-Imports-and-Exports-under-VAT-Provision.pdf)).
- Payments to a non-resident for technical or consulting services can carry 5% withholding tax. Software development, support, maintenance, updates and training count as technical services when they are separable from the software ([ZATCA](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/General-Guideline-for-Withholding-Tax-In-accordance-with-the-provisions-of-the-Income-Tax-Law-and-its-Implementing-Regulations.pdf)).

## Contract terms worth asking for

Control 4-1-2 of NCA's Essential Cybersecurity Controls lists the minimum clauses that organisations bound by them must put in contracts with third parties ([NCA](https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf)):

- non-disclosure;
- secure removal of your data when the service ends;
- a procedure for reporting cybersecurity incidents;
- the vendor applying your own cybersecurity requirements.

They are good practice in any software contract, so ask any vendor, us included, to put them in writing. With us, the code, the database, and the cloud, domain and developer accounts are in your company's name. More in [software contracts for Saudi and UAE clients](/blog/software-contract-saudi-uae-clients) and [nine things to check in a software development contract](/blog/software-development-contract-what-to-check).

## Work you can check

These public case studies show the kind of work we deliver:

- [Egypt ETA](/projects/egypt-eta): e-receipt integration with the Egyptian Tax Authority's API, live in production.
- [GenTrack](/projects/gentrack): a multi-tenant platform for generator rental companies in Egypt, combining live IoT monitoring with a cloud ERP.
- [Solana Red Sea](/projects/solana-red-sea): a real-estate platform for luxury homes on Egypt's Red Sea coast, with listings and lead capture.
- [Horus](/projects/horus): a platform for a multi-branch mental-health clinic, with booking for in-person and online sessions.
- [Alkhameesi](/projects/alkhameesi): an export platform for an Egyptian fresh-produce exporter, with a multilingual catalogue and an inquiry flow.

The founder's background is on our [About page](/about).

## More guides for Saudi businesses

- [Hiring an Egyptian software company from the Gulf](/blog/hire-egyptian-software-company-from-gulf)
- [How to choose a software company in Saudi Arabia](/blog/choose-software-company-saudi-arabia)
- [ZATCA API integration: a checklist for developers](/blog/zatca-api-integration-developer-checklist)
- [One POS for Egypt and Saudi Arabia: ETA vs ZATCA](/blog/one-pos-egypt-saudi-eta-zatca)
- [Clinic management software in Saudi Arabia](/blog/clinic-management-system-saudi-arabia)

Also working in the UAE? See [software for UAE companies](/uae). For Kuwait, Qatar, Bahrain and Oman, see [our Gulf page](/gulf).

## Common questions

### Do you have an office in Saudi Arabia?

No. We are based in Cairo and work with Saudi businesses remotely, on the same Sunday-to-Thursday week. The first step is a free 30-minute WhatsApp call, booked in your own time zone.

### Can you connect our existing cashier or ERP to FATOORA?

We start by assessing your system, because the route depends on it: replace it, add a connector next to it, or build the integration into it. We then build to ZATCA's published Phase 2 specifications. ZATCA does not certify software, so treat any claim that a system is approved by ZATCA with care.

### How does VAT work when we pay you?

As general information: a VAT-registered Saudi business usually accounts for the VAT on services from a non-resident supplier itself, under the reverse charge, and payments to a non-resident for technical services can carry 5% withholding tax. Confirm your own case with your accountant.

### Where will our data be hosted?

In a cloud account in your company's name, in the region you choose. If your sector needs hosting inside the Kingdom, Google Cloud's Dammam region is one option. Transfers of personal data abroad must follow the PDPL.

### Who owns the code and the app-store accounts?

You do. The code, the database, and the cloud, domain and developer accounts are in your company's name, and apps are published under your own Apple and Google accounts.

### Is your Arabic written for Saudi readers?

Yes. Interfaces and copy are written in formal Modern Standard Arabic with the words your customers in the Kingdom use, and right-to-left layouts are built in from the start.

## Start with a free call

Tell us what you need on the [contact page](/contact), or [book a free call](/book) at a time that suits you. We reply within one business day, Sunday to Thursday, Cairo time.

## Sources

Checked on 6 November 2026.

- [ZATCA: E-Invoicing Detailed Guidelines](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [CMS: Saudi Arabia's National Arabic Language Policy](https://cms.law/en/int/legal-updates/saudi-arabia-s-national-arabic-language-policy-what-businesses-need-to-know)
- [ZATCA: e-invoicing roll-out phases](https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx)
- [ZATCA: Wave 25 e-invoicing notice](https://zatca.gov.sa/en/MediaCenter/News/Pages/Wave25-E-invoicing.aspx)
- [ZATCA: Solution Providers Directory](https://zatca.gov.sa/en/E-Invoicing/SolutionProviders/Pages/SolutionProvidersDirectory.aspx)
- [SAMA: mada](https://www.sama.gov.sa/en-US/payment/Pages/mada.aspx)
- [Arab News: STC Pay becomes STC Bank](https://www.arabnews.pk/node/2588148/business-economy)
- [SAMA: Tamara Finance licence](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1079.aspx)
- [SAMA: Tabby Finance licence](https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1116.aspx)
- [SAMA: SADAD](https://www.sama.gov.sa/en-US/payment/pages/sadad.aspx)
- [SAMA: sarie](https://www.sama.gov.sa/en-US/payment/pages/sarie.aspx)
- [Tap](https://www.tap.company/en-sa)
- [PayTabs](https://www.paytabs.com/en/)
- [Telr](https://telr.com/)
- [Wikipedia: Nafath (Unified National Access)](https://en.wikipedia.org/wiki/Unified_national_access)
- [DLA Piper: data protection in Saudi Arabia](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Chambers: TMT 2026, Saudi Arabia](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Clyde & Co: SDAIA's draft PDPL amendments](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [NCA: Essential Cybersecurity Controls (ECC-2:2024)](https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf)
- [Google Cloud: Dammam region access](https://docs.cloud.google.com/docs/dammam-region-access)
- [Amazon: AWS region in Saudi Arabia](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
- [Ministry of Commerce: Business Platform replaces Maroof](https://mc.gov.sa/en/mediacenter/News/Pages/29-03-23-02.aspx)
- [E-Commerce Law (Ministry of Investment translation)](https://misa.gov.sa/app/uploads/2025/07/E-Commerce-Law.pdf)
- [Crowell: Saudi Arabia's weekend change](https://www.crowell.com/en/insights/client-alerts/saudi-arabia-changes-weekend-to-friday-saturday-from-29-june-2013)
- [Ahram Online: Egypt's daylight saving time](https://english.ahram.org.eg/NewsContentP/1/566547/Egypt/Egypt-to-move-clocks-forward-one-hour-on-Friday-fo.aspx)
- [IANA time zone database](https://www.iana.org/time-zones)
- [SAMA: riyal exchange-rate peg](https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-557.aspx)
- [PwC: Saudi Arabia, other taxes](https://taxsummaries.pwc.com/saudi-arabia/corporate/other-taxes)
- [ZATCA: VAT guideline on imports and exports](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-on-Imports-and-Exports-under-VAT-Provision.pdf)
- [ZATCA: withholding tax guideline](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/General-Guideline-for-Withholding-Tax-In-accordance-with-the-provisions-of-the-Income-Tax-Law-and-its-Implementing-Regulations.pdf)
