import { Middleware } from "koa";
import knex from "knex";
import db from "../../config/devolunteersDB";

const getAllUsers: Middleware = async (ctx) => {
  try {
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
