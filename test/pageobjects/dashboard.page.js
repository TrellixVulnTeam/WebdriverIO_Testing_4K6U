

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */

    //get userDropdown() {
        //return $('dropdown-menu.show');
    //}
    
    get btnLogout() {
        const btnLogout = $('a[href="/logout-link"]');  
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logout() {
        //await this.userDropdown.waitForClickable();
        //await this.userDropdown.click();
        //await this.btnLogout.waitForClickable();
        await this.btnLogout.click()
        //await this.userDropdown.setValue(span.caret);
        //await this.btnLogout.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
   // open() {
    //    return super.open('logout');
  //  }
}

module.exports = new DashboardPage();
