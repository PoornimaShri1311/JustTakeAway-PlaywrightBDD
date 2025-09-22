import { Browser, Page, BrowserContext, chromium } from 'playwright';
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { JETCareerPage } from '../pages/JETCareerPage';
import { ITestCaseHookParameter } from '@cucumber/cucumber';
import { EnvConfig } from '../Utils/ConfigLoader';

export class CustomWorld extends World {
  browser: Browser | undefined;
  context: BrowserContext | undefined;
  page?: Page | undefined;
  jetCareerPage?: JETCareerPage | undefined;
  testData?: Record<string, any>;
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
    this.page.setDefaultTimeout(30000); // Applies to all actions and expect
    this.page.setDefaultNavigationTimeout(30000); // Applies to page.goto, etc.
  }

  async closeBrowser() {
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);