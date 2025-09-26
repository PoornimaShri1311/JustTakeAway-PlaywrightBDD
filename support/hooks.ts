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

  // Enable video and tracing for each scenario
  this.context = await this.browser.newContext({
    recordVideo: { dir: 'videos/', size: { width: 1280, height: 720 } }
  });
  this.page = await this.context.newPage();
  this.page.setDefaultTimeout(PLAYWRIGHT_TIMEOUTS.DEAFAULT_TIMEOUT);
  this.page.setDefaultNavigationTimeout(PLAYWRIGHT_TIMEOUTS.TEST);

  // Start tracing
  await this.context.tracing.start({ screenshots: true, snapshots: true, sources: true });

  this.jetCareerPage = new jetCareerPage(this.page);
});

/**
 * Cucumber After hook to handle screenshot capture on failure, tracing, video, and browser teardown.
 * All artifacts are named with scenarioName_timestamp.
 */
After(async function (this: customWorld, scenario) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const sanitizedName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();

  const screenshotsDir = path.resolve(process.cwd(), 'screenshots');
  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);

  const tracesDir = path.resolve(process.cwd(), 'traces');
  if (!fs.existsSync(tracesDir)) fs.mkdirSync(tracesDir);

  const videosDir = path.resolve(process.cwd(), 'videos');
  if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir);

  // Screenshot on failure
  if (scenario.result?.status === Status.FAILED && this.page && !this.page.isClosed()) {
    const screenshotPath = path.join(screenshotsDir, `${sanitizedName}_${timestamp}.png`);
    try {
      const screenshot = await this.page.screenshot({ path: screenshotPath, type: 'png' });
      await this.attach(screenshot, 'image/png');
    } catch (err: unknown) {
      logger.warn('Screenshot failed: ' + (err as Error).message);
    }
  }

  // Stop tracing and save
  try {
    const tracePath = path.join(tracesDir, `${sanitizedName}_${timestamp}.zip`);
    await this.context?.tracing.stop({ path: tracePath });
    if (fs.existsSync(tracePath)) {
      const traceBuffer = fs.readFileSync(tracePath);
      await this.attach(traceBuffer, 'application/zip');
    }
  } catch (err: unknown) {
    logger.warn('Trace capture failed: ' + (err as Error).message);
  }

  // Close context first to finalize video
  try {
    await this.context?.close();
  } catch (err: unknown) {
    logger.warn('Context close failed: ' + (err as Error).message);
  }

  // Rename and attach video
  // Only handle current page video
try {
  if (this.page) {
    const video = this.page.video();
    if (video) {
      const videoPath = await video.path(); // get path while video is finalized
      const ext = path.extname(videoPath);
      const newVideoPath = path.join(videosDir, `${sanitizedName}_${timestamp}${ext}`);

      // Rename the video
      fs.renameSync(videoPath, newVideoPath);

      const videoBuffer = fs.readFileSync(newVideoPath);
      await this.attach(videoBuffer, 'video/webm');
    }
  }
} catch (err: unknown) {
  logger.warn('Video capture failed: ' + (err as Error).message);
}

  // Close browser
  try {
    await this.browser?.close();
  } catch (err: unknown) {
    logger.warn('Browser close failed: ' + (err as Error).message);
  }
});
