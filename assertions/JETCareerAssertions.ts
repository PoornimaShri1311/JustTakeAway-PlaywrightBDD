import { expect } from '@playwright/test';
import { JETCareerPage } from '../pages/jetCareerPage';

export class JETCareerAssertions {
  constructor(private jetCareerPage: JETCareerPage) {}

  /**
   * ✅ Assert that multiple unique countries are shown in search results
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
    console.log(`✅ Multiple countries found: ${Array.from(uniqueCountries).join(', ')}`);
  }

  /**
   * ✅ Assert that all job results belong to a single expected country
   */
  async assertResultsFromCountry(expectedCountry: string) {
    await this.jetCareerPage.waitForJobListings();
    const locations = await this.jetCareerPage.getAllJobLocations1();

    if (locations.length === 0) {
      throw new Error(`❌ No job listings found for "${expectedCountry}".`);
    }

    const countries = locations
      .map(loc => {
        const words = loc.trim().split(/\s+/);
        return words.length > 0 ? words[words.length - 1] : '';
      })
      .filter(Boolean);

    const uniqueCountries = new Set(countries);

    expect(uniqueCountries.size).toBe(1);
    expect(uniqueCountries.has(expectedCountry)).toBeTruthy();

    console.log(`✅ All job locations are from "${expectedCountry}"`);
  }

  /**
   * ✅ Assert that Sales category is selected
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
