/** Demo websites: single-file HTML pages the dashboard uploads and the site serves at /demos/<slug>. */

/**
 * One uploaded demo. The slug is the identity and doubles as the URL segment;
 * it normally equals the slug of the project that shows the demo.
 */
export interface Demo extends Record<string, unknown> {
  slug: string;
  /** The page exactly as uploaded. The concept bar and noindex are added when it is served, never stored. */
  html: string;
  /** Byte length of `html`, so the list can show it without loading every page. */
  size: number;
  createdAt: string;
  updatedAt: string;
}

/** What the admin list returns: everything but the page itself. */
export type DemoSummary = Omit<Demo, "html">;
