import { Middleware } from "koa";
import knex from "knex";
import config from "../../config/devolunteersDB";

const getAllUsers: Middleware = async (ctx) => {
  try {
    const db = knex(config);
    const users = await db("users");
    console.log("Users retrieved successfully");
    ctx.body = users;
  } catch (error: any) {
    console.error("Error getting all users:", error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default getAllUsers;
