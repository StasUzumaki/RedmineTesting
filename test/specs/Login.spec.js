const RedmineMainPage =require('../pageobjects/redmineMain.page.')
const assert = require('assert');
const {expect} = require('chai');

before('land to main url', async () => {
    await browser.url('https://www.redmine.org/')
    
  });

describe('redmine registration page', () => {
    xit('should login with valid credentials, create new register and adding an asset group from a template', async () => {
        await browser.url('https://www.redmine.org/') 
    });
});