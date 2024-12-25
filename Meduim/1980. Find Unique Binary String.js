function findDifferentBinaryString(nums) {
  const n = nums[0].length;
  const maxNum = parseInt(Number("1".repeat(n)), 2);
  console.log(maxNum);

  for (let i = 0; i <= maxNum; i++)
    if (!nums.includes(i.toString(2).padStart(n, 0)))
      return i.toString(2).padStart(n, 0);
}
