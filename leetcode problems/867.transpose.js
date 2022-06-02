/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// var transpose = function (matrix) {
//     const n = matrix.length // row
//     const m = matrix[0].length // column
//     let ans = new Array(m)
//     for (let i = 0; i < ans.length; i++) {
//         ans[i] = new Array(n)
//     }
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (i === j) {
//                 ans[i][j] = matrix[i][j]
//             } else {
//                 ans[j][i] = matrix[i][j]
//             }
//         }
//     }
//     console.log(ans)
//     return ans
// }

var transpose = function (matrix) {
    return matrix[0].map((_, i) => matrix.map(b => b[i]))
}

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(transpose([[1, 2, 3], [4, 5, 6]]))
