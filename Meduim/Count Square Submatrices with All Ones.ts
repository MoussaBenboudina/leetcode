


function countSquares(matrix: number[][]): number {
  let result: number = matrix.flat(1).filter((n) => n === 1).length;
  const minLength = Math.min(matrix[0].length, matrix.length);
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] === 1) {
        for (let k = 2; k <= minLength; k++) {
          if (isSide(i, j, k)) result++;
        }
      } else {` `
        continue;
      }


      
  function isSide(idxI, idxJ, side) {
    for (let i = idxI; i < idxI + side; i++) {
      for (let j = idxJ; j < idxJ + side; j++) {
        console.log(i, j, " side :", side);
        if (i >= matrix.length || j >= matrix[0].length || matrix[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  return result;
}
