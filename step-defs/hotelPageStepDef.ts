import { Then } from '@cucumber/cucumber';
import { HotelResultPage } from '../pages/HotelResultPage';  // adjust the import path as necessary
import { CustomWorld } from '../support/custom-world';

let hotelResultPage: HotelResultPage;

// Then("validate that the Hotel Result Page should be displayed", async function (this: CustomWorld) {
//   hotelResultPage = new HotelResultPage(this.page!);
//   await hotelResultPage.shouldDisplayHotelResultPage();
// });

// Then("validate that the Hotel Result Page for destination {string} should be displayed", async function (this: CustomWorld, destination: string) {  
//   await hotelResultPage.shouldDisplayHotelResultPageForDestination(destination);
// });