import { ParameterizedContext } from "koa";
import db from "../config/devolunteersDB";

const addNewEntity = async <T>(ctx: ParameterizedContext, table: string) => {
  const entity: T = ctx.request.body as T;

  try {
    console.log(`Adding to ${table}`);

    const newEntity = await db(table).insert(entity);

    if (!newEntity) {
      ctx.body = `Error adding ${table}.`;
      ctx.status = 404;
      return;
    }
    console.log(`${table} added successfully`);
    ctx.body = entity;
    ctx.status = 201;
  } catch (error: any) {
    console.error(`Error adding ${table}:`, error);
    ctx.body = `Error adding ${table}. ${error}`;
    ctx.status = 500; // or another appropriate status code
  }
};

export default addNewEntity;
