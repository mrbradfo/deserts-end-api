import { ParameterizedContext } from "koa";
import db from "../config/devolunteersDB";

const getAll = async (ctx: ParameterizedContext, table: string) => {
  try {
    const data = await db(table);
    const date = new Date();
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    console.log(`${table} retrieved successfully at ${hours}:${minutes} ${date.getHours() > 12 ? "PM" : "AM"}`);

    ctx.body = data;
  } catch (error: any) {
    console.error(`Error getting all ${table}`, error);
    ctx.body = error;
    ctx.status = 500;
  }
};

export default getAll;
