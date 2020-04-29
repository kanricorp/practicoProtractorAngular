var testingPage = function() {
    var EC = require("protractor").ExpectedConditions;

    this.validarPagina = function(string) {
        browser.wait(EC.elementToBeClickable($('.lightbox')),5000);
        return browser.wait(EC.visibilityOf($('#testing')),5000);
    }

};
module.exports = new testingPage();