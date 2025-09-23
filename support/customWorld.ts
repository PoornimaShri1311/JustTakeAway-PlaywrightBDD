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

export class customWorld extends World {
  browser: Browser | undefined;
  context: BrowserContext | undefined;
  page?: Page | undefined;
  jetCareerPage?: jetCareerPage | undefined;
  testData?: TestData;          // type-safe
  testCase?: ITestCaseHookParameter;
  envConfig!: EnvConfig; // "!" means it will be initialized in Before hook
  browserType?: string;

  constructor(options: IWorldOptions) {
    super(options);
  }

  // ✅ Call this from Before hook to initialize browser & page
  async initBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // ✅ Set global timeouts here
    this.page.setDefaultTimeout(PLAYWRIGHT_TIMEOUTS.DEAFAULT_TIMEOUT); // Applies to all actions and expect
    this.page.setDefaultNavigationTimeout(PLAYWRIGHT_TIMEOUTS.DEAFAULT_TIMEOUT); // Applies to page.goto, etc.
  }

  async closeBrowser() {
    await this.browser?.close();
  }
}

setWorldConstructor(customWorld);