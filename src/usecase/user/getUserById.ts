import { Middleware } from "koa";
import knex from "knex";
import { Assert, User } from "../../types";
import config from "../../config/devolunteersDB";

const getUserById: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;
  console.log("id", id);
  assert(id, 400, "ID is required.");

  try {
    const db = knex(config);
    const user = await db("users").where({ id }).first();
    assert(user, 404, "User not found.");
    ctx.body = user;
  } catch (error: any) {
    console.error("Error getting all users:", error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default getUserById;
