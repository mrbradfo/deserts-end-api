import { ParameterizedContext } from "koa";
import db from "../config/devolunteersDB";

const getHealth = async (ctx: ParameterizedContext) => {
  const health = {
    dbConnection: "",
    dbClient: db.client.config.client,
    node: process.version,
    memoryUsage: {
      rss: `${Math.round((process.memoryUsage().rss / 1024 / 1024) * 100) / 100} MB`,
      heapTotal: `${Math.round((process.memoryUsage().heapTotal / 1024 / 1024) * 100) / 100} MB`,
      heapUsed: `${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB`,
      external: `${Math.round((process.memoryUsage().external / 1024 / 1024) * 100) / 100} MB`,
      arrayBuffers: `${Math.round((process.memoryUsage().arrayBuffers / 1024 / 1024) * 100) / 100} MB`,
    },
    pid: process.pid,
    uptime: `${Math.round(process.uptime() * 100) / 100} s`,
  };
  // check database connection
  await db
    .raw("select 1+1 as result")
    .then(() => {
      health.dbConnection = "OK";
    })
    .catch((err) => {
      health.dbConnection = err;
    })
    .finally(() => {
      ctx.body = health;
    });
};

export default getHealth;
