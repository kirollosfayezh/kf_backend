import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { check } from "./harness.js";
import type { Smoke } from "./harness.js";

/**
 * The markets collection — the /saudi-arabia, /uae and /gulf landing pages:
 * admin CRUD, public visibility, the rebuild each write asks for, the card
 * view the site's footer reads, and `update-market-pages` writing placeholder
 * files through the repository for the public API to read back.
 */
export async function marketsSection(ctx: Smoke) {
  const { call, authHeaders, patch, rebuilds, rebuildRequested } = ctx;
  console.log("\nMarkets (country landing pages)");
  await rebuildRequested(); // let anything queued earlier go out first
  rebuilds.length = 0;

  const created = await call("/api/admin/content/markets", {
    method: "POST",
    headers: authHeaders,
    body: JSON.stringify({
      slug: "smoke-market",
      published: false,
      order: 1,
      title: { en: "Software for a test market", ar: "برمجيات لسوق تجريبي" },
      summary: { en: "Intro.", ar: "مقدمة." },
      body: {
        en: "Body.\n\n## Common questions\n\n### A question?\n\nAn answer.",
        ar: "نص.\n\n## أسئلة شائعة\n\n### سؤال؟\n\nجواب.",
      },
      meta: { seoTitle: { en: "Test market | KF Tech", ar: "سوق تجريبي | KF Tech", de: "", fr: "" } },
    }),
  });
  const id: string = created.body?.data?.id;
  check("create a market page as a draft", created.status === 201 && Boolean(id), created);
  check("a market write asks the site to rebuild (the pages are prerendered)", (await rebuildRequested()) === 1, rebuilds);

  const hidden = await call("/api/content/markets");
  check("a draft market is hidden from the public API", hidden.status === 200 && hidden.body?.data?.length === 0, hidden);
  const hiddenItem = await call("/api/content/markets/smoke-market");
  check("a draft market's page is a 404", hiddenItem.status === 404, hiddenItem);

  await patch(`/api/admin/content/markets/${id}`, { published: true });
  const item = await call("/api/content/markets/smoke-market");
  check(
    "a published market resolves by slug, its SEO title per language in meta",
    item.status === 200 &&
      item.body?.data?.meta?.seoTitle?.ar === "سوق تجريبي | KF Tech" &&
      item.body?.data?.body?.ar?.includes("أسئلة شائعة"),
    item,
  );

  const cards = await call("/api/content/markets?view=card");
  const card = cards.body?.data?.[0];
  check(
    "the card list the site's footer reads carries titles but no body",
    cards.status === 200 && card?.slug === "smoke-market" && card.body === undefined && card.title?.ar === "برمجيات لسوق تجريبي",
    card,
  );

  const services = await call("/api/content/services");
  check(
    "market pages never appear among the services",
    services.status === 200 && !services.body?.data?.some((s: { slug: string }) => s.slug === "smoke-market"),
    services.body?.data?.map((s: { slug: string }) => s.slug),
  );

  await call(`/api/admin/content/markets/${id}`, { method: "DELETE", headers: authHeaders });
  check("a deleted market is gone", (await call("/api/content/markets/smoke-market")).status === 404);

  // update-market-pages, end to end on placeholder files: the planner's
  // documents go in through the repository, as the script writes them, and
  // come out of the public API the site's build reads.
  const { loadMarketPages, planMarketPages } = await import("../seed-markets.js");
  const { repos } = await import("../../repositories/index.js");
  const repo = repos.content.markets;
  const dir = await mkdtemp(join(tmpdir(), "kf-smoke-markets-"));
  try {
    const file = (title: string, faq: string) =>
      `---\ntitle: ${title}\nsummary: Placeholder intro\nseoTitle: ${title} | KF Tech\nseoDescription: Placeholder description\n---\n\nPlaceholder body.\n\n## ${faq}\n\n### ?\n\n.\n`;
    await writeFile(join(dir, "uae.en.md"), file("Placeholder UAE page", "Common questions"));
    await writeFile(join(dir, "uae.ar.md"), file("صفحة تجريبية للإمارات", "أسئلة شائعة"));
    const pages = await loadMarketPages(pathToFileURL(`${dir}/`));

    const first = planMarketPages(await repo.list(), pages);
    for (const change of first) if (change.create) await repo.create(change.create);
    check(
      "update-market-pages creates a missing page as a draft",
      first.length === 1 && first[0].action === "create" && (await call("/api/content/markets/uae")).status === 404,
      first,
    );

    const second = planMarketPages(await repo.list(), pages, { publish: true });
    for (const change of second) if (change.id && change.patch) await repo.update(change.id, change.patch);
    const live = await call("/api/content/markets/uae");
    check(
      "a re-run with --publish puts it live without rewriting the text",
      second[0]?.action === "update" &&
        Object.keys(second[0].patch ?? {}).sort().join() === "published,updatedAt" &&
        live.status === 200 &&
        live.body?.data?.title?.ar === "صفحة تجريبية للإمارات" &&
        live.body?.data?.meta?.seoTitle?.en === "Placeholder UAE page | KF Tech",
      { second, live },
    );

    const liveId: string = live.body?.data?.id;
    await patch(`/api/admin/content/markets/${liveId}`, { body: { ...live.body?.data?.body, en: "Rewritten in the dashboard." } });
    const third = planMarketPages(await repo.list(), pages);
    check(
      "a re-run leaves a page edited in the dashboard alone",
      third[0]?.action === "none" && /^skipped/.test(third[0].langs.en ?? "") && third[0].langs.ar === "no change",
      third,
    );
    await call(`/api/admin/content/markets/${liveId}`, { method: "DELETE", headers: authHeaders });
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
  await rebuildRequested();
  rebuilds.length = 0;
}
