export class TextUtils {
  static removePrefix(text: string, prefix: string): string {
    return text.replace(prefix, '').trim();
  }

  static parseIntFromText(text: string): number {
    return parseInt(text.replace(/\D/g, ''), 10);
  }
}
