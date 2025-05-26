import { Page, expect as pwExpect } from '@playwright/test';
import { HomePageLocators, HomePageLocators_Car, HomePageLocators_Footers, HomePageLocators_Stays } from '../locators/HomePageLocators';
import { getLocator } from '../Utils/locatorUtils';
import { HotelSearchPageLocators } from '../locators/HotelSearchPageLocators';


export class HotelSearchPage {

  constructor(private page: Page) {}

  async enterDestination(destination: string) {
    const locator = getLocator(this.page!, HotelSearchPageLocators.txtField_Destination);
    locator.fill(destination);
  }

  async shouldDisplayDestination(destination: string) {
    const locator = getLocator(this.page!, HotelSearchPageLocators.txtField_Destination);
    const destinationText = await locator.inputValue();
    console.log('Destination text:', destinationText);
    await pwExpect(locator).toHaveValue(destination);
  }



  


  

  
}