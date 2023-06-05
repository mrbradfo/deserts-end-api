import { Middleware } from "koa";
import knex from "knex";
import { Assert, User, Volunteer } from "../types";
import config from "../config/devolunteersDB";

const addVolunteer: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;

  assert(ctx.request.body, 400, "Request body must not be empty");
  // check each field in request body
  const volunteer = ctx.request.body as Volunteer;
  assert(volunteer.user_id, 400, "User Id not be empty");
  assert(volunteer.role_id, 400, "Role Id must not be empty");
  console.log("body", ctx.request.body);

  // cast request body to User type
  try {
    const db = knex(config);
    await db("volunteers").insert(volunteer);
    console.log("Volunteer inserted successfully");
    ctx.status = 201;
  } catch (error: any) {
    console.error("Error inserting volunteer:", error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default addVolunteer;
