import { Page, expect as pwExpect } from '@playwright/test';
import { getLocator } from '../Utils/locatorUtils';
import { PressContactPageLocators } from '../locators/PressContactPageLocators';


export class PressContactPage {

  constructor(private page: Page) {}
  

  async shouldDisplayContactUsHeader() {
    const locator = getLocator(this.page!, PressContactPageLocators.header_ContactUs);
    await pwExpect(locator).toBeVisible();
  }

}