package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;
public class HomePage extends Util {
    LoadProp loadProp = new LoadProp();


    private By _EnterUsername = By.xpath("//input[@id=\"txtUsername\"]");
    private By _EnterPassword = By.xpath("//input[@id=\"txtPassword\"]");
    private By _LoginButton = By.xpath("//input[@id=\"btnLogin\"]");
    private By _ErrorMessage = By.id("spanMessage");

    public void verifyTextofHomepage() {

        String expectedTitle ="Username";
        String actualText1 = getTextFromElement(By.xpath("//span[text()='Username']"));
        Assert.assertEquals(actualText1, expectedTitle);

    }

    public void enterUserName() {
        TypeText(_EnterUsername, loadProp.getProperty("Username"), 30);

    }

    public void enterPassword() {
        TypeText(_EnterPassword, loadProp.getProperty("Password"), 30);
    }
    public void clickLogInButton(){
        ClickOnElement(_LoginButton,50);
    }

    public void verifyTextAtWelcomePage() { //Method to Assert homepage text

        String expectedTitle = "Welcome Admin";
        String actualText1 = getTextFromElement(By.xpath("//a[@id='welcome']"));
        Assert.assertEquals(actualText1,expectedTitle);
    }

    public void invalidUsername(String invalid_username) {
        TypeText(_EnterUsername, invalid_username, 30);

    }
public void invalidPassword(String invalid_password){
        TypeText(_EnterPassword,invalid_password,30);
}

    public void getErrorMessage(){
        getTextFromElement(_ErrorMessage);
        System.out.println(_ErrorMessage);

    }
}
