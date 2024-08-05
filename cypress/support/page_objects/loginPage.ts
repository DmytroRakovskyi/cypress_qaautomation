class LoginPage {
  visit() {
    cy.visit('https://dev.omni-dispatch.com/login');
  }

  fillEmail(email: string) {
    cy.get('input[type="email"]').type(email); 
  }

  fillPassword(password: string) {
    cy.get('input[type="password"]').type(password);
  }

  submit() {
    cy.contains('button', 'Log in').click();
  }

  login(email: string, password: string) {
    this.visit();
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
    cy.url().should('not.include', '/login'); 
  }
}

export default LoginPage;