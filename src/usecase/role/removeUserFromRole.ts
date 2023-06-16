import { Middleware } from "koa";
import knex from "knex";
import { Assert } from "../../types";
import config from "../../config/devolunteersDB";
import db from "../../config/devolunteersDB";

/**
 *
 * @param ctx
 */
const removeUserFromRole: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;

  assert(ctx.params.id, 400, "role id param must not be empty");

  const { id } = ctx.params;

  try {
    const updatedRole = await db("roles").where({ id }).update({ user_id: null });

    if (!updatedRole) {
      ctx.body = "Role not found";
      ctx.status = 404;
      return;
    }
    console.log("User removed from role successfully");
    ctx.body = updatedRole;
    ctx.status = 200;
  } catch (error: any) {
    console.error("Error removing user from role:", error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default removeUserFromRole;
