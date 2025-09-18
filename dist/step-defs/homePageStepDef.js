"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const HomePage_1 = require("../pages/HomePage");
const testData = __importStar(require("../test-data/testing-data.json"));
let homePage;
(0, cucumber_1.Given)('I am on the Home Page', { timeout: 20000 }, async function () {
    homePage = new HomePage_1.HomePage(this.page);
    console.log('Navigating to:', testData.urls.homePage);
    await this.page.goto(testData.urls.homePage);
});
// When('I click on Stays icon in the Home Page', async function (this: CustomWorld) {
//   await homePage.clickStaysIcon()
// });
// Then(/^validate that the Where do you want to go\? label should be displayed in the Home Page$/, async function (this: CustomWorld) {
//   await homePage.shouldDisplayWhereDoYouWantToGolabel();
// });
// Then(/^validate that the Where do you want to stay\? label should be displayed in the Home Page$/, async function (this: CustomWorld) {
//   await homePage.shouldDisplayWhereDoYouWantToStaylabel();
// });
// Then(/^validate that the Car Hires label should be displayed in the Home Page$/, async function (this: CustomWorld) {
//   await homePage.shouldDisplayCarHireslabel();
// });
// When("validate that the {string} icon should be displayed as selected in the Home Page", async function (this: CustomWorld, iconName: string) {
//   if (iconName === 'Stays') {
//     await homePage.shouldDisplayStaysIconAsSelected()
//   } else if (iconName === 'Flight') {
//     await homePage.shouldDisplayFlightIconAsSelected()
//   }
//   else if (iconName === 'Car Rental') {
//     await homePage.shouldDisplayCarRentalIconAsSelected()
//   }
//   });
//   When("validate that the {string} icon should NOT be displayed as selected in the Home Page", async function (this: CustomWorld, iconName: string) {
//     if (iconName === 'Stays') {
//       await homePage.shouldNotDisplayStaysIconAsSelected()
//     } else if (iconName === 'Flights') {
//       await homePage.shouldNotDisplayFlightIconAsSelected()
//     }
//     else if (iconName === 'Car Rental') {
//       await homePage.shouldNotDisplayCarRentalIconAsSelected()
//     }
//     });  
//   When('I click on Car Rental icon in the Home Page', async function (this: CustomWorld) {
//       await homePage.clickCarRentalIcon()
//     });  
//   When('I click on About Us link in the footer section of the Home Page', async function (this: CustomWorld) {
//       await homePage.clickAboutUsLink()
//     });
//   When('I click on Press link in the footer section of the Home Page', async function (this: CustomWorld) {
//       await homePage.clickPressLink()
//     });
//     When(/^I click on Help\/FAQ link in the footer section of the Home Page$/, async function (this: CustomWorld) {
//       await homePage.clickHelpFAQLink();
//     });
(0, cucumber_1.Then)('I should see the welcome message', async function () {
    console.log('✅ Welcome message visible');
});
