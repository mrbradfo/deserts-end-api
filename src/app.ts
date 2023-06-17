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
  console.log(
    "routes",
    router.stack.map((i) => i.path)
  );
});

export default app;
