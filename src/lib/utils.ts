export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function splitWords(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}
