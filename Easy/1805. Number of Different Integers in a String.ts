function numDifferentIntegers(word: string): number {
  return [...new Set(word.match(/\d+/g)?.map((e) => BigInt(e)))].length;
}
