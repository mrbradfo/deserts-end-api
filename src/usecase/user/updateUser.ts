/* eslint-disable camelcase */
import { Middleware } from "koa";
import knex from "knex";
import { Assert, User } from "../../types";
import config from "../../config/devolunteersDB";

const updateUser: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;
  const user: User = ctx.request.body;
  console.log("id", id);
  assert(id, 400, "ID is required.");

  try {
    const db = knex(config);
    const updatedUser = await db("users").where({ id }).update(user);
    assert(updatedUser, 404, "Error updating user.");
    if (!updatedUser) {
      ctx.body = "Error updating user.";
      ctx.status = 404;
      return;
    }
    console.log("User updated successfully");
    ctx.body = user;
  } catch (error: any) {
    console.error("Error updating user:", error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default updateUser;
