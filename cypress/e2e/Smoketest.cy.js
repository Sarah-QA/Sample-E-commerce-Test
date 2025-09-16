///<reference types = "cypress" />

describe('Rahul Shetty User flow', function() {

    before(function(){
        //runs once before all tests in this block
        cy.fixture('example').then(function(data)
        {
            this.data = data;
        })
        



    })
    it('Login to Checkout', function() {

        
        const productName = "Nokia Edge"
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        cy.get('#username').type("rahulshettyacademy")
        cy.get('#password').type("learning")
        cy.get('select.form-control').select("Teacher")
        cy.get('input[type="checkbox"]').check()
        //cy.get('#signInBtn').click
        cy.contains('Sign In').click()
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length', 4)

        cy.get('app-card').filter(`:contains("${productName}")`)
        .then($element=> 
            {
                cy.wrap($element).should('have.length',1)
                cy.wrap($element).contains('button','Add').click()


        })
        //Another way to Add a specific item to cart
        cy.get('app-card').eq(3).contains('button','Add').click()
        //cy.get('a.nav-link.btn.btn-primary').click()
        cy.contains('a','Checkout').click()
        let sum = 0

// Test case - The total amount of items in cart does not exceed 200,000
        cy.get('tr td:nth-child(4) strong')
        .each($e1=>{

            const amount = Number($e1.text().split(" ")[1].trim())
            sum = sum + amount
            
        })
        .then(() =>
        {
            expect(sum).to.be.lessThan(200000)

        })
        cy.contains('button', "Checkout").click()
        //cy.get('.validate').type("In")

        cy.get('#country').type('Russia')
        cy.wait(6000)
        cy.get(".suggestions ul li a").click() //Watch how it loads and selects Russia

        // Allow cypress hanle it
        /*cy.get('#country').each(($e1, index, $list) => {
            if($e1.text()==="India")
              {
                cy.wrap($e1).click()
              }
              
          });*/
          //cy.get('input#checkbox2').check().should('be.checked')
          //cy.contains('button', 'Purchase').click()
          cy.get('.btn-success').click()
          cy.get('.alert-success').should('be.visible').and('contain', 'Success! Thank you')















    })

})