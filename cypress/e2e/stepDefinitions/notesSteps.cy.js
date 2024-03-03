
import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps';
import { HomePage } from '../pageObjects/homepage';
import { LoginPage } from '../pageObjects/loginPage';
import { MyNotesPage } from '../pageObjects/mynotespage';
import faker from 'faker';
import { ApiNotes, titleNoteApi } from '../APIs/ApisNotes';

const homePage = new HomePage
const loginPage = new LoginPage
const mynotesPage = new MyNotesPage
const apiNotes = new ApiNotes
var titleNote


Given(`the user is logged into the application`, () => {
    // [Given] Sets up the initial state of the system.
    cy.visit('/app')
    homePage.ClickButton()
    cy.fixture('loginCredentials.json').then((data) => {
        loginPage.InputCredentials(data.email, data.password)
    })
    loginPage.Login()

});

When(`the user clicks on the Add Note button`, () => {
    // [When] Describes the action or event that triggers the scenario.
    mynotesPage.clickAddNote()
});

Then(`the {string} pop-up should be displayed`, (arg) => {
    // [Then] Describes the expected outcome or result of the scenario.
    mynotesPage.addNoteTitle.should('contain', arg)
});

When(`the user selects {string} from the category drop-down`, (cat) => {
    //[When] Describes the action or event that triggers the scenario.
    mynotesPage.selectCategoryDropDown(cat)
});

When(`the user marks the note as completed`, () => {
    // [When] Describes the action or event that triggers the scenario.
    mynotesPage.checkBtnCompletedNote()
});

When(`the user enters the note title`, () => {
    // [When] Describes the action or event that triggers the scenario.
    titleNote = 'note ' + faker.lorem.word()
    mynotesPage.inputNoteTitle(titleNote)
});

When(`the user enters the description`, () => {
    // [When] Describes the action or event that triggers the scenario.
    let descNote = 'description ' + faker.lorem.paragraph()
    mynotesPage.inputNoteDescription(descNote)
});

When(`the user clicks on the Create button`, () => {
    // [When] Describes the action or event that triggers the scenario.
    mynotesPage.clickCreateNote()
});


Then(`the note should be created in the {string} category and marked as completed`, (arg0) => {
    // [Then] Describes the expected outcome or result of the scenario.
    mynotesPage.clickTabCategory(arg0)
    mynotesPage.noteTitleCard.should('contain.text', titleNote)
    mynotesPage.noteCardChecked.should('be.checked')

})





Given(`there is a note created`, () => {
    // [Given] Sets up the initial state of the system.
    let token


    cy.window().its('localStorage.token').then((tkn) => {
        cy.log(tkn)
        token = tkn
    }).then(() => {
        apiNotes.addNoteApi(token)

    })
});

When(`the user clicks on the {string} button for the note they want to delete`, (arg) => {
    // [When] Describes the action or event that triggers the scenario.

    cy.reload()
    cy.get('[data-testid="note-card-title"]').contains(titleNoteApi)
        .parents('.card').find('[data-testid="note-delete"]').click({ force: true })
});

Then(`a confirmation pop-up should be displayed`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

When(`the user confirms the deletion`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`the note should be deleted from all categories`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});