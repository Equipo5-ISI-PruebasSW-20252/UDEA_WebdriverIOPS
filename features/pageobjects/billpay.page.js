import Page from './page.js';

class BillPayPage extends Page {
    get payeeNameInput() {
        return $('input[name="payee.name"]');
    }

    get payeeAddressInput() {
        return $('input[name="payee.address.street"]');
    }

    get payeeCityInput() {
        return $('input[name="payee.address.city"]');
    }

    get payeeStateInput() {
        return $('input[name="payee.address.state"]');
    }

    get payeeZipInput() {
        return $('input[name="payee.address.zipCode"]');
    }

    get payeePhoneInput() {
        return $('input[name="payee.phoneNumber"]');
    }

    get accountNumberInput() {
        return $('input[name="payee.accountNumber"]');
    }

    get verifyAccountInput() {
        return $('input[name="verifyAccount"]');
    }

    get amountInput() {
        return $('input[name="amount"]');
    }

    get fromAccountSelect() {
        return $('select[name="fromAccountId"]');
    }

    get sendPaymentButton() {
        return $('input[value="Send Payment"]');
    }

    get confirmationMessage() {
        return $('#billpayResult h1');
    }

    async fillPayeeDetails(name, address, city, state, zip, phone, account) {
        await this.payeeNameInput.setValue(name);
        await this.payeeAddressInput.setValue(address);
        await this.payeeCityInput.setValue(city);
        await this.payeeStateInput.setValue(state);
        await this.payeeZipInput.setValue(zip);
        await this.payeePhoneInput.setValue(phone);
        await this.accountNumberInput.setValue(account);
        await this.verifyAccountInput.setValue(account);
    }

    async makePayment(amount) {
        await this.amountInput.setValue(amount);
        await this.sendPaymentButton.click();
        await browser.pause(1000);
    }

    open() {
        return super.open('billpay');
    }
}

export default new BillPayPage();
