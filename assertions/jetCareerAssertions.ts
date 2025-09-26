import { expect } from '@playwright/test';
import { jetCareerPage } from '../pages/jetCareerPage';
import logger from '../support/logger';

/**
 * Assertion helper for Jet Career Page.
 */
export class jetCareerAssertions {
  /**
   * Creates an instance of jetCareerAssertions.
   * @param jetCareerPage jetCareerPage instance
   */
  constructor(private jetCareerPage: jetCareerPage) {}


  /**
   * Asserts that multiple unique countries are shown in search results.
   */
  async assertMultipleCountriesInResults() {
    const locations = await this.jetCareerPage.getAllJobLocations();

    if (locations.length === 0) {
      throw new Error('❌ No job locations found on the page.');
    }

    const countries = locations
      .map(loc => {
        const words = loc.trim().split(/\s+/);
        return words.length > 0 ? words[words.length - 1] : '';
      })
      .filter(Boolean);

    const uniqueCountries = new Set(countries);

    expect(uniqueCountries.size).toBeGreaterThan(1);
    logger.info(`Multiple countries found: ${Array.from(uniqueCountries).join(', ')}`);
  }


  /**
   * Asserts that all job results belong to a single expected country.
   * @param expectedCountry The expected country name
   */
  async assertResultsFromCountry(expectedCountry: string) {
    await this.jetCareerPage.waitForJobListings();
    const locations = await this.jetCareerPage.getAllJobLocations();

    if (locations.length === 0) {
      throw new Error(`❌ No job listings found for "${expectedCountry}".`);
    }

    const countries = locations
      .map((loc: string) => {
        const words = loc.trim().split(/\s+/);
        return words.length > 0 ? words[words.length - 1] : '';
      })
      .filter(Boolean);

    const uniqueCountries = new Set(countries);

    expect(uniqueCountries.size).toBe(1);
    expect(uniqueCountries.has(expectedCountry)).toBeTruthy();

    logger.info(`All job locations are from "${expectedCountry}"`);
  }


  /**
   * Asserts that Sales category is selected.
   */
  async assertSalesCategorySelected() {
    await this.jetCareerPage.verifySalesCategorySelected();
  }

  /**
   * ✅ Assert Sales category count matches search results count
   */
  async assertSalesCategoryCountMatchesResults() {
    await this.jetCareerPage.compareSalesCategoryCountWithResults();
  }

  /**
   * ✅ Assert all search result categories are Sales
   */
  async assertAllResultsAreSales() {
    const categories = await this.jetCareerPage.getAllResultCategories();
    for (const cat of categories) {
      expect(cat).toContain('Sales');
    }
  }

  /**
   * ✅ Assert Sales is shown as selected category
   */
  async assertSalesCategoryShown() {
    const category = await this.jetCareerPage.getSelectedCategory();
    expect(category).toContain('Sales');

    const count = await this.jetCareerPage.getResultsCount();
    expect(count).not.toBeNull();
  }
}
