import { test } from "node:test";
import assert from "node:assert/strict";
import { AppError } from "../errors/app-error.js";
import { normalizeBrand } from "./settings.service.js";

const EMPTY = {
  alternateNames: { en: [], ar: [], de: [], fr: [] },
  foundingDate: "",
  founderProfiles: [],
  profiles: [],
  notAffiliatedWith: [],
};

/** Asserts `fn` throws a 400 whose message contains `fragment`. */
function rejects400(fn: () => unknown, fragment: string) {
  assert.throws(fn, (err: unknown) => err instanceof AppError && err.statusCode === 400 && err.message.includes(fragment));
}

test("normalizeBrand: a missing or empty block becomes the full empty shape", () => {
  assert.deepEqual(normalizeBrand(undefined), EMPTY);
  assert.deepEqual(normalizeBrand(null), EMPTY);
  assert.deepEqual(normalizeBrand({}), EMPTY);
  assert.deepEqual(normalizeBrand({ alternateNames: { en: ["KF Tech"] } }), {
    ...EMPTY,
    alternateNames: { ...EMPTY.alternateNames, en: ["KF Tech"] },
  });
});

test("normalizeBrand: lists are trimmed, deduplicated and emptied of blanks", () => {
  const brand = normalizeBrand({
    alternateNames: { en: [" KF Tech ", "KFTech", "KF Tech", ""], ar: ["كي إف تك"] },
    founderProfiles: ["https://github.com/kirollosfayezh", "https://github.com/kirollosfayezh", "  "],
    profiles: [" https://www.snapchat.com/add/kftechsolutions "],
    foundingDate: " 2020 ",
    notAffiliatedWith: [
      { name: " KFTECH Software Solutions ", url: "https://kftechsols.com" },
      { name: "", url: "" },
      null,
    ],
  });
  assert.deepEqual(brand, {
    alternateNames: { en: ["KF Tech", "KFTech"], ar: ["كي إف تك"], de: [], fr: [] },
    foundingDate: "2020",
    founderProfiles: ["https://github.com/kirollosfayezh"],
    profiles: ["https://www.snapchat.com/add/kftechsolutions"],
    notAffiliatedWith: [{ name: "KFTECH Software Solutions", url: "https://kftechsols.com" }],
  });
});

test("normalizeBrand: every link must be https", () => {
  rejects400(() => normalizeBrand({ profiles: ["http://clutch.co/profile/kf"] }), "https://");
  rejects400(() => normalizeBrand({ founderProfiles: ["github.com/kirollosfayezh"] }), "https://");
  rejects400(() => normalizeBrand({ profiles: ["https://example.com/a b"] }), "https://");
  rejects400(() => normalizeBrand({ notAffiliatedWith: [{ name: "X", url: "http://x.com" }] }), "https://");
  rejects400(() => normalizeBrand({ notAffiliatedWith: [{ name: "", url: "https://x.com" }] }), "name");
});

test("normalizeBrand: the founding date is a year, month or day — or blank", () => {
  assert.equal(normalizeBrand({ foundingDate: "2020-06" }).foundingDate, "2020-06");
  assert.equal(normalizeBrand({ foundingDate: "2020-06-15" }).foundingDate, "2020-06-15");
  assert.equal(normalizeBrand({ foundingDate: "" }).foundingDate, "");
  rejects400(() => normalizeBrand({ foundingDate: "twenty-twenty" }), "founding date");
  rejects400(() => normalizeBrand({ foundingDate: "2020-6" }), "founding date");
});

test("normalizeBrand: over-long lists are refused, not silently cut", () => {
  const names = Array.from({ length: 11 }, (_, i) => `Name ${i}`);
  rejects400(() => normalizeBrand({ alternateNames: { en: names } }), "at most 10");
  // Duplicates do not count toward the cap.
  assert.equal(normalizeBrand({ alternateNames: { en: [...names.slice(0, 10), "Name 0"] } }).alternateNames.en.length, 10);
  const profiles = Array.from({ length: 51 }, (_, i) => `https://example.com/${i}`);
  rejects400(() => normalizeBrand({ profiles }), "at most 50");
  rejects400(() => normalizeBrand({ founderProfiles: profiles.slice(0, 21) }), "at most 20");
});

test("normalizeBrand: a malformed block is rejected rather than coerced", () => {
  rejects400(() => normalizeBrand("KF Tech"), "object");
  rejects400(() => normalizeBrand({ alternateNames: { en: "KF Tech" } }), "list");
  rejects400(() => normalizeBrand({ profiles: [42] }), "text");
  rejects400(() => normalizeBrand({ notAffiliatedWith: "kftechsols.com" }), "list");
});
