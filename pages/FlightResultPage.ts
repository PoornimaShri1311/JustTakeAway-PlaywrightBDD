import { Page, expect as pwExpect } from '@playwright/test';
import { getLocator } from '../Utils/locatorUtils';
import { FlightResultPageLocators } from '../locators/FlightResultPageLocators';
import { time } from 'console';
import { ReusableCode } from '../Utils/ReusableCode';


export class FlightResultPage {

  constructor(private page: Page) {}


  async shouldDisplayFlightResults() {
    const locatorGraph = getLocator(this.page!, FlightResultPageLocators.img_Graph).first();
    await pwExpect(locatorGraph).toBeVisible({timeout: 10000});
    const locator = getLocator(this.page!, FlightResultPageLocators.section_FlightResult);
    await pwExpect(locator).toBeVisible();
  }

  async shouldDisplayDirectFlightCheckBoxStatusAs(isChecked: string) {
      const locator = getLocator(this.page!, FlightResultPageLocators.chkBox_DirectFlights);
      const isCheckedValue = await locator.isChecked();
      console.log('Direct Flight CheckBox:', isCheckedValue);
      if (isChecked.toLowerCase() === 'checked') {
        await pwExpect(locator).toBeChecked({ timeout: 10000 });
      } else {
        await pwExpect(locator).not.toBeChecked({ timeout: 10000 });
      }
  }


  async shouldDisplayDirectFlightFilterCheckBoxStatusAs(isChecked: string) {
    const locator = getLocator(this.page!, FlightResultPageLocators.chkBox_DirectFlightsFilter);
    const isCheckedValue = await locator.isChecked();
    console.log('Direct Flight Filter CheckBox:', isCheckedValue);
    if (isChecked.toLowerCase() === 'checked') {
      await pwExpect(locator).toBeChecked();
    } else {
      await pwExpect(locator).not.toBeChecked();
    }
}

  async shouldDisplayOneWayAsFlightTripType() {
    const locator = getLocator(this.page!, FlightResultPageLocators.txt_OneWayFlight);
    await pwExpect(locator).toBeVisible();
  }

  async shouldDisplayRoundTripFlightTripType() {
    const locator = getLocator(this.page!, FlightResultPageLocators.txt_RoundTripFlight);
    await pwExpect(locator).toBeVisible();
  }

  async shouldDisplayFlightLocationOriginAs(flightOrigin: string) {
    const reusuableCode = new ReusableCode(this.page!);
    reusuableCode.verifyReplacedLocatorElementIsVisible(FlightResultPageLocators.txt_FlightLocationOrigin_Any, flightOrigin);
    console.log('Flight Origin from Flight Result Page:', flightOrigin);

  }

  async shouldDisplayFlightLocationDestinationAs(flightDestination: string) {
    const reusuableCode = new ReusableCode(this.page!);
    reusuableCode.verifyReplacedLocatorElementIsVisible(FlightResultPageLocators.txt_FlightLocationDestination_Any, flightDestination);
    console.log('Flight Destination from Flight Result Page:', flightDestination);
  }

    async shouldDisplayFlightCheckInDate(checkInDate: string) {
      const actualCheckInDate = await getLocator(this.page!, FlightResultPageLocators.txt_CheckInDate).textContent();
      console.log('Flight Check-In Date:', actualCheckInDate);
      await pwExpect(actualCheckInDate).toContain(checkInDate);
    }

    async shouldDisplayTotalTravellersCount(totalTravellers: string) {
      const actualTotalTravellers = await getLocator(this.page!, FlightResultPageLocators.txt_TravelersDetails).textContent();
      console.log('Total Travellers:', actualTotalTravellers);
      await pwExpect(actualTotalTravellers).toContain(totalTravellers);
    }

    async shouldDisplayFlightCabinDetails(flightCabin: string) {
      const actualFlightCabin = await getLocator(this.page!, FlightResultPageLocators.txt_CabinDetails).textContent();
      console.log('Flight Cabin:', actualFlightCabin);
      await pwExpect(actualFlightCabin).toContain(flightCabin);
    }

    async shouldDisplayFlightOrigin_FlightCards(flightOrigin: string) {
      const airportDetails = await getLocator(this.page!, FlightResultPageLocators.txt_AirPortDetails_HotelResultCard_List);
      const count = await airportDetails.count();

      for (let i = 0; i < count; i++) {
        const text = await airportDetails.nth(i).textContent();
        console.log(`Airport ${i}: ${text}`);
        await pwExpect(text).toContain(flightOrigin);

      }

      console.log(`✅ All airport details contains Flight Origin ${flightOrigin}`);
    
    }


    async shouldDisplayFlightDestination_FlightCards(flightDestination: string) {
      const airportDetails = await getLocator(this.page!, FlightResultPageLocators.txt_AirPortDetails_HotelResultCard_List);
      const count = await airportDetails.count();

      for (let i = 0; i < count; i++) {
        const text = await airportDetails.nth(i).textContent();
        console.log(`Airport ${i}: ${text}`);
        await pwExpect(text).toContain(flightDestination);

      }

      console.log(`✅ All airport details contains Flight Destination ${flightDestination}`);
    
    }

 
}