import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { requestSiteRebuild } from "./deploy-hook.service.js";
import type { ContentCollection, ContentItem } from "../types.js";

/** Generic CRUD used by every content type (projects, services, solutions, about, blog, testimonials, faq). */

type NewContentItem = Pick<
  ContentItem,
  "slug" | "published" | "order" | "title" | "summary" | "body" | "media" | "meta"
>;

/**
 * Collections the site bakes into static HTML at build time (pages, sitemap,
 * feeds, JSON-LD). A write to one of these is invisible to crawlers until the
 * site rebuilds, so it asks for one. The rest — about sections, promos — are
 * only ever fetched at runtime.
 */
const PRERENDERED: ReadonlySet<ContentCollection> = new Set([
  "blogPosts",
  "projects",
  "legalPages",
  "services",
  "solutions",
  "faqs",
  "testimonials",
]);

function rebuildIfPrerendered(collection: ContentCollection, what: string): void {
  if (PRERENDERED.has(collection)) requestSiteRebuild(`${collection} ${what}`);
}

export function listContent(collection: ContentCollection, publishedOnly: boolean) {
  return repos.content[collection].list({
    where: publishedOnly ? { published: true } : undefined,
    orderBy: { field: "order", direction: "asc" },
  });
}

/** A Mongo ObjectId is exactly 24 hex characters; no slug we generate is. */
const OBJECT_ID = /^[a-f0-9]{24}$/i;

/**
 * Resolves an item by slug as well as by id.
 *
 * The site's article URLs are `/blog/<slug>` — readable, keyword-bearing and
 * stable across a reseed, where a raw ObjectId is none of those things. Ids
 * still resolve, so existing links, the dashboard and any bookmarked URL keep
 * working; the site's canonical tag points at the slug form, which is what
 * tells a search engine the two are the same page.
 *
 * The slug lookup goes through the repository's own `list` filter rather than a
 * new method, so the "nothing outside repositories/mongo imports a model"
 * boundary holds and a future non-Mongo repository needs no extra work.
 */
export async function getContent(collection: ContentCollection, idOrSlug: string) {
  if (OBJECT_ID.test(idOrSlug)) {
    const byId = await repos.content[collection].get(idOrSlug);
    if (byId) return byId;
  }

  const [bySlug] = await repos.content[collection].list({
    where: { slug: idOrSlug },
    limit: 1,
  });
  if (bySlug) return bySlug;

  throw AppError.notFound(`${collection} item not found`);
}

export async function createContent(collection: ContentCollection, input: NewContentItem) {
  if (!input.slug?.trim()) throw AppError.badRequest("slug is required");
  if (!input.title?.en?.trim()) throw AppError.badRequest("title.en is required");

  const now = new Date().toISOString();
  const item: ContentItem = { ...input, createdAt: now, updatedAt: now };
  const created = await repos.content[collection].create(item);
  rebuildIfPrerendered(collection, created.slug);
  return created;
}

export async function updateContent(
  collection: ContentCollection,
  id: string,
  input: Partial<ContentItem>
) {
  const existing = await repos.content[collection].get(id);
  if (!existing) throw AppError.notFound(`${collection} item not found`);
  const updated = await repos.content[collection].update(id, { ...input, updatedAt: new Date().toISOString() });
  rebuildIfPrerendered(collection, updated.slug);
  return updated;
}

export async function deleteContent(collection: ContentCollection, id: string) {
  const existing = await repos.content[collection].get(id);
  if (!existing) throw AppError.notFound(`${collection} item not found`);
  await repos.content[collection].delete(id);
  rebuildIfPrerendered(collection, existing.slug);
}
