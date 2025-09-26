import { Given, When, Then, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { customWorld } from '../support/customWorld';
import { jetCareerPage } from '../pages/jetCareerPage';
import { jetCareerAssertions } from '../assertions/jetCareerAssertions';
import { ITestCaseHookParameter } from '@cucumber/cucumber';
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';
import logger from '../support/logger';

/**
 * Hook: initialize page before each scenario
 * @param this customWorld instance
 * @param testCase Cucumber test case parameter
 */
Before(async function (this: customWorld, testCase: ITestCaseHookParameter) {
  this.jetCareerPage = new jetCareerPage(this.page!);
});

setDefaultTimeout(PLAYWRIGHT_TIMEOUTS.DEAFAULT_TIMEOUT); // global step timeout

//  Action Steps

/**
 * Step: Enter a job title in the search box
 * @param this customWorld instance
 * @param jobTitle Job title to enter
 */
When(/^I enter "([^"]+)" in the Job Title search box$/, async function (this: customWorld, jobTitle: string) {
    await this.jetCareerPage!.enterJobTitle(jobTitle);
});

/**
 * Step: Click the Search button
 * @param this customWorld instance
 */
When(/^I click the Search button$/, async function (this: customWorld) {
    await this.jetCareerPage!.clickSearchButton();
});

/**
 * Step: Click on the Country category
 * @param this customWorld instance
 */
When(/^I click on the Country category$/, { timeout: PLAYWRIGHT_TIMEOUTS.PAGE_TIMEOUT }, async function (this: customWorld) {
  await this.jetCareerPage!.clickCountryCategory();
});

/**
 * Step: Select a country checkbox
 * @param this customWorld instance
 * @param country Country to select
 */
When(/^I select the "([^"]+)" checkbox$/, { timeout: PLAYWRIGHT_TIMEOUTS.PAGE_TIMEOUT }, async function (this: customWorld, country: string) {
  await this.jetCareerPage!.selectCountryCheckbox(country);
});

/**
 * Step: Select a country checkbox in Sales Page
 * @param this customWorld instance
 * @param country Country to select
 */
When(/^I select the "([^"]+)" checkbox in Sales Page$/, { timeout: PLAYWRIGHT_TIMEOUTS.PAGE_TIMEOUT }, async function (this: customWorld, country: string) {
  await this.jetCareerPage!.selectSalesCountryCheckbox(country);
});

/**
 * Step: Select Sales among Job Categories
 * @param this customWorld instance
 */
When(/^I select Sales among Job Categories$/, async function (this: customWorld) {
  await this.jetCareerPage!.selectSalesCategory();
});

/**
 * Step: Click on Search for Job Title text field
 * @param this customWorld instance
 */
When('I click on Search for Job Title text field', async function (this: customWorld) {
  await this.jetCareerPage!.clickJobTitleInput();
});

//  Assertion Steps

/**
 * Step: Assert search results are from multiple locations
 * @param this customWorld instance
 */
Then(/^I should see search results from multiple locations$/, async function (this: customWorld) {
  await new jetCareerAssertions(this.jetCareerPage!).assertMultipleCountriesInResults();
});

/**
 * Step: Assert search results are only from a specific location
 * @param this customWorld instance
 * @param expectedCountry Expected country in results
 */
Then(/^I should see search results where the location is "([^"]+)" only$/, async function (this: customWorld, expectedCountry: string) {
  logger.info(`[Assertion] Verifying search results are only from: ${expectedCountry}`);
  await new jetCareerAssertions(this.jetCareerPage!).assertResultsFromCountry(expectedCountry);
});


/**
 * Step: Assert Sales category is checked
 * @param this customWorld instance
 */
Then(/^the Category Sales should be checked$/, async function (this: customWorld) {
  await new jetCareerAssertions(this.jetCareerPage!).assertSalesCategorySelected();
});

/**
 * Step: Assert Sales category is selected and result count matches
 * @param this customWorld instance
 */
Then(/^the Category "Sales" should be selected and the search results number should match$/, async function (this: customWorld) {
  logger.info(`[Assertion] Verifying Sales category is selected and result count matches`);
  await new jetCareerAssertions(this.jetCareerPage!).assertSalesCategoryShown();
});

/**
 * Step: Assert all search results are Sales category
 * @param this customWorld instance
 */
Then(/^the number of the search results should match and category should be "Sales" on all results$/, async function (this: customWorld) {
  await new jetCareerAssertions(this.jetCareerPage!).assertAllResultsAreSales();
});

/**
 * Step: Assert Sales Category count matches search results count
 * @param this customWorld instance
 */
Then('the Sales Category count and the search results count should match', async function (this: customWorld) {
  logger.info(`[Assertion] Verifying Sales Category count matches search results count`);
  await new jetCareerAssertions(this.jetCareerPage!).assertSalesCategoryCountMatchesResults();
});

/**
 * Step: Verify Job Title field is visible
 * @param this customWorld instance
 */
When('I verify Job Title field is visible', async function (this: customWorld) {
  await this.jetCareerPage!.verifyJobTitleInputVisible();
});

/**
 * Step: Verify Job Title field is enabled
 * @param this customWorld instance
 */
When('I verify Job Title field is enabled', async function (this: customWorld) {
  await this.jetCareerPage!.verifyJobTitleInputEnabled();
});
