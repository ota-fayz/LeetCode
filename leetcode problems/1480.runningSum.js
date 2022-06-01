/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const ans = []
    let sum = 0
    nums.map((elem) => {
        sum += elem
        ans.push(sum)
    })
    return ans
}

runningSum([1, 2, 3, 4])
runningSum([1, 1, 1, 1, 1])
runningSum([3, 1, 2, 10, 1])