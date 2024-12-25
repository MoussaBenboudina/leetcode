function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix[0][0] > target) return false;
  for (let i = 0; i < matrix.length; i++)
    if (matrix[i].includes(target)) return true;
  return false;
}
