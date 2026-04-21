import { db } from "@/lib/drizzle";
import { users } from "@repo/db";
import { auth } from "@/services/firebase";
import { eq } from "drizzle-orm";
import { FastifyReply, FastifyRequest } from "fastify";

export const is_authenticated = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const auth_header = req.headers.authorization;

  if (!auth_header?.startsWith("Bearer ")) {
    return reply
      .status(401)
      .send({ error: "Missing or invalid authorization header", code: 401 });
  }

  const token = auth_header.split("Bearer ")[1] as string;

  try {
    const decoded = await auth.verifyIdToken(token);

    const user = await db
      .select()
      .from(users)
      .where(eq(users.firebase_uid, decoded.uid))
      .then((r) => r[0]);

    if (!user) {
      return reply.status(401).send({ error: "User not found", code: 401 });
    }

    req.user = user;
  } catch {
    return reply
      .status(401)
      .send({ error: "Invalid or expired token", code: 401 });
  }
};
