import { Before, After, Status } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from 'playwright';
import { customWorld } from './customWorld';
import { jetCareerPage } from '../pages/jetCareerPage';
import { getConfig } from './configLoader';
import * as fs from 'fs';
import * as path from 'path';
import { PLAYWRIGHT_TIMEOUTS } from './constants';

Before(async function (this: customWorld) {
  // ✅ Default values
  const env = process.env.ENV || 'qa';
  const browserType = process.env.BROWSER || 'chromium';

  this.envConfig = getConfig(env);
  this.browserType = browserType;

  // Launch browser
  switch (browserType) {
    case 'chromium':
      this.browser = await chromium.launch({ headless: false });
      break;
    case 'firefox':
      this.browser = await firefox.launch({ headless: false });
      break;
    case 'webkit':
      this.browser = await webkit.launch({ headless: false });
      break;
    default:
      throw new Error(`Unsupported browser: ${browserType}`);
  }

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.page.setDefaultTimeout(PLAYWRIGHT_TIMEOUTS.DEAFAULT_TIMEOUT);
  this.page.setDefaultNavigationTimeout(PLAYWRIGHT_TIMEOUTS.TEST);

  // Initialize page objects
  this.jetCareerPage = new jetCareerPage(this.page);
});

After(async function (this: customWorld, scenario) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshotsDir = path.resolve(process.cwd(), 'screenshots');
    if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);

    const sanitizedName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const screenshotPath = path.join(screenshotsDir, `${sanitizedName}_${timestamp}.png`);

    const screenshotBuffer = await this.page.screenshot({ path: screenshotPath, type: 'png' });
    await this.attach(screenshotBuffer, 'image/png');
  }

  await this.browser?.close();
});