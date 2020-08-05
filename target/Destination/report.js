$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Login.Feature");
formatter.feature({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 18278931100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be login  successfully.",
  "description": "User get navigated to welcome page",
  "id": "login-functionality;user-should-be-login--successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@validCredential"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enter valid username",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User login successfully and user can see welcome page",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 1074672000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enter_valid_username()"
});
formatter.result({
  "duration": 396848000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enter_valid_password()"
});
formatter.result({
  "duration": 108568700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_login_button()"
});
formatter.result({
  "duration": 2239015000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_login_successfully_and_user_can_see_welcome_page()"
});
formatter.result({
  "duration": 40138555100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //a[@id\u003d\u0027welcome\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-G5LRRCU\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 78.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200708170202, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 6184, moz:profile: C:\\Users\\user\\AppData\\Local..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a33af116-3734-4976-b7fa-bfe97125959b\n*** Element info: {Using\u003dxpath, value\u003d//a[@id\u003d\u0027welcome\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Util.getTextFromElement(Util.java:29)\r\n\tat org.example.HomePage.verifyTextAtWelcomePage(HomePage.java:37)\r\n\tat org.example.MyStepDefs.user_login_successfully_and_user_can_see_welcome_page(MyStepDefs.java:31)\r\n\tat ✽.And User login successfully and user can see welcome page(src/test/resources/Features/Login.Feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3052016900,
  "status": "passed"
});
});