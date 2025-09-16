class CartPage {
    
proceedToCheckout() {
        // Add this method to navigate from cart to confirmation page
        cy.contains('button', 'Checkout').click()
        cy.url().should('include', '/shop')
        cy.get('#country').should('be.visible')
    }



    
}

export default CartPage;