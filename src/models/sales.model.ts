import { Schema, model } from "mongoose";
import type { Booking, Quote } from "../shared/types/index.js";

const lineSchema = new Schema({ description: String, qty: Number, unitPrice: Number }, { _id: false });

const quoteSchema = new Schema<Quote>(
  {
    number: { type: String, required: true, unique: true },
    // The client's link. Random and unguessable; the only key the public API accepts.
    token: { type: String, required: true, unique: true },
    contactId: { type: String, index: true },
    title: { type: String, required: true },
    language: { type: String, default: "en" },
    currency: { type: String, default: "EGP" },
    lineItems: { type: [lineSchema], default: [] },
    discountType: { type: String, enum: ["percent", "amount"], default: "percent" },
    discountValue: { type: Number, default: 0 },
    taxRate: { type: Number, default: 0 },
    notes: String,
    validUntil: String,
    status: { type: String, default: "draft", index: true },
    total: { type: Number, default: 0 },
    sentAt: String,
    viewedAt: String,
    acceptedAt: String,
    acceptedBy: String,
    declinedAt: String,
    declineReason: String,
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false }
);

export const QuoteModel = model<Quote>("Quote", quoteSchema, "quotes");

const bookingSchema = new Schema<Booking>(
  {
    start: { type: String, required: true, index: true },
    end: { type: String, required: true },
    name: String,
    phone: { type: String, required: true },
    phoneCountry: String,
    topic: String,
    lang: String,
    visitorId: String,
    contactId: { type: String, index: true },
    status: { type: String, default: "confirmed", index: true },
    remindedAt: String,
    notes: String,
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
  },
  { versionKey: false }
);

export const BookingModel = model<Booking>("Booking", bookingSchema, "bookings");
