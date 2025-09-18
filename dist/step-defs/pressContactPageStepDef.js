"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const PressContactPage_1 = require("../pages/PressContactPage");
let pressContactPage;
(0, cucumber_1.Then)('validate that the Press page should be displayed', { timeout: 20000 }, async function () {
    pressContactPage = new PressContactPage_1.PressContactPage(this.page);
    await pressContactPage.shouldDisplayContactUsHeader();
});
