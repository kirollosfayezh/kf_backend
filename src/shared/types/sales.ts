/** Sales: booking hours, quotes, bookings and the admin-only CRM settings. */

/** One opening window in a day, "HH:mm" in the booking time zone. */
export interface TimeWindow {
  start: string;
  end: string;
}

/** One weekday's opening hours. Empty `windows` = closed that day. */
export interface DayHours {
  windows: TimeWindow[];
}

export interface BookingSettings {
  /**
   * Seven entries, index 0 = Sunday … 6 = Saturday, like `Date#getDay`.
   * Objects rather than a list of lists, which not every Mongo-compatible
   * store accepts.
   */
  weekly: DayHours[];
  slotMinutes: number;
  bufferMinutes: number;
  minNoticeHours: number;
  daysAhead: number;
  timezone: string;
  /** "YYYY-MM-DD" days with no bookings (holidays, travel). */
  blockedDates: string[];
  /**
   * Hours for one specific date, replacing that weekday's `weekly` entry:
   * a shorter day, an extra evening, or (empty `windows`) a day off. Keyed
   * by "YYYY-MM-DD" in the booking time zone.
   */
  dateOverrides?: Record<string, DayHours>;
  enabled: boolean;
}

export interface QuoteSettings {
  companyName: string;
  address?: string;
  email?: string;
  phone?: string;
  taxId?: string;
  footer?: string;
  defaultCurrency: string;
  defaultTaxRate: number;
  defaultValidDays: number;
}

export interface TelegramSettings {
  botToken?: string;
  chatId?: string;
  enabled: boolean;
  /** NotificationType -> forwarded to Telegram. Missing means on. */
  events: Record<string, boolean>;
}

/** Admin-only settings — never served by the public settings endpoint. */
export interface CrmSettings extends Record<string, unknown> {
  telegram: TelegramSettings;
  booking: BookingSettings;
  quotes: QuoteSettings;
  updatedAt: string;
}

export type QuoteStatus = "draft" | "sent" | "viewed" | "accepted" | "declined" | "expired";

export interface QuoteLineItem {
  description: string;
  qty: number;
  unitPrice: number;
}

export interface Quote extends Record<string, unknown> {
  number: string;
  token: string;
  contactId?: string;
  title: string;
  /** en | ar | de | fr — the language the client sees it in. */
  language: string;
  currency: string;
  lineItems: QuoteLineItem[];
  discountType: "percent" | "amount";
  discountValue: number;
  taxRate: number;
  notes?: string;
  validUntil?: string;
  status: QuoteStatus;
  total: number;
  sentAt?: string;
  viewedAt?: string;
  acceptedAt?: string;
  acceptedBy?: string;
  declinedAt?: string;
  declineReason?: string;
  createdAt: string;
  updatedAt: string;
}

export type BookingStatus = "confirmed" | "completed" | "no_show" | "cancelled";

export interface Booking extends Record<string, unknown> {
  start: string;
  end: string;
  name?: string;
  /** E.164 — the number we call on WhatsApp. */
  phone: string;
  phoneCountry?: string;
  topic?: string;
  lang?: string;
  visitorId?: string;
  contactId?: string;
  status: BookingStatus;
  remindedAt?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
