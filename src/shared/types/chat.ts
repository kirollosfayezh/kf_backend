/** Visitor chat threads and messages. */

export type ChatSender = "visitor" | "agent";

export interface ChatMessage extends Record<string, unknown> {
  threadId: string;
  from: ChatSender;
  text: string;
  ts: number;
}

export interface ChatThread extends Record<string, unknown> {
  visitorId: string;
  visitorMeta?: { name?: string; contact?: string };
  /**
   * The visitor's phone in E.164 (`+201012345678`). Required before a visitor
   * can send a message, and what a returning visitor's thread is found by.
   */
  phone?: string;
  /** ISO country of `phone`, e.g. "EG" — lets the dashboard show a flag. */
  phoneCountry?: string;
  userTyping: boolean;
  lastMessageAt: string;
  createdAt: string;
}
