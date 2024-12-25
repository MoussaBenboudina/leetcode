/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

var fullJustify = function (words, maxWidth) {
  
  const result = [];
  let part = "";

  for (let i = 0; i < words.length; ) {
    if (part.length + words[i].length <= maxWidth) {
      part += words[i] + " ";
      if (i === words.length - 1) {
        result.push(part.trimEnd());
      }
      i++;
    } else {
      part.length = part.length - 1;
      result.push(part.trimEnd());
      part = "";
    }
  }

  function addSpaces(arr, maxWidth) {
    const newArray = arr.map((e) => e.split(" "));

    for (let i = 0; i < newArray.length; i++)
      if (newArray[i].length === 1) {
        newArray[i] = newArray[i][0].padEnd(maxWidth);
      } else if (i === newArray.length - 1) {
        newArray[i] = newArray[i].join(" ").padEnd(maxWidth);
      } else {
        let n = newArray[i].reduce((a, b) => a + b.length, 0);
        let k = 0;
        while (n < maxWidth) {
          newArray[i][k] += " ";
          k++;
          if (k === newArray[i].length - 1) {
            k = 0;
          }
          n = newArray[i].reduce((a, b) => a + b.length, 0);
        }
      }
    const res = newArray.map((e) => {
      if (typeof e === "object") {
        return e.join("");
      } else {
        return e;
      }
    });
    return res;
  }

  return addSpaces(result, maxWidth);
};
