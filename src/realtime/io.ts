import { Server } from "socket.io";
import type { Server as HttpServer } from "node:http";
import { env } from "../config/env.js";
import { allowedOrigins } from "../config/cors.js";
import { verifyAdminToken } from "../shared/services/auth.service.js";

/**
 * Socket.io is used purely as a push channel: all writes go through the REST
 * routes (so a brief disconnect never loses a message), and the routes call the
 * emit helpers below to fan the result out live.
 *
 * Rooms:
 *   `thread:<visitorId>` — that one visitor plus any admin viewing the thread
 *   `admins`             — every signed-in dashboard user
 */

let io: Server | null = null;

export function initIo(httpServer: HttpServer): Server {
  io = new Server(httpServer, {
    cors: {
      origin: allowedOrigins(env.corsOrigins, env.isProduction),
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    const { token, visitorId } = socket.handshake.auth as {
      token?: string;
      visitorId?: string;
    };

    if (token) {
      try {
        verifyAdminToken(token);
        socket.data.isAdmin = true;
        socket.join("admins");
      } catch {
        socket.disconnect(true);
        return;
      }
    } else if (visitorId) {
      socket.data.visitorId = visitorId;
      socket.join(`thread:${visitorId}`);
    } else {
      socket.disconnect(true);
      return;
    }

    // Admins can watch any single thread; visitors are already in their own room
    // and cannot join another one.
    socket.on("chat:watch", (threadId: string) => {
      if (socket.data.isAdmin && typeof threadId === "string") {
        socket.join(`thread:${threadId}`);
      }
    });

    socket.on("chat:unwatch", (threadId: string) => {
      if (socket.data.isAdmin && typeof threadId === "string") {
        socket.leave(`thread:${threadId}`);
      }
    });
  });

  return io;
}

export function emitToThread(threadId: string, event: string, payload: unknown): void {
  io?.to(`thread:${threadId}`).emit(event, payload);
}

export function emitToAdmins(event: string, payload: unknown): void {
  io?.to("admins").emit(event, payload);
}
