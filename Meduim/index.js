/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  const array = s.split("");
  let max = 0,
    E = 0;
  console.log(array);
  for (let i = 0; i < array.length; i++)
    if (array[i] === "E") {
      console.log(array[i]);
      E++;
      if (E > max) {
        console.log(i, max);
        max = E;
      }
    } else {
      console.log(array[i]);
      E--;
    }
  return max;
};

console.log(minimumChairs("ELELEEL"));
