describe('USPS Retail Postage Calculator Test Cases', async() => {
    it('Given Small Box Dimensions (16 x 12 x 12) for a 25lbs, then the price is less than $80', () => {
        cy.visit('https://postcalc.usps.com/');

        cy.get('#Origin').type('78727');
        cy.get('#Destination').type('94107');
        cy.get('#GroundTransportation').click();
        cy.get('#option_4').click();

        cy.get('#Pounds').type(25);
        cy.get('#option_4').click();

        cy.get('#Length').clear().type(16);
        cy.get('#Height').clear().type(12);
        cy.get('#Width').clear().type(12);
        cy.get('.btn').click();

        //expecting USPS Retail Ground Retail Price to be less than $80
        cy.get('tbody > tr > :nth-child(3)').should(($div) => {
            const n = parseFloat(String($div.text()).substring(1));
            expect(n).to.be.lte(80);
        })

        //expecting image on webpage to be visible
        cy.get('.hidden-sm > img').should('be.visible');
    })

    it('Given Medium Box Dimensions (22 x 16 x 15) for a 25lbs, then the price is less than $80', () => {
        cy.visit('https://postcalc.usps.com/');

        cy.get('#Origin').type('78727');
        cy.get('#Destination').type('94107');
        cy.get('#GroundTransportation').click();
        cy.get('#option_4').click();

        cy.get('#Pounds').type(25);
        cy.get('#option_4').click();

        cy.get('#Length').clear().type(22);
        cy.get('#Height').clear().type(16);
        cy.get('#Width').clear().type(15);
        cy.get('.btn').click();

        //expecting USPS Retail Ground Retail Price to be less than $80
        cy.get('tbody > tr > :nth-child(3)').should(($div) => {
            const n = parseFloat(String($div.text()).substring(1));
            expect(n).to.be.lte(80);
        })

        //expecting image on webpage to be visible
        cy.get('.hidden-sm > img').should('be.visible');
    })

    it('Given Large Box Dimensions (28 x 15 x 16) for a 25lbs, then the price is less than $80', () => {
        cy.visit('https://postcalc.usps.com/');

        cy.get('#Origin').type('78727');
        cy.get('#Destination').type('94107');
        cy.get('#GroundTransportation').click();
        cy.get('#option_4').click();

        cy.get('#Pounds').type(25);
        cy.get('#option_4').click();

        cy.get('#Length').clear().type(28);
        cy.get('#Height').clear().type(15);
        cy.get('#Width').clear().type(16);
        cy.get('.btn').click();

        //expecting USPS Retail Ground Retail Price to be less than $80
        cy.get('tbody > tr > :nth-child(3)').should(($div) => {
            const n = parseFloat(String($div.text()).substring(1));
            expect(n).to.be.lte(80);
        })

        //expecting image on webpage to be visible
        cy.get('.hidden-sm > img').should('be.visible');
    })
})