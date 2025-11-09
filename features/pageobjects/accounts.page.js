import Page from './page.js';

class AccountsPage extends Page {
    get accountsTable () {
        return $('#accountTable');
    }

    get accountRows () {
        return $$('#accountTable tbody tr');
    }

    get pageTitle () {
        return $('.title');
    }

    async getAccountCount() {
        const rows = await this.accountRows;
        return rows.length;
    }

    async clickFirstAccount() {
        const firstAccountLink = await $('#accountTable tbody tr:first-child td:first-child a');
        await firstAccountLink.click();
        await browser.pause(1000);
    }

    async getAccountBalance(index = 0) {
        const balanceCell = await $(`#accountTable tbody tr:nth-child(${index + 1}) td:nth-child(2)`);
        return await balanceCell.getText();
    }
}

export default new AccountsPage();
