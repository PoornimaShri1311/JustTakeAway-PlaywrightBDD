"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: './tests',
    timeout: 60000, // ✅ Sets the maximum duration for each test (60 seconds)
    use: {
        headless: false,
        browserName: 'chromium',
        viewport: null, // Ensures browser size isn't restricted
        launchOptions: {
            args: ['--start-maximized'], // Maximizes the browser window
        },
        actionTimeout: 15000, // ✅ Max time for actions like click, fill, etc. (15 seconds)
        navigationTimeout: 30000, // ✅ Max time for navigations like page.goto (30 seconds)
    },
    reporter: [['html', { open: 'always' }]],
});
