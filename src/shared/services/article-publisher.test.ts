import { test } from "node:test";
import assert from "node:assert/strict";
import { fillMissingTranslations, publishNewArticles, type PublisherDeps, type TranslationDeps } from "./article-publisher.service.js";
import type { ContentItem } from "../types/index.js";

/** An in-memory CMS + import log, so nothing touches a database. */
function harness(options: { inCms?: string[]; imported?: string[]; files?: string[]; failCreate?: string } = {}) {
  const cms = new Set(options.inCms ?? []);
  const imported = new Map((options.imported ?? []).map((s) => [s, "earlier"]));
  const created: ContentItem[] = [];
  const rebuilds: string[] = [];
  const logs: string[] = [];
  const files = options.files ?? ["a", "b", "c"];
  const deps: PublisherDeps = {
    load: async () => files.map((slug) => ({ slug, published: true, title: { en: slug, ar: "", de: "", fr: "" } }) as Partial<ContentItem>),
    existingSlugs: async () => new Set(cms),
    create: async (item) => {
      if (item.slug === options.failCreate) throw new Error("write failed");
      created.push(item);
      cms.add(item.slug);
    },
    imported: async (slug) => imported.has(slug),
    record: async (slug, at) => {
      if (!imported.has(slug)) imported.set(slug, at);
    },
    rebuild: (reason) => rebuilds.push(reason),
    now: () => "2026-10-23T10:00:00.000Z",
    log: (m) => logs.push(m),
  };
  return { deps, cms, imported, created, rebuilds, logs };
}

test("creates new articles, records them and asks for one rebuild", async () => {
  const h = harness();
  const out = await publishNewArticles(["a", "b"], h.deps);
  assert.deepEqual(out, ["a", "b"]);
  assert.deepEqual(h.created.map((c) => c.slug), ["a", "b"]);
  assert.equal(h.created[0].createdAt, "2026-10-23T10:00:00.000Z");
  assert.ok(h.imported.has("a") && h.imported.has("b"));
  assert.deepEqual(h.rebuilds, ["blogPosts a, b"]);
});

test("never touches an article already in the CMS, but remembers it", async () => {
  const h = harness({ inCms: ["a"] });
  const out = await publishNewArticles(["a", "b"], h.deps);
  assert.deepEqual(out, ["b"]);
  assert.deepEqual(h.created.map((c) => c.slug), ["b"]);
  assert.ok(h.imported.has("a"));
});

test("does not bring back an article deleted after it was published", async () => {
  // Published on an earlier boot, then deleted in the dashboard: the CMS no
  // longer has it, the import log still does.
  const h = harness({ imported: ["a"] });
  const out = await publishNewArticles(["a"], h.deps);
  assert.deepEqual(out, []);
  assert.equal(h.created.length, 0);
  assert.deepEqual(h.rebuilds, []);
});

test("a second boot is a no-op", async () => {
  const h = harness();
  await publishNewArticles(["a", "b"], h.deps);
  const again = await publishNewArticles(["a", "b"], h.deps);
  assert.deepEqual(again, []);
  assert.equal(h.created.length, 2);
  assert.equal(h.rebuilds.length, 1);
});

test("a listed slug with no file is skipped and not recorded", async () => {
  const h = harness({ files: ["a"] });
  const out = await publishNewArticles(["a", "missing"], h.deps);
  assert.deepEqual(out, ["a"]);
  assert.ok(!h.imported.has("missing"));
  assert.ok(h.logs.some((l) => l.includes("missing")));
});

test("one failed write does not stop the others, and is retried next boot", async () => {
  const h = harness({ failCreate: "a" });
  const out = await publishNewArticles(["a", "b"], h.deps);
  assert.deepEqual(out, ["b"]);
  assert.ok(!h.imported.has("a"), "a failed article must not be marked as published");
  assert.ok(h.logs.some((l) => l.includes("a failed")));
});

test("never throws, even when loading fails", async () => {
  const h = harness();
  h.deps.load = async () => {
    throw new Error("disk gone");
  };
  const out = await publishNewArticles(["a"], h.deps);
  assert.deepEqual(out, []);
  assert.ok(h.logs.some((l) => l.includes("disk gone")));
});

test("every slug in AUTO_PUBLISH has an English article file", async () => {
  const { AUTO_PUBLISH } = await import("./article-publisher.service.js");
  const { loadArticles } = await import("../../scripts/seed-articles.js");
  const slugs = new Set((await loadArticles(new URL("../../scripts/articles/", import.meta.url))).map((a) => a.slug));
  for (const slug of AUTO_PUBLISH) assert.ok(slugs.has(slug), `articles/${slug}.en.md is missing`);
});

