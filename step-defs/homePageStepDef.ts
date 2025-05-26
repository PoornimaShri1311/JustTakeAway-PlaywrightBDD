import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { HomePage } from '../pages/HomePage';
import { ReusableCode } from '../Utils/ReusableCode';
import { addDays, format } from 'date-fns';

let homePage: HomePage;

Given('I am on the Home Page',{ timeout: 20000 }, async function (this: CustomWorld) {
  homePage = new HomePage(this.page!);
  await homePage.gotoHomePage();
});

When('I click on Stays icon in the Home Page', async function (this: CustomWorld) {
  await homePage.clickStaysIcon()
});

Then(/^validate that the Where do you want to go\? label should be displayed in the Home Page$/, async function (this: CustomWorld) {
  await homePage.shouldDisplayWhereDoYouWantToGolabel();
});

Then(/^validate that the Where do you want to stay\? label should be displayed in the Home Page$/, async function (this: CustomWorld) {
  await homePage.shouldDisplayWhereDoYouWantToStaylabel();
});


Then(/^validate that the Car Hires label should be displayed in the Home Page$/, async function (this: CustomWorld) {
  await homePage.shouldDisplayCarHireslabel();
});

When("validate that the {string} icon should be displayed as selected in the Home Page", async function (this: CustomWorld, iconName: string) {
  if (iconName === 'Stays') {
    await homePage.shouldDisplayStaysIconAsSelected()
  } else if (iconName === 'Flight') {
    await homePage.shouldDisplayFlightIconAsSelected()
  }
  else if (iconName === 'Car Rental') {
    await homePage.shouldDisplayCarRentalIconAsSelected()
  }
  });


  When("validate that the {string} icon should NOT be displayed as selected in the Home Page", async function (this: CustomWorld, iconName: string) {
    if (iconName === 'Stays') {
      await homePage.shouldNotDisplayStaysIconAsSelected()
    } else if (iconName === 'Flights') {
      await homePage.shouldNotDisplayFlightIconAsSelected()
    }
    else if (iconName === 'Car Rental') {
      await homePage.shouldNotDisplayCarRentalIconAsSelected()
    }
    });  

  When('I click on Car Rental icon in the Home Page', async function (this: CustomWorld) {
      await homePage.clickCarRentalIcon()
    });  

  When('I click on About Us link in the footer section of the Home Page', async function (this: CustomWorld) {
      await homePage.clickAboutUsLink()
    });

  When('I click on Press link in the footer section of the Home Page', async function (this: CustomWorld) {
      await homePage.clickPressLink()
    });

    When(/^I click on Help\/FAQ link in the footer section of the Home Page$/, async function (this: CustomWorld) {
      await homePage.clickHelpFAQLink();
    });

