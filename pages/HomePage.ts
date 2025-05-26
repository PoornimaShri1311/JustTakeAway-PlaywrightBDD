import { Page, expect as pwExpect } from '@playwright/test';
import { HomePageLocators, HomePageLocators_Car, HomePageLocators_Footers, HomePageLocators_Stays } from '../locators/HomePageLocators';
import { getLocator } from '../Utils/locatorUtils';
import { ReusableCode } from '../Utils/ReusableCode';
import testData from '../test-data/testing-data.json';


export class HomePage {

  constructor(private page: Page) {}

  async gotoHomePage() {
    await this.page.goto(testData.urls.homePage);
  }
  

  async shouldDisplayWhereDoYouWantToGolabel() {
    const locator = getLocator(this.page!, HomePageLocators.lbl_WhereDoYouWantToGo);
    await pwExpect(locator).toBeVisible();
  }

  async shouldDisplayWhereDoYouWantToStaylabel() {
    const locator = getLocator(this.page!, HomePageLocators_Stays.lbl_WhereDoYouWantToStay);
    await pwExpect(locator).toBeVisible();
  }


  async shouldDisplayCarHireslabel() {
    const locator = getLocator(this.page!, HomePageLocators_Car.lbl_CarHires);
    await pwExpect(locator).toBeVisible();
  }

  
  async clickStaysIcon() {
    await getLocator(this.page!, HomePageLocators.icon_Stays).click();
  }

  async clickCarRentalIcon() {
    await getLocator(this.page!, HomePageLocators.icon_CarRental).click();
  }

  async shouldDisplayFlightIconAsSelected() {
    const locator = getLocator(this.page!, HomePageLocators.icon_Flight);
    const ariaCurrent = await locator.getAttribute('aria-current');
    console.log('Flight icon aria-current attribute:', ariaCurrent);
    await pwExpect(locator).toHaveAttribute('aria-current', 'page');
  }

  async shouldDisplayStaysIconAsSelected() {
    const locator = getLocator(this.page!, HomePageLocators.icon_Stays);
    await pwExpect(locator).toHaveAttribute('aria-current', 'page');
  }

  async shouldDisplayCarRentalIconAsSelected() {
    const locator = getLocator(this.page!, HomePageLocators.icon_CarRental);
    await pwExpect(locator).toHaveAttribute('aria-current', 'page');
  }

  async shouldNotDisplayFlightIconAsSelected() {
    const locator = getLocator(this.page!, HomePageLocators.icon_Flight);
    await pwExpect(locator).not.toHaveAttribute('aria-current', 'page');
  }

  async shouldNotDisplayStaysIconAsSelected() {
    const locator = getLocator(this.page!, HomePageLocators.icon_Stays);
    await pwExpect(locator).not.toHaveAttribute('aria-current', 'page');
  }

  async shouldNotDisplayCarRentalIconAsSelected() {
    const locator = getLocator(this.page!, HomePageLocators.icon_CarRental);
    await pwExpect(locator).not.toHaveAttribute('aria-current', 'page');
  }

  async clickAboutUsLink() {
    const locator = getLocator(this.page!, HomePageLocators_Footers.link_About);
    await locator.click();
  }

  async clickPressLink() {
    const locator = getLocator(this.page!, HomePageLocators_Footers.link_Press);
    await locator.click();
  }

  async clickHelpFAQLink() {
    const locator = getLocator(this.page!, HomePageLocators_Footers.link_HelpFAQ);
    await locator.click();
  }


  

  
}