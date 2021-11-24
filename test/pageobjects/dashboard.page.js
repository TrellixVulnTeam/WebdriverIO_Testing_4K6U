

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
    get tabBar() { return $$('#tabbar-links"]')} //create a return for elements of the 'navbar-brand' navigation bar
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
 //  async it('should demonstrate the getText function') {
//    const navText = await $('#navText');
 //   console.log(await navText.getText());
    // outputs the following:
    // "Lorem ipsum dolor sit amet,consetetur sadipscing elitr"

 //   const span = await $('span');
 //   console.log(await span.getText());
    // outputs "" (empty string) since element is not interactable/
//});
  
  
    /**
     * overwrite specific options to adapt it to page object
     */
   // open() {
    //    return super.open('logout');
  //  }
//}

module.exports = new DashboardPage();
