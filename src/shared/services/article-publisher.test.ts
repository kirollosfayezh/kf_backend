import { test } from "node:test";
import assert from "node:assert/strict";
import { publishNewArticles, type PublisherDeps } from "./article-publisher.service.js";
import type { ContentItem } from "../types.js";

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
