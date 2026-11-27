const { test: setup } = require("../../fixtures/test");

setup(
  "authenticate test user",
  async ({ loginPage, headerComponent, page }) => {
    // Read and validate environment variables.
    // Log in and verify the expected user.
    // Save authentication state.
    const username = process.env.TEST_USER_NAME;
    const email = process.env.TEST_USER_EMAIL;
    const password = process.env.TEST_USER_PASSWORD;
    if (!email || !password || !username) {
      throw new Error(
        "Missing required environment variables: TEST_USER_EMAIL, TEST_USER_PASSWORD, TEST_USER_NAME",
      );
    }

    await loginPage.interactiveFunctions.navigateToLogin();
    await loginPage.interactiveFunctions.login(email, password);
    await headerComponent.assertions.shouldDisplayLoggedInUser(username);

    await page.context().storageState({ path: "playwright/.auth/user.json" });
  },
);
