Feature: Pagos a Beneficiarios

  Scenario: Pago exitoso a beneficiario
    Given I am on the login page
    When I login with "john" and "demo"
    And I navigate to "Bill Pay"
    When I enter payee name "Electric Company"
    And I enter payee address "123 Main St"
    And I enter payee city "Springfield"
    And I enter payee state "IL"
    And I enter payee zip code "12345"
    And I enter payee phone "555-1234"
    And I enter account number "54321"
    And I verify account number "54321"
    And I enter payment amount "50"
    And I select the account to pay from
    And I click send payment button
    Then I should see "Bill Payment Complete"

  Scenario: Validación de confirmación antes de enviar pago
    Given I am on the login page
    When I login with "john" and "demo"
    And I navigate to "Bill Pay"
    When I fill in all payment details
    Then I should see all payment details before confirming
