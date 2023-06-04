import { Middleware } from "koa";
import knex from "knex";
import { Assert } from "../types";
import config from "../config/devolunteersDB";

const addVolunteer: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;
  const volunteer = ctx.body;
  console.log("body", ctx.request.body);
  console.log("ctx.body", ctx.body);
  console.log("ctx", ctx);
  // const db = knex(config);
  // add new volunteer
  // const success = db("volunteers").insert({ volunteer });
  console.log("adding volunteer: ", volunteer);
};

export default addVolunteer;
