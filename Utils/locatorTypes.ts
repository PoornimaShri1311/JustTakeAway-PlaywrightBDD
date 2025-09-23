import { Page } from 'playwright';

export type AriaRole = Parameters<Page['getByRole']>[0];

export type LocatorInfo =
  | { type: 'css'; value: string }
  | { type: 'xpath'; value: string }
  | { type: 'role'; role: AriaRole; value: { name: string }; exact?: boolean }
  | { type: 'placeholder'; value: string }
  | { type: 'testID'; value: string }
  | { type: 'text'; value: string }
  | { 
    type: 'chained'; 
    parent: LocatorInfo;  // parent locator
    child: LocatorInfo;   // child locator
  }; 

// Optional: Narrow role types to exactly what Playwright supports
export type RoleType =
  | 'alert' | 'alertdialog' | 'application' | 'article' | 'banner'
  | 'blockquote' | 'button' | 'caption' | 'cell' | 'checkbox'
  | 'code' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo'
  | 'definition' | 'deletion' | 'dialog' | 'directory' | 'document'
  | 'emphasis' | 'feed' | 'figure' | 'form' | 'generic'
  | 'grid' | 'gridcell' | 'group' | 'heading' | 'img'
  | 'insertion' | 'link' | 'list' | 'listbox' | 'listitem'
  | 'log' | 'main' | 'marquee' | 'math' | 'menu'
  | 'menubar' | 'menuitem' | 'meter' | 'navigation' | 'none'
  | 'note' | 'option' | 'paragraph' | 'presentation' | 'progressbar'
  | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup'
  | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator'
  | 'slider' | 'spinbutton' | 'status' | 'strong' | 'subscript'
  | 'superscript' | 'switch' | 'tab' | 'table' | 'tablist'
  | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar'
  | 'tooltip' | 'tree' | 'treegrid' | 'treeitem';