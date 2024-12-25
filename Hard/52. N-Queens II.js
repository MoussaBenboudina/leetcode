/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const solutions = [];
  function isValid(s, row, col) {
    for (let i = 0; i < row; i++) {
      if (s[i] === col || Math.abs(s[i] - col) === row - i) {
        return false;
      }
    }
    return true;
  }

  function solve(row, s) {
    if (row === n) {
      solutions.push([...s]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isValid(s, row, i)) {
        s[row] = i;
        solve(row + 1, s);
        s[row] = -1;
      }
    }
  }

  function getBoard(s) {
    const board = Array.from({ length: n }, () => Array(n).fill("."));
    for (let i = 0; i < n; i++) board[i][s[i]] = "Q";
    return board.map((e) => e.join``);
  }

  solve(0, Array(n).fill(-1));

  return solutions.length;
};
