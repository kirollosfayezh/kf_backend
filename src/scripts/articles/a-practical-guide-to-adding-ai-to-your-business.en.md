---
title: A practical guide to adding AI to your business
summary: Which tasks are actually worth automating, how to test one in a fortnight for almost nothing, and the four failure modes that sink most AI projects.
tag: AI
tags: AI, automation, business systems, operations
order: 7
media: https://images.unsplash.com/photo-1677442136019-21780ecad995
alt: An abstract visualisation of a machine learning model
caption: The projects that work start with a task someone already does badly, not with a technology.
stats: 2 weeks|to test whether a task is a fit, for almost nothing; 4|failure modes that account for most abandoned projects; 100|examples of the task you should collect before starting
---

Most AI projects fail the same way. Someone decides the company should "use AI",
a tool is bought, and six months later it is a browser tab nobody opens.

The projects that work invert the order. They start with a task that is already
being done — badly, slowly, or expensively — and ask whether a machine can do that
specific thing well enough.

## What AI is actually good at

Be specific, because the general claims are useless for planning. In a business
context, current models are reliably good at four things:

**Turning messy text into structured data.** Supplier invoices as PDFs into rows in
your system. Enquiry emails into CRM fields. Handwritten delivery notes into stock
movements. This is the highest-value, lowest-risk category and it is consistently
underused.

**Classification and routing.** Which department does this email belong to? Is this
review a complaint or a question? Is this transaction unusual?

**Drafting for a human to approve.** First-draft replies, product descriptions,
summaries of long threads. The output is a starting point, never the final word.

**Search over your own documents.** Answering "what does our contract with this
supplier say about late delivery?" without anyone opening a folder.

## What it is still bad at

- **Arithmetic you care about.** Do not let a model compute a total. Have it extract
  the numbers and let ordinary code do the sum.
- **Anything requiring certainty.** It will produce a confident answer whether or not
  it has grounds for one.
- **Knowing your business without being told.** It has never seen your price list,
  your policies or your history unless you give them to it.

## The two-week test

Before committing to anything, run this. It costs a fraction of a project and it
answers the only question that matters: is this task actually a fit?

1. **Pick one task.** High volume, low stakes, done by a person today. Sorting
   incoming email beats "improve customer service".
2. **Collect a hundred real examples.** Actual ones from your business, including
   the awkward cases. This is the step people skip and the step that decides the
   outcome.
3. **Do it manually with an off-the-shelf tool.** No integration, no build. Paste
   examples in and record what happens.
4. **Count.** How many were right, how many wrong, and how bad was the worst wrong
   answer?

If accuracy is high and the worst failure is survivable, you have a project. If the
worst failure is serious — a wrong price quoted to a customer, a misfiled legal
document — you need a human approving each result, which changes the economics and
must be designed in rather than bolted on.

> The question is never "is it accurate?" It is "what does it cost us when it is
> wrong, and who notices?"

## The four ways these projects fail

| Failure | What it looks like | How to avoid it |
|---|---|---|
| Solution looking for a problem | "We should use AI" with no task named | Start from a task, never from the technology |
| No human checkpoint | Automated output reaching customers unreviewed | Decide up front who approves what |
| No measurement | Nobody knows if it is helping | Record accuracy before launch, and keep recording |
| Data nobody prepared | The model cannot see what it needs | Fix the data first — it is the real project |

That last one is the most common by a distance. If your product information lives in
three spreadsheets and one person's memory, no model will rescue it. Cleaning that
up is the project, and it pays for itself even if you never add AI at all.

## What it costs

| Approach | Typical cost | Best for |
|---|---|---|
| Off-the-shelf tool, used manually | $20 – 100 / month | Testing, low volume |
| Existing tool connected to your systems | $3,000 – 12,000 once + usage | A defined, repeated task |
| Custom workflow in your own software | $12,000 – 40,000 + usage | High volume, needs your data and rules |

Usage costs scale with volume and are easy to underestimate. Measure them during the
two-week test rather than discovering them in month three.

## Where to start, by business type

- **Retail:** classify and route customer messages; extract supplier invoices into
  stock.
- **Restaurants:** summarise reviews into weekly themes; forecast prep from sales
  history. (The stock side is covered in
  [cutting a restaurant's stock waste](/blog/cutting-a-restaurant-s-stock-waste-by-a-third).)
- **Professional services:** search across past proposals and contracts; draft first
  responses to enquiries.
- **Anyone with a warehouse:** turn delivery notes and packing lists into stock
  movements without typing.

## Common questions

### Do we need our own model?

Almost certainly not. Training a model is rarely the right answer for a business
problem; connecting an existing one to your data, with your rules around it, nearly
always is.

### Is our data safe?

It depends entirely on the arrangement, and it is a question to settle in the
contract rather than the sales call. Ask where data is processed, whether it is
retained, and whether it is used for training. Get the answers in writing.

### How long before it pays back?

If you picked a high-volume task and measured honestly, usually within a year. If
you cannot state the task in one sentence, the honest answer is that it will not.
