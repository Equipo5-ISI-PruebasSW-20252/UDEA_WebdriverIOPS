import Page from './page.js';

class TransferPage extends Page {
    get amountInput () {
        return $('#amount');
    }

    get fromAccountSelect () {
        return $('#fromAccountId');
    }

    get toAccountSelect () {
        return $('#toAccountId');
    }

    get transferButton () {
        return $('input[type="submit"][value="Transfer"]');
    }

    get confirmationMessage () {
        return $('#showResult h1');
    }

    get errorMessage () {
        return $('.error');
    }

    async performTransfer(amount) {
        await this.amountInput.setValue(amount);
        await this.transferButton.click();
        await browser.pause(1000);
    }

    async selectFromAccount(index = 0) {
        await this.fromAccountSelect.selectByIndex(index);
    }

    async selectToAccount(index = 1) {
        await this.toAccountSelect.selectByIndex(index);
    }

    open () {
        return super.open('transfer');
    }
}

export default new TransferPage();
