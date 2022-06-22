/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   nums.sort((a, b) => a - b);
//
//   return nums[nums.length - k];
// };

var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => a - b)[nums.length - k];
};

findKthLargest([3, 2, 1, 5, 6, 4], 2);
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
