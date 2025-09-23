import { Given, When, Then, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { customWorld } from '../support/customWorld';
import { jetCareerPage } from '../pages/jetCareerPage';
import { jetCareerAssertions } from '../assertions/jetCareerAssertions';
import { ITestCaseHookParameter } from '@cucumber/cucumber';
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';
import logger from '../support/logger';

// Hook: initialize page before each scenario
Before(async function (this: customWorld, testCase: ITestCaseHookParameter) {
  this.jetCareerPage = new jetCareerPage(this.page!);
});

setDefaultTimeout(PLAYWRIGHT_TIMEOUTS.DEAFAULT_TIMEOUT); // global step timeout


// 🔹 Action Steps
When(/^I enter "([^"]+)" in the Job Title search box$/, async function (this: customWorld, jobTitle: string) {
    await this.jetCareerPage!.enterJobTitle(jobTitle);
});

When(/^I click the Search button$/, async function (this: customWorld) {
    await this.jetCareerPage!.clickSearchButton();
});

When(/^I click on the Country category$/, { timeout: PLAYWRIGHT_TIMEOUTS.PAGE_TIMEOUT }, async function (this: customWorld) {
  
  await this.jetCareerPage!.clickCountryCategory();
});

When(/^I select the "([^"]+)" checkbox$/, { timeout: PLAYWRIGHT_TIMEOUTS.PAGE_TIMEOUT }, async function (this: customWorld, country: string) {
  
  await this.jetCareerPage!.selectCountryCheckbox(country);
});

When(/^I select the "([^"]+)" checkbox in Sales Page$/, { timeout: PLAYWRIGHT_TIMEOUTS.PAGE_TIMEOUT }, async function (this: customWorld, country: string) {
  
  await this.jetCareerPage!.selectSalesCountryCheckbox(country);
});

When(/^I select Sales among Job Categories$/, async function (this: customWorld) {
 
  await this.jetCareerPage!.selectSalesCategory();
});

When('I click on Search for Job Title text field', async function (this: customWorld) {
 
  await this.jetCareerPage!.clickJobTitleInput();
});

// 🔹 Assertion Steps
Then(/^I should see search results from multiple locations$/, async function (this: customWorld) {
   
  await new jetCareerAssertions(this.jetCareerPage!).assertMultipleCountriesInResults();
});

Then(/^I should see search results where the location is "([^"]+)" only$/, async function (this: customWorld, expectedCountry: string) {
  logger.info(`[Assertion] Verifying search results are only from: ${expectedCountry}`);
  await new jetCareerAssertions(this.jetCareerPage!).assertResultsFromCountry(expectedCountry);
});

Then(/^the Category Sales should be checked$/, async function (this: customWorld) {
 
  await new jetCareerAssertions(this.jetCareerPage!).assertSalesCategorySelected();
});

Then(/^the Category "Sales" should be selected and the search results number should match$/, async function (this: customWorld) {
  logger.info(`[Assertion] Verifying Sales category is selected and result count matches`);
  await new jetCareerAssertions(this.jetCareerPage!).assertSalesCategoryShown();
});

Then(/^the number of the search results should match and category should be "Sales" on all results$/, async function (this: customWorld) {
 
  await new jetCareerAssertions(this.jetCareerPage!).assertAllResultsAreSales();
});

Then('the Sales Category count and the search results count should match', async function (this: customWorld) {
  logger.info(`[Assertion] Verifying Sales Category count matches search results count`);
  await new jetCareerAssertions(this.jetCareerPage!).assertSalesCategoryCountMatchesResults();
});

When('I verify Job Title field is visible', async function (this: customWorld) {
  
  await this.jetCareerPage!.verifyJobTitleInputVisible();
});

When('I verify Job Title field is enabled', async function (this: customWorld) {
    await this.jetCareerPage!.verifyJobTitleInputEnabled();
});
