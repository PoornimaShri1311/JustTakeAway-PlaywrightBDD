import { Page } from '@playwright/test';
import BasePage from './basePage';
import { JETCareerPageLocators } from '../locators/jetCareerPageLocators';
import { AssertionHelper } from '../assertions/assertionHelper';
import { TextUtils } from '../Utils/textUtils';
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';

export class JETCareerPage extends BasePage {
  private assertionHelper: AssertionHelper;

  constructor(page: Page) {
    super(page);
  this.assertionHelper = new AssertionHelper(page);
  }

  async verifyJobTitleInputVisible() {
    await this.assertionHelper.assertVisible(JETCareerPageLocators.jobTitleInput);
  }

  async verifyJobTitleInputEnabled() {
    await this.assertionHelper.assertEnabled(JETCareerPageLocators.jobTitleInput);
  }

  async clickJobTitleInput() {
    await this.click(JETCareerPageLocators.jobTitleInput);
  }

  async enterJobTitle(jobTitle: string) {
    await this.fill(JETCareerPageLocators.jobTitleInput, jobTitle);
  }

  async clickSearchButton() {
    await this.click(JETCareerPageLocators.searchButton);
  }

  async clickCountryCategory() {
    await this.click(JETCareerPageLocators.getCountryCategoryButton);
  }

  async selectCountryCheckbox(country: string) {
    await this.click(JETCareerPageLocators.countryCheckbox(country));
    await this.page.waitForTimeout(PLAYWRIGHT_TIMEOUTS.SHORT_TIMEOUT); // Allow filter to apply
  }

  async selectSalesCountryCheckbox(country: string) {
    await this.click(JETCareerPageLocators.salescountryCheckbox(country));
    await this.page.waitForTimeout(PLAYWRIGHT_TIMEOUTS.SHORT_TIMEOUT);
  }

  async selectSalesCategory() {
    await this.click(JETCareerPageLocators.salesCategoryLink);
  }

  async verifySalesCategorySelected() {
    await this.assertionHelper.assertChecked(JETCareerPageLocators.salesCategoryInput);
    console.log('✅ Sales category is correctly selected.');
  }

  async getSelectedCategory(): Promise<string> {
    return await this.getText(JETCareerPageLocators.selectedCategory);
  }

  async getResultsCount(): Promise<string> {
    return await this.getText(JETCareerPageLocators.resultsCount);
  }

  async getAllResultCategories(): Promise<string[]> {
    return await this.getAllTexts(JETCareerPageLocators.resultCategory);
  }

  async compareSalesCategoryCountWithResults(): Promise<void> {
    const salesText = await this.getText(JETCareerPageLocators.salesCategoryCount);
    const resultsText = await this.getText(JETCareerPageLocators.totalResultsCount);

    const salesCount = TextUtils.parseIntFromText(salesText);
    const resultsCount = TextUtils.parseIntFromText(resultsText);

    if (salesCount !== resultsCount) {
      throw new Error(`Mismatch: Sales ${salesCount} != Results ${resultsCount}`);
    }
    console.log(`✅ Counts match: ${salesCount}`);
  }

  async getAllJobLocations(): Promise<string[]> {
    const rawTexts = await this.getAllTexts(JETCareerPageLocators.jobLocation);
    return rawTexts.map(t => TextUtils.removePrefix(t, JETCareerPageLocators.jobLocationPrefix));
  
  }

  async getAllJobLocations1(): Promise<string[]> {
    const count = await this.page.locator(JETCareerPageLocators.singleJobLocation).count();
    const locations: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await this.page
        .locator(JETCareerPageLocators.singleJobLocation)
        .nth(i)
        .innerText();

      locations.push(text.replace(JETCareerPageLocators.jobLocationPrefix, '').trim());
    }
    return locations;
  }

  async waitForJobListings() {
    await this.waitForVisible(JETCareerPageLocators.jobListContainer);
    await this.waitForVisible(JETCareerPageLocators.clearAllButton);
  }

  async verifySearchResultsFromMultipleLocations() {
    const locations = await this.getAllJobLocations();
    const countries = Array.from(new Set(locations.map(loc => loc.split(',').pop()?.trim())));
    if (countries.length <= 1) throw new Error(`Only one unique country found: ${countries[0]}`);
    console.log(`✅ Multiple countries found: ${countries.join(', ')}`);
  }
}

