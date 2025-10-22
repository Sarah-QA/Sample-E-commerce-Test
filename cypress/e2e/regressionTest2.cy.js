///<reference types = "cypress" />

describe('Regression Test', () => {

    it('Test case 1 - Successful Login to Checkout', () => {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        cy.get('#username').type('rahulshettyacademy')
        cy.get('#password').type('learning')
        //cy.get("input[value='User']").check()
        cy.get("select.form-control").select('Teacher')
        cy.get("input[name='terms']").check()
        cy.get("input[value='Sign In']").click()
        cy.contains("Shop Name").should('be.visible')
        cy.get('app-card').should('have.length', 4)
        cy.get('app-card').filter(`:contains("Nokia Edge")`)
        //cy.get('app-card:nth-of-type(4)')
            .then($element=>
            {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('button', 'Add').click()

            })
        cy.contains('a','Checkout').click()
        cy.contains('button', 'Checkout').click()





    })
})