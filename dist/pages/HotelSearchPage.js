"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelSearchPage = void 0;
const test_1 = require("@playwright/test");
const locatorUtils_1 = require("../Utils/locatorUtils");
const HotelSearchPageLocators_1 = require("../locators/HotelSearchPageLocators");
class HotelSearchPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async enterDestination(destination) {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HotelSearchPageLocators_1.HotelSearchPageLocators.txtField_Destination);
        locator.fill(destination);
    }
    async shouldDisplayDestination(destination) {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HotelSearchPageLocators_1.HotelSearchPageLocators.txtField_Destination);
        const destinationText = await locator.inputValue();
        console.log('Destination text:', destinationText);
        await (0, test_1.expect)(locator).toHaveValue(destination);
    }
}
exports.HotelSearchPage = HotelSearchPage;
