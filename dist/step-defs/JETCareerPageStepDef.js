"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const JETCareerPage_1 = require("../pages/JETCareerPage");
const cucumber_2 = require("@cucumber/cucumber");
let jetCareerPage;
(0, cucumber_1.Then)(/^I should see search results from multiple locations$/, { timeout: 20000 }, async function () {
    const { jobLocation } = require('../locators/JETCareerPageLocators').JETCareerPageLocators;
    // const jetCareerPage = new JETCareerPage(this.page!);
    const jetCareerPage = this.jetCareerPage;
    // Wait for at least one job location element to be visible
    const locationLocator = this.page.locator(jobLocation);
    await locationLocator.first().waitFor({ state: 'visible', timeout: 10000 });
    // Extract all location texts
    const locationTexts = await jetCareerPage.getAllJobLocations();
    console.log('Raw job location texts:', locationTexts);
    if (locationTexts.length === 0) {
        throw new Error('❌ No job location texts found on the page.');
    }
    // Extract country from each location string (last word logic)
    const countries = locationTexts
        .map(loc => {
        const words = loc.trim().split(/\s+/);
        return words.length > 0 ? words[words.length - 1] : '';
    })
        .filter(Boolean);
    console.log('Extracted countries:', countries);
    const uniqueCountries = new Set(countries);
    console.log('Unique country count:', uniqueCountries.size);
    if (uniqueCountries.size <= 1) {
        throw new Error(`❌ Expected multiple countries but found only: ${Array.from(uniqueCountries).join(', ')}`);
    }
    console.log(`✅ Multiple countries found: ${Array.from(uniqueCountries).join(', ')}`);
});
(0, cucumber_1.Before)(async function () {
    this.jetCareerPage = new JETCareerPage_1.JETCareerPage(this.page);
});
(0, cucumber_1.When)(/^I enter "([^"]+)" in the Job Title search box$/, async function (jobTitle) {
    await this.jetCareerPage.enterJobTitle(jobTitle);
});
(0, cucumber_1.When)(/^I click the Search button$/, async function () {
    await this.jetCareerPage.clickSearchButton();
});
(0, cucumber_1.When)(/^I click on the Country category$/, { timeout: 20000 }, async function () {
    await this.jetCareerPage.clickCountryCategory();
});
(0, cucumber_1.When)(/^I select the "([^"]+)" checkbox$/, { timeout: 20000 }, async function (country) {
    await this.jetCareerPage.selectCountryCheckbox(country);
});
(0, cucumber_1.When)(/^I select the "([^"]+)" checkbox in Sales Page$/, { timeout: 20000 }, async function (country) {
    await this.jetCareerPage.selectSalesCountryCheckbox(country);
});
(0, cucumber_2.setDefaultTimeout)(30000); // global step timeout 30s
(0, cucumber_1.Then)(/^the Category Sales should be checked$/, { timeout: 20000 }, async function () {
    console.log('Step started');
    await this.page.waitForLoadState('networkidle');
    await this.jetCareerPage.verifySalesCategorySelected();
});
(0, cucumber_1.When)(/^I select Sales among Job Categories$/, async function () {
    await this.jetCareerPage.selectSalesCategory();
});
(0, cucumber_1.When)('I click on Search for Job Title text field', async function () {
    await this.jetCareerPage.clickJobTitleInput();
});
(0, cucumber_1.Then)(/^the Category "Sales" should be selected and the search results number should match$/, async function () {
    const category = await this.jetCareerPage.getSelectedCategory();
    (0, test_1.expect)(category).toContain('Sales');
    const count = await this.jetCareerPage.getResultsCount();
    (0, test_1.expect)(count).not.toBeNull();
});
(0, cucumber_1.Then)(/^the number of the search results should match and category should be "Sales" on all results$/, async function () {
    const categories = await this.jetCareerPage.getAllResultCategories();
    for (const cat of categories) {
        (0, test_1.expect)(cat).toContain('Sales');
    }
});
(0, cucumber_1.Then)('the Sales Category count and the search results count should match', async function () {
    await this.jetCareerPage.compareSalesCategoryCountWithResults();
});
(0, cucumber_1.Then)(/^I should see search results where the location is "([^"]+)" only$/, { timeout: 45000 }, async function (expectedCountry) {
    const jetCareerPage = new JETCareerPage_1.JETCareerPage(this.page);
    // ✅ Wait until job listings and clear filter button are visible
    await jetCareerPage.waitForJobListings();
    // ✅ Get all job location texts
    const locationTexts = await jetCareerPage.getAllJobLocations1();
    console.log('Raw job location texts:', locationTexts);
    if (locationTexts.length === 0) {
        throw new Error(`❌ No job listings found for "${expectedCountry}".`);
    }
    // ✅ Extract country from each location string (last word)
    const countries = locationTexts
        .map(loc => {
        const words = loc.trim().split(/\s+/);
        return words.length > 0 ? words[words.length - 1] : '';
    })
        .filter(Boolean);
    console.log('Extracted countries:', countries);
    const uniqueCountries = new Set(countries);
    console.log('Unique country values:', Array.from(uniqueCountries));
    // ✅ Assertion
    if (uniqueCountries.size !== 1 || !uniqueCountries.has(expectedCountry)) {
        throw new Error(`❌ Expected only "${expectedCountry}" but found: ${Array.from(uniqueCountries).join(', ')}`);
    }
    console.log(`✅ All job locations are from "${expectedCountry}"`);
});
