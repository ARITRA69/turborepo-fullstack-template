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
  PORT: get("CRUD_PORT") ?? "8000",
  DATABASE_URL: get("DATABASE_URL", true),
  R2_ACCOUNT_ID: get("R2_ACCOUNT_ID", true),
  R2_ACCESS_KEY_ID: get("R2_ACCESS_KEY_ID", true),
  R2_SECRET_ACCESS_KEY: get("R2_SECRET_ACCESS_KEY", true),
  R2_BUCKET_NAME: get("R2_BUCKET_NAME", true),
  FIREBASE_JSON_BASE64: get("FIREBASE_JSON_BASE64", true),
} as const;
