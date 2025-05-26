import { Page, expect as pwExpect } from '@playwright/test';
import { getLocator } from '../Utils/locatorUtils';
import { ReusableCode } from '../Utils/ReusableCode';
import testData from '../test-data/testing-data.json';
import { FlightSearchPageLocators } from '../locators/FlightSearchPageLocators';


export class FlightSearchPage {

  constructor(private page: Page) {}


  async clickFlightTripDropDown() {
    const locator = getLocator(this.page!, FlightSearchPageLocators.dropDown_FlightTripType);
    await locator.click();
  }

  async clickFlightTripTypeOneWay() {
    const locator = getLocator(this.page!, FlightSearchPageLocators.dropDownValues_OneWay_FlightTripType);
    await locator.click();
  }

  async clickFlightTripTypeMultiCity() {
    const locator = getLocator(this.page!, FlightSearchPageLocators.dropDownValues_MultiCity_FlightTripType);
    await locator.click();
  }

  async shouldDisplayFlightTripType(tripType: string) {
    const locator = getLocator(this.page!, FlightSearchPageLocators.dropDown_FlightTripType);
    const flightTripText = await locator.textContent();
    console.log('Flight Trip Type Drop Down aria-selected text:', flightTripText);
    await pwExpect(locator).toHaveText(tripType);
  }

  async removeAlreadySelectedFlightOrigin() {
    const locator = getLocator(this.page!, FlightSearchPageLocators.iconCross_RemoveOrigin);
    await locator.click();
  }

  async selectFlightOrigin(flightOrigin: string) {
    const locator = getLocator(this.page!, FlightSearchPageLocators.txtField_FlightOrigin);
    await locator.click();
    await locator.fill(flightOrigin);
    const reusableCode = new ReusableCode(this.page!);
    await reusableCode.clickOnReplacedLocator(FlightSearchPageLocators.txtDropDownValues_Origin_Any, flightOrigin);
  }



  async selectFlightDestination(flightDestination: string) {
    const locator = getLocator(this.page!, FlightSearchPageLocators.txtField_FlightDestination);
    await locator.click();
    await locator.fill(flightDestination);
    const reusableCode = new ReusableCode(this.page!);
    await reusableCode.clickOnReplacedLocator(FlightSearchPageLocators.txtDropDownValues_Destination_Any, flightDestination);
  }

  async selectCheckInDate(checkInDate: string) {
    const reusableCode = new ReusableCode(this.page!);
    await reusableCode.clickOnReplacedLocator(FlightSearchPageLocators.txt_DateFromCalendar_Any, checkInDate);
  }

  async selectCheckOutDate(checkOutDate: string) {
    const reusableCode = new ReusableCode(this.page!);
    await reusableCode.clickOnReplacedLocator(FlightSearchPageLocators.txt_DateFromCalendar_Any, checkOutDate);
  }

  async selectAdults(noOfAdults: number) {
    for (let i = 0; i < noOfAdults; i++) {
      const numberOfAdultsAlreadySelectedStr = await getLocator(this.page!, FlightSearchPageLocators.txt_NumberOfAdults).getAttribute('value');
      const numberOfAdultsAlreadySelected = Number(numberOfAdultsAlreadySelectedStr) || 0;
    
      if (numberOfAdultsAlreadySelected === noOfAdults) {
        break;
      } else if (numberOfAdultsAlreadySelected > noOfAdults) {
        await getLocator(this.page!, FlightSearchPageLocators.icon_DecrementAdults).click();
      } else {
        await getLocator(this.page!, FlightSearchPageLocators.icon_IncrementAdults).click();
      }
    }
  }


  async selectChildrens(noOfChilds: number) {
    const numberOfChildsAlreadySelectedStr = await getLocator(this.page!, FlightSearchPageLocators.txt_NumberOfChildrens).getAttribute('value');
    const numberOfChildsAlreadySelected = Number(numberOfChildsAlreadySelectedStr) || 0;
  
    for (let i = 0; i < noOfChilds; i++) {
      if (+numberOfChildsAlreadySelected == noOfChilds) {
        break;
      }
      else if (+numberOfChildsAlreadySelected > noOfChilds) {
        await getLocator(this.page!, FlightSearchPageLocators.icon_DecrementChildren).click();
      }
      else {
        await getLocator(this.page!, FlightSearchPageLocators.icon_IncrementChildren).click();
      }
    }
  }


  async shouldDisplayTotalTravellersCount(totalTravellers: string) {
    const actualTravellerCount = await getLocator(this.page!, FlightSearchPageLocators.txt_TravellersDetails).textContent();
    console.log('Total Travellers Count:', actualTravellerCount);
    await pwExpect(actualTravellerCount).toContain(totalTravellers);
  }

  async shouldDisplayFlightOrigin(flightOrigin: string) {
    const actualFlightOrigin = await getLocator(this.page!, FlightSearchPageLocators.txt_FlightOrigin).textContent();
    console.log('Flight Origin:', actualFlightOrigin);
    await pwExpect(actualFlightOrigin).toContain(flightOrigin);
  }
  
  async shouldDisplayFlightDestination(flightDestination: string) {
    const actualFlightDestination = await getLocator(this.page!, FlightSearchPageLocators.txt_FlightDestination).textContent();
    console.log('Flight Destination:', actualFlightDestination);
    await pwExpect(actualFlightDestination).toContain(flightDestination);
  }

  async shouldDisplayFlightCheckInDate(checkInDate: string) {
    const actualCheckInDate = await getLocator(this.page!, FlightSearchPageLocators.txt_CheckInDate).textContent();
    console.log('Flight Check-In Date:', actualCheckInDate);
    await pwExpect(actualCheckInDate).toContain(checkInDate);
  }

  async shouldDisplayFlightCheckOutDate(checkOutDate: string) {
    const actualCheckOutDate = await getLocator(this.page!, FlightSearchPageLocators.txt_CheckOutDate).textContent();
    console.log('Flight Check-Out Date:', actualCheckOutDate);
    await pwExpect(actualCheckOutDate).toContain(checkOutDate);
  }

  async clickDirectFlightCheckBox() {
    const locator = getLocator(this.page!, FlightSearchPageLocators.chkBox_DirectFlights);
    await locator.click();
  }

  async clickOtherSearchEngineCheckBox() {
    const locator = getLocator(this.page!, FlightSearchPageLocators.chkBox_OtherSearchEngineOptions);
    await locator.click();
  }

  async clickSearchFlightsButton() {
    const locator = getLocator(this.page!, FlightSearchPageLocators.btn_SearchFlights);
    locator.click()
  }

  async shouldDisplayDirectFlightCheckBoxStatusAs(isChecked: string) {
    const locator = getLocator(this.page!, FlightSearchPageLocators.chkBox_DirectFlights);
    const isCheckedValue = await locator.isChecked();
    console.log('Direct Flight CheckBox:', isCheckedValue);
    if (isChecked.toLowerCase() === 'checked') {
      await pwExpect(locator).toBeChecked();
    } else {
      await pwExpect(locator).not.toBeChecked();
    }
  }

  async shouldDisplayOtherSearchEngineCheckBoxStatusAs(isChecked: string) {
    const locator = getLocator(this.page!, FlightSearchPageLocators.chkBox_OtherSearchEngineOptions);
    const isCheckedValue = await locator.isChecked();
    console.log('Other Search Engine CheckBox:', isCheckedValue);
    if (isChecked.toLowerCase() === 'checked') {
      await pwExpect(locator).toBeChecked();
    } else {
      await pwExpect(locator).not.toBeChecked();
    }
  }


  

  

  
}