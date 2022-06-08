// class NumMatrix {
//   constructor(matrix) {
//     this.matrix = matrix;
//   }
//
//   sumRegion(row1, col1, row2, col2) {
//     let sum = 0;
//     for (let i = row1; i <= row2; i++) {
//       for (let j = col1; j <= col2; j++) {
//         sum += this.matrix[i][j];
//       }
//     }
//     console.log(sum);
//     return sum;
//   }
// }

// class NumMatrix {
//     constructor(matrix) {
//         const n = matrix.length, m = matrix[0].length
//
//         for (let i = 0; i < n; i++) {
//             for (let j = 1; j < m; j++) {
//                 matrix[i][j] += matrix[i][j - 1]
//             }
//         }
//
//         for (let i = 1; i < n; i++) {
//             for (let j = 0; j < m; j++) {
//                 matrix[i][j] += matrix[i - 1][j]
//             }
//         }
//
//         this.matrix = matrix
//     }
//
//     sumRegion(row1, col1, row2, col2) {
//         const matrix = this.matrix
//         const total = matrix[row2][col2]
//         const external = matrix[row1 - 1][col2] && matrix[row1 - 1][col2]
//         // const external = matrix[row1 - 1][col2] + matrix[row2][col1 - 1] - matrix[row1 - 1][col1 - 1]
//         return total - external
//     }
//
// }

class NumMatrix {
    constructor(matrix) {
        let n = matrix.length + 1, m = matrix[0].length + 1

        this.dp = Array.from({length: n}, () => new Array(m).fill(0))

        for (let i = 1; i < n; i++) {
            for (let j = 1; j < m; j++) {
                this.dp[i][j] = matrix[i - 1][j - 1] + this.dp[i][j - 1]
            }
        }

        for (let i = 1; i < n; i++) {
            for (let j = 1; j < m; j++) {
                this.dp[i][j] += this.dp[i-1][j]
            }
        }

        //Using one loop
        // for (let i = 1; i < n; i++)
        //     for (let j = 1; j < m; j++)
        //         this.dp[i][j] = matrix[i-1][j-1] + this.dp[i-1][j] + this.dp[i][j-1] - this.dp[i-1][j-1]

    }

    sumRegion(row1, col1, row2, col2) {
        const dp = this.dp
        return dp[row2 + 1][col2 + 1] - dp[row1][col2 + 1] - dp[row2 + 1][col1] + dp[row1][col1]
    }
}

const obj = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
])

const param1 = obj.sumRegion(2, 1, 4, 3)
const param2 = obj.sumRegion(1, 1, 2, 2)
const param3 = obj.sumRegion(1, 2, 2, 4)
console.log(param1)
console.log(param2)
console.log(param3)

// const obj = new NumMatrix([
//     [-1]
// ])
//
// const param1 = obj.sumRegion(0, 0, 0, 0)
// console.log(param1)


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
