"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const AboutUsPage_1 = require("../pages/AboutUsPage");
let aboutUsPage;
(0, cucumber_1.Then)('validate that the About Us page should be displayed', { timeout: 20000 }, async function () {
    aboutUsPage = new AboutUsPage_1.AboutUsPage(this.page);
    await aboutUsPage.shouldDisplayAboutUsHeader();
});
