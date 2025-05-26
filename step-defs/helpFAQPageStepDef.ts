import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { HelpFAQPage } from '../pages/HelpFAQPage';

let helpFAQPage: HelpFAQPage;

Then(/^validate that the Help\/FAQ page should be displayed$/,{ timeout: 20000 }, async function (this: CustomWorld) {
  helpFAQPage = new HelpFAQPage(this.page!);
  await helpFAQPage.shouldDisplayHowCanWeHelpHeader();
});

