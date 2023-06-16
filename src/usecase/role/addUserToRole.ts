/* eslint-disable camelcase */
import { Middleware } from "koa";
import knex from "knex";
import { Assert, Role } from "../../types";
import db from "../../config/devolunteersDB";

const addUserToRole: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;
  assert(ctx.request.body, 400, "Request body must not be empty");
  assert(ctx.params.id, 400, "role id param must not be empty");
  assert(ctx.request.body.user_id, 400, "user_id must not be empty");

  const { id } = ctx.params;
  const { user_id } = ctx.request.body;

  try {
    const updatedRole = await db("roles").where({ id }).update({ user_id });

    if (!updatedRole) {
      ctx.body = "Role not found";
      ctx.status = 404;
      return;
    }
    console.log("Role updated successfully");
    ctx.body = updatedRole;
    ctx.status = 201;
  } catch (error: any) {
    console.error("Error updating role:", error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default addUserToRole;
