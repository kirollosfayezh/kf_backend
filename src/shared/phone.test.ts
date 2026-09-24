import { test } from "node:test";
import assert from "node:assert/strict";
import { getCountries, getExampleNumber, type CountryCode } from "libphonenumber-js/max";
import examples from "libphonenumber-js/examples.mobile.json";
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

/**
 * Every country libphonenumber knows, with its own example mobile number typed
 * the ways people actually type: national, international, 00-prefixed, bare
 * digits, Arabic-Indic digits and with dashes. Each must land on the same E.164.
 */

const toArabic = (s: string) => s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);

for (const country of getCountries()) {
  test(`every country: ${country}`, () => {
    const ex = getExampleNumber(country as CountryCode, examples as never);
    assert.ok(ex, `no example number for ${country}`);
    const want = ex.number;
    const other = country === "EG" ? "DE" : "EG";
    const typed: [string, string | undefined][] = [
      [ex.formatNational(), country],
      [ex.formatInternational(), undefined],
      [ex.formatInternational(), other],
      [`00${want.slice(1)}`, undefined],
      [ex.nationalNumber, country],
      [toArabic(ex.formatNational()), country],
      [ex.formatNational().replace(/ /g, "-"), country],
    ];
    for (const [input, hint] of typed) {
      assert.equal(normalizePhone(input, hint)?.e164, want, `${JSON.stringify(input)} with ${hint ?? "no"} hint`);
    }
    // The visitor's chosen country is kept for a local number, including
    // territories that share a numbering plan (IM/GB, AX/FI, CX/AU…).
    assert.equal(normalizePhone(ex.formatNational(), country)?.country, country);
  });
}
