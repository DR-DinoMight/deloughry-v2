import lucia from "lucia-auth";
import prisma from "@lucia-auth/adapter-prisma";
import "lucia-auth/polyfill/node";
import { PrismaClient } from "@prisma/client";
import { astro } from "lucia-auth/middleware";

export const auth = lucia({
  adapter: prisma(new PrismaClient()),
  env: import.meta.env.DEV ? "DEV" : "PROD",
  middleware: astro(),
  transformDatabaseUser: (userData) => {
    return {
      userId: userData.id,
      name: userData.name,
      email: userData.email,
    }
  }
});

export type Auth = typeof auth;
