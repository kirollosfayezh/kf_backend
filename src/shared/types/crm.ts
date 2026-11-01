/** CRM: visitors, consent, contacts, their activity timeline and admin alerts. */

import type { DeviceKind } from "./analytics.js";

/** Where a visit came from: the referrer host plus any campaign parameters. */
export interface TouchInfo {
  referrer?: string;
  landingPath?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  /** Google Ads / Meta click ids — present when the visit came from a paid ad. */
  gclid?: string;
  fbclid?: string;
  at?: string;
}

export type ConsentStatus = "granted" | "denied";

/**
 * One browser, identified by the `kf-visitor-id` the site keeps in
 * localStorage (the same id the chat and analytics use).
 */
export interface Visitor extends Record<string, unknown> {
  visitorId: string;
  firstSeenAt: string;
  lastSeenAt: string;
  sessions: number;
  pageviews: number;
  clicks: number;
  firstTouch?: TouchInfo;
  lastTouch?: TouchInfo;
  device?: DeviceKind;
  browser?: string;
  os?: string;
  lang?: string;
  timezone?: string;
  /** ISO country, from the device time zone. */
  country?: string;
  screen?: string;
  consent?: { status: ConsentStatus; at: string };
  /** Set once the visitor is identified (chat phone, form, booking, quote). */
  contactId?: string;
}

/** Append-only proof of each cookie choice. */
export interface ConsentRecord extends Record<string, unknown> {
  visitorId?: string;
  status: ConsentStatus;
  /** "banner" (first answer) or "settings" (changed later from the footer link). */
  source: "banner" | "settings";
  policyVersion: string;
  userAgent?: string;
  at: string;
}

export const CONTACT_STAGES = ["new", "qualified", "proposal", "won", "lost"] as const;
export type ContactStage = (typeof CONTACT_STAGES)[number];

export type ContactSource = "chat" | "contact" | "campaign" | "booking" | "quote" | "manual" | "newsletter";

export interface Contact extends Record<string, unknown> {
  name?: string;
  /** E.164 */
  phones: string[];
  /** lower-case */
  emails: string[];
  company?: string;
  country?: string;
  sources: ContactSource[];
  visitorIds: string[];
  stage: ContactStage;
  /** Estimated deal value, in `currency`. */
  value?: number;
  currency: string;
  tags: string[];
  lostReason?: string;
  nextFollowUpAt?: string;
  followUpNotifiedFor?: string;
  lastActivityAt: string;
  createdAt: string;
  updatedAt: string;
}

export type ActivityType =
  | "lead"
  | "chat_started"
  | "chat_resumed"
  | "booking"
  | "booking_status"
  | "quote_sent"
  | "quote_viewed"
  | "quote_accepted"
  | "quote_declined"
  | "note"
  | "stage_change"
  | "contact_created"
  | "newsletter";

export interface Activity extends Record<string, unknown> {
  contactId: string;
  type: ActivityType;
  text?: string;
  meta?: Record<string, unknown>;
  /** "system", or the admin's email for things done in the dashboard. */
  by: string;
  at: string;
}

export type NotificationType =
  | "lead"
  | "chat"
  | "booking"
  | "quote_viewed"
  | "quote_accepted"
  | "quote_declined"
  | "followup_due"
  | "call_soon"
  | "newsletter"
  | "test";

export interface AdminNotification extends Record<string, unknown> {
  type: NotificationType;
  title: string;
  body?: string;
  /** A dashboard path, e.g. "/contacts/abc". */
  link?: string;
  contactId?: string;
  readAt?: string;
  createdAt: string;
}
