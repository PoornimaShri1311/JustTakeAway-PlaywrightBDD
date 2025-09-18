import { Page, Locator, expect } from '@playwright/test';

export class AssertionHelper {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private async assert(locator: string | Locator, assertion: (el: Locator) => Promise<void>, timeout = 10000) {
    const el = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await el.waitFor({ state: 'visible', timeout });
    await assertion(el);
  }

  async assertVisible(locator: string | Locator, timeout = 10000) {
    await this.assert(locator, async (el) => expect(el).toBeVisible(), timeout);
  }

  async assertEnabled(locator: string | Locator, timeout = 10000) {
    await this.assert(locator, async (el) => expect(el).toBeEnabled(), timeout);
  }

  async assertChecked(locator: string | Locator, timeout = 10000) {
    await this.assert(locator, async (el) => expect(el).toBeChecked(), timeout);
  }
}
