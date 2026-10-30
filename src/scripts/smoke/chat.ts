import { io as ioClient } from "socket.io-client";
import { check, waitForEvent } from "./harness.js";
import type { Smoke } from "./harness.js";

/** Realtime chat: sockets, the phone step, live delivery both ways, resume and typing. Returns the sockets so the run can close them at the end. */
export async function chatSection(ctx: Smoke) {
  const { base, token, call, authHeaders } = ctx;
  console.log("\nRealtime chat");
  const visitorId = "visitor-smoke-1";

  const visitorSocket = ioClient(base, { auth: { visitorId }, transports: ["websocket"] });
  const adminSocket = ioClient(base, { auth: { token }, transports: ["websocket"] });
  await Promise.all([
    waitForEvent(visitorSocket, "connect"),
    waitForEvent(adminSocket, "connect"),
  ]);
  check("visitor + admin sockets connect", visitorSocket.connected && adminSocket.connected);

  const rejectedSocket = ioClient(base, { auth: { token: "not-a-real-token" }, transports: ["websocket"] });
  await waitForEvent(rejectedSocket, "disconnect", 4000).catch(() => null);
  check("socket with an invalid admin token is disconnected", !rejectedSocket.connected);

  adminSocket.emit("chat:watch", visitorId);
  await new Promise((r) => setTimeout(r, 150));

  const json = { "content-type": "application/json" };
  const noPhone = await call(`/api/chat/threads/${visitorId}/messages`, {
    method: "POST",
    headers: json,
    body: JSON.stringify({ text: "no phone yet" }),
  });
  check(
    "a visitor cannot chat before giving a phone",
    noPhone.status === 400 && noPhone.body?.errors?.[0]?.code === "PHONE_REQUIRED",
    noPhone
  );

  const badPhone = await call("/api/chat/session", {
    method: "POST",
    headers: json,
    body: JSON.stringify({ visitorId, phone: "12345", country: "EG" }),
  });
  check("an invalid phone is rejected", badPhone.status === 400 && badPhone.body?.errors?.[0]?.code === "INVALID_PHONE", badPhone);

  const session = await call("/api/chat/session", {
    method: "POST",
    headers: json,
    // Arabic-Indic digits and a national number: stored as E.164 all the same.
    body: JSON.stringify({ visitorId, phone: "٠١٠١٢٣٤٥٦٧٨", country: "EG", name: "Smoke" }),
  });
  check(
    "a valid phone starts the session, normalised to E.164",
    session.status === 200 &&
      session.body?.data?.thread?.visitorId === visitorId &&
      session.body?.data?.thread?.phone === "+201012345678" &&
      session.body?.data?.resumed === false,
    session
  );
  // Let the session's own thread-updated push land before listening for the next one.
  await new Promise((r) => setTimeout(r, 150));

  const adminNotified = waitForEvent<{ message: { text: string } }>(adminSocket, "chat:thread-updated");
  const visitorMsg = await call(`/api/chat/threads/${visitorId}/messages`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: "Hello, are you there?" }),
  });
  check("visitor sends a message", visitorMsg.status === 201, visitorMsg);

  const notified = await adminNotified.catch((e) => ({ message: { text: `ERROR: ${e.message}` } }));
  check(
    "admin is notified live of the visitor message",
    notified.message?.text === "Hello, are you there?",
    notified
  );

  const threads = await call("/api/admin/chat/threads", { headers: authHeaders });
  check("thread appears in the admin thread list", threads.body?.data?.length === 1, threads);

  const visitorReceives = waitForEvent<{ text: string; from: string }>(visitorSocket, "chat:message");
  const agentReply = await call(`/api/admin/chat/threads/${visitorId}/messages`, {
    method: "POST",
    headers: authHeaders,
    body: JSON.stringify({ text: "Yes! How can I help?" }),
  });
  check("agent replies", agentReply.status === 201 && agentReply.body?.data?.from === "agent", agentReply);

  const received = await visitorReceives.catch((e) => ({ text: `ERROR: ${e.message}`, from: "" }));
  check(
    "visitor receives the agent reply live",
    received.text === "Yes! How can I help?" && received.from === "agent",
    received
  );

  const history = await call(`/api/chat/threads/${visitorId}/messages`);
  check("chat history persists both messages", history.body?.data?.length === 2, history);

  // The same number from another browser picks the conversation back up.
  const resumed = await call("/api/chat/session", {
    method: "POST",
    headers: json,
    body: JSON.stringify({ visitorId: "visitor-smoke-other-device", phone: "+20 101 234 5678" }),
  });
  check(
    "entering the same phone elsewhere resumes the last chat",
    resumed.body?.data?.resumed === true &&
      resumed.body?.data?.thread?.visitorId === visitorId &&
      resumed.body?.data?.messages?.length === 2,
    resumed
  );

  // A different number on a browser whose thread already has a phone gets its own thread.
  const shared = await call("/api/chat/session", {
    method: "POST",
    headers: json,
    body: JSON.stringify({ visitorId, phone: "+971501234567" }),
  });
  check(
    "a second person on the same browser gets a separate thread",
    shared.body?.data?.resumed === false &&
      shared.body?.data?.thread?.visitorId !== visitorId &&
      shared.body?.data?.messages?.length === 0,
    shared
  );

  const typingNotice = waitForEvent<{ typing: boolean }>(adminSocket, "chat:typing");
  await call(`/api/chat/threads/${visitorId}/typing`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ typing: true }),
  });
  const typing = await typingNotice.catch(() => ({ typing: false }));
  check("typing indicator reaches the admin", typing.typing === true, typing);

  return { visitorSocket, adminSocket, rejectedSocket };
}
