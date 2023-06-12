import { Middleware, ParameterizedContext } from "koa";
import knex from "knex";
import config from "../config/devolunteersDB";
import { Assert } from "../types";

const getById = async (ctx: ParameterizedContext, table: string) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;
  console.log("id", id);
  assert(id, 400, "ID is required.");

  try {
    const db = knex(config);
    const result = await db(table).where({ id }).first();
    console.log("result", result);

    assert(result, 404, `${table}s not found.`);
    ctx.body = result;
  } catch (error: any) {
    console.error(`Error getting ${table} by id`, error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default getById;
