'use strict';

module.exports = function (browser)
{
    this.FillInputField = function()
    {
        var mainPageFunctions = browser.page.all_elements.homepage_elements();

        browser
        mainPageFunctions.fillSearchInput();
        mainPageFunctions.sendKeys('@input_field', browser.Keys.ENTER)
        mainPageFunctions.click('@search_result')
        browser.pause(1500);
        return browser;
    }
}