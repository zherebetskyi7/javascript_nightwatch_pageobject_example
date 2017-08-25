'use strict';

module.exports = function (browser)
{
    this.navigateToGoogle = function ()
    {
        browser
            .windowMaximize()
            .url('http://www.google.com')
            .waitForElementVisible('body')
            return browser;
    }
}