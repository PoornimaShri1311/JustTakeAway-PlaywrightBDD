"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwright_1 = require("playwright");
const JETCareerPage_1 = require("../pages/JETCareerPage");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
(0, cucumber_1.Before)(async function () {
    const browserType = process.env.BROWSER || 'chromium';
    switch (browserType) {
        case 'chromium':
            this.browser = await playwright_1.chromium.launch({ headless: false });
            break;
        case 'firefox':
            this.browser = await playwright_1.firefox.launch({ headless: false });
            break;
        case 'webkit':
            this.browser = await playwright_1.webkit.launch({ headless: false });
            break;
        default:
            throw new Error(`Unsupported browser: ${browserType}`);
    }
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(30000);
    this.page.setDefaultNavigationTimeout(30000);
    // ✅ Initialize page objects
    this.jetCareerPage = new JETCareerPage_1.JETCareerPage(this.page);
});
(0, cucumber_1.After)(async function (scenario) {
    if (scenario.result?.status === cucumber_1.Status.FAILED && this.page) {
        // Save screenshot to file
        const screenshotsDir = path.resolve(process.cwd(), 'screenshots');
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir);
        }
        const sanitizedName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const screenshotPath = path.join(screenshotsDir, `${sanitizedName}.png`);
        const screenshotBuffer = await this.page.screenshot({ path: screenshotPath, type: 'png' });
        // Attach to Allure via this.attach
        await this.attach(screenshotBuffer, 'image/png');
    }
    await this.browser?.close();
});
