"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageLocators_Footers = exports.HomePageLocators_Car = exports.HomePageLocators_Stays = exports.HomePageLocators = void 0;
exports.HomePageLocators = {
    lbl_WhereDoYouWantToGo: { type: 'text', value: 'Where do you want to go?' },
    icon_Flight: { type: 'xpath', value: "//a[@aria-label='Search for flights']" },
    icon_Stays: { type: 'xpath', value: "//a[@aria-label='Search for stays']" },
    icon_CarRental: { type: 'xpath', value: "//a[@aria-label='Search for cars']" },
};
exports.HomePageLocators_Stays = {
    lbl_WhereDoYouWantToStay: { type: 'text', value: 'Where do you want to stay?' },
    lbl_Stays: { type: 'role', role: 'menuitem', value: { name: 'Search for stays' } },
};
exports.HomePageLocators_Car = {
    lbl_CarHires: { type: 'text', value: 'Car Hires' },
};
exports.HomePageLocators_Footers = {
    link_About: { type: 'role', role: 'link', value: { name: 'About' } },
    link_Press: { type: 'role', role: 'link', value: { name: 'Press' } },
    link_HelpFAQ: { type: 'role', role: 'link', value: { name: 'Help/FAQ' } },
};
