import knex, { Knex } from "knex";
import * as env from "../utilities/environmentVariables";

const config: Knex.Config = {
  client: "mysql2",
  connection: {
    host: env.getAsString("DB_HOST"),
    database: env.getAsString("DB_NAME"),
    user: env.getAsString("DB_USER"),
    password: env.getAsString("DB_PASSWORD"),
    ssl: {
      rejectUnauthorized: false,
    },
  },
  pool: {
    min: 1,
    max: env.getAsNumber("DB_CONN_POOL", 10),
  },
};

const db = knex(config);

export default db;
