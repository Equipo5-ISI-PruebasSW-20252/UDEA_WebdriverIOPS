import Page from './page.js';

class LoanPage extends Page {
    get loanAmountInput () {
        return $('#amount');
    }

    get downPaymentInput () {
        return $('#downPayment');
    }

    get fromAccountSelect () {
        return $('#fromAccountId');
    }

    get applyButton () {
        return $('input[value="Apply Now"]');
    }

    get resultTitle () {
        return $('#loanRequestResult h1');
    }

    get loanStatus () {
        return $('#loanStatus');
    }

    get denialReason () {
        return $('.error');
    }

    async requestLoan(amount, downPayment) {
        await this.loanAmountInput.setValue(amount);
        await this.downPaymentInput.setValue(downPayment);
        await this.applyButton.click();
        await browser.pause(1000);
    }

    async selectAccount(index = 0) {
        await this.fromAccountSelect.selectByIndex(index);
    }

    open () {
        return super.open('requestloan');
    }
}

export default new LoanPage();
