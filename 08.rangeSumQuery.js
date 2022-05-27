/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let sum = 0
    for (let i = left; i <= right; i++) {
        sum += this.nums[i]
    }
    return sum
}

const obj = new NumArray([-2, 0, 3, -5, 2, -1])
obj.sumRange(0, 2)
obj.sumRange(2, 5)
obj.sumRange(0, 5)

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */