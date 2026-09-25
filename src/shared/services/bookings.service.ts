import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { normalizePhone } from "../phone.js";
import { computeSlots } from "../slots.js";
import { addActivity, resolveContact } from "./contacts.service.js";
import { notify } from "./notify.service.js";
import type { BookingStatus } from "../types.js";

const STATUSES: BookingStatus[] = ["confirmed", "completed", "no_show", "cancelled"];
const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : undefined);

async function freeSlots(now = Date.now()) {
  const { booking } = await repos.crmSettings.get();
  const horizon = new Date(now + (Math.min(booking.daysAhead, 90) + 2) * 86400000).toISOString();
  const taken = await repos.bookings.confirmedBetween(new Date(now - 86400000).toISOString(), horizon);
  return { booking, slots: computeSlots(booking, now, taken) };
}

/** What the site's booking page lists. `daysAhead` bounds its calendar. */
export async function publicSlots() {
  const { booking, slots } = await freeSlots();
  return {
    enabled: booking.enabled,
    timezone: booking.timezone,
    slotMinutes: booking.slotMinutes,
    daysAhead: Math.min(booking.daysAhead, 90),
    slots,
  };
}

/** The business's own wall-clock time for a booking, for alerts ("Sun 11 Jan, 10:30"). */
function localTime(iso: string, timeZone: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", { timeZone, weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export async function createBooking(input: Record<string, unknown>) {
  const phone = normalizePhone(input.phone, input.phoneCountry);
  if (!phone) throw new AppError(400, "INVALID_PHONE", "Please enter a valid phone number, including the country code.");
  const start = typeof input.start === "string" ? input.start : "";

  const { booking: settings, slots } = await freeSlots();
  if (!settings.enabled) throw new AppError(409, "BOOKING_CLOSED", "Booking is not open right now.");
  const slot = slots.find((s) => s.start === start);
  if (!slot) throw new AppError(409, "SLOT_TAKEN", "That time was just taken — please pick another.");

  const now = new Date().toISOString();
  const created = await repos.bookings.create({
    start: slot.start,
    end: slot.end,
    name: text(input.name, 80),
    phone: phone.e164,
    phoneCountry: phone.country,
    topic: text(input.topic, 500),
    lang: text(input.lang, 5),
    visitorId: text(input.visitorId, 100),
    status: "confirmed",
    createdAt: now,
    updatedAt: now,
  });

  // Two people can submit the same slot at the same moment: the earlier write keeps it.
  const clash = (await repos.bookings.confirmedBetween(slot.start, slot.end)).filter((b) => b.id !== created.id);
  if (clash.some((b) => b.createdAt < created.createdAt || (b.createdAt === created.createdAt && b.id < created.id))) {
    await repos.bookings.update(created.id, { status: "cancelled", notes: "Auto-cancelled: slot taken at the same moment", updatedAt: now });
    throw new AppError(409, "SLOT_TAKEN", "That time was just taken — please pick another.");
  }

  let contactId: string | undefined;
  try {
    const resolved = await resolveContact({
      phone: phone.e164,
      name: created.name,
      visitorId: created.visitorId,
      source: "booking",
    });
    if (resolved) {
      contactId = resolved.contact.id;
      await repos.bookings.update(created.id, { contactId });
      await addActivity(contactId, "booking", `Booked a call for ${localTime(slot.start, settings.timezone)}${created.topic ? ` — ${created.topic}` : ""}`, {
        bookingId: created.id,
        start: slot.start,
      });
    }
  } catch (err) {
    console.error("CRM: could not file booking", err);
  }

  await notify({
    type: "booking",
    title: `New call booked: ${localTime(slot.start, settings.timezone)}`,
    body: `${created.name ?? "Someone"} · ${phone.international}${created.topic ? `\n${created.topic}` : ""}`,
    link: contactId ? `/contacts/${contactId}` : "/bookings",
    contactId,
  });

  return { id: created.id, start: slot.start, end: slot.end, phone: phone.international, timezone: settings.timezone };
}

export async function listBookings(query: Record<string, unknown>) {
  const status = text(query.status, 20);
  if (status && !STATUSES.includes(status as BookingStatus)) throw AppError.badRequest("Unknown status");
  const iso = (v: unknown) => {
    if (!v) return undefined;
    const d = new Date(String(v));
    return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
  };
  const bookings = await repos.bookings.list({
    from: iso(query.from),
    to: iso(query.to),
    status,
    contactId: text(query.contactId, 40),
    limit: Math.min(Number(query.limit) || 500, 2000),
  });
  const names = await repos.contacts.namesFor([...new Set(bookings.map((b) => b.contactId).filter((x): x is string => !!x))]);
  return bookings.map((b) => ({ ...b, contactName: b.contactId ? names[b.contactId] : undefined }));
}

export async function updateBooking(id: string, input: Record<string, unknown>, by: string) {
  const existing = await repos.bookings.get(id);
  if (!existing) throw AppError.notFound("Booking not found");
  const patch: Record<string, unknown> = { updatedAt: new Date().toISOString() };
  if ("status" in input) {
    if (!STATUSES.includes(input.status as BookingStatus)) throw AppError.badRequest("Unknown status");
    patch.status = input.status;
  }
  if ("notes" in input) patch.notes = text(input.notes, 2000);
  const updated = await repos.bookings.update(id, patch);
  if (patch.status && patch.status !== existing.status && existing.contactId) {
    const label: Record<BookingStatus, string> = { confirmed: "confirmed", completed: "completed", no_show: "a no-show", cancelled: "cancelled" };
    await addActivity(existing.contactId, "booking_status", `Call on ${existing.start.slice(0, 10)} marked ${label[patch.status as BookingStatus]}`, { bookingId: id }, by);
  }
  return updated;
}
