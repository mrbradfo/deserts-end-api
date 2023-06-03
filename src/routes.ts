import Router from "koa-router";
import authorize from "./middleware/authorize";
import { getVolunteerById, addVolunteer } from "./usecase";
import getAllVolunteers from "./usecase/getAllVolunteers";

const router = new Router();

router.get("/volunteers", authorize(), getAllVolunteers);
router.get("/volunteers/:id", authorize(), getVolunteerById);
router.post("/volunteers", authorize(), addVolunteer);

export default router;
