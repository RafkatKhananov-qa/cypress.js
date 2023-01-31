//describe('Тестируем Facebook', function() {

    it('By ID', () => {
    cy.visit('www.facebook.com/');
    cy.get('#email');

    });

    it('By Class', () => {
        cy.visit('www.facebook.com/');
        cy.get('._6lux');
    
        });
    
   it('By Tag', () => {
        cy.visit('www.facebook.com/');
        cy.get('span');
        
        });

    it('By Tag value', () => {
        cy.visit('www.facebook.com/');
        cy.get('[name="pass"]');
            
        });
    
    it('By Different Tag', () => {
        cy.visit('www.facebook.com/');
        cy.get("[data-testid='open-registration-form-button'][role='button']");
                
        });

   
    