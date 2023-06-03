import Router from "koa-router";
import authorize from "./middleware/authorize";
import { getVolunteerById, addVolunteer } from "./usecase";

const router = new Router();

// API Endpoint to Get Volunteer by ID using Koa and Middleware
router.get("/volunteers/:id", authorize(), getVolunteerById);

// API to add a new volunteer
router.post("/volunteers", authorize(), addVolunteer);

export default router;
