import axios from "axios";

import * as env from "../../utilities/environmentVariables";

// before all setup
beforeAll(() => {
  const port = env.getAsNumber("PORT", 4545);
  console.log("port retrieved from env: ", port);
  //   const server = app.listen(port, () => {
  //     console.log(`Server is running on port ${port}`);
  //   });
});

// get all users
describe("Get all users", () => {
  it("should return an array of users", async () => {
    const response = await axios.get(`http://localhost:${port}/users`);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
  });
});

// describe("User Registration", () => {
//   it("should create a new user", async () => {
//     const response = await axios.post(`http://localhost:${PORT}/users`, {
//       firstName: "John",
//       lastName: "Doe",
//       email: "john.doe@example.com",
//       password: "password123",
//     });

//     expect(response.status).toBe(201);
//     expect(response.data).toHaveProperty("id");
//     expect(response.data).toHaveProperty("firstName", "John");
//     expect(response.data).toHaveProperty("lastName", "Doe");
//     // Add more assertions as needed
//   });
// });

// // after all remove the test user
// afterAll(async () => {
//   await axios.delete(`http://localhost:${PORT}/users`);
// });
