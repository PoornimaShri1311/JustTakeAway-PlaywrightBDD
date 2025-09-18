"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpFAQPage = void 0;
const test_1 = require("@playwright/test");
const locatorUtils_1 = require("../Utils/locatorUtils");
const HelpFAQPageLocators_1 = require("../locators/HelpFAQPageLocators");
class HelpFAQPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async shouldDisplayHowCanWeHelpHeader() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HelpFAQPageLocators_1.HelpFAQPageLocators.header_HowCanWeHelp);
        await (0, test_1.expect)(locator).toBeVisible();
    }
}
exports.HelpFAQPage = HelpFAQPage;
