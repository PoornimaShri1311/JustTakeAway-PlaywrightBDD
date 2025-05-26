import type { LocatorInfo } from '../Utils/locator-types';

export const HomePageLocators: HomePageLocatorsType = {
  lbl_WhereDoYouWantToGo: { type: 'text', value: 'Where do you want to go?' },
  icon_Flight: { type: 'xpath', value: "//a[@aria-label='Search for flights']"},
  icon_Stays: { type: 'xpath', value: "//a[@aria-label='Search for stays']"},
  icon_CarRental: { type: 'xpath', value: "//a[@aria-label='Search for cars']"},
};



export const HomePageLocators_Stays: HomePageLocatorsStaysType = {
  lbl_WhereDoYouWantToStay: { type: 'text', value: 'Where do you want to stay?' },
  lbl_Stays: { type: 'role', role: 'menuitem', value: { name: 'Search for stays' }},
};


export const HomePageLocators_Car: HomePageLocatorsCarType = {
  lbl_CarHires: { type: 'text', value: 'Car Hires' },

};

export const HomePageLocators_Footers: HomePageLocatorsFooters = {
  link_About: { type: 'role', role: 'link', value: { name: 'About' }},
  link_Press: { type: 'role', role: 'link', value: { name: 'Press' }},
  link_HelpFAQ: { type: 'role', role: 'link', value: { name: 'Help/FAQ' }},
};



interface HomePageLocatorsType {
  lbl_WhereDoYouWantToGo: LocatorInfo;
  icon_Flight: LocatorInfo;
  icon_Stays: LocatorInfo;
  icon_CarRental: LocatorInfo;
}

interface HomePageLocatorsStaysType {
  lbl_WhereDoYouWantToStay: LocatorInfo;
  lbl_Stays: LocatorInfo;
}

interface HomePageLocatorsCarType {
  lbl_CarHires: LocatorInfo;

}


interface HomePageLocatorsFooters {
  link_About: LocatorInfo;
  link_Press: LocatorInfo;
  link_HelpFAQ: LocatorInfo;
}