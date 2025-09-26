import { Page, Locator, expect } from '@playwright/test';
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';

/**
 * Base page object with common UI actions.
 */
export default class basePage {
  /**
   * Creates an instance of basePage.
   * @param page Playwright Page object
   */
  constructor(public page: Page) {}

  /**
   * Returns a Playwright Locator for a selector or Locator.
   * @param selectorOrLocator CSS selector or Locator
   */
  protected getLocator(selectorOrLocator: string | Locator): Locator {
    return typeof selectorOrLocator === 'string'
      ? this.page.locator(selectorOrLocator)
      : selectorOrLocator;
  }

  /**
   * Clicks an element or locator.
   * @param elementOrLocator The selector or Locator to click
   * @param timeout Optional timeout in ms
   */
  public async click(elementOrLocator: string | Locator, timeout = PLAYWRIGHT_TIMEOUTS.ACTION) {
    const el = this.getLocator(elementOrLocator);
    await el.waitFor({ state: 'visible', timeout });
    await el.scrollIntoViewIfNeeded();
    await el.click();
  }

  /**
   * Fills a value into an input.
   * @param locator The selector for the input
   * @param value The value to fill
   * @param timeout Optional timeout in ms
   */
  public async fill(locator: string, value: string, timeout = PLAYWRIGHT_TIMEOUTS.ACTION) {
    const el = this.getLocator(locator);
    await el.waitFor({ state: 'visible', timeout });
    await el.scrollIntoViewIfNeeded();
    await el.fill(value);
  }

  /**
   * Gets the text content of an element.
   * @param locator The selector for the element
   * @param timeout Optional timeout in ms
   * @returns The trimmed text content
   */
  public async getText(locator: string, timeout = PLAYWRIGHT_TIMEOUTS.ACTION): Promise<string> {
    const el = this.getLocator(locator);
    await el.waitFor({ state: 'visible', timeout });
    return (await el.textContent())?.trim() || '';
  }

  /**
   * Gets all text contents for a locator.
   * @param locator The selector for the elements
   * @returns Array of trimmed text contents
   */
  public async getAllTexts(locator: string): Promise<string[]> {
    const elements = this.getLocator(locator);
    const count = await elements.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      texts.push((await elements.nth(i).textContent())?.trim() || '');
    }

    return texts;
  }

  /**
   * Waits for all matching elements to be visible.
   * @param locator The selector for the elements
   * @param timeout Optional timeout in ms
   */
  public async waitForVisible(locator: string, timeout = PLAYWRIGHT_TIMEOUTS.ACTION) {
    const elements = this.getLocator(locator);
    const count = await elements.count();
    for (let i = 0; i < count; i++) {
      await elements.nth(i).waitFor({ state: 'visible', timeout });
    }
  }

  /**
   * Expects a locator to be visible.
   * @param locator The selector for the element
   * @param timeout Optional timeout in ms
   */
  public async expectVisible(locator: string, timeout = PLAYWRIGHT_TIMEOUTS.ACTION) {
    const el = this.getLocator(locator);
    await expect(el).toBeVisible({ timeout });
  }
}
