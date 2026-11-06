---
title: An AI assistant that answers from your own documents
summary: How a website AI chatbot answers from your own files, shows its sources, stays inside guardrails, hands over to staff and passes Arabic tests.
tag: AI
tags: AI chatbot, website chatbot, customer support, document search, Arabic, Egypt
order: 92
media: https://images.unsplash.com/photo-1771173479042-810085465e49
alt: A tall stack of printed papers marked with pink, orange and green sticky tabs
caption: The answers your customers need are already in your documents; an assistant should quote them, not invent new ones.
stats: 1|source shown with every answer; 0|answers given when your documents are silent; 2|languages to test before launch: Arabic and English
---

An AI chatbot on your website can answer customers from your own documents: price lists, policies, product sheets and FAQs. For each question it searches those documents and writes a reply only from what it finds, with a link to the source. When the documents do not cover a question, a well-built assistant says so and passes the conversation to a person instead of guessing.

A general chatbot answers from what it learned on the internet; yours should answer only from what your business has written down. Here is how that works, what it costs and how to test it in Arabic before launch.

## How it works: search first, then answer

The assistant does not memorise your files. When a customer asks a question, the system searches your documents, picks the few passages most likely to contain the answer and gives them to the language model with one instruction: answer from these passages only. This approach is usually called retrieval-augmented generation, or RAG.

So updating the assistant means updating a document, not retraining a model, and the answers can never be better than the documents behind them.

### Which documents to give it

Start with the material your staff already use to answer customers:

- **Service and product descriptions**, with what is and is not included.
- **Prices and packages**, if you are happy to state them publicly.
- **Policies**: delivery, returns, warranty, cancellation and working hours.
- **Your existing FAQ** and the questions your team answers every day by phone and WhatsApp.
- **How-to guides** for your product or service.

Keep out anything a customer should not read, such as cost sheets, staff data and other clients' contracts: if a passage can be retrieved, assume it can be quoted. Two price lists from different years will produce two different answers.

## Answers that show their source

Every answer should name the document it came from, ideally with a link to the page or section. The customer can check the detail before paying. Your team can see, for any wrong answer, whether the document was wrong or the assistant misread it, and fix the right thing.

A citation is also a simple honesty test: if the assistant cannot point to a passage, it should not answer. This rule is set in the instructions and checked in testing, not assumed.

## Guardrails: what it must not do

Decide the limits before building, and write them down:

- **Stay on topic.** Questions about your business only; no general chat, homework or opinions.
- **No invented facts.** If the documents do not answer, it says so and offers a person.
- **No commitments.** It can quote the published price list, but it does not grant discounts, confirm refunds or promise dates a person has not approved.
- **No personal data in answers.** It never reveals another customer's details and asks only for what the handover needs.
- **Resist manipulation.** Users will try messages such as "ignore your instructions". The OWASP Top 10 for LLM applications puts prompt injection first, alongside sensitive information disclosure and misinformation.

Some of these rules are instructions to the model; the rest is ordinary code: limits on the data it can reach and a log of every conversation.

## Handing over to a person

A good assistant hands over when the customer asks for a person, when the documents have no answer, when the topic is a complaint, refund or payment, or when the customer repeats the same question.

The conversation should travel with the handover, so the customer does not start again. Outside working hours, the assistant says when someone will reply and takes a name and number. The same logic applies on WhatsApp; our guide to [a WhatsApp chatbot for your business in Egypt](/blog/whatsapp-chatbot-for-business-egypt) covers that channel.

## What each conversation costs

AI model providers charge by the amount of text processed, counted in tokens, so each conversation has a small cost that depends on its length and the text retrieved. Other costs are hosting, the search index and, on WhatsApp, the platform's own message charges, explained in [WhatsApp Business API pricing](/blog/whatsapp-business-api-pricing).

| Cost driver | What raises it | How to keep it down |
| --- | --- | --- |
| Model choice | A large model for every question | A smaller model for routine questions, a larger one only when needed |
| Retrieved text | Sending whole documents with each question | Send only the few most relevant passages |
| Conversation length | Long chats resending the full history | Trim or summarise older messages |
| Misuse | Bots or users chatting off-topic for hours | Topic limits and per-user message caps |
| Channel | Messaging charges on WhatsApp | Know the channel's pricing before choosing it |

OWASP lists "unbounded consumption" as a risk: without caps, one abusive user can run up a real bill. Set a monthly spending limit and an alert for unusual volume.

## Testing Arabic answers before launch

Do not judge an Arabic assistant by trying a few questions yourself. Build a test set of around a hundred real questions from your WhatsApp chats, emails and call notes, and write down the correct answer and source for each. Include the ways customers actually write:

- Formal Arabic and the customer's own dialect, Egyptian or Gulf.
- Arabic typed in Latin letters and numbers (Arabizi).
- Arabic and English mixed in one message, especially product names.
- Spelling variants such as ة and ه, ى and ي, or أ and ا.
- Eastern Arabic digits as well as Western digits in prices and phone numbers.

Score each answer: correct, correctly cited, correctly refused or handed over, and written in clear Arabic. Have an Arabic speaker on your team read the replies, and run the same set again whenever you change the documents, the instructions or the model. The voluntary NIST AI Risk Management Framework treats this as ongoing work too: measuring and managing risk are two of its four core functions.

## What KF Tech Solutions does here

We build AI assistants that answer customers from a business's own information on its website or WhatsApp, in Arabic and English, and hand over to a person when needed. We start with a short test on your real questions to measure how often the answers are right before building the full integration. See our [AI solutions](/services/ai-solutions) page and our [practical guide to adding AI to your business](/blog/a-practical-guide-to-adding-ai-to-your-business). We work with businesses in Egypt and the Gulf.

## Common questions

### Will the assistant make up answers?

Any language model can be wrong. You reduce the risk by limiting it to your documents, requiring a source for each answer and testing that it refuses when the documents are silent.

### Do I need to retrain the AI when my prices change?

No. You update the document and the search index is refreshed, so the next answer uses the new text. Remove old versions so the assistant does not find both.

### Can it answer in Arabic if my documents are in English?

Often yes, but quality varies, so test it with your own questions. For prices and policies, an Arabic version of the document gives more reliable wording.

### Is my data used to train the model?

That depends on the provider and the plan. Read its data-use terms for business use and give the assistant only the documents it needs.

### Should it go on the website or on WhatsApp?

Start where most questions already arrive. The same assistant and documents can serve both channels; only the interface and the running costs differ.

Do you have a folder of documents your team answers from every day? [Book a free call](/book) and we will look at which questions an assistant could handle, or [send us a message](/contact).

## Sources

- [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
