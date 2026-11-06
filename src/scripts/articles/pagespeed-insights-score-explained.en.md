---
title: What your PageSpeed Insights score really means
summary: Lab score versus real-visitor data, the Core Web Vitals limits that count, and how to read a report before you pay anyone to fix the number.
tag: Web Development
tags: PageSpeed Insights, Core Web Vitals, website speed, SEO, Egypt
order: 54
media: https://images.unsplash.com/photo-1698671823406-035c77ff6fcd
alt: Sprinter in a yellow cap pushing off at the start line of a red running track
caption: What counts is how fast real visitors see the page, not a lab score that only measures one practice run.
stats: 2.5 s|LCP limit for a good page load; 200 ms|INP limit for a good response to a tap; 0.1|CLS limit for a page that holds still
---

The big number at the top of PageSpeed Insights is a lab score: one simulated
load of your page on a mid-range phone, graded from 0 to 100. What Google
actually recommends you pass is a different section of the same report, the
Core Web Vitals measured from real Chrome visitors over the last 28 days. A
page can score 60 in the lab and still pass, or score 95 and fail.

Last checked: 6 November 2026

## Lab data and field data are two different tests

Every PageSpeed Insights report has two parts, and most confusion comes from
mixing them up.

| | Field data (real users) | Lab data (the 0–100 score) |
|---|---|---|
| Source | Chrome User Experience Report (CrUX): real visitors | Lighthouse: one simulated page load |
| Period | The previous 28 days | The moment you press Analyze |
| Device | Your visitors' real phones and networks | An emulated mid-tier phone on a throttled mobile network |
| Good for | Knowing whether people actually have a problem | Finding why a page is slow and testing a fix |
| Shown when | Your page or site has enough Chrome traffic | Always |

If a page does not have enough visits, PageSpeed Insights falls back to data
for the whole site (the origin). A new or small site may have no field data at
all, and then the lab score is the only thing you can see. That is fine for
debugging, but it is a test result, not a measurement of your customers.

## The three Core Web Vitals and their limits

Google's Core Web Vitals are three metrics. Each is judged at the 75th
percentile, which means three out of four visits must be at or better than the
limit for the page to count as "good".

| Metric | What it measures | Good | Needs improvement | Poor |
|---|---|---|---|---|
| **LCP** (Largest Contentful Paint) | When the biggest image or text block appears | Up to 2.5 s | 2.5–4 s | Over 4 s |
| **INP** (Interaction to Next Paint) | How fast the page reacts to taps and clicks | Up to 200 ms | 200–500 ms | Over 500 ms |
| **CLS** (Cumulative Layout Shift) | How much the page jumps while loading | Up to 0.1 | 0.1–0.25 | Over 0.25 |

INP can only be measured with real people tapping, so it appears in field data
only. The lab report uses Total Blocking Time (TBT) as a stand-in: time when the
browser is too busy running scripts to respond.

Google "highly recommends" good Core Web Vitals and says they align with what
its core ranking systems reward. It does not promise rankings for them. A fast
page with thin content will not outrank a useful one, as we explain in
[how to get found on Google, ChatGPT and Gemini](/blog/get-found-on-google-chatgpt-gemini).

## How the 0–100 score is calculated

The lab score is a weighted average of five Lighthouse metrics:

| Lab metric | Weight |
|---|---|
| Total Blocking Time | 30% |
| Largest Contentful Paint | 25% |
| Cumulative Layout Shift | 25% |
| First Contentful Paint | 10% |
| Speed Index | 10% |

Scores of 90–100 are green ("good"), 50–89 orange and 0–49 red. Because TBT
carries the most weight, heavy JavaScript, such as chat widgets, tracking tags
and sliders, usually costs more points than a slightly large image.

## Why the score changes every time you run it

Run the same page three times and you may get three different scores. Google's
own documentation says most of that variation is not Lighthouse: it comes from
network routing, ads and A/B tests that change between loads, the machine
running the test, browser extensions and antivirus software. Treat the score as
a range. Run it three to five times and look at the middle result, and never
judge a fix on a single run.

Field data moves the other way: slowly. Because it covers the previous 28 days,
a fix released today is mixed with three weeks of visits to the old page. Expect
the field numbers to change gradually and give a fix about four weeks before
you decide whether it worked. If someone shows you a better result the same
afternoon, it is a lab result.

