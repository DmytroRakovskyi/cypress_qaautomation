import LoginPage from '../support/page_objects/loginPage';
import TrucksPage from '../support/page_objects/trucksPage';
import { Truck } from '../support/types/truck';

const loginPage = new LoginPage();
const trucksPage = new TrucksPage();

describe('Trucks Page', () => {
  let trucksData: Truck[] = []; 

  beforeEach(() => {
    cy.clearCookies();
    loginPage.login('test@gmail.com', '12345678');

    
    cy.intercept('GET', '**/api/v1/trucks?page=1&page_size=10&archived=false').as('getTrucks');
    
 
    trucksPage.visit();
  });

  it('Smoke - Page loads', () => {
    cy.url().should('include', '/fleets/trucks');
    cy.contains('Trucks');
  });

  it('Smoke - Table and filters are displayed', () => {
    trucksPage.getTable().should('be.visible');
    trucksPage.getFilterBar().should('be.visible');
  });

  it('Smoke - Truck information is fetched from backend', () => {
    cy.wait('@getTrucks').then(({ response }) => {
      expect(response?.statusCode).to.eq(200);
      expect(response?.body).to.have.property('items');
      expect(response?.body.items).to.be.an('array');
      trucksData = response?.body.items;
    });
  });

  it('Filter functional test with dropdown', () => {

    trucksPage.openFilterDropdown();

  
    trucksPage.selectDropdownValue('Straight Truck');
    
    
    trucksPage.applyFilter();

    cy.wait('@getTrucks').then(({ response }) => {
      const filteredTrucks: Truck[] = response!.body.items;
      filteredTrucks.forEach((truck: Truck) => {
        expect(truck.trailer.type).to.eq('Straight Truck');
      });
    });

    
    trucksPage.getTableRows().each((row) => {
      cy.wrap(row).within(() => {
        cy.get('td').eq(2).should('contain', 'Straight Truck'); 
      });
    });
  });

  it('Dims & Payload Validation', () => {
  
    cy.wait('@getTrucks');

    trucksPage.getTableRows().each((row, index) => {
      if (trucksData[index] && trucksData[index].trailer) {
        const trailer = trucksData[index].trailer;
        const expectedDims = [trailer.length, trailer.width, trailer.height];
        const expectedPayload = trailer.payload;

        trucksPage.getDimsText(index).then(dimsText => {
          const cleanDimsText = trucksPage.cleanText(dimsText);
          const actualDimsArray = trucksPage.extractDimensions(cleanDimsText);
          expect(actualDimsArray).to.deep.equal(expectedDims);
        });

        
        trucksPage.getPayloadText(index).then(payloadText => {
          const cleanPayloadText = trucksPage.cleanText(payloadText);
          const actualPayload = Number(cleanPayloadText.split(' ')[0]); 
          expect(actualPayload).to.equal(expectedPayload);
        });
      } else {
        cy.log(`Trailer data is null for truck at index ${index}`);
      }
    });
  });
});
