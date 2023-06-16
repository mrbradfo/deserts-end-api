import knex from "knex";
import { ParameterizedContext } from "koa";
import { Assert } from "../types";
import db from "../config/devolunteersDB";

// generic function to delete by id
const deleteById = async (ctx: ParameterizedContext, tableName: string) => {
  const assert: Assert = ctx.assert as Assert;

  try {
    const { id } = ctx.params;
    assert(id, 400, "ID is required.");
    const result = await db(tableName).where({ id }).del();
    if (result === 0) {
      ctx.body = "ID not found.";
      ctx.status = 404;
    } else {
      ctx.body = "Deleted successfully.";
      ctx.status = 200;
    }
  } catch (error: any) {
    console.error("Error deleting:", error);
    ctx.status = 500;
  }
};

export default deleteById;
