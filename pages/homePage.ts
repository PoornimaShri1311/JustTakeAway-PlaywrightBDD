import { Page } from '@playwright/test';
import { getConfig, EnvConfig } from '../support/configLoader';
import logger from '../support/logger';

export class homePage { // still camelCase
  private config: EnvConfig;

  constructor(private page: Page) {
    this.config = getConfig(); // automatically reads process.env.ENV
  }

  async gotoHomePage() {
    logger.info({ url: this.config.urls.homePage }, 'Launching URL');
    await this.page.goto(this.config.urls.homePage);
  }
}