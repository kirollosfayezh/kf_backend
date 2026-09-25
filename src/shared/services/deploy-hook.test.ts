import { test } from "node:test";
import assert from "node:assert/strict";
import { _configureForTests, _resetForTests, requestSiteRebuild } from "./deploy-hook.service.js";

const HOOK = "https://api.vercel.com/v1/integrations/deploy/prj_test/hook";

/** Lets the awaited fetch inside the service settle before the next assertion. */
const flush = () => new Promise<void>((resolve) => setImmediate(resolve));

test("deploy hook: three edits inside the window become one POST", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  t.after(_resetForTests);
  t.mock.method(console, "log", () => {});
  const posts: { url: string; method?: string }[] = [];
  _configureForTests({
    url: HOOK,
    delayMs: 60_000,
    fetch: async (url, init) => {
      posts.push({ url, method: init?.method });
      return new Response(null, { status: 201 });
    },
  });

  requestSiteRebuild("blogPosts a");
  t.mock.timers.tick(20_000);
  requestSiteRebuild("projects b");
  t.mock.timers.tick(20_000);
  requestSiteRebuild("settings");
  // Trailing debounce: the clock restarts on every call, so 59.999 s after the
  // last one nothing has been sent yet.
  t.mock.timers.tick(59_999);
  assert.equal(posts.length, 0);
  t.mock.timers.tick(1);
  await flush();
  assert.deepEqual(posts, [{ url: HOOK, method: "POST" }]);

  t.mock.timers.tick(120_000);
  await flush();
  assert.equal(posts.length, 1, "nothing else was queued, so nothing else is sent");
});

test("deploy hook: an edit during an in-flight POST causes exactly one more", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  t.after(_resetForTests);
  t.mock.method(console, "log", () => {});
  let settle: (() => void) | null = null;
  let posts = 0;
  _configureForTests({
    url: HOOK,
    delayMs: 60_000,
    fetch: () =>
      new Promise<Response>((resolve) => {
        posts++;
        settle = () => resolve(new Response(null, { status: 201 }));
      }),
  });

  requestSiteRebuild("first");
  t.mock.timers.tick(60_000);
  assert.equal(posts, 1, "the first POST is in flight");

  // Two more edits while Vercel is still answering: one rebuild covers both.
  requestSiteRebuild("second");
  requestSiteRebuild("third");
  t.mock.timers.tick(60_000);
  assert.equal(posts, 1, "nothing is sent while a POST is in flight");

  settle!();
  await flush();
  t.mock.timers.tick(59_999);
  assert.equal(posts, 1, "the follow-up waits its own debounce window");
  t.mock.timers.tick(1);
  assert.equal(posts, 2);

  settle!();
  await flush();
  t.mock.timers.tick(120_000);
  await flush();
  assert.equal(posts, 2, "the dirty flag is cleared once the follow-up is sent");
});

test("deploy hook: a failed POST is logged, not thrown, and does not block the next one", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  t.after(_resetForTests);
  t.mock.method(console, "log", () => {});
  const errors = t.mock.method(console, "error", () => {});
  let posts = 0;
  _configureForTests({
    url: HOOK,
    delayMs: 1_000,
    fetch: async () => {
      posts++;
      if (posts === 1) throw new Error("ECONNRESET");
      return new Response(null, { status: 201 });
    },
  });

  requestSiteRebuild("a");
  t.mock.timers.tick(1_000);
  await flush();
  assert.equal(posts, 1);
  assert.equal(errors.mock.callCount(), 1);

  requestSiteRebuild("b");
  t.mock.timers.tick(1_000);
  await flush();
  assert.equal(posts, 2);
});

test("deploy hook: without a URL nothing is ever sent", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  t.after(_resetForTests);
  let posts = 0;
  _configureForTests({
    url: "",
    delayMs: 1_000,
    fetch: async () => {
      posts++;
      return new Response(null, { status: 201 });
    },
  });

  requestSiteRebuild("a");
  requestSiteRebuild("b");
  t.mock.timers.tick(10_000);
  await flush();
  assert.equal(posts, 0);
});
