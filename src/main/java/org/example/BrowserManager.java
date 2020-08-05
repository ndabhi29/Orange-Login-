 package org.example;

 import org.openqa.selenium.chrome.ChromeDriver;
 import org.openqa.selenium.chrome.ChromeOptions;
 import org.openqa.selenium.firefox.FirefoxDriver;

 import java.util.concurrent.TimeUnit;

 public class BrowserManager extends Util {
    LoadProp loadProp = new LoadProp();

    public void setBrowserName() {

        String browserName = loadProp.getProperty("browserName");



        if (browserName.equalsIgnoreCase("firefox")) {
            //create firefox instance
            System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\BrowserDriver\\geckodriver.exe");
            driver = new FirefoxDriver();
        } else if (browserName.equalsIgnoreCase("chrome")) {
            //set path to chromedriver.exe

            System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\BrowserDriver\\chromedriver.exe");
            ChromeOptions options = new ChromeOptions();
            options.setExperimentalOption("useAutomationExtension", false);
            options.setExperimentalOption("excludeSwitches", new String[]{"enable-automation"});

            //creating chrome driver object to open chrome browser
            driver = new ChromeDriver(options);
        } else {
            //If no browser passed throw exception
            System.out.println("Browser is not correct");
        }
        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
        driver.get("https://opensource-demo.orangehrmlive.com/index.php/dashboard");

        //maximise screen
        driver.manage().window().maximize();

    }

    public void CloseBrowser () {
        driver.close();

    }
}









