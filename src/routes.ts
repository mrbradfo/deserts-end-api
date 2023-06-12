import Router from "koa-router";
import knex from "knex";
import authorize from "./middleware/authorize";
import config from "./config/devolunteersDB";
import addUser from "./usecase/user/addUser";
import getAllUsers from "./usecase/user/getAllUsers";
import getUserById from "./usecase/user/getUserById";
import deleteById from "./usecase/deleteById";
import addNewRole from "./usecase/role/addNewRole";
import getAll from "./usecase/getAll";
import getById from "./usecase/getById";
import addUserToRole from "./usecase/role/addUserToRole";
import removeUserFromRole from "./usecase/role/removeUserFromRole";
import updateUser from "./usecase/user/updateUser";
import updateById from "./usecase/updateById";
import { Role, User } from "./types";
import { ROLES, USERS } from "./constants/TableNames";

const router = new Router();

// user
router.post("/users", authorize(), addUser);
// router.post("/users/login", loginUser);
router.get("/users", authorize(), getAllUsers);
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

router.get("/health", async (ctx) => {
  // create health object
  const health = {
    dbConnection: "",
    dbClient: config.client,
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
});

export default router;
