import { ParameterizedContext } from "koa";
import { Assert } from "../types";
import db from "../config/devolunteersDB";

const getById = async (ctx: ParameterizedContext, table: string) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;
  console.log("id", id);
  assert(id, 400, "ID is required.");

  try {
    const result = await db(table).where({ id }).first();
    console.log("result", result);

    assert(result, 404, `${table} not found.`);
    ctx.body = result;
  } catch (error: any) {
    console.error(`Error getting ${table} by id`, error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default getById;
