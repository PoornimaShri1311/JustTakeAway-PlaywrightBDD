import { Page, Locator, expect } from '@playwright/test';

export default class BasePage {
  constructor(public page: Page) {}

  protected getLocator(selectorOrLocator: string | Locator): Locator {
  return typeof selectorOrLocator === 'string'
    ? this.page.locator(selectorOrLocator)
    : selectorOrLocator;
}

  public async click(elementOrLocator: string | Locator, timeout = 10000) {
    const el = this.getLocator(elementOrLocator);
    await el.waitFor({ state: 'visible', timeout });
    await el.scrollIntoViewIfNeeded();
    await el.click();
  }

  public async fill(locator: string, value: string, timeout = 10000) {
    const el = this.getLocator(locator);
    await el.waitFor({ state: 'visible', timeout });
    await el.scrollIntoViewIfNeeded();
    await el.fill(value);
  }

  public async getText(locator: string, timeout = 10000): Promise<string> {
    const el = this.getLocator(locator);
    await el.waitFor({ state: 'visible', timeout });
    return (await el.textContent())?.trim() || '';
  }

  public async getAllTexts(locator: string): Promise<string[]> {
    const elements = this.getLocator(locator);
    const count = await elements.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      texts.push((await elements.nth(i).textContent())?.trim() || '');
    }

    return texts;
  }

  public async waitForVisible(locator: string, timeout = 10000) {
    const el = this.getLocator(locator);
    await el.waitFor({ state: 'visible', timeout });
  }

  public async expectVisible(locator: string, timeout = 10000) {
    const el = this.getLocator(locator);
    await expect(el).toBeVisible({ timeout });
}
}
