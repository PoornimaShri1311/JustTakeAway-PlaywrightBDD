import { After, Before, Status } from '@cucumber/cucumber';
import { writeFileSync } from 'fs';
import { join } from 'path';

// Attach screenshots on failure for Allure reports
After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
});