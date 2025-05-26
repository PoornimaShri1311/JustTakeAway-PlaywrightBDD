import { expect, Page, expect as pwExpect } from '@playwright/test';
import { getLocator } from '../Utils/locatorUtils';
import { HotelResultPageLocators } from '../locators/HotelResultPageLocators';
import { ReusableCode } from '../Utils/ReusableCode';


export class HotelResultPage {

  constructor(private page: Page) {}

  // async shouldDisplayHotelResultPage() {
  //   const locator = getLocator(this.page!, HotelResultPageLocators.txt_HotelResultsFound);
  //   await pwExpect(locator).toBeVisible();
  // }

  // async shouldDisplayHotelResultPageForDestination(destination: string) {
  //   const reusableCode = new ReusableCode(this.page!);
  //   await reusableCode.verifyReplacedLocatorElementIsVisible(HotelResultPageLocators.txt_HotelResultsFound_Any.value, destination);

  // }

}