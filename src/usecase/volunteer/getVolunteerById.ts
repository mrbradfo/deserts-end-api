import { Middleware } from "koa";
import knex from "knex";
import { Assert } from "../../types";
import config from "../../config/devolunteersDB";

const getVolunteerById: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;
  console.log("id", id);

  assert(id, 400, "ID is required.");
  const db = knex(config);
  const volunteer = await db("volunteers").where({ id }).first();
  assert(volunteer, 404, "Volunteer not found.");
  ctx.body = volunteer;
};

export default getVolunteerById;
