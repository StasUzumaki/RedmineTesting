const RedmineMainPage =require('../pageobjects/redmineMain.page.')
const assert = require('assert');
const {expect} = require('chai');

const errorExplanation = '#errorExplanation'
const emailValue = 'ikdsflw437856@ovout.com'
const successesRegistrationNoticeText = '//*[contains(text(), "Account was successfully created.")]'
const emailInvalidError = '//*[contains(text(), "Email is invalid")]'
const loginInvalidError = '//*[contains(text(), "Login is invalid")]'
const passwordInvalidError = '//*[contains(text(), "Password is invalid")]'
const passwordShortError = '//*[contains(text(), "Password is too short")]'
const confirmPasswordError = `//*[contains(text(), "Password doesn't match confirmation")]`
const existingLoginError = '//*[contains(text(), "Login has already been taken")]'
const existingEmailError = '//*[contains(text(), "Email has already been taken")]'

describe('redmine registration page', () => {
    xit('should register with valid credentials', async () => {
        await browser.url('https://www.redmine.org/')
        await RedmineMainPage.clickCreateRegisterBtn()
        await RedmineMainPage.setUserNameValue('i223ioz11st225745')
        await RedmineMainPage.setUserPasswordValue('testredmine123')
        await RedmineMainPage.setUserPasswordConfirmValue('testredmine123')
        await RedmineMainPage.setUserFirstNameValue('Stanis')
        await RedmineMainPage.setUserLastNameValue('Lavykw')
        await RedmineMainPage.setEmailValue(emailValue)
        await RedmineMainPage.setIrcNickValue('testtest1234')
        await RedmineMainPage.createClickSubmitBtn()
        await assert.strictEqual(await RedmineMainPage.getSuccessRegistrationNoticeText(successesRegistrationNoticeText),`Account was successfully created. An email containing the instructions to activate your account was sent to ${emailValue}.`)
    });
    it('register with invalid email value', async () => {
        await browser.url('https://www.redmine.org/')
        await RedmineMainPage.clickCreateRegisterBtn()
        await RedmineMainPage.setUserNameValue('stas84712491')
        await RedmineMainPage.setUserPasswordValue('testredmine123')
        await RedmineMainPage.setUserPasswordConfirmValue('testredmine123')
        await RedmineMainPage.setUserFirstNameValue('Stas')
        await RedmineMainPage.setUserLastNameValue('Lavr')
        await RedmineMainPage.setEmailValue('1234pantabi.com')
        await RedmineMainPage.selectEnglishLanguageValue()
        await RedmineMainPage.setIrcNickValue('testredmine364')
        await RedmineMainPage.createClickSubmitBtn()
        await expect(await RedmineMainPage.isErrorExplanationDisplayed(errorExplanation)).true;
        await expect(await RedmineMainPage.getEmailInvalidErrorText(emailInvalidError)).contain('Email is invalid');
    });
    it('register with invalid login value', async () => {
        await browser.url('https://www.redmine.org/')
        await RedmineMainPage.clickCreateRegisterBtn()
        await RedmineMainPage.setUserNameValue('xx;.//..)')
        await RedmineMainPage.setUserPasswordValue('testredmine123')
        await RedmineMainPage.setUserPasswordConfirmValue('testredmine123')
        await RedmineMainPage.setUserFirstNameValue('Stas')
        await RedmineMainPage.setUserLastNameValue('Lavr')
        await RedmineMainPage.setEmailValue('1234@pantabi.com')
        await RedmineMainPage.selectEnglishLanguageValue()
        await RedmineMainPage.setIrcNickValue('testredmine364')
        await RedmineMainPage.createClickSubmitBtn()
        await expect(await RedmineMainPage.isErrorExplanationDisplayed(errorExplanation)).true;
        await expect(await RedmineMainPage.getLoginInvalidErrorText(loginInvalidError)).contain('Login is invalid');
    });
    xit('register with invalid password value', async () => {
        await browser.url('https://www.redmine.org/')
        await RedmineMainPage.clickCreateRegisterBtn()
        await RedmineMainPage.setUserNameValue('staest228234241')
        await RedmineMainPage.setUserPasswordValue('123;.)')
        await RedmineMainPage.setUserPasswordConfirmValue('123;.)')
        await RedmineMainPage.setUserFirstNameValue('Stas')
        await RedmineMainPage.setUserLastNameValue('Lavr')
        await RedmineMainPage.setEmailValue('1234214@pantabi.com')
        await RedmineMainPage.selectEnglishLanguageValue()
        await RedmineMainPage.setIrcNickValue('testredmine364')
        await RedmineMainPage.createClickSubmitBtn()
        await expect(await RedmineMainPage.isErrorExplanationDisplayed(errorExplanation)).true;
        await expect(await RedmineMainPage.getLoginInvalidErrorText(passwordInvalidError)).contain('Password is invalid');
    });
    it('register with short password value (less 4 characters)', async () => {
        await browser.url('https://www.redmine.org/')
        await RedmineMainPage.clickCreateRegisterBtn()
        await RedmineMainPage.setUserNameValue('s032409241')
        await RedmineMainPage.setUserPasswordValue('12')
        await RedmineMainPage.setUserPasswordConfirmValue('12')
        await RedmineMainPage.setUserFirstNameValue('Stas')
        await RedmineMainPage.setUserLastNameValue('Lavr')
        await RedmineMainPage.setEmailValue('1234214@pantabi.com')
        await RedmineMainPage.selectEnglishLanguageValue()
        await RedmineMainPage.setIrcNickValue('testredmine364')
        await RedmineMainPage.createClickSubmitBtn()
        await expect(await RedmineMainPage.isErrorExplanationDisplayed(errorExplanation)).true;
        await expect(await RedmineMainPage.getLoginInvalidErrorText(passwordShortError)).contain('Password is too short (minimum is 4 characters)');
    });
    it('register with invalid confirm password value', async () => {
        await browser.url('https://www.redmine.org/')
        await RedmineMainPage.clickCreateRegisterBtn()
        await RedmineMainPage.setUserNameValue('stae28234241ss')
        await RedmineMainPage.setUserPasswordValue('123456')
        await RedmineMainPage.setUserPasswordConfirmValue('654321')
        await RedmineMainPage.setUserFirstNameValue('Stas')
        await RedmineMainPage.setUserLastNameValue('Lavr')
        await RedmineMainPage.setEmailValue('123421400stas@pantabi.com')
        await RedmineMainPage.selectEnglishLanguageValue()
        await RedmineMainPage.setIrcNickValue('testredmine364')
        await RedmineMainPage.createClickSubmitBtn()
        await expect(await RedmineMainPage.isErrorExplanationDisplayed(errorExplanation)).true;
        await expect(await RedmineMainPage.getLoginInvalidErrorText(confirmPasswordError)).contain(`Password doesn't match confirmation`);
    });
    it('register with existing login value', async () => {
        await browser.url('https://www.redmine.org/')
        await RedmineMainPage.clickCreateRegisterBtn()
        await RedmineMainPage.setUserNameValue('stas')
        await RedmineMainPage.setUserPasswordValue('123456')
        await RedmineMainPage.setUserPasswordConfirmValue('654321')
        await RedmineMainPage.setUserFirstNameValue('Stas')
        await RedmineMainPage.setUserLastNameValue('Lavr')
        await RedmineMainPage.setEmailValue('123421400stas@pantabi.com')
        await RedmineMainPage.selectEnglishLanguageValue()
        await RedmineMainPage.setIrcNickValue('testredmine364')
        await RedmineMainPage.createClickSubmitBtn()
        await expect(await RedmineMainPage.isErrorExplanationDisplayed(errorExplanation)).true;
        await expect(await RedmineMainPage.getLoginInvalidErrorText(existingLoginError)).contain('Login has already been taken');
    });
    it('register with existing email value', async () => {
        await browser.url('https://www.redmine.org/')
        await RedmineMainPage.clickCreateRegisterBtn()
        await RedmineMainPage.setUserNameValue('sta213141s')
        await RedmineMainPage.setUserPasswordValue('123456')
        await RedmineMainPage.setUserPasswordConfirmValue('654321')
        await RedmineMainPage.setUserFirstNameValue('Stas')
        await RedmineMainPage.setUserLastNameValue('Lavr')
        await RedmineMainPage.setEmailValue('test@gmail.com')
        await RedmineMainPage.selectEnglishLanguageValue()
        await RedmineMainPage.setIrcNickValue('testredmine364')
        await RedmineMainPage.createClickSubmitBtn()
        await expect(await RedmineMainPage.isErrorExplanationDisplayed(errorExplanation)).true;
        await expect(await RedmineMainPage.getLoginInvalidErrorText(existingEmailError)).contain('Email has already been taken');
    });
});


