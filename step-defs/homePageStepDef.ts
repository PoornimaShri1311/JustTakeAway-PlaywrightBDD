import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { HomePage } from '../pages/HomePage';
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';

let homePage: HomePage;

Given('I am on the Home Page', { timeout: PLAYWRIGHT_TIMEOUTS.PAGE_TIMEOUT }, async function (this: CustomWorld) {
  await this.page!.goto(this.envConfig.urls.homePage);
});


