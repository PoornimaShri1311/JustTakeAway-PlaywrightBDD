/**
 * Utility functions for text manipulation.
 */
export class textUtils {
  /**
   * Remove a prefix from a string and trim whitespace.
   * @param text Input string
   * @param prefix Prefix to remove
   * @returns String without the prefix
   */
  static removePrefix(text: string, prefix: string): string {
    return text.replace(prefix, '').trim();
  }

  /**
   * Parse the first integer found in a string.
   * @param text Input string
   * @returns Parsed integer
   */
  static parseIntFromText(text: string): number {
    return parseInt(text.replace(/\D/g, ''), 10);
  }
}
