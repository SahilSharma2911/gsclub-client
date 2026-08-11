import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Cap connection pool to 3 — prevents MongoDB Atlas connection limit alerts (80%+).
// Vercel serverless spawns many instances; without this cap connections multiply fast.
// MongoDB free/M10 tier: typically 500 connections max. With 3 per instance we stay safe.
function buildDatasourceUrl() {
  const base = process.env.DATABASE_URL ?? "";
  if (!base) return base;
  // Append connection limit params if not already set
  const sep = base.includes("?") ? "&" : "?";
  if (base.includes("maxPoolSize") || base.includes("connection_limit")) return base;
  return `${base}${sep}maxPoolSize=3&connectTimeoutMS=5000&serverSelectionTimeoutMS=5000`;
}

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
    datasources: {
      db: { url: buildDatasourceUrl() },
    },
  });

// Always cache globally - prevents connection pool exhaustion in serverless (Vercel)
globalForPrisma.prisma = prisma;
