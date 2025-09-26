import { Page } from '@playwright/test';
import { jetCareerPageLocators } from '../locators/jetCareerPageLocators';
import { assertionHelper } from '../assertions/assertionHelper';
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';
import basePage from './basePage';
import { textUtils } from '../utils/textUtils';
import logger from '../support/logger';

/**
 * Page object for Jet Career Page.
 * Encapsulates all actions and verifications for the Jet Career UI.
 */
export class jetCareerPage extends basePage {
  private assertionHelper: assertionHelper;


  /**
   * Creates an instance of jetCareerPage.
   * @param page Playwright Page object
   */
  constructor(page: Page) {
    super(page);
    this.assertionHelper = new assertionHelper(page);
  }


  /**
   * Verifies the job title input is visible.
   */
  async verifyJobTitleInputVisible() {
    await this.assertionHelper.assertVisible(jetCareerPageLocators.jobTitleInput);
  }


  /**
   * Verifies the job title input is enabled.
   */
  async verifyJobTitleInputEnabled() {
    await this.assertionHelper.assertEnabled(jetCareerPageLocators.jobTitleInput);
  }


  /**
   * Clicks the job title input field.
   */
  async clickJobTitleInput() {
    await this.click(jetCareerPageLocators.jobTitleInput);
  }


  /**
   * Enters a job title in the search box.
   * @param jobTitle The job title to enter
   */
  async enterJobTitle(jobTitle: string) {
    await this.fill(jetCareerPageLocators.jobTitleInput, jobTitle);
  }


  /**
   * Clicks the search button.
   */
  async clickSearchButton() {
    await this.click(jetCareerPageLocators.searchButton);
  }


  /**
   * Clicks the country category button.
   */
  async clickCountryCategory() {
    await this.click(jetCareerPageLocators.getCountryCategoryButton);
  }


  /**
   * Selects a country checkbox and waits for the filter to apply.
   * @param country The country to select
   */
  async selectCountryCheckbox(country: string) {
    await this.click(jetCareerPageLocators.countryCheckbox(country));
    await this.page.waitForTimeout(PLAYWRIGHT_TIMEOUTS.SHORT_TIMEOUT); // Allow filter to apply
  }


  /**
   * Selects a country checkbox in the Sales page and waits for the filter to apply.
   * @param country The country to select
   */
  async selectSalesCountryCheckbox(country: string) {
    await this.click(jetCareerPageLocators.salescountryCheckbox(country));
    await this.page.waitForTimeout(PLAYWRIGHT_TIMEOUTS.SHORT_TIMEOUT);
  }


  /**
   * Selects the Sales category.
   */
  async selectSalesCategory() {
    await this.click(jetCareerPageLocators.salesCategoryLink);
  }


  /**
   * Verifies that the Sales category is selected.
   */
  async verifySalesCategorySelected() {
    await this.assertionHelper.assertChecked(jetCareerPageLocators.salesCategoryInput);
  }


  /**
   * Gets the selected category text.
   * @returns The selected category as a string
   */
  async getSelectedCategory(): Promise<string> {
    return await this.getText(jetCareerPageLocators.selectedCategory);
  }


  /**
   * Gets the results count text.
   * @returns The results count as a string
   */
  async getResultsCount(): Promise<string> {
    return await this.getText(jetCareerPageLocators.resultsCount);
  }


  /**
   * Gets all result categories as an array of strings.
   * @returns Array of result category strings
   */
  async getAllResultCategories(): Promise<string[]> {
    return await this.getAllTexts(jetCareerPageLocators.resultCategory);
  }


  /**
   * Compares the Sales category count with the results count and throws if they do not match.
   */
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
   * @returns Array of job location strings
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

  /**
   * Waits for job listings and the clear all button to be visible.
   */
  async waitForJobListings() {
    await this.waitForVisible(jetCareerPageLocators.jobListContainer);
    await this.waitForVisible(jetCareerPageLocators.clearAllButton);
  }

  /**
   * Verifies that search results are from multiple locations (countries).
   */
  async verifySearchResultsFromMultipleLocations() {
    const locations = await this.getAllJobLocations();
    const countries = Array.from(new Set(locations.map(loc => loc.split(',').pop()?.trim())));
    if (countries.length <= 1) throw new Error(`Only one unique country found: ${countries[0]}`);
    logger.info(`Multiple countries found: ${countries.join(', ')}`);
  }
}

