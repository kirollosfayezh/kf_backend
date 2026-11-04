/**
 * Writes reviewed translations into existing content documents: one language
 * of one field at a time, from a JSON list of patches —
 *
 *   [{ "collection": "projects", "id": "…", "field": "summary" | "meta.points[2]",
 *      "lang": "de", "from": "<value the reviewer saw>", "to": "<new value>" }]
 *
 * A patch is skipped when the field no longer holds `from`: an editor changed it
 * in the dashboard since, and their text wins. Nothing else in the document is
 * touched — unlike `seed-content`, which would revert every dashboard edit.
 *
 * Dry run by default. `--apply` writes. Redeploy the site afterwards so the
 * prerendered pages pick the text up.
 *
 * Usage: npm run update-translations -- <patches.json>
 *        npm run update-translations -- <patches.json> --apply
 */
import { readFile } from "node:fs/promises";
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";
import type { ContentCollection } from "../shared/types/content.js";

interface Patch {
  collection: ContentCollection;
  id: string;
  field: string;
  lang: "ar" | "de" | "fr";
  from: string;
  to: string;
}

type Localized = Record<string, string>;

/** `title` → doc.title; `meta.points[2]` → doc.meta.points[2]. */
function locate(doc: Record<string, unknown>, field: string): { get: () => Localized | undefined; set: (v: Localized) => Record<string, unknown> } {
  const point = /^meta\.points\[(\d+)\]$/.exec(field);
  if (point) {
    const i = Number(point[1]);
    const meta = (doc.meta ?? {}) as Record<string, unknown>;
    const points = Array.isArray(meta.points) ? [...meta.points] : [];
    return {
      get: () => (points[i] && typeof points[i] === "object" ? (points[i] as Localized) : undefined),
      // `meta` is replaced wholesale on update, so the whole object goes back.
      set: (v) => {
        points[i] = v;
        return { meta: { ...meta, points } };
      },
    };
  }
  return {
    get: () => (doc[field] && typeof doc[field] === "object" ? (doc[field] as Localized) : undefined),
    set: (v) => ({ [field]: v }),
  };
}

async function main() {
  const file = process.argv.find((a) => a.endsWith(".json"));
  if (!file) throw new Error("Pass the patches file: npm run update-translations -- patches.json");
  const apply = process.argv.includes("--apply");
  const patches = JSON.parse(await readFile(file, "utf8")) as Patch[];
  await connectDb();

  console.log(`${apply ? "Applying" : "Dry run"} — ${patches.length} patches\n`);
  const counts = { write: 0, same: 0, changed: 0, missing: 0 };
  // One document can get several patches (fields, languages); apply them in turn.
  const docs = new Map<string, Record<string, unknown>>();
  for (const p of patches) {
    const repo = repos.content[p.collection];
    if (!repo) throw new Error(`Unknown collection ${p.collection}`);
    const key = `${p.collection}:${p.id}`;
    const doc = docs.get(key) ?? ((await repo.get(p.id)) as Record<string, unknown> | null);
    if (!doc) {
      counts.missing++;
      console.log(`  missing  ${key}`);
      continue;
    }
    const at = locate(doc, p.field);
    const value = at.get();
    const current = (value?.[p.lang] ?? "").trim();
    if (current === p.to.trim()) {
      counts.same++;
      continue;
    }
    if (current !== (p.from ?? "").trim()) {
      counts.changed++;
      console.log(`  skipped  ${key} ${p.field} ${p.lang}: edited since the review`);
      continue;
    }
    const patch = at.set({ ...(value ?? {}), [p.lang]: p.to });
    Object.assign(doc, patch);
    docs.set(key, doc);
    counts.write++;
    if (apply) await repo.update(p.id, patch);
  }
  console.log(
    `\n${apply ? "Wrote" : "Would write"} ${counts.write}; already right ${counts.same}; ` +
      `skipped (edited since) ${counts.changed}; missing documents ${counts.missing}.` +
      (apply ? "" : " Re-run with --apply to write."),
  );
  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
