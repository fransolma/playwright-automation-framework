const { expect } = require('@playwright/test');

class LoginAssertions {
  constructor(selectors) {
    this.selectors = selectors;
  }

  async shouldDisplayLoginHeading() {
    await expect(this.selectors.loginHeading).toBeVisible();
  }

  async shouldDisplayInvalidCredentialsError() {
    await expect(this.selectors.loginError).toBeVisible();
  }

}


module.exports = { LoginAssertions };