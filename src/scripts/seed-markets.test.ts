import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { lintMarketPage, loadMarketPages, planMarketPages, sourceHash, type MarketPage } from "./seed-markets.js";
import type { ContentItem } from "../shared/types/index.js";

const NOW = "2026-11-06T10:00:00.000Z";

/** Placeholder copy — the real pages are written separately. */
function page(slug = "saudi-arabia", tweak: Partial<Record<"en" | "ar", string>> = {}): MarketPage {
  return {
    slug,
    title: { en: "Placeholder heading", ar: "عنوان تجريبي", de: "", fr: "" },
    summary: { en: "Placeholder intro.", ar: "مقدمة تجريبية.", de: "", fr: "" },
    body: {
      en: tweak.en ?? "Placeholder body.\n\n## Common questions\n\n### Q?\n\nA.",
      ar: tweak.ar ?? "نص تجريبي.\n\n## أسئلة شائعة\n\n### سؤال؟\n\nجواب.",
      de: "",
      fr: "",
    },
    seoTitle: { en: "Placeholder title | KF Tech", ar: "عنوان تجريبي | KF Tech", de: "", fr: "" },
    seoDescription: { en: "Placeholder description.", ar: "وصف تجريبي.", de: "", fr: "" },
  };
}

/** The document a first `--apply` would have written for `p`. */
function stored(p: MarketPage, extra: Partial<ContentItem> = {}): ContentItem & { id: string } {
  const [change] = planMarketPages([], [p], { now: NOW });
  return { ...(change.create as ContentItem), id: "m1", ...extra };
}

