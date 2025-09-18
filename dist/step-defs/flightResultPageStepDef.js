"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const FlightResultPage_1 = require("../pages/FlightResultPage");
let flightResultPage;
(0, cucumber_1.When)('validate that the Flight Search results page should be displayed', async function () {
    flightResultPage = new FlightResultPage_1.FlightResultPage(this.page);
    await flightResultPage.shouldDisplayFlightResults();
});
(0, cucumber_1.Then)("validate that the Direct Flight checkbox should be displayed as {string} in the Flight Result Page", async function (isChecked) {
    await flightResultPage.shouldDisplayDirectFlightCheckBoxStatusAs(isChecked);
});
(0, cucumber_1.Then)("validate that the Direct Flight filter checkbox should be displayed as {string} in the Flight Result Page", async function (isChecked) {
    await flightResultPage.shouldDisplayDirectFlightFilterCheckBoxStatusAs(isChecked);
});
(0, cucumber_1.Then)("validate that the One way trip option should be displayed in the Flight Result Page", async function () {
    await flightResultPage.shouldDisplayOneWayAsFlightTripType();
});
(0, cucumber_1.Then)("validate that the Round trip option should be displayed in the Flight Result Page", async function () {
    await flightResultPage.shouldDisplayRoundTripFlightTripType();
});
(0, cucumber_1.Then)("validate that the Flight Origin should be displayed as {string} in the Flight Result Page", async function (flightOrigin) {
    await flightResultPage.shouldDisplayFlightLocationOriginAs(flightOrigin);
});
(0, cucumber_1.Then)("validate that the Flight Destination should be displayed as {string} in the Flight Result Page", async function (flightDestination) {
    await flightResultPage.shouldDisplayFlightLocationDestinationAs(flightDestination);
});
(0, cucumber_1.Then)("validate that the Flight check-in date should be displayed in the Flight Result Page", async function () {
    await flightResultPage.shouldDisplayFlightCheckInDate(this.flightCheckInDate);
});
(0, cucumber_1.Then)("validate that the Travellers total count should be displayed as {string} in the Flight Result Page", async function (totalTravellers) {
    await flightResultPage.shouldDisplayTotalTravellersCount(totalTravellers);
});
(0, cucumber_1.Then)("validate that the Flight Cabin should be displayed as {string} in the Flight Result Page", async function (flightCabin) {
    await flightResultPage.shouldDisplayFlightCabinDetails(flightCabin);
});
(0, cucumber_1.Then)("validate that the Flight Origin as {string} should be displayed on all the Flight Card in the Flight Result Page", async function (flightOrigin) {
    await flightResultPage.shouldDisplayFlightOrigin_FlightCards(flightOrigin);
});
(0, cucumber_1.Then)("validate that the Flight Destination as {string} should be displayed on all the Flight Card in the Flight Result Page", async function (flightOrigin) {
    await flightResultPage.shouldDisplayFlightDestination_FlightCards(flightOrigin);
});
