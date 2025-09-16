

class ConfirmationPage
{
submitForm(){
   // cy.submitFormDetails()

    cy.get('#country').type('Russia')
    cy.wait(6000)
    cy.get(".suggestions ul li a").click()
    cy.get('.btn-success').click()

}
getAlertMessage() 
{
return cy.get(".alert-success")

}


}




export default ConfirmationPage

// cy.get('#country').type('Russia')
    // cy.get(".suggestions ul li a").click()
    // cy.get('.btn-success').click()
