import ProductPage from "./ProductPage"

class HomePage
{

    goToUrl(url)
    {

        cy.visit(url)
    }

    login(username, password)
    {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('select.form-control').select("Teacher")
    cy.get('input[type="checkbox"]').check()
    cy.contains('Sign In').click()
    return new ProductPage()
     
    }
    // login()
    // {
    // cy.get('#username').type(username)
    // cy.get('#password').type(password)
    // cy.get('select.form-control').select("Teacher")
    // cy.get('input[type="checkbox"]').check()
    // }
}
export default HomePage;