function intersection(nums1: number[], nums2: number[]): number[] {
  const uniqueNums1 : number[] = [...new Set(nums1)];
  const uniqueNums2 : number[] = [...new Set(nums2)];
  const result: number[] = [];
  for (let i = 0; i < uniqueNums1.length; i++)
    if (uniqueNums2.includes(uniqueNums1[i])) result.push(uniqueNums1[i]);

  
  return result;
}
