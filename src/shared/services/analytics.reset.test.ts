import { test } from "node:test";
import assert from "node:assert/strict";
import { RESET_CONFIRMATION, resetAnalytics } from "./analytics.service.js";

test("wiping analytics needs the typed confirmation", async () => {
  for (const confirm of [undefined, "", "reset", "yes", true]) {
    await assert.rejects(resetAnalytics(confirm), /Type RESET to confirm/);
  }
  assert.equal(RESET_CONFIRMATION, "RESET");
});
