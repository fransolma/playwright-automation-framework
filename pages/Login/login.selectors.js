class LoginSelectors {
  constructor(page) {
    
this.loginHeading = page.getByRole('heading', {
  name: 'Login to your account',exact: true });

this.emailInput = page.locator('input[data-qa="login-email"]');

this.passwordInput = page.locator('input[data-qa="login-password"]');

this.loginButton = page.getByRole('button', { name: 'Login' ,exact: true });

this.loginError = page.getByText('Your email or password is incorrect!',{ exact: true });

  }

}




module.exports = { LoginSelectors };