import { Page, Locator } from 'playwright';

export type AriaRole =
  | "alert" | "alertdialog" | "application" | "article" | "banner"
  | "blockquote" | "button" | "caption" | "cell" | "checkbox"
  | "code" | "columnheader" | "combobox" | "complementary"
  | "contentinfo" | "definition" | "dialog" | "directory"
  | "document" | "form" | "grid" | "gridcell" | "group" | "heading"
  | "img" | "link" | "list" | "listbox" | "listitem" | "log" | "main"
  | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox"
  | "menuitemradio" | "meter" | "navigation" | "none" | "note" | "option"
  | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup"
  | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider"
  | "spinbutton" | "status" | "switch" | "tab" | "table" | "tablist"
  | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip"
  | "tree" | "treegrid" | "treeitem";

export type LocatorInfo =
  | { type: 'css'; value: string }
  | { type: 'xpath'; value: string }
  | { type: 'role'; role: AriaRole; value: { name: string }; exact?: boolean }
  | { type: 'placeholder'; value: string }
  | { type: 'text'; value: string }
  | { type: 'testID'; value: string };


export function getLocator(page: Page, locatorInfo: LocatorInfo): Locator {
  switch (locatorInfo.type) {
    case 'css':
      return page.locator(locatorInfo.value);
    case 'xpath':
      return page.locator(`xpath=${locatorInfo.value}`);
    case 'role':
      return page.getByRole(locatorInfo.role, {
        name: locatorInfo.value.name,
        exact: locatorInfo.exact ?? false // ✅ safe typing
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