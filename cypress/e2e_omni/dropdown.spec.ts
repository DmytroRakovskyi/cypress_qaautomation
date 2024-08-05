describe('Dropdown', () => {
    it('should select an option from the dropdown', () => {
      cy.visit('https://the-internet.herokuapp.com/dropdown');
      cy.get('#dropdown').select('Option 1').should('have.value', '1');
      cy.get('#dropdown').select('Option 2').should('have.value', '2');
    });
  });
  