import { env } from "@/constants/env";
import admin from "firebase-admin";

if (!admin.apps.length && env.FIREBASE_JSON_BASE64) {
  const service_account = JSON.parse(
    Buffer.from(env.FIREBASE_JSON_BASE64, "base64").toString("utf-8")
  );
  admin.initializeApp({
    credential: admin.credential.cert(service_account),
  });
}

export const auth = admin.auth();
