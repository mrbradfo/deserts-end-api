import Router from "koa-router";
import authorize from "./middleware/authorize";
import addUser from "./usecase/user/addUser";
import getUserById from "./usecase/user/getUserById";
import deleteById from "./usecase/deleteById";
import addNewRole from "./usecase/role/addNewRole";
import getAll from "./usecase/getAll";
import getById from "./usecase/getById";
import addUserToRole from "./usecase/role/addUserToRole";
import removeUserFromRole from "./usecase/role/removeUserFromRole";
import updateById from "./usecase/updateById";
import { Role, User } from "./types";
import { ROLES, USERS, VOLUNTEERS } from "./constants/TableNames";
import db from "./config/devolunteersDB";

const router = new Router();

// user
router.post("/users", authorize(), addUser);
// router.post("/users/login", loginUser);
router.get("/users", authorize(), async (ctx) => {
  return getAll(ctx, USERS);
});
router.get("/users/:id", authorize(), getUserById);
router.put("/users/:id", authorize(), async (ctx) => {
  return updateById<User>(ctx, USERS);
});
router.delete("/users/:id", authorize(), async (ctx) => {
  return deleteById(ctx, USERS);
});

// role
router.get("/roles", authorize(), async (ctx) => {
  return getAll(ctx, ROLES);
});
router.get("/roles/:id", authorize(), async (ctx) => {
  return getById(ctx, ROLES);
});
router.post("/roles", authorize(), addNewRole);
router.put("/roles/:id/add", authorize(), addUserToRole);
router.put("/roles/:id", authorize(), async (ctx) => {
  return updateById<Role>(ctx, ROLES);
});

router.put("/roles/:id/remove", authorize(), removeUserFromRole);
router.delete("/roles/:id", authorize(), async (ctx) => {
  return deleteById(ctx, ROLES);
});
router.delete("/roles/user/:id/", authorize(), removeUserFromRole);

router.get("/volunteers", authorize(), async (ctx) => {
  return getAll(ctx, VOLUNTEERS);
});
router.get("/health", async (ctx) => {
  // create health object
  const health = {
    dbConnection: "",
    dbClient: db.client.config.client,
    node: process.version,
    memoryUsage: {
      rss: `${Math.round((process.memoryUsage().rss / 1024 / 1024) * 100) / 100} MB`,
      heapTotal: `${Math.round((process.memoryUsage().heapTotal / 1024 / 1024) * 100) / 100} MB`,
      heapUsed: `${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB`,
      external: `${Math.round((process.memoryUsage().external / 1024 / 1024) * 100) / 100} MB`,
      arrayBuffers: `${
        Math.round((process.memoryUsage().arrayBuffers / 1024 / 1024) * 100) / 100
      } MB`,
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
});

export default router;
