import Koa from "koa";
import koaBody from "koa-body";
import cors from "@koa/cors";
import * as env from "./utilities/environmentVariables";
import router from "./routes";

const app = new Koa();
const port = env.getAsNumber("PORT");

app.use(koaBody());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  /* const uniqueRoutes = new Set();
  router.stack.forEach((route) => {
    if (route.methods.length > 0) {
      route.methods.forEach((method) => {
        if (method === "HEAD") return;
        if (uniqueRoutes.has(`${method.toUpperCase()} ${route.path}`)) return;
        uniqueRoutes.add(`${method.toUpperCase()} ${route.path}`);
      });
    }
  });
  console.log("Routes:");
  uniqueRoutes.forEach((route) => {
    console.log(route);
  }); */
});

export default app;
