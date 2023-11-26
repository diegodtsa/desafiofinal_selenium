var LoginPage = require('../pages/loginpage')
var HomePage = require('../pages/homepage');
const { Driver } = require('selenium-webdriver/safari');
const assert = require("chai").assert

describe('Login Tests', function () {

    beforeEach(async function () {
        url = 'https://thinking-tester-contact-list.herokuapp.com/';
        await LoginPage.goTo(url);
    });

    after(async function () {
        await LoginPage.closeWindow();
    });

    it('Login Success', async function () {
        await LoginPage.fillCredentials('diego.dtsa@gmail.com', '1234567')
        await LoginPage.clickLogin();
        await driver.sleep(5000)
        assert(HomePage.verifyText, 'Contact List')

    });

    it('Password empty', async function () {
        await LoginPage.fillCredentials('diego.dtsa@gmail.com', '');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Incorrect username or password')
    });

    it('Username empty', async function () {
        await LoginPage.fillCredentials('', '1234567');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Incorrect username or password')
    });

    it('Wrong password', async function () {
        await LoginPage.fillCredentials('diego.dtsa@gmail.com', '123456');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Incorrect username or password')
    });

    it('Wrong username', async function () {
        await LoginPage.fillCredentials('melao', '1234567');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Incorrect username or password')
    });

});