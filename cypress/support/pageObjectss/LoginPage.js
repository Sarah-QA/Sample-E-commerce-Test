class LoginPage  

{
goTo(url)
{
    cy.visit(url)
}




    login(username,password)
{
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('select.form-control').select("Teacher")
    cy.get('input[type="checkbox"]').check()

}

}












