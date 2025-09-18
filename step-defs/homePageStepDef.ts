import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { HomePage } from '../pages/HomePage';
import * as testData from '../test-data/testing-data.json';

let homePage: HomePage;

Given('I am on the Home Page',{ timeout: 20000 }, async function (this: CustomWorld) {
  homePage = new HomePage(this.page!);
  console.log('Navigating to:', testData.urls.homePage);
  await this.page!.goto(testData.urls.homePage);
});


