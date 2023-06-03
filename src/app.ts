import Koa from "koa";
import Router from "koa-router";
import knex from "knex";
import config from "./config/devolunteersDB";

const app = new Koa();
const router = new Router();
const port = 3000;

// Knex Configuration
const db = knex(config);

app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
