export function extractCountries(locationTexts: string[]): string[] {
  return locationTexts
    .map(loc => loc.trim().split(/\s+/).pop() || '')
    .filter(Boolean);
}