/** An in-memory CMS + translation log for `fillMissingTranslations`. */
function translationHarness(options: {
  posts?: { slug: string; title?: Record<string, string>; summary?: Record<string, string>; body?: Record<string, string> }[];
  files?: Record<string, Partial<Record<"en" | "ar" | "de" | "fr", string>>>;
  handled?: string[];
  failSet?: string;
} = {}) {
  const loc = (v: Record<string, string> = {}) => ({ en: "", ar: "", de: "", fr: "", ...v });
  const posts = (options.posts ?? []).map((p, i) => ({
    id: `id${i}`,
    slug: p.slug,
    title: loc(p.title),
    summary: loc(p.summary),
    body: loc(p.body),
  }));
  const files = options.files ?? {};
  const handled = new Set(options.handled ?? []);
  const writes: { id: string; fields: Record<string, string> }[] = [];
  const rebuilds: string[] = [];
  const logs: string[] = [];
  const deps: TranslationDeps = {
    load: async () =>
      Object.entries(files).map(([slug, langs]) => {
        const field = (prefix: string) => loc(Object.fromEntries(Object.entries(langs).map(([l, v]) => [l, v ? `${prefix} ${v}` : ""])));
        return { slug, title: field("T"), summary: field("S"), body: field("B") } as Partial<ContentItem>;
      }),
    posts: async () => posts,
    set: async (id, fields) => {
      if (posts.find((p) => p.id === id)?.slug === options.failSet) throw new Error("write failed");
      writes.push({ id, fields });
    },
    handled: async () => new Set(handled),
    record: async (slug, lang) => {
      handled.add(`${slug}:${lang}`);
    },
    rebuild: (reason) => rebuilds.push(reason),
    now: () => "2026-10-24T10:00:00.000Z",
    log: (m) => logs.push(m),
  };
  return { deps, writes, handled, rebuilds, logs };
}

test("fills a language the CMS article lacks, records it and asks for one rebuild", async () => {
  const h = translationHarness({
    posts: [{ slug: "a", title: { en: "A", ar: "أ" }, body: { en: "x", ar: "y" } }],
    files: { a: { en: "a", ar: "a", de: "a", fr: "a" } },
  });
  const out = await fillMissingTranslations(h.deps);
  assert.deepEqual(out, ["a:de", "a:fr"]);
  assert.deepEqual(h.writes, [
    {
      id: "id0",
      fields: {
        "title.de": "T a", "summary.de": "S a", "body.de": "B a",
        "title.fr": "T a", "summary.fr": "S a", "body.fr": "B a",
        updatedAt: "2026-10-24T10:00:00.000Z",
      },
    },
  ]);
  // Arabic was already in the CMS: not written, but remembered as handled.
  assert.ok(["a:ar", "a:de", "a:fr"].every((k) => h.handled.has(k)));
  assert.deepEqual(h.rebuilds, ["blogPosts translations 2"]);
});

test("never replaces text typed in the dashboard", async () => {
  const h = translationHarness({
    posts: [{ slug: "a", title: { de: "Mein Titel" }, body: { de: "Mein Text" } }],
    files: { a: { en: "a", de: "a" } },
  });
  assert.deepEqual(await fillMissingTranslations(h.deps), []);
  assert.equal(h.writes.length, 0);
  assert.ok(h.handled.has("a:de"));
  assert.deepEqual(h.rebuilds, []);
});

test("fills only the blank fields of a missing language", async () => {
  const h = translationHarness({
    posts: [{ slug: "a", title: { de: "Mein Titel" } }],
    files: { a: { en: "a", de: "a" } },
  });
  await fillMissingTranslations(h.deps);
  assert.deepEqual(h.writes[0].fields, { "summary.de": "S a", "body.de": "B a", updatedAt: "2026-10-24T10:00:00.000Z" });
});

test("does not bring back a translation cleared after it was handled", async () => {
  const h = translationHarness({ posts: [{ slug: "a" }], files: { a: { en: "a", de: "a" } }, handled: ["a:de"] });
  assert.deepEqual(await fillMissingTranslations(h.deps), []);
  assert.equal(h.writes.length, 0);
});

test("a language with no file is not recorded, so a later file still applies", async () => {
  const h = translationHarness({ posts: [{ slug: "a" }], files: { a: { en: "a", de: "a" } } });
  await fillMissingTranslations(h.deps);
  assert.ok(h.handled.has("a:de"));
  assert.ok(!h.handled.has("a:fr") && !h.handled.has("a:ar"));
});

test("never creates: an article only in the files is left alone", async () => {
  const h = translationHarness({ posts: [], files: { a: { en: "a", de: "a" } } });
  assert.deepEqual(await fillMissingTranslations(h.deps), []);
  assert.equal(h.writes.length, 0);
});

test("one failed write does not stop the others, and is retried next boot", async () => {
  const h = translationHarness({
    posts: [{ slug: "a" }, { slug: "b" }],
    files: { a: { en: "a", de: "a" }, b: { en: "b", de: "b" } },
    failSet: "a",
  });
  assert.deepEqual(await fillMissingTranslations(h.deps), ["b:de"]);
  assert.ok(!h.handled.has("a:de"), "a failed write must not be marked as handled");
  assert.ok(h.logs.some((l) => l.includes("a failed")));
});

test("translations: never throws, even when loading fails", async () => {
  const h = translationHarness();
  h.deps.load = async () => {
    throw new Error("disk gone");
  };
  assert.deepEqual(await fillMissingTranslations(h.deps), []);
  assert.ok(h.logs.some((l) => l.includes("skipped")));
});
