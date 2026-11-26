const {LoginSelectors} = require('./login.selectors');
const {LoginInteractiveFunctions} = require('./interactiveFunctions');
const {LoginAssertions} = require('./login.assertions');

class LoginPage {
  constructor(page) {
    this.selectors = new LoginSelectors(page);
    this.interactiveFunctions = new LoginInteractiveFunctions(page, this.selectors);
    this.assertions = new LoginAssertions(this.selectors);
  }
}

module.exports = { LoginPage };