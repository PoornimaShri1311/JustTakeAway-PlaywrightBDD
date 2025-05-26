import { Page, expect as pwExpect } from '@playwright/test';
import { AboutUsPageLocators } from '../locators/AboutUsPageLocators';
import { getLocator } from '../Utils/locatorUtils';


export class AboutUsPage {

  constructor(private page: Page) {}
  

  async shouldDisplayAboutUsHeader() {
    const locator = getLocator(this.page!, AboutUsPageLocators.header_AboutUs);
    await pwExpect(locator).toBeVisible();
  }

}