function get(key: string, required: true): string;
function get(key: string, required?: false): string | undefined;
function get(key: string, required = false): string | undefined {
  const value = process.env[key];
  if (required && !value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  PORT: get("WEB_PORT") ?? "3000",
  NEXT_PUBLIC_FIREBASE_API_KEY: get("NEXT_PUBLIC_FIREBASE_API_KEY", true),
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: get(
    "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
    true
  ),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: get("NEXT_PUBLIC_FIREBASE_PROJECT_ID", true),
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: get(
    "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
    true
  ),
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: get(
    "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    true
  ),
  NEXT_PUBLIC_FIREBASE_APP_ID: get("NEXT_PUBLIC_FIREBASE_APP_ID", true),
} as const;
