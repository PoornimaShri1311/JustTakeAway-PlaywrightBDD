"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JETCareerPage = void 0;
const test_1 = require("@playwright/test");
const JETCareerPageLocators_1 = require("../locators/JETCareerPageLocators");
class JETCareerPage {
    page;
    async getAllJobLocations() {
        // Get all job location elements
        const elements = await this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.jobLocation).elementHandles();
        // Ignore the first element, consider only the rest
        const filteredElements = elements.slice(1);
        // Extract text using getByText if available, else fallback to textContent
        const locationTexts = [];
        for (const el of filteredElements) {
            let text = await el.textContent();
            if (!text) {
                // Try to get text by location if possible
                try {
                    text = await this.page.getByText('Location :').textContent();
                }
                catch { }
            }
            if (text)
                locationTexts.push(text);
        }
        debugger;
        console.log('Raw job location texts (from getAllJobLocations):', locationTexts);
        return locationTexts;
    }
    constructor(page) {
        this.page = page;
    }
    async enterJobTitle(jobTitle) {
        await this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.jobTitleInput).waitFor({ state: 'visible' });
        await this.page.fill(JETCareerPageLocators_1.JETCareerPageLocators.jobTitleInput, jobTitle);
    }
    async clickSearchButton() {
        const searchButton = this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.searchButton);
        await searchButton.waitFor({ state: 'visible' });
        await searchButton.click();
    }
    async clickCountryCategory() {
        // Get the locator using the function from your locator file
        const countryCategoryButton = JETCareerPageLocators_1.JETCareerPageLocators.getCountryCategoryButton(this.page);
        // Wait for the element to be attached to the DOM
        await countryCategoryButton.waitFor({ state: 'attached', timeout: 10000 });
        // Scroll into view in case it's offscreen
        await countryCategoryButton.scrollIntoViewIfNeeded();
        // Wait until it's visible and enabled
        await countryCategoryButton.waitFor({ state: 'visible', timeout: 10000 });
        // Ensure it's not covered or disabled
        await (0, test_1.expect)(countryCategoryButton).toBeVisible();
        await (0, test_1.expect)(countryCategoryButton).toBeEnabled();
        // Click the button
        console.log('Attempting to click Country category');
        await countryCategoryButton.click();
        console.log('Clicked Country category');
    }
    async clickJobTitleInput() {
        const jobTitleInput = this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.jobTitleInput);
        await jobTitleInput.waitFor({ state: 'visible' });
        await jobTitleInput.click();
    }
    async selectCountryCheckbox(country) {
        const checkboxLocator = JETCareerPageLocators_1.JETCareerPageLocators.countryCheckbox(country);
        const countryCheckbox = this.page.locator(checkboxLocator);
        // Wait for checkbox to be attached and visible
        await countryCheckbox.waitFor({ state: 'attached', timeout: 15000 });
        await countryCheckbox.scrollIntoViewIfNeeded();
        await countryCheckbox.waitFor({ state: 'visible', timeout: 15000 });
        // Confirm it's interactable
        await (0, test_1.expect)(countryCheckbox).toBeVisible();
        await (0, test_1.expect)(countryCheckbox).toBeEnabled();
        // Click the checkbox
        await this.page.waitForTimeout(500); // Allow animation/render
        await countryCheckbox.click();
        await this.page.waitForTimeout(500); // Allow filter to apply
        console.log(`✅ Selected country checkbox: ${country}`);
    }
    async selectSalesCountryCheckbox(country) {
        const checkboxLocator = JETCareerPageLocators_1.JETCareerPageLocators.salescountryCheckbox(country);
        const countryCheckbox = this.page.locator(checkboxLocator);
        // Wait for checkbox to be attached and visible
        await countryCheckbox.waitFor({ state: 'attached', timeout: 15000 });
        await countryCheckbox.scrollIntoViewIfNeeded();
        await countryCheckbox.waitFor({ state: 'visible', timeout: 15000 });
        // Confirm it's interactable
        await (0, test_1.expect)(countryCheckbox).toBeVisible();
        await (0, test_1.expect)(countryCheckbox).toBeEnabled();
        // Click the checkbox
        await this.page.waitForTimeout(500); // Allow animation/render
        await countryCheckbox.click();
        await this.page.waitForTimeout(500); // Allow filter to apply
        console.log(`✅ Selected country checkbox: ${country}`);
    }
    async getNetherlandsResults() {
        const elements = await this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.netherlandsResults).elementHandles();
        return Promise.all(elements.map(async (el) => (await el.textContent()) || ""));
    }
    async selectSalesCategory() {
        const salesLink = this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.salesCategoryLink);
        await salesLink.waitFor({ state: 'visible', timeout: 15000 });
        await salesLink.click();
    }
    //   async verifySalesCategorySelected(): Promise<void> {
    //     debugger;
    //     await this.page.pause();
    //     // Wait for page to finish loading after navigation
    //     await this.page.waitForLoadState('networkidle');
    //     await this.page.pause();
    //     const salesCategory = this.page.locator(JETCareerPageLocators.selectedCategory);
    //     // Wait for the element to be attached
    //     await salesCategory.waitFor({ state: 'attached', timeout: 15000 });
    //     await salesCategory.scrollIntoViewIfNeeded();
    //     await salesCategory.waitFor({ state: 'visible', timeout: 5000 });
    //     // Verify aria-checked attribute is 'true'
    //     await pwExpect(salesCategory).toHaveAttribute('aria-checked', 'true');
    //     console.log('✅ Sales category is correctly selected.');
    // }
    async verifySalesCategorySelected() {
        // Target the label first
        const salesCategoryLabel = this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.salesCategoryLabel);
        await salesCategoryLabel.waitFor({ state: 'attached', timeout: 15000 });
        await salesCategoryLabel.scrollIntoViewIfNeeded();
        // Then target the input
        const salesCategoryInput = this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.salesCategoryInput);
        await (0, test_1.expect)(salesCategoryInput).toBeChecked({ timeout: 15000 });
        console.log('✅ Sales category is correctly selected.');
    }
    async getSelectedCategory() {
        const selected = this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.selectedCategory);
        await selected.waitFor({ state: 'visible' });
        return await selected.textContent();
    }
    async getResultsCount() {
        const count = this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.resultsCount);
        await count.waitFor({ state: 'visible' });
        return await count.textContent();
    }
    async getAllResultCategories() {
        const categories = this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.resultCategory);
        const handles = await categories.elementHandles();
        return Promise.all(handles.map(async (el) => await el.textContent()));
    }
    async compareSalesCategoryCountWithResults() {
        const salesCountLocator = this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.salesCategoryCount);
        const resultsCountLocator = this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.totalResultsCount);
        await salesCountLocator.waitFor({ state: 'visible', timeout: 10000 });
        await resultsCountLocator.waitFor({ state: 'visible', timeout: 10000 });
        const rawSalesText = await salesCountLocator.textContent();
        const rawResultsText = await resultsCountLocator.textContent();
        if (!rawSalesText || !rawResultsText) {
            throw new Error('Could not retrieve one or both counts for comparison');
        }
        // 🧼 Clean up the sales count string
        const cleanedSalesText = rawSalesText.replace(/[^\d]/g, '').trim();
        const cleanedResultsText = rawResultsText.replace(/[^\d]/g, '').trim();
        const salesCount = parseInt(cleanedSalesText, 10);
        const resultsCount = parseInt(cleanedResultsText, 10);
        if (isNaN(salesCount) || isNaN(resultsCount)) {
            throw new Error(`Invalid count values. Sales: "${rawSalesText}", Results: "${rawResultsText}"`);
        }
        if (salesCount !== resultsCount) {
            throw new Error(`Mismatch in counts: Sales category shows ${salesCount}, but search results show ${resultsCount}`);
        }
        console.log(`✅ Counts match: ${salesCount} results in Sales category and search results`);
    }
    async verifySearchResultsFromMultipleLocations() {
        // Locate all job location elements
        const locationElements = this.page.locator('[data-ph-at-id="job-location"] >> role=text');
        // Get all location strings
        const locationTexts = await locationElements.allTextContents();
        console.log('Raw location texts:', locationTexts);
        // Extract country from each location (last part after comma)
        const countries = locationTexts.map(location => {
            const parts = location.split(',').map(part => part.trim());
            return parts[parts.length - 1]; // Last part is the country
        });
        // Get unique countries
        const uniqueCountries = Array.from(new Set(countries));
        console.log('Extracted countries:', countries);
        console.log('Unique countries:', uniqueCountries);
        // Assert that there are multiple unique countries
        if (uniqueCountries.length <= 1) {
            throw new Error(`❌ Only one unique country found: ${uniqueCountries[0]}`);
        }
        console.log(`✅ Multiple countries found: ${uniqueCountries.join(', ')}`);
    }
    async waitForJobListings() {
        // Wait for the first job list container to be visible
        await this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.jobListContainer).first().waitFor({ state: 'visible', timeout: 15000 });
        // Wait for Clear All button
        await this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.clearAllButton).waitFor({ state: 'visible', timeout: 10000 });
    }
    async getAllJobLocations1() {
        const count = await this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.singleJobLocation).count();
        if (count === 0)
            return [];
        const locations = [];
        for (let i = 0; i < count; i++) {
            const text = await this.page.locator(JETCareerPageLocators_1.JETCareerPageLocators.singleJobLocation).nth(i).innerText(); // innerText ignores hidden span text
            // Remove the "Location :" prefix if needed
            locations.push(text.replace('Location :', '').trim());
        }
        return locations;
    }
}
exports.JETCareerPage = JETCareerPage;
