/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (i === 0 && j === 0) triangle[i][j] = triangle[i][j];
      else if (j === 0) triangle[i][j] += triangle[i - 1][j];
      else if (j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
      }
    }
  }

  let min = triangle[triangle.length - 1][0];
  for (let i = 1; i < triangle.length; i++) {
    min = Math.min(min, triangle[triangle.length - 1][i]);
  }
  return min;
};

const ans = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
// console.log(ans);
// const ans2 = minimumTotal([[-1], [3, 2], [-3, 1, -1]]);
// minimumTotal([[-1], [2, 3], [1, -1, -3]]);
// console.log(ans2);
// const ans3 = minimumTotal([[-10]]);
