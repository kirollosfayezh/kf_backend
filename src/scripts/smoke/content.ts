import { check } from "./harness.js";
import type { Smoke } from "./harness.js";
import { seoAndTranslationsSection } from "./seo-translations.js";

/** Content CRUD, public visibility, slugs, de/fr and meta round-trips; then SEO and translations; then seeding. */
export async function contentSection(ctx: Smoke) {
  const { call, authHeaders, rebuilds, rebuildRequested } = ctx;
  console.log("\nContent CRUD + public visibility");
  const created = await call("/api/admin/content/services", {
    method: "POST",
    headers: authHeaders,
    body: JSON.stringify({
      slug: "pos-systems",
      published: false,
      order: 1,
      title: { en: "POS Systems", ar: "أنظمة نقاط البيع" },
      summary: { en: "Point of sale", ar: "نقطة بيع" },
    }),
  });
  const itemId: string = created.body?.data?.id;
  check("create a service", created.status === 201 && Boolean(itemId), created);
  check("a content write asks the site to rebuild (once, after the debounce)", (await rebuildRequested()) === 1, rebuilds);

  const publicHidden = await call("/api/content/services");
  check(
    "unpublished item is hidden from the public API",
    publicHidden.status === 200 && publicHidden.body?.data?.length === 0,
    publicHidden
  );

  const published = await call(`/api/admin/content/services/${itemId}`, {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ published: true }),
  });
  check("publish the service", published.status === 200 && published.body?.data?.published === true, published);

  const publicVisible = await call("/api/content/services");
  check(
    "published item appears in the public API",
    publicVisible.body?.data?.length === 1 && publicVisible.body.data[0].title.en === "POS Systems",
    publicVisible
  );

  // The site links articles as /blog/<slug>, so slug resolution is load-bearing
  // for every article URL, the sitemap and the prerendered pages.
  const createdSlug: string = created.body?.data?.slug;
  const bySlug = await call(`/api/content/services/${createdSlug}`);
  check(
    "public item resolves by slug",
    bySlug.status === 200 && bySlug.body?.data?.id === itemId,
    bySlug
  );

  const byId = await call(`/api/content/services/${itemId}`);
  check("public item still resolves by id", byId.status === 200 && byId.body?.data?.id === itemId, byId);

  const missingSlug = await call("/api/content/services/no-such-slug");
  check("unknown slug returns 404", missingSlug.status === 404, missingSlug);

  /**
   * German and French round-trip through the CMS.
   *
   * The localized sub-schema only declared `en` and `ar`, so Mongoose dropped
   * `de` and `fr` on the way in — the write returned 200, the dashboard showed
   * the text it had just sent from its own state, and the values were simply
   * gone on the next read. A silent drop like that needs a test that reads the
   * value back from the API rather than trusting the write's response.
   */
  const withDeFr = await call(`/api/admin/content/services/${itemId}`, {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({
      title: { en: "POS Systems", ar: "أنظمة نقاط البيع", de: "Kassensysteme", fr: "Systèmes de caisse" },
    }),
  });
  const reread = await call(`/api/content/services/${itemId}`);
  check(
    "German and French survive a write",
    withDeFr.status === 200 &&
      reread.body?.data?.title?.de === "Kassensysteme" &&
      reread.body?.data?.title?.fr === "Systèmes de caisse",
    reread
  );

  /** Project links live in `meta`, which is Mixed — new keys must not need a
   *  schema change, and an edit must not clobber the keys it did not send. */
  const withLinks = await call(`/api/admin/content/services/${itemId}`, {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({
      meta: { demoUrl: "https://demo.example.com", repoUrl: "https://github.com/kf/x", year: "2026" },
    }),
  });
  const rereadMeta = await call(`/api/content/services/${itemId}`);
  check(
    "project links round-trip through meta",
    withLinks.status === 200 &&
      rereadMeta.body?.data?.meta?.demoUrl === "https://demo.example.com" &&
      rereadMeta.body?.data?.meta?.repoUrl === "https://github.com/kf/x" &&
      rereadMeta.body?.data?.meta?.year === "2026",
    rereadMeta
  );

  await seoAndTranslationsSection(ctx);

  const badCollection = await call("/api/content/not-a-collection");
  check("unknown collection returns 404", badCollection.status === 404, badCollection);

  const serialized = JSON.stringify(publicVisible.body.data[0]);
  check(
    "responses carry no Mongoose _id noise in nested objects",
    !serialized.includes("_id"),
    serialized
  );

  // SMOKE_SKIP_SEED=1 for servers that cannot store the seed data's nested
  // arrays (FerretDB); real MongoDB always runs it.
  if (!process.env.SMOKE_SKIP_SEED) {
    console.log("\nContent seeding (idempotent re-runs)");
    const { seedContent } = await import("../seed-content.js");
    await seedContent();
    const firstPass = await call("/api/content/services");
    const seededCount = firstPass.body?.data?.length ?? 0;
    check("seed-content populates the catalog", seededCount > 1, seededCount);

    await seedContent();
    const secondPass = await call("/api/content/services");
    check(
      "re-running seed-content does not duplicate",
      secondPass.body?.data?.length === seededCount,
      `${seededCount} -> ${secondPass.body?.data?.length}`
    );

    // The seeded projects are illustrative layouts; the site labels them and
    // hides its sample block once a real project (no flag) exists.
    const seededProjects = (await call("/api/content/projects")).body?.data ?? [];
    check(
      "seeded projects are flagged as samples",
      seededProjects.length === 6 && seededProjects.every((p: { meta?: { sample?: boolean } }) => p.meta?.sample === true),
      seededProjects.map((p: { slug: string; meta?: { sample?: boolean } }) => [p.slug, p.meta?.sample])
    );
  }
}
