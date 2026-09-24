/**
 * Files everyone who already reached out into the CRM: every lead, and every
 * chat that has a phone number. Safe to run any number of times — a lead that
 * already has a contact and a chat whose browser is already linked are skipped.
 * Usage: npm run backfill-contacts
 */
import mongoose from "mongoose";
import { connectDb } from "../db/connect.js";
import { LeadModel } from "../models/lead.model.js";
import { ChatThreadModel } from "../models/chat.model.js";
import { ContactModel } from "../models/contact.model.js";
import { addActivity, resolveContact } from "../shared/services/contacts.service.js";

async function main() {
  await connectDb();
  let leads = 0;
  let chats = 0;

  for (const lead of await LeadModel.find({ contactId: { $exists: false } }).sort({ createdAt: 1 }).lean().exec()) {
    const resolved = await resolveContact({
      phone: lead.phone,
      email: lead.email,
      name: lead.name,
      company: lead.company,
      visitorId: lead.visitorId,
      source: lead.source,
    });
    if (!resolved) continue;
    await LeadModel.updateOne({ _id: lead._id }, { $set: { contactId: resolved.contact.id } }).exec();
    await addActivity(resolved.contact.id, "lead", lead.message, {
      leadId: String(lead._id),
      source: lead.source,
      projectType: lead.projectType,
      budget: lead.budget,
      backfilled: true,
      originalDate: lead.createdAt,
    });
    leads++;
  }

  for (const thread of await ChatThreadModel.find({ phone: { $exists: true, $ne: null } }).sort({ createdAt: 1 }).lean().exec()) {
    if (await ContactModel.exists({ visitorIds: thread.visitorId })) continue;
    const resolved = await resolveContact({
      phone: thread.phone,
      name: thread.visitorMeta?.name,
      visitorId: thread.visitorId,
      source: "chat",
    });
    if (!resolved) continue;
    await addActivity(resolved.contact.id, "chat_started", "Live chat (from before the CRM)", {
      visitorId: thread.visitorId,
      backfilled: true,
      originalDate: thread.createdAt,
    });
    chats++;
  }

  console.log(`Backfill done: ${leads} lead(s) and ${chats} chat(s) filed into contacts.`);
  await mongoose.disconnect();
}

main().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
