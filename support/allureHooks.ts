import { After, Status } from '@cucumber/cucumber';

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    // Make sure page exists and is open
    if (this.page && !this.page.isClosed()) {
      try {
        const screenshot = await this.page.screenshot({ type: 'png' });
        await this.attach(screenshot, 'image/png'); // attach to Allure
      } catch (err: unknown) {
        console.warn('Allure screenshot failed:', err instanceof Error ? err.message : err);
      }
    }
  }
});
