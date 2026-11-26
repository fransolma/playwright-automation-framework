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