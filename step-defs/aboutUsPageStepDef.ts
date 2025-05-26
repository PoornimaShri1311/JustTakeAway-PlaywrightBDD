import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { ReusableCode } from '../Utils/ReusableCode';
import { AboutUsPage } from '../pages/AboutUsPage';

let aboutUsPage: AboutUsPage;

Then('validate that the About Us page should be displayed',{ timeout: 20000 }, async function (this: CustomWorld) {
  aboutUsPage = new AboutUsPage(this.page!);
  await aboutUsPage.shouldDisplayAboutUsHeader();
});

