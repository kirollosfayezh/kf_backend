---
title: UAE data protection for apps: PDPL, DIFC and ADGM
summary: Which UAE data protection regime covers your app, what is settled under the PDPL, DIFC and ADGM rules, and a build checklist that fits all three.
tag: Business Systems
tags: UAE, data protection, PDPL, DIFC, ADGM, privacy, app development
order: 86
media: https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd
alt: A smartphone lying on a yellow surface with a white padlock on its purple screen
caption: In the UAE the address decides the rulebook: mainland PDPL, DIFC or ADGM each set their own data protection terms.
stats: 3|data protection regimes: mainland, DIFC and ADGM; 2022|year the federal PDPL came into force; 1|data map every app should keep, whichever law applies
---

If your app collects personal data in the UAE, one of three regimes usually applies: the federal Personal Data Protection Law (PDPL, Federal Decree-Law 45 of 2021) on the mainland, DIFC Law No. 5 of 2020 in the Dubai International Financial Centre, or the ADGM Data Protection Regulations 2021 in Abu Dhabi Global Market. Payment and health data carry extra sector rules on top. One well-built app can work under all three, as long as consent, access, deletion and logging are designed in from the start.

Last checked: 6 November 2026

This article is general information, not legal advice. The rules are still moving, so confirm your position with a UAE-qualified lawyer before you launch.

## Which law applies to your app

The first question is where your business is established, not where your servers are.

- **Mainland company:** the PDPL. It has applied since 2 January 2022 and covers the mainland, but not the DIFC or ADGM.
- **DIFC entity:** DIFC Law No. 5 of 2020, overseen by the DIFC Commissioner of Data Protection.
- **ADGM entity:** the ADGM Data Protection Regulations 2021, overseen by the ADGM Office of Data Protection.
- **Company in another free zone:** ask your adviser which regime covers your licence before you design anything. Free-zone companies operate under a different legal framework from the mainland, so do not assume.

Hosting abroad does not take you out of scope. The UAE government portal describes the PDPL as applying to processing whether it happens inside or outside the country. An app built in Cairo, hosted in Europe and used by customers in Dubai still has to be designed with UAE rules in mind.

| | Mainland | DIFC | ADGM |
|---|---|---|---|
| Law | Federal Decree-Law 45 of 2021 (PDPL) | DIFC Law No. 5 of 2020 | ADGM Data Protection Regulations 2021 |
| Who it covers | Mainland businesses | Entities in the DIFC | Entities in ADGM |
| Supervisor | UAE Data Office, moving into the new AI and Data Authority | Commissioner of Data Protection | Office of Data Protection |

## The mainland PDPL: what is settled and what is not

The official UAE government portal summarises the core of the law:

- **Consent is the default.** Processing personal data without the owner's consent is generally prohibited, with exceptions such as the public interest and certain legal procedures and rights.
- **People have rights over their data**, including asking for inaccurate data to be corrected and asking for processing to be restricted or stopped.
- **Cross-border transfers have conditions.** The law sets requirements for transferring and sharing personal data outside the country for processing.
- **There is a regulator and a complaints route.** The UAE Data Office was set up as the federal data regulator, with systems for complaints and grievances.

Two things are still open:

- **The executive regulations.** They are meant to fill in the detail, but they had not been formally issued as of September 2026. Anyone who tells you exactly what they require is guessing.
- **The regulator itself.** On 14 June 2026 the UAE approved a new AI and Data Authority, which absorbs the UAE Data Office, the AI Office and TDRA's Digital Government Sector. Future guidance is likely to come from the new body.

The practical answer is to build to the principles in the law now and keep the parts most likely to be specified later configurable rather than hard-coded: consent wording, retention periods, the list of countries you transfer data to, and the deadlines your team works to when someone asks for their data.

## DIFC and ADGM: two separate regimes

Both financial free zones have their own data protection law and their own supervisor, separate from the federal PDPL. If your company is licensed in one of them, the PDPL is not your reference. Read the guidance from the DIFC Commissioner of Data Protection or the ADGM Office of Data Protection (links below) and have your lawyer map it to your product.

For the people building the app, the differences show up mostly around the software rather than inside it: the notices you publish, the records you keep, how you deal with the regulator and how fast you respond. The technical building blocks are the same.

If one app serves companies in more than one zone, for example a group with a mainland company and a DIFC entity, design to the strictest setting and make notices and retention periods configurable per entity.

## Payment and health data: sector rules on top

Some kinds of data carry rules beyond the general law.

- **Payments.** DLA Piper's UAE summary notes that payment service providers must store personal and payment data in the UAE. If your app takes card payments, the usual route is to let a licensed gateway handle card details so they never reach your own servers. Our guide to [payment gateways in the UAE](/blog/payment-gateways-uae) compares the options. If you are building a payment service yourself, that is a licensing and hosting question for a lawyer before it is a coding question.
- **Health.** Health data is restricted, and the government portal lists a separate federal law on ICT in health fields alongside the PDPL. Clinic booking apps, telemedicine, pharmacy and patient-record systems need specific advice on where data may be stored and who may access it before you choose hosting. For what a clinic system holds in the first place, see our guide to [clinic management software](/blog/clinic-management-system-egypt).

