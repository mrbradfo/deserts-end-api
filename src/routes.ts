/* eslint-disable prettier/prettier */
import Router from "koa-router";
import authorize from "./middleware/authorize";
import addUser from "./usecase/user/addUser";
import deleteById from "./usecase/deleteById";
import getAll from "./usecase/getAll";
import getById from "./usecase/getById";
import { Volunteer, Plan, Team, User, Position } from "./types";
import { USERS, TEAMS, PLANS, POSITIONS, VOLUNTEERS, PLANS_VIEW } from "./constants/TableNames";
import getHealth from "./utilities/getHealth";
import addNewEntity from "./usecase/addNewEntity";
import updateById from "./usecase/updateById copy";
import getPlanById from "./usecase/plans/getPlanById";

const router = new Router();

router.get("/users", authorize(), async (ctx) => getAll(ctx, USERS));
router.get("/users/:id", authorize(), async (ctx) => getById(ctx, USERS));
router.post("/users", authorize(), addUser);
router.put("/users/:id", authorize(), async (ctx) => updateById<User>(ctx, USERS));
router.delete("/users/:id", authorize(), async (ctx) => deleteById(ctx, USERS));

router.get("/volunteers", authorize(), async (ctx) => getAll(ctx, VOLUNTEERS));
router.get("/volunteers/:id", authorize(), async (ctx) => getById(ctx, VOLUNTEERS));
router.post("/volunteers", authorize(), async (ctx) => addNewEntity<Volunteer>(ctx, VOLUNTEERS));
router.put("/volunteers/:id", authorize(), async (ctx) => updateById<User>(ctx, VOLUNTEERS));
router.delete("/volunteers/:id", authorize(), async (ctx) => deleteById(ctx, VOLUNTEERS));

router.get("/teams", authorize(), async (ctx) => getAll(ctx, TEAMS));
router.get("/teams/:id", authorize(), async (ctx) => getById(ctx, TEAMS));
router.post("/teams", authorize(), async (ctx) => addNewEntity<Team>(ctx, TEAMS));
router.put("/teams/:id", authorize(), async (ctx) => updateById<Team>(ctx, TEAMS));
router.delete("/teams/:id", authorize(), async (ctx) => deleteById(ctx, TEAMS));

router.get("/plans", authorize(), async (ctx) => getAll(ctx, PLANS));
router.get("/plans/:id", authorize(), getPlanById);
router.post("/plans", authorize(), async (ctx) => addNewEntity<Plan>(ctx, PLANS));
router.put("/plans/:id", authorize(), async (ctx) => updateById<Plan>(ctx, PLANS));
router.delete("/plans/:id", authorize(), async (ctx) => deleteById(ctx, PLANS));

// get plans view by id
router.get("/plans_view/:id", authorize(), async (ctx) => getById(ctx, PLANS_VIEW));
router.get("/plans_view", authorize(), async (ctx) => getAll(ctx, PLANS_VIEW));

router.get("/positions", authorize(), async (ctx) => getAll(ctx, POSITIONS));
router.get("/positions/:id", authorize(), async (ctx) => getById(ctx, POSITIONS));
router.post("/positions", authorize(), async (ctx) => addNewEntity<Position>(ctx, POSITIONS));
router.put("/positions/:id", authorize(), async (ctx) => updateById<Position>(ctx, POSITIONS));
router.delete("/positions/:id", authorize(), async (ctx) => deleteById(ctx, POSITIONS));

router.get("/health", async (ctx) => getHealth(ctx));

export default router;
