"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const HelpFAQPage_1 = require("../pages/HelpFAQPage");
let helpFAQPage;
(0, cucumber_1.Then)(/^validate that the Help\/FAQ page should be displayed$/, { timeout: 20000 }, async function () {
    helpFAQPage = new HelpFAQPage_1.HelpFAQPage(this.page);
    await helpFAQPage.shouldDisplayHowCanWeHelpHeader();
});
