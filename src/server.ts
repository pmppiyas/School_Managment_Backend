import { Server } from "http";
import mongoose from "mongoose";
import { envVars } from "./config/env";
import app from "./app";
let server: Server;

const startServer = async () => {
  try {
    await mongoose
      .connect(`${envVars.DB_URL}`)
      .then(() => {
        console.log("Connected to Database");
      })
      .catch((error) => {
        console.log(error);
      });

    server = app.listen(envVars.PORT, () => {
      console.log(`Server is running in port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

const shutdown = (reason: string, error?: Error) => {
  console.error(`${reason} → Shutting down...`, error || "");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

process.on("unhandledRejection", (error: unknown) => {
  const normalizedError =
    error instanceof Error ? error : new Error("Unknown error occurred");
  shutdown("🔴 Unhandled Rejection Detected", normalizedError);
});

process.on("uncaughtException", (error) => {
  shutdown("🔴 Uncaught Exception Detected", error);
});

process.on("SIGTERM", () => {
  shutdown("🟡 SIGTERM signal received");
});

process.on("SIGINT", () => {
  shutdown("🟡 SIGINT signal received (Ctrl+C)");
});
