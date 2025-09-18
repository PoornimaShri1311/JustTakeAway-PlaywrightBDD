"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightResultPage = void 0;
const test_1 = require("@playwright/test");
const locatorUtils_1 = require("../Utils/locatorUtils");
const FlightResultPageLocators_1 = require("../locators/FlightResultPageLocators");
const ReusableCode_1 = require("../Utils/ReusableCode");
class FlightResultPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async shouldDisplayFlightResults() {
        const locatorGraph = (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.img_Graph).first();
        await (0, test_1.expect)(locatorGraph).toBeVisible({ timeout: 10000 });
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.section_FlightResult);
        await (0, test_1.expect)(locator).toBeVisible();
    }
    async shouldDisplayDirectFlightCheckBoxStatusAs(isChecked) {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.chkBox_DirectFlights);
        const isCheckedValue = await locator.isChecked();
        console.log('Direct Flight CheckBox:', isCheckedValue);
        if (isChecked.toLowerCase() === 'checked') {
            await (0, test_1.expect)(locator).toBeChecked({ timeout: 10000 });
        }
        else {
            await (0, test_1.expect)(locator).not.toBeChecked({ timeout: 10000 });
        }
    }
    async shouldDisplayDirectFlightFilterCheckBoxStatusAs(isChecked) {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.chkBox_DirectFlightsFilter);
        const isCheckedValue = await locator.isChecked();
        console.log('Direct Flight Filter CheckBox:', isCheckedValue);
        if (isChecked.toLowerCase() === 'checked') {
            await (0, test_1.expect)(locator).toBeChecked();
        }
        else {
            await (0, test_1.expect)(locator).not.toBeChecked();
        }
    }
    async shouldDisplayOneWayAsFlightTripType() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.txt_OneWayFlight);
        await (0, test_1.expect)(locator).toBeVisible();
    }
    async shouldDisplayRoundTripFlightTripType() {
        const locator = (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.txt_RoundTripFlight);
        await (0, test_1.expect)(locator).toBeVisible();
    }
    async shouldDisplayFlightLocationOriginAs(flightOrigin) {
        const reusuableCode = new ReusableCode_1.ReusableCode(this.page);
        reusuableCode.verifyReplacedLocatorElementIsVisible(FlightResultPageLocators_1.FlightResultPageLocators.txt_FlightLocationOrigin_Any, flightOrigin);
        console.log('Flight Origin from Flight Result Page:', flightOrigin);
    }
    async shouldDisplayFlightLocationDestinationAs(flightDestination) {
        const reusuableCode = new ReusableCode_1.ReusableCode(this.page);
        reusuableCode.verifyReplacedLocatorElementIsVisible(FlightResultPageLocators_1.FlightResultPageLocators.txt_FlightLocationDestination_Any, flightDestination);
        console.log('Flight Destination from Flight Result Page:', flightDestination);
    }
    async shouldDisplayFlightCheckInDate(checkInDate) {
        const actualCheckInDate = await (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.txt_CheckInDate).textContent();
        console.log('Flight Check-In Date:', actualCheckInDate);
        await (0, test_1.expect)(actualCheckInDate).toContain(checkInDate);
    }
    async shouldDisplayTotalTravellersCount(totalTravellers) {
        const actualTotalTravellers = await (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.txt_TravelersDetails).textContent();
        console.log('Total Travellers:', actualTotalTravellers);
        await (0, test_1.expect)(actualTotalTravellers).toContain(totalTravellers);
    }
    async shouldDisplayFlightCabinDetails(flightCabin) {
        const actualFlightCabin = await (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.txt_CabinDetails).textContent();
        console.log('Flight Cabin:', actualFlightCabin);
        await (0, test_1.expect)(actualFlightCabin).toContain(flightCabin);
    }
    async shouldDisplayFlightOrigin_FlightCards(flightOrigin) {
        const airportDetails = await (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.txt_AirPortDetails_HotelResultCard_List);
        const count = await airportDetails.count();
        for (let i = 0; i < count; i++) {
            const text = await airportDetails.nth(i).textContent();
            console.log(`Airport ${i}: ${text}`);
            await (0, test_1.expect)(text).toContain(flightOrigin);
        }
        console.log(`✅ All airport details contains Flight Origin ${flightOrigin}`);
    }
    async shouldDisplayFlightDestination_FlightCards(flightDestination) {
        const airportDetails = await (0, locatorUtils_1.getLocator)(this.page, FlightResultPageLocators_1.FlightResultPageLocators.txt_AirPortDetails_HotelResultCard_List);
        const count = await airportDetails.count();
        for (let i = 0; i < count; i++) {
            const text = await airportDetails.nth(i).textContent();
            console.log(`Airport ${i}: ${text}`);
            await (0, test_1.expect)(text).toContain(flightDestination);
        }
        console.log(`✅ All airport details contains Flight Destination ${flightDestination}`);
    }
}
exports.FlightResultPage = FlightResultPage;
