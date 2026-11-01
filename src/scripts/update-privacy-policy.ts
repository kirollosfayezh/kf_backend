/**
 * Refreshes the stored Privacy Policy from `legal/privacy-policy.<lang>.md`
 * — but only where the stored text is still the wording a seed run put there.
 *
 * A full `seed-content` would do the same and also revert every other edit
 * made in the dashboard, which is why this exists. The guard is the old
 * vendor sentence ("Google, Meta, TikTok or Snapchat"): a language whose body
 * no longer contains it was either edited by hand or already updated, and is
 * left alone. The Markdown files are the source of truth for the new text, so
 * the only thing to keep in step here is the old phrase per language.
 *
 * Dry run by default — prints what would change per language and writes
 * nothing. `--apply` writes. Redeploy the site afterwards so the prerendered
 * page catches up.
 *
 * Usage: npm run update-privacy-policy            (dry run)
 *        npm run update-privacy-policy -- --apply
 */
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { repos } from "../repositories/index.js";
import { loadArticles } from "./seed-articles.js";
import type { LocalizedText } from "../shared/types/index.js";

const LEGAL_URL = new URL("./legal/", import.meta.url);
const SLUG = "privacy-policy";

const LANGS = ["en", "ar", "de", "fr"] as const;
type Lang = (typeof LANGS)[number];

/** The sentence the previous wording carried, whitespace-tolerant because the
 *  Arabic source wraps mid-list and an editor may have re-flowed a paragraph. */
const OLD_VENDORS: Record<Lang, RegExp> = {
  en: /Google,\s+Meta,\s+TikTok\s+or\s+Snapchat/,
  ar: /Google\s+أو\s+Meta\s+أو\s+TikTok\s+أو\s+Snapchat/,
  de: /Google,\s+Meta,\s+TikTok\s+oder\s+Snapchat/,
  fr: /Google,\s+Meta,\s+TikTok\s+ou\s+Snapchat/,
};

/** Still the seeded wording: has the old list and none of the new vendors. */
function isStale(lang: Lang, body: string): boolean {
  return OLD_VENDORS[lang].test(body) && !body.includes("Clarity");
}

async function main() {
  const apply = process.argv.includes("--apply");
  await connectDb();

  const fresh = (await loadArticles(LEGAL_URL)).find((d) => d.slug === SLUG);
  if (!fresh?.body?.en) throw new Error(`legal/${SLUG}.en.md not found next to this script`);

  const [stored] = await repos.content.legalPages.list({ where: { slug: SLUG }, limit: 1 });
  if (!stored) throw new Error(`No legalPages document with slug "${SLUG}" — run seed-content first`);

  const body: LocalizedText = {
    en: stored.body?.en ?? "",
    ar: stored.body?.ar ?? "",
    de: stored.body?.de ?? "",
    fr: stored.body?.fr ?? "",
  };
  let changes = 0;

  console.log(`${apply ? "Applying" : "Dry run"} — legalPages/${SLUG} (${stored.id})\n`);
  for (const lang of LANGS) {
    const current = body[lang] ?? "";
    const next = fresh.body[lang] ?? "";
    const stale = isStale(lang, current);
    const change = stale && !!next && next !== current;
    const verdict = change
      ? "would update"
      : stale
        ? "no change (file matches)"
        : current
          ? "skipped — edited by hand or already updated"
          : "skipped — no stored text";
    console.log(`  ${lang}: stored ${current.length} chars → file ${next.length} chars — ${verdict}`);
    if (change) {
      body[lang] = next;
      changes++;
    }
  }

  if (!changes) {
    console.log("\nNothing to do.");
  } else if (!apply) {
    console.log(`\n${changes} language(s) would change. Re-run with --apply to write.`);
  } else {
    // `body` is replaced whole (a PATCH sets the sub-document), so every
    // language is carried across, changed or not.
    await repos.content.legalPages.update(stored.id, { body, updatedAt: new Date().toISOString() });
    console.log(`\nUpdated ${changes} language(s). Redeploy the site so the prerendered page catches up.`);
  }

  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
