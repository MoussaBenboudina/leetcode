/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function findMedianSortedArrays(nums1, nums2) {
  function sortN(arr) {
    for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr.length; j++)
        if (arr[i] < arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    return arr;
  }
  for (let i = 0; i < nums2.length; i++) nums1[nums1.length++] = nums2[i];
  nums1 = sortN(nums1);
  console.log(nums1);
  return nums1.length % 2 === 0
    ? (nums1[nums1.length / 2 - 1] + nums1[nums1.length / 2]) / 2
    : nums1[parseInt(nums1.length / 2)];
}
