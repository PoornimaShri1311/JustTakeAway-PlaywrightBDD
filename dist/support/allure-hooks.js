"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
// Attach screenshots on failure
(0, cucumber_1.After)(async function (scenario) {
    if (scenario.result?.status === cucumber_1.Status.FAILED && this.page) {
        const screenshot = await this.page.screenshot();
        this.attach(screenshot, 'image/png');
    }
});
