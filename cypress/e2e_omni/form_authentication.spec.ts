describe('Form Authentication', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.success').should('contain', 'You logged into a secure area!');
  });

  it('should fail login with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');
    cy.get('.radius').click();
    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });
});