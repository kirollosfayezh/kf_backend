---
title: Egypt's data protection law: what your app must do
summary: A practical checklist for apps under Egypt's Law 151 of 2020: consent records, user rights, security, breach reports and the PDPC licence or permit.
tag: Business Systems
tags: data protection, Law 151 of 2020, PDPC, app compliance, privacy, Egypt
order: 95
stats: 151|of 2020: the number of Egypt's Personal Data Protection Law; 72|hours to report a personal data breach to the PDPC; 3|working days to tell the affected people after the report
---

Egypt's Personal Data Protection Law No. 151 of 2020 applies to any business that collects, stores or processes personal data electronically, and its executive regulations have now been issued. In practice, your app needs recorded consent, a clear purpose and retention period for each kind of data, a way for users to exercise their rights, real security, a 72-hour breach procedure, and a licence or permit from the Personal Data Protection Center (PDPC). This guide turns those duties into a checklist your developers can build against.

Last checked: 6 November 2026

This is general information, not legal advice. Use it to prepare for a conversation with your lawyer, not to replace one.

## What the law covers and where it stands now

The law regulates personal data: any data that identifies a natural person directly or indirectly, such as a name, a voice, a photo, an identification number or an online identifier. "Processing" is defined broadly. Collecting, recording, storing, displaying, sending, analysing, changing and deleting data all count, whether the work is done fully or partly by electronic means.

For years the law had no executive regulations. That has changed. The PDPC's own site states that the executive regulations have been issued and that the focus has turned to practical implementation. The Center now runs an online portal where organisations apply for permits and licences and register their data protection officers.

The core principles are short and worth putting on the wall of any product team:

- Collect data only for a lawful, specific purpose that you have told the person about.
- Keep the data accurate and secure.
- Process it in a way that suits the purpose it was collected for.
- Do not keep it longer than that purpose needs.

## Controller or processor: work out your role first

The law splits responsibility between two roles, and your duties depend on which one you hold.

| Role | Who it usually is | Main duties |
|---|---|---|
| Controller | The business that decides why and how data is used, such as a clinic, a shop or an app owner | Consent, purpose, retention, user rights, records, licence or permit |
| Processor | A company that handles data on the controller's behalf, such as a hosting or software provider | Follow written instructions, secure the data, keep a processing record, licence or permit |

Most app owners are controllers. A software company that hosts and runs the system for you may be a processor, and the law expects a processor to act on written instructions. If you are commissioning an app, put data protection duties into the development and support contract; our guide to [what to check in a software development contract](/blog/software-development-contract-what-to-check) covers the other clauses.

The law also says that a controller or processor based outside Egypt must appoint a representative in Egypt, in the way the executive regulations set out. This matters to Gulf and foreign companies that serve Egyptian users or run part of their operation in Egypt. Ask your lawyer how it applies to your structure.

## The PDPC licence or permit

Under the law, controllers and processors must obtain a licence or permit from the PDPC to deal with personal data. The PDPC portal currently offers two main routes:

- **Permit or licence for a legal entity**, for companies.
- **Permit for a liberal profession**, for individual professionals such as independent doctors, lawyers or consultants.

The liberal-profession route on the portal shows the kind of preparation involved. The applicant verifies their Tax Registration Number with the Egyptian Tax Authority, answers a compliance questionnaire that "determines your obligations" under the law, uploads documents digitally signed through ITIDA (including a criminal record certificate, a declaration of accuracy and a compliance checklist), and pays the fees. The portal says requests may take one to two weeks to review.

The questionnaire is the useful first step for most businesses. Your answers depend on what data the app collects and why, which is exactly the inventory described in the next section.

The portal also has services to appoint, replace and certify a **data protection officer (DPO)**, and to notify the Center when a DPO leaves. Decide early who will hold that role; the law expects the DPO's details in breach reports and in a processor's processing record.

## The engineering checklist

These features turn the law's duties into working software. Build them in from the start; retrofitting a live app is slower and riskier.

### A data inventory

List every field the app collects, which screen collects it, why, where it is stored, who can see it and how long you keep it. This list feeds the PDPC questionnaire, your privacy notice and the record the law requires you to keep. If a field has no clear purpose, remove it.

### Consent that you can prove

- Show the purpose in plain language at the point of collection, in Arabic and English if your users need both.
- Record each consent with the date, the version of the text shown and how it was given.
- Ask again before you use the data for a new purpose.
- Let users withdraw consent as easily as they gave it, and make the app respect the withdrawal.

Data a person gives in order to receive a lawful service counts as consent for that purpose, but not for anything else. A booking app may use a phone number to confirm the booking; it may not reuse it for promotions without separate consent.

### Sensitive data and children

The law gives extra protection to sensitive data, which includes health, genetic, biometric and financial data, religious beliefs, political views, criminal records, and all data about children. Handling it requires a PDPC licence and, unless the law provides otherwise, the person's explicit written consent; for children, the legal guardian's consent. Clinics, labs, pharmacies, schools and fintech apps sit squarely here. If you run a medical business, see our notes on [clinic management software in Egypt](/blog/clinic-management-system-egypt) and on [telemedicine platforms](/blog/telemedicine-platform-egypt).