test("loads English and Arabic files into one page, and nothing else", async () => {
  const dir = await mkdtemp(join(tmpdir(), "kf-markets-"));
  try {
    const front = (title: string) =>
      `---\ntitle: ${title}\nsummary: Intro ${title}\nseoTitle: ${title} | KF Tech\nseoDescription: About ${title}\n---\n\nBody of ${title}\n`;
    await writeFile(join(dir, "uae.en.md"), front("UAE"));
    await writeFile(join(dir, "uae.ar.md"), front("الإمارات"));
    // German and French market pages are never published.
    await writeFile(join(dir, "uae.de.md"), front("VAE"));
    // Arabic alone has no English record to fall back to.
    await writeFile(join(dir, "gulf.ar.md"), front("الخليج"));

    const pages = await loadMarketPages(pathToFileURL(`${dir}/`));
    assert.deepEqual(pages.map((p) => p.slug), ["uae"]);
    const [uae] = pages;
    assert.equal(uae.title.en, "UAE");
    assert.equal(uae.title.ar, "الإمارات");
    assert.equal(uae.title.de, "");
    assert.equal(uae.summary.ar, "Intro الإمارات");
    assert.equal(uae.body.en, "Body of UAE");
    assert.equal(uae.seoTitle.en, "UAE | KF Tech");
    assert.equal(uae.seoDescription.ar, "About الإمارات");
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});

test("a missing markets directory is no pages, not an error", async () => {
  assert.deepEqual(await loadMarketPages(pathToFileURL(join(tmpdir(), "kf-no-such-markets-dir/"))), []);
});

test("creates a new page as a draft, in the site's order, with its SEO fields in meta", () => {
  const [change] = planMarketPages([], [page("uae")], { now: NOW });
  assert.equal(change.action, "create");
  assert.equal(change.published, false);
  const doc = change.create!;
  assert.equal(doc.published, false);
  assert.equal(doc.order, 2);
  assert.equal(doc.title.ar, "عنوان تجريبي");
  assert.equal(doc.createdAt, NOW);
  assert.deepEqual((doc.meta?.seoTitle as Record<string, string>).en, "Placeholder title | KF Tech");
  assert.deepEqual(Object.keys(doc.meta?.sourceHash as object), ["en", "ar"]);
  assert.match(change.langs.en!, /^create/);
});

test("--publish creates the page live", () => {
  const [change] = planMarketPages([], [page()], { publish: true, now: NOW });
  assert.equal(change.create!.published, true);
  assert.equal(change.published, true);
});

test("a second run with the same files writes nothing", () => {
  const p = page();
  const [change] = planMarketPages([stored(p)], [p], { now: NOW });
  assert.equal(change.action, "none");
  assert.equal(change.patch, undefined);
  assert.deepEqual(change.langs, { en: "no change", ar: "no change" });
});

test("an edited file updates its language, merging meta and keeping de/fr, order and published", () => {
  const before = stored(page(), {
    order: 7,
    published: true,
    title: { en: "Placeholder heading", ar: "عنوان تجريبي", de: "Von Hand", fr: "" },
    meta: { ...stored(page()).meta, points: ["kept"] },
  });
  const next = page("saudi-arabia", { en: "A rewritten body.\n\n## Common questions\n\n### Q?\n\nA." });
  const [change] = planMarketPages([before], [next], { now: NOW });
  assert.equal(change.action, "update");
  assert.match(change.langs.en!, /^update/);
  assert.equal(change.langs.ar, "no change");
  const patch = change.patch!;
  assert.equal(patch.body?.en, next.body.en);
  assert.equal(patch.title?.de, "Von Hand");
  assert.deepEqual((patch.meta as Record<string, unknown>).points, ["kept"]);
  assert.equal((patch.meta?.sourceHash as Record<string, string>).en, sourceHash(next.title.en, next.summary.en, next.body.en));
  assert.equal("published" in patch, false);
  assert.equal("order" in patch, false);
});

test("a language edited in the dashboard is skipped unless forced", () => {
  const edited = stored(page());
  edited.body = { ...edited.body!, ar: "نص كتبه محرر في لوحة التحكم." };
  const next = page("saudi-arabia", { ar: "نص جديد من الملف.\n\n## أسئلة شائعة\n\n### سؤال؟\n\nجواب." });

  const [kept] = planMarketPages([edited], [next], { now: NOW });
  assert.equal(kept.action, "none");
  assert.match(kept.langs.ar!, /^skipped — edited in the dashboard/);

  const [forced] = planMarketPages([edited], [next], { force: true, now: NOW });
  assert.equal(forced.action, "update");
  assert.equal(forced.patch?.body?.ar, next.body.ar);
});

test("a page first written in the dashboard keeps its text, but takes new SEO fields over identical text", () => {
  const p = page();
  const handMade = stored(p, { meta: {} });
  const [change] = planMarketPages([handMade], [p], { now: NOW });
  // Same title, summary and body as the files: only the SEO fields are new.
  assert.equal(change.action, "update");
  assert.deepEqual((change.patch?.meta?.seoTitle as Record<string, string>).ar, p.seoTitle.ar);

  const different = stored(p, { meta: {}, body: { en: "Written by hand.", ar: "", de: "", fr: "" } });
  const [skipped] = planMarketPages([different], [p], { now: NOW });
  assert.match(skipped.langs.en!, /^skipped/);
  // An empty language is nobody's work yet: the file fills it.
  assert.match(skipped.langs.ar!, /^update/);
});

test("--publish puts an unchanged draft live without rewriting its text", () => {
  const p = page();
  const [change] = planMarketPages([stored(p)], [p], { publish: true, now: NOW });
  assert.equal(change.action, "update");
  assert.deepEqual(change.patch, { published: true, updatedAt: NOW });
});

test("the dry-run checks flag what the site would cut or miss", () => {
  assert.deepEqual(lintMarketPage(page(), "en"), []);
  assert.deepEqual(lintMarketPage(page(), "ar"), []);
  const long = page();
  long.seoTitle.en = "A search title that runs well past sixty characters | KF Tech";
  long.seoDescription.en = "x".repeat(161);
  long.body.en = "No questions here.";
  const warnings = lintMarketPage(long, "en");
  assert.ok(warnings.some((w) => w.startsWith("seoTitle is 61 chars")));
  assert.ok(warnings.some((w) => w.startsWith("seoDescription is 161 chars")));
  assert.ok(warnings.includes("no FAQ heading, so no FAQPage data"));
  const noBrand = page();
  noBrand.seoTitle.ar = "عنوان بلا اسم الشركة";
  assert.deepEqual(lintMarketPage(noBrand, "ar"), ['seoTitle lacks "KF Tech"']);
});
