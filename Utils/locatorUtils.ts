import { Page, Locator } from 'playwright';
import type { LocatorInfo } from './locatorTypes';

export function getLocator(page: Page, locatorInfo: LocatorInfo): Locator {
  switch (locatorInfo.type) {
    case 'css':
      return page.locator(locatorInfo.value);
    case 'xpath':
      return page.locator(`xpath=${locatorInfo.value}`);
    case 'role':
      return page.getByRole(locatorInfo.role, {
        name: locatorInfo.value.name,
        exact: (locatorInfo as any).exact ?? false // ✅ Properly handle 'exact' if defined
      });
    case 'placeholder':
      return page.getByPlaceholder(locatorInfo.value);
    case 'text':
      return page.getByText(locatorInfo.value);
    case 'testID':
      return page.getByTestId(locatorInfo.value);
    default: {
      const _exhaustiveCheck = locatorInfo;
      void _exhaustiveCheck;
      throw new Error(`Unknown locator type: ${(locatorInfo as any).type}`);
    }
  }
}