/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   let x = m;
//   for (let i = 0; i < nums2.length; i++) {
//     nums1[x] = nums2[i];
//     x++;
//   }
//   nums1.sort((a, b) => a - b);
// };

var merge = function (nums1, m, nums2, n) {
  let fp = nums1[m - 1];
  let sp = nums2[n - 1];
  let ip = nums1[nums1.length];
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
