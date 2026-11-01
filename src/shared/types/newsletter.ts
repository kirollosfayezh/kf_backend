/** Newsletter subscribers. */

/** Which form the subscription came from. */
export type SubscriberSource = "footer" | "article" | "popup";

/**
 * A newsletter subscriber. Stored only — nothing is sent yet (no email
 * provider). The email is the identity: lower-cased, one row per address.
 */
export interface Subscriber extends Record<string, unknown> {
  /** lower-case */
  email: string;
  /** The site language at the time of subscribing (en | ar | de | fr). */
  lang?: string;
  source: SubscriberSource;
  visitorId?: string;
  /** The CRM contact this address was filed under, when that succeeded. */
  contactId?: string;
  /** When consent was (last) given — re-subscribing refreshes it. */
  consentAt: string;
  /** Set when the person asks to be removed; cleared if they subscribe again. */
  unsubscribedAt?: string;
  createdAt: string;
  updatedAt: string;
}
