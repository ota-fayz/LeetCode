/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((prev, curr) => prev ^ curr, 0);
};

singleNumber([2, 2, 1]);
singleNumber([4, 1, 2, 1, 2]);
singleNumber([1]);
