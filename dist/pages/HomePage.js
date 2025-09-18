"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const test_1 = require("@playwright/test");
const HomePageLocators_1 = require("../locators/HomePageLocators");
const locatorUtils_1 = require("../Utils/locatorUtils");
const testing_data_json_1 = __importDefault(require("../test-data/testing-data.json"));
class HomePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async gotoHomePage() {
        await this.page.goto(testing_data_json_1.default.urls.homePage);
    }
    async shouldDisplayWhereDoYouWantToGolabel() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators.lbl_WhereDoYouWantToGo);
        await (0, test_1.expect)(locator).toBeVisible();
    }
    async shouldDisplayWhereDoYouWantToStaylabel() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators_Stays.lbl_WhereDoYouWantToStay);
        await (0, test_1.expect)(locator).toBeVisible();
    }
    async shouldDisplayCarHireslabel() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators_Car.lbl_CarHires);
        await (0, test_1.expect)(locator).toBeVisible();
    }
    async clickStaysIcon() {
        await (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators.icon_Stays).click();
    }
    async clickCarRentalIcon() {
        await (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators.icon_CarRental).click();
    }
    async shouldDisplayFlightIconAsSelected() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators.icon_Flight);
        const ariaCurrent = await locator.getAttribute('aria-current');
        console.log('Flight icon aria-current attribute:', ariaCurrent);
        await (0, test_1.expect)(locator).toHaveAttribute('aria-current', 'page');
    }
    async shouldDisplayStaysIconAsSelected() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators.icon_Stays);
        await (0, test_1.expect)(locator).toHaveAttribute('aria-current', 'page');
    }
    async shouldDisplayCarRentalIconAsSelected() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators.icon_CarRental);
        await (0, test_1.expect)(locator).toHaveAttribute('aria-current', 'page');
    }
    async shouldNotDisplayFlightIconAsSelected() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators.icon_Flight);
        await (0, test_1.expect)(locator).not.toHaveAttribute('aria-current', 'page');
    }
    async shouldNotDisplayStaysIconAsSelected() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators.icon_Stays);
        await (0, test_1.expect)(locator).not.toHaveAttribute('aria-current', 'page');
    }
    async shouldNotDisplayCarRentalIconAsSelected() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators.icon_CarRental);
        await (0, test_1.expect)(locator).not.toHaveAttribute('aria-current', 'page');
    }
    async clickAboutUsLink() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators_Footers.link_About);
        await locator.click();
    }
    async clickPressLink() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators_Footers.link_Press);
        await locator.click();
    }
    async clickHelpFAQLink() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, HomePageLocators_1.HomePageLocators_Footers.link_HelpFAQ);
        await locator.click();
    }
}
exports.HomePage = HomePage;
