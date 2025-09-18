"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSearchPage = void 0;
const test_1 = require("@playwright/test");
const locatorUtils_1 = require("../Utils/locatorUtils");
const ReusableCode_1 = require("../Utils/ReusableCode");
const FlightSearchPageLocators_1 = require("../locators/FlightSearchPageLocators");
class FlightSearchPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async clickFlightTripDropDown() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.dropDown_FlightTripType);
        await locator.click();
    }
    async clickFlightTripTypeOneWay() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.dropDownValues_OneWay_FlightTripType);
        await locator.click();
    }
    async clickFlightTripTypeMultiCity() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.dropDownValues_MultiCity_FlightTripType);
        await locator.click();
    }
    async shouldDisplayFlightTripType(tripType) {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.dropDown_FlightTripType);
        const flightTripText = await locator.textContent();
        console.log('Flight Trip Type Drop Down aria-selected text:', flightTripText);
        await (0, test_1.expect)(locator).toHaveText(tripType);
    }
    async removeAlreadySelectedFlightOrigin() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.iconCross_RemoveOrigin);
        await locator.click();
    }
    async selectFlightOrigin(flightOrigin) {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.txtField_FlightOrigin);
        await locator.click();
        await locator.fill(flightOrigin);
        const reusableCode = new ReusableCode_1.ReusableCode(this.page);
        await reusableCode.clickOnReplacedLocator(FlightSearchPageLocators_1.FlightSearchPageLocators.txtDropDownValues_Origin_Any, flightOrigin);
    }
    async selectFlightDestination(flightDestination) {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.txtField_FlightDestination);
        await locator.click();
        await locator.fill(flightDestination);
        const reusableCode = new ReusableCode_1.ReusableCode(this.page);
        await reusableCode.clickOnReplacedLocator(FlightSearchPageLocators_1.FlightSearchPageLocators.txtDropDownValues_Destination_Any, flightDestination);
    }
    async selectCheckInDate(checkInDate) {
        const reusableCode = new ReusableCode_1.ReusableCode(this.page);
        await reusableCode.clickOnReplacedLocator(FlightSearchPageLocators_1.FlightSearchPageLocators.txt_DateFromCalendar_Any, checkInDate);
    }
    async selectCheckOutDate(checkOutDate) {
        const reusableCode = new ReusableCode_1.ReusableCode(this.page);
        await reusableCode.clickOnReplacedLocator(FlightSearchPageLocators_1.FlightSearchPageLocators.txt_DateFromCalendar_Any, checkOutDate);
    }
    async selectAdults(noOfAdults) {
        for (let i = 0; i < noOfAdults; i++) {
            const numberOfAdultsAlreadySelectedStr = await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.txt_NumberOfAdults).getAttribute('value');
            const numberOfAdultsAlreadySelected = Number(numberOfAdultsAlreadySelectedStr) || 0;
            if (numberOfAdultsAlreadySelected === noOfAdults) {
                break;
            }
            else if (numberOfAdultsAlreadySelected > noOfAdults) {
                await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.icon_DecrementAdults).click();
            }
            else {
                await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.icon_IncrementAdults).click();
            }
        }
    }
    async selectChildrens(noOfChilds) {
        const numberOfChildsAlreadySelectedStr = await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.txt_NumberOfChildrens).getAttribute('value');
        const numberOfChildsAlreadySelected = Number(numberOfChildsAlreadySelectedStr) || 0;
        for (let i = 0; i < noOfChilds; i++) {
            if (+numberOfChildsAlreadySelected == noOfChilds) {
                break;
            }
            else if (+numberOfChildsAlreadySelected > noOfChilds) {
                await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.icon_DecrementChildren).click();
            }
            else {
                await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.icon_IncrementChildren).click();
            }
        }
    }
    async shouldDisplayTotalTravellersCount(totalTravellers) {
        const actualTravellerCount = await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.txt_TravellersDetails).textContent();
        console.log('Total Travellers Count:', actualTravellerCount);
        await (0, test_1.expect)(actualTravellerCount).toContain(totalTravellers);
    }
    async shouldDisplayFlightOrigin(flightOrigin) {
        const actualFlightOrigin = await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.txt_FlightOrigin).textContent();
        console.log('Flight Origin:', actualFlightOrigin);
        await (0, test_1.expect)(actualFlightOrigin).toContain(flightOrigin);
    }
    async shouldDisplayFlightDestination(flightDestination) {
        const actualFlightDestination = await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.txt_FlightDestination).textContent();
        console.log('Flight Destination:', actualFlightDestination);
        await (0, test_1.expect)(actualFlightDestination).toContain(flightDestination);
    }
    async shouldDisplayFlightCheckInDate(checkInDate) {
        const actualCheckInDate = await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.txt_CheckInDate).textContent();
        console.log('Flight Check-In Date:', actualCheckInDate);
        await (0, test_1.expect)(actualCheckInDate).toContain(checkInDate);
    }
    async shouldDisplayFlightCheckOutDate(checkOutDate) {
        const actualCheckOutDate = await (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.txt_CheckOutDate).textContent();
        console.log('Flight Check-Out Date:', actualCheckOutDate);
        await (0, test_1.expect)(actualCheckOutDate).toContain(checkOutDate);
    }
    async clickDirectFlightCheckBox() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.chkBox_DirectFlights);
        await locator.click();
    }
    async clickOtherSearchEngineCheckBox() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.chkBox_OtherSearchEngineOptions);
        await locator.click();
    }
    async clickSearchFlightsButton() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.btn_SearchFlights);
        locator.click();
    }
    async shouldDisplayDirectFlightCheckBoxStatusAs(isChecked) {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.chkBox_DirectFlights);
        const isCheckedValue = await locator.isChecked();
        console.log('Direct Flight CheckBox:', isCheckedValue);
        if (isChecked.toLowerCase() === 'checked') {
            await (0, test_1.expect)(locator).toBeChecked();
        }
        else {
            await (0, test_1.expect)(locator).not.toBeChecked();
        }
    }
    async shouldDisplayOtherSearchEngineCheckBoxStatusAs(isChecked) {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightSearchPageLocators_1.FlightSearchPageLocators.chkBox_OtherSearchEngineOptions);
        const isCheckedValue = await locator.isChecked();
        console.log('Other Search Engine CheckBox:', isCheckedValue);
        if (isChecked.toLowerCase() === 'checked') {
            await (0, test_1.expect)(locator).toBeChecked();
        }
        else {
            await (0, test_1.expect)(locator).not.toBeChecked();
        }
    }
}
exports.FlightSearchPage = FlightSearchPage;
