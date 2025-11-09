import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from '../pageobjects/login.page.js';
import AccountsPage from '../pageobjects/accounts.page.js';
import TransferPage from '../pageobjects/transfer.page.js';
import BillPayPage from '../pageobjects/billpay.page.js';
import LoanPage from '../pageobjects/loan.page.js';

const pages = {
  login: LoginPage,
};

// COMMON STEPS
Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

Given(/^I navigate to "([^"]*)"$/, async (menuItem) => {
  const linkText = menuItem;
  const link = await $(`a=${linkText}`);
  await link.click();
  await browser.pause(1000);
});

// LOGIN STEPS
When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see "([^"]*)"$/, async (text) => {
  const element = await $(`//*[contains(text(), "${text}")]`);
  await expect(element).toBeExisting();
});

Then(/^I should see an error message$/, async () => {
  await expect(LoginPage.errorMessage).toBeExisting();
});

Then(/^the login button should be disabled when fields are empty$/, async () => {
  const isEmpty = await LoginPage.isLoginButtonDisabled();
  expect(isEmpty).toBe(true);
});

// ACCOUNTS STEPS
Then(/^I should see all my accounts listed$/, async () => {
  await expect(AccountsPage.accountsTable).toBeExisting();
  const count = await AccountsPage.getAccountCount();
  expect(count).toBeGreaterThan(0);
});

Then(/^each account should display the current balance$/, async () => {
  const balance = await AccountsPage.getAccountBalance(0);
  expect(balance).toBeTruthy();
});

When(/^I click on an account$/, async () => {
  await AccountsPage.clickFirstAccount();
});

Then(/^I should see the account details$/, async () => {
  const title = await AccountsPage.pageTitle;
  await expect(title).toBeExisting();
});

Then(/^I should see recent transactions$/, async () => {
  const transactionTable = await $('#transactionTable');
  await expect(transactionTable).toBeExisting();
});

// TRANSFER STEPS
When(/^I select the source account$/, async () => {
  await TransferPage.selectFromAccount(0);
});

When(/^I select the destination account$/, async () => {
  await TransferPage.selectToAccount(1);
});

When(/^I enter transfer amount "([^"]*)"$/, async (amount) => {
  await TransferPage.amountInput.setValue(amount);
});

When(/^I click transfer button$/, async () => {
  await TransferPage.transferButton.click();
  await browser.pause(1000);
});

Then(/^the transfer should be reflected in the account$/, async () => {
  const confirmation = await TransferPage.confirmationMessage;
  await expect(confirmation).toBeExisting();
});

Then(/^I should see an insufficient funds error$/, async () => {
  await expect(TransferPage.errorMessage).toBeExisting();
});

// BILL PAY STEPS
When(/^I enter payee name "([^"]*)"$/, async (name) => {
  await BillPayPage.payeeNameInput.setValue(name);
});

When(/^I enter payee address "([^"]*)"$/, async (address) => {
  await BillPayPage.payeeAddressInput.setValue(address);
});

When(/^I enter payee city "([^"]*)"$/, async (city) => {
  await BillPayPage.payeeCityInput.setValue(city);
});

When(/^I enter payee state "([^"]*)"$/, async (state) => {
  await BillPayPage.payeeStateInput.setValue(state);
});

When(/^I enter payee zip code "([^"]*)"$/, async (zip) => {
  await BillPayPage.payeeZipInput.setValue(zip);
});

When(/^I enter payee phone "([^"]*)"$/, async (phone) => {
  await BillPayPage.payeePhoneInput.setValue(phone);
});

When(/^I enter account number "([^"]*)"$/, async (account) => {
  await BillPayPage.accountNumberInput.setValue(account);
});

When(/^I verify account number "([^"]*)"$/, async (account) => {
  await BillPayPage.verifyAccountInput.setValue(account);
});

When(/^I enter payment amount "([^"]*)"$/, async (amount) => {
  await BillPayPage.amountInput.setValue(amount);
});

When(/^I select the account to pay from$/, async () => {
  await BillPayPage.fromAccountSelect.selectByIndex(0);
});

When(/^I click send payment button$/, async () => {
  await BillPayPage.sendPaymentButton.click();
  await browser.pause(1000);
});

When(/^I fill in all payment details$/, async () => {
  await BillPayPage.fillPayeeDetails(
    "Test Payee",
    "123 Test St",
    "Test City",
    "TS",
    "12345",
    "555-1234",
    "54321"
  );
  await BillPayPage.amountInput.setValue("50");
});

Then(/^I should see all payment details before confirming$/, async () => {
  const nameValue = await BillPayPage.payeeNameInput.getValue();
  expect(nameValue).toBeTruthy();
});

// LOAN STEPS
When(/^I enter loan amount "([^"]*)"$/, async (amount) => {
  await LoanPage.loanAmountInput.setValue(amount);
});

When(/^I enter down payment "([^"]*)"$/, async (downPayment) => {
  await LoanPage.downPaymentInput.setValue(downPayment);
});

When(/^I select account for loan deposit$/, async () => {
  await LoanPage.selectAccount(0);
});

When(/^I click apply for loan button$/, async () => {
  await LoanPage.applyButton.click();
  await browser.pause(1000);
});

Then(/^I should see loan denial reason$/, async () => {
  const reason = await LoanPage.denialReason;
  await expect(reason).toBeExisting();
});
