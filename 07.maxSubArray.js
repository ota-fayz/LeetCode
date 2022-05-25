/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSubArray([1])
maxSubArray([5, 4, -1, 7, 8])