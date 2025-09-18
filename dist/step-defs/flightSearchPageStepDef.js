"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const ReusableCode_1 = require("../Utils/ReusableCode");
const FlightSearchPage_1 = require("../pages/FlightSearchPage");
let flightSearchPage;
(0, cucumber_1.When)('I click on Flight Trip Drop Down in the Flight Search Page', async function () {
    flightSearchPage = new FlightSearchPage_1.FlightSearchPage(this.page);
    await flightSearchPage.clickFlightTripDropDown();
});
(0, cucumber_1.When)('I select {string} Trip option from the Flight Trip Drop Down in the Flight Search Page', async function (tripType) {
    if (tripType === 'One-way') {
        await flightSearchPage.clickFlightTripTypeOneWay();
    }
    else if (tripType === 'Multi City') {
        await flightSearchPage.clickFlightTripTypeMultiCity();
    }
});
(0, cucumber_1.Then)("validate that the Flight Trip Drop Down should be displayed as {string} in the Flight Search Page", async function (tripType) {
    await flightSearchPage.shouldDisplayFlightTripType(tripType);
});
(0, cucumber_1.When)("I remove the already selected flight option from the Origin in the Flight Search Page", async function () {
    flightSearchPage = new FlightSearchPage_1.FlightSearchPage(this.page);
    await flightSearchPage.removeAlreadySelectedFlightOrigin();
});
(0, cucumber_1.When)("I select {string} as the Flight Origin in the Flight Search Page", async function (flightOrigin) {
    await flightSearchPage.selectFlightOrigin(flightOrigin);
});
(0, cucumber_1.When)("I select {string} as the Flight Destination in the Flight Search Page", async function (flightDestination) {
    await flightSearchPage.selectFlightDestination(flightDestination);
});
(0, cucumber_1.When)("I enter the Flight check-in date after {string} days from today in the Flight Search Page", async function (daysOut) {
    const reusableCode = new ReusableCode_1.ReusableCode(this.page);
    const checkInDate = await reusableCode.getFormattedDate(daysOut);
    await flightSearchPage.selectCheckInDate(checkInDate);
    this.flightCheckInDate = await reusableCode.changeDateFormat(checkInDate);
    this.flightDaysOut = daysOut;
});
(0, cucumber_1.When)("I enter the Flight check-out date after {string} days from Flight check-in date in the Flight Search Page", async function (daysOut) {
    const reusableCode = new ReusableCode_1.ReusableCode(this.page);
    const totalDaysOut = Number(daysOut) + Number(this.flightDaysOut);
    const checkOutDate = await reusableCode.getFormattedDate(totalDaysOut.toString());
    await flightSearchPage.selectCheckOutDate(checkOutDate);
    this.flightCheckOutDate = await reusableCode.changeDateFormat(checkOutDate);
});
(0, cucumber_1.When)("I select {int} Adults from the Passengers Drop Down in the Flight Search Page", async function (noOfAdults) {
    await flightSearchPage.selectAdults(noOfAdults);
});
(0, cucumber_1.When)("I select {int} Childrens from the Passengers Drop Down in the Flight Search Page", async function (noOfChilds) {
    await flightSearchPage.selectChildrens(noOfChilds);
});
(0, cucumber_1.Then)("validate that the Travellers total count should be displayed as {string} in the Flight Search Page", async function (totalTravellersCount) {
    await flightSearchPage.shouldDisplayTotalTravellersCount(totalTravellersCount);
});
(0, cucumber_1.Then)("validate that the Flight Origin should be displayed as {string} in the Flight Search Page", async function (flightOrigin) {
    await flightSearchPage.shouldDisplayFlightOrigin(flightOrigin);
});
(0, cucumber_1.Then)("validate that the Flight Destination should be displayed as {string} in the Flight Search Page", async function (flightDestination) {
    await flightSearchPage.shouldDisplayFlightDestination(flightDestination);
});
(0, cucumber_1.Then)("validate that the Flight check-in date should be displayed in the Flight Search Page", async function () {
    await flightSearchPage.shouldDisplayFlightCheckInDate(this.flightCheckInDate);
});
(0, cucumber_1.Then)("validate that the selected Flight check-out date should be displayed in the Flight Search Page", async function () {
    await flightSearchPage.shouldDisplayFlightCheckOutDate(this.flightCheckOutDate);
});
(0, cucumber_1.When)("I click on Direct Flight checkbox in the Flight Search Page", async function () {
    await flightSearchPage.clickDirectFlightCheckBox();
});
(0, cucumber_1.Then)("validate that the Direct Flight checkbox should be displayed as {string} in the Flight Search Page", async function (isChecked) {
    await flightSearchPage.shouldDisplayDirectFlightCheckBoxStatusAs(isChecked);
});
(0, cucumber_1.When)("I click on Search Flight button in the Flight Search Page", async function () {
    await flightSearchPage.clickSearchFlightsButton();
});
(0, cucumber_1.When)("I uncheck the Other search engine checkbox in the Flight Search Page", async function () {
    await flightSearchPage.clickOtherSearchEngineCheckBox();
});
(0, cucumber_1.Then)("validate that the Other search engine checkbox should be displayed as {string} in the Flight Search Page", async function (isChecked) {
    await flightSearchPage.shouldDisplayOtherSearchEngineCheckBoxStatusAs(isChecked);
});
