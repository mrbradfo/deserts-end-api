import type { Config } from "@jest/types";
// Sync object

const globals = {
  testAccount: {
    userId: 65000,
    siteId: 75000,
    firstName: "Automated",
    lastName: "Tester",
    businessName: "Tron Testing Inc.",
    emailAddress: "account-api-tester@showit.dev",
    password: "GoodPassword1#",
    phoneNumbers: {
      good: "+15005550001",
      blocked: "+15005550004",
      bad: "+15005550002",
    },
    contactMethod: {
      type: "sms",
      id: 44444,
      value: "+16025604844",
      confirmationCode: "012345",
    },
  },
  badTestAccount: {
    userId: 65001,
    siteId: 75001,
    emailAddress: "already-used-email@showit.dev",
    password: "EvilPassword1#",
  },
  noSubAccount: {
    userId: 65002,
    firstName: "Joe",
    lastName: "Shmo",
    businessName: "Shmo Inc.",
    siteId: 75002,
    emailAddress: "account-api-no-sub-tester@showit.dev",
    password: "GoodPassword1#",
  },
  testAccount2: {
    userId: 65003,
    siteId: 75003,
    firstName: "Tiger",
    lastName: "Woods",
    businessName: "Woods Golf Inc",
    emailAddress: "tigerwoods@showit.dev",
    password: "#ImTheGoat123",
  },
  adminUser: {
    adminId: 123,
    username: "Gandalf",
    password: "GoodPassword1#",
  },
};

type Globals = { globals: typeof globals };

const config: Omit<Config.InitialOptions, "globals"> & Globals = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src", "<rootDir>/test"],
  setupFiles: ["<rootDir>/test/setup.ts"],
  globalSetup: "<rootDir>/test/globalSetup.ts",
  globalTeardown: "<rootDir>/test/globalTeardown.ts",
  globals,
};

export default config;
