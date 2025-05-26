import type { LocatorInfo } from '../Utils/locator-types';

export const PressContactPageLocators: PressContactPageLocatorsType = {
  header_ContactUs: { type: 'role', role: 'heading', value: { name: 'Contact Us' }},
};

interface PressContactPageLocatorsType {
  header_ContactUs: LocatorInfo;

}

