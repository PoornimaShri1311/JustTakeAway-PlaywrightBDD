export const extractLastWord = (text: string): string => {
  const words = text.trim().split(/\s+/);
  return words.length > 0 ? words[words.length - 1] : '';
};

export const extractUniqueCountries = (locations: string[]): Set<string> =>
  new Set(locations.map(extractLastWord).filter(Boolean));
