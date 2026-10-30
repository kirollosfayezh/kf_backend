/**
 * Imports the founder's real projects (from github.com/koko619911/my-portfolio)
 * into the `projects` collection, from `import-portfolio.data.json`.
 *
 *   npm run import-portfolio                        # dry run: what would be created/updated
 *   npm run import-portfolio -- --apply             # write, as unpublished drafts
 *   npm run import-portfolio -- --apply --publish   # write and publish
 *
 * Options:
 *   --media-base <url>   where the screenshots live. Default `/projects`: the
 *                        site's own copy under public/projects. Once the R2
 *                        bucket has a public address, re-run with e.g.
 *                        --media-base https://media.example.com/projects and
 *                        every image switches to Cloudflare in one go.
 *   --retire-samples     unpublish the seeded placeholder projects
 *                        (meta.sample === true) so only real work is listed.
 *                        Reversible from the dashboard.
 *
 * Matching is by slug. A re-run rewrites every field in all four languages
 * from the data file, so edit the data file, not the dashboard, for these.
 * Other meta keys an editor added in the dashboard are kept.
 */
import { readFile } from "node:fs/promises";
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";
import type { ContentItem, LocalizedText } from "../shared/types/index.js";

const DATA_URL = new URL("./import-portfolio.data.json", import.meta.url);
const SEED_URL = new URL("./seed-content.data.json", import.meta.url);

interface Entry {
  slug: string;
  order: number;
  year: string;
  demoUrl: string | null;
  points: string[];
  media: string[];
  alt: string;
  title: LocalizedText;
  tag: LocalizedText;
  result: string;
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

async function main() {
  const apply = process.argv.includes("--apply");
  const publish = process.argv.includes("--publish");
  const retireSamples = process.argv.includes("--retire-samples");
  const mediaBase = (arg("--media-base") ?? "/projects").replace(/\/+$/, "");

  const data = JSON.parse(await readFile(DATA_URL, "utf8")) as { projects: Entry[] };
  const entries = data.projects;
  if (!entries?.length) throw new Error("no projects in the data file");

  await connectDb();
  const repo = repos.content.projects;
  const existing = await repo.list();
  const bySlug = new Map(existing.map((item) => [item.slug, item]));

  console.log(`${apply ? "Importing" : "Dry run:"} ${entries.length} projects (${publish ? "published" : "as drafts"}; images from ${mediaBase})\n`);
  let created = 0;
  let updated = 0;
  for (const e of entries) {
    const match = bySlug.get(e.slug);
    const fromData = e.media.map((m) => (/^https?:\/\//.test(m) ? m : `${mediaBase}/${m}`));
    // Photos an editor added in the dashboard stay, after the data file's own.
    // Earlier imports' files (anything under the media base) are replaced.
    const added = (match?.media ?? []).filter(
      (m) => !m.startsWith(`${mediaBase}/`) && !fromData.includes(m) && !e.media.some((d) => /^https?:/.test(d) && d === m),
    );
    const media = [...fromData, ...added];
    const now = new Date().toISOString();
    // Existing meta first, so a key set in the dashboard survives — including
    // the "Illustrative sample" switch, which only a person can turn on for an
    // imported row. The seeder's `seedMedia` never belongs on a real project.
    const meta: Record<string, unknown> = { ...(match?.meta ?? {}) };
    delete meta.seedMedia;
    Object.assign(meta, {
      tag: e.tag.en,
      points: e.points,
      alt: e.alt,
      result: e.result,
      year: e.year,
      ...(e.demoUrl ? { demoUrl: e.demoUrl } : {}),
      source: "portfolio",
    });
    if (!e.demoUrl) delete meta.demoUrl;

    const payload: Partial<ContentItem> = {
      slug: e.slug,
      order: e.order,
      published: publish ? true : (match?.published ?? false),
      title: e.title,
      summary: e.summary,
      body: e.body,
      media,
      meta,
      updatedAt: now,
    };
    const note = meta.sample === true ? "  (marked \"Illustrative sample\" in the dashboard; kept)" : "";
    console.log(`  ${pad(match ? "update" : "create", 7)} ${pad(e.slug, 18)} ${pad(payload.published ? "published" : "draft", 10)} ${media.length} photo(s), ${media[0]}${note}`);
    if (!apply) continue;
    if (match) {
      await repo.update(match.id, payload);
      updated++;
    } else {
      await repo.create({ ...payload, createdAt: now } as ContentItem);
      created++;
    }
  }

  // Placeholders: flagged `sample`, or one of the seed file's sample slugs —
  // databases seeded before the flag existed carry the slug but not the flag.
  const seed = JSON.parse(await readFile(SEED_URL, "utf8")) as { projects?: { slug: string; sample?: boolean }[] };
  const seedSamples = new Set((seed.projects ?? []).filter((p) => p.sample).map((p) => p.slug));
  const samples = existing.filter((item) => item.published && (item.meta?.sample === true || seedSamples.has(item.slug)));
  if (retireSamples) {
    console.log(`\n${apply ? "Unpublishing" : "Would unpublish"} ${samples.length} sample project(s): ${samples.map((s) => s.slug).join(", ") || "none"}`);
    if (apply) {
      for (const s of samples) await repo.update(s.id, { published: false, updatedAt: new Date().toISOString() });
    }
  } else if (samples.length) {
    console.log(`\n${samples.length} seeded sample project(s) are still published (${samples.map((s) => s.slug).join(", ")}); pass --retire-samples to unpublish them.`);
  }

  console.log(apply ? `\nDone: ${created} created, ${updated} updated.` : "\nNothing written (dry run). Re-run with --apply to write.");
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
