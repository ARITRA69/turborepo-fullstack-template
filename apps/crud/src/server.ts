import { buildApp } from "./app";

const PORT = Number(process.env.CRUD_PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const app = buildApp();

app.listen({ port: PORT, host: HOST }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`crud running on port ${PORT}`);
});
