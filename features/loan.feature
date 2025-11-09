Feature: Solicitud de Préstamos

  Scenario: Solicitud de préstamo aprobada
    Given I am on the login page
    When I login with "john" and "demo"
    And I navigate to "Request Loan"
    When I enter loan amount "1000"
    And I enter down payment "100"
    And I select account for loan deposit
    And I click apply for loan button
    Then I should see "Loan Request Processed"
    And I should see "Approved"

  Scenario: Solicitud de préstamo rechazada
    Given I am on the login page
    When I login with "john" and "demo"
    And I navigate to "Request Loan"
    When I enter loan amount "999999"
    And I enter down payment "100"
    And I select account for loan deposit
    And I click apply for loan button
    Then I should see "Loan Request Processed"
    And I should see loan denial reason
