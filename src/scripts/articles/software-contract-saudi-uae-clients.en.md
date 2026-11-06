---
title: Software contracts for Saudi and UAE clients: extra clauses
summary: What a Saudi or UAE deal adds to a standard software contract: data terms, IP assignment, VAT and withholding wording, Arabic text and governing law.
tag: Business Systems
tags: software contract, IP assignment, withholding tax, VAT, Saudi Arabia, UAE, GCC
order: 48
media: https://images.unsplash.com/photo-1681505504714-4ded1bc247e7
alt: A man in a white thobe and red shemagh signs a document beside a colleague in a suit
caption: A Saudi or UAE deal needs a few clauses a standard contract leaves out: data removal, IP assignment and tax wording.
stats: 5|clause areas a Saudi or UAE deal adds; 5%|Saudi withholding tax that can apply to technical services; 1|language version that should prevail
---

A software contract with a business in Saudi Arabia or the UAE needs everything a normal contract has, plus five additions: data terms modelled on Saudi Arabia's cybersecurity controls, an explicit assignment of the code and IP, wording for reverse-charge VAT and Saudi withholding tax, an Arabic version with a clause saying which text prevails, and a named governing law and forum. None of these is unusual, but each one turns into a dispute when it is missing. This is general information, not legal or tax advice, so have a lawyer review the final text before anyone signs.

Last checked: 6 November 2026

This article does not repeat the basics. Ownership of the code, payment default, third-party licences, handover, acceptance, warranty, termination and key personnel are covered in [nine things to check in a software development contract](/blog/software-development-contract-what-to-check). If you are still choosing the supplier, read [how to choose a software company without being a technical person](/blog/how-to-choose-a-software-company) first.

What follows are the clauses that a Saudi or UAE client, or a supplier working for one, should add on top. They matter most when the supplier is abroad, for example a team in Egypt working remotely, which is the situation covered in [hiring an Egyptian software company from the Gulf](/blog/hire-egyptian-software-company-from-gulf).

## Data: confidentiality, deletion and incident notice

Saudi Arabia's National Cybersecurity Authority (NCA) publishes the Essential Cybersecurity Controls (ECC). Control 4-1-2 lists what a contract with an outside party should contain, and three items are directly useful in a software deal:

- **A non-disclosure agreement** that covers your business data, your customers' data and anything the supplier sees in your systems.
- **Return or secure deletion of your data** when the service ends, with written confirmation that it was done.
- **An incident-notification procedure**: how quickly the supplier tells you about a breach or suspected breach, who it tells, and what information it provides.

Strictly, these duties sit with government bodies and critical infrastructure operators, not with every private company. They are still a sensible baseline for any client, and a supplier who refuses them is telling you something.

Personal data adds a second layer. Saudi Arabia's Personal Data Protection Law (PDPL) has been fully enforceable since 14 September 2024. Draft amendments, including storage inside the Kingdom, were open for public consultation from 6 October to 5 November 2026, and the outcome is not yet known, so do not treat in-Kingdom storage as law today. The UAE's federal data protection law (Federal Decree-Law 45 of 2021) is in force, but its executive regulations have not been issued. The DIFC and ADGM free zones have their own data protection laws.

For the contract, the practical points are simple:

- State where the system and its database will be hosted.
- Name who at the supplier can access real customer data, and from where.
- Agree that development and testing use sample data unless real data is genuinely needed.
- Require the supplier to follow your written instructions on personal data.

## Intellectual property and source code

Do not assume you own the code because you paid for it. The UAE's copyright law (Federal Decree-Law 38 of 2021) protects software, and it makes an employer the owner of work its employees create as part of their job, unless agreed otherwise. That rule is about employees. An outside company or freelancer is not your employee, so the transfer has to be written into the contract.

A clear IP clause covers:

- **Assignment** of all rights in the custom code, designs, database structure and documentation to the client, usually on full payment.
- **Source code delivery**: the full repository, build instructions and credentials, not only a running app.
- **Third-party and open-source components**, which are licensed to you rather than assigned, with the licences listed.
- **The supplier's existing tools and libraries**, if any are reused, with a permanent licence for you to use them inside your system.
- **Accounts in your name**: code repository, hosting, domain and app-store developer accounts, with the supplier added as a user.

## VAT and withholding tax wording

This section is general information, not tax advice; confirm your position with your accountant.

**VAT.** Saudi VAT is 15% and UAE VAT is 5%. When a VAT-registered business in either country buys services from a supplier abroad, it normally accounts for the VAT itself under the reverse charge, so the foreign supplier's invoice carries no Saudi or UAE VAT. The contract should say that prices exclude VAT and that the client accounts for any VAT due under the reverse charge. If the supplier is registered in your country, the wording is different, so tell your adviser where the supplier is based.

