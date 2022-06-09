/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//   const map = new Map();
//   const ans = [];
//   let num;
//   for (let i = 0; i < numbers.length; i++) {
//     num = target - numbers[i];
//     if (map.has(num)) {
//       ans.push(map.get(num), i + 1);
//       break;
//     } else map.set(numbers[i], i + 1);
//   }
//
//   return ans;
// };

var twoSum = function (numbers, target) {
  let p1 = 0;
  let p2 = numbers.length - 1;
  while (numbers[p1] + numbers[p2] !== target) {
    if (numbers[p1] + numbers[p2] > target) {
      p2--;
    } else {
      p1++;
    }
  }
  return [p1 + 1, p2 + 1];
};

twoSum([2, 7, 11, 15], 9);
twoSum([2, 3, 4], 6);
twoSum([-1, 0], -1);
