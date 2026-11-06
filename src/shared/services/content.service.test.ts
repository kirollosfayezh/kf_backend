import { test } from "node:test";
import assert from "node:assert/strict";
import { cardView } from "./content.service.js";
import type { ContentItem } from "../types/index.js";

const words = (n: number) => Array.from({ length: n }, () => "word").join(" ");

const post: ContentItem = {
  slug: "zatca",
  published: true,
  order: 3,
  title: { en: "T", ar: "ع", de: "D", fr: "F" },
  summary: { en: "S", ar: "م", de: "SD", fr: "SF" },
  body: { en: words(400), ar: words(200), de: words(400), fr: words(400) },
  media: ["https://images.unsplash.com/photo-1"],
  meta: {
    tag: "Business Systems",
    tags: ["e-invoicing", "Saudi Arabia"],
    caption: "C",
    alt: "A",
    stats: [["1", "x"]],
    i18n: { ar: { caption: "ت" } },
  },
  createdAt: "2026-11-06T00:00:00.000Z",
  updatedAt: "2026-11-06T00:00:00.000Z",
};

test("cardView: no body, minutes per language, and only the meta a card reads", () => {
  const card = cardView(post);
  assert.equal(card.body, undefined);
  assert.equal("published" in card, false);
  assert.deepEqual(card.meta, {
    tag: "Business Systems",
    tags: ["e-invoicing", "Saudi Arabia"],
    readingMinutes: { en: 2, ar: 1, de: 2, fr: 2 },
  });
  assert.deepEqual(card.title, post.title);
  assert.deepEqual(card.summary, post.summary);
  assert.equal(card.updatedAt, post.updatedAt);
});

test("cardView: names the languages only when the post lacks one", () => {
  // German has a title but no body, French a body but no title: neither counts.
  const card = cardView({ ...post, title: { en: "T", ar: "ع", de: "D", fr: "" }, body: { en: "x", ar: "y", de: "", fr: "z" } });
  assert.deepEqual(card.meta?.langs, ["en", "ar"]);
  assert.equal("langs" in (cardView(post).meta ?? {}), false);
});

test("cardView: an item without a body is returned as it is", () => {
  const { body: _body, ...bare } = post;
  const item = bare as ContentItem;
  assert.equal(cardView(item), item);
});
