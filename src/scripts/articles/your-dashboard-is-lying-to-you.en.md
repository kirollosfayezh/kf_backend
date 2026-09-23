---
title: Your dashboard is lying to you
summary: Six ways a report that is technically correct still leads you to the wrong decision — and the questions that expose each one.
tag: Business Systems
tags: dashboards, reporting, data, decisions
order: 9
media: https://images.unsplash.com/photo-1551288049-bebda4e38f71
alt: A business analytics dashboard on a screen
caption: Every number on a dashboard is the answer to a question somebody chose not to write down.
stats: 6|ways a correct number misleads; 1|question that exposes most of them; 0|dashboards that are self-explanatory
---

The dashboard is not wrong. That is the problem. Every number on it is arithmetically
correct, which is precisely why nobody questions the decision it leads to.

Here are six ways a technically correct report misleads, and the question that
exposes each.

## 1. The average hides the distribution

Average order value is 340. Useful, until you learn that half your orders are 90 and
a handful are 4,000. You have two businesses and one number describing neither.

**The question:** show me the spread, not the average. A median and a histogram
answer more in ten seconds than an average answers in a quarter.

## 2. The total hides the trend that matters

Revenue is up eight per cent. Good. Inside it, your best category fell twelve per
cent and a low-margin one grew thirty. The total is up and the business is worse.

**The question:** what is this made of, and which parts are moving in opposite
directions?

## 3. Survivors are the only ones counted

Customer satisfaction is 4.6. It is 4.6 among people who still shop with you. The
ones who left are not in the figure, and they are the ones you needed to hear from.

**The question:** who is missing from this number?

## 4. The comparison period was not comparable

Sales are up twenty per cent on last month. Last month had a public holiday, or one
fewer weekend, or the branch was being refitted.

**The question:** what else was different about the period we are comparing against?

## 5. The definition drifted

"Active users" meant logged in this month. Someone changed it to opened the app this
month. The chart shows a jump that is entirely definitional, and the change is not
recorded anywhere.

**The question:** what exactly counts here, and when did that last change?

## 6. It measures what is easy, not what matters

Page views are easy to count. Whether a customer found what they wanted is not. So
the dashboard fills with the countable, and the business optimises for it —
including in ways that actively hurt.

**The question:** if this number doubled, would the business actually be better?

That last one is the most useful question in this article. Applied honestly, it
retires about a third of most dashboards.

## What a good dashboard does differently

| Bad | Good |
|---|---|
| Averages | Distributions, or an average with a spread beside it |
| Totals | Totals broken down by the segments that behave differently |
| A number | A number with its comparison period stated |
| Every metric available | The five that change a decision |
| Definitions in someone's head | Definitions written next to the number |
| Refreshed nightly, silently | Timestamped, so stale data is visible |

The five-metric limit is the hardest to accept and does the most good. A dashboard
with forty numbers is not richer than one with five; it is a place where nobody
looks at anything, because looking at everything is impossible.

> A metric you cannot act on is a decoration. Put it in a report nobody opens, not
> on the screen where decisions get made.

## How to fix one you already have

1. **List every number on it.** For each, write the decision it changes. Delete any
   where you cannot name one. This usually removes half.
2. **Write the definition next to each survivor.** Not in a wiki — on the dashboard.
3. **Add the comparison.** A number with no reference point is trivia.
4. **Add the timestamp.** "As of 14:20" prevents the worst class of error, which is
   acting confidently on yesterday's figure.
5. **Ask the doubling question** of each one. Remove the ones that fail.

What remains is usually five or six numbers, and people start using it — which is
the only measure of a dashboard that counts.

## Common questions

### Should everyone see the same dashboard?

No. A shift manager and an owner make different decisions, so they need different
numbers. Same underlying data, different views.

### How often should it refresh?

As often as the decisions are made. Hourly for an operations screen, daily for a
management one. Real-time everything is expensive and usually changes nothing.

### Where do the numbers come from if our systems do not talk?

That is the actual project, and it is the one worth doing —
[seven workflows worth automating](/blog/seven-workflows-every-retail-business-should-automate)
covers the groundwork.
