import type { LocatorInfo } from '../Utils/locator-types';

export const HelpFAQPageLocators: HelpFAQtPageLocatorsType = {
  header_HowCanWeHelp: { type: 'role', role: 'heading', value: { name: 'How can we help?' }},
};

interface HelpFAQtPageLocatorsType {
  header_HowCanWeHelp: LocatorInfo;

}

