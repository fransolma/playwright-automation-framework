class HeaderSelectors {
  constructor(page) {
    this.loggedInUser = page.getByText('Logged in as', {exact: false});
    
    this.logoutLink = page.locator('a[href="/logout"]');

  }
}

module.exports = { HeaderSelectors };