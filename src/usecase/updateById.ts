import { ParameterizedContext } from "koa";
import knex from "knex";
import { Assert } from "../types";
import config from "../config/devolunteersDB";

const updateById = async <T>(ctx: ParameterizedContext, table: string) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;
  const entity: T = ctx.request.body;
  console.log("id", id);
  assert(id, 400, "ID is required.");

  try {
    const db = knex(config);
    const updatedUser = await db(table).where({ id }).update(entity);
    if (!updatedUser) {
      ctx.body = `Error updating ${table}.`;
      ctx.status = 404;
      return;
    }
    console.log(`${table} updated successfully`);
    ctx.body = entity;
  } catch (error: any) {
    console.error(`Error updating ${table}:`, error);
  }
};

export default updateById;
