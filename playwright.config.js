const { defineConfig } = require("@playwright/test");
const path = require("node:path");

require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});

module.exports = defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://automationexercise.com",
  },
  projects: [
    {
      name: "setup",
      testMatch: "**/setup/auth.setup.js",
    },
    {
      name: "guest",
      testMatch: "**/ui/login.spec.js",
    },
    {
      name: "authenticated",
      testMatch: "**/ui/authenticated/**/*.spec.js",
      dependencies: ["setup"],
      use: {
        storageState: "playwright/.auth/user.json",
      },
    },
  ],
});
