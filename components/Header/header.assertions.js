const { expect } = require('@playwright/test');

class HeaderAssertions {
  /**
   * @param {import('./header.selectors').HeaderSelectors} selectors
   */
  constructor(selectors) {
    this.selectors = selectors;
  }

  async shouldDisplayLoggedInUser(username) {
    await expect(this.selectors.loggedInUser).toBeVisible();
    await expect(this.selectors.loggedInUser).toHaveText(
      `Logged in as ${username}`
    );
  }
}

module.exports = { HeaderAssertions };