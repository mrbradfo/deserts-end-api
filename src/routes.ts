import Router from "koa-router";
import knex from "knex";
import authorize from "./middleware/authorize";
import getAllVolunteers from "./usecase/getAllVolunteers";
import getVolunteerById from "./usecase/getVolunteerById";
import addVolunteer from "./usecase/addVolunteer";
import config from "./config/devolunteersDB";
import addUser from "./usecase/addUser";

const router = new Router();

// user
router.post("/users", authorize(), addUser); // add a user
// router.post("/users/login", loginUser); // login user
// router.get("/users", authorize(), getAllUsers); // get all users
// router.get("/users/:id", authorize(), getUserById); // get user by id
// router.put("/users/:id", authorize(), updateUser); // update user by id
// router.delete("/users/:id", authorize(), deleteUser); // delete user by id

// volunteer
router.get("/volunteer/:id", authorize(), getVolunteerById); // get volunteer by id
router.get("/volunteers", authorize(), getAllVolunteers); // get all volunteers
router.post("/volunteers", authorize(), addVolunteer); // add a volunteer
// router.put("/volunteers/:id", authorize(), updateVolunteer); // update volunteer by id
// router.delete("/volunteers/:id", authorize(), deleteVolunteer); // delete volunteer by id

// schedule
// router.get("/schedules", authorize(), getAllSchedules); // get all schedules
// router.get("/schedules/:id", authorize(), getScheduleById); // get schedule by user id
// router.post("/schedules", authorize(), addSchedule); // add a schedule
// router.put("/schedules/:id", authorize(), updateSchedule); // update schedule by id
// router.delete("/schedules/:id", authorize(), deleteSchedule); // delete schedule by id

// health
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

  // check database connection
  await knex(config)
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
