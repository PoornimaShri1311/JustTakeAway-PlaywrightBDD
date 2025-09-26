import { Page, Locator, expect } from '@playwright/test';
import { PLAYWRIGHT_TIMEOUTS } from '../support/constants';

/**
 * Helper class for common assertions.
 */
export class assertionHelper {
  private page: Page;

  /**
   * Creates an instance of assertionHelper.
   * @param page Playwright Page object
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Performs a custom assertion on a locator.
   * @param locator The selector or Locator
   * @param assertion The assertion function to execute
   * @param timeout Optional timeout in ms
   */
  private async assert(
    locator: string | Locator,
    assertion: (el: Locator) => Promise<void>,
    timeout = PLAYWRIGHT_TIMEOUTS.ACTION
  ) {
    const el = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await el.waitFor({ state: 'visible', timeout });
    await assertion(el);
  }

  /**
   * Asserts that a locator is visible.
   * @param locator The selector or Locator
   * @param timeout Optional timeout in ms
   */
  async assertVisible(locator: string | Locator, timeout = PLAYWRIGHT_TIMEOUTS.ACTION) {
    await this.assert(locator, async (el) => expect(el).toBeVisible(), timeout);
  }

  /**
   * Asserts that a locator is enabled.
   * @param locator The selector or Locator
   * @param timeout Optional timeout in ms
   */
  async assertEnabled(locator: string | Locator, timeout = PLAYWRIGHT_TIMEOUTS.ACTION) {
    await this.assert(locator, async (el) => expect(el).toBeEnabled(), timeout);
  }

  /**
   * Asserts that a locator is checked.
   * @param locator The selector or Locator
   * @param timeout Optional timeout in ms
   */
  async assertChecked(locator: string | Locator, timeout = PLAYWRIGHT_TIMEOUTS.ACTION) {
    await this.assert(locator, async (el) => expect(el).toBeChecked(), timeout);
  }
}
