import { createServer } from "node:http";
import { app } from "./app.js";
import { env } from "./config/env.js";
import { connectDb } from "./db/connect.js";
import { initIo } from "./realtime/io.js";

async function main() {
  await connectDb();

  const httpServer = createServer(app);
  initIo(httpServer);

  httpServer.listen(env.port, () => {
    console.log(`kf-api listening on port ${env.port} (${env.nodeEnv})`);
  });
}

main().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});
