import { Page } from '@playwright/test';
import { getConfig, EnvConfig } from '../support/configLoader';
import logger from '../support/logger';

/**
 * Page object for the Home Page.
 */
export class homePage {
  private config: EnvConfig;

  /**
   * Creates an instance of homePage.
   * @param page Playwright Page object
   */
  constructor(private page: Page) {
    this.config = getConfig(); // automatically reads process.env.ENV
  }

  /**
   * Navigates to the home page URL.
   */
  async gotoHomePage() {
    logger.info({ url: this.config.urls.homePage }, 'Launching URL');
    await this.page.goto(this.config.urls.homePage);
  }
}