---
title: WhatsApp chatbot in Saudi Arabia: a guide for businesses
summary: How a WhatsApp bot handles orders, bookings and payment links in Arabic, what Meta charges per message in 2026, and what the PDPL means for it.
tag: AI
tags: WhatsApp, chatbot, WhatsApp Business API, customer service, AI, Saudi Arabia
order: 35
media: https://images.unsplash.com/photo-1646236419088-e8b41a963e1a
alt: A woman in a beige headscarf types on her phone on a city street at night
caption: Customers message at any hour and in their own dialect; the bot has to understand them and reply in clear Arabic.
stats: 24 h|customer service window after a customer's last message; 1,000|free service messages per business number each month; 72 h|to notify SDAIA of a personal-data breach
---

A WhatsApp chatbot lets a Saudi business answer order, booking and price questions in Arabic at any hour, and pass the chat to a person when it needs one. Build it on Meta's official WhatsApp Business Platform, get customers' permission before you message them, and budget for per-message fees, which changed again on 1 October 2026. Treat the customer data it collects under the Personal Data Protection Law (PDPL) from the first day.

Last checked: 6 November 2026

## What a bot does well for a Saudi business

The best first jobs are the questions your team already answers many times a day, with an answer that lives in a system or a fixed list.

- **Order status for online stores.** A customer sends an order number and gets the current status. On [Salla, Zid or Shopify](/blog/salla-vs-zid-vs-shopify), the bot reads it through the platform's API, where your plan allows it.
- **Clinic and salon bookings.** The bot shows free slots, confirms the appointment, sends a reminder the day before and offers a link to change or cancel.
- **Payment links.** For a booking deposit or an unpaid order, the bot sends a link created by your payment gateway. Gateways such as Tap list mada and Apple Pay among their methods, and the bot never sees card details. See our guide to [payment gateways in Saudi Arabia](/blog/payment-gateways-saudi-arabia).
- **Opening hours, branches and delivery areas**, including over the Friday–Saturday weekend, when nobody is at the desk.
- **Collecting details before a person takes over**: name, order number, the problem in one line, a photo.
- **Handover to staff** at any point, with the conversation so far attached.

What it should not do on its own: handle complaints, negotiate prices, give medical advice or approve refunds. A bot that tries usually loses the customer it was meant to keep.

## Arabic first: Gulf dialect in, clear Arabic out

Most customers write the way they speak. A message like «أبي أعرف وين طلبي» has to be understood as "where is my order?", and so does the same question with typos or English words mixed in. Keyword-only bots fail here; this is where an AI language model earns its place.

The replies are a different matter. They should be in clear, polite Arabic that every customer reads easily, with English for those who write in English. Saudi Arabia's National Arabic Language Policy, approved in 2026, encourages Arabic in business communications, although it is not a standalone enforcement instrument.

Three rules keep an Arabic bot reliable:

1. Prices, order statuses and dates come from your systems, never from text the AI model makes up. The model understands the question; your system supplies the answer.
2. Fixed messages such as greetings, templates and the handover line are written by a person and approved by a native Arabic speaker.
3. Testing uses real, anonymised messages from your own chat history.

## Use the official platform and follow its rules

There are three ways to put automation on WhatsApp:

| Route | What you get | The catch |
|---|---|---|
| WhatsApp Business app | Free greeting and away messages, quick replies, a catalogue | No real automation and no link to your systems |
| WhatsApp Business Platform (API) | Full automation, approved templates, connection to your store, bookings and payments | Per-message fees and Meta's policies |
| Unofficial tools that drive WhatsApp Web | Cheap and quick to set up | They break WhatsApp's terms, and the number can be restricted or banned |

If your number is printed on your shopfront and in every advert, only the official platform makes sense. You use it directly through Meta or through a provider, with a verified business account and a number registered for it.

Meta's WhatsApp Business Messaging Policy sets three rules the bot must be built around:

- **Opt-in first.** You may contact people only if they gave you their number and opted in to receive your messages. Meta recommends a separate opt-in for each message category, for example order updates and offers.
- **Respect opt-outs.** Every request to stop, made on WhatsApp or anywhere else, must be honoured. Tell customers how to stop each type of message.
- **A route to a person.** Automation is allowed in the 24-hour window, but there must be a prompt, clear and direct escalation path: a transfer to a human agent in the chat, a phone number, an email, a support form or a branch visit.

The 24-hour customer service window starts when the customer messages you. Outside it, you can only send templates that Meta has approved.

## What it costs to run in 2026

Meta has charged per message, not per conversation, since 1 July 2025. The price depends on the message category and on the country calling code of the recipient's number. Saudi Arabia (+966) is a market of its own on Meta's rate cards, so a message to a Saudi number and one to a UAE number can be billed at different rates.

| Message type | Who starts it | Example | How Meta charges from 1 October 2026 |
|---|---|---|---|
| Service | The customer writes; you reply within 24 hours | Answering "where is my order?" | First 1,000 per business number each month free, then per message |
| Utility | You, with an approved template | Shipping update, appointment reminder | Per message, now also inside the service window |
| Authentication | You, with an approved template | One-time login code | Per message |
| Marketing | You, with an approved template | Offers, back-in-stock alerts | Per message |

Two changes on 1 October 2026 matter for your budget:

- Service messages are charged again after a free tier of 1,000 per business phone number per month. Unused free messages do not roll over to the next month.
- Utility templates sent inside an open service window, free since July 2025, are now charged at the normal rate.

