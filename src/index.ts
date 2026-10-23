import { createServer } from "node:http";
import { app } from "./app.js";
import { env } from "./config/env.js";
import { connectDb } from "./db/connect.js";
import { initIo } from "./realtime/io.js";
import { startScheduler } from "./shared/services/scheduler.js";
import { publishNewArticles } from "./shared/services/article-publisher.service.js";

async function main() {
  await connectDb();

  const httpServer = createServer(app);
  initIo(httpServer);
  startScheduler();

  httpServer.listen(env.port, () => {
    console.log(`kf-api listening on port ${env.port} (${env.nodeEnv})`);
  });

  // New articles written in the repository go live with the deploy that
  // carries them. In the background: it must never delay or fail startup.
  void publishNewArticles();
}

main().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});
