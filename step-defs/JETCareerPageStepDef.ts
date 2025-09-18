import { Given, When, Then, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { JETCareerPage } from '../pages/JETCareerPage';
import { JETCareerAssertions } from '../assertions/JETCareerAssertions';
import { ITestCaseHookParameter } from '@cucumber/cucumber';

// Hook: initialize page before each scenario
Before(async function (this: CustomWorld, testCase: ITestCaseHookParameter) {
  this.jetCareerPage = new JETCareerPage(this.page!);
});

setDefaultTimeout(30000); // global step timeout


// 🔹 Action Steps
When(/^I enter "([^"]+)" in the Job Title search box$/, async function (this: CustomWorld, jobTitle: string) {
  console.log(`[Step] Entering job title: ${jobTitle}`);
  await this.jetCareerPage!.enterJobTitle(jobTitle);
});

When(/^I click the Search button$/, async function (this: CustomWorld) {
  console.log(`[Step] Clicking the Search button`);
  await this.jetCareerPage!.clickSearchButton();
});

When(/^I click on the Country category$/, { timeout: 20000 }, async function (this: CustomWorld) {
  console.log(`[Step] Clicking on the Country category`);
  await this.jetCareerPage!.clickCountryCategory();
});

When(/^I select the "([^"]+)" checkbox$/, { timeout: 20000 }, async function (this: CustomWorld, country: string) {
  console.log(`[Step] Selecting country checkbox: ${country}`);
  await this.jetCareerPage!.selectCountryCheckbox(country);
});

When(/^I select the "([^"]+)" checkbox in Sales Page$/, { timeout: 20000 }, async function (this: CustomWorld, country: string) {
  console.log(`[Step] Selecting country checkbox in Sales Page: ${country}`);
  await this.jetCareerPage!.selectSalesCountryCheckbox(country);
});

When(/^I select Sales among Job Categories$/, async function (this: CustomWorld) {
  console.log(`[Step] Selecting Sales category`);
  await this.jetCareerPage!.selectSalesCategory();
});

When('I click on Search for Job Title text field', async function (this: CustomWorld) {
  console.log(`[Step] Clicking on Job Title input field`);
  await this.jetCareerPage!.clickJobTitleInput();
});

// 🔹 Assertion Steps
Then(/^I should see search results from multiple locations$/, async function (this: CustomWorld) {
    console.log(`[Assertion] Verifying multiple countries in search results`);
  await new JETCareerAssertions(this.jetCareerPage!).assertMultipleCountriesInResults();
});

Then(/^I should see search results where the location is "([^"]+)" only$/, async function (this: CustomWorld, expectedCountry: string) {
  console.log(`[Assertion] Verifying search results are only from: ${expectedCountry}`);
  await new JETCareerAssertions(this.jetCareerPage!).assertResultsFromCountry(expectedCountry);
});

Then(/^the Category Sales should be checked$/, async function (this: CustomWorld) {
  console.log(`[Assertion] Verifying Sales category is selected`);
  await new JETCareerAssertions(this.jetCareerPage!).assertSalesCategorySelected();
});

Then(/^the Category "Sales" should be selected and the search results number should match$/, async function (this: CustomWorld) {
  console.log(`[Assertion] Verifying Sales category is selected and result count matches`);
  await new JETCareerAssertions(this.jetCareerPage!).assertSalesCategoryShown();
});

Then(/^the number of the search results should match and category should be "Sales" on all results$/, async function (this: CustomWorld) {
  console.log(`[Assertion] Verifying all results are categorized as Sales`);
  await new JETCareerAssertions(this.jetCareerPage!).assertAllResultsAreSales();
});

Then('the Sales Category count and the search results count should match', async function (this: CustomWorld) {
  console.log(`[Assertion] Verifying Sales Category count matches search results count`);
  await new JETCareerAssertions(this.jetCareerPage!).assertSalesCategoryCountMatchesResults();
});

When('I verify Job Title field is visible', async function (this: CustomWorld) {
  console.log(`[Step] Verifying Job Title field is visible`);
  await this.jetCareerPage!.verifyJobTitleInputVisible();
});

When('I verify Job Title field is enabled', async function (this: CustomWorld) {
  console.log(`[Step] Verifying Job Title field is enabled`);
  await this.jetCareerPage!.verifyJobTitleInputEnabled();
});
