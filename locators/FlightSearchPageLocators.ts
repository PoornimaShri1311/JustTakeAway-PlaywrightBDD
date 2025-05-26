import type { LocatorInfo } from '../Utils/locator-types';

export const FlightSearchPageLocators: FlightSearchPageLocatorsFlightsType = {
  dropDown_FlightTripType: { type: 'xpath', value: "//div[@aria-controls='flight-trip-type-dropdown']//span" },
  dropDownValues_OneWay_FlightTripType: { type: 'xpath', value: "//li[@role='option' and @id='oneway']/span" },
  dropDownValues_MultiCity_FlightTripType: { type: 'xpath', value: "//li[@role='option' and @id='multicity']/span" },
  iconCross_RemoveOrigin: { type: 'xpath', value: "(//div[@role='button' and @aria-label='Remove value'])[1]" },
  iconCross_RemoveDestination: { type: 'xpath', value: "(//div[@role='button' and @aria-label='Remove value'])[2]" },
  txtField_FlightOrigin: { type: 'xpath', value: "//input[@aria-label='Flight origin input']" },
  txtDropDownValues_Origin_Any: { type: 'xpath', value: "//ul[@id='flight-origin-smarty-input-list']/li[@role='option' and contains(@aria-label,'XXXX')]" },
  txt_FlightOrigin: { type: 'xpath', value: "//input[@aria-label='Flight origin input']/preceding-sibling::div//div[contains(@class,'item-value')]" },
  txtField_FlightDestination: { type: 'xpath', value: "//input[@aria-label='Flight destination input']" },
  txtDropDownValues_Destination_Any: { type: 'xpath', value: "(//ul[@id='flight-destination-smarty-input-list']/li[@role='option' and contains(@aria-label,'XXXX')])[1]" },
  txt_FlightDestination: { type: 'xpath', value: "//input[@aria-label='Flight destination input']/preceding-sibling::div//div[contains(@class,'item-value')]" },
  txt_DateFromCalendar_Any: { type: 'role', role: 'button', value: { name: 'XXXX' }},
  txt_CheckInDate: { type: 'xpath', value: "//div[contains(@aria-label,'Departure')]/span//span" },
  txt_CheckOutDate: { type: 'xpath', value: "//div[contains(@aria-label,'Return')]/span//span" },
  txt_NumberOfAdults: { type: 'xpath', value: "//input[@aria-label='Adults']" },
  icon_IncrementAdults: { type: 'xpath', value: "//input[@aria-label='Adults']/following-sibling::button[@aria-label='Increment']" },
  icon_DecrementAdults: { type: 'xpath', value: "//input[@aria-label='Adults']/preceding-sibling::button[@aria-label='Increment']" },
  txt_NumberOfChildrens: { type: 'xpath', value: "//input[@aria-label='Children']" },
  icon_DecrementChildren: { type: 'xpath', value: "//input[@aria-label='Children']/preceding-sibling::button[@aria-label='Increment']" },
  icon_IncrementChildren: { type: 'xpath', value: "//input[@aria-label='Children']/following-sibling::button[@aria-label='Increment']" },
  txt_TravellersDetails: { type: 'xpath', value: "//div[contains(@aria-controls, 'travelers-dropdown')]//span" },
  chkBox_DirectFlights: { type: 'xpath', value: "//input[contains(@id,'direct-flight-toggle')]" },
  chkBox_OtherSearchEngineOptions: { type: 'xpath', value: "//input[contains(@id,'pres-default')]" },
  btn_SearchFlights : { type: 'role', role: 'button', value: { name: 'Search' } }
};


interface FlightSearchPageLocatorsFlightsType {
  dropDown_FlightTripType: LocatorInfo;
  dropDownValues_OneWay_FlightTripType: LocatorInfo;
  dropDownValues_MultiCity_FlightTripType: LocatorInfo;
  iconCross_RemoveOrigin: LocatorInfo;
  iconCross_RemoveDestination: LocatorInfo;
  txtField_FlightOrigin: LocatorInfo;
  txt_FlightOrigin: LocatorInfo;
  txtDropDownValues_Origin_Any: LocatorInfo;
  txtField_FlightDestination: LocatorInfo;
  txt_FlightDestination: LocatorInfo;
  txtDropDownValues_Destination_Any: LocatorInfo;
  txt_DateFromCalendar_Any: LocatorInfo;
  txt_CheckInDate: LocatorInfo;
  txt_CheckOutDate: LocatorInfo;
  txt_NumberOfAdults : LocatorInfo;
  txt_NumberOfChildrens : LocatorInfo;
  icon_IncrementAdults: LocatorInfo;
  icon_DecrementAdults: LocatorInfo;
  icon_IncrementChildren: LocatorInfo;
  icon_DecrementChildren: LocatorInfo;
  txt_TravellersDetails: LocatorInfo;
  chkBox_DirectFlights: LocatorInfo;
  chkBox_OtherSearchEngineOptions: LocatorInfo;
  btn_SearchFlights: LocatorInfo;
}

