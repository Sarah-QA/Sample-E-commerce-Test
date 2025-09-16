

Cypress.Commands.add('submitFormDetails', ()=> 
    {
        cy.get('#country').type('Russia')
        cy.get(".suggestions ul li a").click()
        cy.get('.btn-success').click()

    })








    // ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })