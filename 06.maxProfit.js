/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      let profit = prices[i] - prices[j];
      if (profit > ans) {
        ans = profit;
      }
    }
  }
  console.log(ans);
  return ans;
};

maxProfit([7, 6, 4, 3, 1]);
