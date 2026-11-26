class LoginInteractiveFunctions {
  constructor(page, selectors) {
    this.page = page;
    this.selectors = selectors;
  }

  async navigateToLogin() {
    await this.page.goto('/login');
  }

  async login(email, password) {
  await this.selectors.emailInput.fill(email);
  await this.selectors.passwordInput.fill(password);
  await this.selectors.loginButton.click();
}

  
}

module.exports = { LoginInteractiveFunctions };