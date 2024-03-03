import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../pageObjects/homepage";
import { LoginPage } from "../pageObjects/loginPage";
import { MyNotesPage } from "../pageObjects/mynotespage";

const homePge = new HomePage
const loginPage = new LoginPage
const mynotesPage = new MyNotesPage

Given(`the application has loaded`, () => {
    cy.visit('')
});

When(`the use click on the login button`, () => {
    //cy.get('[href="/notes/app/login"]').click() 
    // autre methode :
    //cy.get('[data-testid="open-login-view"]').find('[href="/notes/app/login"]').click()
    homePge.ClickButton()
});

Then(`login page should be displayed`, () => {

    //cy.url().should('contain', '/login')
    cy.url().should('contain' , '/login' )
});

When(`the user input a correct email and password`, () => {

    // cy.get('[data-testid="login-email"]').type('selimbensghaier@gmail.com')
    // cy.get('[data-testid="login-password"]').type('practice123')
    cy.fixture('loginCredentials.json').then((data)=>{

        loginPage.InputCredentials(data.email , data.password)
    })
    
});

When(`the user submit the login form`, () => {

    //cy.get('[data-testid="login-submit"]').click()
    loginPage.Login()
});

Then(`the notes page should be displayed`, () => {
    // cy.url().should('eq', 'https://practice.expandtesting.com/notes/app')
    mynotesPage.titleMynotesPage.should('contain.text' , 'MyNotes')
});