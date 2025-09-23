import { Given } from '@cucumber/cucumber';
import { customWorld } from '../support/customWorld';
import { homePage } from '../pages/homePage'; 
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';

let homePageInstance: homePage;

Given(
  'I am on the Home Page',
  { timeout: PLAYWRIGHT_TIMEOUTS.PAGE_TIMEOUT },
  async function (this: customWorld) {
    // constructor reads process.env.ENV automatically
    homePageInstance = new homePage(this.page!);
    await homePageInstance.gotoHomePage();

    console.log('Current ENV:', process.env.ENV); 
    console.log('Home Page URL:', homePageInstance['config'].urls.homePage); 
  }
);
