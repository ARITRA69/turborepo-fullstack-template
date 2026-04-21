import type { users } from "@repo/db";
import "fastify";

export type TFirebaseUser = {
  firebase_uid: string;
  email: string;
  name: string;
};

declare module "fastify" {
  interface FastifyRequest {
    user?: typeof users.$inferSelect;
    firebase_user?: TFirebaseUser;
  }
}
