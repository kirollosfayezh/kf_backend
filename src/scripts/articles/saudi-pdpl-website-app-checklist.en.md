---
title: Saudi PDPL for websites and apps: an engineering checklist
summary: What Saudi Arabia's data protection law asks of your website or app: consent, minimal data, access logs, 72-hour breach notice and hosting.
tag: Web Development
tags: PDPL, data protection, privacy, data residency, SDAIA, Saudi Arabia
order: 62
media: https://images.unsplash.com/photo-1552512556-37ac2c074743
alt: A woman in a headscarf looks down at the smartphone in her hands
caption: Under Saudi PDPL, privacy is built in code: consent records, minimal data, access logs and a 72-hour breach process.
stats: 72|hours to notify SDAIA of a personal data breach; SAR 5m|maximum fine, can double for repeat offences; 48|formal violation decisions issued by SDAIA committees
---

Saudi Arabia's Personal Data Protection Law (PDPL) has applied in full since 14 September 2024, and it reaches businesses abroad that serve people in the Kingdom, not only Saudi companies. For a website or app, compliance comes down to things the system must actually do: tell people what you collect, record their consent, keep only what you need, log who sees it, report breaches to SDAIA within 72 hours and control where the data goes. This guide turns those duties into an engineering checklist. It is general information, not legal advice.

Last checked: 6 November 2026

## What the law is and who it covers

The PDPL was issued by Royal Decree M/19 in September 2021 and amended by Royal Decree M/148 in March 2023. It came into force on 14 September 2023, with a one-year grace period that ended on 14 September 2024. The regulator is the Saudi Data and AI Authority (SDAIA).

Three points matter most for a business owner:

- **It reaches foreign providers.** The law applies to providers outside the Kingdom that serve individuals in Saudi Arabia, so building or hosting your platform abroad does not take it out of scope.
- **It is enforced.** SDAIA committees have already issued 48 formal violation decisions.
- **The penalties are serious.** Fines go up to SAR 5 million, and a court can double them for repeat offences. Disclosing sensitive data with intent to harm can bring up to two years in prison and/or a fine of up to SAR 3 million.

The law places most duties on the "controller": the business that decides why and how personal data is processed. If you run the website or app, that is usually you, not your developer or your hosting company. Your developer's job is to build a system that lets you meet those duties.

## The checklist at a glance

| Area | What the system should do | Why it matters |
|---|---|---|
| Privacy notice | Explain in Arabic and English what you collect, why, who receives it and how to contact you | People should know what they agree to before they hand data over |
| Consent records | Store who agreed to what, when, and to which version of the notice | You can prove consent later instead of assuming it |
| Minimal data | Collect only the fields you actually use | Less data means less to protect and less to lose |
| Access control | Give each staff role only the data it needs | Limits the damage from one leaked password |
| Access logs | Record who viewed, changed, exported or deleted personal data | You can investigate an incident and answer questions |
| Breach process | A written plan to assess an incident and notify SDAIA within 72 hours | The clock is short, so the plan must exist before the incident |
| Transfers abroad | A list of every outside service that receives data and where it stores it | Transfers need an adequate country or appropriate safeguards |
| Registration | Check whether you must register on the National Data Governance Platform | In practice this covers most controllers |

## Collecting data: notice, consent and less of it

Most personal data enters through forms (sign-up, checkout, booking, contact), so start there.

- **Write a privacy notice people can read.** Plain Arabic and English, on its own page, linked from every form that collects personal data, saying what you collect, why, which outside services receive it, how long you keep it and how to reach you.
- **Version the notice.** Each time you change it, keep the old text with a date, because a consent record is only useful if you can show what the person saw.
- **Record consent as data, not as a ticked box.** Store the user or contact ID, what they agreed to, the notice version, the date and time, and the channel (website, app or WhatsApp).
- **Keep purposes apart.** Consent to marketing messages should be separate from the data you need to deliver an order or a booking.
- **Make withdrawal as easy as agreeing.** An unsubscribe link or an account setting that updates the same consent record.
- **Cut the fields you do not use.** A national ID number or date of birth collected "just in case" is data you must protect, explain and eventually delete.
- **Give health, financial and identity data extra care.** These are the categories where a leak does the most harm.

In a clinic system, for example, patient records should be visible to far fewer people than the calendar; see our guide to [clinic management software](/blog/clinic-management-system-egypt).

## Inside the system: access, logs and deletion

The rest of the checklist lives in the admin dashboard and the database.

### Roles and permissions

Each staff member should log in with their own account, never a shared one, and see only what their job requires. A cashier needs a customer's name and order, a marketing assistant may need an email list but not order history, and very few people need an export of the whole customer base. Add two-factor login to every admin account.

### Access logs

Log who viewed, edited, exported or deleted personal records, with a timestamp and the record affected. Store the log where ordinary admins cannot edit it. Without it, you cannot tell after an incident whose data was seen, and by whom.

### Finding, exporting and deleting one person's data

Sooner or later a customer will ask what you hold about them, or ask you to correct or delete it. Build a way to find everything linked to one person (orders, messages, bookings and files), export it, correct it, and delete or anonymise it, including copies held in outside tools.

### Retention

Decide how long each type of data is kept and let the system enforce it, so old leads, abandoned carts and expired job applications do not sit in the database forever. Some records have legal retention periods, so confirm them with your adviser first.

## The 72-hour breach process

The PDPL requires personal data breaches to be notified to SDAIA within 72 hours. Draft amendments published in October 2026 would make that notice due regardless of the likely harm, so the safer engineering assumption is that any real breach will need a report.

Seventy-two hours is short once you count weekends. Prepare in advance:

