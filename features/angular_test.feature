  Feature: Buscar en Angular

  Scenario: Buscar 'testing' en la pagina de angular
    Given Voy a la pagina principal de Angular
    And ingreso en el buscador "testing"
    When clickeo sobre el texto 'testing' del menu
    Then veo la pagina con titulo "Testing"
    And la url contiene la palabra "testing"
