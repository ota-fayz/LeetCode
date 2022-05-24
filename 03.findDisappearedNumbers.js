/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function (nums) {
//   const arr = new Array(nums.length).fill(-1);
//   const ans = [];
//   for (const num of nums) {
//     arr[num - 1] = num;
//   }
//   arr.forEach((elem, index) => {
//     if (elem === -1) {
//       ans.push(index + 1);
//     }
//   });
//   console.log(ans);
//   return ans;
// };

var findDisappearedNumbers = function (nums) {
  const set = new Set(nums);
  const ans = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      ans.push(i);
    }
  }
  console.log(ans);
  return ans;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
findDisappearedNumbers([1, 1]);
