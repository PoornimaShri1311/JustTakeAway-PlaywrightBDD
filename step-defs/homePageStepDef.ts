import { Given } from '@cucumber/cucumber';
import { customWorld } from '../support/customWorld';
import { homePage } from '../pages/homePage'; 
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';

let homePageInstance: homePage;

Given(
  'I am on the Home Page',
  { timeout: PLAYWRIGHT_TIMEOUTS.PAGE_TIMEOUT },
  async function (this: customWorld) {
    homePageInstance = new homePage(this.page!, this.envConfig.envName);
    await homePageInstance.gotoHomePage();
  }
);

