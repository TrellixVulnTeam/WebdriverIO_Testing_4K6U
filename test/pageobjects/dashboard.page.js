

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */

    //}
    
    get btnLogout() { return $('a[href="/logout-link"]')} //Javascript 'return' function
       /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //async logout() {
       // await this.btnLogout.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
   // open() {
    //    return super.open('logout');
  //  }
//}

module.exports = new DashboardPage();
