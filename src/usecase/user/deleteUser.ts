import { Middleware } from "koa";
import knex from "knex";
import { Assert } from "../../types";
import config from "../../config/devolunteersDB";

const deleteUser: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;
  assert(id, 400, "ID is required.");

  try {
    const db = knex(config);
    const user = await db("users").where({ id }).first();
    assert(user, 404, "User not found.");
    await db("users").where({ id }).del();
    console.log("User deleted successfully");
    ctx.status = 200;
  } catch (error: any) {
    console.error("Error deleting user:", error);
    ctx.status = 500;
  }
};

export default deleteUser;