### User rights built into the product

The law gives each person the right to know what data you hold about them and to get access to it, to withdraw consent, to have it corrected, updated or erased, to limit processing to a specified purpose, to object to it in some cases, and to be told about a breach. Give these requests a home:

- A profile screen where users can see and correct their own data.
- A request flow for access, deletion and objection, with a reference number and a deadline you track.
- An admin screen where staff can find everything held about one person, export it and delete it.

### Retention and deletion

Set a retention period for each category of data, and make the system act on it. When the purpose ends, the law expects the data to be erased, or kept only in a form that no longer identifies the person. Scheduled jobs that delete or anonymise old records beat manual clean-ups and leave a log you can show.

### Security and access control

The law requires the technical and organisational measures needed to keep data confidential and protected from tampering, loss and unlawful access. In an app that usually means:

- Encrypted connections everywhere and encryption of sensitive data at rest.
- Roles and permissions, so a receptionist does not see what a doctor sees and a cashier does not see payroll.
- An audit log of who viewed, exported, changed or deleted personal data.
- Strong admin login, ideally with two-step verification.
- Tested backups, and a clear owner for server and dependency updates.

Payroll and HR data is a common blind spot; our guide to [HR, attendance and payroll software in Egypt](/blog/hr-attendance-payroll-software-egypt) covers that side.

### Marketing messages

If the app sends promotional SMS, email or WhatsApp messages, get specific consent for marketing, identify who is sending, and give a simple way to opt out that the system honours at once. Keep marketing consent separate from service messages such as booking confirmations.

## Breach response: the 72-hour rule

When a controller or processor learns of a personal data breach, the law requires a report to the PDPC within 72 hours, and immediately if the breach touches national security. The report covers what happened, the approximate number of records affected, the DPO's details, the likely effects and the steps taken to contain it. The affected people must then be told within three working days of the report.

You cannot meet that deadline by improvising. Prepare a short breach plan before launch:

1. Decide who can declare an incident and who contacts the PDPC.
2. Make sure logs and alerts show what was accessed and when.
3. Keep a report template with the fields the law asks for.
4. Prepare the message to users in Arabic and English.
5. Record every incident and the fix, even small ones.

## Data that leaves Egypt

The law restricts transfers of personal data outside Egypt. As a rule, the destination's level of protection must not be lower than Egypt's, and you need a licence or permit from the PDPC. The law allows narrow exceptions, such as medical care, only with the person's explicit consent. Your processing record should also describe any cross-border transfers.

For an app this is often a hosting question. If your servers, email service, analytics or chatbot provider sit outside Egypt, personal data may be leaving the country. Map each third-party service in your data inventory, note where it stores data, and raise the list with your lawyer and the PDPC questionnaire. Gulf companies that hire an Egyptian team should also map the opposite direction: which data the team in Egypt can reach, and under what contract.

## Where we fit in

KF Tech Solutions builds custom software, web and mobile apps, and clinic and business systems. Through our [custom software development service](/services/custom-software), we build the technical side of this checklist into the product: the data inventory, consent records, roles and permissions, audit logs, user-rights screens, retention jobs and breach logging. We do not give legal advice or file PDPC applications, so we work alongside your lawyer and your DPO. We work with businesses in Egypt and the Gulf.

## Common questions

### Does the law apply to a small business or a startup?

The law applies to anyone who processes personal data electronically, and the PDPC portal offers routes for both companies and individual professionals. A licence goes to legal entities, a permit can also go to individuals, and sensitive data needs a licence, so take the PDPC questionnaire and confirm the result with a lawyer.

### Is a privacy policy page enough?

No. A policy describes what you do; the law expects you to be able to prove it. That means consent records, a processing record, working user-rights requests, security controls and a breach procedure.

### Who should be the data protection officer?

Someone who understands both your operations and the law, with the authority to get things fixed. The PDPC portal handles DPO appointment, replacement and certification, so check its requirements before you choose.

### Can we host our app outside Egypt?

Possibly, but storing personal data abroad can count as a cross-border transfer, which the law restricts and links to a PDPC licence or permit. Confirm your hosting plan with your lawyer before launch.

### We already have an app. Where do we start?

Start with the data inventory. It shows what you hold, where it goes and which gaps matter most, and it is what the PDPC questionnaire asks about. Consent records, deletion and access controls usually follow.

If you are planning a new app or need an existing one brought in line with Law 151/2020, [tell us what it does](/contact) or [book a free call](/book), and we will go through the technical gaps with you.

## Sources

- [Personal Data Protection Center (PDPC), Egypt](https://pdpc.gov.eg/home)
- [Egyptian Tax Authority](https://www.eta.gov.eg)
- [Information Technology Industry Development Agency (ITIDA)](https://itida.gov.eg)
