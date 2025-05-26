import type { LocatorInfo } from '../Utils/locator-types';

export const FlightResultPageLocators: FlightResultPageLocatorsFlightsType = {
  section_FlightResult: { type: 'xpath', value: "//div[contains(@id,'flight-results-list-wrapper')]" },
  img_Graph :{ type:'role', role: 'img', value: { name: 'Interactive chart' } },
  chkBox_DirectFlights: { type: 'role', role : "checkbox", value: { name: 'Direct flights only' } },
  chkBox_DirectFlightsFilter: { type: 'role',  role: 'checkbox', value: { name: 'Direct' }, exact: true },
  txt_OneWayFlight: { type: 'role', role:"button", value: {name:'One-way'} },
  txt_RoundTripFlight: { type: 'role', role:"button", value: {name:'Return'} },
  txt_FlightLocationOrigin_Any: { type: 'xpath', value: "(//div[@role='option' and contains(@aria-label,'XXXX')])[1]"},
  txt_FlightLocationDestination_Any: { type: 'xpath', value: "(//div[@role='option' and contains(@aria-label,'XXXX')])[1]"},
  txt_CheckInDate: { type: 'xpath', value: "(//div[contains(@class,'date')]//span[contains(@class,'value')])[1]" },
  txt_TravelersDetails: { type: 'xpath', value: "(//div[contains(@class,'travelers')]//span[contains(@class,'value')])[1]" },
  txt_CabinDetails: { type: 'xpath', value: "(//div[contains(@class,'cabin')]//span[contains(@class,'value')])[1]" },
  txt_AirPortDetails_HotelResultCard_List: { type: 'xpath', value: "(//div[contains(@class,'full-airport')])[1]" }
}


interface FlightResultPageLocatorsFlightsType {
  section_FlightResult: LocatorInfo;
  img_Graph: LocatorInfo;
  chkBox_DirectFlights: LocatorInfo;
  chkBox_DirectFlightsFilter: LocatorInfo;
  txt_OneWayFlight: LocatorInfo;
  txt_RoundTripFlight: LocatorInfo;
  txt_FlightLocationOrigin_Any: LocatorInfo;
  txt_FlightLocationDestination_Any: LocatorInfo;
  txt_CheckInDate: LocatorInfo;
  txt_TravelersDetails: LocatorInfo;
  txt_CabinDetails: LocatorInfo;
  txt_AirPortDetails_HotelResultCard_List: LocatorInfo;
  
}

