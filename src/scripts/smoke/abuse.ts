import { check } from "./harness.js";
import type { Smoke } from "./harness.js";

/** Rate limits and upload type checks. Runs last: it deliberately exhausts the lead limiter. */
export async function abuseSection(ctx: Smoke) {
  const { call, post, token } = ctx;
  console.log("\nAbuse protection");
  // Runs last: it deliberately exhausts the lead limiter for this IP/window.
  let sawRateLimit = false;
  for (let i = 0; i < 8; i++) {
    const res = await call("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        source: "contact",
        name: `Flood ${i}`,
        email: "flood@example.com",
        message: "flood",
      }),
    });
    if (res.status === 429) {
      sawRateLimit = true;
      break;
    }
  }
  check("repeated lead submissions get rate limited", sawRateLimit);

  // Distinct addresses, so it is the limiter and not the idempotent 200 that stops the flood.
  let sawNewsletterLimit = false;
  for (let i = 0; i < 8; i++) {
    const res = await post("/api/newsletter", { email: `flood${i}@example.com` });
    if (res.status === 429) {
      sawNewsletterLimit = true;
      break;
    }
  }
  check("repeated newsletter sign-ups get rate limited", sawNewsletterLimit);

  const rejectedUpload = await call("/api/admin/media", {
    method: "POST",
    headers: { authorization: `Bearer ${token}` },
    body: (() => {
      const form = new FormData();
      form.append("file", new Blob(["<svg onload=alert(1)>"], { type: "image/svg+xml" }), "x.svg");
      return form;
    })(),
  });
  check(
    "media upload rejects a disallowed file type (svg)",
    rejectedUpload.status === 400,
    rejectedUpload
  );
}
