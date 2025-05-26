import type { LocatorInfo } from '../Utils/locator-types';

export const AboutUsPageLocators: AboutUsPageLocatorsType = {
  header_AboutUs: { type: 'role', role: 'heading', value: { name: 'About us' }},
};

interface AboutUsPageLocatorsType {
  header_AboutUs: LocatorInfo;

}

