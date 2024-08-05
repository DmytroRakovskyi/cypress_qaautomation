import { Truck } from '../types/truck';

class TrucksPage {
  visit() {
    cy.visit('https://dev.omni-dispatch.com/fleets/trucks');
  }

  getTable() {
    return cy.get('#app > div > main > div > div.v-card.v-theme--light.v-card--density-default.v-card--variant-flat.bg-transparent > div.v-card-text.pa-0 > div.v-table.v-table--has-top.v-table--has-bottom.v-table--hover.v-theme--light.v-table--density-default.v-data-table.omni-table.trucks-table');
  }

  getFilterBar() {
    return cy.get('.v-row'); 
  }

  openFilterDropdown() {
    cy.get('[data-qa="truck-type"]').click(); 
  }

  selectDropdownValue(value: string) {
    cy.get('.v-list-item').contains(value).click(); 
  }

  applyFilter() {
    cy.get('#search--apply-btn').click();
  }

  getTableRows() {
    return cy.get('table tbody tr'); 
  }

  getDimsAndPayloadColumn(index: number): Cypress.Chainable {
    return cy.get('table tbody tr').eq(index).find('td').eq(3); 
  }

  extractDimensions(text: string): number[] {
    const dims = text.match(/\d+/g) || [];
    return dims.map(Number);
  }

  cleanText(text: string): string {
    return text.replace(/[^\d\s]/g, '').trim(); 
  }

  getDimsText(index: number): Cypress.Chainable {
    return this.getDimsAndPayloadColumn(index).find('[data-qa="truck-trailer-dims"]').invoke('text');
  }

  getPayloadText(index: number): Cypress.Chainable {
    return this.getDimsAndPayloadColumn(index).find('.text-grey-darken-1').invoke('text');
  }

  checkCheckbox(value: string) {
  
    cy.get(`input[type="checkbox"][value="${value}"]`).check({ force: true });
  }

  uncheckCheckbox(value: string) {

    cy.get(`input[type="checkbox"][value="${value}"]`).uncheck({ force: true });
  }
}

export default TrucksPage;
