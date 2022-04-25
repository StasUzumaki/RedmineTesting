const Page = require('./Page')

const registerBtn = '[href="/account/register"]'
const userName = '#user_login'
const userPassword = '#user_password'
const userPasswordConfirm = '#user_password_confirmation'
const userFirstName = '#user_firstname'
const userLastName = '#user_lastname'
const userEmail = '#user_mail'
const userIrcNick = '#user_custom_field_values_3'
const submitBtn = '[type="submit"]'
const languageDropDown = '#user_language'
const englishLanguage = '[value="en"]'
const russianLanguage = '//*[contains(text(), "Русский")]'


class RedmineMainPage {

    async clickCreateRegisterBtn(){
        return await Page.click(registerBtn)
    }

    async setUserNameValue(userNameInput){
        return await Page.setValue(userName, userNameInput)
    }

    async setUserPasswordValue(userPasswordInput){
        return await Page.setValue(userPassword, userPasswordInput)
    }

    async setUserPasswordConfirmValue(userPasswordConfirmInput){
        return await Page.setValue(userPasswordConfirm, userPasswordConfirmInput)
    }

    async setUserFirstNameValue(userFirstNameInput){
        return await Page.setValue(userFirstName, userFirstNameInput)
    }

    async setUserLastNameValue(userLastNameInput){
        return await Page.setValue(userLastName, userLastNameInput)
    }

    async setEmailValue(emailInput){
        return await Page.setValue(userEmail, emailInput)
    }

    async setIrcNickValue(ircNickInput){
        return await Page.setValue(userIrcNick, ircNickInput)
    }

    async createClickSubmitBtn(){
        return await Page.click(submitBtn)
    }

    async getSuccessRegistrationNoticeText(successesRegistration){
        return await Page.getElementText(successesRegistration)
    }

    async isErrorExplanationDisplayed(errorExplanationElement){
        return await Page.isElementDisplayed(errorExplanationElement)
    }

    async getEmailInvalidErrorText(emailInvalidError){
        return Page.getElementText(emailInvalidError)
    }

    async getLoginInvalidErrorText(emailInvalidError){
        return Page.getElementText(emailInvalidError)
    }

    async selectRussianLanguageValue(){
        return Page.clickDropdownItemByIndex(languageDropDown, 37)
    }

    async selectEnglishLanguageValue(){
        return Page.clickDropdownItemByIndex(languageDropDown, 11)
    }

}

module.exports = new RedmineMainPage();
