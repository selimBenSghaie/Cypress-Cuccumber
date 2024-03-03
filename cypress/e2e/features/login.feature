Feature: User Authentification

    login with different credentials

    Scenario: login with valid crendentials

    Given the application has loaded
    When the use click on the login button
    Then login page should be displayed
    When the user input a correct email and password
    And the user submit the login form
    Then the notes page should be displayed