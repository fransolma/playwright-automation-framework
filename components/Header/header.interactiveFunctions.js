class HeaderInteractiveFunctions {
  constructor(selectors) {
    this.selectors = selectors;
  }

  async logout() {
    await this.selectors.logoutLink.click();
  }

}

module.exports = { HeaderInteractiveFunctions };
