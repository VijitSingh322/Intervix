import dotenv from "dotenv";
import path from "path";

// Force correct path to .env
dotenv.config({quiet: true},{
  path: path.resolve(process.cwd(), ".env"),
});

export const ENV = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
};