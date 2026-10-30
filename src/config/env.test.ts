import { test } from "node:test";
import assert from "node:assert/strict";
import { detectProduction } from "./env.js";

test("env: production is NODE_ENV=production or Render's RENDER=true", () => {
  assert.equal(detectProduction({ NODE_ENV: "production" }), true);
  assert.equal(detectProduction({ RENDER: "true" }), true);
  assert.equal(detectProduction({ NODE_ENV: "development" }), false);
  assert.equal(detectProduction({}), false);
});
