import { Middleware } from "koa";
import knex from "knex";
import db from "../../config/devolunteersDB";

const getAllVolunteers: Middleware = async (ctx) => {
  const volunteers = await db("volunteers").select("*");
  ctx.body = volunteers;
};

export default getAllVolunteers;
