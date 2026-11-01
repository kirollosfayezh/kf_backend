import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";

/**
 * Demo websites: a whole page uploaded from the dashboard and served at
 * `<site>/demos/<slug>` (the site proxies that path here).
 *
 * The page is arbitrary HTML and runs on the site's own domain, so it is never
 * trusted. `DEMO_CSP` puts it in a sandbox: the browser gives it an opaque
 * origin, so it cannot read the site's cookies or storage, and it may not send
 * anything anywhere — no fetch, no form posts. A page someone uploads with a
 * stolen dashboard login could still *show* anything, but could not collect it.
 */

/** Lower-case words joined by single hyphens, the same shape as a project slug. */
export const DEMO_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const DEMO_MAX_BYTES = 1_000_000;

export const DEMO_CSP = [
  // No allow-same-origin: that is what makes the origin opaque.
  "sandbox allow-scripts allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox",
  "default-src 'none'",
  "script-src 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com",
  "style-src 'unsafe-inline' https:",
  "font-src https: data:",
  "img-src https: data: blob:",
  "media-src https: data: blob:",
  "frame-src https://www.youtube-nocookie.com https://www.youtube.com https://www.google.com",
  "connect-src 'none'",
  "form-action 'none'",
  "base-uri 'none'",
  "object-src 'none'",
  "frame-ancestors 'none'",
].join("; ");

const SITE_URL = (process.env.SITE_URL ?? "https://kftechsolutions.dev").trim().replace(/\/+$/, "");
const FALLBACK_WHATSAPP = "201500099671";

export function assertDemoSlug(slug: string): string {
  const s = slug.trim();
  if (s.length < 2 || s.length > 80 || !DEMO_SLUG.test(s)) {
    throw AppError.badRequest("Use lower-case letters, numbers and hyphens for the demo link, e.g. dental-clinic");
  }
  return s;
}

function assertDemoHtml(html: unknown): string {
  if (typeof html !== "string" || !html.trim()) throw AppError.badRequest("The file is empty");
  if (Buffer.byteLength(html) > DEMO_MAX_BYTES) {
    throw AppError.badRequest("The file is over 1 MB. Link photos from the web instead of embedding them");
  }
  if (!/<html[\s>]|<!doctype html|<body[\s>]/i.test(html)) {
    throw AppError.badRequest("That does not look like an HTML page (no <html> or <body>)");
  }
  return html;
}

export function listDemos() {
  return repos.demos.list();
}

export async function getDemoSummary(slug: string) {
  const demo = await repos.demos.summaryBySlug(assertDemoSlug(slug));
  if (!demo) throw AppError.notFound("No demo uploaded for this link");
  return demo;
}

export function saveDemo(slug: string, html: unknown) {
  return repos.demos.upsert(assertDemoSlug(slug), assertDemoHtml(html), new Date().toISOString());
}

export async function deleteDemo(slug: string) {
  if (!(await repos.demos.delete(assertDemoSlug(slug)))) throw AppError.notFound("No demo uploaded for this link");
}

/** The page as visitors get it, or null when nothing is uploaded under that slug. */
export async function renderDemo(slug: string): Promise<string | null> {
  if (!DEMO_SLUG.test(slug)) return null;
  const demo = await repos.demos.findBySlug(slug);
  if (!demo) return null;
  const settings = await repos.settings.get().catch(() => null);
  const whatsapp = (settings?.contact?.whatsapp ?? "").replace(/\D/g, "") || FALLBACK_WHATSAPP;
  return withConceptBar(demo.html, slug, whatsapp);
}

/**
 * Adds what every demo must carry, whatever was uploaded: `noindex` (a made-up
 * business must not rank as if it were real) and the concept notice, which
 * says plainly that this is a demo and offers a way to order one.
 *
 * The notice lives in a shadow root so the demo's own CSS cannot restyle or
 * hide it, and it floats instead of taking space at the top, where demos keep
 * their sticky navigation and drop-down menus.
 */
