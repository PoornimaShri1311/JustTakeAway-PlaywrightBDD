import { Page } from '@playwright/test';
import { getConfig, EnvConfig } from '../support/configLoader';

export class homePage { // still camelCase
  private config: EnvConfig;

  constructor(private page: Page, env: string = 'qa') {
    this.config = getConfig(env);
  }

  async gotoHomePage() {
    await this.page.goto(this.config.urls.homePage);
  }
}