Conversations that start from a Click to WhatsApp ad open a free entry point window of up to 7 days, in which Meta does not charge for these categories. Check the current Saudi rates on Meta's published rate card before you plan volumes, and add a payment method to the account so service messages keep flowing once the free tier is used.

Meta's fees are only part of the cost. The others are building the bot once, a provider subscription if you use one, and monthly hosting and AI usage. Answering simple questions with fixed replies, and using the model only to understand messages, keeps AI usage down.

## Customer data and the PDPL

A chatbot collects personal data from the first message: phone numbers, names, addresses, order histories and, for clinics, details about someone's health. Saudi Arabia's PDPL has been in force since 14 September 2023, and its grace period ended on 14 September 2024. The regulator is the Saudi Data and AI Authority (SDAIA).

The obligations most relevant to a bot:

- **Registration.** Certain controllers must register on the National Data Governance Platform. DLA Piper notes that in practice this means most controllers.
- **Breach notice.** A personal-data breach must be reported to SDAIA within 72 hours.
- **Transfers abroad.** Personal data may go to countries with an adequate level of protection, or otherwise under appropriate safeguards, and only the minimum necessary should be sent. This matters if your bot, its database or its AI model runs outside the Kingdom.
- **Penalties** reach SAR 5 million, doubled for repeat offences.

SDAIA consulted on draft PDPL amendments from 6 October to 5 November 2026. One proposal would require controllers to store personal data inside the Kingdom. It is still a draft, so plan a setup that could move later if it becomes law. Google Cloud has a region in Dammam, which Saudi customers buy through CNTXT.

In practice: collect only what each task needs, link your privacy notice in the first reply, record when and how each customer opted in, delete chat data you no longer need, and let staff see only the conversations they handle. This is general information, not legal advice; confirm your consent wording and privacy notice with a Saudi adviser.

## How to start

1. **Read a month of chats.** Count the questions that come up most, and how many arrive after hours or at the weekend.
2. **Pick two or three jobs**, usually order status, bookings and common questions.
3. **Find the data.** Note where orders and appointments are recorded and whether that system has an API.
4. **Set up the official account**: business verification, a number for the bot, and the first templates submitted for approval.
5. **Build the handover first**, with staff hours stated in Riyadh time, so no customer is left in a loop.
6. **Launch on one branch or one service**, read the conversations the bot got wrong, fix them, then widen it.

For the wider picture, read [a practical guide to adding AI to your business](/blog/a-practical-guide-to-adding-ai-to-your-business) and [seven workflows every retail business should automate first](/blog/seven-workflows-every-retail-business-should-automate). Our [WhatsApp chatbot guide for Egypt](/blog/whatsapp-chatbot-for-business-egypt) covers the same basics for another market.

## How KF Tech Solutions helps

KF Tech Solutions builds WhatsApp chatbots and AI assistants that answer from your own information, connect to the systems that hold your orders and bookings, and hand the chat to your team when needed. We work with businesses in Egypt and the Gulf, remotely; Cairo works on Riyadh time from late April to late October and one hour behind it in winter. See [our Saudi Arabia page](/saudi-arabia) and our [AI solutions](/services/ai-solutions) service.

## Common questions

### Can the bot understand Saudi dialect?

Yes, if it uses an AI language model to understand messages and is tested on real messages from Saudi customers. A bot built only on menus and keywords will miss many of them. Replies should still come in clear Arabic, with facts drawn from your systems.

### Is the WhatsApp Business app enough, or do I need the API?

The app is enough for greeting messages, quick replies and a catalogue. Automated replies and any connection to your store, booking system or payment gateway need the WhatsApp Business Platform.

### Can I send offers to all my customers?

Only to people who gave you their number and opted in, ideally to marketing messages specifically. Offers are marketing templates, charged per message, and anyone who asks to stop must be removed from the list.

### Do I pay Meta when the bot is quiet?

Meta charges per message, and the first 1,000 service messages per number each month are free. Hosting and any provider subscription are fixed monthly costs; AI usage rises and falls with volume.

### Does my chat data have to stay in Saudi Arabia?

The PDPL in force today allows transfers to countries with adequate protection or under appropriate safeguards. A draft amendment would add a duty to store data in the Kingdom, but it is not law yet. Take advice for your own case.

### How long does a first version take?

A bot with two or three jobs is a small project. Meta's business verification and template approvals often set the pace, so start the account setup early.

Want a WhatsApp bot that answers your Saudi customers in clear Arabic? [Tell us about your chats](/contact) or [book a free call](/book), and we will suggest the first jobs to automate.

## Sources

- [WhatsApp Business Platform pricing, Meta](https://developers.facebook.com/docs/whatsapp/pricing)
- [WhatsApp Business Messaging Policy, Meta](https://whatsappbusiness.com/policy/)
- [Saudi Arabia data protection overview, DLA Piper](https://www.dlapiperdataprotection.com/?t=law&c=SA)
- [SDAIA draft PDPL amendments, Clyde & Co](https://www.clydeco.com/en/insights/2026/10/sdaia-publishes-draft-amendments-to-the-pdpl)
- [Saudi Arabia's National Arabic Language Policy, CMS](https://cms.law/en/int/legal-updates/saudi-arabia-s-national-arabic-language-policy-what-businesses-need-to-know)
- [Tap Payments, Saudi Arabia](https://www.tap.company/en-sa)
- [Google Cloud Dammam region access](https://docs.cloud.google.com/docs/dammam-region-access)
- [Saudi weekend change to Friday–Saturday, Crowell](https://www.crowell.com/en/insights/client-alerts/saudi-arabia-changes-weekend-to-friday-saturday-from-29-june-2013)
