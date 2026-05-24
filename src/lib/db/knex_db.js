import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const knexDB = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
  },
});
