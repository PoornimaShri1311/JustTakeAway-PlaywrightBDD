import type { LocatorInfo } from '../Utils/locator-types';

export const HotelResultPageLocators = {
    txt_HotelResultsFound: { type: 'xpath', value: "//*[contains(@aria-label,'properties found')]" } as LocatorInfo,
    txt_HotelResultsFound_Any: { type: 'xpath', value: "//*[contains(@aria-label,'Search results updated. XXXX')]" } as LocatorInfo,

  };