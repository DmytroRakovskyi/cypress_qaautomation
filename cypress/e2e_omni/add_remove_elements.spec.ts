describe('Add/Remove Elements', () => {
    it('should add and remove elements', () => {
      cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
      cy.get('button').contains('Add Element').click();
      cy.get('.added-manually').should('have.length', 1);
      cy.get('.added-manually').click();
      cy.get('.added-manually').should('have.length', 0);
    });
  });
  