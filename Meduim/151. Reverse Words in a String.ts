function reverseWords(s: string): string {
  return s
    .trim()
    .split(" ")
    .reverse()
    .filter((e) => e !== "")
    .join(" ");
}
