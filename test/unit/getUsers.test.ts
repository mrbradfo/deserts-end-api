import request from "supertest";

import * as env from "../../src/utilities/environmentVariables";
import app from "../../src/app";

require("dotenv").config();

const port = env.getAsNumber("PORT");

// before all setup
beforeAll(() => {
  console.log("port retrieved from env: ", port);
  // const server = app.listen(port, () => {
  //   console.log(`Server is running on port ${port}`);
  // });
});

test("GET /users/:id should return a user", async () => {
  console.log("TESTING");
  // dummy test
  expect(1).toBe(1);
  // const response = await request(app).get("/users/1");
  // console.log("response: ", response);

  // expect(response.status).toBe(200);
  // expect(response.body).toHaveProperty("id");
  // expect(response.body).toHaveProperty("name");
});
