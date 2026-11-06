---
title: Building a telemedicine platform in Egypt
summary: What an online consultation platform in Egypt needs: booking, video sessions, payments, practitioner checks and careful handling of health data.
tag: Mobile
tags: telemedicine, online consultations, healthcare app, video sessions, patient data, Egypt
order: 72
media: https://images.unsplash.com/photo-1758691462743-f9fc9e430d39
alt: A doctor in a white coat holds a video consultation with a patient on a laptop in her office
caption: A video session is the visible part; booking, payment, practitioner checks and health-data privacy carry the platform.
stats: 4|parts every online consultation needs: booking, video, payment, notes; 2|permit routes on the PDPC portal: legal entity or liberal profession; 151|of 2020: the number of Egypt's personal data protection law
---

A telemedicine platform in Egypt is four systems working as one: a booking calendar for each practitioner, a video session that holds up on mobile data, a payment flow that handles refunds and no-shows, and a patient record that only the right people can open. The video is usually the easy part. Most of the work sits in practitioner checks, scheduling rules and the protection of health data, which Egypt's Personal Data Protection Law No. 151 of 2020 and its executive regulations now govern.

Last checked: 6 November 2026

## Start with the consultation, not the app

Before choosing features, write down how one consultation runs from start to finish. Who books it? Is it a first visit or a follow-up? Does the practitioner need earlier notes or lab results? What happens after the call: a prescription, a referral, a second session?

The answers decide what you build. Mental-health sessions are long and recurring; general consultations are short and need a way to refer the patient to a clinic.

| Part | First version | Can wait |
|---|---|---|
| Booking | Practitioner profiles, open slots, reminders | Waiting lists, packages of sessions |
| Video | In-app or browser calls, a fallback to audio | Group sessions, screen sharing |
| Payment | Pay before the session, automatic refunds | Wallet balance, subscriptions |
| Records | Session notes, files the patient uploads | Lab and pharmacy integrations |
| Admin | Approving practitioners, viewing bookings | Detailed reports, payouts per practitioner |

A first version with only the middle column is a real product. If you are testing demand, our guide to [starting small with an MVP](/blog/mobile-app-mvp-egypt) explains how to cut scope without cutting quality.

## Booking and the practitioner's calendar

Each practitioner sets their own working hours, session length and breaks, and the platform shows patients only the slots that are free. Build in the rules that cause trouble later: how far ahead a patient can book, how late they can cancel, and what happens when a practitioner falls ill and ten sessions need moving.

Reminders matter more than most features: send one at booking, one the day before and one shortly before the session. If the practitioner also sees patients in person, the online calendar and the clinic calendar must be the same calendar, or double bookings follow. Our article on [clinic management software in Egypt](/blog/clinic-management-system-egypt) covers the in-person side.

## Video sessions that work on Egyptian connections

Most platforms do not build video from scratch. They use WebRTC, the standard behind browser video calls, usually through a managed video provider. What you build around it matters more:

- A pre-call check of the camera, microphone and connection.
- An automatic drop to audio when the connection is weak, so the session continues.
- A waiting room, so the patient does not join while the practitioner is still with someone else.
- A session link that only works for that patient, at that time.
- No recording by default. If you ever record, ask for clear consent first and treat the file as part of the medical record.

Test on mid-range Android phones with mobile data, not only on office Wi-Fi. That is how most patients will join.

## Payments, refunds and no-shows

Patients usually pay before the session, by card or mobile wallet, and the platform confirms the booking only after the payment succeeds. Write the refund rules before the code: a full refund if the practitioner cancels, a partial one if the patient cancels late, none for a no-show, each applied automatically.

If practitioners are paid per session, the platform needs a clear record of what each one earned, minus the platform's share. Our comparison of [payment gateways in Egypt](/blog/payment-gateways-egypt) covers the local methods and what integrating each gateway takes.

## Checking practitioners before they go live

Patients trust the platform, not the individual profile, so every practitioner should be checked before their first session. Ask for their professional licence or syndicate registration, their speciality and their identity documents, and record who checked them and on what date. Set a reminder for documents that expire.

Keep the check inside the admin panel, not in an email thread, and give each practitioner access only to their own patients' records.

## Health data and Law 151/2020

Health information is among the most sensitive data a business can hold, and a telemedicine platform holds a lot of it. Egypt's Personal Data Protection Law No. 151 of 2020 regulates how personal data is collected, processed and stored, and the Ministry of Communications and Information Technology has said it requires those who collect and process data to obtain the necessary licences, permits and approvals.

The Personal Data Protection Center (PDPC) now runs a portal that offers a permit or licence for legal entities and a separate permit for liberal professions, with a questionnaire that determines your obligations under the law. Its site also states that the executive regulations of the law have been issued. A platform company and an independent doctor may therefore face different paperwork, so check your position early.

On the engineering side, plan for these from the first version:

- Consent screens that say plainly what you collect and why, with a stored record of each consent.
- Encryption in transit and at rest, and role-based access so staff see only what their job needs.
- An access log that shows who opened which record and when.
- A way to export or delete a patient's data on request.
- A written process for a data breach: who decides, who is told and how fast.

This is general information, not legal advice. Ask a lawyer which duties apply to your service, including any health-sector rules beyond the data law. Our sibling article on [Egypt's data protection law for apps](/blog/egypt-data-protection-law-apps) goes through the checklist in more detail.

## How KF Tech Solutions helps

We built Horus, a platform for a multi-branch mental-health clinic that connects patients with licensed therapists: patients find a doctor, book an online or in-person session and stay in touch for follow-up, and the clinic presents its branches, doctors and services from one site. It runs in production on Next.js and React. Through our [mobile app development service](/services/mobile-applications), we plan and build consultation platforms like this one, from the booking rules to the admin panel and the app itself.

## Common questions

### Do I need a mobile app, or is a website enough?

A web app that runs in the phone's browser is enough to start, and it lets you test demand at a lower cost. Native iOS and Android apps make sense once patients book regularly, because they make push reminders and a smooth video experience easier.

### Should we record video sessions?

Usually not. Recordings add risk and storage cost. If you do record, ask for clear consent first and protect the file like any other part of the medical record.

### How do we stop unqualified people from offering sessions?

Approve every practitioner manually before their profile goes live, keep their documents and the approval date in the admin panel, and remind your team before any document expires.

### Does Law 151/2020 apply to a small platform?

The law regulates personal data processing generally, and the PDPC portal offers permits for both companies and individual professionals. Use the PDPC's questionnaire and ask a lawyer to confirm what applies to your case.

Planning an online consultation service in Egypt? [Tell us how your consultations run](/contact) or [book a free call](/book), and we will help you decide what the first version needs.

## Sources

- [Personal Data Protection Center (PDPC), Egypt](https://pdpc.gov.eg/home)
- [MCIT press release on Law No. 151 of 2020](https://mcit.gov.eg/en/Media_Center/Press_Room/Press_Releases/63220)
