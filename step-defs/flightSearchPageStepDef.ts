import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { ReusableCode } from '../Utils/ReusableCode';
import { addDays, format } from 'date-fns';
import { FlightSearchPage } from '../pages/FlightSearchPage';

let flightSearchPage: FlightSearchPage;

  When('I click on Flight Trip Drop Down in the Flight Search Page', async function (this: CustomWorld) {
    flightSearchPage = new FlightSearchPage(this.page!);
    await flightSearchPage.clickFlightTripDropDown()
  });

  When('I select {string} Trip option from the Flight Trip Drop Down in the Flight Search Page', async function (this: CustomWorld, tripType: string) {

    if (tripType === 'One-way') {
      await flightSearchPage.clickFlightTripTypeOneWay()
    } else if (tripType === 'Multi City') {
      await flightSearchPage.clickFlightTripTypeMultiCity()
    }
  });

  Then("validate that the Flight Trip Drop Down should be displayed as {string} in the Flight Search Page", async function (this: CustomWorld, tripType: string) {  
    await flightSearchPage.shouldDisplayFlightTripType(tripType)
  });

  When("I remove the already selected flight option from the Origin in the Flight Search Page", async function (this: CustomWorld) {
    flightSearchPage = new FlightSearchPage(this.page!);
    await flightSearchPage.removeAlreadySelectedFlightOrigin()
  });

  When("I select {string} as the Flight Origin in the Flight Search Page", async function (this: CustomWorld, flightOrigin: string) {
    await flightSearchPage.selectFlightOrigin(flightOrigin)
  });


  When("I select {string} as the Flight Destination in the Flight Search Page", async function (this: CustomWorld, flightDestination: string) {
    await flightSearchPage.selectFlightDestination(flightDestination)
  });

  When("I enter the Flight check-in date after {string} days from today in the Flight Search Page", async function (this: CustomWorld, daysOut: string) {
    const reusableCode = new ReusableCode(this.page!);
    const checkInDate = await reusableCode.getFormattedDate(daysOut)
    await flightSearchPage.selectCheckInDate(checkInDate)
    this.flightCheckInDate= await reusableCode.changeDateFormat(checkInDate)  
    this.flightDaysOut = daysOut
  });

  When("I enter the Flight check-out date after {string} days from Flight check-in date in the Flight Search Page", async function (this: CustomWorld, daysOut: string) {
    const reusableCode = new ReusableCode(this.page!);
    const totalDaysOut = Number(daysOut) + Number(this.flightDaysOut);
    const checkOutDate = await reusableCode.getFormattedDate(totalDaysOut.toString())
    await flightSearchPage.selectCheckOutDate(checkOutDate)
    this.flightCheckOutDate= await reusableCode.changeDateFormat(checkOutDate)
  
  });


  When("I select {int} Adults from the Passengers Drop Down in the Flight Search Page", async function (this: CustomWorld, noOfAdults: number) {
    await flightSearchPage.selectAdults(noOfAdults)
  });

  When("I select {int} Childrens from the Passengers Drop Down in the Flight Search Page", async function (this: CustomWorld, noOfChilds: number) {
    await flightSearchPage.selectChildrens(noOfChilds)
  });

  Then("validate that the Travellers total count should be displayed as {string} in the Flight Search Page", async function (this: CustomWorld, totalTravellersCount: string) {
    await flightSearchPage.shouldDisplayTotalTravellersCount(totalTravellersCount)

  });

  Then("validate that the Flight Origin should be displayed as {string} in the Flight Search Page", async function (this: CustomWorld, flightOrigin: string) {
    await flightSearchPage.shouldDisplayFlightOrigin(flightOrigin)
  });

  Then("validate that the Flight Destination should be displayed as {string} in the Flight Search Page", async function (this: CustomWorld, flightDestination: string) {
    await flightSearchPage.shouldDisplayFlightDestination(flightDestination)
  });

  Then("validate that the Flight check-in date should be displayed in the Flight Search Page", async function (this: CustomWorld) {
    await flightSearchPage.shouldDisplayFlightCheckInDate(this.flightCheckInDate)
  });

  Then("validate that the selected Flight check-out date should be displayed in the Flight Search Page", async function (this: CustomWorld) {
    await flightSearchPage.shouldDisplayFlightCheckOutDate(this.flightCheckOutDate)
  });

  When("I click on Direct Flight checkbox in the Flight Search Page", async function (this: CustomWorld) {
    await flightSearchPage.clickDirectFlightCheckBox()
  });

  Then("validate that the Direct Flight checkbox should be displayed as {string} in the Flight Search Page", async function (this: CustomWorld, isChecked: string) {
    await flightSearchPage.shouldDisplayDirectFlightCheckBoxStatusAs(isChecked)
  });

  When("I click on Search Flight button in the Flight Search Page", async function (this: CustomWorld) {
    await flightSearchPage.clickSearchFlightsButton()
  });

  When("I uncheck the Other search engine checkbox in the Flight Search Page", async function (this: CustomWorld) {
    await flightSearchPage.clickOtherSearchEngineCheckBox()
  });

  Then("validate that the Other search engine checkbox should be displayed as {string} in the Flight Search Page", async function (this: CustomWorld, isChecked: string) {
    await flightSearchPage.shouldDisplayOtherSearchEngineCheckBoxStatusAs(isChecked)
  });
  