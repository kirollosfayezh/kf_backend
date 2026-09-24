import { repos } from "../../repositories/index.js";
import { ContactModel } from "../../models/contact.model.js";
import { notify } from "./notify.service.js";

/**
 * Time-based alerts: a call starting within 15 minutes, and follow-ups whose
 * date has come. Checked every five minutes by the running server.
 *
 * On a host that sleeps when idle (Render's free tier) nothing runs while it
 * sleeps — the README explains keeping it awake with a free uptime ping.
 */
const EVERY_MS = 5 * 60 * 1000;
const CALL_LEAD_MS = 15 * 60 * 1000;

export async function runDueAlerts(now = Date.now()): Promise<{ calls: number; followUps: number }> {
  let calls = 0;
  let followUps = 0;

  for (const b of await repos.bookings.dueForReminder(new Date(now + CALL_LEAD_MS).toISOString(), new Date(now - EVERY_MS).toISOString())) {
    await repos.bookings.update(b.id, { remindedAt: new Date(now).toISOString() });
    const mins = Math.max(0, Math.round((Date.parse(b.start) - now) / 60000));
    await notify({
      type: "call_soon",
      title: mins ? `Call in ${mins} min: ${b.name ?? b.phone}` : `Call now: ${b.name ?? b.phone}`,
      body: `WhatsApp ${b.phone}${b.topic ? `\n${b.topic}` : ""}`,
      link: b.contactId ? `/contacts/${b.contactId}` : "/bookings",
      contactId: b.contactId,
    });
    calls++;
  }

  // Each follow-up date alerts once: the date that fired is remembered.
  const due = await ContactModel.find({
    nextFollowUpAt: { $lte: new Date(now).toISOString() },
    stage: { $nin: ["won", "lost"] },
  })
    .lean()
    .exec();
  for (const c of due) {
    if (c.followUpNotifiedFor === c.nextFollowUpAt) continue;
    await ContactModel.updateOne({ _id: c._id }, { $set: { followUpNotifiedFor: c.nextFollowUpAt } }).exec();
    await notify({
      type: "followup_due",
      title: `Follow up with ${c.name || c.phones?.[0] || c.emails?.[0] || "a contact"}`,
      body: `Stage: ${c.stage}${c.value ? ` · ${c.value.toLocaleString("en-US")} ${c.currency}` : ""}`,
      link: `/contacts/${String(c._id)}`,
      contactId: String(c._id),
    });
    followUps++;
  }
  return { calls, followUps };
}

export function startScheduler(): () => void {
  const tick = () => void runDueAlerts().catch((err) => console.error("scheduler", err));
  const first = setTimeout(tick, 30 * 1000);
  const timer = setInterval(tick, EVERY_MS);
  return () => {
    clearTimeout(first);
    clearInterval(timer);
  };
}
