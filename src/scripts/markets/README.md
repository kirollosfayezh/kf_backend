# Market pages

The copy for the country landing pages, one file per page and language:

| File | Route |
|---|---|
| `saudi-arabia.en.md`, `saudi-arabia.ar.md` | `/saudi-arabia` (Arabic first) |
| `uae.en.md`, `uae.ar.md` | `/uae` (English first) |
| `gulf.en.md`, `gulf.ar.md` | `/gulf` (Kuwait, Qatar, Bahrain and Oman) |

Market pages are written in English and Arabic only; a German or French file
here is skipped. The English file is the record: a slug without one is not
imported. Only `<slug>.<lang>.md` files are read, so this README is ignored.

## Format

The same as `../services/*.md`:

- Front matter: `title`, `summary`, `seoTitle` (60 characters at most, with
  "KF Tech") and `seoDescription` (160 at most, with "KF Tech Solutions"). No
  double quotes: the parser keeps them literally.
- Body: `##` and `###` headings, one-line list items, tables.
- `## Common questions` (English) or `## أسئلة شائعة` (Arabic) with four to six
  `###` questions; the site turns them into FAQPage data.
- Then a short call to action linking `/contact` and `/book`, and a last
  `## Sources` / `## المصادر` list with the official link for every outside
  fact cited on the page.

## Content rules

- Every outside fact (tax, e-invoicing, data law, payment rails, platforms,
  time zones) links to its source and carries the "last checked" date. When a
  rule changes, update the fact, its link and the date together.
- The only KF price is the starting-price line: "Projects start from $200
  (about SAR 750 / AED 735); final price depends on scope, with a fixed
  written quote after a free call." (`/gulf` gives KWD, QAR, BHD and OMR.)
- Gulf clients are mentioned only anonymously and in general words. No Gulf
  office, phone number, named client, testimonial, partnership, accreditation
  (ZATCA, ASP, OTA and the like) or certification. Local e-invoicing work is
  offered as built to the published specifications; the proven integration is
  Egypt's ETA (`/projects/egypt-eta`).
- Arabic is formal Modern Standard Arabic written for Gulf readers, never
  dialect; titles and headings start with an Arabic word.
- Links go to existing pages only: `/blog/<slug>`, `/services/<slug>`,
  `/projects/<slug>`, `/saudi-arabia`, `/uae`, `/gulf`, `/about`, `/contact`
  and `/book`.

## Importing

`update-market-pages` imports these files into the markets collection. It is a
dry run by default, creates new pages as drafts, and skips a language that was
edited in the dashboard since the last run unless `--force`:

```sh
npm run update-market-pages                                   # dry run
npm run update-market-pages -- --slugs saudi-arabia,uae --apply
npm run update-market-pages -- --slugs gulf --apply --publish
```

Redeploy the site afterwards so the pages are prerendered.
