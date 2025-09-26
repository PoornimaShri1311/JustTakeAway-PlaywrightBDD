import { Page } from '@playwright/test';
import { jetCareerPageLocators } from '../locators/jetCareerPageLocators';
import { assertionHelper } from '../assertions/assertionHelper';
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';
import basePage from './basePage';
import { textUtils } from '../utils/textUtils';
import logger from '../support/logger';


export class jetCareerPage extends basePage {
  private assertionHelper: assertionHelper;

  constructor(page: Page) {
    super(page);
  this.assertionHelper = new assertionHelper(page);
  }

  async verifyJobTitleInputVisible() {
    await this.assertionHelper.assertVisible(jetCareerPageLocators.jobTitleInput);
  }

  async verifyJobTitleInputEnabled() {
    await this.assertionHelper.assertEnabled(jetCareerPageLocators.jobTitleInput);
  }

  async clickJobTitleInput() {
    await this.click(jetCareerPageLocators.jobTitleInput);
  }

  async enterJobTitle(jobTitle: string) {
    await this.fill(jetCareerPageLocators.jobTitleInput, jobTitle);
  }

  async clickSearchButton() {
    await this.click(jetCareerPageLocators.searchButton);
  }

  async clickCountryCategory() {
    await this.click(jetCareerPageLocators.getCountryCategoryButton);
  }

  async selectCountryCheckbox(country: string) {
    await this.click(jetCareerPageLocators.countryCheckbox(country));
    await this.page.waitForTimeout(PLAYWRIGHT_TIMEOUTS.SHORT_TIMEOUT); // Allow filter to apply
  }

  async selectSalesCountryCheckbox(country: string) {
    await this.click(jetCareerPageLocators.salescountryCheckbox(country));
    await this.page.waitForTimeout(PLAYWRIGHT_TIMEOUTS.SHORT_TIMEOUT);
  }

  async selectSalesCategory() {
    await this.click(jetCareerPageLocators.salesCategoryLink);
  }

  async verifySalesCategorySelected() {
    await this.assertionHelper.assertChecked(jetCareerPageLocators.salesCategoryInput);
  }

  async getSelectedCategory(): Promise<string> {
    return await this.getText(jetCareerPageLocators.selectedCategory);
  }

  async getResultsCount(): Promise<string> {
    return await this.getText(jetCareerPageLocators.resultsCount);
  }

  async getAllResultCategories(): Promise<string[]> {
    return await this.getAllTexts(jetCareerPageLocators.resultCategory);
  }

  async compareSalesCategoryCountWithResults(): Promise<void> {
    const salesText = await this.getText(jetCareerPageLocators.salesCategoryCount);
    const resultsText = await this.getText(jetCareerPageLocators.totalResultsCount);

    const salesCount = textUtils.parseIntFromText(salesText);
    const resultsCount = textUtils.parseIntFromText(resultsText);

    if (salesCount !== resultsCount) {
      throw new Error(`Mismatch: Sales ${salesCount} != Results ${resultsCount}`);
    }
    logger.info(` Counts match: ${salesCount}`);
  }

  /**
   * Returns all job locations as an array of strings, using the most robust locator available.
   * This method merges the logic of the previous getAllJobLocations and getAllJobLocations1.
   */
  async getAllJobLocations(): Promise<string[]> {
    // Prefer the more robust locator if available, fallback to the other
    const locator = this.page.locator(jetCareerPageLocators.singleJobLocation);
    const count = await locator.count();
    if (count > 0) {
      const locations: string[] = [];
      for (let i = 0; i < count; i++) {
        const text = await locator.nth(i).innerText();
        locations.push(text.replace(jetCareerPageLocators.jobLocationPrefix, '').trim());
      }
      return locations;
    } else {
      // fallback to the old method if needed
      const rawTexts = await this.getAllTexts(jetCareerPageLocators.jobLocation);
      return rawTexts.map(t => textUtils.removePrefix(t, jetCareerPageLocators.jobLocationPrefix));
    }
  }
  async waitForJobListings() {
    await this.waitForVisible(jetCareerPageLocators.jobListContainer);
    await this.waitForVisible(jetCareerPageLocators.clearAllButton);
  }

  async verifySearchResultsFromMultipleLocations() {
    const locations = await this.getAllJobLocations();
    const countries = Array.from(new Set(locations.map(loc => loc.split(',').pop()?.trim())));
    if (countries.length <= 1) throw new Error(`Only one unique country found: ${countries[0]}`);
    logger.info(`Multiple countries found: ${countries.join(', ')}`);
  }
}

