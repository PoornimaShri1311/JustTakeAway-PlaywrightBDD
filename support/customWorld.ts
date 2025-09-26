import { Browser, Page, BrowserContext, chromium } from 'playwright';
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { jetCareerPage } from '../pages/jetCareerPage';
import { ITestCaseHookParameter } from '@cucumber/cucumber';
import { EnvConfig } from './configLoader';
import { PLAYWRIGHT_TIMEOUTS } from './constants';

//For type Safety
export interface TestData {
  [key: string]: string | number | boolean | TestData | TestData[];
}

/**
 * Custom World for Cucumber scenarios, providing browser, page, and test context.
 */
export class customWorld extends World {
  browser: Browser | undefined;
  context: BrowserContext | undefined;
  page?: Page | undefined;
  jetCareerPage?: jetCareerPage | undefined;
  testData?: TestData;
  testCase?: ITestCaseHookParameter;
  envConfig!: EnvConfig;
  browserType?: string;

  /**
   * Creates an instance of customWorld.
   * @param options Cucumber World options
   */
  constructor(options: IWorldOptions) {
    super(options);
  }

  /**
   * Initializes the browser and page for the scenario.
   */
  async initBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // Set global timeouts here
    this.page.setDefaultTimeout(PLAYWRIGHT_TIMEOUTS.DEAFAULT_TIMEOUT);
    this.page.setDefaultNavigationTimeout(PLAYWRIGHT_TIMEOUTS.DEAFAULT_TIMEOUT);
  }

  /**
   * Closes the browser after the scenario.
   */
  async closeBrowser() {
    await this.browser?.close();
  }
}

setWorldConstructor(customWorld);