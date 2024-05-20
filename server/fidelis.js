const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        // Replace these with your actual login details
        const username = "student";
        const password = "Password123";

        // Replace this with the URL of the login page
        const loginUrl =
            "https://practicetestautomation.com/practice-test-login/";

        // Navigate to the login page
        await driver.get(loginUrl);

        // Find the username and password input fields
        const usernameField = await driver.wait(
            until.elementLocated(By.id("loginControl_Username")),
            10000
        );
        const passwordField = await driver.wait(
            until.elementLocated(By.id("loginControl_Password")),
            10000
        );

        // Enter login credentials using JavaScript
        await driver.executeScript(
            `arguments[0].value = '${username}'`,
            usernameField
        );
        await driver.executeScript(
            `arguments[0].value = '${password}'`,
            passwordField
        );

        // Find the login button and click it using JavaScript
        const loginButton = await driver.wait(
            until.elementLocated(By.id("loginControl_LoginButton")),
            10000
        );
        await driver.executeScript("arguments[0].click();", loginButton);

        const authCookie = await driver.manage().getCookies();

        if (authCookie) {
            console.log("cookies: ", authCookie);
        }

        // Add any further actions after login here
    } finally {
        // Wait a bit to observe the result in case of successful login
        await driver.sleep(2000);
        await driver.quit();
    }
})();
