---
title: UAE e-commerce licence: what your online store needs
summary: What the UAE asks of online sellers: a licence that covers e-commerce, TDRA approval and a digital invoice per order, and how it shapes your store.
tag: Web Development
tags: e-commerce licence, online store, TDRA, free zone, VAT, UAE
order: 65
media: https://images.unsplash.com/photo-1774891937400-b5e32f719fae
alt: Black-and-white close-up of a wooden-handled rubber stamp standing on a desk
caption: Before a UAE store takes its first order, it needs a licence that covers e-commerce and TDRA approval.
stats: 14/2023|the federal decree-law that governs e-commerce; 5%|standard UAE VAT rate on most sales; 1|clear digital invoice for every transaction
---

To sell online in the UAE, you need a trade licence whose activities include e-commerce, approval from the TDRA, and a clear digital invoice for every transaction. The rules come from Federal Decree-Law 14/2023, and the UAE government portal lists all three. Whether your company sits on the mainland or in a free zone then decides who you can sell to directly.

Last checked: 6 November 2026

This guide explains each requirement in plain terms and shows how it changes the store you build: the invoice, the policy pages, the Arabic side and the checkout. It is general information, not legal or tax advice. Your licensing authority, the tax authority and your own adviser have the final word on your case.

## What the law asks of an online seller

The UAE government portal (u.ae) sums up the e-commerce rules in three points:

- **A licence that includes e-commerce activity.** A general trading licence that does not list e-commerce, or an online activity, is not enough to run an online store.
- **TDRA approval.** The Telecommunications and Digital Government Regulatory Authority is the body the portal names for e-commerce approval.
- **A clear digital invoice for every transaction.** Each sale needs an invoice the customer can read and keep, issued electronically.

All three sit under Federal Decree-Law 14/2023, the federal law that governs e-commerce. If you already hold a licence for a shop or a trading company, the first step is to check whether e-commerce appears among its activities. It is better to find a missing activity now than after launch.

One change to watch: in June 2026 the UAE approved a new AI and Data Authority that absorbs TDRA's Digital Government Sector. Before you apply, confirm with your licensing authority which body currently handles the approval step, because names and portals can move during a transition like this.

## Mainland or free zone: who you can sell to

Where your company is licensed matters as much as what the licence says.

| Question | Mainland company | Free-zone company |
|---|---|---|
| Legal framework | Mainland rules | A different framework, set by the free zone |
| Selling to customers on the mainland | Direct, within the licensed activities | Through a licensed mainland distributor, or a mainland branch or company |
| E-commerce activity on the licence | Needed | Needed |
| VAT | Applies at the standard rate on taxable sales | Free-zone status does not by itself remove VAT |

The government portal is direct about the free-zone point: free-zone companies operate under a different legal framework, and to sell on the mainland they need a licensed mainland distributor or a mainland branch or company. Before you build a store aimed at customers across the UAE, ask your free-zone authority exactly how this applies to online orders delivered to the mainland. The answer can change your company structure, your invoices and even who appears as the seller on the checkout page.

On VAT, being in a free zone is not an exemption in itself. The Federal Tax Authority's designated zones guide treats services supplied there as supplied in the UAE and liable to VAT at the standard rate, which is 5%. The rules for goods moving in and out of designated zones are more detailed, so take them to your tax adviser.

## Sorting out the licence before the build

The licence decides details that end up on almost every page of the store, so settle it first:

1. **Check the activities on your licence.** Look for e-commerce or an equivalent online-trading activity. If it is missing, ask your licensing authority to add it.
2. **Get the TDRA approval** the portal describes, through the channel your licensing authority points you to.
3. **Fix the legal seller name.** The company name on the licence is the name that should appear on invoices, in the terms and in the website footer.
4. **Decide what you sell and to whom.** Consumers, businesses or both. Selling to businesses brings e-invoicing into scope, as the next section explains.
5. **Register for VAT if your tax adviser says you must**, and keep the tax registration number ready for the invoice template.

