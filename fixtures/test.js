const { test: base } = require('@playwright/test');
const { LoginPage } = require('../pages/Login/login.page');
const { HeaderComponent } = require('../components/Header/header.component');

const test = base.extend({
  
  loginPage: async ({ page }, use) => {
  const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  headerComponent: async ({ page }, use) => {
    const headerComponent = new HeaderComponent(page);
    await use(headerComponent);
  } 
});

module.exports = { test };