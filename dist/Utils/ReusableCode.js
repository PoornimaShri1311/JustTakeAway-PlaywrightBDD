"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReusableCode = void 0;
const date_fns_1 = require("date-fns");
const test_1 = require("@playwright/test");
class ReusableCode {
    page;
    constructor(page) {
        this.page = page;
    }
    async clickOnReplacedLocator(locatorInfo, valueToBeReplaced) {
        let locator;
        if (typeof locatorInfo === 'string') {
            const finalSelector = locatorInfo.replace('XXXX', valueToBeReplaced);
            locator = this.page.locator(finalSelector);
        }
        else if ('name' in locatorInfo) {
            const finalSelector = locatorInfo.name.replace('XXXX', valueToBeReplaced);
            locator = this.page.locator(finalSelector);
        }
        else {
            const updatedLocatorInfo = this.replaceInLocator(locatorInfo, valueToBeReplaced);
            locator = this.resolveLocator(updatedLocatorInfo);
        }
        await (0, test_1.expect)(locator).toBeVisible();
        await locator.click();
    }
    async verifyReplacedLocatorElementIsVisible(locatorInfo, valueToBeReplaced) {
        let locator;
        if (typeof locatorInfo === 'string') {
            const finalSelector = locatorInfo.replace('XXXX', valueToBeReplaced);
            locator = this.page.locator(finalSelector);
        }
        else if ('name' in locatorInfo) {
            const finalSelector = locatorInfo.name.replace('XXXX', valueToBeReplaced);
            locator = this.page.locator(finalSelector);
        }
        else {
            const updatedLocatorInfo = this.replaceInLocator(locatorInfo, valueToBeReplaced);
            locator = this.resolveLocator(updatedLocatorInfo);
        }
        await (0, test_1.expect)(locator).toBeVisible();
    }
    replaceInLocator(locatorInfo, value) {
        switch (locatorInfo.type) {
            case 'css':
            case 'xpath':
            case 'placeholder':
            case 'testID':
            case 'text':
                return { ...locatorInfo, value: locatorInfo.value.replace('XXXX', value) };
            case 'role':
                return {
                    ...locatorInfo,
                    value: { name: locatorInfo.value.name.replace('XXXX', value) }
                };
            case 'chained':
                return {
                    type: 'chained',
                    parent: this.replaceInLocator(locatorInfo.parent, value),
                    child: this.replaceInLocator(locatorInfo.child, value)
                };
            default:
                throw new Error(`Unsupported locator type for replacement: ${JSON.stringify(locatorInfo)}`);
        }
    }
    resolveLocator(locatorInfo) {
        switch (locatorInfo.type) {
            case 'css':
                return this.page.locator(locatorInfo.value);
            case 'xpath':
                return this.page.locator(locatorInfo.value);
            case 'text':
                return this.page.getByText(locatorInfo.value);
            case 'placeholder':
                return this.page.getByPlaceholder(locatorInfo.value);
            case 'testID':
                return this.page.getByTestId(locatorInfo.value);
            case 'role':
                return this.page.getByRole(locatorInfo.role, locatorInfo.value);
            case 'chained':
                return this.resolveLocator(locatorInfo.parent).locator(this.resolveLocator(locatorInfo.child));
            default:
                throw new Error(`Unsupported locator type: ${JSON.stringify(locatorInfo)}`);
        }
    }
    async getFormattedDate(daysOutTime) {
        const days = parseInt(daysOutTime, 10);
        if (isNaN(days)) {
            throw new Error(`Invalid daysOutTime: ${daysOutTime}`);
        }
        const futureDate = (0, date_fns_1.addDays)(new Date(), days);
        return (0, date_fns_1.format)(futureDate, 'd MMMM, yyyy'); // e.g., "8 July, 2025"
    }
    async addDaysToDate(date, daysOutTime) {
        const parsedDate = (0, date_fns_1.parse)(date, 'EEE d/M', new Date());
        const days = parseInt(daysOutTime, 10);
        if (isNaN(days)) {
            throw new Error(`Invalid daysOutTime: ${daysOutTime}`);
        }
        const newDate = (0, date_fns_1.addDays)(parsedDate, days);
        return (0, date_fns_1.format)(newDate, 'EEE d/M'); // e.g., "Fri 11/7"
    }
    async changeDateFormat(inputDate) {
        // Parse the input string into a Date object
        const parsedDate = (0, date_fns_1.parse)(inputDate, 'd MMMM, yyyy', new Date());
        // Format as 'Fri 16/5'
        return (0, date_fns_1.format)(parsedDate, 'EEE d/M'); // 'EEE' = short weekday, 'd/M' = day/month
    }
}
exports.ReusableCode = ReusableCode;
