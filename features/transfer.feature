Feature: Transferencias entre Cuentas

  Scenario: Transferencia exitosa entre cuentas
    Given I am on the login page
    When I login with "john" and "demo"
    And I navigate to "Transfer Funds"
    When I select the source account
    And I select the destination account
    And I enter transfer amount "100"
    And I click transfer button
    Then I should see "Transfer Complete!"
    And the transfer should be reflected in the account

  Scenario: Transferencia fallida por saldo insuficiente
    Given I am on the login page
    When I login with "john" and "demo"
    And I navigate to "Transfer Funds"
    When I select the source account
    And I select the destination account
    And I enter transfer amount "999999"
    And I click transfer button
    Then I should see an insufficient funds error
