const { Builder } = require("selenium-webdriver");
var driver = new Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({ implicit: (10000) });
class BasePage {

    constructor() {
        global.driver = driver;
    }

    async goTo(url) {
        await driver.get(url);
    }

    async enterText(locator, info) {
        await driver.findElement(locator).sendKeys(info);
    }

    async mouseClick(locator) {
        await driver.findElement(locator).click();
    }

    async getElementText(locator) {
        await driver.findElement(locator).getText()
    }

    async elementIsVisible(locator) {
        return await driver.findElement(locator).isDisplayed()
    }

    async closeWindow() {
        await driver.quit()
    }

}
module.exports = BasePage;