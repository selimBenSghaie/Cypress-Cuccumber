
export class MyNotesPage {

    // localisation

    get titleMynotesPage() { return cy.get('[data-testid="home"]') }
    get addNoteBtn() { return cy.get('[data-testid="add-new-note"]') }
    get addNoteTitle() { return cy.get('.modal-title') }
    get categoryDropDown() { return cy.get('[data-testid="note-category"]') }
    get completedNote() { return cy.get('#completed') }
    get noteTitleField() { return cy.get('#title') }
    get descriptionField() { return cy.get('[data-testid="note-description"]') }
    get submitNoteButton() { return cy.get('[data-testid="note-submit"]') }
    get categoryHome() { return cy.get('[data-testid="category-home"]') }
    get categoryWork() { return cy.get('[data-testid="category-work"]') }
    get categoryPersonal() { return cy.get('[data-testid="category-personal"]') }
    get noteTitleCard() { return cy.get('[data-testid="note-card-title"]') }
    get noteCardChecked() {return cy.get('[data-testid="toggle-note-switch"]')}
    

    // méthode 

    clickAddNote() {
        this.addNoteBtn.click({ force: true })
    }

    selectCategoryDropDown(option) {

        this.categoryDropDown.select(option)
    }

    checkBtnCompletedNote() {
        this.completedNote.check()
    }

    inputNoteTitle(arg) {
        this.noteTitleField.type(arg)
    }

    inputNoteDescription(arg0) {
        this.descriptionField.type(arg0)
    }

    clickCreateNote() {

        this.submitNoteButton.click({ force: true })
    }

    clickTabCategory(categoryName) {

        cy.get('button').contains(categoryName).click({force:true})
    }

   // clickHomeCategory() {
       // this.categoryHome.click({ force: true })
   // }

   // clickWorkCategory() {
   //     this.categoryWork.click({ force: true })
   // }

    //clickPersonalCategory() {
      //  this.categoryPersonal.click({ force: true })
    //}

    
    
}