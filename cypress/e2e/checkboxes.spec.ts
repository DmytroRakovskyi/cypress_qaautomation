describe('Checkboxes', () => {
    it('should check and uncheck checkboxes', () => {
      cy.visit('https://the-internet.herokuapp.com/checkboxes');
      cy.get('#checkboxes input[type="checkbox"]').first().check().should('be.checked');
      cy.get('#checkboxes input[type="checkbox"]').first().uncheck().should('not.be.checked');
      cy.get('#checkboxes input[type="checkbox"]').eq(1).should('be.checked');
      cy.get('#checkboxes input[type="checkbox"]').eq(1).uncheck().should('not.be.checked');
    });
  });
  