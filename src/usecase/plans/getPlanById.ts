/* eslint-disable no-restricted-syntax */
import { Middleware } from "koa";
import { Assert } from "../../types";
import db from "../../config/devolunteersDB";
import { PLANS, PLANS_VIEW, POSITIONS, TEAMS } from "../../constants/TableNames";
import { log } from "console";

/* id: number;
name: string;
confirmed_count: number;
pending_count: number;
declined_count: number;
teams: Team[];
date: Date; */

const getPlanById: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;
  console.log("id", id);
  assert(id, 400, "ID is required.");

  // get plan from PLAN_VIEW
  const plan = await db(PLANS_VIEW).where({ id }).first();
  ctx.body = plan.plan;
  assert(plan, 404, "Plan not found.");
};

export default getPlanById;
