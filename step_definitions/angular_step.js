 //cucumber keywords
 const {Given, When, Then} = require("cucumber");

 //protractor object ExpectedConditions
 var EC = require("protractor").ExpectedConditions;

 //chai library for assertions
 var chai = require('chai');
 var chaiAsPromised = require('chai-as-promised');
 chai.use(chaiAsPromised);
 var expect = chai.expect;
 
 var angularPage = require('../pages/angular_page');
 
 var testingPage = require('../pages/testing_page');

Given('Voy a la pagina principal de Angular', function () {
    browser.get("https://angular.io/");
    return browser.wait(EC.elementToBeClickable($('.search-container')),5000);
  });

Given('ingreso en el buscador {string}', function (string) {
 return angularPage.escribirBuscador().sendKeys(string)
});

When('clickeo sobre el texto {string} del menu', function (string) {
  return angularPage.clickeoSobreLink().click()
});

Then('veo la pagina con titulo {string}', function (string) {
  testingPage.validarPagina(string)
});


Then('la url contiene la palabra {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});