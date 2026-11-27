const { test } = require('../../fixtures/test');

test('should display the login form', async ({ loginPage }) => {

  await loginPage.interactiveFunctions.navigateToLogin();
  await loginPage.assertions.shouldDisplayLoginHeading();
});

test('should display an error message for invalid credentials', async ({ loginPage }) => {

  await loginPage.interactiveFunctions.navigateToLogin();
  await loginPage.interactiveFunctions.login('invalid-user@example.com', 'WrongPassword123!');
  await loginPage.assertions.shouldDisplayInvalidCredentialsError();
});

test('should log in successfully with valid credentials', async ({ loginPage, headerComponent }) => {

  const username = process.env.TEST_USER_NAME;
  const email = process.env.TEST_USER_EMAIL;
  const password = process.env.TEST_USER_PASSWORD;

  if (!email || !password || !username) {
  throw new Error(
    'Missing required environment variables: TEST_USER_EMAIL, TEST_USER_PASSWORD, TEST_USER_NAME'
  );}

  await loginPage.interactiveFunctions.navigateToLogin();
  await loginPage.interactiveFunctions.login(email, password);
  await headerComponent.assertions.shouldDisplayLoggedInUser(username);
});

test('should log out successfully', async ({ loginPage, headerComponent }) => {
    const username = process.env.TEST_USER_NAME;
    const email = process.env.TEST_USER_EMAIL;
    const password = process.env.TEST_USER_PASSWORD;

    if (!email || !password || !username) {
        throw new Error(
            'Missing required environment variables: TEST_USER_EMAIL, TEST_USER_PASSWORD, TEST_USER_NAME'
        );
    }

    await loginPage.interactiveFunctions.navigateToLogin();
    await loginPage.interactiveFunctions.login(email, password);
    await headerComponent.assertions.shouldDisplayLoggedInUser(username);

    await headerComponent.interactiveFunctions.logout();
    await loginPage.assertions.shouldDisplayLoginHeading();

});