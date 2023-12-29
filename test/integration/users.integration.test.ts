import dotenv from "dotenv";
import db from "../../src/config/devolunteersDB";

beforeAll(async () => {
  // insert test user
  const result = await db("users").insert({
    first_name: "test-user",
    last_name: "test-user",
    email: "",
    password: "",
    admin: 0,
    blackout_dates: "",
    txt_alerts: 0,
    email_alerts: 0,
  });
});

describe("get test user", () => {
  test("Get test user from DB", async () => {
    const response = await db("users").where({ first_name: "test-user" }).first();
    expect(response.first_name).toEqual("test-user");
  });
});

afterAll(async () => {
  // delete test user
  await db("users").where({ first_name: "test-user" }).del();
  // close all connections in the pool
  await db.destroy();
});
