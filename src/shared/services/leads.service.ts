import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import { normalizePhone } from "../phone.js";
import { addActivity, resolveContact } from "./contacts.service.js";
import { notify } from "./notify.service.js";
import type { Lead, LeadStatus } from "../types/index.js";

export interface CreateLeadInput {
  source: Lead["source"];
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
  visitorId?: string;
}

export async function createLead(input: CreateLeadInput) {
  if (!input.name?.trim()) throw AppError.badRequest("Name is required");
  if (!input.email?.trim()) throw AppError.badRequest("Email is required");
  if (!input.message?.trim()) throw AppError.badRequest("Message is required");

  const now = new Date().toISOString();
  // Stored in E.164 when it validates, so it matches the chat's numbers; kept
  // as typed otherwise rather than losing what the person wrote.
  const rawPhone = input.phone?.trim();
  const phone = rawPhone ? (normalizePhone(rawPhone)?.e164 ?? rawPhone) : undefined;
  const visitorId = typeof input.visitorId === "string" ? input.visitorId.trim().slice(0, 100) || undefined : undefined;
  const lead: Lead = {
    source: input.source,
    status: "new",
    name: input.name.trim(),
    email: input.email.trim(),
    phone,
    visitorId,
    company: input.company?.trim(),
    projectType: input.projectType?.trim(),
    budget: input.budget?.trim(),
    message: input.message.trim(),
    createdAt: now,
    updatedAt: now,
  };
  const saved = await repos.leads.create(lead);
  let contactId: string | undefined;

  // Filing into the CRM must never cost the visitor their submission.
  try {
    const resolved = await resolveContact({
      phone,
      email: lead.email,
      name: lead.name,
      company: lead.company,
      visitorId,
      source: lead.source,
    });
    if (resolved) {
      contactId = resolved.contact.id;
      await repos.leads.update(saved.id, { contactId: resolved.contact.id });
      await addActivity(resolved.contact.id, "lead", lead.message, {
        leadId: saved.id,
        source: lead.source,
        projectType: lead.projectType,
        budget: lead.budget,
      });
    }
  } catch (err) {
    console.error("CRM: could not file lead", err);
  }

  await notify({
    type: "lead",
    title: `New ${lead.source === "campaign" ? "campaign" : "contact form"} lead: ${lead.name}`,
    body: [lead.projectType, lead.budget, lead.email, lead.phone].filter(Boolean).join(" · ") + `\n${lead.message}`,
    link: contactId ? `/contacts/${contactId}` : "/inbox",
    contactId,
  });
  return contactId ? { ...saved, contactId } : saved;
}

export function listLeads(status?: LeadStatus) {
  return repos.leads.list({
    where: status ? { status } : undefined,
    orderBy: { field: "createdAt", direction: "desc" },
  });
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  const existing = await repos.leads.get(id);
  if (!existing) throw AppError.notFound("Lead not found");
  return repos.leads.update(id, { status, updatedAt: new Date().toISOString() });
}
