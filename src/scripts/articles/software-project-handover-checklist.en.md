---
title: What you should own when a software project ends
summary: A handover checklist for business owners: the code, accounts, app store listings, passwords, documents and backups to hold before the final payment.
tag: Business Systems
tags: software handover, source code, App Store, Google Play, documentation, Egypt, GCC
order: 75
media: https://images.unsplash.com/photo-1733244766159-f58f4184fd38
alt: A hand holds a set of house keys on a ring in front of an open white door
caption: A finished project should hand you every key: the code, the cloud and domain accounts, the store listings and the backups.
stats: 4|accounts to hold in your own name: code, cloud, domain, app stores; 2|app stores that let a developer move an app to your account; 1|test that proves the handover: a clean rebuild
---

When a software project ends, you should own the full source code in a repository under your account, every account the system runs on (cloud, domain, email, app stores, payment services), the passwords to all of them, written documentation and a recent backup of your data. If any of these sits only in your developer's name, you do not fully control the software you paid for. Collect them before the final payment, not after.

Last checked: 6 November 2026

A contract tells you what you are entitled to. This checklist covers what you should actually receive. If you are still at the contract stage, read [nine things to check in a software development contract](/blog/software-development-contract-what-to-check) first.

## What "source code delivered" should mean

"We will deliver the source code" sounds clear, but it is often met with a zip file sent by email on the last day. That is not enough. Source code is delivered when:

- **It sits in a Git repository you own**, on GitHub, GitLab or Bitbucket, with its full history, not a single snapshot.
- **It is complete.** It includes the backend, website, admin panel, mobile apps and any scripts, not only the part you can see.
- **It builds.** Someone who has never seen the project can follow the instructions and produce a working copy.
- **Nothing it depends on is missing**: configuration templates, database migrations and a list of every outside service it calls.
- **Secrets are not inside it.** Passwords and API keys belong in a separate, documented place, not typed into the code files.

On GitHub, a developer can transfer a repository to your account or organisation, and issues, pull requests and the full commit history move with it. Links to the old location redirect to the new one. That is the cleanest way to receive code that was started in the developer's account.

## The accounts that must be in your name

Most handover problems are not about code. They are about accounts the developer opened "to save time" and never moved. A year later the developer is unreachable, the domain expires and nobody can renew it.

| Asset | Whose name it should be in | What goes wrong if it is not |
| --- | --- | --- |
| Code repository | Your company's account or organisation | You cannot hire anyone else to change the software |
| Domain name | Your company, with your email as contact | The site and company email stop when it expires |
| Hosting and cloud | Your account, your billing card | Servers can be shut down or held during a dispute |
| Database and file storage | Inside your cloud account | Your customer data sits with a third party |
| Business email and DNS | Your account | You lose email and cannot point the domain elsewhere |
| App Store and Google Play | Your company's developer accounts | The app cannot be updated without the developer |
| Payment gateway, SMS, WhatsApp, maps | Your company, your contracts | Payments or messages stop, or money lands in the wrong account |
| Analytics and Search Console | Your account, developer added as a user | You lose your traffic history |

The pattern is the same for every row: you own the account, and the developer is added as a user whose access you can remove. If they need the owner role to set something up, it comes back to you as soon as the work is done.

## App Store and Google Play: publish under your own account

Mobile apps are the asset most often left in the developer's name, because publishing under your own company takes paperwork. Do it anyway. The developer account is the seller name customers see, and it holds the reviews and ratings.

To open an organisation account, both stores ask for a D-U-N-S number, a free nine-digit identifier issued by Dun & Bradstreet, plus a company website and contact details. Apple also requires that the person enrolling has authority to sign for the company, and charges 99 US dollars per membership year. Start early, because verification is not instant.

If the app is already live under the developer's account, it can be moved. Apple lets the account holder transfer an app to another account; it keeps its reviews, ratings and bundle ID, and users keep getting updates. Google Play also supports app transfers: users, ratings, reviews and the store listing move once the receiving owner approves. Some items stay behind, such as past sales reports, and linked services like Firebase need separate changes. Ask your developer to complete the transfer before the final payment.

