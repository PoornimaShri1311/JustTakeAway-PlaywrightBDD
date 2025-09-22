import { Before, After, Status, AfterStep } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from 'playwright';
import { CustomWorld } from './custom-world';
import { JETCareerPage } from '../pages/JETCareerPage';
import { getConfig } from '../Utils/ConfigLoader';
import * as fs from 'fs';
import * as path from 'path';

Before(async function (this: CustomWorld) {
  const browserType = process.env.BROWSER || 'chromium';
  const env = process.env.ENV || 'qa';
  this.envConfig = getConfig(env);

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

  this.page.setDefaultTimeout(30000);
  this.page.setDefaultNavigationTimeout(30000);
  // ✅ Initialize page objects
  this.jetCareerPage = new JETCareerPage(this.page);
});

After(async function (this: CustomWorld, scenario) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  if (scenario.result?.status === Status.FAILED && this.page) {
    // Save screenshot to file
    const screenshotsDir = path.resolve(process.cwd(), 'screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir);
    }

    const sanitizedName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const screenshotPath = path.join(screenshotsDir, `${sanitizedName}_${timestamp}.png`);
    const screenshotBuffer = await this.page.screenshot({ path: screenshotPath, type: 'png' });

    // Attach to Allure via this.attach if available
    await this.attach(screenshotBuffer, 'image/png');
  }

  await this.browser?.close();
});