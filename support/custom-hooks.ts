import { After, Status } from '@cucumber/cucumber';
import { writeFileSync } from 'fs';
import { join } from 'path';

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot();
    const screenshotPath = join(process.cwd(), 'screenshots', `${Date.now()}.png`);
    writeFileSync(screenshotPath, screenshot);
    // Attach path to scenario for JSON report
    this.attach(`screenshots/${Date.now()}.png`);
  }
});
