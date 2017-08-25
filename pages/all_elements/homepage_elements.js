'use strict';

// noinspection JSAnnotator
module.exports =
{
    elements:
        {
            body:
            {
                selector: 'body',
                locateStrategy: 'css'
            },
            input_field:
            {
                selector: 'input[name="q"]',
                locateStrategy: 'css'
            },
            submit:
            {
                selector: 'input[name="btnK"]',
                locateStrategy: 'css'
            },
            search_result:
            {
                selector: '(//a[contains(text(), "Rembrandt - Wikipedia")])[2]',
                locateStrategy: 'xpath'
            }
        },
    commands:
    [{
        fillSearchInput()
        {
            this
                .waitForElementVisible('@body')
                .assert.title('Google')
                .assert.visible('@input_field')
                .setValue('@input_field', 'rembrandt van rijn')
        },

        verifyResults()
        {
            this
                .click('@search_result')
        }
    }]
}