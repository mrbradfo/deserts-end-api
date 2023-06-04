import { Middleware } from "koa";
import knex from "knex";
import config from "../config/devolunteersDB";

const getAllVolunteers: Middleware = async (ctx) => {
  console.log("getAllVolunteers");
  const db = knex(config);
  const volunteers = await db("volunteers").select("*");
  ctx.body = volunteers;
};

export default getAllVolunteers;
