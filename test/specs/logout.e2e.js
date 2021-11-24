const DashboardPage = require('../pageobjects/dashboard.page');
//const Page = require('../pageobjects/page');

describe ('Dashboard Logout', () => {
    it('should log the user out', async () => {
        //  const btnLogout = $('a[href="/logout-link"]'); //find Element
      await DashboardPage.btnLogout.click(); //call the dashboard page 'btnLogout' function and clicking it
      await expect(browser).toHaveUrl('/login');
      
    });
});



