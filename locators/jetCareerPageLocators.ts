import { Page } from "@playwright/test";

/**
 * Locators for elements on the Jet Career Page.
 * Each property corresponds to a selector or a function returning a selector for dynamic elements.
 */
export const jetCareerPageLocators = {
  /** Selector for the job title input field */
  jobTitleInput: '//input[@id="typehead"]',
  /** Selector for the search button */
  searchButton: '//button[@id="ph-search-backdrop"]',
  /** Selector for the job list container */
  jobListContainer: 'div[data-ph-at-id="jobs-list"]',
  /** Selector for the clear all button */
  clearAllButton: "//span[contains(text(),'Clear all')]",
  /** Selector for job location elements */
  jobLocation: '[data-ph-at-id="job-location"][role="text"]',
  /** Prefix for job location text */
  jobLocationPrefix: 'Location :',
  /** Selector for a single job location element */
  singleJobLocation: 'div[data-ph-at-id="job-location"][role="text"]',
  /** Selector for the selected category */
  selectedCategory: '[data-ph-at-id="facet-checkbox"][aria-checked="true"]',
  /** Selector for the Sales category input */
  salesCategoryInput: 'label[for="category_phs_0"] input[type="checkbox"]',
  /** Selector for the Sales category link */
  salesCategoryLink: "//a[@data-ph-at-id='category-link' and @data-ph-at-data-text='Sales']",
  /** Selector for the results count */
  resultsCount: '[data-ph-at-id="results-count"]',
  /** Selector for the result category */
  resultCategory: '[data-ph-at-id="result-category"]',
  /** Selector for the Sales category count */
  salesCategoryCount: "//input[@data-ph-at-text='Sales']/following-sibling::span//span[@class='result-jobs-count au-target']",
  /** Selector for the total results count */
  totalResultsCount: "//span[@class='result-count au-target']",
  /** Selector for the country category button */
  getCountryCategoryButton: '//span[normalize-space()="Country"]',
  /** Returns a selector for a country checkbox by country name */
  countryCheckbox: (country: string) =>`//label[contains(text(),'${country}')]`,
  /** Returns a selector for a sales country checkbox by country name */
  salescountryCheckbox: (country: string) =>`//span[contains(text(),'${country}')]`,
};