When a rule says data must stay in the UAE, it becomes a hosting decision: the database, the backups and any logs that contain personal data all have to sit there. Ask your developer to state in writing where each of them is hosted.

## A build checklist that works under all three

These practices match principles that appear across the three regimes. They do not make you compliant on their own, but they give your lawyer something solid to work with and save you a rebuild later.

### Know what you collect

- Keep a **data map**: every personal data field, why you need it, where it is stored, who can see it and how long you keep it.
- Collect less. Drop fields you do not use, such as full birth dates or copies of ID documents "just in case".
- Keep test data separate from live customer data.

### Consent and notice

- Record consent with a timestamp, the version of the text the person saw and what they agreed to.
- Keep marketing consent separate from consent for the service itself, and make withdrawal as easy as giving it.
- Publish a privacy notice in Arabic and English and link it at sign-up and inside the app.

### Requests from the people whose data you hold

- Give your admin panel tools to export, correct, restrict and delete one person's data.
- Make deletion reach the third-party services you use, and clear backups on a fixed schedule.
- Log every request and when it was answered.

### Security

- Role-based access, so staff see only what their job needs.
- Encryption in transit and at rest.
- An audit log of who viewed, changed or exported personal data.
- Two-factor sign-in for admin accounts.

### Transfers and suppliers

- List every outside service that receives personal data: hosting, email, SMS, analytics, crash reporting, AI APIs and login providers.
- Record where each one processes data. Your lawyer needs this list to assess cross-border transfers.
- If you add [UAE PASS sign-in](/blog/uae-pass-integration), the verified identity data you receive is personal data like any other and belongs on the map.

### Incidents

- Monitoring and alerts that would actually show you a breach.
- A written incident procedure: who decides, who is told and in what order. Your lawyer fills in the legal deadlines for your regime.

### The contract with your developer

Ask for an NDA, return or secure deletion of your data at the end of the contract, an incident-notification procedure, and full source-code and IP assignment in the contract. UAE copyright law makes the employer the default owner of software its employees create within their job, unless agreed otherwise. That rule is about employees, and the source we checked does not address outside contractors, so put the assignment in writing. Our checklist of [what to check in a software development contract](/blog/software-development-contract-what-to-check) covers the rest.

## What KF Tech Solutions does here

We build [custom software](/services/custom-software), web apps and mobile apps for businesses in Egypt and the Gulf, including clinic and pharmacy systems. On a UAE project we build the checklist into the product: a data map in the specification, consent records, role-based access with audit logs, export and deletion tools in the admin panel, and a written list of every outside service and where it is hosted. We host where you and your adviser decide and state that location in writing. We are developers, not lawyers, so we work alongside your legal adviser rather than certify compliance. More about how we work with UAE businesses is on our [UAE page](/uae).

## Common questions

### Do the PDPL executive regulations apply yet?

They had not been formally issued as of September 2026. The law itself has applied since 2 January 2022, so build to its principles now and keep the details configurable.

### Does my app have to store data in the UAE?

It depends on your sector and your regime. Sector rules are the clearest case: payment service providers must store personal and payment data in the UAE, and health data is restricted. For other apps, the PDPL sets conditions on cross-border transfers, so ask your lawyer how they apply to your hosting before you choose it.

### We are a DIFC company. Does the PDPL apply to us?

The PDPL does not cover the DIFC or ADGM. DIFC entities follow DIFC Law No. 5 of 2020, and ADGM entities follow the ADGM Data Protection Regulations 2021.

### Can a developer outside the UAE build a compliant app?

Yes. Where the code is written matters less than how the app handles data and where it is hosted. What matters is consent, access control, deletion, logging, a supplier list and a clear contract.

### Is a privacy policy enough?

No. A policy describes what you do; the app has to actually do it. If someone asks for their data to be corrected or processing to stop, your team needs a tool for that, not a promise on a web page.

## Next step

If you are planning an app for UAE customers and want data protection designed in from the first screen, [tell us about your project](/contact) or [book a free call](/book).

## Sources

- [UAE government portal: data protection laws](https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws)
- [Legal 500: the UAE Artificial Intelligence and Data Authority](https://www.legal500.com/intelligence/united-arab-emirates/strategy/the-uae-artificial-intelligence-and-data-authority-what-it-means-for-ai-data-and-digital-governance)
- [DLA Piper: data protection laws in the UAE](https://www.dlapiperdataprotection.com/countries/uae-general/law.html)
- [DIFC Commissioner of Data Protection](https://www.difc.com/business/registrars-and-commissioners/commissioner-of-data-protection)
- [ADGM Office of Data Protection: guidance](https://www.adgm.com/operating-in-adgm/office-of-data-protection/guidance)
- [UAE government portal: running a business in a free zone](https://u.ae/en/information-and-services/business/Doing-business/doing-business-in-free-zones/running-a-business-in-a-free-zone-)
- [Morgan Lewis: the UAE copyright law and software](https://www.morganlewis.com/blogs/sourcingatmorganlewis/2022/10/protecting-online-data-and-ip-new-copyright-law-provides-clarity-for-uae-businesses)
