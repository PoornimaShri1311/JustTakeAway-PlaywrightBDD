"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PressContactPage = void 0;
const test_1 = require("@playwright/test");
const locatorUtils_1 = require("../Utils/locatorUtils");
const PressContactPageLocators_1 = require("../locators/PressContactPageLocators");
class PressContactPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async shouldDisplayContactUsHeader() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, PressContactPageLocators_1.PressContactPageLocators.header_ContactUs);
        await (0, test_1.expect)(locator).toBeVisible();
    }
}
exports.PressContactPage = PressContactPage;
