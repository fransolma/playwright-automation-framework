const {HeaderSelectors} = require('./header.selectors');
const {HeaderAssertions} = require('./header.assertions');
const {HeaderInteractiveFunctions} = require('./header.interactiveFunctions');

class HeaderComponent {
  constructor(page) {
    this.selectors = new HeaderSelectors(page);
    this.assertions = new HeaderAssertions(this.selectors);
    this.interactiveFunctions = new HeaderInteractiveFunctions(this.selectors);
  }
}

module.exports = { HeaderComponent };