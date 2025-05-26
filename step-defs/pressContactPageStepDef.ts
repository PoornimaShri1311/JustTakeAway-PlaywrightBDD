import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { PressContactPage } from '../pages/PressContactPage';

let pressContactPage: PressContactPage;

Then('validate that the Press page should be displayed',{ timeout: 20000 }, async function (this: CustomWorld) {
  pressContactPage = new PressContactPage(this.page!);
  await pressContactPage.shouldDisplayContactUsHeader();
});

