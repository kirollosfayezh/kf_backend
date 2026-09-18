/**
 * Every data access in this backend goes through these interfaces.
 * Nothing outside `repositories/mongo/*` may import `mongoose` models directly.
 * To swap databases later: write new classes implementing these interfaces and
 * change only `repositories/index.ts` — no route or service code changes.
 */

export type WithId<T> = T & { id: string };

export interface ListOptions {
  /** Filter by an exact field match, e.g. { published: true } */
  where?: Record<string, unknown>;
  orderBy?: { field: string; direction?: "asc" | "desc" };
  limit?: number;
}

export interface Repository<T extends Record<string, unknown>> {
  list(options?: ListOptions): Promise<WithId<T>[]>;
  get(id: string): Promise<WithId<T> | null>;
  create(data: T): Promise<WithId<T>>;
  update(id: string, data: Partial<T>): Promise<WithId<T>>;
  delete(id: string): Promise<void>;
}

/** A repository for a single-document collection (e.g. site settings). */
export interface SingletonRepository<T extends Record<string, unknown>> {
  get(): Promise<T>;
  update(data: Partial<T>): Promise<T>;
}
