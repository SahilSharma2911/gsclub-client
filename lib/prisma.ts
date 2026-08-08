import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
    datasources: {
      db: {
        // Add connection_limit to MongoDB URI to cap pool per serverless instance
        // Vercel spins up many instances; without limit each can use default 5+ connections
        url: process.env.DATABASE_URL
          ? process.env.DATABASE_URL.includes("?")
            ? process.env.DATABASE_URL.replace(/connection_limit=\d+/, "") + "&connection_limit=3"
            : process.env.DATABASE_URL + "?connection_limit=3"
          : process.env.DATABASE_URL,
      },
    },
  });

// Always cache globally - prevents connection pool exhaustion in serverless (Vercel)
globalForPrisma.prisma = prisma;
