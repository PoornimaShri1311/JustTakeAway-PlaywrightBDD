
/**
 * (Future Enhancement) Custom Cucumber hooks for advanced screenshot and browser teardown logic.
 * Uncomment and adapt as needed for enhanced reporting or custom workflow.
 */
// import { After, Status } from '@cucumber/cucumber';
// import { writeFileSync, existsSync, mkdirSync } from 'fs';
// import { join } from 'path';

// After(async function (scenario) {
//   // Only take screenshots for failed scenarios
//   if (scenario.result?.status === Status.FAILED) {
//     // Check if the page exists and is still open
//     if (this.page && !this.page.isClosed()) {
//       // Ensure screenshots folder exists
//       const screenshotsDir = join(process.cwd(), 'screenshots');
//       if (!existsSync(screenshotsDir)) mkdirSync(screenshotsDir);

//       const timestamp = Date.now();
//       const screenshotPath = join(screenshotsDir, `${timestamp}.png`);

//       try {
//         // Take screenshot
//         const screenshot = await this.page.screenshot({ type: 'png' });

//         // Save to file
//         writeFileSync(screenshotPath, screenshot);

//         // Attach to report
//         await this.attach(screenshot, 'image/png');
//       } catch (err: unknown) {
//         console.warn('Screenshot failed:', err instanceof Error ? err.message : err);
//       }
//     }
//   }

//   // Close the browser AFTER screenshots
//   try {
//     if (this.browser) {
//       await this.browser.close();
//     }
//   } catch (err: unknown) {
//     console.warn('Browser close failed:', err instanceof Error ? err.message : err);
//   }
// });
