
Feature: Note Management

    Background: Nominal Loggin
        Given the user is logged into the application

    Scenario Outline: Add a note in a specific category

        When the user clicks on the Add Note button
        Then the 'Add new note' pop-up should be displayed
        When the user selects '<category>' from the category drop-down
        And the user marks the note as completed
        And the user enters the note title
        And the user enters the description
        And the user clicks on the Create button
        Then the note should be created in the '<category>' category and marked as completed

        Examples:
            | category |
            | Home     |
            | Work     |
            | Personal |



    Scenario: Delete a note

        Given there is a note created
        When the user clicks on the 'Delete' button for the note they want to delete
        Then a confirmation pop-up should be displayed
        When the user confirms the deletion
        Then the note should be deleted from all categories


