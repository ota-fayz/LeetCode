/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    num % 2 === 0 ? (num /= 2) : (num -= 1);
    count++;
  }
  console.log(count);
  return count;
};

numberOfSteps(0);
numberOfSteps(14);
numberOfSteps(8);
numberOfSteps(123);
