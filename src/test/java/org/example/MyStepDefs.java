package org.example;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class MyStepDefs {
HomePage homePage = new HomePage();

    @Given("^User is on homepage$")
    public void user_is_on_homepage() {
    homePage.verifyTextofHomepage();
    }

    @When("^User enter valid username$")
    public void user_enter_valid_username() {
         homePage.enterUserName();
    }

    @When("^User enter valid password$")
    public void user_enter_valid_password() {
        homePage.enterPassword();
    }

    @Then("^User click on login button$")
    public void user_click_on_login_button() {
        homePage.clickLogInButton();

    }

    @Then("^User login successfully and user can see welcome page$")
    public void user_login_successfully_and_user_can_see_welcome_page() {
        homePage.verifyTextAtWelcomePage();
    }


    @When("^User enters \"([^\"]*)\" in username inputbox$")
    public void user_enters_in_username_inputbox(String invalid_username)  {
       homePage.invalidUsername(invalid_username);
    }

    @When("^User should able to click on login button$")
    public void user_should_able_to_click_on_login_button()  {
         homePage.clickLogInButton();
    }

    @Then("^User should not able to log in successfully and user should get an error message$")
    public void user_should_not_able_to_log_in_successfully_and_user_should_get_an_error_message()  {
        homePage.getErrorMessage();

    }
}

