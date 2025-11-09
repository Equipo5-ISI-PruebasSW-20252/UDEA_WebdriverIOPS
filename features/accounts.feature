Feature: Consulta de Estados de Cuenta

  Scenario: Ver todas las cuentas del usuario
    Given I am on the login page
    When I login with "john" and "demo"
    Then I should see all my accounts listed
    And each account should display the current balance

  Scenario: Ver detalles de una cuenta específica
    Given I am on the login page
    When I login with "john" and "demo"
    When I click on an account
    Then I should see the account details
    And I should see recent transactions