None of this needs a website yet. A developer can build the catalogue and checkout in parallel, but the invoice, the footer and the terms should wait until these answers are final.

## A clear digital invoice for every order

The portal's requirement is simple to state: every transaction needs a clear digital invoice. For a store, that means the system creates an invoice automatically when an order is paid, sends it to the customer by email, and keeps it available in their account and in your dashboard.

A practical invoice for a UAE store usually shows:

- the legal seller name and licence details;
- the tax registration number, if you are registered for VAT;
- an invoice number from one unbroken sequence, and the date;
- each item, its quantity and price;
- the VAT amount and the total in UAE dirhams;
- the delivery charge and any discount as separate lines.

Write the exact fields with your accountant. The point for the build is that the invoice is generated by the store, not typed afterwards in a spreadsheet, and that refunds produce a matching credit note.

### Where UAE e-invoicing fits

The UAE's national e-invoicing system is a separate layer. It covers **B2B and B2G** transactions, and B2C sales are excluded "until such time determined by a decision issued by the Minister". Businesses with revenue of AED 50 million or more go live on 1 January 2027, and everyone else on 1 July 2027. In-scope invoices travel as structured PINT AE data through an accredited service provider (ASP). A PDF or an email is not an e-invoice under that system.

If your store sells only to consumers, the per-order digital invoice is your main task today. If you also sell to companies, plan for the B2B orders to reach your ERP or accounting system in a form your ASP can use. Our guide to the [UAE e-invoicing deadlines for SMEs](/blog/uae-e-invoicing-deadlines-smes) covers the dates and the onboarding steps.

## Customer data, payments and the pages your store needs

### Personal data

The UAE's Personal Data Protection Law, Federal Decree-Law 45/2021, has been in effect since January 2022 and covers the mainland. The DIFC and ADGM financial free zones have their own data protection laws and regulators. The PDPL's implementing regulations had not been formally issued as of September 2026, so be wary of anyone quoting detailed obligations from them.

For the store, that translates into practical habits rather than a badge: a clear privacy policy, collecting only the data you use for orders and delivery, consent for marketing messages, and access to customer data limited to the staff who need it.

### Payments

Take card payments through a licensed payment gateway, not on your own server. Sector rules require payment service providers to store personal and payment data in the UAE, and a hosted or tokenised gateway checkout keeps card details away from your database altogether. The UAE also has two national payment rails run by Al Etihad Payments, a Central Bank subsidiary: **Aani** for instant payments and **Jaywan**, the domestic card scheme, which works online as well as in shops. Ask your gateway which of these it supports. Our article on [payments and delivery for online stores](/blog/online-store-egypt-payments-and-delivery) covers the parts of checkout that break most often, from failed payments to cash on delivery.

### The pages customers and authorities expect

Every store should publish, in Arabic and English:

- terms of sale, with your legal company name;
- a returns, exchange and refund policy;
- delivery areas, times and charges;
- the privacy policy;
- contact details, including a phone or WhatsApp number and an email address.

Arabic deserves real attention. A right-to-left layout built properly, with Arabic product names, Arabic invoices and Arabic emails, reads very differently from a translated English store. If you are weighing a hosted platform against a custom build, our comparison of [Shopify and a custom online store](/blog/shopify-vs-custom-online-store-egypt) applies just as well to the UAE.

## A pre-launch checklist

| Area | Question to answer before launch | Who usually answers it |
|---|---|---|
| Licence | Does the licence include e-commerce activity? | Licensing authority |
| Approval | Is the TDRA approval in place? | Licensing authority, TDRA |
| Structure | Free zone: how do mainland orders work for you? | Free-zone authority |
| VAT | Are you registered, and what is your TRN? | Tax adviser, FTA |
| Invoices | Does every paid order create a clear digital invoice? | Developer, accountant |
| B2B sales | Do business orders need to reach an ASP from 2027? | Accountant, ASP |
| Payments | Is checkout on a licensed gateway? | Gateway, developer |
| Pages | Terms, returns, delivery and privacy in Arabic and English? | You, legal adviser |

