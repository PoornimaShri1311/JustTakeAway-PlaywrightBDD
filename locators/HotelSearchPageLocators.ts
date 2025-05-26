import type { LocatorInfo } from '../Utils/locator-types';

export const HotelSearchPageLocators: HotelSearchPageLocatorstype = {
  lbl_WhereDoYouWantToStay: { type: 'text', value: 'Where do you want to stay?' },
  lbl_Stays: { type: 'role', role: 'menuitem', value: { name: 'Search for stays' }},
  txtField_Destination: { type: 'role', role : 'textbox', value: { name: 'Enter a city, hotel, airport' } }
};


interface HotelSearchPageLocatorstype {
  lbl_WhereDoYouWantToStay: LocatorInfo;
  lbl_Stays: LocatorInfo;
  txtField_Destination: LocatorInfo;
}

