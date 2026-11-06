---
title: WhatsApp Business API pricing: what you actually pay
summary: The WhatsApp Business API is paid per delivered message. Meta's rates for Saudi Arabia, the UAE, Egypt, Germany and France, and what stays free.
tag: Automation
tags: WhatsApp Business API, WhatsApp pricing, chatbot, Saudi Arabia, UAE, Egypt, GCC
order: 71
media: https://images.unsplash.com/photo-1615840287214-7ff58936c4cf
alt: Close-up of two hands holding a smartphone and tapping its screen in low light
caption: Each template message a business sends on WhatsApp is priced by its category and by the customer's country.
stats: 1,000|free service messages per business number each month; 7|days a chat from a Click-to-WhatsApp ad can stay free; 4|dates a year when Meta may change its rates
---

The WhatsApp Business API is not free: Meta charges for each message your business delivers, at a rate set by the type of message and the country of the person receiving it. Some messages cost nothing, including everything customers send you, the first 1,000 service replies per number each month, and chats that start from a Click-to-WhatsApp ad. On top of Meta's charges, most businesses also pay a provider or a developer to connect WhatsApp to their systems.

Last checked: 6 November 2026

This guide explains how the bill is built, shows Meta's current rates for Saudi Arabia, the UAE, Egypt, Germany and France, and works through a realistic monthly estimate so you can budget before you commit.

## How Meta charges for WhatsApp messages

The WhatsApp Business app on your phone is free to use. The API, which Meta calls the WhatsApp Business Platform, is what you need for a chatbot, automatic order updates, several agents on one number, or a connection to your POS, CRM or online store. That is where per-message charges apply.

Since 1 July 2025, Meta charges per message rather than per conversation. Four rules shape the bill:

- **You pay only for messages your business sends.** Messages from customers to you are not charged.
- **You pay only when a message is delivered.** A message that fails to reach the customer is not billed.
- **The price depends on the category.** Every message has exactly one category, so it carries at most one charge.
- **The price depends on the recipient's country.** Meta reads the country calling code of the customer's number, not where your business is based.

There are two kinds of message. **Template messages** are pre-approved formats you can send at any time, including to start a conversation. **Non-template messages**, meaning free-form text, images and buttons, can only be sent while a customer service window is open: a 24-hour timer that starts, and restarts, every time the customer messages or calls you. Outside that window you can only reach a customer with a template, and only if they have opted in to hear from you.

| Category | What it is for | Typical example |
|---|---|---|
| Marketing | Promotions, offers, reminders to buy | A weekend sale, an abandoned-cart reminder |
| Utility | Updates about something the customer did | Order confirmation, delivery status, appointment reminder |
| Authentication | Identity checks | One-time login or payment codes |
| Service | Free-form replies inside the 24-hour window | A staff member or bot answering a question |
| Meta Business Agent | Replies written by Meta's own AI agent | An automated answer about sizes or opening hours |

The category of a template is decided when Meta reviews it, so a "utility" template that reads like an advert can be classed as marketing and priced as marketing.

## Meta's rates for Saudi Arabia, the UAE, Egypt, Germany and France

These are Meta's list rates per delivered message in US dollars, effective 1 October 2026, taken from Meta's official rate card.

| Recipient country | Marketing | Utility | Authentication | Service |
|---|---|---|---|---|
| Saudi Arabia | $0.0576 | $0.0107 | $0.0107 | $0.0107 |
| United Arab Emirates | $0.0576 | $0.0157 | $0.0157 | $0.0157 |
| Egypt | $0.0644 | $0.0036 | $0.0036 | $0.0036 |
| Germany | $0.1365 | $0.055 | $0.055 | $0.055 |
| France | $0.0859 | $0.03 | $0.03 | $0.03 |

Three points stand out. Marketing costs several times more than utility in every one of these markets, and in Egypt it costs almost 18 times more. Germany is the most expensive of the five in every category. And the rate follows the customer, not you: a Cairo business messaging a customer on a Saudi number pays the Saudi rate.

Saudi Arabia, the UAE and Egypt also have a higher **authentication-international** rate ($0.0598, $0.051 and $0.065 respectively). Meta applies it to eligible businesses sending one-time codes to those countries from a different primary business location. Your own primary location is always charged the domestic rate.

**Volume tiers** lower the rate for utility and authentication messages once your monthly volume in a given country passes set thresholds. Marketing and service messages have no volume tiers. Tiers are counted across all the WhatsApp accounts in your Meta business portfolio and reset every month.

**Currency.** Meta now bills in 16 currencies, including US dollars, euros, Saudi riyals and UAE dirhams; SAR and AED billing became available on 1 April 2026. You choose the currency when the WhatsApp account is created, and it cannot simply be changed later, so decide before you set up.

## What you do not pay for

Meta lists two situations where business messages are free, and two more that are free by design:

1. **The free entry point window.** When a customer messages you from a Click-to-WhatsApp ad on the WhatsApp mobile app and you reply within the 24-hour window, that reply opens a free window that can last up to 7 days. Marketing, utility, authentication and service messages in that window are all free.
2. **The first 1,000 service messages each month.** Each business phone number gets 1,000 free service messages a month. They do not roll over. From 1 October 2026, Meta charges from the 1,001st service message per number.
3. **Incoming messages.** Everything customers send you is free.
4. **Undelivered messages.** You are billed only on delivery.

