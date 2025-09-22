import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { HomePage } from '../pages/HomePage';

let homePage: HomePage;

Given('I am on the Home Page', { timeout: 20000 }, async function (this: CustomWorld) {
  await this.page!.goto(this.envConfig.urls.homePage);
});


