/**
 * Imports the concept demo websites as projects, from `import-demos.data.json`,
 * and uploads each page as a demo under the project's slug (served at <site>/demos/<slug>).
 *
 *   npm run import-demos                        # dry run: what would be created/updated
 *   npm run import-demos -- --apply             # write, projects as unpublished drafts
 *   npm run import-demos -- --apply --publish   # write and publish
 *   npm run import-demos -- --slugs a,b --apply # only these slugs (leaves the rest untouched)
 *
 * Options:
 *   --from <dir>   folder holding <concept>/index.html. Default ../social/concepts.
 *   --site <url>   origin the Live demo button points at. Default https://kftechsolutions.dev.
 *
 * Matching is by slug. A re-run rewrites the English and Arabic copy, the tag and the
 * screenshots from the data file and replaces the uploaded page; other meta keys and
 * photos an editor added in the dashboard are kept, and so is a published project.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";
import { saveDemo } from "../shared/services/demo.service.js";
import type { ContentItem, LocalizedText } from "../shared/types/index.js";

const DATA_URL = new URL("./import-demos.data.json", import.meta.url);
const MEDIA_BASE = "/projects/concepts";

interface Entry {
  concept: string;
  slug: string;
  tag: string;
  title: LocalizedText;
  summary: LocalizedText;
  body: LocalizedText;
}

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

function pad(s: string, n: number): string {
  return s.length >= n ? s : s + " ".repeat(n - s.length);
}

/** English and Arabic from the data file; German and French stay empty and fall back to English. */
function text(t: LocalizedText): LocalizedText {
  return { en: t.en, ar: t.ar ?? "", de: "", fr: "" };
}

async function main() {
  const apply = process.argv.includes("--apply");
  const publish = process.argv.includes("--publish");
  const from = path.resolve(arg("--from") ?? "../social/concepts");
  const site = (arg("--site") ?? "https://kftechsolutions.dev").replace(/\/+$/, "");

  const { projects: all } = JSON.parse(await readFile(DATA_URL, "utf8")) as { projects: Entry[] };
  // `--slugs a,b` imports only those, so adding new concepts never rewrites the
  // copy, tag or page of the ones already live (which may have dashboard edits).
  const only = (arg("--slugs") ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  const unknown = only.filter((s) => !all.some((e) => e.slug === s));
  if (unknown.length) throw new Error(`Not in import-demos.data.json: ${unknown.join(", ")}`);
  const entries = only.length ? all.filter((e) => only.includes(e.slug)) : all;
  const pages = await Promise.all(entries.map((e) => readFile(path.join(from, e.concept, "index.html"), "utf8")));

  await connectDb();
  const repo = repos.content.projects;
  const bySlug = new Map((await repo.list()).map((item) => [item.slug, item]));

  console.log(`${apply ? "Importing" : "Dry run:"} ${entries.length} concept demos (${publish ? "published" : "as drafts"}; demos at ${site}/demos/…; pages from ${from})\n`);
  let created = 0;
  let updated = 0;
  for (const [i, e] of entries.entries()) {
    const match = bySlug.get(e.slug);
    const shots = [`${MEDIA_BASE}/${e.slug}-desktop.webp#desktop`, `${MEDIA_BASE}/${e.slug}-mobile.webp#mobile`];
    const media = [...shots, ...(match?.media ?? []).filter((m) => !m.startsWith(`${MEDIA_BASE}/`))];
    const meta: Record<string, unknown> = {
      ...(match?.meta ?? {}),
      concept: true,
      tag: e.tag,
      demoUrl: `${site}/demos/${e.slug}`,
      alt: `${e.title.en.split(":")[0]} concept demo by KF Tech Solutions`,
      year: "2026",
      source: "concepts",
    };
    const now = new Date().toISOString();
    const payload: Partial<ContentItem> = {
      slug: e.slug,
      // Position in the whole data file, not in the --slugs selection, so a
      // partial import never reuses the order of a demo already live.
      order: 101 + all.indexOf(e),
      published: publish ? true : (match?.published ?? false),
      title: text(e.title),
      summary: text(e.summary),
      body: text(e.body),
      media,
      meta,
      updatedAt: now,
    };
    const demo = await repos.demos.findBySlug(e.slug);
    const demoState = !demo ? "new page" : demo.html === pages[i] ? "page unchanged" : "page replaced";
    console.log(`  ${pad(match ? "update" : "create", 7)} ${pad(e.slug, 28)} ${pad(payload.published ? "published" : "draft", 10)} ${pad(demoState, 15)} ${Math.round(Buffer.byteLength(pages[i]) / 1024)} KB`);
    if (!apply) continue;
    await saveDemo(e.slug, pages[i]);
    if (match) {
      await repo.update(match.id, payload);
      updated++;
    } else {
      await repo.create({ ...payload, createdAt: now } as ContentItem);
      created++;
    }
  }

  console.log(
    apply
      ? `\nDone: ${created} created, ${updated} updated, ${entries.length} demo pages saved. Rebuild the site so the case studies are prerendered.`
      : "\nNothing written (dry run). Re-run with --apply to write."
  );
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
