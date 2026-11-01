import { check } from "./harness.js";
import type { Smoke } from "./harness.js";

/** Demo websites: admin-only upload, the 1 MB ceiling, sandboxed serving, replace and remove. */
export async function demosSection(ctx: Smoke) {
  const { call, authHeaders } = ctx;
  console.log("\nDemos");
  const put = (slug: string, html: unknown, headers = authHeaders) =>
    call(`/api/admin/demos/${slug}`, { method: "PUT", headers, body: JSON.stringify({ html }) });
  const page = `<!doctype html><html><head><title>Lumina</title></head><body><header>Lumina Dental</header>${"<p>x</p>".repeat(20000)}</body></html>`;

  const anon = await put("lumina-dental", page, { "content-type": "application/json" });
  check("uploading a demo needs an admin session", anon.status === 401, anon.status);

  const created = await put("lumina-dental", page);
  check(
    "an admin uploads a 160 kB page (over the general 100 kB body limit)",
    created.status === 200 && created.body?.data?.slug === "lumina-dental" && created.body?.data?.size === Buffer.byteLength(page) && !("html" in created.body.data),
    created
  );
  const badSlug = await put("Lumina_Dental", page);
  check("a slug with capitals or underscores is rejected", badSlug.status === 400, badSlug);
  const notHtml = await put("plain-text", "just words");
  check("a file that is not HTML is rejected", notHtml.status === 400, notHtml);
  const huge = await put("too-big", `<html><body>${"x".repeat(1_100_000)}</body></html>`);
  check("a page over 1 MB is rejected", huge.status === 400 || huge.status === 413, huge.status);

  const served = await fetch(`${ctx.base}/demos/lumina-dental`);
  const body = await served.text();
  const csp = served.headers.get("content-security-policy") ?? "";
  check(
    "the demo is served as HTML in an opaque-origin sandbox that can send nothing",
    served.status === 200 &&
      served.headers.get("content-type")?.startsWith("text/html") === true &&
      /^sandbox [^;]*allow-scripts/.test(csp) &&
      !csp.includes("allow-same-origin") &&
      csp.includes("connect-src 'none'") &&
      csp.includes("form-action 'none'"),
    { status: served.status, csp }
  );
  check(
    "it carries noindex (header and meta), the concept notice, and the page untouched",
    served.headers.get("x-robots-tag")?.includes("noindex") === true &&
      body.includes('<head><meta name="robots" content="noindex, nofollow">') &&
      body.includes("<header>Lumina Dental</header>") &&
      body.includes("Concept demo by KF Tech Solutions") &&
      body.indexOf("kf-demo-note") < body.lastIndexOf("</body>"),
    body.slice(0, 200)
  );

  const replaced = await put("lumina-dental", "<!doctype html><html><head></head><body>v2</body></html>");
  const listed = await call("/api/admin/demos", { headers: authHeaders });
  check(
    "re-uploading replaces the page in place and the list leaves the HTML out",
    replaced.status === 200 &&
      replaced.body?.data?.createdAt === created.body?.data?.createdAt &&
      listed.body?.data?.length === 1 &&
      !("html" in listed.body.data[0]) &&
      (await (await fetch(`${ctx.base}/demos/lumina-dental`)).text()).includes("v2"),
    listed.body
  );

  const removed = await call("/api/admin/demos/lumina-dental", { method: "DELETE", headers: authHeaders });
  const gone = await fetch(`${ctx.base}/demos/lumina-dental`);
  check("a removed demo answers 404, still noindex", removed.status === 200 && gone.status === 404 && gone.headers.get("x-robots-tag")?.includes("noindex") === true, gone.status);
  const missing = await fetch(`${ctx.base}/demos/..%2Fapi`);
  check("a malformed demo path is a plain 404", missing.status === 404, missing.status);
}
