/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (puzzle) {
  n = puzzle.length;

  function isValid(row, col, val) {
    function inRow() {
      for (let i = 0; i < n; i++)
        if (puzzle[row][i] === String(val)) return true;
      return false;
    }

    function inColumn() {
      for (let i = 0; i < n; i++)
        if (puzzle[i][col] === String(val)) return true;
      return false;
    }

    function inBox() {
      let r = row - (row % 3);
      let c = col - (col % 3);

      for (let i = r; i < r + 3; i++)
        for (let j = c; j < c + 3; j++)
          if (puzzle[i][j] === String(val)) return true;
      return false;
    }

    return !inRow() && !inColumn() && !inBox();
  }

  function solved() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (puzzle[i][j] === ".") {
          for (let gn = 1; gn <= n; gn++) {
            if (isValid(i, j, gn)) {
              puzzle[i][j] = String(gn);
              if (solved()) {
                return true;
              } else {
                puzzle[i][j] = ".";
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  solved();

  return;
};
