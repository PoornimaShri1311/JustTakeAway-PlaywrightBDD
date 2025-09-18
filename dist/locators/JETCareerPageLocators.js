"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JETCareerPageLocators = void 0;
exports.JETCareerPageLocators = {
    getCountryCategoryButton: (page) => page.getByRole('button', { name: 'Country' }),
    jobTitleInput: '//input[@id="typehead"]',
    searchButton: '//button[@id="ph-search-backdrop"]',
    salesCategoryLink: "//a[@data-ph-at-id='category-link' and @data-ph-at-data-text='Sales']",
    selectedCategory: '//input[@id="category_phs_0"]',
    // Category Sales checkbox
    salesCategoryLabel: 'label[for="category_phs_0"]',
    salesCategoryInput: 'label[for="category_phs_0"] input[type="checkbox"]',
    countryCheckbox: (country) => `//label[contains(text(),'${country}')]`,
    salescountryCheckbox: (country) => `//span[contains(text(),'${country}')]`,
    netherlandsResults: '//div[contains(text(),"Netherlands")]',
    jobLocation: '[data-ph-at-id="job-location"][role="text"]',
    singleJobLocation: 'div[data-ph-at-id="job-location"][role="text"]',
    resultsCount: '.results-count',
    resultCategory: '.result-category',
    salesCategoryCount: "//input[@data-ph-at-text='Sales']/following-sibling::span//span[@class='result-jobs-count au-target']",
    totalResultsCount: "//span[@class='result-count au-target']",
    clearAllButton: "//span[contains(text(),'Clear all')]",
    jobListContainer: 'div[data-ph-at-id="jobs-list"]',
};
