/* eslint-disable prettier/prettier */
import Router from "koa-router";
import authorize from "./middleware/authorize";
import addUser from "./usecase/user/addUser";
import getUserById from "./usecase/user/getUserById";
import deleteById from "./usecase/deleteById";
import getAll from "./usecase/getAll";
import getById from "./usecase/getById";
import { Assignment, Plan, Team, User } from "./types";
import { USERS, TEAMS, PLANS, ASSIGNMENTS } from "./constants/TableNames";
import getHealth from "./utilities/getHealth";
import addNewEntity from "./usecase/addNewEntity";
import updateById from "./usecase/updateById copy";

const router = new Router();

router.get("/users", authorize(), async (ctx) => getAll(ctx, USERS));
router.get("/users/:id", authorize(), async (ctx) => getById(ctx, USERS));
router.post("/users", authorize(), addUser);
router.put("/users/:id", authorize(), async (ctx) => updateById<User>(ctx, USERS));
router.delete("/users/:id", authorize(), async (ctx) => deleteById(ctx, USERS));

router.get("/teams", authorize(), async (ctx) => getAll(ctx, TEAMS));
router.get("/teams/:id", authorize(), async (ctx) => getById(ctx, TEAMS));
router.post("/teams", authorize(), async (ctx) => addNewEntity<Team>(ctx, TEAMS));
router.put("/teams/:id", authorize(), async (ctx) => updateById<Team>(ctx, TEAMS));
router.delete("/teams/:id", authorize(), async (ctx) => deleteById(ctx, TEAMS));

router.get("/plans", authorize(), async (ctx) => getAll(ctx, PLANS));
router.get("/plans/:id", authorize(), async (ctx) => getById(ctx, PLANS));
router.post("/plans", authorize(), async (ctx) => addNewEntity<Plan>(ctx, PLANS));
router.put("/plans/:id", authorize(), async (ctx) => updateById<Plan>(ctx, PLANS));
router.delete("/plans/:id", authorize(), async (ctx) => deleteById(ctx, PLANS));

router.get("/assignments", authorize(), async (ctx) => getAll(ctx, ASSIGNMENTS));
router.get("/assignments/:id", authorize(), async (ctx) => getById(ctx, ASSIGNMENTS));
router.post("/assignments", authorize(), async (ctx) => addNewEntity<Assignment>(ctx, ASSIGNMENTS));
router.put("/assignments/:id", authorize(), async (ctx) => updateById<Assignment>(ctx, ASSIGNMENTS));
router.delete("/assignments/:id", authorize(), async (ctx) => deleteById(ctx, ASSIGNMENTS));

router.get("/health", async (ctx) => getHealth(ctx));

export default router;
