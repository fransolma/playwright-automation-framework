const { test } = require("../../../fixtures/test");

test("should reuse the authenticated session", async ({
  page,
  headerComponent,
}) => {
  const username = process.env.TEST_USER_NAME;

  if (!username) {
    throw new Error("Missing required environment variable: TEST_USER_NAME");
  }

  // Open the home page.
  // Verify the expected logged-in user.
  await page.goto("/");
  await headerComponent.assertions.shouldDisplayLoggedInUser(username);
});
