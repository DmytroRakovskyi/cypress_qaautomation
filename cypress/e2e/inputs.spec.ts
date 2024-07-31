describe('Inputs', () => {
    it('should accept numerical input', () => {
      cy.visit('https://the-internet.herokuapp.com/inputs');
      cy.get('input[type="number"]').type('123').should('have.value', '123');
    });
  });
  