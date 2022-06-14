/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function (word1, word2) {
  const arr1 = word1.split("");
  const arr2 = word2.split("");
  let dp = new Array(arr1.length + 1)
    .fill(0)
    .map(() => new Array(arr2.length + 1).fill(0));

  for (let i = 0; i <= arr1.length; i++) {
    for (let j = 0; j <= arr2.length; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (arr1[i - 1] === arr2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[arr1.length][arr2.length];
};

minDistance("sea", "eat");
// minDistance("leetcode", "etco");
