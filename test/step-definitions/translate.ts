import { Given, When, Then } from '@wdio/cucumber-framework';
import TranslatePage from '../pageobjects/translate.page.ts';

Given(/^I am on the Google translate page$/, async () => {
    await TranslatePage.openUrl('https://translate.google.com')
});

Then(/^I get (.*) in translation field$/, async (text) => {
    await expect(TranslatePage.translationField).toHaveText(text);
});

When(/^I enter (.*) in input field$/, async(text) => {
    await TranslatePage.inputField.setValue(text)
});

When(/^I click translate to drop down$/, async() => {
    await TranslatePage.translateToDropDown.click();
});

When(/^I select (\w+) language$/, async (language) => {  
    // await TranslatePage.languagesFilter.setValue(language);
    await TranslatePage.selectLanguage(language);
});