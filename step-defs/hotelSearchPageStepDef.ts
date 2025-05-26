import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { HotelSearchPage } from '../pages/HotelSearchPage';

let hotelSearchPage: HotelSearchPage;

When("I enter the destination as {string} in the Hotel Search Page", async function (this: CustomWorld, destination: string) {
  hotelSearchPage = new HotelSearchPage(this.page!);
  hotelSearchPage.enterDestination(destination);
});

Then("validate that the destination should be displayed as {string} in the Hotel Search Page", async function (this: CustomWorld, destination: string) {
  hotelSearchPage = new HotelSearchPage(this.page!);
  hotelSearchPage.shouldDisplayDestination(destination);
});

