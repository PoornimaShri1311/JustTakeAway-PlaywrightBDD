"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractCountries = extractCountries;
function extractCountries(locationTexts) {
    return locationTexts
        .map(loc => loc.trim().split(/\s+/).pop() || '')
        .filter(Boolean);
}
