import { Before, After, Status } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from 'playwright';
import { customWorld } from './customWorld';
import { jetCareerPage } from '../pages/jetCareerPage';
import { getConfig } from './configLoader';
import { PLAYWRIGHT_TIMEOUTS } from './constants';
import * as fs from 'fs';
import * as path from 'path';
import logger from '../support/logger';
/**
 * Cucumber Before hook to set up browser, context, and page for each scenario.
 * Initializes the correct browser type and attaches the page object to the world.
 */
Before(async function (this: customWorld) {
  const env = process.env.ENV || 'qa';
  const browserType = process.env.BROWSER || 'chromium';

  this.envConfig = getConfig(env);
  this.browserType = browserType;

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

  this.jetCareerPage = new jetCareerPage(this.page);
});

/**
 * Cucumber After hook to handle screenshot capture on failure and browser teardown.
 * Attaches screenshots to the report if a scenario fails.
 */
After(async function (this: customWorld, scenario) {
  const screenshotsDir = path.resolve(process.cwd(), 'screenshots');
  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);

  if (scenario.result?.status === Status.FAILED && this.page && !this.page.isClosed()) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const sanitizedName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const screenshotPath = path.join(screenshotsDir, `${sanitizedName}_${timestamp}.png`);

    try {
      const screenshot = await this.page.screenshot({ path: screenshotPath, type: 'png' });
      await this.attach(screenshot, 'image/png'); // Works with Allure or other reporters
    } catch (err: unknown) {
      logger.warn('Screenshot failed: ' + (err as Error).message);
    }
  }

  try {
    await this.browser?.close();
  } catch (err: unknown) {
    logger.warn('Browser close failed:' + (err as Error).message);
  }
});
