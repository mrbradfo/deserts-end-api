import { Middleware, ParameterizedContext } from "koa";
import knex from "knex";
import { Assert, User, Volunteer } from "../../types";
import deleteById from "../deleteById";

const deleteRole: Middleware = async (ctx) => {
  //   const assert: Assert = ctx.assert as Assert;
  //   const { id } = ctx.params;
  //   assert(id, 400, "ID is required.");
  //   try {
  //     const role = await db("roles").where({ id }).first();
  //     assert(role, 404, "Role not found.");
  //     await db("roles").where({ id }).del();
  //     console.log("Role deleted successfully");
  //     ctx.status = 200;
  //   } catch (error: any) {
  //     console.error("Error deleting Role:", error);
  //     ctx.status = 500;
  //   }
  await deleteById(ctx, "roles");
};

export default deleteRole;