If a row has no answer yet, that is the item to sort out before launch day.

### Where KF Tech Solutions fits

We build online stores and web apps in Arabic and English: product catalogue, cart, checkout through your payment gateway, automatic per-order invoices and credit notes, policy pages, and a dashboard where you manage products, orders and content. We do not issue licences or file approvals; your licensing authority or a business setup adviser handles that. We work with businesses in Egypt and the Gulf, remotely. See our [web development service](/services/web-development), what a site typically involves in our guide to [website design cost in the UAE](/blog/website-design-cost-uae), and our [UAE page](/uae).

## Common questions

### Can I sell online in the UAE with an ordinary trading licence?

The government portal says sellers need a licence that includes e-commerce activity. If your current licence does not list it, ask your licensing authority to add the activity before you launch.

### Can a free-zone company sell online to customers on the mainland?

The portal's general rule is that free-zone companies need a licensed mainland distributor, or a mainland branch or company, to sell on the mainland. Ask your free-zone authority how that applies to online orders delivered to mainland addresses.

### Do I need e-invoicing for a consumer online store?

Not under the national e-invoicing system for now: B2C sales are excluded until the Minister decides otherwise. You still need a clear digital invoice for every transaction under the e-commerce rules. B2B sales come into e-invoicing from 1 January or 1 July 2027, depending on your revenue.

### Is a PDF invoice by email enough?

For a consumer order, a clear digital invoice sent electronically is what the portal describes; confirm the exact contents with your accountant. For B2B invoices under the e-invoicing system, a PDF or an email is not an e-invoice: the data must go through an accredited service provider.

### Does the store's hosting need to be in the UAE?

The sector rule we found applies to payment service providers, which must store payment data in the UAE. That is one more reason to keep card details with a licensed gateway. For anything beyond that, ask your legal adviser, because the PDPL's implementing regulations have not been issued yet.

## Planning a UAE online store?

Once the licence questions are settled, tell us what you sell and to whom, and we will map out the store, the invoices and the checkout with you. [Book a free call](/book) or [send us a message](/contact).

## Sources

- [UAE government portal: e-commerce](https://u.ae/en/information-and-services/business/Managing-and-growing-your-business/ecommerce)
- [UAE government portal: running a business in a free zone](https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/running-a-business-in-a-free-zone-)
- [Federal Tax Authority: Designated Zones VAT Guide](https://www.tax.gov.ae/-/media/Files/FTA/links/vat-designated-zone/Designated-Zones-VAT-Guide.pdf)
- [PwC: UAE other taxes (VAT rate)](https://taxsummaries.pwc.com/united-arab-emirates/corporate/other-taxes)
- [Ministry of Finance: eInvoicing](https://mof.gov.ae/en/about-ministry/mof-initiatives/einvoicing/)
- [Ministerial Decision No. 244 of 2025 on the implementation of the e-invoicing system](https://mof.gov.ae/wp-content/uploads/2025/09/Ministerial-Decision-No.-244-of-2025-on-the-Implementation-of-the-Electronic-Invoicing-System.pdf)
- [Legal 500: the UAE AI and Data Authority and the PDPL](https://www.legal500.com/intelligence/united-arab-emirates/strategy/the-uae-artificial-intelligence-and-data-authority-what-it-means-for-ai-data-and-digital-governance)
- [DLA Piper: UAE data protection law](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
- [DIFC Commissioner of Data Protection](https://www.difc.com/business/registrars-and-commissioners/commissioner-of-data-protection)
- [ADGM Office of Data Protection](https://www.adgm.com/operating-in-adgm/office-of-data-protection/guidance)
- [The National: Aani and Jaywan](https://thenationalnews.com/business/banking/2026/08/03/uae-expands-federal-payment-channels-with-aani-and-jaywan)
