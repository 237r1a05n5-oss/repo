const { Builder, By, Key, until } = require('selenium-webdriver');

async function testGoogleSearch() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.google.com');

        let searchBox = await driver.wait(
            until.elementLocated(By.name('q')),
            5000
        );

        await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);

        await driver.wait(until.titleContains('Selenium WebDriver'), 8000);

        let title = await driver.getTitle();
        console.log("Page Title:", title);

        if (title.includes("Selenium WebDriver")) {
            console.log("Test Passed ✔");
        } else {
            console.log("Test Failed ❌");
        }

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await driver.quit();
    }
}

testGoogleSearch();