**Saudi withholding tax.** A payment to a supplier abroad for technical services may be subject to 5% withholding tax. The Saudi client deducts it from the payment and pays it to ZATCA, and the supplier receives the rest. The rate depends on how each payment is classified (ZATCA's guideline lists royalties at 15%, for example), and a software project can mix several kinds of work, so ask your adviser to classify it before signing.

Then settle who carries the cost. There are two options:

| Wording | Invoice | Withholding at 5% | Supplier receives |
|---|---|---|---|
| Price is gross, tax comes out of it | $10,000 | $500 | $9,500 |
| Price is net, client grosses up | $10,526.32 | $526.32 | $10,000 |

The second option is a **gross-up clause**. Either is acceptable; the problem is a contract that says nothing, because then one side ends up short by the amount withheld. Add a line that the client sends proof of each withholding payment, so the supplier can keep its records straight.

If you also need tax invoices in a specific electronic format, see [GCC e-invoicing by country](/blog/gcc-e-invoicing-by-country) and agree in the contract who is responsible for that work.

## Arabic text and which version prevails

A contract drafted only in English can be hard for an Arabic-speaking team to work from, so an Arabic text is often worth adding. If you sign in both languages, the contract must say which version prevails when they differ. Two texts that are "equally authentic" with no tie-breaker leave the meaning open in exactly the situation where you need it settled.

Practical points:

- Sign both versions side by side, in the same document, rather than translating later.
- Keep defined terms consistent: "acceptance", "deliverable" and "source code" should translate the same way every time.
- Decide whether the technical schedules, such as the scope and acceptance tests, are translated too, or stay in one language by agreement.
- Ask your lawyer whether an Arabic version is needed for any authority or court that might see the contract.

## Governing law and where disputes go

A contract between a client in Riyadh or Dubai and a supplier in another country has to name one governing law and one place for disputes. If it does not, the first argument is about which court can hear the second one.

The clause should cover:

1. **Governing law**: one named country's law. If your company is in a free zone such as DIFC or ADGM, tell your lawyer, because those zones have their own rules.
2. **Forum**: a named court, or arbitration with a named institution, seat and language.
3. **An escalation step first**: a meeting between the decision-makers within a fixed number of days before anyone files anything.
4. **Language of proceedings**, which should match the prevailing contract language.

Which law and forum suit you depends on where each side has assets and how a judgment would be enforced. That is a question for your lawyer, not your supplier.

## The extra clauses at a glance

| Clause | What to write | Why it matters |
|---|---|---|
| Confidentiality | NDA covering your data and your customers' data | The supplier sees your systems |
| Data at the end | Return or secure deletion, confirmed in writing | Copies outlive the project |
| Incidents | Notice deadline, contact, information provided | You learn about a breach from the supplier, not the news |
| IP and code | Full assignment on payment, repository delivered | Contractors are not employees |
| VAT | Prices exclude VAT; reverse charge where it applies | A foreign supplier's invoice normally carries no local VAT |
| Withholding | Gross or net of withholding, proof of payment | Avoids a shortfall on each payment |
| Language | Which version prevails | Two texts can disagree |
| Law and forum | One law, one forum, escalation first | Avoids a fight about where to fight |

## What KF Tech Solutions does here

KF Tech Solutions is a software studio in Cairo, founded in 2020. We work with businesses in Egypt and the Gulf, remotely, and build [custom software](/services/custom-software), websites, web and mobile apps, POS, ERP and inventory systems, WhatsApp chatbots and AI automation. You get a fixed written quote after a free call. Our contracts can include an NDA, return or secure deletion of your data at the end of the contract, an incident-notification procedure, and full source-code and IP assignment; your lawyer should review the final text. More on how we work with clients in the region is on our [Gulf page](/gulf).

## Common questions

### Do I need all of these for a small project?

The IP assignment, the VAT and withholding wording and the governing law clause cost nothing to add and matter at any size. The data clauses can be shorter if the supplier never touches real customer data.

### Do the NCA controls apply to my private company?

The ECC duties sit with government bodies and critical infrastructure operators. A private company is not bound by them in the same way, but the three contract items are a reasonable standard to ask for anyway.

### Who pays the Saudi withholding tax?

The client withholds it and pays it to ZATCA. Whether it comes out of the supplier's price or is added on top is a commercial choice, and the contract should state it.

### Do I own the code if the contract is silent?

Do not rely on that. The UAE employer rule covers employees, not outside companies, so write the assignment of code and IP into the contract.

### Can we sign in English only?

That is a decision for your lawyer. If you add an Arabic version later, add the prevailing-language clause at the same time.

If you want to go through a draft contract and the scope behind it, [book a free call](/book) or [send us a message](/contact).

## Sources

- [NCA: Essential Cybersecurity Controls (ECC-2:2024)](https://cdn.nca.gov.sa/api/files/public/upload/86e09090-44e4-481f-bc28-355673607654_ECC--2024-EN.pdf)
- [Morgan Lewis: UAE copyright law](https://www.morganlewis.com/blogs/sourcingatmorganlewis/2022/10/protecting-online-data-and-ip-new-copyright-law-provides-clarity-for-uae-businesses)
- [ZATCA: imports and exports under VAT, guideline](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-on-Imports-and-Exports-under-VAT-Provision.pdf)
- [ZATCA: withholding tax guideline](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/General-Guideline-for-Withholding-Tax-In-accordance-with-the-provisions-of-the-Income-Tax-Law-and-its-Implementing-Regulations.pdf)
- [UAE Federal Tax Authority: e-commerce VAT guide](https://tax.gov.ae/DataFolder/Files/Pdf/E-Commerce%20-%20VAT%20Guide%20-%20EN%20-%2009%2008%202020.pdf)
