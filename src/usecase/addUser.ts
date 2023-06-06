import { Middleware } from "koa";
import knex from "knex";
import { Assert, User } from "../types";
import config from "../config/devolunteersDB";

const addUser: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;

  assert(ctx.request.body, 400, "Request body must not be empty");
  // check each field in request body
  const user = ctx.request.body as User;
  assert(user.name, 400, "Name must not be empty");
  assert(user.email, 400, "Email must not be empty");
  assert(user.password, 400, "Password must not be empty");
  assert(user.admin, 400, "Admin must not be empty");

  console.log("body", ctx.request.body);

  // cast request body to User type
  try {
    const db = knex(config);
    await db("users").insert(user);
    console.log("User inserted successfully");
    ctx.status = 201;
  } catch (error: any) {
    console.error("Error inserting user:", error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default addUser;
