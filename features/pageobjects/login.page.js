import Page from './page.js';

class LoginPage extends Page {
    get inputUsername () {
        return $('input[name="username"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get btnSubmit () {
        return $('input[type="submit"][value="Log In"]');
    }

    get errorMessage () {
        return $('.error');
    }
   
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(1000);
    }

    async isLoginButtonDisabled() {
        const usernameValue = await this.inputUsername.getValue();
        const passwordValue = await this.inputPassword.getValue();
        return usernameValue === '' || passwordValue === '';
    }

    open () {
        return super.open('index');
    }
}

export default new LoginPage();
