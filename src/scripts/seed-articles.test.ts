import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { loadArticles } from "./seed-articles.js";

/** Writes `{ "<slug>.<lang>.md": source }` to a throwaway folder and loads it. */
async function load(files: Record<string, string>) {
  const dir = await mkdtemp(join(tmpdir(), "kf-articles-"));
  try {
    for (const [name, source] of Object.entries(files)) await writeFile(join(dir, name), source, "utf8");
    return await loadArticles(pathToFileURL(`${dir}/`));
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

const EN = [
  "---",
  "title: Payment gateways in Saudi Arabia",
  "summary: How to choose one.",
  "tag: Business Systems",
  "tags: payments, Saudi Arabia",
  "alt: A card terminal on a shop counter",
  "caption: Every gateway settles differently.",
  "stats: 3|gateways compared; 24h|typical settlement",
  "---",
  "",
  "Body.",
].join("\n");

test("a translation's own caption, alt, stats and tags go into meta.i18n.<lang>", async () => {
  const [post] = await load({
    "gateways.en.md": EN,
    "gateways.ar.md": [
      "---",
      "title: بوابات الدفع في السعودية",
      "summary: كيف تختار.",
      "tags: المدفوعات, السعودية",
      "alt: جهاز دفع على طاولة متجر",
      "caption: تختلف التسوية من بوابة إلى أخرى.",
      "stats: 3|بوابات قورنت; 24 ساعة|مدة التسوية المعتادة",
      "---",
      "",
      "النص.",
    ].join("\n"),
  });

  assert.deepEqual(post.meta?.i18n, {
    ar: {
      caption: "تختلف التسوية من بوابة إلى أخرى.",
      alt: "جهاز دفع على طاولة متجر",
      stats: [["3", "بوابات قورنت"], ["24 ساعة", "مدة التسوية المعتادة"]],
      tags: ["المدفوعات", "السعودية"],
    },
  });
  // English stays where it always was.
  assert.equal(post.meta?.caption, "Every gateway settles differently.");
  assert.equal(post.meta?.alt, "A card terminal on a shop counter");
  assert.deepEqual(post.meta?.tags, ["payments", "Saudi Arabia"]);
  assert.deepEqual(post.meta?.stats, [["3", "gateways compared"], ["24h", "typical settlement"]]);
  assert.equal(post.title?.ar, "بوابات الدفع في السعودية");
});

test("only the keys a translation has are stored, and only for languages that have any", async () => {
  const [post] = await load({
    "gateways.en.md": EN,
    "gateways.de.md": "---\ntitle: Zahlungsanbieter\nsummary: Wie man wählt.\ntags: Zahlungen, Saudi-Arabien\n---\n\nText.",
    "gateways.fr.md": "---\ntitle: Passerelles\nsummary: Comment choisir.\ncaption:\nstats: malformed\n---\n\nTexte.",
  });
  // fr's blank caption and malformed stats are nothing to store, so fr is absent.
  assert.deepEqual(post.meta?.i18n, { de: { tags: ["Zahlungen", "Saudi-Arabien"] } });
});

test("translations with only a title and summary add no i18n key, as before", async () => {
  const [post] = await load({
    "gateways.en.md": EN,
    "gateways.ar.md": "---\ntitle: بوابات الدفع\nsummary: كيف تختار.\n---\n\nالنص.",
  });
  assert.ok(post.meta && !("i18n" in post.meta), "no i18n key when no translation carries extras");
  assert.deepEqual(Object.keys(post.meta ?? {}), ["tag", "tags", "caption", "alt", "stats"]);
});
