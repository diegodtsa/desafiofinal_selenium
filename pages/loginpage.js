var BasePage = require('./basepage')
const { By } = require('selenium-webdriver')

/*class Signup extends BasePage{
    signupbutton = By.id('signup')
}

class SignupAddUser extends BasePage{
    fieldfirstname = By.id('firstName')
    fieldlastname = By.id('lastName')
    fieldemail = By.id('email')
    fieldpassword = By.id('password')
    submitbutton = By.id('submit')
}
*/
class LoginPage extends BasePage {
        fieldemail = By.id('email')
        fieldpassword = By.id('password')
        submitbutton = By.id('submit')
        loginsucesso = By.id('logout')

    async fillCredentials(email, password) {
        await this.enterText(this.fieldemail, email)
        await this.enterText(this.fieldpassword, password)
    }

    async clickLogin() {
        await this.mouseClick(this.submitbutton)
    }

    async verifyErrorMessage() {
        let errorMessage;
        errorMessage = await this.getElementText(errorElement);
        return errorMessage;
    }
}
module.exports = new LoginPage();