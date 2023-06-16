import { Middleware } from "koa";
import knex from "knex";
import { Assert } from "../../types";
import db from "../../config/devolunteersDB";

const deleteVolunteer: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;
  assert(id, 400, "ID is required.");

  try {
    const volunteer = await db("volunteers").where({ id }).first();
    assert(volunteer, 404, "Volunteer not found.");
    await db("volunteers").where({ id }).del();
    console.log("Volunteer deleted successfully");
    ctx.status = 200;
  } catch (error: any) {
    console.error("Error deleting volunteer:", error);
    ctx.status = 500;
  }
};

export default deleteVolunteer;
