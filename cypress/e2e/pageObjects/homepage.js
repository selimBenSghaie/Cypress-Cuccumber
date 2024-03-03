
export class HomePage {

    // localisation 
    get loginButton() { return cy.get('[href="/notes/app/login"]') }

    // méthodes
    ClickButton() {

        this.loginButton.click({ force: true })
    }
}