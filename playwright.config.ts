import { defineConfig } from '@playwright/test';
import { PLAYWRIGHT_TIMEOUTS } from './support/constants';

export default defineConfig({
  testDir: './tests',
  timeout: PLAYWRIGHT_TIMEOUTS.TEST, // ✅ Sets the maximum duration for each test (60 seconds)
  use: {
    headless: false,
    browserName: 'chromium',
    viewport: null, // Ensures browser size isn't restricted
    launchOptions: {
      args: ['--start-maximized'], // Maximizes the browser window
    },
    actionTimeout: PLAYWRIGHT_TIMEOUTS.ACTION, // ✅ Max time for actions like click, fill, etc. (15 seconds)
    navigationTimeout: PLAYWRIGHT_TIMEOUTS.DEAFAULT_TIMEOUT, // ✅ Max time for navigations like page.goto (30 seconds)
  },
  reporter: [['html', { open: 'always' }]],
});