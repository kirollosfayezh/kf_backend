import { check } from "./harness.js";
import type { Smoke } from "./harness.js";

/** Public lead submission and the admin inbox. */
export async function leadsSection(ctx: Smoke) {
  const { call, authHeaders } = ctx;
  console.log("\nLeads");
  const lead = await call("/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      source: "contact",
      name: "Test Visitor",
      email: "visitor@example.com",
      message: "I need a POS system",
      projectType: "POS",
    }),
  });
  const leadId: string = lead.body?.data?.id;
  check("public lead submission", lead.status === 201 && Boolean(leadId), lead);

  const invalidLead = await call("/api/leads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ source: "contact", name: "No Email", message: "hi" }),
  });
  check("lead validation rejects a missing email", invalidLead.status === 400, invalidLead);

  const inbox = await call("/api/admin/leads", { headers: authHeaders });
  check("lead shows up in the admin inbox", inbox.body?.data?.length === 1, inbox);

  const statusUpdate = await call(`/api/admin/leads/${leadId}/status`, {
    method: "PATCH",
    headers: authHeaders,
    body: JSON.stringify({ status: "contacted" }),
  });
  check("lead status update", statusUpdate.body?.data?.status === "contacted", statusUpdate);

  const filtered = await call("/api/admin/leads?status=new", { headers: authHeaders });
  check("lead status filter", filtered.body?.data?.length === 0, filtered);
}
