const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');
const DashboardPage = require('../pageobjects/dashboard.page');

describe('Before logging in', () => {
    it('should clear the browser cache', async () => {
        browser.execute('window.localStorage.clear()');
    });
    
});