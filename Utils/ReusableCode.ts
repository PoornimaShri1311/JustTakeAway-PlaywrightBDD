import { addDays, format, parse } from 'date-fns';
import { Page, expect, Locator } from '@playwright/test';
import { LocatorInfo } from './locatorTypes';

export class reusableCode {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnReplacedLocator(
    locatorInfo: string | { name: string } | LocatorInfo,
    valueToBeReplaced: string
  ): Promise<void> {
    let locator: Locator;

    if (typeof locatorInfo === 'string') {
      const finalSelector = locatorInfo.replace('XXXX', valueToBeReplaced);
      locator = this.page.locator(finalSelector);
    } else if ('name' in locatorInfo) {
      const finalSelector = locatorInfo.name.replace('XXXX', valueToBeReplaced);
      locator = this.page.locator(finalSelector);
    } else {
      const updatedLocatorInfo = this.replaceInLocator(locatorInfo, valueToBeReplaced);
      locator = this.resolveLocator(updatedLocatorInfo);
    }

    await expect(locator).toBeVisible();
    await locator.click();
  }

  async verifyReplacedLocatorElementIsVisible(
    locatorInfo: string | { name: string } | LocatorInfo,
    valueToBeReplaced: string
  ): Promise<void> {
    let locator: Locator;

    if (typeof locatorInfo === 'string') {
      const finalSelector = locatorInfo.replace('XXXX', valueToBeReplaced);
      locator = this.page.locator(finalSelector);
    } else if ('name' in locatorInfo) {
      const finalSelector = locatorInfo.name.replace('XXXX', valueToBeReplaced);
      locator = this.page.locator(finalSelector);
    } else {
      const updatedLocatorInfo = this.replaceInLocator(locatorInfo, valueToBeReplaced);
      locator = this.resolveLocator(updatedLocatorInfo);
    }

    await expect(locator).toBeVisible();
  }

  private replaceInLocator(locatorInfo: LocatorInfo, value: string): LocatorInfo {
    switch (locatorInfo.type) {
      case 'css':
      case 'xpath':
      case 'placeholder':
      case 'testID':
      case 'text':
        return { ...locatorInfo, value: locatorInfo.value.replace('XXXX', value) };
      case 'role':
        return {
          ...locatorInfo,
          value: { name: locatorInfo.value.name.replace('XXXX', value) }
        };
      case 'chained':
        return {
          type: 'chained',
          parent: this.replaceInLocator(locatorInfo.parent, value),
          child: this.replaceInLocator(locatorInfo.child, value)
        };
      default:
        throw new Error(`Unsupported locator type for replacement: ${JSON.stringify(locatorInfo)}`);
    }
  }

private resolveLocator(locatorInfo: LocatorInfo): Locator {
    switch (locatorInfo.type) {
      case 'css':
        return this.page.locator(locatorInfo.value);
      case 'xpath':
        return this.page.locator(locatorInfo.value);
      case 'text':
        return this.page.getByText(locatorInfo.value);
      case 'placeholder':
        return this.page.getByPlaceholder(locatorInfo.value);
      case 'testID':
        return this.page.getByTestId(locatorInfo.value);
      case 'role':
        return this.page.getByRole(locatorInfo.role, locatorInfo.value);
      case 'chained':
        return this.resolveLocator(locatorInfo.parent).locator(this.resolveLocator(locatorInfo.child));
      default:
        throw new Error(`Unsupported locator type: ${JSON.stringify(locatorInfo)}`);
    }
  }

async getFormattedDate(daysOutTime: string): Promise<string> {
    const days = parseInt(daysOutTime, 10);
  
    if (isNaN(days)) {
      throw new Error(`Invalid daysOutTime: ${daysOutTime}`);
    }
  
    const futureDate = addDays(new Date(), days);
    return format(futureDate, 'd MMMM, yyyy');  // e.g., "8 July, 2025"
  }
 

  async addDaysToDate(
    date: string,
    daysOutTime: string
  ): Promise<string> {
    const parsedDate = parse(date, 'EEE d/M', new Date());
  
    const days = parseInt(daysOutTime, 10);
    if (isNaN(days)) {
      throw new Error(`Invalid daysOutTime: ${daysOutTime}`);
    }
  
    const newDate = addDays(parsedDate, days);
    return format(newDate, 'EEE d/M');  // e.g., "Fri 11/7"
  }

async changeDateFormat(inputDate: string): Promise<string> {
    // Parse the input string into a Date object
    const parsedDate = parse(inputDate, 'd MMMM, yyyy', new Date());
  
    // Format as 'Fri 16/5'
    return format(parsedDate, 'EEE d/M');  // 'EEE' = short weekday, 'd/M' = day/month
  }
} 