
import ConfirmationPage from "../support/pageObjectss/ConfirmationPage";
import HomePage from "../support/pageObjectss/HomePage"



describe('e-Commerce end-to-end User flow', function() {

    before(function(){
        //runs once before all tests in this block
        cy.fixture('example').then(function(data)
        {
            this.data = data;
            this.homepage = new HomePage()
        })
        



    })
    it('Login to Checkout', function() {
        const productName = this.data.productName
       cy.log('1. Logging in...')
        this.homepage.goToUrl('https://rahulshettyacademy.com/loginpagePractise/')
        const productPage = this.homepage.login(this.data.username, this.data.password)

        cy.log('2. Adding products...')
        productPage.pageValidation()
        productPage.verifyCardLimit()
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
         cy.log('3. Go to cart...')
        // Create an instance of CartPage
        const cartPage  = productPage.goToCart()

        cy.log('4. Proceeding to checkout...')
        cartPage.proceedToCheckout()

        

        cy.log('5. Proceeding to confirmation page...')
        // Create an instance of ConfirmationPage
        const confirmationPage = new ConfirmationPage()
    
        confirmationPage.submitForm() 


     


     //LoginPage.goTo('https://rahulshettyacademy.com/loginpagePractise/')
     //LoginPage.login(this.data.username, this.data.password)

        
        // cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        // cy.get('#username').type(this.data.username)
        // cy.get('#password').type(this.data.password)
        // cy.get('select.form-control').select("Teacher")
        // cy.get('input[type="checkbox"]').check()
        // //cy.get('#signInBtn').click
        // 
    })

})