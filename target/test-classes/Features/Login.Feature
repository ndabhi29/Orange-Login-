

Feature:Login functionality

  @validCredential
 Scenario: User should be login  successfully.
   User get navigated to welcome page

    Given User is on homepage
    When  User enter valid username
    And   User enter valid password
    Then  User click on login button
    And   User login successfully and user can see welcome page

     @invalidCredential
    Scenario Outline: User should not able to login successfully.
     User get an error message.

      Given User is on homepage
      When User enters "<invalid_username>" in username inputbox
      And  User enters "<invalid_password>" in username inputbox
      And  User should able to click on login button
     Then User should not able to log in successfully and user should get an error message
      Examples:
        | invalid_username | invalid_password |
        | admin            |                  |
        |                  | admin123         |
        | admin@123        | password         |
        | 123              | admin123         |
        | ADMIN            | admin123         |
        | @admin           | ADMIN123         |
























