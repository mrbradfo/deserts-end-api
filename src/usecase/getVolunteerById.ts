import { Middleware } from "koa";
import { Assert } from "../types";

const getVolunteerById: Middleware = async (ctx) => {
  const assert: Assert = ctx.assert as Assert;
  const { id } = ctx.params;

  assert(id, 400, "ID is required.");
};

export default getVolunteerById;