The service change matters. Until 30 September 2026, replies inside the 24-hour window were free without limit. A busy support line that answers thousands of questions a month now has a service line on its bill. Meta also warns that if your account has no payment method, service messages beyond the free 1,000 will not be delivered.

## Costs on top of Meta's rates

Meta's per-message charges are only part of the total. Plan for these as well:

- **A provider or platform fee.** Most businesses connect through one of Meta's partners, often called a BSP. Partners price in different ways: a monthly subscription, a per-message markup, a setup fee, or a mix. Ask each one whether Meta's charges are passed on at cost or with a margin.
- **The build.** Connecting WhatsApp to your POS, booking system or store, writing templates, and designing the conversation flow is development work, paid once and then maintained.
- **AI usage.** If your bot uses a third-party AI model, its replies are billed by Meta as service messages, and the AI provider bills you separately. Meta's own Meta Business Agent costs $2.00 per million tokens, which Meta estimates at about 4 to 5 cents per message.
- **Hosting and maintenance.** The server that receives messages and talks to your systems needs to run, be monitored, and be updated when Meta changes its API.

A business can also connect to Meta's Cloud API directly through its own developer account. That removes the partner fee, but someone still has to build and run the integration.

## A worked monthly estimate

Take a retail business sending, in one month, to customers in its own country:

- 2,000 utility messages: order confirmations and delivery updates
- 3,000 marketing messages: one promotion to opted-in customers
- 4,000 service messages: replies from staff or a third-party bot
- 500 authentication messages: login codes, charged at the domestic rate

Using Meta's list rates and assuming no ad-driven free windows:

| Line | Saudi Arabia | UAE | Egypt |
|---|---|---|---|
| Utility (2,000) | $21.40 | $31.40 | $7.20 |
| Marketing (3,000) | $172.80 | $172.80 | $193.20 |
| Service (4,000, first 1,000 free) | $32.10 | $47.10 | $10.80 |
| Authentication (500) | $5.35 | $7.85 | $1.80 |
| **Meta total** | **$231.65** | **$259.15** | **$213.00** |

In all three markets, marketing is two-thirds or more of the bill. Halving the promotion halves the biggest line; sending the same order updates costs very little. Add your provider's fee, any AI usage and hosting to reach the real monthly cost. Volume tiers would only reduce the utility and authentication lines.

### How to keep the bill down

- **Send marketing to fewer, better-targeted customers.** It is the most expensive category in every market above.
- **Write templates that are genuinely transactional.** A clean order update stays in utility; adding a discount code can move it to marketing.
- **Reply inside the 24-hour window.** Free-form replies are only possible there, and the first 1,000 per number each month are free.
- **Use Click-to-WhatsApp ads for campaigns.** Conversations that start from an ad can run free for up to 7 days.
- **Check delivery reports and pricing analytics monthly.** Meta changes rates only on 1 January, 1 April, 1 July and 1 October, with at least one month's notice for rate changes.

Before choosing what to automate, it helps to see the [workflows retail businesses usually automate first](/blog/seven-workflows-every-retail-business-should-automate).

## Where KF Tech Solutions fits

We build WhatsApp chatbots and automations for businesses in Egypt and the Gulf: order and booking updates sent from your own system, bots that answer from your price lists and policies, and handover to a person when the bot should stop. We design templates so they fit the category you intend, and we connect WhatsApp to the systems you already use. For the full picture of a bot project, read [how to start with a WhatsApp chatbot](/blog/whatsapp-chatbot-for-business-egypt), and for AI answers drawn from your own files, see [an AI assistant that answers from your documents](/blog/ai-assistant-own-documents). Projects start from $200 (about SAR 750 / AED 735); the final price depends on scope, with a fixed written quote after a free call. More on our [automation services](/services/automation).

## Common questions

### Is the WhatsApp Business app free?

Yes. The WhatsApp Business app on your phone is free. Per-message charges apply to the WhatsApp Business Platform, the API used for chatbots, integrations and multi-agent inboxes.

### Do I pay when customers message my business?

No. Meta charges only for messages your business sends and only when they are delivered. Messages from customers are free.

### Are replies to customers still free?

Partly. Since 1 October 2026, each business phone number gets 1,000 free service messages a month, and Meta charges from the 1,001st. Replies inside a free entry point window from a Click-to-WhatsApp ad are free regardless.

### Which country's rate applies if I am in Egypt and my customer is in Saudi Arabia?

The customer's. Meta prices each message by the country calling code of the recipient's number, so a +966 number is charged at the Saudi Arabia rate.

### How often does Meta change WhatsApp prices?

Meta may change prices only on the first day of a quarter: 1 January, 1 April, 1 July or 1 October. Rate changes come with at least one month's notice. Check the rate card again before you sign a yearly budget.

## Get a realistic estimate

Tell us roughly how many order updates, promotions and support replies you send each month, and we will map them to Meta's categories and show what the bill would look like before anything is built. [Book a free call](/book) or [send us a message](/contact).

## Sources

- [Meta for Developers: Pricing on the WhatsApp Business Platform, including rate cards effective 1 October 2026](https://developers.facebook.com/docs/whatsapp/pricing/)
- [Meta for Developers: Authentication-international rates](https://developers.facebook.com/docs/whatsapp/pricing/authentication-international-rates)
