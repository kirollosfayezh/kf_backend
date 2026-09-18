import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import type { ContentCollection, ContentItem } from "../types.js";

/** Generic CRUD used by every content type (projects, services, solutions, about, blog, testimonials, faq). */

type NewContentItem = Pick<
  ContentItem,
  "slug" | "published" | "order" | "title" | "summary" | "body" | "media" | "meta"
>;

export function listContent(collection: ContentCollection, publishedOnly: boolean) {
  return repos.content[collection].list({
    where: publishedOnly ? { published: true } : undefined,
    orderBy: { field: "order", direction: "asc" },
  });
}

export async function getContent(collection: ContentCollection, id: string) {
  const item = await repos.content[collection].get(id);
  if (!item) throw AppError.notFound(`${collection} item not found`);
  return item;
}

export function createContent(collection: ContentCollection, input: NewContentItem) {
  if (!input.slug?.trim()) throw AppError.badRequest("slug is required");
  if (!input.title?.en?.trim()) throw AppError.badRequest("title.en is required");

  const now = new Date().toISOString();
  const item: ContentItem = { ...input, createdAt: now, updatedAt: now };
  return repos.content[collection].create(item);
}

export async function updateContent(
  collection: ContentCollection,
  id: string,
  input: Partial<ContentItem>
) {
  const existing = await repos.content[collection].get(id);
  if (!existing) throw AppError.notFound(`${collection} item not found`);
  return repos.content[collection].update(id, { ...input, updatedAt: new Date().toISOString() });
}

export async function deleteContent(collection: ContentCollection, id: string) {
  const existing = await repos.content[collection].get(id);
  if (!existing) throw AppError.notFound(`${collection} item not found`);
  await repos.content[collection].delete(id);
}
