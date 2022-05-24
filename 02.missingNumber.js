/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  const progressionSum = ((1 + n) * n) / 2;
  console.log(progressionSum - sum);
  return progressionSum - sum;
};

missingNumber([3, 0, 1]);
missingNumber([0, 1]);
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
