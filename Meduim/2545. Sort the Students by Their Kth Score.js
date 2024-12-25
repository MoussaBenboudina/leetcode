var sortTheStudents = function (score, k) {
  const result = [];
  const scrLength = score.length;
  const indexes = [];
  let index;

  for (let i = 0; i < scrLength; i++) indexes.push(score[i][k]);
  while (!indexes.every((e) => e == null)) {
    index = indexes.findIndex((e) => e == Math.max(...indexes));
    indexes[index] = null;
    const row = [];
    for (let j = 0; j < score[0].length; j++) {
      row.push(score[index][j]);
    }
    result.push(row);
  }

  return result;
};