export function withConceptBar(html: string, slug: string, whatsapp: string): string {
  const project = `${SITE_URL}/projects/${slug}`;
  const wa = `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hi KF Tech Solutions, I saw the ${slug} demo and want one like it.`)}`;
  const head = `<meta name="robots" content="noindex, nofollow">`;
  const note = `<kf-demo-note style="display:block"></kf-demo-note><script>(function(){
var host=document.querySelector("kf-demo-note"),root=host.attachShadow({mode:"closed"});
root.innerHTML='<style>:host{all:initial}*{box-sizing:border-box;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}'
+'.foot{display:block;padding:22px 20px 26px;background:#0A0A0D;color:#c9c9d1;font-size:13px;line-height:1.6;text-align:center}'
+'.foot a{color:#fff;font-weight:600}'
+'.card{position:fixed;z-index:2147483646;left:16px;bottom:20px;max-width:min(380px,calc(100vw - 32px));background:#0A0A0D;color:#fff;border-radius:16px;padding:14px 14px 14px 16px;box-shadow:0 18px 50px -12px rgba(0,0,0,.55);display:flex;gap:12px;align-items:flex-start;transition:opacity .3s,transform .3s}'
+'.card.off{opacity:0;transform:translateY(12px);pointer-events:none}'
+'.dot{flex:0 0 10px;height:10px;margin-top:5px;border-radius:50%;background:linear-gradient(135deg,#FF6A00,#FF0080)}'
+'.t{font-size:14px;line-height:1.45}.t b{display:block;font-size:14px}.t span{color:#b9b9c4;font-size:13px}'
+'.go{display:inline-block;margin-top:9px;padding:8px 14px;border-radius:99px;background:linear-gradient(100deg,#FF6A00,#FF0080);color:#fff;font-weight:700;font-size:13px;text-decoration:none}'
+'.x{all:unset;cursor:pointer;color:#9a9aa6;font-size:20px;line-height:1;padding:2px 4px}'
+'.pill{all:unset;position:fixed;z-index:2147483646;left:16px;bottom:20px;cursor:pointer;background:#0A0A0D;color:#fff;font:600 12px system-ui,sans-serif;padding:8px 12px;border-radius:99px;box-shadow:0 10px 30px -10px rgba(0,0,0,.5);display:none}'
+'.pill.on{display:block}'
+'@media(max-width:760px){.card,.pill{bottom:86px}}</style>'
+'<div class="card" role="note"><i class="dot"></i><div class="t"><b>Concept demo by KF Tech Solutions</b><span>Made-up business, built to show what we can build for you.</span><br><a class="go" target="_blank" rel="noopener" href=${JSON.stringify(wa)}>Get one like this</a></div><button class="x" aria-label="Hide">&times;</button></div>'
+'<button class="pill">KF &middot; Concept demo</button>'
+'<div class="foot">This is a concept demo designed by KF Tech Solutions. The business, prices and people are made up. <a target="_blank" rel="noopener" href=${JSON.stringify(project)}>About this demo</a> &middot; <a target="_blank" rel="noopener" href=${JSON.stringify(SITE_URL)}>kftechsolutions.dev</a></div>';
var card=root.querySelector(".card"),pill=root.querySelector(".pill");
function hide(){card.classList.add("off");pill.classList.add("on")}
function show(){card.classList.remove("off");pill.classList.remove("on")}
root.querySelector(".x").onclick=hide;pill.onclick=show;setTimeout(hide,9000);
})();</script>`;

  let out = /<head(\s[^>]*)?>/i.test(html) ? html.replace(/<head(\s[^>]*)?>/i, (m) => `${m}${head}`) : `${head}${html}`;
  out = /<\/body>/i.test(out) ? out.replace(/<\/body>(?![\s\S]*<\/body>)/i, () => `${note}</body>`) : `${out}${note}`;
  return out;
}