## What moved the numbers on our own site

When we worked on kftechsolutions.dev, the report pointed to four changes, none
of which needed a bigger server:

- **The popup had become the largest element.** LCP measures the biggest thing on screen, and a popup was larger than the page's own heading. LCP was timing the popup, so we changed how it loads.
- **Tracking pixels now load after the first interaction.** Analytics and ad tags were competing with the page for the browser's attention during load. Starting them after the visitor's first interaction took them out of the loading window.
- **Image boxes are reserved.** Every image has its width and height set in advance, so text does not jump down when the photo arrives. This is the classic CLS fix.
- **The Arabic font is preloaded.** Arabic pages use a separate font file. Loading it early stops the text from appearing in one font and then switching to another, which shifts the layout and delays the main text.

None of these is exotic. They are the kind of fixes the "Diagnose performance
issues" section of the report points you to, if you read it rather than the
score.

## How to read a report before paying for a fix

Before you pay anyone to "get you to 100", go through the report yourself:

1. **Start with the mobile tab.** It is the stricter of the two tests, and a page that does well there will do well on desktop.
2. **Look at field data first.** If it says "Passed" for Core Web Vitals, your real visitors are fine and the lab score is a debugging tool, not an emergency.
3. **Find the failing metric.** A red LCP, INP or CLS tells you what kind of problem you have: slow main content, slow reactions, or a jumping page.
4. **Check what the LCP element is.** The report names it. If it is a popup, a cookie banner or a hidden slide, the fix is in the design, not the server.
5. **Read the top three diagnostics.** They usually name specific scripts, images or fonts. Third-party scripts you added yourself are often near the top.
6. **Ask what a fix will change in field data.** A good developer talks about LCP, INP and CLS for real visitors. Someone who only promises a number is selling the number.

A score of 100 is rarely worth chasing. A shop page with a payment button and a
WhatsApp widget may never reach it, and does not need to. What matters is that
the page appears fast, responds to taps and does not jump while people read it.
For pages that run ads, this ties directly to conversions; see
[what a landing page fixes when ads get clicks but no sales](/blog/landing-page-for-ads-egypt).

## What KF Tech Solutions does here

We build websites with these basics in from the start: reserved image space,
optimised images, fonts loaded deliberately for Arabic and English, and
third-party scripts kept out of the loading path. Our
[website development service](/services/web-development) covers new sites, and
we also review existing ones and tell you which fixes are worth doing before
any work starts. Bilingual sites have their own pitfalls, covered in
[building an Arabic and English website](/blog/arabic-english-website-rtl).

## Common questions

### Does a low PageSpeed score hurt my Google ranking?

Google points to Core Web Vitals from real visitors, not to the lab score. A low
lab score with passing field data is not a ranking problem. Relevance and
useful content still come first.

### Why is my mobile score so much lower than desktop?

The mobile test emulates a mid-range phone on a slow mobile network, while the
desktop test uses a fast wired connection. The same page simply has less power
and bandwidth on mobile.

### My report says there is no field data. What now?

Your page and site do not yet have enough Chrome visits for the report. Use the
lab results to find problems, and check the Core Web Vitals report in Google
Search Console as traffic grows.

### Will a new hosting plan fix my score?

Only if the server is the slow part, which the report shows as a slow first
response. More often the cost is in scripts, images and fonts on the page, and
moving to a faster host leaves them unchanged.

### How often should I check?

After every significant change to the site, such as a new widget, tracking tag
or theme. Speed often drops when a new tool is added. Our article on
[software maintenance plans](/blog/software-maintenance-plan) explains how to
keep that in check over time.

If you want a second opinion on a report before paying for a fix,
[book a free call](/book) or [send us the page link](/contact) and we will tell
you what is worth doing.

## Sources

- [About PageSpeed Insights (Google for Developers)](https://developers.google.com/speed/docs/insights/v5/about)
- [Web Vitals (web.dev)](https://web.dev/articles/vitals)
- [Lighthouse performance scoring (Chrome for Developers)](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)
- [Understanding Core Web Vitals and Google search results (Google Search Central)](https://developers.google.com/search/docs/appearance/core-web-vitals)