1. **Detect.** Alerts on unusual logins, mass exports and repeated errors on admin pages.
2. **Contain.** Know how to revoke a leaked key, force password resets and take a feature offline.
3. **Assess.** Use the access logs to establish which data, how many people and since when.
4. **Decide and notify.** Name who decides, who writes the notice to SDAIA and who informs affected customers where needed.
5. **Record and fix.** Keep a written record of the incident, its cause and the change you made.

Name a person for each step, and make sure your developer's contract obliges them to report any incident they discover promptly.

## Sending data abroad and where to host

### What the current law says

Transfers outside the Kingdom are allowed to countries with an adequate level of protection, and otherwise with appropriate safeguards. In either case, only the minimum data needed should be sent. The updated Transfer Regulation dates from 1 August 2024, and SDAIA's guidelines on Binding Common Rules from 1 September 2024.

The main server is only one transfer. List every outside service that receives personal data: hosting, database, backups, email, SMS, WhatsApp, analytics, live chat, the payment gateway and error tracking. For each one, note what data it receives and the country where it is stored. That list feeds your adviser's assessment and your privacy notice.

### The draft that would require in-Kingdom storage

SDAIA put draft amendments to the PDPL out for public consultation on the Istitlaa platform from 6 October to 5 November 2026. The main proposals:

- A new Article 23 requiring controllers to store personal data inside the Kingdom, while still allowing transfers under the law.
- Mandatory registration for any controller that transfers data abroad.
- Breach notice within 72 hours regardless of the likely harm.

This is still a draft. If adopted, the changes would take effect 60 days after publication in the Official Gazette, and we could not confirm the outcome of the consultation when this page was checked. Do not tell customers that Saudi law already requires local storage, but keep the draft in mind when you choose hosting for a system you expect to run for years.

### Hosting options inside Saudi Arabia

- **Google Cloud Dammam (me-central2).** Customers based in Saudi Arabia buy access through CNTXT; customers elsewhere need invoiced billing.
- **AWS.** Amazon says its first Saudi region is "on track to launch in December 2026", so check whether it has launched before you plan around it.

The National Cybersecurity Authority's Essential Cybersecurity Controls (ECC-2:2024) bind government agencies and critical-infrastructure operators; others are only encouraged to follow them. The 2024 version dropped the old in-Kingdom hosting control and referred data localisation to SDAIA's National Data Management Office.

## Registration, contracts and who does what

**Registration.** Certain controllers must register on SDAIA's National Data Governance Platform, and in practice that means most controllers. A data protection officer is required in specified cases. Ask your adviser which applies to you: registration is a business task, not a coding one.

**Contracts with your developer and suppliers.** Whoever builds or runs your system will often see personal data. For government and critical-infrastructure entities, ECC control 4-1-2 sets the minimum clauses: non-disclosure, secure removal of your data when the service ends, a procedure for reporting cybersecurity incidents, and an obligation to apply your security requirements. They are sensible for any business. Our article on [what to check in a software development contract](/blog/software-development-contract-what-to-check) covers the rest, and [how to choose a software company in Saudi Arabia](/blog/choose-software-company-saudi-arabia) lists the questions to ask before you sign.

**What KF does here.** KF Tech Solutions builds websites, apps and [custom software](/services/custom-software), and we work with businesses in Egypt and the Gulf. On a system that handles personal data, we can build this checklist into the product: versioned privacy notices, consent records, role-based access, access logs, export and deletion tools, and a written list of every service that receives data and where it is hosted. We are not lawyers and we do not certify compliance. Your adviser confirms what the law requires of your business, and we build to it. See our [Saudi Arabia page](/saudi-arabia), and our guide to [app development costs in Saudi Arabia](/blog/app-development-cost-saudi-arabia) if you are budgeting a new app.

## Common questions

### Does the PDPL apply if my company or developer is outside Saudi Arabia?

It can. The law applies to foreign providers that serve individuals in the Kingdom. What matters is whose data you process, not where your servers or your developer are.

### Do I have to host personal data inside Saudi Arabia?

Not under the law as summarised in the sources we checked, which allow transfers abroad to adequate countries or with appropriate safeguards. A draft amendment would require storage inside the Kingdom, but it is still a draft. Government and critical-infrastructure projects may have their own requirements, so check yours with your adviser.

### Do I need to register with SDAIA?

Certain controllers must register on the National Data Governance Platform, and in practice that covers most of them. The draft amendments would make registration mandatory for any controller that transfers data abroad. Your adviser can confirm your case.

### Can my developer give me a PDPL certificate?

We have not found any official PDPL certification for software vendors. Ask how they build consent records, logs and deletion instead. Whether your business complies is a question for you and your adviser.

If you want your website or app checked against this list, or built with it from the start, [send us the details](/contact) or [book a free call](/book).

## Sources

- [DLA Piper: Data protection laws of the world, Saudi Arabia](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [Securiti: Saudi Arabia guidelines for Binding Common Rules](https://securiti.ai/saudi-arabia-guidelines-for-binding-common-rules-bcr-for-personal-data-transfer/)
- [Chambers TMT 2026: Saudi Arabia, trends and developments](https://chambers.com/practice-guides/guides/tmt-2026/saudi-arabia/trends-and-developments)
- [Clyde & Co: SDAIA publishes draft amendments to the PDPL](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [National Cybersecurity Authority: Essential Cybersecurity Controls (ECC-2:2024)](https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf)
- [Google Cloud: Dammam region access](https://docs.cloud.google.com/docs/dammam-region-access)
- [Amazon: AWS cloud region in Saudi Arabia](https://www.aboutamazon.com/news/aws/aws-cloud-region-saudi-arabia)
