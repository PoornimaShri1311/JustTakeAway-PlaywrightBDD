import { Page, expect as pwExpect } from '@playwright/test';
import testData from '../test-data/testingData.json';


export class HomePage {

  constructor(private page: Page) {}

  async gotoHomePage() {
    await this.page.goto(testData.urls.homePage);
  }
}