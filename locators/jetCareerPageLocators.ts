import { Page } from "@playwright/test";

export const jetCareerPageLocators = {
  jobTitleInput: '//input[@id="typehead"]',
  searchButton: '//button[@id="ph-search-backdrop"]',
  jobListContainer: 'div[data-ph-at-id="jobs-list"]',
  clearAllButton: "//span[contains(text(),'Clear all')]",
  jobLocation: '[data-ph-at-id="job-location"][role="text"]',
  jobLocationPrefix: 'Location :',
  singleJobLocation: 'div[data-ph-at-id="job-location"][role="text"]',
  selectedCategory: '[data-ph-at-id="facet-checkbox"][aria-checked="true"]',
  salesCategoryInput: 'label[for="category_phs_0"] input[type="checkbox"]',
  salesCategoryLink: "//a[@data-ph-at-id='category-link' and @data-ph-at-data-text='Sales']",
  resultsCount: '[data-ph-at-id="results-count"]',
  resultCategory: '[data-ph-at-id="result-category"]',
  salesCategoryCount: "//input[@data-ph-at-text='Sales']/following-sibling::span//span[@class='result-jobs-count au-target']",
  totalResultsCount: "//span[@class='result-count au-target']",
  getCountryCategoryButton: '//span[normalize-space()="Country"]',
  countryCheckbox: (country: string) =>`//label[contains(text(),'${country}')]`,
  salescountryCheckbox: (country: string) =>`//span[contains(text(),'${country}')]`,
};
