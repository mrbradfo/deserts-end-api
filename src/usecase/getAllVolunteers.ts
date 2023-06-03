import { Middleware } from "koa";
import knex from "knex";
import config from "../config/devolunteersDB";

const getAllVolunteers: Middleware = async (ctx) => {
  // use Knex to get all volunteers from the database
  const db = knex(config);
  const volunteers = await db("volunteers").select("*");
  // return the volunteers as JSON
  ctx.body = volunteers;
};

export default getAllVolunteers;
