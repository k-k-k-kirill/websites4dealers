import config from "../config";
import knex from "knex";

const connection = knex({
  client: "mysql2",
  connection: {
    host: config.DATABASE_HOST,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_NAME,
  },
});

export default connection;
