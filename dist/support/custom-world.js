"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomWorld = void 0;
const playwright_1 = require("playwright");
const cucumber_1 = require("@cucumber/cucumber");
class CustomWorld extends cucumber_1.World {
    browser;
    context;
    page;
    jetCareerPage;
    hotelDestination = "";
    flightCheckInDate = "";
    flightCheckOutDate = "";
    flightDaysOut = "";
    constructor(options) {
        super(options);
    }
    // ✅ Call this from Before hook to initialize browser & page
    async initBrowser() {
        this.browser = await playwright_1.chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        // ✅ Set global timeouts here
        this.page.setDefaultTimeout(30000); // Applies to all actions and expect
        this.page.setDefaultNavigationTimeout(30000); // Applies to page.goto, etc.
    }
    async closeBrowser() {
        await this.browser?.close();
    }
}
exports.CustomWorld = CustomWorld;
(0, cucumber_1.setWorldConstructor)(CustomWorld);
