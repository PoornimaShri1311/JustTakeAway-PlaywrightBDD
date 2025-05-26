import { Page, expect as pwExpect } from '@playwright/test';
import { getLocator } from '../Utils/locatorUtils';
import { PressContactPageLocators } from '../locators/PressContactPageLocators';
import { HelpFAQPageLocators } from '../locators/HelpFAQPageLocators';


export class HelpFAQPage {

  constructor(private page: Page) {}
  

  async shouldDisplayHowCanWeHelpHeader() {
    const locator = getLocator(this.page!, HelpFAQPageLocators.header_HowCanWeHelp);
    await pwExpect(locator).toBeVisible();
  }

}