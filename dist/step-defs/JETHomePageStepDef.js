"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const JETHomePage_1 = require("../pages/JETHomePage");
let jetHomePage;
(0, cucumber_1.Then)(/^validate that the "([^"]+)" label should be displayed in the Home Page$/, { timeout: 20000 }, async function (expectedLabel) {
    jetHomePage = new JETHomePage_1.JETHomePage(this.page);
    await jetHomePage.shouldDisplayJETHomeHeader(expectedLabel);
});
