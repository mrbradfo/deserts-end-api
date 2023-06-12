import { Middleware } from "koa";
import knex from "knex";
import { Assert, Role } from "../../types";
import config from "../../config/devolunteersDB";

const addNewRole: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;

  assert(ctx.request.body, 400, "Request body must not be empty");
  // check each field in request body
  const role = ctx.request.body as Role;
  // assert(role.user_id, 400, "user_id must not be empty");
  assert(role.position, 400, "position must not be empty");
  assert(role.date, 400, "date must not be empty");
  console.log("addNewRole body", ctx.request.body);

  try {
    const db = knex(config);
    const insertedRole = await db("roles").insert(role);
    [role.id] = insertedRole;
    ctx.body = role;
    console.log("Role inserted successfully");
  } catch (error: any) {
    console.error("Error inserting Role:", error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default addNewRole;
