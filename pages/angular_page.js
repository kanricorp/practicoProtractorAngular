var angularPage = function() {
    var EC = require("protractor").ExpectedConditions;

    this.escribirBuscador = function() {
        return browser.findElement(by.css("input"));
    };

    this.clickeoSobreLink = function() {
        browser.wait(EC.visibilityOf($('.search-result-item')),5000);
        return browser.findElement(by.partialLinkText('Testing'));
    }
    this.getBtnGo = function() {
        return btnGo = browser.findElement(by.id('gobutton'));
    };

};
module.exports = new angularPage();