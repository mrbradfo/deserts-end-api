import { Middleware, ParameterizedContext } from "koa";
import knex from "knex";
import config from "../config/devolunteersDB";

const getAll = async (ctx: ParameterizedContext, table: string) => {
  try {
    const db = knex(config);
    const users = await db(table);
    console.log(`${table} retrieved successfully`);
    ctx.body = users;
  } catch (error: any) {
    console.error(`Error getting all ${table}`, error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default getAll;
