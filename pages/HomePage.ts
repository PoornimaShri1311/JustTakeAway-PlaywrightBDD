import { Page } from '@playwright/test';
import { getConfig, EnvConfig } from '../support/configLoader';

export class homePage { // still camelCase
  private config: EnvConfig;

  constructor(private page: Page) {
    this.config = getConfig(); // automatically reads process.env.ENV
  }

  async gotoHomePage() {
    console.log('Launching URL:', this.config.urls.homePage); 
    await this.page.goto(this.config.urls.homePage);
  }
}