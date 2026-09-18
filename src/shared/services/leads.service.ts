import { repos } from "../../repositories/index.js";
import { AppError } from "../errors/app-error.js";
import type { Lead, LeadStatus } from "../types.js";

export interface CreateLeadInput {
  source: Lead["source"];
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
}

export async function createLead(input: CreateLeadInput) {
  if (!input.name?.trim()) throw AppError.badRequest("Name is required");
  if (!input.email?.trim()) throw AppError.badRequest("Email is required");
  if (!input.message?.trim()) throw AppError.badRequest("Message is required");

  const now = new Date().toISOString();
  const lead: Lead = {
    source: input.source,
    status: "new",
    name: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone?.trim(),
    company: input.company?.trim(),
    projectType: input.projectType?.trim(),
    budget: input.budget?.trim(),
    message: input.message.trim(),
    createdAt: now,
    updatedAt: now,
  };
  return repos.leads.create(lead);
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
