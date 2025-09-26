
/**
 * Extract the last word from a string (e.g., country from a location string).
 * @param text Input string
 * @returns The last word in the string
 */
export const extractLastWord = (text: string): string => {
  const words = text.trim().split(/\s+/);
  return words.length > 0 ? words[words.length - 1] : '';
};

/**
 * Get unique countries from a list of location strings.
 * @param locations Array of location strings
 * @returns Set of unique country names
 */
export const extractUniqueCountries = (locations: string[]): Set<string> =>
  new Set(locations.map(extractLastWord).filter(Boolean));
