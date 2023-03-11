import { createConnection } from "mysql2/promise";

export const connection = await createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "fran",
  password: "1234",
  database: "cristal",
});
