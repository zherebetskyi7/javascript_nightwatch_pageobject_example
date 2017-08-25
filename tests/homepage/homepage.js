//var mainFunctions = require('..commands/mainFunctions.js');

module.exports =
{
  'Demo test Google' : function (browser)
  {
      var homepage = browser.page.functions.mainFunctions();
      var url = browser.page.functions.mainUrls();

      url.navigateToGoogle();
      homepage.FillInputField();
      browser.end();
  }

}