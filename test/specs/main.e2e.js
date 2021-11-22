const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const DashboardPage = require('../pageobjects/dashboard.page');


describe('Main Page', () => {
    it('Verify Navigation Bar Items', () => {
        browser.url('/dashboard');

        expect(DashboardPage.navBar).toHaveText("Dashboard","Users","Messages","RS/RSS/OSS","Reports","Referrals", ); 

    });
});

