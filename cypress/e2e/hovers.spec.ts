describe('Hovers', () => {
    it('should display additional information on hover for all users', () => {
      cy.visit('https://the-internet.herokuapp.com/hovers');
  
      cy.get('.figure').each((figure, index) => {
   
        cy.wrap(figure).trigger('mouseover');
  
        
        cy.wrap(figure).find('.figcaption').invoke('show').should('be.visible');
  
       
        cy.wrap(figure).find('.figcaption h5').should('contain', `name: user${index + 1}`);
  
       
        cy.wait(500);
      });
    });
  });
  