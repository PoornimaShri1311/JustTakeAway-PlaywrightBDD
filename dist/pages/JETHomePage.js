"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JETHomePage = void 0;
const test_1 = require("@playwright/test");
class JETHomePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async shouldDisplayJETHomeHeader(expectedLabel) {
        const locator = this.page.getByRole('heading', { name: new RegExp(expectedLabel) });
        await (0, test_1.expect)(locator).toBeVisible();
        const actualText = await locator.textContent();
        if (!actualText?.includes(expectedLabel)) {
            throw new Error(`Expected header to include '${expectedLabel}', but got '${actualText}'`);
        }
    }
}
exports.JETHomePage = JETHomePage;
