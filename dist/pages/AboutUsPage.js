"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutUsPage = void 0;
const test_1 = require("@playwright/test");
const AboutUsPageLocators_1 = require("../locators/AboutUsPageLocators");
const locatorUtils_1 = require("../Utils/locatorUtils");
class AboutUsPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async shouldDisplayAboutUsHeader() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, AboutUsPageLocators_1.AboutUsPageLocators.header_AboutUs);
        await (0, test_1.expect)(locator).toBeVisible();
    }
}
exports.AboutUsPage = AboutUsPage;
