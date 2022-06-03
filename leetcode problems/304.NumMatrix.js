class NumMatrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  sumRegion(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        sum += this.matrix[i][j];
      }
    }
    console.log(sum);
    return sum;
  }
}

const obj = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

obj.sumRegion(2, 1, 4, 3);
obj.sumRegion(1, 1, 2, 2);
obj.sumRegion(1, 2, 2, 4);

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
