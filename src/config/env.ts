import path from "path";
import dotenv from "dotenv";
dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

interface EnvConfig {
  PORT: string;
  DB_URL: string;
  NODE_ENV: "development" | "production";
  DCRYPT_SALT_ROUND: string;
}

const loadEnvVars = (): EnvConfig => {
  const requiredEnvVars: string[] = [
    "PORT",
    "DB_URL",
    "NODE_ENV",
    "DCRYPT_SALT_ROUND",
  ];

  requiredEnvVars.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing require environment variable ${key}`);
    }
  });

  return {
    PORT: process.env.PORT as string,
    DB_URL: process.env.DB_URL as string,
    NODE_ENV: process.env.NODE_ENV as "development" | "production",
    DCRYPT_SALT_ROUND: process.env.DCRYPT_SALT_ROUND as string,
  };
};

export const envVars = loadEnvVars();
