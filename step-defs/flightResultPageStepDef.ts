import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { ReusableCode } from '../Utils/ReusableCode';
import { addDays, format } from 'date-fns';
import { FlightResultPage } from '../pages/FlightResultPage';

let flightResultPage: FlightResultPage;

  When('validate that the Flight Search results page should be displayed', async function (this: CustomWorld) {
    flightResultPage = new FlightResultPage(this.page!);
    await flightResultPage.shouldDisplayFlightResults()
  });

  Then("validate that the Direct Flight checkbox should be displayed as {string} in the Flight Result Page", async function (this: CustomWorld, isChecked: string) {
    await flightResultPage.shouldDisplayDirectFlightCheckBoxStatusAs(isChecked)
  });

  Then("validate that the Direct Flight filter checkbox should be displayed as {string} in the Flight Result Page", async function (this: CustomWorld, isChecked: string) {
    await flightResultPage.shouldDisplayDirectFlightFilterCheckBoxStatusAs(isChecked)
  });

  Then("validate that the One way trip option should be displayed in the Flight Result Page", async function (this: CustomWorld) {
    await flightResultPage.shouldDisplayOneWayAsFlightTripType()
  });

  Then("validate that the Round trip option should be displayed in the Flight Result Page", async function (this: CustomWorld) {
    await flightResultPage.shouldDisplayRoundTripFlightTripType()
  });

  Then("validate that the Flight Origin should be displayed as {string} in the Flight Result Page", async function (this: CustomWorld, flightOrigin: string) {
    await flightResultPage.shouldDisplayFlightLocationOriginAs(flightOrigin)
  });

  Then("validate that the Flight Destination should be displayed as {string} in the Flight Result Page", async function (this: CustomWorld, flightDestination: string) {
    await flightResultPage.shouldDisplayFlightLocationDestinationAs(flightDestination)
  });

  Then("validate that the Flight check-in date should be displayed in the Flight Result Page", async function (this: CustomWorld) {
    await flightResultPage.shouldDisplayFlightCheckInDate(this.flightCheckInDate)

  });

  Then("validate that the Travellers total count should be displayed as {string} in the Flight Result Page", async function (this: CustomWorld, totalTravellers: string) {  
    await flightResultPage.shouldDisplayTotalTravellersCount(totalTravellers)
  }); 

  Then("validate that the Flight Cabin should be displayed as {string} in the Flight Result Page", async function (this: CustomWorld, flightCabin: string) {
    await flightResultPage.shouldDisplayFlightCabinDetails(flightCabin)

  });

  Then("validate that the Flight Origin as {string} should be displayed on all the Flight Card in the Flight Result Page", async function (this: CustomWorld, flightOrigin: string) {
    await flightResultPage.shouldDisplayFlightOrigin_FlightCards(flightOrigin)
  });

  Then("validate that the Flight Destination as {string} should be displayed on all the Flight Card in the Flight Result Page", async function (this: CustomWorld, flightOrigin: string) {
    await flightResultPage.shouldDisplayFlightDestination_FlightCards(flightOrigin)
  });

  


