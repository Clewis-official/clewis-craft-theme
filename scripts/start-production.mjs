import { serve } from "h3-v2/node";
import server from "../dist/server/server.js";

const hostname = process.env.HOST || "127.0.0.1";
const port = Number.parseInt(process.env.PORT || "3000", 10);

if (!Number.isFinite(port)) {
  throw new Error(`Invalid PORT: ${process.env.PORT}`);
}

const listener = serve(server, { hostname, port });

console.log(`clewis-craft-theme listening on http://${hostname}:${port}`);

async function shutdown(signal) {
  console.log(`Received ${signal}, shutting down.`);
  await listener?.close?.();
  process.exit(0);
}

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    void shutdown(signal);
  });
}
