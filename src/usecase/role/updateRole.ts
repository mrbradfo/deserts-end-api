/* eslint-disable camelcase */
import { Middleware } from "koa";
import knex from "knex";
import { Assert, Role } from "../../types";
import db from "../../config/devolunteersDB";

const updateRole: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;
  const role: Role = ctx.request.body;
  console.log("id", id);
  assert(id, 400, "ID is required.");

  try {
    const updatedUser = await db("roles").where({ id }).update(role);
    assert(updatedUser, 404, "Error updating role.");
    if (!updatedUser) {
      ctx.body = "Error updating role.";
      ctx.status = 404;
      return;
    }
    console.log("Role updated successfully");
    ctx.body = role;
  } catch (error: any) {
    console.error("Error updating role:", error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default updateRole;
