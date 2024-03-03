
/// <reference types = 'cypress'/>


export class LoginPage {

    //localisation

    
    get Email() { return cy.get('[data-testid="login-email"]') }
    get Password() { return cy.get('[data-testid="login-password"]') }
    get AccessButton() { return cy.get('[data-testid="login-submit"]') }


    // méthode 

   

    InputCredentials(email,pwd) {
        this.Email.type(email)
        this.Password.type(pwd)
    }


    Login() {
        this.AccessButton.click({ force: true })
    }


}
