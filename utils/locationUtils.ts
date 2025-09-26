/**
 * Extracts the last word (country) from each location string in the array.
 * @param locationTexts Array of location strings
 * @returns Array of country names
 */
export function extractCountries(locationTexts: string[]): string[] {
  return locationTexts
    .map(loc => loc.trim().split(/\s+/).pop() || '')
    .filter(Boolean);
}