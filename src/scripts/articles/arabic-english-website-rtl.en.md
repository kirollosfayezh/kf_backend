---
title: Arabic–English websites: the RTL details that break
summary: Separate URLs, mirrored layouts, Arabic fonts, numbers, phone fields and real Arabic copy: the details that decide whether a bilingual site works.
tag: Web Development
tags: bilingual website, Arabic website, RTL, hreflang, Egypt, GCC
order: 67
media: https://images.unsplash.com/photo-1793490326018-d6591cafa86b
alt: Bilingual Arabic and English road sign for Al Raffa and Al Satwa on a Dubai street
caption: Two scripts, two reading directions, one sign: a bilingual site has to get the same details right.
stats: 1|URL for each language version of a page; 3|ways to declare hreflang: HTML, HTTP header, sitemap; 0|automatic redirects based on a guessed language
---

A bilingual Arabic–English website works when each language has its own URL, the Arabic pages are set right-to-left in the markup rather than flipped with a few CSS rules, and the Arabic copy is written in Arabic instead of translated line by line. Most broken bilingual sites get the translation done and miss everything around it: arrows pointing the wrong way, scrambled phone numbers, a missing font and cramped line spacing.

Some of these lessons come from our own four-language site.

## Give each language its own URL

Google recommends a different URL for each language version of a page, rather than cookies or browser settings that swap the language on one address.

A simple pattern is a prefix, such as /ar/services for Arabic and /services for English. Then:

- Link every language version to all the others with hreflang, and have each page list itself too. If page A points to page B and B does not point back, Google may ignore the tags.
- Language-only codes such as "ar" and "en" are valid; a country code on its own is not.
- Add x-default for visitors whose language matches none of your versions.
- Do not redirect visitors automatically to another language. Google advises against it; show a clear switcher instead.

A common misunderstanding: Google does not use hreflang or the lang attribute to detect a page's language. It reads the content. Hreflang only tells Google which pages are versions of each other, so the Arabic page must be fully in Arabic; Google warns that translating only the menu and footer makes a poor experience. For the wider picture, see [how to get found on Google, ChatGPT, Gemini and Claude](/blog/get-found-on-google-chatgpt-gemini).

## Set the direction in the markup, not only in CSS

Each Arabic page should declare lang="ar" and dir="rtl" on its html element. The W3C advises putting the base direction in the markup rather than in CSS, so it stays correct even when the stylesheet does not load.

Then build the layout with logical properties, such as margin-inline-start and text-align: start, instead of left and right. One stylesheet then serves both directions and the layout mirrors itself. Left and right values need an RTL override for every rule, and those overrides drift out of sync.

## Mirror the layout, but not everything

Mirroring flips the reading order, but not everything should flip.

| Element | On the Arabic page |
|---|---|
| Navigation, columns, card order | Mirror |
| "Next" and "back" arrows | Mirror |
| Sliders, carousels, step indicators | Mirror |
| Logos, photos, product images | Keep as they are |
| Phone numbers, email addresses, code | Keep left-to-right |

Arrows are the most common miss. An arrow typed as a character or saved as an image points the wrong way in Arabic unless someone fixes it on every page. On our own site, arrows are one styled element that the stylesheet flips in RTL, so no page has to remember. In the language switcher, write each language's name in that language, such as "العربية" and "English".

## Load an Arabic font properly

Many web fonts have no Arabic letters. The browser then falls back to a system font that differs on Windows, Mac, Android and iPhone.

- Choose a font family designed with Arabic, or pair your Latin font with an Arabic one of similar weight and feel.
- Load the Arabic font on Arabic pages only, so English visitors do not download it.
- If you preload it, make the preload URL match the font-face URL exactly, or the browser fetches the file twice.
- Give Arabic more line height than English. Arabic script has dots and marks above and below the letters, and English spacing makes Arabic paragraphs feel cramped.
- Switch Latin-only decorative or monospace styles to the Arabic body font on Arabic pages.

On our own site this meant an Arabic font loaded only on Arabic pages, more generous Arabic line spacing, and the body font in place of monospace styling. Fonts also affect speed scores, because a late font swap moves text on screen; see [what your PageSpeed Insights score actually means](/blog/pagespeed-insights-score-explained).

## Numbers, dates and phone fields

- **Digits.** Arabic text can use Western digits (1, 2, 3) or Arabic-Indic digits (١، ٢، ٣). Pick one and use it everywhere, from pages to invoices and emails.
- **Dates.** Write the month as a word rather than an ambiguous 05/06, and format dates with the browser's built-in tools (Intl.DateTimeFormat) for the right locale.
- **Mixed text.** An English product name inside an Arabic sentence can push punctuation to the wrong place. Wrap names and user-entered text in a bdi element or give it dir="auto", as the W3C suggests.
- **Phone and email fields.** Set dir="ltr" on them, so +20 100 000 0000 does not show its plus sign at the wrong end.
- **Free-text fields.** Use dir="auto" so each entry aligns by its first letter; the W3C notes this is helpful but not foolproof.
- **Arabic keyboards.** Accept Arabic-Indic digits and convert them before validation, or a correct phone number gets rejected.
- **Messages.** Translate labels, placeholders, errors and confirmation emails. An English error under an Arabic form is a common bug.

## Write the Arabic, do not translate the English

Translated English reads as translated. For business sites, formal Modern Standard Arabic is the safe default, written or at least reviewed by a person who knows the market.

- Write key headings and calls to action in Arabic first, then check that both versions say the same thing.
- Do not start an Arabic heading or page title with a Latin word; it changes how the line is laid out and can look scrambled in search results.
- Decide once whether each brand name is written in Latin letters or Arabic, and keep it consistent.
- Let buttons and menus grow, because Arabic text is not the same length as English.
- Translate page titles, meta descriptions and image alt text, which are what people see in search results.

Before launch, test every Arabic page on a real phone, not only in a desktop browser.

## What KF Tech Solutions does here

We design and build websites in Arabic and English with the right-to-left layout planned from the first design, separate pages per language so both appear in search, and a dashboard where you edit the content yourself. Our own site runs in English, Arabic, German and French. See our [web development service](/services/web-development), and for budgeting, [what a company website actually costs in Egypt](/blog/company-website-cost-egypt).

## Common questions

### Should Arabic and English be on separate URLs?

Yes. Google recommends a different URL for each language version, linked with hreflang, rather than switching the language with cookies or browser settings.

### Does hreflang tell Google my page is in Arabic?

No. Google detects the language from the content. Hreflang tells it which pages are versions of each other, so it can show each searcher the right one.

### Should the site switch to Arabic automatically for visitors from Arabic-speaking countries?

No. Google advises against automatic redirects between language versions. Show a clear switcher and keep each visitor on the version they choose.

### Can we flip the English design with CSS and call it done?

Flipping is the start. You still need the direction in the markup, mirrored arrows, unmirrored images, an Arabic font, Arabic line spacing and forms that handle phone numbers.

### Western or Arabic-Indic digits?

Either works. What matters is using one consistently across the site, prices, invoices and messages.

Planning a bilingual site? [Book a free call](/book) or [contact us](/contact) and we will tell you what the Arabic version needs.

## Sources

- [Google Search Central: Tell Google about localized versions of your page](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google Search Central: Managing multi-regional and multilingual sites](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- [W3C: Structural markup and right-to-left text in HTML](https://www.w3.org/International/questions/qa-html-dir)
- [MDN: Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
