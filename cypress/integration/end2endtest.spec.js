context('Visit', () => {
    it('Visit site', () => {
        cy.visit('http://localhost:4200/');
        cy.wait(2000);
    });
})

context('GetSkills', () => {
    it('Gets skill from user', () => {
        cy.get('input[name="username"]').type("Soepski");
        cy.contains('Search player').click();
        cy.wait(2000);
    });
})

context('CreateItem', () => {
    it('Creates an item', () => {
        cy.visit('http://localhost:4200/groceries');
        cy.wait(5000)
        cy.get('input[name="itemname"]').type("Inquisitor's great helm");
        cy.get('input[name="itemrsid"]').type("24419");       
        cy.contains('+').click();
    })
})

context('EditItem', () => {
    it('Edits an item', () => {
        cy.visit('http://localhost:4200/groceries');
        cy.wait(5000);
        cy.get('div').contains("Inquisitor's great helm" ).contains('Edit').click();
        cy.get('input[name="name"]').type("Helmpie");
        cy.get('input[name="rsid"]').type("24419");   
        cy.get('.modal-footer > .btn').click()
    })
})

context('DeleteItem', () => {
    it('Deletes an item', () => {
        cy.visit('http://localhost:4200/groceries');
        cy.wait(5000)
        cy.get('div').contains("Helmpie" ).contains('Delete').click();
    })
})

context('AddItemsToList', () => {
    it('Adds items to grocery list', () => {
        cy.visit('http://localhost:4200/groceries');
        cy.wait(5000);
        cy.get('div').contains("Bandos tassets" ).contains('Add to cart').click();
        cy.get('div').contains("Bandos chestplate" ).contains('Add to cart').click();
        cy.get('div').contains("Ghrazi rapier" ).contains('Add to cart').click();
        cy.wait(1000);
        cy.contains('Save list').click();
        cy.wait(1000);
    })
})

context('CheckIfItemsAddedToList', () => {
    it('Adds items to grocery list', () => {
        cy.visit('http://localhost:4200/groceries');
        cy.wait(5000);
        cy.get('.groceries > :nth-child(5)').click();
        cy.wait(3000);
    })
})

context('DeleteItemFromGrocerylist', () => {
    it('Adds items to grocery list', () => {
        cy.get(':nth-child(3) > .row > [style="text-align: right; padding-right: 100px;"] > .btn').click();
        cy.wait(3000);
        cy.contains('Save list').click();
    })
})