## Passwords, keys and documentation

Credentials and documentation are what let the next person continue the work. Ask for:

- **A credentials list** in a password manager shared with you, covering every account, server and service, and who has access to each.
- **API keys you can rotate**, meaning you know where each key is used and how to replace it.
- **Signing keys for mobile apps**, or written confirmation that the store manages app signing and the upload key is yours.
- **A short technical document**: what the system is made of, where it runs, how to install it, how to release an update and which outside services it uses.
- **An admin guide** in plain language for the people who run the system day to day.
- **A list of known issues** and anything left unfinished, so it does not surprise you later.

Documentation does not need to be long. A clear ten-page document that is kept current is worth more than a hundred pages written once and never updated.

## Data and backups

Your data is often worth more than the code. Before the handover, confirm that:

- Backups run automatically, and you know how often and where they are kept.
- A backup has been restored at least once to prove it works.
- You can export your data, such as customers, orders and invoices, in a common format like CSV.
- Backups are stored in your account, not only on the developer's machine.

## How to check the handover yourself

You do not need to read code to check a handover. Ask a second developer to do one test: start from your repository and documentation only, build the system on a fresh server and log in. If that works, the handover is real. If they need to call the original developer, something is missing.

Then log in to every account in the table above yourself, with your own email, and check that you are the owner. Change the passwords that were shared during the project, and remove access for people who no longer need it.

Handovers fail for the same reasons projects fail: vague scope, no written record and no checkpoints. [Why software projects fail, and the five checks that prevent it](/blog/why-software-projects-fail) covers those checks. After the handover, a [software maintenance plan](/blog/software-maintenance-plan) keeps the system updated and the backups tested.

## Where KF Tech Solutions fits

KF Tech Solutions builds [custom software](/services/custom-software), websites, and web and mobile apps for businesses in Egypt and the Gulf. On a new project, we can open the accounts in your company's name from the first week, so there is nothing to move at the end. If you are taking over a system from another vendor, we can go through what you received against this checklist on a free call.

## Common questions

### Is it normal for the developer to keep the source code?

Some vendors license a ready-made product instead of handing over code, which can be fair if the price reflects it and the contract says so. For software built specifically for you, expect to own the code. Agree this in writing before work starts; [how to choose a software company](/blog/how-to-choose-a-software-company) covers what to ask.

### Can I move my app from the developer's account to mine?

In most cases, yes. Both Apple and Google Play support transferring an app between developer accounts, keeping its ratings and reviews. The developer starts the transfer and you accept it in your own account.

### Do I need a company to publish an app under my own name?

You can publish as an individual, but then your personal name appears as the seller. An organisation account shows your company name, and both stores ask for a D-U-N-S number to open one.

### What if my developer refuses to hand over access?

First check what the contract says about ownership and delivery. Domain, hosting and app accounts may be recoverable through each provider's support if you can prove the business is yours, but it is slow and not guaranteed. This is general information, not legal advice; for a dispute, speak to a lawyer. Prevention is far easier, which is why the accounts should be yours from the start.

### When should the handover happen?

Before the final payment. Tie the last milestone to receiving the repository, the accounts and the documentation, and to a successful rebuild test. A clear [software project brief](/blog/software-project-brief) can list these deliverables from day one.

If you want a second opinion on what you have received, or want to start a project with everything in your name, [book a free call](/book) or [send us a message](/contact).

## Sources

- [Apple Developer: Overview of app transfer](https://developer.apple.com/help/app-store-connect/transfer-an-app/overview-of-app-transfer/)
- [Apple Developer Program: Enrollment](https://developer.apple.com/programs/enroll/)
- [Google Play Console Help: Transfer apps to a different developer account](https://support.google.com/googleplay/android-developer/answer/6230247)
- [Google Play Console Help: D-U-N-S number requirement](https://support.google.com/googleplay/android-developer/answer/13628312)
- [GitHub Docs: Transferring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository)
