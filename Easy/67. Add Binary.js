/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const A = BigInt("0b" + a);
  const B = BigInt("0b" + b);
  const sum = A + B;
  return sum.toString(2);
};
