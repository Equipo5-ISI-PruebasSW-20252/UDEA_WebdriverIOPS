Feature: Login

  Scenario: Login exitoso con credenciales válidas
    Given I am on the login page
    When I login with "john" and "demo"
    Then I should see "Accounts Overview"

  Scenario: Login fallido con credenciales inválidas
    Given I am on the login page
    When I login with "invalidUser" and "wrongPass"
    Then I should see an error message

  Scenario: Botón de login deshabilitado con campos vacíos
    Given I am on the login page
    Then the login button should be disabled when fields are empty
