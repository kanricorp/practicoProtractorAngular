var testingPage = function() {
    var EC = require("protractor").ExpectedConditions;

    this.validarPagina = function() {
        browser.wait(EC.elementToBeClickable($('.lightbox')),5000);
        browser.wait(EC.visibilityOf($('#testing')),5000);
        return element(By.id('testing')).getText();
    }

    this.validarURL = function(string) {
        return browser.wait(EC.urlContains(string), 5000);
    }

};
module.exports = new testingPage();
