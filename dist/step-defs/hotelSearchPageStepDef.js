"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const HotelSearchPage_1 = require("../pages/HotelSearchPage");
let hotelSearchPage;
(0, cucumber_1.When)("I enter the destination as {string} in the Hotel Search Page", async function (destination) {
    hotelSearchPage = new HotelSearchPage_1.HotelSearchPage(this.page);
    hotelSearchPage.enterDestination(destination);
});
(0, cucumber_1.Then)("validate that the destination should be displayed as {string} in the Hotel Search Page", async function (destination) {
    hotelSearchPage = new HotelSearchPage_1.HotelSearchPage(this.page);
    hotelSearchPage.shouldDisplayDestination(destination);
});
