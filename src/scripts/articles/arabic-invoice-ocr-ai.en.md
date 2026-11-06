---
title: Reading Arabic invoices and receipts with AI
summary: How OCR and AI pull the supplier, VAT and totals from Arabic invoices, how to check every figure, and how the data reaches your accounts.
tag: AI
tags: AI, OCR, Arabic invoices, data extraction, accounting, GCC, Egypt
order: 93
media: https://images.unsplash.com/photo-1763730512449-f1a505f432a9
alt: A hand fills in a paper form with a fountain pen beside a calculator and a pile of banknotes
caption: Every paper invoice still has to be typed in by someone, unless software reads it and checks the totals first.
stats: 3|totals to reconcile on every invoice: lines, VAT, grand total; 15%|standard VAT rate in Saudi Arabia, a useful cross-check; 0|invoices that should reach the books after failing a check
---

Yes, AI can read Arabic invoices and receipts well enough for daily use, but
not as a single "scan and done" button. It works as a pipeline: OCR turns the
image into text, an AI model fills in the fields, simple arithmetic checks the
totals and VAT, and a person reviews whatever fails before anything reaches your
accounting system.

Clean printed invoices usually go through without trouble. Faded thermal
receipts, crooked phone photos and handwriting are where errors appear.

## OCR and AI extraction are two different jobs

**OCR** (optical character recognition) converts an image or PDF into text. It
does not know which number is the total and which is a phone number.

**AI extraction** reads that text, often together with the layout of the page,
and returns structured fields: supplier, invoice number, date, line items,
subtotal, VAT and total. Many tools do both in one call, but the fixes differ when
something goes wrong.

Arabic documents add specific difficulties:

- **Connected letters and right-to-left lines** that often mix Arabic and English on the same row.
- **Two digit systems.** Some invoices print Arabic-Indic digits (٠١٢٣), others Western digits, and some use both.
- **Decimal and thousands separators** that differ between suppliers, including the Arabic decimal mark (٫).
- **Hijri and Gregorian dates**, sometimes both on one invoice.
- **The same supplier spelled several ways**, with or without "شركة" or "مؤسسة" in front.

## The pipeline, step by step

1. **Capture.** Invoices arrive as PDFs by email, photos on WhatsApp or scans from the office copier.
2. **Clean the image.** Straighten, crop and improve contrast before reading, especially for phone photos.
3. **Read and extract.** OCR plus an AI model return the fields with a confidence score for each one.
4. **Validate.** Arithmetic and business rules check the result (see below).
5. **Review.** Anything that fails a rule or has low confidence goes to a person.
6. **Export.** Approved invoices are posted to your accounting system or ERP as drafts, with the original image attached.

### What to extract, and where it goes wrong

| Field | Why it matters | Typical problem in Arabic documents |
|---|---|---|
| Supplier name | Matching to your supplier list | Same company spelled differently |
| VAT or tax registration number | Matching the supplier and the VAT claim | Arabic-Indic digits misread |
| Invoice number and date | Duplicates and the correct period | Hijri dates, day and month swapped |
| Line items | Costs, stock and purchase orders | Descriptions wrapped across lines in two languages |
| Subtotal, VAT, total | The amounts you post | Separators read as digits |
| Currency | Correct posting and conversion | ر.س, SAR, ج.م and $ on similar layouts |

## Check every figure before it is trusted

AI extraction can return a confident, wrong number. Arithmetic catches most of
these without any AI at all:

- **Each line:** quantity × unit price = line total.
- **The lines:** the line totals add up to the subtotal.
- **The invoice:** subtotal + VAT = total.
- **The rate:** VAT divided by the subtotal should match the rate that applies. The standard rate is 15% in Saudi Arabia and 5% in the UAE; zero-rated and exempt lines need their own rule.
- **Tax-inclusive prices:** for a UAE price that already includes 5% VAT, the VAT part is the price divided by 21, as the Federal Tax Authority's guide explains.
- **Duplicates:** the same supplier and invoice number should never be posted twice.
- **The supplier:** the registration number must match a supplier you already know.

