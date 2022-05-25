/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let first = 0;
  let second = 1;
  let ans;
  for (let i = 0; i < n; i++) {
    ans = first + second;
    first = second;
    second = ans;
  }
  return ans;
};

climbStairs(2);
climbStairs(3);
