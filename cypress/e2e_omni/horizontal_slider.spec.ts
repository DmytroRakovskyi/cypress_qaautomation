describe('Horizontal Slider', () => {
    it('should move the slider', () => {
      cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
      cy.get('input[type="range"]').invoke('val', 3).trigger('change');
      cy.get('#range').should('have.text', '3');
    });
  });
  