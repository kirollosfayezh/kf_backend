import { test } from "node:test";
import assert from "node:assert/strict";
import { normalizePhone } from "./phone.js";

// [as typed, visitor's country hint, expected E.164 or null for rejected]
const CASES: [string, string | undefined, string | null][] = [
  ["01012345678", "EG", "+201012345678"],
  ["٠١٠١٢٣٤٥٦٧٨", "EG", "+201012345678"], // Arabic-Indic digits
  ["+20 101 234 5678", undefined, "+201012345678"],
  ["00201012345678", undefined, "+201012345678"], // 00 international prefix
  ["201012345678", "DE", "+201012345678"], // country code without "+" beats a German landline reading
  ["0501234567", "SA", "+966501234567"],
  ["+971 50 123 4567", undefined, "+971501234567"],
  ["0151 23456789", "DE", "+4915123456789"],
  ["06 12 34 56 78", "FR", "+33612345678"],
  ["(415) 555-2671", "US", "+14155552671"],
  ["4155552671", "US", "+14155552671"], // not misread as a Swiss +41 number
  ["07400 123456", "GB", "+447400123456"],
  ["966501234567", "EG", "+966501234567"],
  ["12345", "EG", null],
  ["01012345", "EG", null], // too short for Egypt
  ["+20 999 999 9999", undefined, null], // right length, not an issued range
];

for (const [input, hint, want] of CASES) {
  test(`${JSON.stringify(input)} with ${hint ?? "no"} hint -> ${want}`, () => {
    assert.equal(normalizePhone(input, hint)?.e164 ?? null, want);
  });
}