Saudi simplified tax invoices carry a QR code that, according to ZATCA,
includes the seller's name, VAT registration number, invoice timestamp, total
with VAT and VAT amount. Reading the QR code first and comparing it with the OCR
result is a strong check. If a supplier can send the structured e-invoice file
instead of a PDF, use that and skip OCR for those invoices altogether.

This is general information, not tax advice. Your accountant should confirm
which rates and rules apply to your purchases.

## The human review queue

The review queue is where the system earns trust. A good one:

- Shows the invoice image next to the extracted fields, with the doubtful field highlighted.
- Explains why the invoice is there, such as "VAT does not match 15%" or "possible duplicate".
- Lets the reviewer correct a field in one click and records who changed what.
- Keeps failed invoices out of the accounts until someone approves them.

If the same supplier fails every week, add a rule for that supplier rather than
fixing it by hand forever.

## Measuring accuracy honestly

A single "98% accurate" figure from a vendor tells you little. Build a test set
of real invoices from your own suppliers, including the bad photos, and measure:

- **Field accuracy** on the fields you post: supplier, date, invoice number, VAT and total.
- **Straight-through rate:** the share of invoices that pass every check with no correction.
- **Review time** per invoice that does need a person.
- **Errors that got through:** anything wrong that reached the accounts, which should be zero.

Measure again when you add suppliers or change the model. Accuracy is a property
of your documents, not only of the software.

## Feeding the result into accounting or an ERP

Extraction is only useful when the data lands in the right place. Map each
supplier to its record, each line to an account or item, and post invoices as
drafts so the finance team keeps the final say. The connection usually runs
through the accounting system's API or a scheduled import file; our guide to
[connecting the systems you already run](/blog/api-integration-connecting-business-systems)
covers the options. Where you use purchase orders, match the invoice against the
order and the goods received before approving payment.

Invoices also contain tax numbers and bank details. Ask where the documents are
processed, how long they are kept and who can see them, before you choose a tool.

## What KF Tech Solutions does here

We build [AI solutions](/services/ai-solutions) and the custom software around
them: document extraction pipelines with validation rules, a review screen in a
web dashboard, and the integration that posts approved invoices to your
accounting system or ERP. We work with businesses in Egypt and the Gulf. If you
are new to this, start with [a practical guide to adding AI to your business](/blog/a-practical-guide-to-adding-ai-to-your-business),
or see how the same approach lets staff [ask an AI assistant about your own documents](/blog/ai-assistant-own-documents).

## Common questions

### Can AI read handwritten Arabic invoices?

Sometimes, but not reliably enough to post without review. Treat handwritten
invoices as review-always and measure them separately.

### Do we still need someone from finance to check?

Yes, for anything that fails a check. The goal is that people review the
exceptions, not every invoice.

### Our suppliers send photos on WhatsApp. Will that work?

Usually, if the photo is sharp and the whole invoice is in frame. Cleaning the
image first helps, and a short guide for suppliers helps more.

### How many invoices make this worth building?

There is no fixed number. Compare the hours your team spends typing invoices
each month with the cost of building and running the pipeline.

If you want to see how this would work on your own invoices, [book a free call](/book)
or [send us a few samples](/contact) and we will tell you what can be automated.

## Sources

- [ZATCA: Detailed Guidelines for E-Invoicing](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf)
- [ZATCA: Guideline for Tax Invoicing and Records under VAT Provisions](https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-for-Tax-Invoicing-and-Records-under-VAT-Provisions.pdf)
- [UAE Federal Tax Authority: VAT](https://tax.gov.ae/en/taxes/vat.aspx)
- [UAE Federal Tax Authority: Taxable Person Guide for VAT](https://tax.gov.ae/-/media/Files/EN/PDF/Guides/Taxable-Person-Guide-June-2018.pdf)
