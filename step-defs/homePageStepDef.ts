import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/customWorld';
import { HomePage } from '../pages/homePage';
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';

let homePage: HomePage;

Given('I am on the Home Page', { timeout: PLAYWRIGHT_TIMEOUTS.PAGE_TIMEOUT }, async function (this: CustomWorld) {
  await this.page!.goto(this.envConfig.urls.homePage);
});


